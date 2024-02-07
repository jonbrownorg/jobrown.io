---
layout: post
date: '2021-08-05'
author: Jon Brown
permalink: /blog/share-files-photos-and-other-data-between-apple-devices-with-airdrop/
published: true
title: "Share Files, Photos, and other Data between Apple Devices with AirDrop"
description: "Share Files, Photos, and other Data between Apple Devices with AirDrop"
blogimgpath: 20210802Sh
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2021/Header-Airdrop.jpg
thumbnail: /assets/images/covers/2021/Header-Airdrop.jpg
cta: 3
comments: true
---
It's common to want to share files, photos, and other data between your
devices---or with friends and family. When the desired person or device
isn't nearby, it's easiest to use Messages or Mail. But what if you want
to move a file between two of your Macs, from your iPhone to your Mac,
or to your friend who's across the table? For transfers within immediate
proximity, Apple provides AirDrop, a quick and easy way to move data
between devices.​ 

### Make Sure AirDrop Is Ready to Go

First off, AirDrop requires both Wi-Fi and Bluetooth, so make sure both
are enabled. If you use wired Ethernet on your Mac, enable Wi-Fi as
well, but put the Wi-Fi service beneath the Ethernet service in System
Preferences > Network (click the down-pointing arrow under the list and
choose Set Service Order).

Next, make sure other devices can discover you. On the Mac, choose Go >
AirDrop and, near the bottom of the Finder window that appears, choose
Everyone from the pop-up menu. (If you're out in public and random
people keep trying to send you files, which would be weird, choose
Contacts Only instead.) On an iPhone or iPad, go to Settings > General
> AirDrop and select Everyone.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Sh/image2.jpeg" class="img-fluid rounded m-2" width="700" />

### Send a File or Photo via AirDrop

Apple has integrated AirDrop into the standard sharing mechanism in
macOS, iOS, and iPadOS, so sharing via AirDrop works the same as sharing
via most other apps.

In the Finder on the Mac, the easiest approach may be to select AirDrop
in a Finder window's sidebar and then drag files to the icon
representing the destination device (below left). You can also select
one or more files and choose File > Share > AirDrop or Control-click
them and choose Share > AirDrop, both of which present a dialog from
which you can select the destination (below right). The right-hand
dialog is also what you'll see if you use the Share option in Photos or
any other app.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Sh/image3.png" class="img-fluid rounded m-2" width="700" />


On an iPhone or iPad, when you're viewing the item you want to share,
tap the Share button to bring up the Share sheet. You may be able to tap
the AirDrop icon for the desired destination directly in the top row,
but if it doesn't show what you want, tap the general AirDrop icon in
the second row to display the AirDrop screen with icons for all
available destinations. Either way, tap the destination to send the
file.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Sh/image4.jpeg" class="img-fluid rounded m-2" width="700" />


### Receive Data via AirDrop

On the receiving side, AirDrop is utterly simple, particularly when
transferring files between your devices, though the experience varies a
little depending on the direction and file type.

-   **Receiving on a Mac:** If you're transferring between your own
    devices, you don't need to do anything; the file will appear in the
    Downloads folder of the destination Mac. Files sent from other
    people will appear there too, but you'll get a prompt asking you to
    accept or decline the file, and if you accept, an option to open it
    in the appropriate app.
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Sh/image5.png" class="img-fluid rounded m-2" width="700" />

-   **Receiving on an iPhone/iPad:** Receiving on an iPhone or iPad is
    similar, with one additional step. Unless iOS/iPadOS knows where the
    file should go (images always import into Photos automatically, for
    instance), it prompts you with a list of apps that can open the
    file. Files you transfer between your own devices are accepted
    automatically; for files from other people, you must tap the Accept
    button first.
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Sh/image6.jpeg" class="img-fluid rounded m-2" width="700" />


### Troubleshooting

AirDrop has been around since Mac OS X 10.7 Lion in 2011 and has seen
significant updates since then. So if you had trouble getting AirDrop to
work years ago, it's worth revisiting the feature. That said, problems
can still crop up:

-   If a Mac doesn't appear as an AirDrop destination, make sure it has
    Wi-Fi active. Ethernet is not sufficient. Also, if the Mac's
    firewall is active, check that it allows incoming connections. Open
    System Preferences > Security & Privacy > Firewall > Firewall
    Options and deselect "Block all incoming connections."

-   If an iPhone doesn't appear as an AirDrop destination, make sure
    Personal Hotspot is turned off in Settings > Personal Hotspot.

-   Because AirDrop relies on Bluetooth and Wi-Fi, interference with
    either, or a separation between devices of more than 30 feet (9
    meters), can cause performance and reliability to suffer.

-   For best results, make sure you're using recent Apple hardware
    running the latest versions of macOS, iOS, and iPadOS. Apple has
    improved AirDrop over the years, and it works significantly better
    than it did years ago. Technically, AirDrop requires a Mac
    introduced in 2012 (excluding the 2012 Mac Pro) or later running OS
    X 10.10 Yosemite or later. On the mobile device side, the iPhone,
    iPad, or iPod touch must be running at least iOS 7.

-   If you're prompted to accept transfers between your own devices,
    that's an indication that the devices aren't logged in to the same
    iCloud account.

-   Although AirDrop has no explicit size limit, very large files (over
    500 MB) will take a long time to transfer and are more likely to
    fail due to network issues during the transfer.

-   If you can't find a transferred file in the destination Mac's
    Downloads folder, remember that it retains its original creation and
    modification dates, so it might be sorting differently than you
    expect.

Next time you need to move data between nearby Apple devices, give
AirDrop a try!