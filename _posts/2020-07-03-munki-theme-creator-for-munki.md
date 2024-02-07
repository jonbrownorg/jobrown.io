---
layout: post
date: '2020-07-03'
author: Jon Brown
permalink: /blog/munki-theme-creator-for-munki/
published: true
title: "Munki Theme Creator: A Theming Engine for Munki’s Managed Software Update"
description: "Munki Theme Creator: A Theming Engine for Munki’s Managed Software Update"
blogimgpath: 20200625Ma
tags:
  - MacOS
  - iOS
categories:
  - articles
fpimage: /assets/images/covers/2020/Header-MTM-fp.jpg
image: /assets/images/covers/2020/Header-MTM.jpg
thumbnail: /assets/images/covers/2020/Header-MTM.jpg
link: /assets/img/app-images/2020/Header-MTM.jpg
cta: 4
comments: true
---
## Introducing Munki Theme Maker

For many Mac administrators in a variety of sectors an open source tool called Munki, a patch management tool, is more than prolifically used. Our mantra of being a technology agnostic consultancy agency exposes us to a wide range of Mac tools. [Munki](https://github.com/munki/munki) is one that we internally have used for years. 

Last year at the [Mac Admins Conference at Penn State](https://grovetech.co/blog/penn-state-munki-customization-and-branding/) we gave a talk and showed off a script that we had been using internally to take the [Munki](https://github.com/munki/munki) product and make it fit more seamlessly into the look and feel of any organization. On that note we are pleased to announce the next step release of that then script. 

[Munki Theme Maker](https://github.com/jonbrown21/Munki-Theme-Maker) takes the concepts of the script that we demonstrated and wraps it with an elegant GUI interface making it easy for even the novice Mac Admin to take it off the shelf and start creating a custom and branded experience for their Mac users. 

[Munki Theme Maker](https://github.com/jonbrown21/Munki-Theme-Maker) allows you to create custom color based scheme themes for Munki. This app picks up on the amazing work of the Munki project and the [Munki Rebrand](https://github.com/ox-it/munki-rebrand) project. The theme maker allows you to have a more modern color schemed UI made for your brand. Change the background color, featured item color and the sidebar link colors. The default new theme includes new icons on the top header row. More modern and clean rounded corner look and feel. Adding the sidebar to category pages as well as the main header slideshow or header graphic area.

## Usage

Upon launching the app you must set all variables. If any variables or customized items are missing it will fail to run. The most important items are the Source Folder (Where Munki is downloaded and compiled), the Output folder where you will get 2 copies of Munki the unbranded and the branded and themed versions. The App Name (the new name of the Managed Software Update App that you wish it to be). The signing certificate authority (for use when signing the final package - Developer ID Installer) and the App certificate authority (for used to sign the binaries of Munki - Developer ID Application).

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200625Ma/mtm-hero.jpg" class="img-fluid rounded m-2" width="700" />

Pick the colors of the theme in the next tab (Colors) and then finally set the icon that you will use for the final touch. Once all set hit "Generate" and let the Munki Theme Builder do its thing.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200625Ma/mtm-icon.jpg" class="img-fluid rounded m-2" width="700" />

It will download and clone into your source folder Munki, [Munki Rebrand](https://github.com/ox-it/munki-rebrand) and the base Munki Theme with all injectable files. Injection happens, and then Munki builds.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200625Ma/mtm-var.jpg" class="img-fluid rounded m-2" width="700" />

The App has backwards compatibility for Munki version 4.1.4 as of writing this through to version 5.0.0. We plan to relase new baseline themes and modifications for each dot iteration of the Munki core release.

## Open Source

We are opening this up to the Mac Admin's community with hopes that Munki Theming and or native support for easy to manage themes for the Munki GUI interface will become more prolifically used and supported. [Version 1.0](https://github.com/jonbrown21/Munki-Theme-Maker/releases/tag/v1.0) is now available for download in full source mode or as a precompiled and signed (not notarized ) download. Pull requests are welcome!

Here is a little video of it in action. We hope you love it!

{% include videos/video.html id="ZdYHm3_7fu4" header="Header-Munki-Theme-Manager.jpg" %}