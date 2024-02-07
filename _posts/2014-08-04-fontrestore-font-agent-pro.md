---
title: 'Fontrestore, Apple&#8217;s fix for your fonts'
author: Jon Brown
excerpt: FontAgent Pro is a great font management solution for OS X. One of the best things about it is that its 100% cloud based. You can run the entire thing hosted in their cloud instance or you can run it on your own server. Its a great solution for font management, and does everything from managing your font licenses, users, libraries and sets. The one problem however is the fact that when deploying a new font solution you find yourself in a quandary over the right way to deploy that kind of solution to a large number of computers.
layout: post
permalink: /blog/fontrestore-font-agent-pro/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: 'Fontrestore, Apple&#8217;s fix for your fonts'
categories:
  - bash-scripts
  - casper-munki
  - cocoa-code
tags:
  - automator
  - cocoa
  - font
---
FontAgent Pro is a great font management solution for OS X. One of the best things about it is that its 100% cloud based. You can run the entire thing hosted in their cloud instance or you can run it on your own server. Its a great solution for font management, and does everything from managing your font licenses, users, libraries and sets. The one problem however is the fact that when deploying a new font solution you find yourself in a quandary over the right way to deploy that kind of solution to a large number of computers. 

If the goal is to manage fonts and ensure that you&#8217;re legal and compliant with font usage you can&#8217;t let people have their own dubious fonts on their system, so how do you ensure that people safely remove and restore users font libraries? Enter Font Restore, a built in OS X command to safely reset the font library. Heres the command.

{% highlight bash %}
fontrestore default
{% endhighlight %}

Heres what it looks like when it runs, a command window pops up and asks a user for their password, the button is set to &#8220;Restore&#8221; when the process is done it removes all non standard system fonts into the ~/Library/Fonts (Removed) and /Library/Fonts (Removed) folder locations. Removed fonts are stored in date time stamped folders so that you can determine which fonts where moved at what time depending on when the command was run.

This isn&#8217;t just something that works or to be used when people have to move to a different font manager its also a good tool to use when troubleshooting corrupt fonts. That got me thinking, without giving people the command and hoping they would run it the right way and risk them getting too comfortable in the terminal interface I decided this would be a good task for Automator. 

I have to be honest its been a while since I have used Automator but I was pleasantly surprised with some of the new commands and abilities of the system. Heres how I turned this simple command into a full functioning application that I was able to package and deploy to all users who have graphics software with MUNKI.

Open Automator and create an Application. 

Drag the Run Shell Script to the workflow window. Once done add this command in the command field. 

{% highlight bash %}
fontrestore default
{% endhighlight %}

Add the Notification action to the workflow. I put a short message to let the user know where to look for deactivated fonts. 

Thats it. I will post the source to this in the sample code section of the site for your reference.

