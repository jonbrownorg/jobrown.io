---
title: "Using Back to My Mac like a Boss"
author: Jon Brown
layout: post
image: /assets/images/covers/2017/back.jpg
thumbnail: /assets/images/covers/2017/back.jpg
link: /assets/app-images/2017/back.jpg
tagline: "<br>Using Back to My Mac like a Boss"
permalink: /blog/back-to-my-mac/
categories:
  - tips
  - product-reviews
tags:
  - tutorials
  - mac
  - ios
---
Having a workstation (Desk?) as such is part and parcel of being an IT professional, you need somewhere to keep all of those paper documents for bills and the IRS plus somewhere to keep your USB pen drives, Hard Drives, Printers, 3D printers scanners etc. If like me you’ve opted for a non portable Mac for your day to day office tasks such as writing these articles, then that Mac probably has files that are not practical to make copies of to carry about with you when using your MacBook or MacBook Pro.

So you are out in the field and you haven’t got access to your clients files! Not any more, yes you can set up screen sharing which is great but you need to have either a fixed IP address or a DYDNS subscription set up. Or you can use Back To My Mac as part of iCloud which will automatically configure the correct IP address for both file sharing and Screen sharing and allow you to sign into the remote Mac by simply having the same iCloud username and password on both Macs.

Back to My Mac is safe as the connection between the two macs is secured using IPsec to encrypt the data flowing between the two machines, it’s been available since OSX Leopard 10.5 so is well established and stable. Here is how to use it:

## Step 1
---
Make sure the remote Mac is switched on and signed into iCloud with the same iCloud account you are using on your portable Mac.

Go to System Preferences > iCloud

And check the box marked “Back to My Mac”

<img src="{{ site.site_cdn }}/assets/images/blog/2017/back/image1.png" class="img-fluid rounded m-2" width="600" />

Again you need to be signed in on both Macs with the same iCloud account.

A spinning counter will show saying setting up, follow any onscreen instructions that follow.

It is worth reading this guide from Apple on securing your Mac to use with [Back to My Mac][2]

## Step 2
---
On the portable Mac you want to remote in from , make sure you are logged in with the same iCloud account: Go to System Preferences > iCloud

And make sure the Apple ID is the same on both Macs. You can use multiple Apple ID’s on the same Mac if you set up multiple user accounts, each user account can have its own Apple ID.

## Step 3
---
To start accessing the files and or screen of the remote mac you need to go to:

System preferences > Sharing

And turn on File Sharing to access the files on the remote Mac and or Screen sharing so you can access and control the remote Mac’s screen.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/back/image5.png" class="img-fluid rounded m-2" width="600" />

You can choose which users on the remote Mac can access either File Sharing or screen sharing , I’ve chosen to allow all users as I only have a limited number of users. Again see the article by Apple on making Back to My Mac [more secure][1]

You will now see the remote Mac in the sidebar of the finder of the portable Mac

<img src="{{ site.site_cdn }}/assets/images/blog/2017/back/image3.png" class="img-fluid rounded m-2" width="600" />

When you click on the Mac it will automatically connect if you want to see the Screen simply click on the “Share Screen” icon

<img src="{{ site.site_cdn }}/assets/images/blog/2017/back/image4.png" class="img-fluid rounded m-2" width="600" />

That’s it you are good to go! You can leave the office and connect back to your workstation and continue as normal, no extras needed.

It is worth trying to hook up to the remote Mac when you are still in front of it while using another internet connection. That is if like me you are using your iPhone to provide your internet connection outside of the office, connect to your iPhone from your portable Mac and sign in to iCloud. Make sure you are no longer connected to the same network as the remote mac!!

If you cannot see the remote Mac in the sidebar of the finder:

Open System Preferences > iCloud , and make sure Back to My Mac is checked.

See if Back to My Mac has any messages such as “Set up router for better performance”.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/back/image2.png" class="img-fluid rounded m-2" width="600" />

If you get a message such as “Set up router for better performance”,

Click on the details button and follow the on screen instructions.

That’s it folks, Enjoy the better productivity and never being short of a file.

[1]:https://support.apple.com/en-gb/HT202312
[2]:https://support.apple.com/en-gb/HT202312
