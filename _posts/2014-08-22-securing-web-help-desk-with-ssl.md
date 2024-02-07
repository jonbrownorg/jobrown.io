---
title: Securing Web Help Desk with SSL
author: Jon Brown
layout: post
permalink: /blog/securing-web-help-desk-with-ssl/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: "Securing Web Help Desk with SSL"
categories:
  - product-reviews
  - ssl-encryption
tags:
  - helpdesk
  - linux
  - redhat
  - solarwinds
  - ssl
  - web
  - popular
---
After reading the [Solarwinds WHD SSL Guide][1] it was not obvious to me how to properly secure WebHelpDesk and so after many hours of trying different things, with some help from this guide, I will be demonstrating the ssl recipe that worked for me.

At my company we already had a proper SSL certificate so I was able to skip a good third of the pdf that discusses in detail the proper way to generate the CSR and to create the certificate. WebHelpDesk recommends the use of a program called Portecle a java based utility that takes your certificates and creates a java keystore (.JKS). This is the file that actually secures Web Help Desk. 

These instructions assume that you are securing and creating the .JKS file from an OSX computer. If you have not yet obtained a certificate for your server, you should use Porteclé to generate both a keypair and a CSR to send to the CA. You should then to import the CA Reply certificate. If you already have a certificate, you must import both the certificate and the primary key into the keystore. Porteclé does not allow you to import a primary key by itself, so you must combine it with its certificate in a PKCS#12 file (\*.p12 or \*.pfx). In each case, the keypair must be aliased as “tomcat,” and both it and the keystore must be protected by the password specified with the KEYSTORE_PASSWORD setting in whd.conf.

We will be assuming that like me you already have an SSL certificate that you want to use, most companies have a wildcard certificate that they can re-use on different servers, since this is reusable you wouldn’t want to generate a new CSR each time which is what you would do if you were using a normal domain level SSL certificate. 

**Importing an Existing Certificate**

Step 1: Creating a PKCS#12 Keystore File from a Private Key and a Certificate

The first thing you need to do is combine the certificate with the intermediate file. The best way to do this is to use the following command. 

{% highlight bash %}
cat /Users/jbrown/Desktop/ssl/cert.pem /Users/jbrown/Desktop/ssl/intermediate.pem > key.pem
{% endhighlight %}

once done run this command to generate the PKCS#12 file

{% highlight bash %}
openssl pkcs12 -export -in /Users/jbrown/Desktop/ssl/cert.pem -inkey /Users/jbrown/Desktop/ssl/key.pem -name 'tomcat' -out keystore.p12
{% endhighlight %}

You will be prompted to provide a password for the new keystore, which you will need to provide when importing the keystore into the Web Help Desk Java keystore.

WebHelpDesk uses Tomcat so its important to use that as the name (tomcat) as that is what the system is expecting when parsing the final .JKS file. 

Step 2: Download Portecle for Mac

<https://Maciej.hell.cx/projects/portecle> this is Portecle, it comes down as a .jar file and requires Java to run (Java 1.6+) so be sure that you have it installed on your Mac. When you open Portecle you would choose new Keystore and then choose .JKS. Once done you would import your final key pair that we just generated. 


NOTE: If your keystore already contains a default, unsigned ‘tomcat’ certificate, delete it before importing your PKCS#12 file.

Thats it, once done upload the .JKS file to your WHD conf folder and change the path in your whd.conf file to point to the proper file and make sure the password you chose in the above step matches the one you chose for the keystore. 

Parts of this walkthrough were taken from the Solarwinds SSL PDF, the point of this is to simplify the setup process for those who may feel that the document is over complex for their needs as it goes over so many different scenarios. I find that since most people use wildcard certs this would be a simpler walkthrough that goes through the steps in the proper order. 

Portecle for Mac was my biggest stumbling block, the document talks about opening Portecle but doesn’t really outline how that works with all the different versions. WHD has Windows, RedHat and Mac versions and while you can trigger the .jar file to open the program you first need to have it installed.



 [1]: https://www.solarwinds.com/documentation/WebHelpDesk/docs/WHDSSL.pdf
