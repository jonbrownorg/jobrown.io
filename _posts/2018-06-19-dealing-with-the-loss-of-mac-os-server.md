---
layout: post
date: '2018-06-19 00:00 -0500'
author: Jon Brown
permalink: /blog/dealing-with-the-loss-of-mac-os-server/
published: true
type: BlogPosting
title: How to Deal with macOS Server Losing Many of Its Services
tagline: How to Deal with macOS Server Losing Many of Its Services
tags:
  - Mac
  - iOS
categories:
  - news
image: /assets/images/covers/2018/macos-server-hero-740x400.jpg
thumbnail: /assets/images/covers/2018/macos-server-hero-740x400.jpg
link: /assets/app-images/2018/macos-server-hero-740x400.jpg
cta: 4
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---

### How to Deal with macOS Server Losing Many of Its Services
---

For many years, Apple has sold [macOS Server](https://itunes.apple.com/us/app/macos-server/id883878097?mt=12) (previously called OS X Server) for those who wanted to run various Unix-based Internet services on a Mac. Server became popular because it put an easy-to-use graphical interface on top of the Unix apps, allowing Mac users to avoid complicated configuration files and reducing the need to work at the command line.

At its peak, Server boasted 24 different Internet services, but since then Apple has pared down what it can do, such that recent versions of macOS Server offer only 13 services. Now, however, [Apple has announced](https://support.apple.com/en-us/HT208312) that, in a Fall 2018 update, it will be eliminating all but 3 services: Open Directory, Profile Manager, and Xsan storage management.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/macosserver/Server-Profile-Manager.png" class="img-fluid rounded m-2" width="700" />

To prepare for that, Apple has done two things. First, the most popular features of Server—Caching Server, File Sharing Server, and Time Machine Server—are now part of macOS 10.13 High Sierra. Caching Server reduces Internet usage by sharing software distributed by Apple (updates and apps) and iCloud data from one Mac to other Apple devices on a local network. File Sharing Server lets you create a shared folder that multiple Macs can access. And Time Machine Server lets you specify a shared folder as a destination for Time Machine backups from other Macs on the network.

Second, new installations of the current macOS Server 5.6 and 5.6.1 hide quite a few services, including Calendar, Contacts, DHCP, DNS, Mail, Messages, NetInstall, VPN, Websites, and Wiki. If they were configured in a previous version of Server that’s being upgraded, they’ll still be available. For each of the services to be removed, Apple suggests open-source alternatives, but most don’t have Mac-specific interfaces that simplify management.

What to do? If you’re running Server now, nothing needs to change right away, or perhaps even for some time. Nothing Apple does to a future version of Server will affect your existing installation. The only problem is that you won’t get updates that could be important for security, stability, or interoperability. Contact us to see what solutions we recommend for the services you rely on.

That said, if you’re running Caching Server, File Sharing Server, or Time Machine Server now, it might be worth transitioning those to a Mac running High Sierra, though it’s safest to check with us first in case you have a usage scenario that may not transfer cleanly. The first two are easy to turn on and configure in System Preferences > Sharing; just click the checkbox next to their names in the Service list and adjust the settings in the pane to the right.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/macosserver/Server-Content-Caching.png" class="img-fluid rounded m-2" width="700" />

Time Machine Server is a bit more complicated. To enable it, turn on File Sharing, share a folder (likely on an external drive), and then Control- or right-click the folder from within the Sharing preference pane, choose Advanced Options, and select “Share as a Time Machine backup destination.”

<img src="{{ site.site_cdn }}/assets/images/blog/2018/macosserver/Server-Time-Machine.png" class="img-fluid rounded m-2" width="700" />

If you’re not currently running Server and are looking to add calendar sharing, a mail server, or an internal wiki, we can’t recommend getting started with Server. It’s not a relationship that will end well, and we can recommend more capable alternatives. Even if you’re just looking for a way of distributing settings to Macs and iOS devices in your organization, Server’s Profile Manager often isn’t the best choice. So again, get in touch and let us know what you’re trying to achieve and we can both make recommendations and help with setup and maintenance.