---
layout: post
date: '2021-03-23'
author: Jon Brown
permalink: /blog/having-trouble-finding-files-on-your-mac-heres-how-to-reset-spotlight/
published: true
title: Having Trouble Finding Files on Your Mac Heres How to Reset Spotlight
description: Having Trouble Finding Files on Your Mac Heres How to Reset Spotlight
blogimgpath: 20210302Ha
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2021/Header-SpotlightSearch.jpg
thumbnail: /assets/images/covers/2021/Header-SpotlightSearch.jpg
cta: 2
comments: true
---
For the most part, Spotlight works well. Press Command-Space or use the
Search field in a Finder window, and it finds everything that matches
your search term. Sometimes, however, Spotlight fails to turn up a file
that you know is present, likely due to index corruption. To fix the
problem, you can force Spotlight to rebuild its index. (Don't do this
unless it's necessary since reindexing can take a long time and may
impact the performance of your Mac while it's happening.) Open System
Preferences > Spotlight > Privacy, and then drag your drive (or the
drive on which Spotlight isn't finding files) into the list of locations
that Spotlight shouldn't search. That deletes the old Spotlight index.
Still working in the Spotlight Privacy list, select the drive and click
the -- button below the list. Spotlight now reindexes the contents of
the drive and should find your files properly in the future.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210302Ha/image2.png" class="img-fluid rounded m-2" width="700" />
