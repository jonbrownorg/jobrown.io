---
title: '10.8  to 10.9 Server Upgrade'
author: Jon
layout: post
permalink: /blog/10-8-to-10-9-server-upgrade/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - dns-settings
  - migration
  - osx-system-administration
  - Web-Server
  - wiki-server
tags:
  - 10.9
  - mavericks
  - upgrade
---
Setting up OS X Server has never been easier. Neither has upgrading OS X Server. In this article, we’ll look at upgrading a Mac from OS X 10.8 running Server 2 to OS X 10.9 (Mavericks) running Server 3.

The first thing you should do is clone your system. The second thing you should do is make sure you have a good backup. The third thing you should do is make sure you can swap back to the clone should you need to do so and that your data will remain functional on the backup. 

**Creating the Clone with CCC**

  1. Make your bootable backup
  2. Get a backup disk. If you need advice, [check out CCC&#8217;s documentation][1]
  3. [Prepare your backup volume for an installation of Mac OS X][2]
  4. [Download CCC and fire it up][3]
  5. Choose your startup disk in the Source menu
  6. Choose your backup volume in the Destination menu
  7. Click the Clone button

Once your clone is finished, test that your drive is bootable by selecting your backup disk as your startup disk in System Preferences and then restarting. Don&#8217;t forget to change your startup disk back and restart after you test!

**Installing Mavericks**

Once you’re sure that you have a fallback plan, let’s get started by downloading OS X Mavericks from the App Store. I would also purchase the Server app first while Mavericks is downloading. Once downloaded, you’ll see Install OS X Mavericks sitting in LaunchPad. Open the app and click Continue (provided of course that you are ready to restart the computer and install OS X Mavericks).

Click the Restart button located at the bottom of the window when finished or allow Mac OS X to restart automatically after 30 seconds. The entire installation process will likely take around an hour or so depending on your Mac. Afterward, log in and start up your Mac as you would normally, entering your Apple ID when prompted and setting up iCloud Keychain if desired. The setup wizard will handle the rest.

**Installing Server 3**

Once done, download the latest version of the Server app, if you haven’t already.

If prompted that the Server app was replaced, click OK. Then open the app. 

At the Update screen, click Continue.

When the app opens, verify DNS, etc and then check that configured services still operate as intended. If you end up deciding that you no longer need OS X Server, just delete the app and the contents of /Library/Server and you’re good.

**Gotchas**  
I experienced a series of gotcha&#8217;s that as long as your aware of these you should be good to go. 

  1. All of my home-brew applications needed to be re-installed. 
  2. Command Line Tools is not part of Xcode anymore its a stand alone installer you download from the Developer Program
  3. Munki and Munki Web Admin needed to be updated to the latest versions
  4. Certain NBI files no longer worked and had to be rebuilt
  5. All the Launch Daemons for custom programs need to be re-chowned

Ultimately though this version upgrade was painless, and easy. It almost felt too easy. I had no issues with settings or data that did not migrate over fully. It was the first smooth server migration that I have ever experienced, great job Apple!



 [1]: https://help.bombich.com/kb/overview/establishing-an-initial-backup#choosing_a_backup_volume
 [2]: https://help.bombich.com/kb/overview/preparing-your-backup-disk-for-a-backup-of-mac-os-x
 [3]: https://www.bombich.com/software/download_ccc.php