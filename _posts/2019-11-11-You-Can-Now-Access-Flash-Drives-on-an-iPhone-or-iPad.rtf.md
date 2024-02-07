---
layout: post
date: '2019-11-11 00:00 -0500'
author: Jon Brown
permalink: /blog/you-can-now-access-flash-drives-on-an-iphone-or-ipad/
published: true
title: You Can Now Access Flash Drives on an iPhone or iPad
description: You Can Now Access Flash Drives on an iPhone or iPad
blogimgpath: 20191101Yo
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2019/Header-USB-storage-photo.jpg
thumbnail: /assets/images/covers/2019/Header-USB-storage-photo.jpg
link: /img/app-images/2019/Header-USB-storage-photo.jpg
cta: 1
comments: true
---
An unexpected and useful feature of iOS 13 and iPadOS 13 is also nearly
invisible, and for most uses, requires a special adapter. With this
feature, the Files app now can "see" external storage
devices.

That's huge---now you can move data to and from an iPhone or iPad using
standard flash drives, SD card readers, or even powered USB hard drives.
It's also a great way to play videos and other data that won't fit in
the available free space on your device. (You'll still need an app on
the iOS device that knows how to open the files---for videos, try [VLC
for
Mobile](https://apps.apple.com/us/app/vlc-for-mobile/id650377962){:rel="nofollow"}.)

iOS should be able to read any unencrypted file system supported by the
Mac's Disk Utility, including the PC-focused MS-DOS (FAT) and exFAT, and
the Apple-focused MacOS Extended (HFS+) and APFS. If you're formatting a
drive for sharing with a PC, we recommend exFAT; for use within the
Apple ecosystem, use Mac OS Extended.​

**Necessary Hardware**

If you plan to use a flash drive with an iPhone or iPad regularly, it's
worth buying a new [MFi Lightning flash
drive](https://www.amazon.com/s?k=MFi+Lightning+drive&i=electronics){:rel="nofollow"}
that you can plug in directly. Apple's MFi program should ensure that
drives with that label meet the necessary power and file system
requirements. Or, if you have a 2018 iPad Pro model with USB-C, get a
[USB-C flash
drive](https://www.amazon.com/s?k=USB-C+flash+drive&i=electronics){:rel="nofollow"}.

But what about all those USB flash drives and hard drives you already
have? To connect those to a Lightning-based iPhone or iPad, you'll need
Apple's \$39 [Lightning to USB 3 Camera
Adapter](https://www.apple.com/shop/product/MK0W2AM/A/lightning-to-usb-3-camera-adapter){:rel="nofollow"}.
For the USB-C iPad Pro models, any USB-C hub with a USB-A port should
work.

There is one big gotcha, which is that many USB flash drives require 500
milliamps (mA) of power, which is more than the iPhone or iPad can
provide. When that's the case, iOS will usually alert you to the problem
(or the drive simply won't show up in Files). You'll need to provide
extra power by plugging a standard Lightning-to-USB cable into the
adapter and a power source. That passthrough power should usually be
enough to charge the device and run the flash drive, although we've seen
flash drives that work with the iPhone 11 Pro but not with a 10.5-inch
iPad Pro. (Avoid Apple's older \$29 [Lightning to USB Camera
Adapter](https://www.apple.com/shop/product/MD821AM/A/lightning-to-usb-camera-adapter){:rel="nofollow"},
which supports only the slower USB 2 and doesn't provide passthrough
power.)

Happily, flash drives that require only 100 mA of power work fine
without additional power. To learn how much power a drive requires,
connect it to your Mac, open the System Information app (in the
Applications folder's Utilities folder), click USB in the sidebar,
select the drive in the USB Device Tree at the top, and then read the
Current Required line.

**Accessing Your Drive**

Once you've connected a drive to your device, you can access it in
Files. On the iPhone, or if you're using your iPad in portrait
orientation, tap the Browse tab at the bottom of the screen. On an iPad
in landscape orientation, Browse appears automatically in the sidebar.

Either way, you can find your drive in the list of locations---remember
that flash drives are often called Untitled or have funky names.​

**Copying Files to and from Your Drive**

The Files app works a bit like the Mac's Finder in that it lets you copy
files by dragging or by using Copy and Paste. This latter approach is
often easier:

1.  In Files, navigate to the file you want to
    copy.
2.  Tap and hold it until a popover appears with
    commands.
3.  Tap Copy in the popover.
4.  Tap the Browse tab to return to the Browse
    screen, and then tap your flash drive.
5.  Tap a blank spot in the flash drive's
    directory, and then tap Paste in the popover.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2019/20191101Yo/USB-storage-Split-View.jpg" class="img-fluid rounded m-2" width="800" />

Moving a file works similarly, except that once you tap Move in the
popover, iOS displays a list of destinations.

Dragging to copy a file is easier on the iPad if you open two Files
windows showing different locations in Split View. With Files as the
frontmost app, swipe up to reveal the Dock, and then tap and hold the
Files icon briefly so you can drag it to the left or right edge of the
screen. Then, to copy files, simply drag them from one view to the
other.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2019/20191101Yo/USB-storage-copying-files.jpg" class="img-fluid rounded m-2" width="800" />

Even without Split View, you can also drag to copy files on the iPhone.
Tap and hold the file you want to copy, but instead of letting up or
working with the popover, start dragging. Then, with another finger
(your thumb may work well), tap the Browse tab to switch back to the
Browse screen, and then keep dragging the file onto your flash drive. If
you're dextrous, you can even tap the flash drive with another finger to
open it---do this to nest the dragged file into a sub-folder on the
flash drive.

Obviously, you can also use the commands in the tap-and-hold popover to
perform numerous other actions on files. These commands include
Duplicate, Delete, Info, Quick Look, Tags, Rename, Share, Compress, and
Create PDF.

One last thing. On the Mac, you need to eject external storage devices
manually by dragging their icons to the Trash, Control-clicking them and
choosing Eject, or pressing Command-E. Once you've done that, you can
unplug the drive. Happily, that's not necessary for drives mounted in
iOS---just use common sense and don't remove a flash drive while files
are being read or written.