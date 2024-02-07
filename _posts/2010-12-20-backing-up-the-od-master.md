---
title: Backing up the OD Master
author: Jon
layout: post
permalink: /blog/backing-up-the-od-master/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/backup.png
is_code:
  - 1
product_name:
  - Backing up the OD Master
code_category:
  - bash-script, Open Directory, OSX Server
sample_code:
  - Keep the integrity of your OSX Open Directory Data by backing it up with this bash script
git:
  - https://github.com/jonbrown21/Backup-Open-Directory
github_url:
  - https://github.com/jonbrown21/Backup-Open-Directory
backgrounds:
  - OD
categories:
  
tags:
  - backup
  - ldap
---
Open directory on the Mac OSX Server platform is a great directory platform using Kerberos and LDAP however I have found that there are two steps to a flawless directory experience. Since the directory is such a delicate system I find it necessary to create a backup of the OD Master at least once a day in the event that something goes south you can restore from any day in the past with ease. The other method is to use OD Replicas, and to use them often. A replica is far easier to fix than the actual OD Master if the master goes bad, and you have no backup then you have to decommission and start over, with replicas you can demote, and recreate without even having to deal with the OD Master.

## 1. Backing up the OD Master with Bash

{% highlight bash %}
#!/bin/sh
NOW=$(date +"%m-%d-%Y")

# Path to recovery directory (permissions should be 700 -- read-only root or admin)
recover="/Volumes/ODBackup"

# Backup Open Directory
day=`date ''+%u''`
od_backup="$recover/od_backup - "$NOW""
ts=`date ''+%F''`
echo "dirserv:backupArchiveParams:archivePassword = 908239032" > $od_backup
echo "dirserv:backupArchiveParams:archivePath = $recover/od_$ts" >> $od_backup
echo "dirserv:command = backupArchive" >> $od_backup
serveradmin command < $od_backup
{% endhighlight %}

The above script when run on a daily basis through CRON or LAUNCHD will create a recoverable sparse disk image of your OD Master that you can use to restore from, it saves each master with a date time stamp so you can see which one is which and the instructions to restore are logged to a separate file. The two variables you must change are

{% highlight bash %}
# Path to recovery directory (permissions should be 700 -- read-only root or admin)
recover="/Volumes/ODBackup"
{% endhighlight %}

This should be the location you want your OD Master backups to live, and

{% highlight bash %}
echo "dirserv:backupArchiveParams:archivePassword = 908239032" > $od_backup
{% endhighlight %}

the password must be changed as well in the above example the password is 908239032 you can change it to anything you want, this is required to restore when you attempt to restore your OD Master backup in Server Admin you will be prompted for this password.

## 2. Create an OD Master Replica

Before you start the firewall on the OD Master, the Firewall on the OD Replica server and the Firewall on your router must all have the following ports open, and or port forwarded to their appropriate destination. Open Ports 389, 636, 625, 22, 3659, 106, and 88.

  1. Make sure the master, the prospective replica, and every firewall between them is configured to permit SSH communications (port 22).  
    You can enable SSH for Mac OS X Server in Server Admin. Select the server in the Servers list, click Settings, click General, then select the Remote Login (SSH) option.
    Make sure that SSH access is not restricted to certain users or groups (using SACLs) on the prospective master. This will cause Server Admin to not have the necessary permissions during creation of the replica. You can temporarily disable SACLs in Server Admin under Settings > Access. 
    
      * Open Server Admin and connect to the server.
      * Click the triangle to the left of the server.  
        The list of services appears.
      * From the expanded Servers list, select Open Directory.
      * Click Settings, then click General.
      * Click Change.  
        The Service Configuration Assistant opens.
      * Choose Open Directory Replica, then click Continue.
      * Enter the following requested information:
      * IP address or DNS name of Open Directory master: Enter the IP address or DNS name of the server that is the Open Directory master.
      * Root password on Open Directory master: Enter the password of the Open Directory master system’s root user (user name system administrator).
      * Domain administrator’s short name: Enter the name of an LDAP directory domain administrator account.
      * Domain administrator’s password: Enter the password of the administrator account whose name you entered.
    
      * Click Continue.
      * Confirm the Open Directory configuration settings, then click Continue.
      * Click Close.
      * Make sure the date, time, and time zone are correct on the replica and the master.  
        The replica and the master should use the same network time service so their clocks remain in sync.
    
Again the point here is to have a place for your users to authenticate against that can easily be fixed if any issues arise, in my setup I use the replicas to bind clients to for computer authentication, bind my Mail server to for account information and also use it as the basis for my LDAP environment. Replicas are great because they also reduce the response time, and since each server is synced as the users change their passwords or information its virtually instant. If a client is bound to my replica and the replica has a problem it will search for the next nearest replica, connect and authenticate against that which means almost no downtime as well.
    
## 3. Carbon Copy Cloner
I am a huge fan of this software which can be found at [Carbon Copy Cloners website][1]. I use this software to do a full, incremental clone of my server, which is great because at any given time I can boot off of the backup drive and or restore directly to my server. 

I am not going to write another how to on using Carbon Copy Cloner except to link to their own how to section which goes over it in so much more detail than I could here.

[Scheduling Tasks in Carbon Copy Cloner >>][2]  
[Backup Options for Carbon Copy Cloner >>][3]  
[A more granular approach to Backup (Must Read!!!) >>][4]

If you find their software useful I urge you to donate. 

Wrapping things up a bit, I am a big fan of backups and these three options will keep you covered in the event of an Open Directory nightmare! If you have comments or other solutions I am always happy to hear from you and let me know how you approach backups with your systems!

**** Note**  
I was not able to get the above script to run properly with Cron, but it does however with LaunchD. Here is my LaunchD script, I named it com.odbackup.plist and placed it in the /Library/LaunchDaemons/ folder on my server, the script is set to run the backup every morning at 7:45am

{% highlight bash %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC -//Apple Computer//DTD PLIST 1.0//EN https://www.apple.com/DTDs/PropertyList-1.0.dtd >
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>com.odbackup</string>
        <key>ProgramArguments</key>
	<array>
	<string>/bin/sh</string> 
        <string>/path/to/backup/script/backup.sh</string>
        </array>
        <key>StartCalendarInterval</key>
        <dict>
            <key>Hour</key>
            <integer>7</integer>
            <key>Minute</key>
            <integer>45</integer>
        </dict>
    </dict>
</plist>
{% endhighlight %}
    
then you start the proceess by running load ctl /Library/LaunchDaemons/com.odbackup.plist or whatever you named it to see if its in the list run launchctl list.



 [1]: https://www.bombich.com/
 [2]: https://help.bombich.com/kb/scheduling/save-task
 [3]: https://help.bombich.com/kb/explore/backup-options
 [4]: https://help.bombich.com/kb/explore/backup