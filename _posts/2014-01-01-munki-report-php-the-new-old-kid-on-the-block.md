---
title: Munki Report-PHP, the new old kid on the block
author: Jon
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: Munki Report-PHP, the new old kid on the block
excerpt: |
  In my organization we use Microsoft SCCM for managing Windows clients and Munki for managins OS X clients.

  I have used SCCM for a while now and have to say that I find it very very powerful. The fact that collects plenty of information from the clients, uploads it to a SQL db and keeps a history, plus the ability of create dynamic computer collections based on querys to the SQL and then target those groups with tasks makes it extremely useful in an enterprise environment. Plus the amazing reports you can get if you have an SQL guru around!
layout: post
permalink: /blog/munki-report-php-the-new-old-kid-on-the-block/
categories:
  - casper-munki
  - osx-system-administration
tags:
  - munki
  - munkireport
  - report
  - sql
---
In my organization we use Microsoft SCCM for managing Windows clients and Munki for managins OS X clients.

I have used SCCM for a while now and have to say that I find it very very powerful. The fact that collects plenty of information from the clients, uploads it to a SQL db and keeps a history, plus the ability of create dynamic computer collections based on querys to the SQL and then target those groups with tasks makes it extremely useful in an enterprise environment. Plus the amazing reports you can get if you have an SQL guru around!

> [ Source ][1] &#8211; Taken from the Munki Report Setup guide. This has been a hugely valuable tool in my arsenal of Mac Management. Posting this here to spread the awareness of this great tool. 

As any organization we try to treat the clients as homogenous as possible, regardless of the platform they run. This makes me move forward on the features/options that we have for OSX.

Now we are preparing reports from all computers to know who has administrator access to which machines. This is simple to do from the SCCM db, but we do not have this available for Mac.

I use Munki as the main deployment tool and MunkiReport-php to collect client information. The reports in there are very useful to track installations, computer locations based on networks, collect hardware details, licensed application installs.

**Setup**

[This is version 2 of munkireport-php][2], a reporting client for munki. The previous version of munkireport is still available on googlecode: munkireport-php. 

This project is a complete rewrite from the previous version, which was a quick-and-dirty port from the original python based munkireport [https://code.google.com/p/munkireport/].

The project is still a work-in-progress, although I&#8217;m using it in a production environment for quite some time now.

First setup the server &#8211; the clients use the server to pull down the installation scripts. 

**On the server**

Use git to checkout the latest version or download the zip file and put all files in the root directory of your website (for subdirs, see below).

Create config.php in the root directory of your website. Make sure it has at least in the top of the file. config.php overrides the settings in config_default.php. To configure, simply copy any settings over from config_default.php to config.php and make the changes there.

Check if the directory /app/db/ is writeable by the webserver (only when using sqlite)

Note that sqlite is the default, but mysql is also supported. check the config_default.php for the proper values if you wish to substitute a mysql database.

**Create the first user**

Visit the site with a webbrowser, you&#8217;ll be prompted to create a user and password  
Append the generated hash line to config.php

Now refresh the page in your browser, and you should be able to log in with the credentials you just created.  
No authentication

If you want to deploy munkireport without authentication (because you run your own authentication method), add the following line to config.php 

{% highlight bash %}
$conf['auth']['auth_noauth'] = array();
{% endhighlight %}
**Setting up a client manually**

Now you can setup a client to test if all is ok

{% highlight bash %}
sudo /bin/bash -c "$(curl -s https://example.com/index.php?/install)"
{% endhighlight %}

**Setting up clients with munki**

When the client reporting goes well, you can add a pkginfo file to munki:

Download the pkginfo file 

{% highlight bash %}
curl -s https://example.com/index.php?/install/plist -o MunkiReport.plist
{% endhighlight %}

Copy MunkiReport.plist into your Munki repository (in your pkgsinfo directory) Run makecatalogs, and be sure to add it to a manifest as well.

 [1]: https://github.com/munkireport/munkireport-php/blob/master/docs/setup.md "Source"
 [2]: https://github.com/munkireport/munkireport-php
