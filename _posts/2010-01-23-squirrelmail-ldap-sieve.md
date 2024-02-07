---
title: '10.6.2 Squirrelmail, LDAP &#038; Sieve'
author: Jon
layout: post
permalink: /blog/squirrelmail-ldap-sieve/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/add.png
categories:
  - mail-server
  - osx-system-administration
tags:
  - ldap
  - roundcube
  - rules
  - server
  - side
  - sieve
  - squirrelmail
---
Snow Leopard 10.6 comes with built in Server Side rules (Sieve) that helps you to organize mail, if your like me and am supremely disappointed at the lack of functionality then you will be happy to know that there are alternatives out there. Snow Leopard still ships with a copy of Squirrel mail for OSX it also ships with many cool plugins for squirrel mail already installed. Lets look at the alternative to the built in Sieve scripts that ship with 10.6 Snow Leopard server.

To start with you must enable Sieve on your server to do this, start Server Admin, Mail > Settings > Advanced: Tick &#8220;PLAIN&#8221; on IMAP/POP and save it. Mail > Settings > Filters: Tick &#8220;Enable Server Side mail rules&#8221;, save it and restart the mail service. once your done here you will be able to use the built in web based interface for handling server side rules. However you can also install your own!

SquirrelMail is the default webmailer in SLS. You can use the plugin avelsieve to manage server side mail rules. Download avelsieve (I recommend version 1.9.9) and unpack in directory /usr/share/squirrelmail/plugins (so that directory avelsieve is within the plugins dir).

Note that you also need to download javascript\_libs plugin, if you use a recent version (>=1.9.8) of avelsieve. If you need the javascript\_libs plugin, also unpack it in squirrelmail&#8217;s plugins dir. Then edit the file plugins/avelsieve/config/config.php (copy config_sample.php to config.php if not exisiting).

Change the authentication mechanism to

{% highlight bash %}
$sieve_preferred_sasl_mech = 'PLAIN';{% endhighlight %}

Edit file /usr/share/squirrelmail/config/config.php and register the plugin(s)

{% highlight bash %}
$plugins[0] = 'avelsieve'; $plugins[1] = 'javascript_libs'; //{% endhighlight %}

only if using a newer version of avelsieve. See avelsieve page Access the Webmailer (https://<SLS\_server\_name>/webmail/ and check the filter connection.

**SquirrelMail** is the default webmailer in SLS. You can use the plugin avelsieve to manage server side mail rules. Download avelsieve (I recommend version 1.9.9) and unpack in directory /usr/share/squirrelmail/plugins (so that directory avelsieve is within the plugins dir).Note that you also need to download javascript\_libs plugin, if you use a recent version (>=1.9.8) of avelsieve.If you need the javascript\_libs plugin, also unpack it in squirrelmail&#8217;s plugins dir.

Then edit the file plugins/avelsieve/config/config.php (copy config_sample.php to config.php if not exisiting).Change the authentication mechanism to  

{% highlight bash %}
$sieve_preferred_sasl_mech = 'PLAIN';{% endhighlight %}

Edit file /usr/share/squirrelmail/config/config.php and register the

{% highlight bash %}
plugin(s):$plugins[0] = 'avelsieve';$plugins[1] = 'javascript_libs'; //{% endhighlight %}

only if using a newer version of avelsieve. See avelsieve page Access the Webmailer (https://<SLS\_server\_name>/webmail/ and check the filter connection.

**Roundcube**: Sorrily Apple decided to use the old-fashioned, ugly SquirrelMail webmailer and not RoundCube. RoundCube is much nicer and also the &#8220;managesieve&#8221; plugin available for it is much better than avelsieve in SquirrelMail. Luckily you can install RoundCube on your SLS without harming the default installation.

Enable managesieve plugin ManageSieve plugin comes with RoundCube. To enable it, edit file roundcube/config/main.inc.php:

{% highlight bash %}
$rcmail_config['plugins'] = array('managesieve');{% endhighlight %}

Then edit file plugins/managesieve/lib/Net/Sieve.php comment line

{% highlight bash %}
var $supportedAuthMethods=.... (comment with //){% endhighlight %}

uncomment line

{% highlight bash %}
var $supportedAuthMethods=array( 'PLAIN' , 'Login' );{% endhighlight %}

**Set timezone:**

{% highlight bash %}
date.timezone = Europe/Berlin{% endhighlight %}

Now test roundcube by accessing https:///roundcube/ Login as a user you like to change server side rules for. Click on &#8220;Settings&#8221; in the upper right corner, then on Filter. If you see the page and no error occurs, you are successfully connected to the sieve backend of IMAP! You now can create your rules.

The good thing is, that every rule managing application (Apple web rule management, SquirrelMail, RoundCube) you use, store its own file. So one app is not overwriting the others config file. This is of importance if you enable the apple built-in crippled rule management and store the rules, there. This creates an own file &#8220;wiki\_server\_rules.sieve&#8221; in your sieve script dir and enables it by the link dovecot.sieve -> wiki\_server\_rules.sieve

