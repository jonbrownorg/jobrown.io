---
title: 10.9 Auto Enrollment Profile Manger Package
author: Jon
layout: post
permalink: /blog/10-9-auto-enrollment-profile-manger-package/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bash-scripts
  - casper-munki
  - osx-system-administration
tags:
  - casper
  - munki
  - osx-server
  - profile-manager
---
Many years ago when I was managing a fleet of computer using 10.6 I thought that I a master systems administrator because I had all my computers managed by MCX it took me years to get MCX working properly across all my systems and it saved me countless hours of time and energy managing preferences and remote settings for new and existing systems made my life so much easier.

Then 10.7 came out and with it the slow death of MCX and profile manager emerged. I was so excited but also a little disappointed many of the MCX preferences either did not work properly an required the use of both MCX and Profiles in order to fully manage computer systems MCX for 10.6 Profiles for 10.7 and then 10.8 came out!

Profile manager was much more mature and MCX was finally dead, workgroup manager had been phased out and I fully embraced profiles, trust certificates, after years of testing, reading, learning and managing systems I was finally using profiles exclusively. 

One of the techniques that I used was to auto enroll users and I took two approaches to this task. 

  1. Auto enroll the device on image using Deploy Studio Server.
  2. Auto enroll the device post image using Munki or ARD.

After months of struggling, creating custom packages and writing custom plist files I found a solution that made it all so much easier. [Graham Gilbert created a luggage script][1] that allows you to create an automated package that ultimately will allow you to deploy and auto enroll devices as a pkg.

Here are the steps you need to take in order to use this wonderful too.

**Setup DNS**

Make sure that you have DNS properly setup if your using computers inside and outside your network make sure that you have port forwarded the DNS public IP to private IP so that you can enroll devices anywhere. Here are the ports you need to be sure are open in order to achieve this. 

[https://support.apple.com/kb/HT5302?viewlocale=en\_US&locale=en\_US][2]

if your unsure then you should run the following on your server

{% highlight bash %}
sudo changeip -checkhostname
{% endhighlight %}

Make sure it comes back clean your IP address and DNS record must match if it does not the package enrollment will fail.

**Setup Profile Manager**

To get started, you’ll need a functional Profile Manager configuration. From within Profile Manager, click on the plus sign (“+”) in the lower left corner of Profile Manager and click on Enrollment Profile. Then click on the New Enrollment Profile entry that was created and click on the Download button to download the profile onto the server (when it attempts to install, simply click cancel to cache it to your ~/Downloads directory). 

Click in the drop-down menu in the upper right hand corner of the screen and then click on Download Trust Profile. This will download the Trust Profile for the MDM solution to the client (when it attempts to install, simply click cancel to cache it to your ~/Downloads directory).

**Setup Luggage**

The Luggage is a project to create a wrapper to make Apple PKG format packages. It does not use the PackageMaker GUI, but it does require that the developer tools be installed so it can call the command line version. 

<a class="btn d-block w-100 btn-default btn-lg" href="https://github.com/unixorn/luggage"><i class="icon-github"></i> Luggage Package Repo </a> 

The next step is to compile Luggage, in order to do this you need to have Apples Command Line Tools installed for 10.8 or 10.9 depending on your OS. In 10.8 you can install this by installing Xcode and managing the downloads in the preference panel. In 10.9 you must login to Apples Developer area and download it. You do not need a paid account to get the package.

To setup Luggage do the following

Unzip the file.

There are two files that have to go in /usr/local/share/luggage (you have to create this path)

luggage.make  
prototype.plist

move these files into this new path.

**Create the Profile Manager Package**

Download the Profile Manager Enrollment script here

<a class="btn d-block w-100 btn-default btn-lg" href="https://github.com/grahamgilbert/Profile-Manager-Enrollment"><i class="icon-github"></i> Profile Manager Enrollment Repo </a> 

This package will remove any existing profiles on the Mac and then enroll the Mac with your server.

The Makefile needs The Luggage to build the package, but the postflight script could be used with your solution of choice. Ready?

  1. Create a new enrollment profile
  2. Give your enrollement profile a name
  3. Download the trust profile
  4. Download the enrollment profile

Rename your enrollment profile to enroll.mobileconfig and the trust profile to trust.mobileconfig, copy them to the repo directory and run a quick 

{% highlight bash %}
make pkg
{% endhighlight %}

when your done a package will be created you can now deploy this with Munki, Casper or ARD.



 [1]: https://grahamgilbert.com/blog/2012/04/06/profile-manager-enrollment-package/
 [2]: https://support.apple.com/kb/HT5302?viewlocale=en_US&locale=en_US