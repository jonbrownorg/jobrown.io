---
layout: post
date: '2017-12-24 23:46 -0500'
author: Jon Brown
permalink: /blog/high-sierra-breaks-bootcamp/
published: true
type: BlogPosting
title: High Sierra using APFS breaks Boot Camp switching
image: /assets/images/covers/2017/option-reboot-choose-partition.jpg
thumbnail: /assets/images/covers/2017/option-reboot-choose-partition.jpg
link: /assets/app-images/2017/option-reboot-choose-partition.jpg
tagline: High Sierra using APFS breaks Boot Camp switching
tags:
  - tutorials
  - mac
categories:
  - product-reviews
  - tips
---
If like me you use the Boot Camp Control panel in Windows to restart your Mac into High Sierra and you are using an SSD drive for High Sierra, you may or may not notice that you can no longer choose your Macintosh startup disk in the Boot Camp Control Panel in Windows.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/bootcampbreak/image1.png" class="img-fluid rounded m-2" width="750">

The Windows “Boot Camp” partition will be selectable but that is all.

And if you have set the Windows Boot Camp partition as the Startup Disk in System preferences > Startup Disk in High Sierra then you will be stuck in a loop whereby every time you start up your Mac the Mac will boot into Windows.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/bootcampbreak/image3.png" class="img-fluid rounded m-2" width="750">

Unfortunately, there is currently no way to fix the Boot camp control panel in Windows and this bug is related to Apple File System (APFS). However, the solution is very simple if not somewhat annoying.

As soon as your Mac starts so as soon as the startup chime finishes press and hold the alt (option) key <kbd>⌥</kbd>.

Let go of the alt (option) key <kbd>⌥</kbd> as soon as the Startup Manager window appears
Select your Macintosh HD (you can use the arrow key on the keyboard or click with your mouse or trackpad) in this case it’s Called SamSSD:

<img src="{{ site.site_cdn }}/assets/images/blog/2017/bootcampbreak/image2.png" class="img-fluid rounded m-2" width="750">

And hit Enter or click the arrow under the drive you want to boot from.

I recommend once you have booted into High Sierra that you go to: System preferences > Startup Disk

And make sure your Macintosh HD or the boot volume for High Sierra whichever you prefer to call it is selected and to switch between Windows Boot Camp and High Sierra you press and hold the alt (option) key <kbd>⌥</kbd>  on startup, this will keep you out of a confusing boot sequence.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/bootcampbreak/image4.png" class="img-fluid rounded m-2" width="750">

This bug is due to the updated Apple File System (APFS) and we will let you know if Apple provides a fix to this with the Windows boot Camp Control panel. If you install High Sierra on a non SSD hard drive you will not come across this bug.
