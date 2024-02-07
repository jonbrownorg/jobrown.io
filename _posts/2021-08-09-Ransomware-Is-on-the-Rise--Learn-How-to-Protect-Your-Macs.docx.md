---
layout: post
date: '2021-08-09'
author: Jon Brown
permalink: /blog/ransomware-is-on-the-rise-learn-how-to-protect-your-macs/
published: true
title: "Ransomware is on the Rise. Learn How to Protect Your Macs"
description: "Ransomware is on the Rise. Learn How to Protect Your Macs"
blogimgpath: 20210802Ra
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2021/Header-Ransomware.jpg
thumbnail: /assets/images/covers/2021/Header-Ransomware.jpg
cta: 3
comments: true
---
In cybercriminal circles, ransomware is all the rage. Once it has
infected a computer, it encrypts all the files and then presents a
ransom demand---pay up to get the decryption software necessary to
recover the data.

Ransomware has been in the news all year, with the [Colonial Pipeline
attack](https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack)
in particular spending weeks in the headlines. Attacks rose 485% in 2020
and show no signs of abating. The amounts demanded by the attackers are
increasing, too, with PC manufacturer
[Acer](https://www.bleepingcomputer.com/news/security/computer-giant-acer-hit-by-50-million-ransomware-attack/)
and Apple supplier Quanta both hit with $50 million demands. Worse,
some ransomware attackers are adding an extortion component where they
threaten to reveal confidential data if the victim doesn't pay. It's
scary, we know.

First, the good news. Although there are several examples of ransomware
that target the Mac, none of them have been particularly well done or
(as far as we know) successful. Right now, the chances of Macs falling
prey to ransomware are very low, and there's no reason to panic.

However, complacency is dangerous. There's a trend toward "ransomware as
a service" (RaaS). The RaaS operators maintain the ransomware malware,
offer a payment portal for victims, and provide "customer service" for
victims who don't know how to pay with Bitcoin or other
cryptocurrencies. Affiliates spread the ransomware and split the
revenues with the operators. It's a tidy little cybercriminal
enterprise, and separating the malware development and network
penetration tasks has made it significantly easier for more criminals to
leverage ransomware. It's only a matter of time before they turn their
attention to Macs.

For the most part, protecting your Macs from ransomware is no different
than protecting against any number of other security problems. Follow
this core advice:

-   **Keep Macs and apps up to date:** Always install macOS and security
    updates, and keep other apps up to date. With every update, Apple
    addresses numerous security vulnerabilities, fixing the vast
    majority of them before attackers can exploit them with malware.
    Every so often, however, Apple's security notes include this
    sentence: "Apple is aware of a report that this issue may have been
    actively exploited." That means there may be malware that targets
    that vulnerability; install such updates immediately!
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Ra/image2.png" class="img-fluid rounded m-2" width="700" />


-   **Use strong passwords with a password manager:** You've heard it
    from us before, and you'll hear it again, but it's essential that
    everyone in your organization use strong, unique passwords through a
    password manager like [1Password](https://1password.com/),
    [LastPass](https://www.lastpass.com/), or even Apple's [iCloud
    Keychain](https://support.apple.com/en-us/HT204085). Just one weak
    password could allow attackers to infiltrate a computer or server
    and install ransomware.
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Ra/image3.png" class="img-fluid rounded m-2" width="700" />


-   **Be suspicious of links and attachments:** Ensure that everyone in
    your organization is careful about opening attachments or clicking
    links in email messages from unknown people or that seem off in some
    way. Phishing attacks are one of the primary ways of distributing
    malware. (If your group needs training in phishing awareness,
    contact us.)
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Ra/image4.png" class="img-fluid rounded m-2" width="700" />


-   **Never download pirated software!** Even aside from the fact that
    it's ethically problematic, the most recent piece of Mac
    ransomware---ThiefQuest---was initially found in a malicious
    installer purporting to be for the LittleSnitch network security
    utility (ironic, eh?). Get apps only from the developers' official
    sites or the Mac App Store.

-   **Make frequent backups:** Backups are essential so, even if you do
    fall prey to ransomware, you can restore data from before the
    infection point. The caveat is that some of your backups *must* be
    isolated from the Macs in question---some ransomware intentionally
    tries to encrypt or delete connected backups.

-   **Monitor for ransomware:** Although ransomware usually tries to
    stay below the radar while it's encrypting files, the free
    [RansomWhere](https://objective-see.com/products/ransomwhere.html)
    utility can identify processes that quickly create encrypted files.
    It will likely incorrectly flag some legitimate behavior too (like
    in the screenshot below), but it's still a helpful tool.
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Ra/image5.png" class="img-fluid rounded m-2" width="400" />


-   **Have anti-malware software:** For the most part, if you're careful
    about following the advice above, you'll be fine. But it's a good
    idea to have a current anti-malware app around and run it
    occasionally---if you don't already have one, try the free version
    of [Malwarebytes](https://www.malwarebytes.com/). If you---or your
    users---aren't good about the basic precautions, you might want to
    run anti-malware software all the time or set up broader network
    protections.    
    <img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Ra/image6.png" class="img-fluid rounded m-2" width="700" />


-   **Have a disaster management plan:** Every business should think
    about how it would react to a fire, flood, earthquake, or other
    disaster. When building a disaster management plan, be sure to
    include ransomware. How would you shut down infected systems,
    rebuild them from scratch, and restore uninfected files?

Setting up a backup strategy that protects against ransomware requires a
little more thought. As noted, ransomware often tries to render backups
useless in one way or another. You need to have versioned backups that
allow you to restore from before the ransomware infection, and those
backups need to be isolated from the computers and network being backed
up. Techniques that help include:

-   **Isolate backup drives:** Rotate multiple Time Machine drives, with
    at least one that's always disconnected. However, this strategy
    assumes you'll detect a ransomware infection before you've rotated
    all the drives. Ransomware could lie undetected for weeks or months
    before activating. Manually run current anti-malware software before
    connecting any backup drive.

-   **Use Internet backup:** Set up an Internet backup system that will
    maintain versions of backed-up files, such as
    [Backblaze](https://www.backblaze.com/) with its [Extended Version
    History](https://www.backblaze.com/version-history.html) feature.
    [Retrospect 18](https://www.retrospect.com/en/ransomware) also
    supports object locking on cloud storage systems, which provides
    *immutable storage*. It ensures that no one---even someone who
    acquires root credentials---can delete the backups during the
    retention period.

-   **Consider tape backups:** Long ago, tape backups were the go-to
    solution for network backups, but as the price-per-gigabyte of hard
    drives dropped precipitously and Internet backups became feasible,
    tape has largely fallen by the wayside. But tape backups are still
    an option. They can hold a lot of data and are easily kept offline
    in a separate location. Plus, some tape drives can even operate in a
    write-once, read-many (WORM) mode that guarantees data can't be
    erased or overwritten. Tape requires more human interaction than
    other backup methods, but it's still a cost-effective way to protect
    hundreds of terabytes of data against ransomware.

Again, there's no reason to panic about ransomware, but if it could
significantly damage your business, you should take steps to reduce the
chance of getting hit and ensure that you could restore your data if
your computers were to get infected. There is no single approach that's
ideal for everyone, but we can help you think about what's involved and
develop a strategy that balances protection, cost, and effort.
