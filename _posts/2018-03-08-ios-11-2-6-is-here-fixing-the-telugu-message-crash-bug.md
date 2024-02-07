---
layout: post
date: '2018-03-08 23:21 -0500'
author: Jon Brown
permalink: /blog/telugu-message-crash-fixed/
published: true
type: BlogPosting
title: 'iOS 11.2.6 is here, fixing the Telugu message crash bug'
tagline: 'iOS 11.2.6 is here, fixing the Telugu message crash bug'
tags:
  - tutorials
  - ios
categories:
  - tips
image: /assets/images/covers/2018/telugu.jpg
thumbnail: /assets/images/covers/2018/telugu.jpg
link: /assets/app-images/2018/telugu.jpg
cta: 2
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
<img src="{{ site.site_cdn }}/assets/images/blog/2018/telugu/image1.png" class="img-fluid rounded m-2" width="700" />

Apple also released updates for macOS 10.13.3, tvOS 11.2.6, and watchOS 4.2.3 , these updates are just patches to fix the "Telugu" bug which causes apps like messages to crash when a single character of the Telugu language is sent to them, Telugu is a Dravidian language native to India.

These updates also fix other bugs, including a macOS bug which displays messages in the Messages app in the wrong order.

The bug surfaced on a bug report site called Open Radar just over a week ago, and is as simple as sending a Telugu language character to the device which causes the device to crash.

Apple’s security update outlines the bug as a "memory corruption issue" caused by "processing a maliciously crafted string".

The "Telugu" bug is the latest in a series of "text bomb" bugs to affect iOS devices.
These updates are a quick install via Settings > General >Software Update, however the macOS update via the App store requires your Mac is restarted.