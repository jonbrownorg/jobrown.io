---
layout: post
date: '2018-01-16 22:58 -0500'
author: Jon Brown
permalink: /blog/update-on-meltdown-and-spectre/
published: true
type: BlogPosting
title: Update on Meltdown & Spectre
image: /assets/images/covers/2018/04-spectre-meltdown.w710.h473.jpg
thumbnail: /assets/images/covers/2018/04-spectre-meltdown.w710.h473.jpg
link: /assets/app-images/2018/04-spectre-meltdown.w710.h473.jpg
tagline: Update on Meltdown & Spectre
tags:
  - mac
  - ios
categories:
  - news
  - tips
---
We have recieved many concerns and questions regarding the nature of the latest two exploits. Here is more information on what they are exactly, what they do and what you need to do about it. 

Two large security vulnerabilities, named Meltdown and Spectre, were revealed this month, when a research team unexpectedly shared the flaw publicly ahead of planned announcements. The security flaws were discovered a few months ago and privately revealed to chip companies, operating system developers and cloud computing companies who were all working to develop necessary security patches, mitigations and methods to work around the flaws. However, since the unexpected announcement, all the companies affected have been responding, somewhat in a disorderly manner. Apple’s prior security updates in early December had already proactively prevented some of the security risks posed via its latest software iterations iOS 11.2, macOS 10.13.2, and tvOS 11.2 updates. Apple is now working on additional fixes to address any Spectre vulnerabilities that could affect the Safari browser.

### What is Meltdown and what is Spectre?
---
Meltdown and Spectre are both security vulnerabilities that affect microprocessing chips. Meltdown was discovered independently by three different groups - researchers from the Technical University of Graz in Austria, German security firm Cerberus Security, and Google's Project Zero. Spectre was detected by both the Project Zero and independent researcher Paul Kocher.

Meltdown and Spectre are both security vulnerabilities. Modern high performance processors use speculative execution to maximize performance. This method however poses a risk where it is possible to figure out data belonging to another process or even the operating system, thus leaking information. Code that runs using this method could steal passwords or be even more damaging if used in tandem with other security flaws. 

Meltdown and Spectre affect microprocessor chips created by Intel, AMD, ARM and other processor companies. They are both hardware flaws, posing greater security risks.

The Meltdown vulnerability allows a malicious program to read kernel memory, accessing data like passwords, emails, documents and photos. Meltdown can be exploited to read the entire physical memory of a targeted machine. Cloud-based services are particularly at risk for this and could result in hacking of data of millions of users if unprotected. Spectre uses two methods of exploitation and breaks isolation between different applications, making more applications vulnerable to manipulation and hacking.

### How have companies responded?
---
Given that both Meltdown and Spectre are hardware-based flaws, operating system manufacturers are required to implement software workarounds.

Every major computing company ranging from microprocessor companies such as Intel, AMD and Arm to Google, Microsoft, Linux, Amazon and Apple has had to respond to this huge security flaw. Microsoft has been testing solutions since November. Intel has been hard hit by this security vulnerability as it affects processors manufactured today and as far back as 20 years. While Spectre affected every computing company, Meltdown really only affected Intel and ARM. Intel has offered an operating system level fix, but this could slow down computer performance significantly.

### What action did Apple take?
---
Apple is a little different than other companies as it designs its own chips and sells devices that contain these chips. It also designs and develops its own operating system. Unlike some of the other companies that responded in vague terms with a lot of marketing filler content, Apple faced the issue directly.

Apple confirmed that both vulnerabilities affect all Mac and iOS devices. They also confirmed that there were no known exploits impacting customers at this time. 

Manipulating these security vulnerabilities would require the download of a malicious software app. Apple recommends that users only download app software from trusted sources like the App Store.

Both Meltdown and Spectre do not affect the Apple Watch. [Apple’s prior software releases for iOS 11.2, macOS 10.13.2, and tvOS 11.2 all protect against Meltdown](https://support.apple.com/en-us/HT208394).

Apple has shared that the Spectre vulnerability while being difficult to exploit, can be done using JavaScript in a web browser. Apple plans to release Safari updates for macOS and iOS to prevent Spectre-based exploits. Apple also intends to keep testing for Spectre and release mitigations in all future versions of iOS, macOS, tvOS, and watchOS. 

