---
layout: post
date: '2024-07-27'
author: Jon Brown
permalink: /blog/platypus-walkthrough-and-review/
published: true
title: "Platypus Walkthrough and Review"
description: "Platypus Walkthrough and Review"
blogimgpath: 20240728Up
tags:
  - MacOS
  - iOS
categories:
  - reviews
  - video
image: /assets/images/covers/2024/Header-Platypus.jpg
thumbnail: /assets/images/covers/2024/Header-Platypus.jpg
cta: 2
comments: true
---
### Platypus: Build your own Mac Apps with Scripts!

Platypus is an amazing Mac Admins utility that allows you to take virtually any script and convert it into a GUI Application. Lets take a look at what it is and what it can do. 

Ok so the first thing we need is a scrip to get started with so lets start with a script that I wrote to determine if Google Drive is running. As you can see this simple script just checks to see if its running and returns a value.

If its not running then it opens the app, if it is running then it prints "Running"

{% highlight bash %}
#!/bin/bash

if [[ ! $(ps axo pid,command | grep "[G]oogle Drive.app") ]]; then
    open -a Google\ Drive.app
else
    echo "Running"
fi
{% endhighlight %}

Now that we have a script its time to open the Platypus app. Here you can see we have lots of options. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240728Up/step1.png" class="img-fluid rounded m-2" width="800" />

The important options are to 

1. Set an App Name. 
2. Select the Script Type (In this case its bash or SH)
3. Set an App Script (Path). 
4. Set the app interface. Here I am setting Text Window. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240728Up/step2.png" class="img-fluid rounded m-2" width="800" />

These are the primary options you need to set. There are other values for interface type, those are none, progress bar, webview, status menu, and droplet. Each of these has their own purpose and use case. 

For me I want the user of my app to see the output text so I will choose Text Window as thats the default behavior of this interface. If you choose progress bar, then it will show the progress of a script without any verbose text outputs. 

Webview is great if you have a webpage you want to display to the end user while the app is running. Status menu allows the app to run in the top status bar and droplet allows your app to accept users ability to drop items into the app as a variable input. 

Now that I have the app values set I need to build or create the app and when I do I am asked to save the app. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240728Up/step3.png" class="img-fluid rounded m-2" width="800" />

Now its time to run the app, here you can see I am getting an error output because not only is Google Drive not running, its not even installed on my system. So I ether need to modify the script to account for that possibility or I need to pick a different type of interface if I do not want the user to see this message. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240728Up/step4.png" class="img-fluid rounded m-2" width="800" />

As you can see Platypus is an amazing tool that allows any Mac Admin to take a script and turn it into a viable application quickly and easily. 

{% include videos/video.html id="t8u_zXcGTGI" header="/images/covers/2024/Header-Platypus.jpg" %}