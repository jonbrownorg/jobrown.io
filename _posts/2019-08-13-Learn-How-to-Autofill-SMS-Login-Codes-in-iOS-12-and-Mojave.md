---
layout: post
date: '2019-08-13 00:00 -0500'
author: Jon Brown
permalink: /blog/learn-how-to-autofill-sms-login-codes-in-ios-12-and-mojave/
published: true
title: Learn How to Autofill SMS Login Codes in iOS 12 and Mojave
description: Learn How to Autofill SMS Login Codes in iOS 12 and Mojave
blogimgpath: 20190801Le
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2019/autofill-FA-codes.jpg
thumbnail: /assets/images/covers/2019/autofill-FA-codes.jpg
link: /img/app-images/2019/autofill-FA-codes.jpg
cta: 2
comments: true
---
An ever-increasing number of Web sites boost their security via
two-factor authentication (2FA), which requires you to type in a short
numeric code to complete a login after entering your username and
password. It's a big win because that code is generated on the fly and
is good for only a short time (often 30 seconds). So even if your
username and password were revealed in a data breach, your account is
safe if you use 2FA. We recommend using it whenever possible.

You get these codes---usually six digits---in one of two ways. The most
common is via an SMS text message to your iPhone, but you may instead be
able to generate authentication codes with an app such as
[1Password](https://1password.com/){:rel="nofollow"},
[Authy](https://authy.com/){:rel="nofollow"}, or [Google
Authenticator](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8){:rel="nofollow"},
or [LastPass](https://www.lastpass.com/){:rel="nofollow"}. And yes, if
you've followed our advice to use 1Password or LastPass as a password
manager, their capabilities to generate and enter these codes is a nice
bonus.

Many sites support only the SMS text message approach, however, so Apple
added features to iOS 12 and macOS 10.14 Mojave that simplify entering
the codes sent via SMS.

### Autofill SMS codes in iOS 12

In iOS 12, the trick to easier entering of the code is to use the
QuickType bar above the standard iOS keyboard, where iOS suggests
auto-complete options. Follow these steps:

1.  Start logging in to a site that requires 2FA via SMS with your
    username and password.

2.  When you're prompted for your code, tap in the Enter Code field.

3.  When the text message arrives, instead of trying to remember and
    retype the six digits, look at the QuickType bar at the top of the
    keyboard, where iOS 12 displays "From Messages" and the code. Tap it
    to enter the code in the field.

4.  Submit the form to log in.

### Autofill SMS codes in Mojave

In Mojave, Apple did something similar with autocomplete, but it works
only in Safari, so if you prefer Google Chrome or Firefox, you're out of
luck. Follow these steps:

1.  Using Safari, start logging in to a site that requires 2FA via SMS
    with your username and password, after which you're prompted for a
    code.

2.  When the text message arrives, instead of trying to remember and
    retype the six digits from your iPhone or the macOS notification,
    click in the Enter Code field.

3.  The code appears in a pop-up underneath the field under the "From
    Messages" tag. Click it to enter the code in the field.

4.  Submit the form to log in.

One final note. If you have a choice, use an authentication app instead
of SMS for your 2FA codes. There are several ways a hacker could
intercept an SMS text message meant for you and use that to complete a
login. The chance of you being targeted like this is low, but there's no
reason not to use an authentication app instead to eliminate the worry.
Plus, it means you can still log in even if your phone number changes,
as it does if you use a different SIM card while traveling.
