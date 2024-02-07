---
title: 10.9 Deploying Mac App Store Packages
author: Jon
excerpt: 'If your like me then your happy that Apple has made several of their wonderful software titles free recently, specifically iLife and iWork for Mavericks. Apple has a defined workflow for deployment of these systems. Their method is to have companies enroll into their <a href="https://www.apple.com/business/vpp/">Volume Licensing Program</a> once enrolled you can download apps from the app store and the iOS store and deploy these seamlessly to your devices with Profile Manager for Mavericks.'
layout: post
permalink: /blog/10-9-deploying-appstore-packages/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bash-scripts
  - casper-munki
  - osx-system-administration
tags:
  - app-store
  - deployment
  - package
---
If your like me then your happy that Apple has made several of their wonderful software titles free recently, specifically iLife and iWork for Mavericks. Apple has a defined workflow for deployment of these systems. Their method is to have companies enroll into their [Volume Licensing Program][1] once enrolled you can download apps from the app store and the iOS store and deploy these seamlessly to your devices with Profile Manager for Mavericks.

All of this hinges on a few things. First your company has to be willing to enroll in Apples Volume Purchasing Program many companies are not interested because many companies are simply looking for a method to deploy FREE software on the App Store not paid software. The second reason why their program is a turn off to many businesses is that you have to provide a [DUNS][2] number many companies do not have one, and are not at the point where they are looking to get one. 

> [ Source ][3] &#8211; Rich Trouton a hugely talented individual who originally wrote this article has been adapted below to show how to package the iLife Suite for deployment using MUNKI. Also combined a few comments from the original article to keep things consistent.

All that being said this article is a walk through of how to obtain the installer file that is downloaded to your system when installing free software on the Mac App Store. You can only use this process if your looking to obtain the installer for free software or for software you have purchased. 

For this tutorial I will be walking through downloading Keynote.app as a package that can be used for deployment with Casper, Munki, ARD and Deploy Studio Server.

To install Keynote.app, the Mac App Store will download an installer package from Apple, install Keynote.app, then delete the installer package as part of the post-installation clean-up. However, it is possible to make the App Store leave behind a copy.

Go to a machine that does not have Server.app installed.

If it is open, quit out the App Store application

Open Terminal and run the following command

{% highlight bash %}
defaults write /Library/Preferences/com.apple.appstore ShowDebugMenu -bool true
{% endhighlight %}

Launch the App Store application. It should now have a Debug menu showing.

If needed, sign into the App Store and go to Purchases. From there, find Keynote. 

Begin the installation process for Keynote, then click the Pause button to pause the download. 

Under the Debug menu, select Show Download Folder 

At this point, you should see a folder inside the displayed folder. In that directory, you’ll see a package with a long randomized name. That will be the Keynote.app installer package.

In Terminal, run the following command

{% highlight bash %}
ln /path/to/package_from_mac_app_store_name_here.pkg /path/to/name_you_want_to_save_package_as_here.pkg
{% endhighlight %}

Using the ln command will set up a hard link to the downloaded installer package. This will create name\_you\_want\_to\_save\_package\_as\_here.pkg in the location specified, which is then linked to the contents of package\_from\_mac\_app\_store\_name\_here.pkg. The reason to do this is that the hard-linked name\_you\_want\_to\_save\_package\_as\_here.pkg will not be deleted when the Mac App Store deletes package\_from\_mac\_app\_store\_name\_here.pkg from the Mac as part of the post-installation cleanup.

Once the installation finishes, name\_you\_want\_to\_save\_package\_as_here.pkg will available as a signed Keynote.app installer package. From there, you can use it on its own or as part of a deployment workflow.

Alternatively If you unload the installer daemon before installing from the MAS you don’t need to bother with the pause/hard link/resume step for each application you want to capture.

{% highlight bash %}
sudo launchctl unload /System/Library/LaunchDaemons/com.apple.installd.plist
{% endhighlight %}

When attempting to install an application from the MAS at the time of installation you’ll be greeted with an error: “The application could not be downloaded. There was a problem with the system installer tool.”

If you don’t click the Cancel or Retry buttons you’ll be able to browse to ~/Library/Application Support/AppStore to access your packages.

This should make things easier if you’re getting the latest updates for multiple MAS apps.

The downside here is that if you use this method to deploy App Store Apps then you will need to package all updates and deploy updates for that app the same way.

 [1]: https://www.apple.com/business/vpp/
 [2]: https://www.lexiconn.com/blog/2010/02/five-reasons-your-business-should-have-a-duns-number/
 [3]: https://derflounder.wordpress.com/2013/08/22/downloading-apples-server-app-installer-package/ "Source"