---
title: "Keeping your files safe"
author: Jon Brown
layout: post
image: /assets/images/covers/2017/safe.jpg
thumbnail: /assets/images/covers/2017/safe.jpg
tagline: "<br>Keeping your files safe"
permalink: /blog/keep-your-files-safe/
categories:
  - tips
  - product-reviews
tags:
  - tutorials
  - mac
  - ios
---
Back in 2008 I was burgled and lost a MacPro G5, on that Mac I had been working for months on a 3D render of my local town's high street in Bryce 3D of all programs.

Not only did the thieves steal my Mac they stole the backup hard drive which was connected to it :-( . Luckily I had my MacBook which I use for work safely in the trunk of my car, but no copy of the 3D files to continue with, hence months of work was lost and in the end abandoned.

Fast forward to 2017 and keeping your files safe is easier than ever thanks to macOS. There are a multitude of different methods of backing up your files iCloud Drive, Time Machine, Carbon Copy Cloner, Retrospect, Dropbox and many other cloud services and backup apps.

### iCloud Drive
---
<img src="{{ site.site_cdn }}/assets/images/blog/2017/safe/image3.png" class="alignleft" width="432" /> By default macOS now prompts you to allow iCloud to backup your Documents folder and Desktop to iCloud Drive, and in my case this would have saved me months of work.

With iCloud you get 5Gb free and if like me you also have iOS devices like iPhones and iPads as well as other Macs this can quickly fill up, for a relatively small monthly fee this can be expanded to 50Gb which is enough for your photos and those files you really need to backup, this is expandable to 2TB.

If you are not already using the Desktop and documents feature of iCloud Drive go to Apple Menu > System Preferences > iCloud and click the options button .

Before you do that it’s worth noting your existing Documents and Desktop files will be removed and put into folders with the same name in iCloud Drive using the computer's name as the prefix example (Daves-Mac-Book-Desktop) , to move them back simply move them from the iCloud Drive folders back to the relevant folders on your Mac.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/safe/image2.png" class="alignright" width="387" /> As such it is worth going through what is in Documents and Desktop first and moving the files you don’t want in iCloud Drive, this is likely true of any Virtual machines .

What’s really great about iCloud Drive is you can install the iCloud app into Windows and quickly access the same files across the different devices.

Certain apps such as Preview and Pages will save new files into iCloud Drive automatically, you may want to turn this feature off by unchecking the box for the relevant apps.

The other option is to simply drag the file from the finder onto the iCloud drive folder. This will move the file to iCloud Drive if it is still open on your Mac save the file first, move it to iCloud Drive and then re open it to continue working.

You can also access your iCloud items including drive at [icloud.com][1].

### Time Machine
---
The backup utility that comes with macOS is a great piece of software , and if you are not using it already you should, it creates incremental backups of all files on your Mac to a designated external drive. Incremental backups means Time Machine only backs up files that have changed since the last time you ran Time Machine.

Time Machine on its first run may take several hours to complete and then if you run it regularly by connecting the Hard drive each new backup should only take a few minutes depending on the size of the files created or modified.

The cheapest way to get started with TimeMachine is using any USB hard drive, you can also use an internal Hard Drive although I personally advise against this because the drive will always be on and running and it is the moving parts of the hard drive that fail. It’s better to plug in and unplug a drive regularly so when you are not using the drive it is off.

Other options for a Time Machine Hard Drive are a Firewire Drive if your Mac has it or Thunderbolt drive, however don’t expect the backups to complete much quicker than USB as the read write speeds of traditional hard drives are limited.

The most expensive option for Time machine but it does mean the Mac you are using only needs to be connected to the same network is AirPort Time Capsule , this devices does provide some other functionality not just a Time Machine NAS drive but it’s main purpose is for Time Machine backups, as with most things from Apple it is well designed and works seamlessly with the tasks it can complete, see: [https://www.apple.com/airport-time-capsule/][2]

Apple have provided an easy to follow guide on using Time Machine: [https://support.apple.com/en-gb/HT201250][3]

### Carbon Copy Cloner
---
A third party utility from Bombich Software is a feature packed backup utility that is also very easy to use.

One feature I have used from CCC is the ability to clone a drive even the startup disk to another drive and boot straight from it! It also gives you the option of which files and folders to backup.

CCC includes a 30 day free trial so it’s worth assessing it if Time Machine doesn’t fit the bill, like I said I also have it as it allows me to make a bootable copy of a system disk which is handy when upgrading hard drives or replacing a failing drive. [https://bombich.com/][6]

### Retrospect
---
Retrospect can be run as a backup server on one Mac and then the server itself and any client Macs then backed up to an external Hard Drive! It doesn’t only work with Macs Retrospect also supports Windows, and Linux.
For more info on Retrospect see: [https://www.retrospect.com][4]

### Cloud storage
---
iCloud aside which in my opinion should be your go to option for cloud backups when using Apple products there are hundreds if not thousands of Cloud service providers available.
Here are some of them and the way in which you can use them with your Mac.

### Dropbox
---
Sign up for a dropbox account at www.dropbox.com , download the dropbox utility and follow the install instructions from the downloaded dmg file.
With Dropbox and others you have to manually move the files from your desktop to Dropbox each time.

### Google Drive
---
Sign up for Google Drive with your Google account, if you have a Google account already it is available at [https://www.google.com/drive/download/][5] , again this installs a utility app that gives you a google Drive folder on your Mac which you can drag and drop your files to.
Recap

1. Make a backup with Time Machine, pretty much any USB hard drive or better can be used, at least you have this when or if something goes wrong.
2. Use iCloud Drive to backup your essential files, remember my tale about my Mac being stolen. You can also access all your iCloud data at www.icloud.com .
3. Try out other third party backup programs if you want to go off piste (backcountry skiing) , such as CCC for making bootable clones of drives.
4. Other Cloud services are available, however they may not sync with your Mac files so well, I use Google Drive quite a lot but find the web interface is more than adequate.
5. Backups are essential, you only need them when you need them but if you haven’t made a backup you are out of luck.

[1]: https://www.icloud.com
[2]: https://www.apple.com/airport-time-capsule/
[3]: https://support.apple.com/en-gb/HT201250
[4]: https://www.retrospect.com
[5]: https://www.google.com/drive/download/
[6]: https://bombich.com/
