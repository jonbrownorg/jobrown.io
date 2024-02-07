---
layout: post
date: '2018-03-21 19:09 -0400'
author: Jon Brown
permalink: /blog/imac-wont-boot-after-security-update/
published: true
type: BlogPosting
title: My iMac Won’t Turn on After the Latest Security Update!
image: /assets/images/covers/2018/imac-boot-render-960x540.jpg
thumbnail: /assets/images/covers/2018/imac-boot-render-960x540.jpg
link: /assets/app-images/2018/imac-boot-render-960x540.jpg
tagline: My iMac Won’t Turn on After the Latest Security Update!
tags:
  - tutorials
  - mac
categories:
  - tips
cta: 1
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
## Have you been alarmed to see your iMac suddenly stopped working after you installed a security update or used new software? Here’s what you can do.

When your trusty iMac does not turn on, it is easy to get panicked. Fixing this and getting your computer back up and running may be quick or take a while depending upon the problems that need to be addressed. For some users who installed the MacOS High Sierra update before the security patch was released a week later, this software update could have stuck your computer. Here’s a breakdown of what you can do.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/stuckmac/iMac_stuck_1.png" class="img-fluid rounded m-2" width="700" />

1. First check that your iMac turns on.
Simple enough but this is important to know. Not starting up and not turning on are two different issues. Check to see if your iMac is turning on and receiving power (hardware issue), but not starting up (software issue typically). You should hear a small startup chime, perhaps some fan or drive noise and then some slight color change on the display. If your iMac turns on but does not start up, go straight to step 2. If it does not turn on, keep reading. Is your iMac plugged in. Is the charger working? You may need to use a different power cable or adapter. Do you have a pet? Sometimes you have a chewed wire that just cannot supply power. Fixing a power cable situation is simple. All you have to do is buy an Apple power cable. You might even get free or next day shipping. 

2. Disconnect any accessories.
This can range from printers to USB drives that could have faulty software or not be compatible with your computer. Try restarting the computer. If that does not work, go on step 3.

3. Run a power cycle.
Force your iMac to restart by holding down the power button for ten seconds. You should hear a squeak. Press again to restart. 

4. Check your display.
Listen to your iMac as it starts up. If your display does not work, then you may have a display hardware issue. Apple has support for this here. Basically, you will need to check the power supply to your iMac, confirm cables connect securely and remove all display extenders and switches and other devices. If you have any other monitors connected, you will want to remove those too. 

5. Boot up Your Mac in Safe Boot
Safe Boot limits what checks and functionality your Mac does during startup, and performs certain diagnostics. Shut the Mac down and start it up while holding down Shift. Safe Boot can take a while. Sometimes your iMac restarts after this. If it does,  you are all set to go! If not, then proceed to step 6.

6. Run Disk Utility in Recovery Mode.
If your iMac is booting up but your operating system will not load, which would happen if the software update you had was incomplete or corrupt, you can fix this in Recovery mode. You will need to run disk utility with OS X 10.8 Mountain Lion or later.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/stuckmac/iMac_stuck_2.jpg" class="img-fluid rounded m-2" width="700" />

Turn off the iMac. If it is not responsive and stuck on a screen, hold down the Mac's power button for several seconds until it gives up and shuts off. Hold down the Command and R keys, and power the Mac back up again. Keep pressing <kbd>Cmd</kbd> + <kbd>R</kbd> while your Mac is booting up.

After your Mac starts in Recovery Mode you will gain access to Utilities. Click on Disk Utility, locate the icon for your Mac's drive, and click Verify Disk. If there are errors with your disk, Disk Utility should find them and ask if you would like to repair them. Click Repair Disk if that happens. In recovery mode, you can: 

1. Restore from a Time Machine backup
2. Use Disk Utility to verify and repair connected drives
3. Check your internet connection
4. Get help online using Safari
5. Install or reinstall macOS

You can choose the right option to either restore, repair or reinstall your operating system. If you have to reinstall, you may need to back up the latest version of your OS onto a USB drive first and then plug that in for the Install step above.
