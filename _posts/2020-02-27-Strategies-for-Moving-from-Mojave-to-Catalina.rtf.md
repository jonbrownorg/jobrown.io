---
layout: post
date: '2020-02-27 00:00 -0500'
author: Jon Brown
permalink: /blog/strategies-for-moving-from-mojave-to-catalina/
published: true
title: Strategies for Moving from Mojave to Catalina
description: Strategies for Moving from Mojave to Catalina
blogimgpath: 20200203St
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2020/Header-Catalina-photo.jpg
thumbnail: /assets/images/covers/2020/Header-Catalina-photo.jpg
link: /img/app-images/2020/Header-Catalina-photo.jpg
cta: 3
comments: true
---
For some Mac users, macOS 10.15 Catalina is no longer a choice. That's
because the new 16-inch MacBook Pro and the 2019 Mac Pro that Apple
released late last year ship with Catalina installed and can't run any
previous version of macOS.

But for most people, it's time to consider an upgrade to Catalina. Most
backup software now works with Catalina's bifurcated drive approach that
puts the system on a separate, read-only volume from your data and apps.
We've all had several months to come to terms with the fact that old
32-bit apps won't even launch in Catalina. And Apple has shipped several
updates that bring Catalina to version 10.15.3, addressing most of the
complaints users had with the initial release.

If you are ready to try Catalina but still want to use 10.14 Mojave, we
have some advice for how to make that happen. This could be the case for
someone who has purchased a new Mac that does support Mojave but came
with Catalina installed, for someone who wants to test Catalina while
still using Mojave, or for someone who wants to move on to Catalina but
has a 32-bit app that they aren't ready to say good-bye to.​

**Downgrade from Catalina to Mojave on Some New Macs**

Apple has started installing Catalina on new Macs other than the 16-inch
MacBook Pro and 2019 Mac Pro, but since these older Macs can still run
Mojave, it's possible---if a bit tricky---to downgrade them to Mojave.

System engineer Armin Briegel has worked out [a way of downgrading new
Macs to
Mojave](https://scriptingosx.com/2020/01/downgrading-a-mac-that-shipped-with-catalina-to-mojave/){:rel="nofollow"}.
First, you create a Mojave Installer USB drive. To use that drive to
boot a Mac with a T2 security chip, you must allow external booting from
the Security Utility on the Recovery partition. Once you've booted from
your Mojave Installer drive, use Disk Utility to erase the entire
internal drive. Then install Mojave.​

**Use Virtualization to Keep 32-bit Apps Running**

For some people, what's keeping them on Mojave is a single 32-bit app
that will never be updated in an appropriate fashion. Quicken 2007 falls
into this category, as does the ScanSnap Manager app for the ScanSnap
S1300, S1500, and S1500M scanners. Sure, you can get a current version
of Quicken, but it may not do precisely what you want, and Fujitsu would
be happy to sell you a new ScanSnap scanner that does come with 64-bit
software, but then you'll have to figure out what to do with your old
scanner.

So if you're ready to upgrade to Catalina in general but need to
maintain access to one or two apps, [one solution is virtualization
software](https://tidbits.com/2019/09/18/moving-to-catalina-keep-your-32-bit-mac-apps-running-with-parallels/){:rel="nofollow"}:
either [Parallels Desktop](https://www.parallels.com/){:rel="nofollow"} or
[VMware Fusion](https://www.vmware.com/products/fusion.html){:rel="nofollow"}.
Both apps let you run nearly any operating system---including older
versions of macOS like Mojave---in a *virtual machine*. In essence, they
fool the guest operating system, whether it's Mojave or Windows, into
thinking it's running normally on a computer, when it's actually running
in a virtual environment.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200203St/Parallels-Desktop-install-Mojave.png" class="img-fluid rounded m-2" width="800" />

These apps cost about \$80, and while there's a bit of work in setting
them up (the screenshot below shows the option for installing Mojave in
Parallels Desktop during setup), once you have them configured, it's
easy to run older apps alongside newer ones with little or no
performance hit. This approach is also perfect for a 16-inch MacBook Pro
or Mac Pro that can't run Mojave in any other way.

**Install Catalina and Mojave on Separate APFS Volumes and Switch Boot**

Finally, there's one other option that lets you switch back and forth
between Mojave and Catalina, assuming your Mac supports Mojave. You can
create an APFS volume on your internal drive and install another version
of macOS on that. It's easy, and Apple provides [full
instructions](https://support.apple.com/en-us/HT208891){:rel="nofollow"}. The only
problem with this approach is that you'll have to restart to switch
operating systems, whereas both are available simultaneously with the
virtualization solution.

First, make sure you have at least one current backup of your Mac, since
it's foolhardy to adjust your drive structure without one. Next, in Disk
Utility, select your internal drive, choose Edit \> Add APFS Volume, and
click Add. We recommend naming the drive such that it will be clear
what's on it.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200203St/Startup-Disk-pref-pane.png" class="img-fluid rounded m-2" width="800" />

Then [boot into macOS Recovery and install the desired version of
macOS](https://support.apple.com/en-us/HT204904){:rel="nofollow"} on your new
volume. The keys you hold down to get into Recovery determine which
version of macOS you'll get:

-   **Command-R** reinstalls the latest version of
    macOS that was installed on your Mac.
-   **Command-Option-R** upgrades to the latest
    version of macOS that's compatible with your Mac.
-   **Command-Shift-Option-R** reinstalls the
    version of macOS that came with your Mac, or the closest version
    still available.

Choose Reinstall macOS from the macOS Utilities window and proceed from
there.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200203St/Recovery-Reinstall-macOS.jpg" class="img-fluid rounded m-2" width="800" />

Once the installation is complete, to [switch from one version of macOS
to another](https://support.apple.com/en-us/HT202796){:rel="nofollow"}, open System
Preferences \> Startup Disk, choose the desired volume to boot from, and
then click Restart. Or, press Option at startup and select the desired
volume from the Startup Manager screen.

Needless to say, the decision about when and how to upgrade to Catalina
isn't a trivial one, so feel free to contact us to discuss your
particular situation or to get help with any of the procedures that
we've described in this article.