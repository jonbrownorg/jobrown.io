---
title: 10.6.8 Installing SSL Certificates Correctly
author: Jon
layout: post
permalink: /blog/10-6-8-installing-ssl-certificates-correctly/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/ssl.png
categories:
  
  - ssl-encryption
tags:
  - certificate
  - encryption
  - install
  - security
  - solution
  - ssl
---
I am well aware of how to install and setup SSL certificates in OSX Server but that was not always the case. I am writing this how to for those less experienced who may find this article helpful. There are two types of SSL certificates, that you can use on your OSX Server. Self Signed Certificates are ones that are created on the server and are not digitally verified by a third party service. You can use these certificates to encrypt or secure your servers services but you will ultimately confuse users due to the never ending string of warnings about untrusted certificates. The second type of certificate requires a self signed certificate as the base but then gets verified by a third party service. We use [GoDaddy][1] for our certificates and they work pretty well, there are many other services out there that offer moderately priced certificate verification services that will offer a trusted connection. This type of certificate is transparent to the user and simply encrypts the data without any warning message. 

What I struggled with for a while as a System Administrator with little experience in the SSL realm was that no matter how many ways I tried to install the certificate for use on my server users would still get warnings saying that the certificate was not trusted. Through some trial and error and luck I figured out the proper steps to making sure that all of your services and your users can use SSL without the heartache of untrusted warning messages. The steps to follow are simple:

1. Create your Self Signed certificate in Server Admin.  
2. Generate a CSR request.  
3. Import the CSR into the SSL Certificate authority.  
4. Import the returned signed certificate into your server.  
5. Import the returned intermediary certificate into your server.  
6. Configure Apache to work with your certificate.  
7. Restart and re-assign certificates to your services.

**Step 1:**  
Launch Server Admin and select the hostname of the server that you are configuring. Chose the Certificate icon to display the &#8220;Default&#8221; self-signed certificate. You&#8217;ll need to edit this to something appropriate for your server. It&#8217;s important that you set the &#8220;Common Name&#8221; field to the fully qualified domain A-name of your server. Once you&#8217;ve edited your self-signed Default certificate, you next need to generate the CSR.

**Step 2:**

In the same pane in Server Admin is the little sprocket pull-down with the option to &#8220;Generate a Certificate Signing Request (CSR)&#8230;&#8221;. A window will pull down with a field to enter an email address. Don&#8217;t bother with this. Just drag the certificate icon to your desktop. Sitting on on your desktop is a text clipping that looks like this: 

{% highlight bash %}
-----BEGIN CERTIFICATE REQUEST-----
MIIBnTCCAQYCAQAwXTELMAkGA1UEBhMCU0cxETAPBgNVBAoTCE0yQ3J5cHRvMRIw
EAYDVQQDEwlsb2NhbGhvc3QxJzAlBgkqhkiG9w0BCQEWGGFkbWluQHNlcnZlci5l
eGFtcGxlLmRvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAr1nYY1Qrll1r
uB/FqlCRrr5nvupdIN+3wF7q915tvEQoc74bnu6b8IbbGRMhzdzmvQ4SzFfVEAuM
MuTHeybPq5th7YDrTNizKKxOBnqE2KYuX9X22A1Kh49soJJFg6kPb9MUgiZBiMlv
tb7K3CHfgw5WagWnLl8Lb+ccvKZZl+8CAwEAAaAAMA0GCSqGSIb3DQEBBAUAA4GB
AHpoRp5YS55CZpy+wdigQEwjL/wSluvo+WjtpvP0YoBMJu4VMKeZi405R7o8oEwi
PdlrrliKNknFmHKIaCKTLRcU59ScA6ADEIWUzqmUzP5Cs6jrSRo3NKfg1bd09D1K
9rsQkRc9Urv9mRBIsredGnYECNeRaK5R1yzpOowninXC
-----END CERTIFICATE REQUEST-----
{% endhighlight %}

**Step 3:**  
Here is where you will actually purchase the certificate. Head over to [GoDaddy][1] or any other vendor that sells SSL certificates and enter your information. When it asks you for your CSR enter the text in your text clipping. Be sure to include the &#8220;&#8212;BEGIN CERTIFICATE REQUEST&#8230;&#8212;&#8221; and &#8220;&#8212;END&#8230;&#8212;&#8221; lines! Once your certificate request has been verified you will be ready to proceed to the next step.

**Step 4:**  
Usually within a couple hours, you should get an email with your new SSL certificate. The email will come with instructions, but if you have a stock Snow Leopard Server, it might be better to do it &#8220;the Mac way&#8221; instead of using their generic Apache instructions.

Back in Server Admin, select that self-signed certificate you edited earlier in Step 1, go to that little sprocket thing again, and this time choose &#8220;Add Signed or Renewed Certificate from Certificate Authority&#8230;&#8221;. You&#8217;ll have a window drop down&#8211;drag and drop all of the .crt files you got from your SSL provider here. That&#8217;s your signed certificate. Server Admin will put all the parts where they belong.

**Step 5:**  
Here is where most inexperienced Server Admins stop, this is not the last step. The certificate is valid in Server Admin however, it relies on the Keychain in the OSX Server to validate requests. Open Keychain Access, you&#8217;ll see that it says (in red letters) &#8220;This certificate was signed by an unknown authority.&#8221; You need add the intermediary certificate to your server. To do so double click on the gd_intermediate.crt file and it should automatically update that certificate to a nice green color and render it as valid.

**Step 6:**  
Now that you have Server Admin configured and the Keychain is happy, you need to add the gd\_bundle.crt file and configure Apache. This is less daunting then you might think. You should get a gd\_bundle.crt file when you purchase your certificate. If you have a .crt file that has the word &#8220;Bundle&#8221; somewhere in it then this is the file you need to use. Copy this file to the /etc/apache2/ folder on your server. You will need to copy it as root! If your file is named gd_bundle.crt then copy and replace the one that exists on your server. Once done your finished with this step.

If your file is not named this way then copy the file into your /etc/apache2/ folder and modify the http.conf file located there and update this path, see below:

{% highlight bash %}
<IfModule mod_ssl.c>
    SetEnvIf User-Agent ".*MSIE.*" nokeepalive ssl-unclean-shutdown
    SSLPassPhraseDialog exec:/etc/apache2/getsslpassphrase
    SSLSessionCache shmcb:/var/run/ssl_scache(512000)
    SSLSessionCacheTimeout 300
    SSLMutex file:/var/log/apache2/ssl_mutex
    SSLRandomSeed startup builtin
    SSLRandomSeed connect builtin
    AddType application/x-x509-ca-cert crt
    AddType application/x-pkcs7-crl crl
    SSLCertificateChainFile /etc/apache2/the_name_of_your_ssl_bundle_file.crt
</IfModule>
{% endhighlight %}

After saving httpd.conf, test out your Apache 2.2 configuration file by invoking this command.

{% highlight bash %}
bash-3.2# apachectl -t
Syntax OK
{% endhighlight %}

**Step 7:**  
This last step is the one that had me banging my head against a wall for the longest time. You must restart your server once done, you must go through all of the services running on your server and un-assign, save and then re-assign and save the SSL certificates you need. This is the only way that I was able to get my Mail service and Web services (web sites) working with SSL consistently. Once done another restart does not hurt. Test and verify that everything is working. 

I really hope that you find this walkthrough useful. If you did please leave a comment below, post a question or suggest a better, easier or different way to manage and install SSL certificates on an OSX Server.



 [1]: https://www.godaddy.com/ssl/ssl-certificates.aspx