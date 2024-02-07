---
layout: post
date: '2018-11-13 00:00 -0500'
author: Jon Brown
permalink: /blog/what-are-all-these-new-privacy-request-dialogs-in-mojave/
published: true
type: BlogPosting
title: What Are All These New Privacy Request Dialogs in Mojave
tagline: What Are All These New Privacy Request Dialogs in Mojave
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2018/Mojave-privacy-photo.jpg
thumbnail: /assets/images/covers/2018/Mojave-privacy-photo.jpg
link: /assets/app-images/2018/Mojave-privacy-photo.jpg
cta: 4
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
With macOS 10.14 Mojave, Apple has beefed up the Mac's privacy so it
more closely resembles privacy in iOS. You've noticed that when you
launch a new app on your iPhone or iPad, it often prompts for access to
your photos or contacts, the camera or microphone, and more. The idea
behind those prompts is that you should always be aware of how a
particular app can access your personal data or features of your device.
You might not want to let some new game thumb through your photos or
record your voice.

macOS has been heading in this direction, but Mojave makes apps play
this "Mother, May I?" game in more ways. As a result, particularly after
you first upgrade, you may be bombarded with dialogs asking for various
permissions. For instance, when you first make a video call with Skype,
it's going to ask for access to the camera and the microphone. Grant
permission and Skype won't have to ask again.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/mojaveprivacy/image2.png" class="img-fluid rounded m-2" width="750" />

Skype's requests are entirely reasonable---it wouldn't be able to do its
job without such access. That applies more generally, too. In most
cases, apps will ask for access for a good reason, and if you want the
app to function properly, you should give it access.

However, be wary if a permission dialog appears when:

-   You haven't just launched a new app

-   You aren't doing anything related to the request

-   You don't recognize the app making the request

There's no harm in denying access; the worst that can happen is that the
app won't work. (And if it's malicious, you don't want it to work!) You
can always grant permission later.

To see which permissions you've granted or denied, open System
Preferences \> Security & Privacy \> Privacy. A list of categories
appears on the left; click one to see which apps have requested access.
If you've granted access, the checkbox next to the app will be selected;
otherwise it will be empty.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/mojaveprivacy/image3.png" class="img-fluid rounded m-2" width="750" />

You'll notice that the lock in the lower-left corner is closed. To make
changes, click it and sign in as an administrator when prompted.

Most of these categories are self-explanatory, but it might not always
be obvious why an app wants permission. In the screenshot above, for
instance, Google Chrome has been granted access to the Mac's camera.
Why? So Google Hangouts and other Web-based video-conferencing services
can work.

There are five categories (including three not showing above) that could
use additional explanation:

-   **Accessibility:** Apps that request accessibility access want to
    control your Mac. In essence, they want to be able to pretend to
    click the mouse, type on the keyboard, and generally act like a
    user. Utility and automation software often needs such access.

-   **Full Disk Access:** This category is a catch-all for access to
    areas on your drive that aren't normally available to apps, such as
    data in Mail, Messages, Safari, Home, and more, including Time
    Machine backups and some admin settings. Backup and synchronization
    utilities may need full disk access, in particular. An app can't
    request full disk access in the normal way; you must add it manually
    by clicking the + button under the list and navigating to the app in
    the Applications folder.\
    <img src="{{ site.site_cdn }}/assets/images/blog/2018/mojaveprivacy/image4.png" class="img-fluid rounded m-2" width="750" />

-   **Automation:** The Mac has long had a way for apps to communicate
    with and control one another: Apple events. An app could
    theoretically steal information from another via Apple events, so
    Mojave added the Automation category to give you control over which
    apps can control which other apps. You'll see normal permission
    requests, but they'll explain both sides of the communication.\
    <img src="{{ site.site_cdn }}/assets/images/blog/2018/mojaveprivacy/image5.png" class="img-fluid rounded m-2" width="750" />

-   **Analytics:** The Analytics privacy settings are completely
    different---they let you specify whether or not you want to share
    information about how you use apps with Apple and the developers of
    the apps you use. For most people, it's fine to allow this sharing.\
    <img src="{{ site.site_cdn }}/assets/images/blog/2018/mojaveprivacy/image6.png" class="img-fluid rounded m-2" width="750" />

-   **Advertising:** Finally, the Advertising options give you some
    control over the ads that you may see in Apple apps. In general, we
    recommend selecting Limit Ad Tracking, and if you click Reset
    Advertising Identifier, any future connection between you and the
    ads you've seen will be severed from past data. There's no harm in
    doing it. It's worth clicking the View Ad Information and About
    Advertising and Privacy buttons to learn more about what Apple does
    with ads.\
    <img src="{{ site.site_cdn }}/assets/images/blog/2018/mojaveprivacy/image7.png" class="img-fluid rounded m-2" width="750" />

So if you've been seeing repeated requests for permission after you
upgraded to Mojave, now you know why these dialogs keep popping up.
They're a bit annoying at first, but the added privacy is worthwhile,
and once you've granted permission to an app, you shouldn't hear from it
again.