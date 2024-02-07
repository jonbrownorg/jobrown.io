---
title: '10.5.8 Server Upgrade : Mail'
author: Jon
layout: post
thumbnail: /assets/img/covers/cover-16.jpg
permalink: /blog/leopard-server-upgrade-mail-10-6-2/
img:
  - /blog/flyout/xserve.png
categories:
  - mail-server
  
  - osx-system-administration
tags:
  - mac
  - mail
  - osx
  - server
  - servers
  - upgrade
  - webmail
---
Recently I have undergone a massive change, we have decided at our organization to go with Snow Leopard server in place of our Leopard Servers. Knowing that this could be problematic to use Apples built in GUI for migrating data I decided to start with a 100% clean configured Snow Leopard server and slowly start to migrate items over to the new server. Our current Leopard Server was running an DNS, Open Directory Master, Mail, and Wiki Server services. I have decided to share my experience in migrating our mail from one server to another.

setup the 10.6.2 Snow Leopard server clean before I did anything I setup DNS on the server and manually retyped and rechecked all of the DNS records from the 10.5 server to the 10.6.2 server. Once I verified that the DNS records were set. I checked the server&#8217;s DNS by running sudo changeip -checkhostname and it came back clean. Great good to go, or so I thought.

I had setup split horizon DNS on the server, the Open Directory Master, has already been setup on a single use Mac Mini Server. The Mac Mini Server is running the ODM and DNS. The DNS on the Mini is self referencing and my router has the public ip mapped to the private. The new Mail server (10.6.2) also running DNS had a record pointing to the public ip of the ODM. Great, next step bind the mail server to the ODM so that I can start to migrate mail accounts.

I was working on this project around 10:00pm in the evening not knowing how long that it would take to migrate the accounts from Cyrus to Dovecot, but I had studied the Apple upgrade instructions for weeks prior so I felt like I had it totally under control. I followed the instructions and used the code from page 42 of the manual. 

{% highlight bash %}
bash-3.2$ sudo /usr/libexec/dovecot/migrate_mail_data.pl --moveMail 0 --cyrusBin "/Volumes/10.5 Server Volume Name/usr/bin/cyrus/bin" --database "/Volumes/10.5 Server Volume Name/var/imap" --sourceSpool "/Volumes/10.5 Server Volume Name/var/spool/imap" --targetSpool "/var/spool/imap/dovecot/mail"
{% endhighlight %}

The script will tell you if your doing something wrong, which is helpful. My biggest question was how long would it take to migrate 30GB of mail to the new mail server. The answer, exactly two hours. I had decided that instead of using a firewire cable to connect the two servers together that I would simply pop the HD out of the old mail server and put it into the new server. This made a huge difference in the time of migration.

Once it finished I turned on mail, and everything started working fine. Great! I cleaned up my tools and logged out of the server and went home around 2am. The next few days were pure hell. As mentioned above I decided to use split horizon DNS. It was my first attempt at doing this and what I had noticed in the logs were a myriad of disconnect warnings every 5 min the mail server was getting disconnected from the ODM and then reconnecting causing some major issues.

The log files were filling up so fast that they were causing kernel panics, I had to reboot the server many times once every couple of hours, I decided to call Apple. The Apple representative captured my logs, and promptly told me that I would have to reformat the hard drive and completely start over. I told him that this was a clean install and that no way would I be starting over. He offered no other solution or advice other than telling me that it was not normal for a new server to have kernel panics this early in the game.

I decided to check my DNS turns out that the route statement in the router, was not properly entered. It was getting to the server but it was unable to retain a connection. I re-entered the route statement correctly and then rebooted the router. Almost immediately the issues stopped. Apple has come a long way in their migration capabilities if your ever having issues with your 10.6.2 mail service DNS is almost always the culprit!

