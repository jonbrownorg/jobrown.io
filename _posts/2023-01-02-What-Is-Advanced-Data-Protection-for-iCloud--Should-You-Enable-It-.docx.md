---
layout: post
date: '2023-01-02'
author: Jon Brown
permalink: /blog/what-is-advanced-data-protection-for-icloud--should-you-enable-it/
published: true
title: What Is Advanced Data Protection for iCloud? Should You Enable It?
description: What Is Advanced Data Protection for iCloud? Should You Enable It?
blogimgpath: 20230102Wh
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2023/Header-iCloudEnableIt.jpg
thumbnail: /assets/images/covers/2023/Header-iCloudEnableIt.jpg
cta: 4
comments: true
---
In early December, Apple made a surprise announcement: [Advanced Data
Protection for
iCloud](https://www.apple.com/newsroom/2022/12/apple-advances-user-security-with-powerful-new-data-protections/).
It's not as though iCloud's standard data protection is problematic, but
it hinges on one architectural decision that makes some iCloud data
theoretically vulnerable: Apple holds the encryption keys necessary to
decrypt iCloud data. Because Apple controls those encryption keys, an
attacker or rogue Apple employee who could gain access to them could
theoretically steal iCloud data. (There are many more safeguards; it's
not like there's a big printout of keys anywhere.) Plus, since Apple has
the technical capability to read that data, law enforcement agencies
could legally compel Apple to hand it over.

Not all iCloud data is vulnerable in this way. Of the [26 types of
iCloud data](https://support.apple.com/en-us/HT202303), 14 already
support *end-to-end encryption*, where you control the encryption keys.
That's true of Health data, Passwords and Keychain, Apple Card
transactions, and so on. You may not realize you're managing these keys
because Apple has baked that into the security architecture of its
overall ecosystem. Apple hadn't previously extended end-to-end
encryption to more iCloud data types because doing so prevents Apple's
support engineers from recovering accounts for users who forget their
passwords. Even when Apple can recover an account, the end-to-end
encrypted data isn't included.

So that's the tradeoff. [Advanced Data
Protection](https://support.apple.com/guide/security/advanced-data-protection-for-icloud-sec973254c5f/web)
increases security by extending end-to-end encryption to 9 of the
remaining 12 iCloud data types. Those include iCloud Backup, iCloud
Drive, Photos, Notes, Reminders, Safari Bookmarks, Siri Shortcuts, Voice
Memos, and Wallet passes. But if you turn on Advanced Data Protection
and forget your password, Apple won't be able to help you recover your
data.

Apple isn't being cavalier about this risk. When you enable Advanced
Data Protection, you must set up an alternate recovery method,
preferably two. The simplest is a printed recovery key that you should
store with other important papers, perhaps in a safe deposit box, and
the other is an [account recovery
contact](https://support.apple.com/en-us/HT212513), a trusted person who
can verify your identity and help you regain access to your account.

Nor is Advanced Data Protection a one-way street. If you ever decide the
risk of forgetting your password is too great, you can always turn it
off and fall back to iCloud's standard data protection.

Several types of iCloud data remain under the standard iCloud protection
even after you turn on Advanced Data Protection. For iCloud Mail,
Contacts, and Calendars, the need to interoperate with external email,
contacts, and calendar systems requires that Apple manage the encryption
keys. Similarly, the collaboration capabilities of Pages, Numbers, and
Keynote and the Shared Albums feature of Photos don't support Advanced
Data Protection. Also, although Advanced Data Protection can protect
shared notes, reminders, and iCloud Drive folders, plus iCloud Shared
Photo Library, that's true only if everyone involved in sharing has
Advanced Data Protection turned on. If not, the shared content falls
back to standard iCloud protection.

There are also two notable downsides to turning on Advanced Data
Protection:

-   **System requirements:** All devices signed in with your Apple ID
    *must* be updated to at least iOS 16.2, iPadOS 16.2, macOS 13.1,
    tvOS 16.2, watchOS 9.2, or the latest version of iCloud for Windows.
    As a result, you'll have to sign out of iCloud on any device too old
    to upgrade to the necessary operating system version. That may be a
    deal-breaker for some people. You must also have two-factor
    authentication enabled for your Apple ID and a password or passcode
    set on your devices, but everyone should already have done that,
    regardless of Advanced Data Protection.

-   **iCloud.com Web access:** Turning on Advanced Data Protection
    automatically disables Web access to data at iCloud.com. You can
    re-enable Web access, but every subsequent visit to iCloud.com
    requires authorization from a trusted device, and the connection
    only lasts for an hour. If you make heavy use of iCloud.com,
    Advanced Data Protection may be burdensome.

So, should you use Advanced Data Protection? As long as all your devices
support it, you're not perturbed about the repeated iCloud.com
authorizations, and you're capable of maintaining both account recovery
methods, go ahead. Although the benefit to most people isn't
huge---Apple's security is excellent, and most people won't be targeted
by law enforcement---the downside is minimal as long as you understand
the risk of Apple not being able to recover your account.

To enable the feature, navigate to Settings \> *Your Name* \> iCloud \>
Advanced Data Protection, tap Turn On Advanced Data Protection, and
follow the prompts. Remember that you'll need to set up the Account
Recovery options before turning on Advanced Data Protection, and you may
need to remove older devices from your iCloud account.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2023/20230102Wh/image2.jpeg" class="img-fluid rounded m-2" width="700" />