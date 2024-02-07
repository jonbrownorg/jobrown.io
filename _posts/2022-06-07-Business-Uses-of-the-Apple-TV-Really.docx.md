---
layout: post
date: '2022-06-07'
author: Jon Brown
permalink: /blog/business-uses-of-the-apple-tv-really/
published: true
title: Business Uses of the Apple TV
description: Business Uses of the Apple TV
blogimgpath: 20220603Bu
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2022/Header-AppleTVBusinesss.jpg
thumbnail: /assets/images/covers/2022/Header-AppleTVBusinesss.jpg
cta: 2
comments: true
---
Many people have an Apple TV in the living room, hooked to a
large-screen TV. It's a great streaming media box for Apple TV+,
Netflix, Amazon Prime Video, and a slew of other services. It even
supports a bunch of games. Don't let the Apple TV's consumer focus fool
you, though. It's also a highly useful device for businesses in two
important ways: digital signage and presentation display.​

### Apple TV for Digital Signage

For businesses that need to post signs, it's easy to print something out
and stick it on the wall. But that can get out of hand quickly, and once
you have more than a couple of sheets of paper posted, people won't read
them. And, let's face it, a piece of paper taped to the wall isn't
exactly eye-catching. Professional-level design and large-format
printing can help, but then costs start going up quickly, and print
signs aren't easy to update.

An Apple TV coupled with an inexpensive TV might be a better solution.
Conceptually, a digital sign is just one or more graphics displayed on a
screen, rotating as necessary---it's a slideshow. For a one-off
solution, you could add some images to Photos and display them as a
slideshow or as a screen saver. If you go this route:

-   Make your images 1920 pixels wide by 1080 pixels high, assuming that
    your Apple TV's resolution is set to 1080p in Settings > Video &
    Audio > Resolution. (If not, match whatever you're using there.)

-   Avoid putting content within 60 pixels of the top and bottom of the
    screen and within 80 pixels of either side. Content can be difficult
    to read near the edge, and it may be cropped due to overscanning on
    older TVs.

-   It's safest to set up a clean Apple ID for the Apple TV to ensure
    that Photos contains no personal snapshots.

-   After creating images on your Mac, add them to a shared album in
    Photos that's shared with the Apple TV's dedicated Apple ID.

-   On the Apple TV, open the Photos app, go into Shared, select the
    album, and start the slideshow or set the album as a screen saver.
    If Shared doesn't appear, turn it on in Settings > Users and
    Accounts > *Your Name* > Shared Albums.

-   If you use the Set As Screensaver option, you must still configure
    it in Settings > General > Screen Saver.

-   For either the slideshow or the screen saver, set the theme to
    Classic for a simple, full-screen display. Make sure Repeat Photos
    is on (slideshow only), set the Time Per Slide to 20 seconds, and
    stick with a simple Transition.
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20220603Bu/image2.jpeg" class="img-fluid rounded m-2" width="700" />


For more capabilities when creating and switching among slides, turn to
a digital signage app. Searching on the Apple TV's own App Store will
reveal numerous digital signage apps, including [DigiBoard
TV](https://digiboardtv.com/) and [ez plus](https://eztv.plus/).

If you have multiple Apple TVs running digital signage, such as in a
hotel, you'll want to manage them via an MDM solution like
[Addigy](https://support.addigy.com/hc/en-us/articles/4414344290707-How-To-Enroll-an-Apple-TV-using-Apple-Configurator-2),
[Hexnode](https://www.hexnode.com/mobile-device-management/apple-tv-mdm/),
[Jamf Pro](https://www.jamf.com/solutions/device-management/),
[Kandji](https://support.kandji.io/enrolling-apple-tv), or
[SimpleMDM](https://simplemdm.com/enroll-appletv-mdm/) (to name just a
few that support Apple TV management). Details vary, but it's important
to be able to lock the Apple TV to a single digital signage app that
will be the only thing that runs and that automatically launches
whenever the Apple TV reboots after updating tvOS or after a power
failure. (You can also [set this mode via Apple
Configurator](https://support.apple.com/guide/apple-configurator-2/start-single-app-mode-cadbf9c172/mac)
if you don't have an MDM solution.)

For industrial-strength digital signage, look to systems like
[Carousel](https://www.carouselsignage.com/) and
[Kitcast](https://kitcast.tv/). They offer significant feature sets but
charge $20--$25 per screen per month, making them appropriate mostly
in larger business scenarios.​

### Apple TV for Presentations

The other notable business capability of the Apple TV is displaying
presentations on a large-screen TV via AirPlay, which lets you avoid the
cabling issues and extra hardware associated with projectors. To enable
that, Apple added Conference Room Display mode to tvOS to make it easier
for people to connect to the Apple TV via AirPlay.

First, make sure AirPlay is on in Settings > AirPlay and HomeKit. Then,
in Settings > AirPlay and HomeKit > Conference Room Display, enable
Conference Room Display. Once it's on, you can:

-   Require a PIN on every use of AirPlay. Enable this setting if you're
    concerned about someone sending inappropriate content to the TV.

-   Set a custom message for the onscreen alert that encourages people
    to use AirPlay whenever the Apple TV is in Conference Room Display
    mode.

-   Choose a custom photo as the background whenever the Apple TV is in
    Conference Room Display mode.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20220603Bu/image3.jpeg" class="img-fluid rounded m-2" width="700" />

From then on, when you turn on the Apple TV, it will open to the
Conference Room Display screen and alert. Note that the screen saver
plays while in Conference Room Display mode, although the alert may
obscure any digital signs you want to display using the screen saver.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20220603Bu/image4.jpeg" class="img-fluid rounded m-2" width="700" />

AirPlay is the key for sharing screens, displaying Keynote or PowerPoint
presentations, or playing videos on an Apple TV in Conference Room
Display mode. From a Mac, go to System Preferences > Displays and
choose the Apple TV from the Add Display pop-up menu. From an iPhone or
iPad, go into Control Center, tap the Screen Mirroring button, and
select the Apple TV from the list.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20220603Bu/image5.jpeg" class="img-fluid rounded m-2" width="700" />

What if someone wants to play a presentation from a Windows PC or share
its screen? The solution, though it requires advance setup, is the
$17.99 [AirParrot](https://www.airsquirrels.com/airparrot/), which
enables PCs to [share screens with Apple
TVs](https://www.airsquirrels.com/airparrot/faq/stream-windows-to-apple-tv).

This is a high-level overview of how you can leverage an Apple TV for
digital signage and presentation display---there are lots of details
that may be important in your particular situation. If you need help
creating an ideal configuration, don't hesitate to ask us.