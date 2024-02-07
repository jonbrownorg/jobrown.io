---
layout: post
date: '2022-06-26'
author: Jon Brown
permalink: /blog/copy-and-paste-between-your-apple-devices-with-universal-clipboard/
published: true
title: Copy and Paste between Your Apple Devices with Universal Clipboard
description: Copy and Paste between Your Apple Devices with Universal Clipboard
blogimgpath: 20220603Co
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2022/Header-ClipboardUni.jpg
thumbnail: /assets/images/covers/2022/Header-ClipboardUni.jpg
cta: 2
comments: true
---
Everyone is accustomed to using the Copy and Paste commands on the Mac,
but fewer people know that you can also copy and paste between your Mac
and your iPhone and iPad. Apple calls this feature Universal Clipboard,
and it's so deeply integrated into macOS, iOS, and iPadOS that it can be
easy to miss. You won't find a switch for Universal Clipboard or any
other mention of it in System Preferences or Settings.

To use Universal Clipboard, all you have to do is copy some content---a
bit of text, an image, a video---on one device, switch to another
device, and paste it into an app that can accept the copied content.
It's a great way to move data between your devices. (When going from Mac
to Mac, you can also copy and paste entire files in the Finder.)

Or at least there's no fuss if you have the right settings enabled on
all your devices---miss even one of these and Universal Clipboard won't
work. Here are the necessary supporting conditions:

-   **Apple ID:** Each device must be signed in to iCloud using the same
    Apple ID. Ensure this is the case in System Preferences \> Apple ID
    on the Mac and in Settings \> *Your Name* on the iPhone and iPad.

-   **Bluetooth:** Each device must have Bluetooth turned on. On the
    Mac, look in System Preferences \> Bluetooth (or Control Center, or
    the Bluetooth menu); on an iPhone or iPad, check Settings \>
    Bluetooth (or Control Center).

-   **Wi-Fi:** Each device must have Wi-Fi turned on and connected to
    the same Wi-Fi network. It's unlikely this wouldn't be the case, but
    you can verify it in System Preferences \> Wi-Fi (or Control Center,
    or the Wi-Fi menu); on an iPhone or iPad, check Settings \> Wi-Fi
    (or Control Center).

-   **Handoff:** Each device must have Handoff enabled. Check that on
    the Mac in System Preferences \> General and on an iPhone or iPad in
    Settings \> General \> AirPlay & Handoff. There's almost no reason
    to disable Handoff, so it should be on.

-   **Recent devices:** Your devices must be relatively recent---from
    the last 7--10 years---and running at least macOS 10.12 Sierra or
    iOS 10. In other words, don't expect Universal Clipboard to work on
    some ancient MacBook or iPad.

If those settings are all correct, but Universal Clipboard still isn't
working, restart your devices and verify that they all have Wi-Fi and
Internet connectivity when they come back up.

Most of the time, however, Universal Clipboard just works. It normally
transfers the data between devices almost instantly, although if you
copy a particularly large image or video on one device and switch to
another, you may see a progress dialog while it finishes moving the
data. In the screenshot below, Universal Clipboard didn't even have time
to calculate the time remaining before it finished pasting a photo.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20220603Co/image2.png" class="img-fluid rounded m-2" width="700" />


Remember that Universal Clipboard simply populates each device's
clipboard just as though you had copied from that device. As soon as you
copy something else on any device, it immediately replaces whatever came
in from Universal Clipboard. Plus, if you copy something but don't paste
it on another device right away, the clipboard on that device may revert
to its previous contents after about 2 minutes.
