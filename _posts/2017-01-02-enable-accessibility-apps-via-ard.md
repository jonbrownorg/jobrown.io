---
title: Enable Accessibility Apps via ARD
author: Jon Brown
layout: post
image: /assets/images/covers/2017/gallery_4.png
thumbnail: /assets/images/covers/2017/gallery_4.png
tagline: "<br>Enable Accessibility Apps via ARD"
permalink: /blog/enable-accessibility-apps-via-ard/
categories:
  - bash-scripts
  - ard
  - automator
tags:
  - tutorials
  - mac
  - bash-scripts
  - popular
---
I am always looking for ways to use Automator to make my life easier. Its a great tool that offers some impressive capabilities, my favorite of course is the ability to record UI events and convert that into a workflow or even a stand-alone app that you can then deploy and run via ARD. 

Sounds simple right? Well one little hitch, Apple wont let you run the automated UI apps made in automator without first adding them to the accessibility section of OSX. Creating an app that can run a few clicks automatically and then trying to open and run that app on a large number of computers remotely poses some challenges, namely how do you add the app to the accessibility pane remotely?

There is a way to do it but first you have to find the Bundle ID of the app that you want to add to the accessibility pane. To get the bundle ID of the app in question you would run this command. Note that you need to replace App Name with the actual app that your trying to get the bundle identifier for. 

## Get Bundle ID
---

{% highlight bash %}
bash-3.2$ /usr/libexec/PlistBuddy -c 'Print CFBundleIdentifier' /Applications/<Appname.app>/Contents/Info.plist
com.apple.Safari
{% endhighlight %}

Then we use the Bundle ID in the following command to modify the permission database. Note change the <Bundle-ID> with the actual bundle ID from the previous step.

## Update the Database
---
{% highlight bash %}
bash-3.2$ sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db "INSERT INTO access VALUES('kTCCServiceAccessibility','<Bundle-ID>',0,1,1,NULL);" 
{% endhighlight %}

To remove an application from the list we use the following command, with the correct bundle ID

{% highlight bash %}
bash-3.2$ sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db "delete from access where client='<Bundle ID>';"
{% endhighlight %}

## Conclusion
---
Now that you have remotely added the app that you want to run via ARD you can simply open the app using the open unix command to do so via ARD like so. 

{% highlight bash %}
bash-3.2$ sudo open -a appname.app 
{% endhighlight %}

and thats all there is to it, the automator app will run remotely. I hope that you have found this little article helpful!
