---
title: '10.7 Server Web Administration: Missing Manual'
author: Jon
excerpt: I just started using 10.7 Lion Server at my organization and I have to admit it is nice in some ways and infuriating in others. Apple has certainly fixed and introduced quite a few new features such as Profile Manager but have removed features like Mobile Access. The hardest hit service in my opinion when it comes to 10.7 server administration is the Web service. Apple has stripped this service completely out of the Server Admin app and has added a dumbed down version of the service to the Server app. If your unfamiliar the Server app is a program called "Server" that has the worst possible GUI interface and the least possible settings for all services that run through it which is a shame.
layout: post
permalink: /blog/10-7-server-web-administration-missing-manual/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - osx-system-administration
tags:
  - 10.7
  - manual
  - OSX-Lion
  - server
  - solution
  - web
---
I just started using 10.7 Lion Server at my organization and I have to admit it is nice in some ways and infuriating in others. Apple has certainly fixed and introduced quite a few new features such as Profile Manager but have removed features like Mobile Access. The hardest hit service in my opinion when it comes to 10.7 server administration is the Web service. Apple has stripped this service completely out of the Server Admin app and has added a dumbed down version of the service to the Server app. If your unfamiliar the Server app is a program called &#8220;Server&#8221; that has the worst possible GUI interface and the least possible settings for all services that run through it which is a shame.

The purpose of this entry is to talk about 10.7 server and show you how to accomplish everything that you could accomplish from the Server Admin application through commands using terminal or edits to system files in the operating system. Everything below requires that you be logged in as the root user on the server in order to avoid permission issues.

**How to enable PHP **  
Run this command to check if PHP is enabled on 10.7 server. 

{% highlight bash %}
cat /etc/apache2/httpd.conf|grep libphp5.so
{% endhighlight %}

If the output is 

{% highlight bash %}
LoadModule php5_module libexec/apache2/libphp5.so
{% endhighlight %}

and not 

{% highlight bash %}
#LoadModule php5_module libexec/apache2/libphp5.so
{% endhighlight %}

then PHP is enabled. If it is the other way around with a # in the beginning of the line you can just edit the httpd.conf file manually with 

{% highlight bash %}
sudo pico /etc/apache2/httpd.conf 
{% endhighlight %}

and remove the bracket manually and then restart the web server with

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

Alternatively you can also enable this via a checkbox in the terrible server.app in 10.7.

**How to change the default file type **  
By default the landing page on all new sites is index.html if you would like to change this or the order in which a webpage searches for the index page then you need to change the default file type.

To do this edit the configuration file appropriate to your site name. Meaning you have to have already configured a site in the 10.7 server.app program once you have a site then you need to edit the site configuration file. If your site was called apple.com then your site configuration would be in /etc/apache2/sites/apple.com.conf or something like that.

You need to edit that file

{% highlight bash %}
pico /etc/apache2/sites/nameofyoursite.conf
{% endhighlight %}

look for the following in the file

{% highlight bash %}
<IfModule mod_dir.c>
    DirectoryIndex index.html
</IfModule>
{% endhighlight %}

If you want to change the main page to index.php instead of index.html then replace index.html with index.php. If you want to add it as a secondary load page then you can change it to this.

{% highlight bash %}
<IfModule mod_dir.c>
    DirectoryIndex index.html index.php
</IfModule>
{% endhighlight %}

once done save and restart apache.

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

**How to enable .htaccess **  
If you are going to be using mod_rewwrite at all for redirects or pretty permalinks (which is very common now) then you need to have this enabled. Again as stated before you have to have a site setup on the server through the server.app program. Once done locate your configuration file as outlined above and make the following changes.

{% highlight bash %}
pico /etc/apache2/sites/nameofyoursite.conf
{% endhighlight %}

Once your in the file look for something that looks similar to the following.

{% highlight bash %}
<Directory "/Users/yourname/Sites/">
     Options Indexes +MultiViews
     AllowOverride All
     Order allow,deny
     Allow from All
</Directory>
{% endhighlight %}

It won&#8217;t look exactly the same but what you want to do is replace it with what you see above that will enable the .htaccess or mod_rewrite the line of code that actually does this is the &#8220;AllowOverride All&#8221; command. 

**How to enable WebDav**  
To configure WebDAV Sharing for such users, follow these instructions before enabling any WebDAV share points.

Note: The instructions in this article include editing configuration files. You must have root access to edit these files. You should make a backup copy of each file prior to editing it.

This step is optional but highly recommended: Acquire and install a trusted SSL certificate, and use Server App to configure Web Service to use the certificate. You can use the server&#8217;s default, self-signed certificate for WebDAV Sharing, but iWork and other applications may warn that the certificate is &#8220;invalid&#8221;.

You need to edit the following configuration file

{% highlight bash %}
pico /etc/apache2/httpd_webdavsharing.conf
{% endhighlight %}

Find the line &#8220;AuthType Digest&#8221; change Digest to Basic. This makes WebDAV Sharing use Basic authentication, which is required for Active Directory users.

Now edit this configuration file

{% highlight bash %}
pico /etc/apache2/webapps/com.apple.webapp.webdavsharing.plist
{% endhighlight %}

find these lines

{% highlight bash %}
<key>sslPolicy</key>
<integer>0</integer>
{% endhighlight %}

Change the 0 to 1. This makes WebDAV Sharing require SSL, which is the only secure way to use Basic authentication. Advise users to configure the iWork clients on their iOS devices with an &#8220;https&#8221; WebDAV URL, like: https://example.com/webdav

