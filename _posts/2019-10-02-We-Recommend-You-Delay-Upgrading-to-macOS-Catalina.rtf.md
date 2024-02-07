---
layout: post
date: '2019-10-02 00:00 -0500'
author: Jon Brown
permalink: /blog/we-recommend-you-delay-upgrading-to-macos-catalina/
published: true
title: We Recommend You Delay Upgrading to macOS Catalina
description: We Recommend You Delay Upgrading to macOS Catalina
blogimgpath: 20191002We
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2019/New-in-Catalina-photo.jpg
thumbnail: /assets/images/covers/2019/New-in-Catalina-photo.jpg
link: /img/app-images/2019/New-in-Catalina-photo.jpg
cta: 1
comments: true
---
Dear clients,

Apple plans to release macOS 10.15 Catalina sometime in October, and
like all major operating system releases, Apple has been talking it up
since it was introduced at the company's Worldwide Developer Conference
in June. It will feature new Music, TV, and Podcasts apps to replace
iTunes. A new Mac Catalyst technology will make it easier for developers
to make their iPad apps available for the Mac. Photos, Reminders, and
Notes all get major upgrades. Screen Time has migrated over from iOS.
And Sidecar lets you use an iPad as a second screen or graphics tablet
with an Apple Pencil.

Sounds great, doesn't it? It will be... eventually. We are upgrading
non-essential machines right away so we can become more familiar with
the ins and outs of Catalina, but our recommendation to you, right now,
is simple:

**Do not upgrade to Catalina until we give you the go-ahead.**

We know you want to play with all the new features, but Catalina, even
more so than previous major macOS upgrades, is not something you should
install right away. The reason is that Apple changed Catalina in some
fundamental ways that could break your essential apps or workflows. Here
are the issues that cause us to recommend delaying your upgrade:

**32-bit apps don't run anymore:** Macs have had 64-bit processors since
2006, macOS has been gaining 64-bit support since 10.6 Snow Leopard, and
Apple has been warning developers for years that old 32-bit apps would
stop being supported at some point. With Catalina, that time has come.
To identify which 32-bit apps---and portions of apps---won't work in
Catalina, [download and run the free Go64
utility](https://www.stclairsoft.com/Go64/){:rel="nofollow"} from St. Clair
Software. If you rely on any of the software it calls out---pay special
attention to Adobe apps---you'll need to update (which might be
expensive), find an alternative (which could be expensive and requires
learning a new app), or run the app in a virtualization environment like
Parallels Desktop or VMware Fusion (which adds cost and complexity).

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2019/20191002We/Catalina-delay-Go64.png" class="img-fluid rounded m-2" width="800" />

**Catalina runs in its own read-only volume:** To increase security and
ensure that an attacker cannot subvert macOS itself, Apple changed the
disk structures under Catalina. Now, instead of having one main volume
that contains both macOS and your apps and documents, Catalina runs in
its own read-only volume. Some behind-the-scenes magic makes the
Catalina boot volume and the main volume look like a single volume. This
may cause scripts that access files stored in newly changed parts of the
directory hierarchy to break. It will also likely mean that backup apps
like SuperDuper and Carbon Copy Cloner will require updating to be able
to backup and restore data properly. Never upgrade before your backup
app is 100% compatible!

**Newly installed apps must be notarized by Apple:** Notarization is an
automated process that Apple uses to verify that an app distributed
outside the Mac App Store is free of malware. It's not optional---in one
statement, Apple said, "Mac software distributed outside the Mac App
Store must be notarized by Apple in order to run on macOS Catalina."
However, the company has also said that notarization requirements don't
apply to previously distributed software. It's likely that older apps
already on your Mac when you upgrade it will continue to work fine, but
if you try to install an older, unnotarized app on a Mac running
Catalina, that may not work.

**Apps require more permissions than before:** In the last few versions
of macOS, you've probably seen apps asking for permission to do things
like access data in Contacts, Calendars, Reminders, and Photos, or be
able to use the camera or microphone. In Catalina, apps will have to ask
for permission to access files in your Desktop and Documents folders,
iCloud Drive, and external volumes. Plus, you'll be prompted before any
app can capture keyboard activity or a screenshot or screen recording.
That's good for security, but it's possible that older software won't
know how to ask or won't work properly if you deny its request.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2019/20191002We/Catalina-delay-Privacy.png" class="img-fluid rounded m-2" width="800" />

**Kernel extension installs require restarts:** Kernel extensions are
often necessary for third-party hardware peripherals or for apps that
need particularly low-level access to the operating system. Installing
one requires giving it permission in System Preferences \> Security &
Privacy \> General even now in Mojave, and in Catalina, you'll also have
to restart your Mac. Call us suspicious, but we won't be surprised if
problems ensue from these new security requirements, coupled with the
read-only boot volume forcing kernel extensions to run from a new
location.

**Unanticipated backward-compatibility issues:** Here's the scenario.
You upgrade to Catalina, which requires an update to some app you rely
on, call it WhizzyWriter. Unbeknownst to you, the new version of
WhizzyWriter requires a new file format for its documents, and older
versions can't read it. But since you can't upgrade all the Macs in your
office because some still require 32-bit apps, you end up in a situation
where you can't easily share WhizzyWriter documents within the office
anymore. Yes, we're paranoid, but we've seen this sort of thing happen
before.

**Apple's OS release schedule has been troubled this year:** There's one
final reason that Catalina doesn't give us warm fuzzy feelings. In
recent years, Apple has shipped all its operating systems on the same
day, or at least without significant delay. This year, in less than two
weeks, Apple has released iOS 13.0, 13.1, 13.1.1, and 13.1.2; iPadOS
13.1, 13.1.1, and 13.1.2; and watchOS 6.0 and 6.0.1 for the Apple Watch
Series 3, Series 4, and Series 5; along with tvOS 13. For devices that
can't update to iOS 13, Apple also pushed out iOS 12.4.2, and for the
Apple Watch Series 1 and Series 2, which won't get watchOS 6 until later
this fall, Apple released watchOS 5.3.2. Plus, HomePods are still using
iOS 12.4 and even iOS 13.1.2 and iPadOS 13.1.2 still lack some promised
features. Finally, the new Reminders app can't share data with older
versions after you upgrade its database, which means that you can't take
advantage of its new features until you upgrade everything to iOS 13 or
later and Catalina or later. Frankly, it has been a mess.

Traditionally, we've recommended waiting until the .1 or .2 update of
macOS before you consider upgrading. However, with all the trouble Apple
has had shipping this year's crop of operating systems, and all the
problems that Catalina's changes could cause for you, we suggest that
you wait for the 10.15.3 or 10.15.4 update, or get in touch with us
early in 2020. By then, Apple should have a stable release, and we'll
have a good handle on how to work around whatever of these issues you
might encounter.