---
layout: post
date: '2020-06-11'
author: Jon Brown
permalink: /blog/got-a-mac-laptop-heres-what-you-need-to-know-about-battery-health-management-in-catalina/
published: true
title: Got a Mac Laptop Heres What You Need to Know about Battery Health Management in Catalina
description: Got a Mac Laptop Heres What You Need to Know about Battery Health Management in Catalina
blogimgpath: 20200603Go
tags:
  - MacOS
  - iOS
categories:
  - articles
fpimage: /assets/images/covers/2020/Header-Catalina-Battery-fp.jpg
image: /assets/images/covers/2020/Header-Catalina-Battery.jpg
thumbnail: /assets/images/covers/2020/Header-Mac-Battery.jpg
link: /img/app-images/2020/Header-Catalina-Battery.jpg
cta: 4
comments: true
---
We all want Mac laptops that can run for days on a single charge and
never need their batteries serviced. Sadly, we're always going to be
disappointed. Battery and power management technologies continually
improve, but those improvements are matched by more powerful processors
and smaller designs with less room for battery cells. And, because
physics is a harsh mistress, current lithium-ion batteries are always
going to age chemically, so they hold less of a charge over time.

In the just-released macOS 10.15.5 Catalina, Apple has introduced [a
new battery health management
feature](https://support.apple.com/en-us/HT211094) that promises
to increase the effective lifespan of the batteries in recent Mac
laptops. It does this by monitoring the battery's temperature and
charging patterns and, in all likelihood, reducing the maximum level to
which it will charge the battery.

You see the problem. While battery health management can extend your
battery's overall lifespan, it will likely also reduce your everyday
runtime before you need to charge. It's too soon to know the full extent
of this tradeoff, and we suspect that it may be impossible to determine,
given that everyone uses their Macs differently.

It's worth noting that this battery health management feature appears
only for those running macOS 10.15.5 or later, and only then if the Mac
in question is a laptop with Thunderbolt 3 ports. In essence, then, it's
available only on MacBook Pro models introduced in 2016 or later, and
MacBook Air models introduced in 2018 and later. (The Thunderbolt 3 port
requirement is merely a shorthand way for Apple to indicate "recent Mac
laptops.")

So, if you have a supported laptop and you're running macOS 10.15.5,
what should you do? We see three scenarios:

-   **Favor lifespan:** If you seldom run your
    laptop's battery down to the electronic fumes because it's easy for
    you to plug in whenever you need to charge, leave battery health
    management enabled. That will preserve the battery's overall
    lifespan to the extent possible.
-   **Favor runtime:** For those who need to eke
    every last bit of power from their batteries, disable battery health
    management. You might have to replace the battery sooner, but you'll
    get more runtime in everyday usage.
-   **Switch as needed:** Many people need the
    longest possible runtime only occasionally, such as on long flights
    with no under-seat power. In such situations, switch battery health
    management off for the flight and back on when you return to normal
    usage patterns.

Switching is easy, but Apple buries it deeply enough that it's clear
that the company doesn't think most users should be disabling it
regularly. Open System Preferences \> Energy Saver, click the Battery
Health button at the bottom, and in the dialog that appears, uncheck
Battery Health Management and click OK. You'll be prompted to make sure
you know what you're doing; click Turn Off to finish the job.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200603Go/Battery-health-management.jpg" class="img-fluid rounded m-2" width="700" />

One final note. The reduced maximum capacity with battery health
management enabled may have an undesirable side effect---a
recommendation from the Battery Status menu's health indicator that you
need to replace your battery. To check your battery's health, hold the
Option key down and click the Battery Status icon on the menu bar. At
the top of the menu, next to Condition, you'll see either Normal or
Service Recommended. (In previous versions of macOS, it could have said
Replace Soon, Replace Now, or Service
Battery.)

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200603Go/Battery-Status-menu-health.png" class="img-fluid rounded m-2" width="400" />

Regardless of the term, anything but Normal indicates that your battery
is holding less of a charge than when it was new. If you see that
message and you aren't getting enough runtime for your needs, get the
battery evaluated at an Apple-authorized service provider or Apple
Store.