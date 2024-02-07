---
title: "How To Archive an Old User Account as a Disk Image"
author: Jon Brown
layout: post
image: /assets/images/covers/2017/archive.jpg
thumbnail: /assets/images/covers/2017/archive.jpg
link: /assets/app-images/2017/archive.jpg
tagline: "<br>How To Archive an Old User Account as a Disk Image"
permalink: /blog/archive-old-user-account/
categories:
  - tips
  - product-reviews
tags:
  - tutorials
  - mac
  - ios
---
Sometimes it’s best to wipe your hard drive and start afresh if you’ve been troubleshooting a problem for a while. You’ll need to backup your old files first.

Whether you are looking to archive old user accounts because you are reformatting your hard drive or you are backing it up for safekeeping, here’s how you do it.

You’ll need to be logged in as a local administrator, but not for the user account that you want to back up. Doing this process will help you also restore all other user home folders for future use either back to the same computer or backed up on a hard drive with the proper permissions, file and folder ownership and ACLs.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/archive/diskutility_image_1.png" class="img-fluid rounded m-2" width="289" />

### Disk Utility
---
First open up Disk Utility available in your Applications folder in the Utilities section. You can also just do a quick search using the search toolbar or pulling up Siri.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/archive/diskutility_image_2.png" class="img-fluid rounded m-2" width="600" />

Open up the Disk Utility application.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/archive/diskutility_image_3.png" class="img-fluid rounded m-2" width="570" />

After opening up the Disk Utility application, Choose File from the top toolbar. Go to File > New > Image from Folder.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/archive/diskutility_image_4.png" class="img-fluid rounded m-2" width="466" />

Select the user’s home folder located /users/[username]. In our example here, it is ‘maxch.’ Save the disk image to your desired location (documents, backup drive, elsewhere).
You will probably be prompted for an admin username and password.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/archive/diskutility_image_5.png" class="img-fluid rounded m-2" width="265" />

You will need to have read and write privileges for the user accounts that you want to archive.
