---
title: '10.6.2 Migrate Wiki Server &#038; DNS'
author: Jon
layout: post
permalink: /blog/10-6-2-migrate-dns-wiki-server/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/xserve.png
categories:
  - dns-settings
  
  - wiki-server
tags:
  - dns
  - migrate
  - wiki
---
While migrating our servers services from 10.5 to our 10.6.2 production server one of the easiest migrations that I had found was to migrate the 10.5 Wiki. Simply copying files and making sure that the permissions remain in tact are really all you need. 

However in 10.6.2 there is a detachment from the way you authenticate. You create access for each blog based on the settings in the web interface rather than in Workgroup Manager. This threw me off a bit the first time due to the fact that I had already had our previous wiki server split up into groups using workgroup manager. 

Here is how I migrated our wiki, the default directory for wiki and blogs on 10.5 and 10.6 is 

{% highlight bash %}
/Library/Collaboration
{% endhighlight %}

Inside that folder, you’ll find a Groups folder of interest. You’ll want to repeat the following procedure for each group:

{% highlight bash %}
sudo serveradmin stop teams
sudo mv <Group Folder from Backup> /Library/Collaboration/Groups/
sudo chown -R _teamsserver:_teamsserver /Library/Collaboration/Groups/<group_directory>
sudo rm /Library/Collaboration/dataVersion.plist
sudo rm /Library/Collaboration/globalIndex.db
sudo rm /Library/Application Support/Apple/WikiServer/directoryIndex.db
sudo serveradmin start teams
{% endhighlight %}

Once you complete those steps, you’ll need to login as an administrator and set the permissions for the wiki(s). 10.6 removes the privileges for wikis from Workgroup Manager and instead allows for security management via the wiki web interface.

Once we were done with the wiki, we had to migrate over DNS this was a little bit scary however retyping our DNS records was equally as scary. I decided to try to migrate the settings since it was sanctioned by Apple. 

Basically the first step was to stop DNS service on your Snow Leopard server. I then created a backup of my DNS config files that lived on my Snow Leopard server in the event that everything went bad. 

{% highlight bash %}
mkdir /var/backups/dns; cp -r /etc/dns /var/named /etc/named.conf /var/backupsdns
{% endhighlight %}
  
I then preceded to copy the following files and folders from Leopard server into the same locations on Snow Leopard Server

{% highlight bash %}
/etc/dns
/etc/named.conf
/var/named
{% endhighlight %}

Once done start DNS via the command line on Snow Leopard server 

{% highlight bash %}
sudo serveradmin start dns
{% endhighlight %}

Next I urge you if you are going to try this test, test, test, test and test again. I got it almost 100% however there are a few fields in the DNS settings in Server Admin that do not exist in 10.5 Server. Also I did notice that it messed up my FQDN&#8217;s in some places. Tell me your migration headache story, or lack thereof.

