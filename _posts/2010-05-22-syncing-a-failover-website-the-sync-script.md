---
title: 'II Syncing a failover website : The Sync script'
author: Jon
layout: post
permalink: /blog/syncing-a-failover-website-the-sync-script/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/sync.png
categories:
  - osx-system-administration
tags:
  - backup
  - bash-script
  - cronjob
  - mysql
  - schedule
  - sync
---
In this article we are picking up where we left off, we now have the ability to connect from our primary server to our secondary server without the need to enter a password with the help of a secret key. If you are lost at this point please refer to the last article [Syncing a failover website : Creating an SSH key][1]. At this point all we need to do is setup the bash script. We will create the script to log all of its activity so that we know if the process is having problems. The log file will be kept in a directory on the primary server. You will need to know the absolute path to this file and the file must be writable and readable by the system, so a chmod of 755 or 777 should do the trick.

{% highlight bash %}
#!/bin/bash
echo Sync started `date` >> /Volumes/Logs/Sync_log.txt
echo "Now starting rsync"
{% endhighlight %}

At this point we are ready for the sync to start, we will start by syncing the files from the primary server to the secondary server. This is a one way sync, whatever we add to the primary server will be copied over to the secondary server. Whatever is deleted from the primary server will also be deleted from the secondary server we accomplish this via the use of rsync. 

{% highlight bash %}
rsync -avz --delete "/Volumes/PrimaryWebsite/" --rsh='ssh -p8286' username@XX.18.XX.22:www/domains/SecondaryWebsite
{% endhighlight %}

Notice that the first line is the path to our primary website, the second value is the port number that you use to ssh into your secondary server if they require that. The third option is the username and the ip address or hostname of the secondary server and then the path to the files on the secondary server. Again in order for this to work you really have to have completed the first step if this is not working refer back to the article that covers the appropriate way to ssh into your remote server [Syncing a failover website : Creating an SSH key][1].

{% highlight bash %}
echo "Now starting modifications"
scp -oPort=8286 "/Volumes/modifications/wp-config.php" username@XX.18.XX.22:www/domains/SecondaryWebsite
{% endhighlight %}

What we are doing above is copying a modified version of the wp-config.php file because we use wordpress installations as our main CMS platform, the configuration settings on the primary server will not always match exactly the configuration settings on your secondary server. Which means that if you failover and the settings on the secondary server are the ones from your first server, and the secondary server uses a different database prefix, username or password the failover will succeed but it will failover to a website that will give you the dreaded &#8220;Cannot connect to database&#8221; error. 

{% highlight bash %}
echo "Now starting database sync"
mysqldump --user=primarymysqlusername --password=primarymysqlpassword primarydatabasename | ssh secondarysshusername@XX.18.XX.22 -p8286 mysql --user= secondarymysqlusername --password= secondarymysqlpassword secondarydatabasename
echo Sync finished `date` >> /Volumes/Logs/Sync_log.txt
{% endhighlight %}

The above code, will allow you to sync your database with the database in your secondary location. You will need to modify the settings to match your primary username and password for mysql. Your secondary username and passwords for mysql and the primary and secondary database names in mysql. What this does is it empties the target database and then it re-imports all the content from your primary server. Then it logs a line in the log, stating when it has completed. Here is what the finished script looks like.

{% highlight bash %}
#!/bin/bash
echo Sync started `date` >> /Volumes/Logs/Sync_log.txt
echo "Now starting rsync"
rsync -avz --delete "/Volumes/PrimaryWebsite/" --rsh='ssh -p8286' username@XX.18.XX.22:www/domains/SecondaryWebsite
echo "Now starting modifications"
scp -oPort=8286 "/Volumes/modifications/wp-config.php" username@XX.18.XX.22:www/domains/SecondaryWebsite
echo "Now starting database sync"
mysqldump --user=primarymysqlusername --password=primarymysqlpassword primarydatabasename | ssh secondarysshusername@XX.18.XX.22 -p8286 mysql --user= secondarymysqlusername --password= secondarymysqlpassword secondarydatabasename
echo Sync finished `date` >> /Volumes/Logs/Sync_log.txt
{% endhighlight %}

Thats about it, in our next and final article on the topic of syncing multiple websites on multiple servers for failover purposes we will talk about the proper way to schedule your sync.



 [1]: {{ site.site_cdn }}/blog/2010/03/12/creating-an-ssh-key-for-secure-development