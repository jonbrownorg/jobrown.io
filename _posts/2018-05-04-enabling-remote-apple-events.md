---
layout: post
date: '2018-05-04 11:32 -0400'
author: Jon Brown
permalink: /blog/enabling-remote-apple-events/
published: true
type: BlogPosting
title: 'Enabling Remote Apple Events in macOS'
image: /assets/images/covers/2018/remoteevents.jpg
thumbnail: /assets/images/covers/2018/remoteevents.jpg
link: /assets/app-images/2018/remoteevents.jpg
tagline: 'Enabling Remote Apple Events in macOS'
tags:
  - mac
categories:
  - tips
cta: 2
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
Enabling remote Apple events

Continuing our run down of the sharing preference pane we’ll cover remote Apple events, remote Apple events allow apps running on other Macs to send commands directly to the Mac with remote Apple events enabled these commands can include “opening an app”, “printing a document” or even playing music.

Basically, remote Apple events allow you to quickly run a task on another Mac without having to use screen sharing.

Go to:

System Preferences > Sharing

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image3.png" class="img-fluid rounded m-2" width="700" />


Check the Remote Apple events option:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image5.png" class="img-fluid rounded m-2" width="700" />


Again, you should specify which users can use remote Apple events using Only these users option to be more specific:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image4.png" class="img-fluid rounded m-2" width="700" />


You will need to know the I.P address of the Mac you have enabled remote Apple events on, you can go back to System Preferences > Network to find the local I.P address or if you want to run these events from outside your local network (home Wi-Fi etc) you will need to obtain your external I.P address from your router and enable port forwarding to your Mac.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image7.png" class="img-fluid rounded m-2" width="700" />

For a simple outline of how to use Apple Script on another Mac to send commands to the Mac you have enabled remote Apple events on:

Firstly, open AppleScript Editor from Applications > Utilities > Script Editor.app

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image6.png" class="img-fluid rounded m-2" width="700" />

And for our first simple script we will simply tell iTunes to open and play on the remote machine.

{% highlight bash %}
setremotemachineto "eppc://192.168.2.3"

tellapplication"finder" ofmachineremotemachine

open("/applications/iTunes.app" asPOSIX fileasalias)

endtell

using terms fromapplication "iTunes"

tellapplication"iTunes" ofmachineremotemachine

setlocalVariabletoplayplaylistnamed "Rock"

endtell

endusing terms from
{% endhighlight %}

Set the I.P address to the machine you have enabled apple Remote events on:

{% highlight bash %}
setremotemachine to "eppc://YOUR I.P ADDRESS"
{% endhighlight %}

You will also need to change the playlist name from rock to one of your playlists:

{% highlight bash %}
setlocalVariabletoplayplaylistnamed "Insert your playlist name”
{% endhighlight %}

Alternatively change the command to just play and iTunes will open and play on the remote machine:

{% highlight bash %}
setlocalVariabletoplay
{% endhighlight %}

Now when you hit run in the Apple Script editor:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image2.png" class="img-fluid rounded m-2" width="700" />

When you first run the script, it will ask you to enter the username and password for the remote machine:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remoteevents/image1.png" class="img-fluid rounded m-2" width="700" />

The remote machine will open iTunes and play the playlist called Rock.

This Apple Script we have custom coded for this tutorial, if you want to learn more go to the Apple Script website [Mac OS X Automation.](https://www.google.com/url?q=https://www.macosxautomation.com/applescript/index.html&sa=D&ust=1523651586212000)

And for more iTunes commands including building a remote player see the Apple  [website.](https://www.google.com/url?q=https://developer.apple.com/library/content/samplecode/AttachAScript/Listings/AttachedScripts_applescript.html&sa=D&ust=1523651586212000)