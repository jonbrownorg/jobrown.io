---
layout: post
date: '2018-02-03 22:09 -0500'
author: Jon Brown
permalink: /blog/meltdown-fix-for-older-macs/
published: true
type: BlogPosting
title: How to Fix Meltdown and Spectre Security Flaws for Older Macs
image: /assets/images/covers/2018/code_meltdown_spectre_2.jpg
thumbnail: /assets/images/covers/2018/code_meltdown_spectre_2.jpg
link: /assets/app-images/2018/code_meltdown_spectre_2.jpg
tagline: How to Fix Meltdown and Spectre Security Flaws for Older Macs
tags:
  - tutorials
  - mac
categories:
  - news
---
Apple has recently released fixes for older Macs running macOS Sierra and OS X El Capitan that also face critical vulnerabilities through the Meltdown and Spectre security flaws.

Both Spectre and Meltdown allow attackers to gain unauthorized access to data on computers that have microprocessors running speculative execution. Modern micropro-cessors all use speculative execution to predict next steps and have faster processing speeds. This is common in chips made by Intel and AMD as well as Apple's A series SoCs.

If the predicted path is not required, the instruction set is canceled and the memory cache discarded in a process that is meant to function seamlessly and be invisible to users. Researchers however found that you could access targeted areas within a memory cache, thus unfortunately opening the door to accessing user passwords and thus a ton of sensitive data.

How do you combat the Meltdown and Spectre security flaw if you have an older Mac?

#### Download immediate security update.
Download the latest [security update 2018-001](https://support.apple.com/en-us/HT208465) for both Sierra and El Capitan. In addition to addressing both Meltdown and Spectre security flaws, this update also improves kernel security to prevent security hacks through chip flaws.

or

#### Download the latest version of macOS that contains security patches for both.
The latest version of [macOS High Sierra 10.13.3](https://support.apple.com/kb/DL1954?locale=en_US) also includes patches for both Meltdown and Spectre. In addition, this version contains security patches to reduce risks associat-ed with read restricted memory, kernel privileges and memory corruption.

You can download the security update and the latest version of macOs via the Mac App store.
