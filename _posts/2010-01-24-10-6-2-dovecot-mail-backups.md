---
title: 10.6.2 Dovecot Mail Backups
author: Jon
layout: post
permalink: /blog/10-6-2-dovecot-mail-backups/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/backup.png
categories:
  - mail-server
  
tags:
  - backup
  - dovecot
  - download
  - scripts
---
Before migrating to 10.6 Server we were running our entire mailstore on the 10.5.8 platform. Say what you will about Leopard, once we had it set up correctly it ran fine. We migrated because of the greater benefits of Dovecot over Cyrus. Many of the other features intriqued us as well such as the improved Wiki server and iCal server. However we were really excited about Dovecots ability to repair itself basically doing away with the need to ever have to rebuild a users mailbox.

The one great thing about 10.5.8 was the development of [Mailbfr][1] this was an amazing script that would help you backup your entire mailstore, recover email accounts, repair quotas, and of course rebuild or repair the entire mail-store. This was an invaluable tool, however since switching we have had to come up with our own solution.

We tried at first to get RSYNC running however this did not work because we did not have the permission to copy the mailstore with the permissions in tact. The reason is that while the root account does have access to look at the mailstore the secondary user on the mailstore folder is the mail user itself. Without running the script as each user then its near impossible to use RSYNC to move the mailstore or to even perform a simple backup.

Our solution was to create a backup script that use SCP with SCP we were able to move our mail-store to another drive on the server. It copies the store over and it resets the permissions to the administrator account. This solution works very well however after some time with a large mailstore you will run out of space on the target volume. Unlike RSYNC which uses hard links to save space SCP creates a new copy of the mailstore each time it is run.

In order to save space on the backup volume the oldest 2 weeks worth of backed up email gets dumped to DVD and removed from the drive on a monthly basis. This is fine but not optimal. Here is a copy of the script that we use on our server.

{% highlight bash %}
#!/bin/bash
echo backup started daily backup `date` >> /Volumes/EMAIL BACKUP/Backup/Logs/Backup_log.txt

scp -r /Volumes/Mailstore-Location/spool /Volumes/EMAIL BACKUP/Email-Backups/$(date +%d)-$(date +%m)-$(date +%Y)backup 

echo backup daily backup completed `date` >> /Volumes/EMAIL BACKUP/Backup/Logs/Backup_log.txt{% endhighlight %}

This will backup the mailstore and then log each time that it does so. To recover an email to the original mailstore is not as hard as it seems. Navigate to the backed up mailstore destination and match up the name of the folder to the users UID of which you want to recover. For example if the users UID is 7458-58713-952554-544226 then you would look for a folder with the same name. Once in the folder you can copy or look at individual email files. Find the ones or one that you need and copy it to the folder of the original mailstore. In order to do this you will have to use sudo. For example this is how you would restore the entire folder

{% highlight bash %}
bash-3.2$ sudo scp -r "Volumes/EMAIL BACKUP/Email-Backups/7458-58713-952554-544226/.*" "/Volumes/Mailstore-Location/spool/7458-58713-952554-544226/.*"{% endhighlight %}
Until [Mailbfr][1] comes back for Dovecot this is how we are protecting ourself against the accidental loss of email. I am not saying that this is the best method it is simply the one we are using. If you have another solution that works bette than please let me know and share your own experience!
\*\\*\* UPDATE 12/8/2011 \*\**  
Here is the script that I am using to date for your use. It logs the backups and emails me when they are complete.

{% highlight bash %}
#!/bin/bash
# This adds a record to our backup log
echo backup started daily backup `date` >> /Scripts/Logs/Backup_log.txt
# This backs up the files
rsync -avu /location/of/mail/spool /Volumes/backup-volume/
# This adds another record to our backup log
echo backup daily backup completed `date` >> /Scripts/Logs/Backup_log.txt
# This emails the Sys Admin
NOW=$(date +"%m-%d-%Y")
SUBJECT="Email Backed Up - "$NOW""
EMAIL="email@user.com"
EMAILMESSAGE="/Scripts/Logs/Backup_log.txt"
mail -s "$SUBJECT" "$EMAIL" < "$EMAILMESSAGE"
{% endhighlight %}

The easiest way to start / stop this is to setup a LaunchD or Cronjob, I prefer Cron since its easier in my opinion to setup. Setup the rsync script that you have below and put the code in a bash script. I use a GUI tool called Cronix https://code.google.com/p/cronnix/ once you download this launch it and put the full path to the bash script at the bottom the cron job code for every ten minutes is

0/10 \* \* \* \* * /path/to/bash/script.sh



 [1]: https://osx.topicdesk.com/content/view/41/41/