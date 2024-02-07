---
title: Installing MYSQL on OSX Lion Server
author: Jon
excerpt: It is a fact that Apple has migrated itself away from MYSQL. It is also a fact that most people who continue to buy Apple Servers have been using MYSQL for some time and have websites or other content that sill relies on this technology. Just because it is not endorsed or pre-configured by Apple however does not mean that it can not be used. On the contrary installing and configuring MYSQL to run on an OSX Lion server is moderately easy and gives greater insight as to how MYSQL works (If your a novice to intermediate MYSQL user like me). Lets get started with a brief walkthrough of how to install MYSQL on an OSX Lion Server.
layout: post
permalink: /blog/installing-mysql-on-osx-lion-server/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bug-fixes
  
  - osx-system-administration
tags:
  - mysql
  - OSX-Lion
  - server
  - solution
---
It is a fact that Apple has migrated itself away from MYSQL. It is also a fact that most people who continue to buy Apple Servers have been using MYSQL for some time and have websites or other content that sill relies on this technology. Just because it is not endorsed or pre-configured by Apple however does not mean that it can not be used. On the contrary installing and configuring MYSQL to run on an OSX Lion server is moderately easy and gives greater insight as to how MYSQL works (If your a novice to intermediate MYSQL user like me). Lets get started with a brief walkthrough of how to install MYSQL on an OSX Lion Server.

**Installation & Configuration**

1. Download and install the 64-bit 10.6+ version of MYSQL installer package together with the startup files [here][1].
2. Mount the Disk Image (I mean open/double-click the DMG file) and install MySQL server by double-clicking the PKG file (in my case mysql-5.5.14-osx10.6-x86_64.pkg) and follow onscreen instructions. ( It will ask for Master password, as it installs MySQL server in /usr/local )

Current latest version is 5.5.14 which I’ll be using to install on my server.

Open the DMG and you will see that the first item is the MySQL software, the 2nd item allows MySQL to start when the Mac is booted and the third is a System Preference that allows start/stop operation and a preference to enable it to start on boot. Run all of these.

Once the installs are done you can start the mysql server right from the System Preferences which has a new preference in the “Other” category called “MySQL” click start and now it is running. 

To find the MySQL version from the terminal, type at the prompt 

{% highlight bash %}
/usr/local/mysql/bin/mysql -v
{% endhighlight %}

If you got the error: ERROR 2002 (HY000): Can&#8217;t connect to local MySQL server through socket &#8216;/tmp/mysql.sock&#8217; 

then mysql was not started, go back to the System Preference and start the database.

## Run the following commands

{% highlight bash %}
cd /usr/local/mysql
cp /usr/local/mysql/support-files/my-small.cnf /private/etc/my.cnf
open -e /private/etc/my.cnf
{% endhighlight %}

replace &#8220;/tmp/mysql.sock&#8221; with &#8220;/var/mysql/mysql.sock&#8221; at two places near the top.  
Create a folder called &#8220;mysql&#8221; (if you don&#8217;t already have one) in the /var directory with the right permissions: 

{% highlight bash %}
cd /var
mkdir mysql
sudo chown -R mysql mysql 
sudo chmod 775 mysql
{% endhighlight %}

This command will circumvent the dreaded mysql 2002 socket error.

{% highlight bash %}
sudo mkdir /var/mysql
sudo ln -s /tmp/mysql.sock /var/mysql/mysql.sock
{% endhighlight %}

## Create your alias, this is important so that you can run MYSQL queries through the terminal.

{% highlight bash %}
alias mysql /usr/local/mysql/bin/mysql
alias mysqladmin /usr/local/mysql/bin/mysqladmin
{% endhighlight %}

optionally you can edit the ~/.profile file to make your aliases (This should be done as root)

{% highlight bash %}
pico ~/.profile
{% endhighlight %}

then add this line below

{% highlight bash %}
export PATH=/usr/local/mysql/bin:$PATH
{% endhighlight %}

