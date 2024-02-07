---
layout: post
date: '2018-01-18 19:16 -0500'
author: Jon Brown
permalink: /blog/faster-icloud-access/
published: true
type: BlogPosting
title: Faster software updates and iCloud access
image: /assets/images/covers/2018/icloud-content-caching-wide.jpg
thumbnail: /assets/images/covers/2018/icloud-content-caching-wide.jpg
link: /assets/app-images/2018/icloud-content-caching-wide.jpg
tagline: Faster software updates and iCloud access
tags:
  - tutorials
  - mac
categories:
  - tips
---
<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image6.png" class="img-fluid rounded m-2" width="750">

You can easily increase the performance of your iCloud access and the time it takes to perform updates across all your Apple devices using OSX & iOS. That includes your Mac(s) your Apple TV and your iPhone(S) & iPad(s).

It’s not difficult to do and won’t cost you a cent!

Using High Sierra’s content caching the software updates for iOS (your iPad, iPhone, & Apple TV) & OS X (your Mac) are stored on one of your Macs. Then your other Apple devices can access that content quickly from your local home or office network instead of each device downloading the content separately from the internet (Apple’s Servers).

This is also a great feature if you do not have unlimited bandwidth on your internet connection as the updates only need to be downloaded once.

Ideally the Mac you set up content caching on should be connected to the local network using Ethernet so it has the maximum available bandwidth from your router.

Content caching is not new to OSX it’s been available as part of macOS Server 10.7 (Lion) and up so it’s a well-established and stable service. Although it has only appeared in the retail version of OSX in High Sierra as of Fall 2017.

Content caching is smart if you have more than one Mac you can enable content caching on the other Macs as well and the devices will intelligently select the best Mac to use to access software updates and iCloud content from, this will spread any demands on your local networks bandwidth.
Without further ado, this is how to set it up (it’s really easy)

Open System Preferences from the Apple Menu or the Dock.

Then click on the Sharing icon:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image8.png" class="img-fluid rounded m-2" width="750">

Click on Content Caching when you are in the sharing pane:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image7.png" class="img-fluid rounded m-2" width="750">

And put a check in the box to turn it on:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image10.png" class="img-fluid rounded m-2" width="750">

Once You’ve turned Content Caching on in the Sharing pane you can set the location for the cache, if you have more than one hard drive then this can be an important step. You may also want to limit the Cache Size so it doesn’t fill your chosen hard drive.

Click on Options:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image9.png" class="img-fluid rounded m-2" width="750">

To set the Cache location click on edit and select the drive you would like to use:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image2.png" class="img-fluid rounded m-2" width="750">

I’m going to move the cache location from the SSD to the 4TB hard drive instead.

If you set the options first before enabling Content Caching then you won’t have to wait while the system moves the cache between drives, it does however do this very quickly at first so it’s not absolutely necessary to do it in that order.

I’m also going to limit the cache size to 1TB on this drive, I don’t anticipate it getting this large but better safe than sorry.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image1.png" class="img-fluid rounded m-2" width="750">

Holding down the alt or option key when you are in the sharing pane the Options button will change to Advanced Options.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image4.png" class="img-fluid rounded m-2" width="750">

Now you can fine tune the options for the Content Caching and get a little peek under the hood.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image3.png" class="img-fluid rounded m-2" width="750">

If you want to explore these options and need a guide Apple has one [here](https://support.apple.com/en-gb/guide/mac-help/set-up-content-cache-clients-peers-or-parents-mchl9b56e1cf).

There is also an option to “Share Internet Connection” the setting is explained well enough in the sharing preference pane itself: “Share this computer’s Internet connection and cached content with iOS devices connected using USB.”

<img src="{{ site.site_cdn }}/assets/images/blog/2018/fastericloud/image5.png" class="img-fluid rounded m-2" width="750">

