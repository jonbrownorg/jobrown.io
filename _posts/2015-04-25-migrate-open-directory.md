---
title: Migrate Open Directory 10.10
author: Jon Brown
layout: post
permalink: /blog/migrate-open-directory/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: "Migrate Open Directory 10.10"
categories:
  - osx-server-configuration
  - osx-system-administration
tags:
  - deployment
  - mac
  - tutorials
  - update
  - upgrade
  - popular
---
A few weeks ago I had an old 10.9 open directory master server crash on me and I was unable to restart, luckily I had a good backup of my server which I created using Carbon Copy Cloner on a schedule. If your not using Carbon Copy Cloner I highly recommend doing so its one of the best backup utilities for OSX Server as it runs in the background and can backup and clone multiple directories and or the entire hard drive. 

In my case I was using it with Safety Net enabled and was able to restore the entire drive which took under an hour. Once restored I realized the best option for me was to move from 10.10 server from 10.9. In my environment I had 1 open directory master and 2 replicas. All running on 10.9 server, however close to 90% of my user base is running on 10.10 so I decided that it would be beneficial for those users to authenticate against Yosemite's server.

The process is pretty simple so Im just using this blog post as a form of documentation and education for those who are looking for a quick guide. Per [Apples own documentation][1] the open directory master can be exported or archived 2 different ways. Via the server.app or via the command line. Lets review the steps for both. 

### Archive Open Directory data using the Server app
---
1.   In the Open Directory pane, click Servers.
2.   Choose Archive Open Directory Master from the Action pop-up menu (looks like a gear).
3.   In the Archive File field, enter or choose the path to the folder where you want the Open Directory data archived.
4.   Enter a password for the archive, then click Next.
5.   Confirm your settings, then click Archive.


### Archive Open Directory data using the command line
---
You can archive Open Directory data from the command line.

To archive Open Directory data, open the Terminal app (located in the Other folder in Launchpad), then enter the following command:

{% highlight bash %}
$ sudo slapconfig -backupdb /full/path/to/archive
{% endhighlight %}

For example, /full/path/to/archive could be /Volumes/Data/myODArchive.

Enter a password to encrypt the disk image. Encrypting the image protects the sensitive data in the Open Directory database.

The archive file will have the file extension “.sparseimage”.


Now that we have the open directory exported as a sparse disk bundle DMG file and has been password protected we can take that from our 10.9 server and import it into our 10.10 server. The next step for me was to wipe the server, install 10.10. I then ran all the updates. I purchased and downloaded 10.10 Server to my system and I set it up with my hostname, and let the setup wizard finish the server setup. When done you should have a copy of OSX Server running on 10.10 with a valid hostname, external IP address port forwarded and DNS setup and configured. 

If DNS is not configured I recommend changing the hostname of your server and when it asks you if you want OSX Server to setup DNS choose to let it do so, it is the cleanest method for setting up OSX Server DNS initially and as most Apple administrators know its the one critical item that can make or break your open directory functionality. Now we are ready to import our Open Directory archive file. There are again 2 methods for doing so. 


### Restore Open Directory data using the Server app
---
1.   In the Open Directory pane, turn Open Directory on.
2.   Select “Restore Open Directory domain from an archive,” then click Next.
3.   In the Archive File field, enter or choose the path to the Open Directory archive file.
4.   Enter the password for the archive, then click Next.
5.   Click Restore.
6.   Restore Open Directory data using the command line

### You can restore Open Directory data from the command line.
---
To restore Open Directory data, open the Terminal app (located in the Other folder in Launchpad), then enter the following command:

{% highlight bash %}
sudo slapconfig -restoredb /full/path/to/archive.sparseimage
{% endhighlight %}

For example, /full/path/to/archive.sparseimage could be /Volumes/Data/myODArchive.sparseimage.

If you entered a password to encrypt the data when you archived it, enter that password when prompted.

If everything processed correctly you should now be looking at a fully functional and migrated OSX Open Directory. But this got me thinking there has got to be a better way to backup and restore an Open Directory master, or better yet a better way to migrate open directory masters from a specific moment in time. I wrote a script a while ago that allowed people to setup a cron job and [auto-backup their Open Directory][2] using the command line sparsediskimage dump. The script which can be [found here][3] worked great for older server installs but not so great on 10.10.

I started researching and found [this][4] an automated set of scripts that works with all major server releases and will auto-dump securely your open directory so that you can restore from a known moment in time. Per their own Documentation here is how it works. 

### How does it work?
---
Bender is provided as a simple PKG installer. Once installed, Bender will create a Backup directory in the root of the boot drive. Each evening at 10PM Bender creates the following files:

1.   A directory with the date and time the backup was run.
2.   An Open Directory archive if the server is running as an Open Directory master.
3.   A single backup file of all the server settings found in either Server Admin or Server (depending on your operating system).
4.   A series of individual backup files of each server setting, so restoration or import of select settings is possible.
5.   NEW: Bender now backs up the postgres database used by Profile Manager and Wiki services.

As you can see not only does it dump the OSX Databases but it also dumps and saves the settings for all of the OSX Services, how cool is that! I installed it on all my servers and it works great. It dumps the settings and database files into a folder at the root level of the drive and I use Carbon Copy Cloner to backup that directory instead of the entire operating system to a folder on an external file share. This will make future migrations and restores faster since I already have a known good base image for OSX Server and can simply re-import the server settings and open directory any time I need. 

Here is a brief overview again pulled from their own documentation. 

### To restore an Open Directory archive:
---
1.   Open Server Admin (in 10.7 and earlier) and select the Open Directory service.
2.   Click on the Archive tab, choose the archive you wish to use and click Restore.
3.   To determine the password used to encrypt the archive, run this command inTerminal:
4.   For older versions of Bender:

{% highlight bash %}
/sbin/ifconfig | /usr/bin/grep -m 1 ether | /usr/bin/awk '{print $2}' | /usr/bin/sed 's/://g' | /usr/bin/cut -c 5-
{% endhighlight %}

For the current release of Bender

{% highlight bash %}
system_profiler SPHardwareDataType | awk '/Hardware UUID/{print $3}'
{% endhighlight %}

Note: There is currently no restore option in Server.app in 10.8 or later, so use the command line:

{% highlight bash %}
sudo slapconfig -restoredb /path/to/your/archive.sparseimage
{% endhighlight %}

### To restore all OS X Server settings
---
{% highlight bash %}
sudo serveradmin settings < /path/to/your-sa_backup-allservices.backup
{% endhighlight %}

### To restore a specific OS X Server setting
---
{% highlight bash %}
sudo serveradmin settings < /path/to/your-sa_backup-servicename.backup
{% endhighlight %}

Helpful Hint: Terminal in OS X supports drag & drop, so you can simply drag the plist you want to restore instead of typing in the full path.

This has been one of the best addons to my server in a long while and I highly recommend it usage. If you found my overview of the steps I took to migrate my Open Directory server from 10.9 to 10.10 please leave a comment!



 [1]: https://support.apple.com/kb/PH15633?locale=en_US
 [2]: {{ site.site_cdn }}/blog/backing-up-the-od-master/
 [3]: https://github.com/jonbrown21/Backup-Open-Directory
 [4]: https://robotcloud.screenstepslive.com/s/2459/m/5322/l/94467-bender-automated-backup-of-os-x-server-settings