*Please note /usr/local/mysql is only symlink to /usr/local/mysql-5.5.14-osx10.6-x86_64 which means when you upgrade to new version symlink will be changed to point to new version but won’t be deleting the older version. However you need to copy your data directory to new location to make sure your existing databases are intact post upgrade.

## Set the master MYSQL password, there are 2 ways to do this one is a regular way and the other provides additional security and disables all other access

**Regular Way**

{% highlight bash %}
mysqladmin -u root password 'yourpasswordhere'
{% endhighlight %}

** use the single quotes. Then when login to mysql to test your password

{% highlight bash %}
mysql -u root -pyourpasswordhere
{% endhighlight %}

**Secure Way**

{% highlight bash %}
sudo mysql_secure_installation
{% endhighlight %}


NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MySQL
SERVERS IN PRODUCTION USE! PLEASE READ EACH STEP CAREFULLY!
In order to log into MySQL to secure it, we'll need the current
password for the root user. If you've just installed MySQL, and
you haven't set the root password yet, the password will be blank,

so you should just press enter here.

Enter current password for root (enter for none):

Go ahead and just hit enter if this is a new installation and no password currently exists, follow the prompts to set up a new root password – this is a root password just for mysql separate from the root password of OS X you should set this.

You also get asked about:

  * Removing anonymous users? 
  * Disallow root login remotely? 
  * Remove test database and access to it? 
  * Reload privilege tables now? 
  * If this is a new installation you can just answer yes to the questions.
  
  
Once the root user and password is set, you have to interact with mysql with the username and password, so access via command line is (note that there is no space between -p and the password)

{% highlight bash %}
mysql -u root -p[password]
{% endhighlight %}

Now that you have MYSQL running you need to start an instance or a main profile for MYSQL to run. I have found the easiest way to do this is to install PHPMYADMIN and since most people in my opinion (Again novice to intermediate MYSQL user here) use this great tool to navigate around MYSQL on a daily basis. Here is a brief walkthrough on how to install and configure PHPMYADMIN on 10.7 Lion Server

**Installation & Configuration**

Change the socket location in your PHP configuration by editing the php.ini file. You need to do a search and replace here. Search and replace all instances of 

/var/mysql/mysql.sock

with 

/tmp/mysql.sock

Once done you should be able to run the following command and it should reflect the new updated values you just applied.

{% highlight bash %}
grep .default_socket /etc/php.ini
{% endhighlight %}

while editing the php.ini file you need to comment out or enable the following extensions.

extension=php_mysql.dll  
extension=php_mysqli.dll

To check your work again you can run this command to ensure they are enabled.

{% highlight bash %}
grep mysql /etc/php.ini|grep ext
{% endhighlight %}

Once done restart Apache

{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

## Download PHPMYADMIN to the default web directory in Lion

https://www.phpmyadmin.net/home_page/index.php

The full path is

/Library/Server/Web/Data/Sites/Default

I put my PHPMYADMIN in a folder called PHP so

/Library/Server/Web/Data/Sites/Default/PHP

and I could then browse to it by going to

https://server.domain.name/PHP/

this is assuming that you have already configured or turned on web services which I will not go into here since it is a very basic step. I will write a more in depth article and how to on the complexities of running an 10.7 web server in the future however.

Run this command on the PHP Config folder

{% highlight bash %}
chmod o+w /Library/Server/Web/Data/Sites/Default/PHP/config
{% endhighlight %}

## Now we are ready to run the set up by going to

https://localhost/PHP/setup

The new server to be configured is the localhost, click new server and then the only other configurations are the local mysql user and the password.

Add in the username, by default “root” is assumed, add in the password, click on save and you are returned to the previous screen.

Make sure you click on save, then a config.inc.php is now in the /config directory, move this file to the root level of /phpmyadmin and then remove the empty /config directory.

Now going to https://localhost/PHP/ will now allow you to interact with your mysql databases.

I hope that you all found this article and walkthrough educational, as always please feel free to interact with me by posting questions and comments and I will answer them as best as I can. If you feel like any of this is wrong or could be improved upon also please leave a comment below, thanks!



 [1]: https://dev.mysql.com/downloads/mysql/