---
layout: post
date: '2018-08-06 00:00 -0500'
author: Jon Brown
permalink: /blog/how-to-deal-with-apples-new-messages-feature/
published: true
type: BlogPosting
title: What’s the Deal with Apple’s New Messages in iCloud Feature?
tagline: What’s the Deal with Apple’s New Messages in iCloud Feature?
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2018/Messages-icloud-photo.jpg
thumbnail: /assets/images/covers/2018/Messages-icloud-photo.jpg
link: /assets/app-images/2018/Messages-icloud-photo.jpg
cta: 2
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
When Apple first announced macOS 10.13 High Sierra and iOS 11, one of the promised features was Messages in iCloud, a way of syncing your conversations in Messages via your iCloud account. Despite the fact that Messages already tries to sync its conversations between your devices, this feature proved difficult for Apple to deliver, and it didn’t appear until the recently released macOS 10.3.5 and iOS 11.4.

The idea behind Messages in iCloud is that it, as the name suggests, stores your conversations and their attachments in your iCloud account, rather than on each device individually. That’s a win because it can offload non-trivial amounts of data to iCloud, freeing up more space on that 16 GB iPhone.

Because the primary source of Messages data is in iCloud, the conversations should also sync perfectly and more quickly than in the past, something that was often frustrating when conversations didn’t quite match up across device. (iOS 11.4 also fixes a bug that could cause some messages to appear out of order.) Even better, deleting a conversation or attachment on one of your devices deletes it from all of them.

The main thing to be aware of before enabling Messages in iCloud is that it does count against your iCloud storage space. That said, if you back up your iOS devices to iCloud, removing Messages data from each device—such as your iPad and iPhone—and storing a single copy in iCloud should result in less overall iCloud usage. (And, realistically, if Messages in iCloud would make you need a higher tier of iCloud storage, you were probably going to need to upgrade soon for other reasons anyway.)

Enabling Messages in iCloud is simple.

- On the Mac, open Messages > Preferences > Accounts and select the Enable Messages in iCloud checkbox. 

<img src="{{ site.site_cdn }}/assets/images/blog/2018/messages/image002.png" class="img-fluid rounded m-2" width="400" />

- In iOS, go to Settings > _Your Name_ \> iCloud, and turn on Messages.

There are three quirks to be aware of:

- You won’t be able to enable Messages in iCloud unless you’ve enabled [two-factor authentication](https://support.apple.com/en-us/ht204915) for the Apple ID associated with your iCloud account. It’s a good idea for security reasons anyway!

- On the Mac, in the Messages account preferences, there’s a Sync Now button you can click if, for some reason, Messages hasn’t synced automatically. We don’t yet know if or when that will be necessary.

- When you first enable Messages in iCloud in iOS, you may see a note at the bottom of the screen saying that uploading to iCloud requires the device to be plugged in and connected to Wi-Fi. That’s necessary only for the first big upload.  

<img src="{{ site.site_cdn }}/assets/images/blog/2018/messages/image003.png" class="img-fluid rounded m-2" width="400" />

Should you wish to turn off Messages in iCloud, be aware that it may take some time for each device to download all the messages.

For most people, Messages in iCloud is a no-brainer. Its syncing works the way you’d expect, complete with quick updates and universal removal of deleted conversations. The main reason you might not want to enable the feature is if you have only the free 5 GB of iCloud storage and aren’t interested in [paying for more space](https://support.apple.com/en-us/ht201238).