**How to enable the directory listing **  
Again as stated before you have to have a site setup on the server through the server.app program. Once done locate your configuration file as outlined above and make the following changes. 

You need to edit that file

{% highlight bash %}
pico /etc/apache2/sites/nameofyoursite.conf
{% endhighlight %}

find the words &#8220;AllowOverride&#8221; in that block where these words are you need to add this line. This line may already be in your file but it may be different simply update it to reflect these changes

{% highlight bash %}
Options -Indexes FollowSymLinks
{% endhighlight %}

**How to enable SSI**  
If you need to use Server Side Includes in your scripts or website files then do the following to enable it.

{% highlight bash %}
sudo pico /etc/httpd/httpd.conf
{% endhighlight %}

look for these lines

{% highlight bash %}
# AddType text/html .shtml
# AddHandler server-parsed .shtml
{% endhighlight %}

Uncomment those 2 lines (remove the # in front of each of them). Now look in the same file for the following

{% highlight bash %}
Options FollowSymLinks
{% endhighlight %}

Add &#8220;Includes&#8221; to the 2nd line so it looks like

{% highlight bash %}
Options FollowSymLinks Includes
{% endhighlight %}

save the file and restart apache

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

**How to enable VHOSTS**  
VHOSTS or Virtual Hosts enable you to have multiple domain names mapped to the same site or IP address. To enable this edit the httpd.conf file

{% highlight bash %}
sudo pico /etc/apache2/httpd.conf 
{% endhighlight %}

find this line

{% highlight bash %}
#Include /private/etc/apache2/extra/httpd-vhosts.conf
{% endhighlight %}

change it to

{% highlight bash %}
Include /private/etc/apache2/extra/httpd-vhosts.conf
{% endhighlight %}

this will effectively enable VHOSTS. Now you should restart apache.

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

**How to enable CGI**  
Again as stated before you have to have a site setup on the server through the server.app program. Once done locate your configuration file as outlined above and make the following changes.

{% highlight bash %}
pico /etc/apache2/sites/nameofyoursite.conf
{% endhighlight %}

Once your in the file look for something that looks similar to the following.

{% highlight bash %}
Options Indexes +MultiViews
{% endhighlight %}

It won&#8217;t look exactly the same but what need to do is add &#8220;-ExecCGI&#8221; after &#8220;+MultiViews&#8221; it should look something like this.

{% highlight bash %}
Options Indexes +MultiViews -ExecCGI
{% endhighlight %}

This will enable CGI and allow you to run CGI scripts in Apache. Now you should restart apache.

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

**How to enable Logging**  
This one boggled my mind, by default website logging is not enabled and again there is no way to enable it in the GUI. You will want to have this enabled to catch errors and fix faulty code. To enable this again we are assuming you already have a site configured with the server.app program. Once done locate your configuration file as outlined above and make the following changes.

{% highlight bash %}
pico /etc/apache2/sites/nameofyoursite.conf
{% endhighlight %}

find the line &#8220;DocumentRoot&#8221;, Under that line paste the following

{% highlight bash %}
CustomLog "/var/log/apache2/access_log" combinedvhost
ErrorLog "/var/log/apache2/error_log"
{% endhighlight %}

it should now look like this

{% highlight bash %}
DocumentRoot "/path/to/your/website/"
CustomLog "/var/log/apache2/access_log" combinedvhost
ErrorLog "/var/log/apache2/error_log"
{% endhighlight %}

Now you should restart apache.

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

**How to add a domain alias**  
This is a common thing that most web admins do to map domains to a single site. This again has been removed from the functionality of the server.app on 10.7 server but is a pretty easy to add. To enable this again we are assuming you already have a site configured with the server.app program. Once done locate your configuration file as outlined above and make the following changes.

{% highlight bash %}
pico /etc/apache2/sites/nameofyoursite.conf
{% endhighlight %}

in the site definition file, look for a line that says

{% highlight bash %}
ServerName example.com
ServerAlias www.example.com
{% endhighlight %}

where example.com is the domain of your site. You can have more than one alias, just separate them by a spaces on the same line like so.

{% highlight bash %}
ServerName example.com
ServerAlias www.example.com alias2.example.com alias3.example.com
{% endhighlight %}

Now you should restart apache.

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

**How to restore factory settings to 10.7 Web Service**  
This one is important. As stated above you should be backing up these config files before you edit them and then making your changes. In the event that something went wrong you can always reset them back to the original settings. 

Run this command

{% highlight bash %}
sudo serveradmin command web:command=restoreFactorySettings
{% endhighlight %}

I got this command by calling Apple directly they also suggested restarting the machine after the restore command, once the computer is back up turn off and then turn on web service to ensure it is working propperly.

**Conclusion**  
All of these commands allow you to leverage Apache and accomplish the tasks that were once easy to accomplish with the Server Admin tool in 10.6 server. There are two options here, learn to love the command line or do not upgrade to 10.7 Lion. Apple is streamlining their GUI interfaces for their tools however there is still power under the hood. Do not be afraid to re-configure these systems Apache, PHP and MYSQL can be installed, modified and improved all from the command line and in some cases they work better after you do. Its not time to quit in my opinion its time to roll up our sleeves and start learning the core of what makes an OSX server truly great and that starts with understanding the open source software that comes bundled with them.

I hope that you all found this article and walkthrough educational, as always please feel free to interact with me by posting questions and comments and I will answer them as best as I can. If you feel like any of this is wrong or could be improved upon also please leave a comment below, thanks!

