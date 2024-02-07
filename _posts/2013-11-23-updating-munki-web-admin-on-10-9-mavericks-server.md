---
title: Updating Munki Web Admin on 10.9 Mavericks Server
author: Jon
excerpt: 'If your a fan and a user of MUNKI then you know what a great product it is and what community is behind it. Its backed by some of the largest companies around *(Disney, Google, etc..) and has consistently worked with all versions of OSX that have been around since Munki was created. The Munki client and admin tools requires Python 2.5 or higher with Objective-C Python bindings, which is included by default in Mac OS X. Munki is supported on Leopard through Mavericks. '
layout: post
permalink: /blog/updating-munki-web-admin-on-10-9-mavericks-server/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - casper-munki
  - osx-system-administration
tags:
  - admin
  - munki
  - update
  - upgrade
  - web
---
If your a fan and a user of MUNKI then you know what a great product it is and what community is behind it. Its backed by some of the largest companies around *(Disney, Google, etc..) and has consistently worked with all versions of OSX that have been around since Munki was created. The Munki client and admin tools requires Python 2.5 or higher with Objective-C Python bindings, which is included by default in Mac OS X. Munki is supported on Leopard through Mavericks. 

Many third party utilities have been created to work along side Munki to augment the ability to manage inventory and other aspects of Munki such as software reporting, software licensing escrow, and machine tracking. One of the best utilities has been Munki Web Admin. A great walkthrough can be found on setting up Munki Web Admin on an OSX Server here https://code.google.com/p/munki/wiki/MunkiWebAdminOSXSetup but very little documentation exists on how to update your current installation to run effectively on Mavericks.

If your like me then you have updated your Mavericks server only to find that your old instance of Munki Web Admin no longer works. To fix this you must update your django and other components that make Munki Web Admin run.

Upgrading an existing install is not too difficult if you are using virtualenv and git (as recommended), Here&#8217;s what I did to upgrade my production instance:

cd into the virtualenv directory containing Munki Web Admin

{% highlight bash %}
cd /Volumes/munki/munkiwebadmin_env/
{% endhighlight %}

Activate the virtualenv (requires bash shell):

{% highlight bash %}
source bin/activate
{% endhighlight %}

Stop the MWA server process. In my case, it&#8217;s run via launchd

{% highlight bash %}
launchctl unload /Library/LaunchDaemons/com.googlecode.munki.munkiwebadmin.plist
{% endhighlight %}

Upgrade django

{% highlight bash %}
pip install django==1.5.1 --upgrade
{% endhighlight %}

Upgrade django-wsgiserver

{% highlight bash %}
pip install django-wsgiserver==0.8.0beta --upgrade
{% endhighlight %}

Change into the munkiwebadmin dir

{% highlight bash %}
cd munki
{% endhighlight %}



Use git to update munkiwebadmin

{% highlight bash %}
git pull
{% endhighlight %}

Optional &#8212; you may want to edit settings.py to avoid some deprecation warnings:

  1. Comment out or remove the ADMIN\_MEDIA\_PREFIX line.
  2. Replace the entire LOGGING section with the one from the (upgraded) settings_template.py.

If you are not using django-wsgiserver, you may need to collect static files (doing this is harmless if you don&#8217;t actually need it):

{% highlight bash %}
python manage.py collectstatic
{% endhighlight %}

Make sure your database tables are updated:

{% highlight bash %}
python manage.py syncdb
{% endhighlight %}

Restart MunkiWebAdmin (again, in my case, using launchd)

{% highlight bash %}
launchctl load /Library/LaunchDaemons/com.googlecode.munki.munkiwebadmin.plist
{% endhighlight %}

Hopefully your upgrade process won&#8217;t be too different. One of the gotchas that I found to be a little daunting was that my launch daemon had to be re-chowned in order to be loaded properly.

{% highlight bash %}
sudo chown root /Library/LaunchDaemons/com.googlecode.munki.munkiwebadmin.plist
{% endhighlight %}

Once done I could restart my system and have it automatically launch!

