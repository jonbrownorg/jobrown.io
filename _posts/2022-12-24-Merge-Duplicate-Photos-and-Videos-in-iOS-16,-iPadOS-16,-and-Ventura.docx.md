---
layout: post
date: '2022-12-24'
author: Jon Brown
permalink: /blog/merge-duplicate-photos-and-videos-in-ios-16-ipados-16-and-ventura/
published: true
title: "Merge Duplicate Photos and Videos in iOS 16, iPadOS 16, and Ventura"
description: "Merge Duplicate Photos and Videos in iOS 16, iPadOS 16, and Ventura"
blogimgpath: 20221203Me
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2022/Header-DuplicatesPhotos.jpg
thumbnail: /assets/images/covers/2022/Header-DuplicatesPhotos.jpg
cta: 1
comments: true
---
It's all too easy to end up with duplicate photos and videos in your
Photos library. The most common way is to use the Duplicate command, but
we've seen duplicates appear due to accidentally repeated actions in
other apps, repeated screenshots, multiple imports that include the same
image (much as Photos tries to prevent this now), and buggy behavior in
iCloud Photos.

Identifying duplicate photos and videos is difficult to do manually.
Although the human eye is good at noticing when things aren't the same,
it's much harder to determine if two images are identical. And which of
two identical images you want to keep can require that you compare file
formats, sizes, and other metadata, which is fussy, tedious work.

Apple has come to the rescue with a new duplicate identification and
merging capability in Photos in iOS 16, iPadOS 16, and macOS 13 Ventura.
It may not be perfect, but it's a good start and extremely easy to use.

To get started on the iPhone, tap Albums in the toolbar, scroll down to
the Utilities section, and tap Duplicates (left). On the iPad,
Duplicates appears in the sidebar under Utilities (middle), and on the
Mac, it's in the sidebar under the top-level Photos section (right).

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221203Me/image2.jpeg" class="img-fluid rounded m-2" width="700" />


Even if you use iCloud Photos, which syncs your photos and videos
between all your devices, you may not see the same number of duplicates
on each device. We're not sure why this is the case---perhaps Apple's
code isn't identical between platforms---but it may be necessary to run
through the merging process on multiple devices to catch everything.
Plus, it seems as though Photos identifies new duplicates slowly in the
background, so the Duplicates album may not include new duplicates right
away.

Regardless, once you're in the Duplicates album, you'll see a scrolling
list of all duplicate photos and videos. Photos automatically displays
the file size on each item so you can see that some are smaller than
others. Tap the ••• button at the top right on the iPhone or iPad, or
use the Filter By menu on the Mac to show all items, just photos, or
just videos. You can also switch between a square grid and one that
preserves the aspect ratio of the images---the control is in the
••• menu on the iPhone, the Aspect/Square button on the iPad, and the
thumbnail toggle button next to the size slider on the Mac.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221203Me/image3.jpeg" class="img-fluid rounded m-2" width="700" />


Note that Photos explains at the bottom of the screen what counts as a
duplicate. Exact duplicates do, of course, but Photos also matches
images that differ in size or other metadata. It may also identify
images that are very nearly the same.

You can tap or click each image in a set to view it at full size, and if
you were a glutton for punishment, you could delete one of the images in
the set manually with the trash button. But there's no reason to do that
because Photos provides a Merge button (or link, on the Mac) next to
each set. Tap or click that, and Photos will keep one version that
combines the highest quality and relevant metadata, moving the rest to
Recently Deleted. Note that Photos tells you when duplicates are exact
(left) or very similar (right).

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221203Me/image4.jpeg" class="img-fluid rounded m-2" width="700" />


When you have lots of duplicates, using the Merge button for each set
will be time-consuming. Instead, tap the Select button at the top on the
iPhone and iPad. Then you can tap to select individual photos (which you
could then trash manually; left), tap the Select button next to
duplicates to select them (right), or tap the Select All button to
select everything. Once you select one or more duplicate sets, a Merge
link appears at the bottom. Tap that to merge the selected duplicates.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221203Me/image5.jpeg" class="img-fluid rounded m-2" width="700" />


If you don't want to verify each of the duplicates Photos has found, the
process becomes as simple as this:

1.  Open the Duplicates album.

2.  Tap Select.

3.  Tap Select All.

4.  Tap Merge (###).

Boom, you're done, regardless of how many hundreds or thousands of
duplicates you had.

In our testing, Photos does a pretty good job, but for another approach,
check out [PowerPhotos](https://www.fatcatsoftware.com/powerphotos/),
which uses a different visual comparison engine and may identify more
images that are sufficiently similar to qualify as duplicates in your
mind. It costs $29.95, but you can use its free trial to see if it will
help your duplicate problem.

