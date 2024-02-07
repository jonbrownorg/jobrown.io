---
layout: post
date: '2018-02-01 07:16 -0500'
author: Jon Brown
permalink: /blog/keep-your-mac-safe/
published: true
type: BlogPosting
title: Keeping your Mac Safe
image: /assets/images/covers/2018/remove-malware-from-mac-hero-740x400.png
thumbnail: /assets/images/covers/2018/remove-malware-from-mac-hero-740x400.png
link: /assets/app-images/2018/remove-malware-from-mac-hero-740x400.png
tagline: Keeping your Mac Safe
tags:
  - tutorials
  - mac
categories:
  - tips
---
Macs are pretty safe in personal computer terms with “safety. built right in” as Apple likes to say.

However, this is not to say Macs are invulnerable to various Malware the latest being the MaMi malware.

The MaMi malware works by hijacking the DNS system on the Mac itself, DNS is used to route domain names so when you visit apple.com you are actually accessing an I.P address, the location of domain names are stored on name servers and routed via DNS often by your ISP.

The first step in DNS is to query the local machines own host file, and it is this host file that the MaMi malware targets.

This is just one example of malware on the Mac (Viruses, PUPs, Trojans etc.).
The do it yourself approach to keeping your Mac free of malware is to use an antivirus program such as Malwarebytes to scan your mac.

Go to [https://www.malwarebytes.com/](https://www.malwarebytes.com/) and download the free trial.

Follow the instructions of the installer once you have downloaded Malwarebytes, it’s up to you if you want to pay for the Premium version as you get a 14-day trial of the premium version and then the free version can continue to be used to scan your computer.

Once open simply click the Scan Now button:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/macsafe/image1.png" class="img-fluid rounded m-2" width="750">

If you are using an SSD hard drive on a fairly recent Mac the scan will complete pretty quickly otherwise leave the scan running and do something else.

Once complete you should see the following screen:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/macsafe/image3.png" class="img-fluid rounded m-2" width="750">

If there are any malicious items they will be shown in the “Threat Scan Result” , Malwarebytes automatically quarantines them which means they are disabled from running and moved to a different location on your hard drive.

Malwarebytes will ask you if you want to delete the quarantined items and it is worth having a quick look at the items found before agreeing to delete them.

To keep Malwarebytes up to date simply click the ‘Update Protection” menu from the status bar which you can find in the top right corner of your Mac.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/macsafe/image2.png" class="img-fluid rounded m-2" width="450">

This will check back with Malwarebytes to make sure the threat database is up to date.
Apart from the fact Malwarebytes can scan for the latest threats to your Mac this kind of Anti-Virus is fairly redundant on your Mac, but if you notice your Safari search is now pointing somewhere else or you’ve downloaded Apps outside of the app store it is worth running Malwarebytes from time to time.

You can read up on the security features built into your Mac [here](https://www.apple.com//macos/security/).

To really keep your Mac safe we offer Managed Malware as a service, which offers real-time, endpoint protection [buy this now]({{ site.site_cdn }}/products/hosted/security/).
