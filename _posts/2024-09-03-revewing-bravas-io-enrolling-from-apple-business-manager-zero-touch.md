---
layout: post
date: '2024-09-03'
author: Jon Brown
permalink: /blog/revewing-bravas-io-enrolling-from-apple-business-manager-zero-touch/
published: true
title: "Reviewing Bravas.io - Enrolling using a Zero Touch Workflow!"
description: "Reviewing Bravas.io - Enrolling using a Zero Touch Workflow"
blogimgpath: 20240803DP
tags:
  - MacOS
  - iOS
categories:
  - tips
  - video
image: /assets/images/covers/2024/Header-Bravas-4.png
thumbnail: /assets/images/covers/2024/Header-Bravas-4.png
cta: 2
comments: true
---
### TL;DR

Mention the code JONBROWN when you ask for a demo or start a 30-day trial and enjoy 5% additional off your first year of annual service.

What are you waiting for? Sign up for a [trial](https://www.bravas.io/en/tarifs) or [demo](https://www.bravas.io/en/demo-bravas) of [Bravas.io](https://www.bravas.io/) today!


### True Secure ZERO Touch Enrollment with [Bravas.io](https://www.bravas.io/)

We all know that all MDM's out there can handle ZERO Touch enrollment. At least any of them worth their salt. [Bravas.io](https://www.bravas.io/) is great because it handles the concept of ZERO trust in a secure and somewhat different way than normally approached. 

In most MDM's they associate a device with a user via an assignment based manner. In short you logged into the MDM, and you find the user or device and you associate those devices to a user and in doing so when the user opens the computer, it reaches out to the MDM and configures the computer based on the user and device configurations. 

All in all this is a classic and easy approach to the method used by most MDM providers. [Bravas.io](https://www.bravas.io/) has this but adds a bit more security. Now you may be asking, why more security, isn't a user associated to device method secure? An attacker wouldn't know what user a computer is associated with, right? Partially right. If you associate a user to a device in the MDM only the administrator at that time may know that association, however when the device is shipped lets think about what happens if the device is intercepted in transit. 

In that situation when its turned on, the device will enroll, create the user account and then prompt the attacker to login to the account thus exposing the name of the user to an attacker. Now there are compensating settings or controls to avoid this like only showing the username and password prompt etc.. but still it makes it easier for an attacker to attempt to reuse or deduce the user on the device. 

What [Bravas.io](https://www.bravas.io/) does here changes the game. Instead of a simple user and computer association it creates an enrollment code. The code is only known to the recipient and forces an attacker to enter this to proceed with the setup of the device. The code allows for a level of security thats required to validate and verify that the user getting the device is the one that was meant for them and them alone. 

Very few MDM's approach verification, validation and this additional security step during enrollment which is amazing for organizations that are looking for that level of protection. 

### Groups, Applications and more!

In addition, [Bravas.io](https://www.bravas.io/) doesn't necessarily provision information on a device using set device or user configurations. You may be scratching your head on this one. Doesn't [Bravas.io](https://www.bravas.io/) have the concept of a profile or configuration. Yes, they absolutely do but they are coupled with the concepts of groups. Whats amazing with [Bravas.io](https://www.bravas.io/) is that you can have apps, user account provisioning, SSO provisioning, etc.. all associated with set groupings. These groupings allow for the ability to deploy a set of apps and configurations. 

Whats amazing with [Bravas.io](https://www.bravas.io/) is that you can associate multiple groupings of apps and configurations to a user and thereby to the associated device. Many MDM's have concepts called "Smart Groups" and you can add devices or users to a group based on a set of critera. This is great for Static policies it allows some level of dynamic or a dynamic approach to deploying a set of policies. 

[Bravas.io](https://www.bravas.io/) takes this concept and turns it on its head by creating stackable groups that are closer to real world, in the real world you may have the Helpdesk group with access roles, apps and settings for that group of computers AND users. If a user moves from Helpdesk to be promoted to Systems Administrator you move that user to that group and access is revoked, new access is setup and old apps are removed and new apps are automatically deployed. Doing all that with a single smart group in most MDM's would be near impossible or very complex. In [Bravas.io](https://www.bravas.io/) its a snap. 

On that note you can also stack multiple groups you can have a user in many groups which merge settings, user accounts and app deployment. Super slick!

### User Provisioning with Hardware Token, or Key!!

One of the best parts of [Bravas.io](https://www.bravas.io/) is that you can associate a token, a key or hardware key to a user for authentication at the user level. What this does is it allows for passwordless authentication on the users first day. For organizations looking to stop using or deploying sensitive passwords this is a game changer. 

Upon provisioning, the key is loaded on the computer, and the user is walked through the process of setting up their token or key during their onboarding experience. I haven't seen a single MDM that offers this feature in the way that [Bravas.io](https://www.bravas.io/) has implemented it. The key, token or hardware token is associated with the user in the MDM. Because of this additional security is needed, you have to protect that key now we know why [Bravas.io](https://www.bravas.io/) uses that code based enrollment, it has to protect the installation of that secret token. 

This is an entirely different approach to MDM, because not only is it an MDM but here's where the power of its IDP back-bone comes into play. Very few MDM's can offer this level of security because a simple MDM alone is not sufficient enough to deploy a passwordless configuration for Google Apps they need to also act as an Identity Provider that can create, and issue those keys to the cloud system. 

### Takeaways

Setting up and configuring ZERO Touch in Bravas coupled with groups, its back-end IDP allows for a deployment that is so easy and logical. You assign the device to the user by creating a user enrollment code. You associate the groupings of apps and configurations to the user and finally you turn on the computer and allow the computer to pull down all the items associated with the user and now the device is setup. 

This is not a device centric approach which is where most MDM's fall down, this is a user based approach to setup and thats how non technical people think. All they know is they have an employee and they need stuff. [Bravas.io](https://www.bravas.io/) really has done a great job getting into the mindset of the business owner. If your looking for an MDM that allows for easy use that anyone can master give [Bravas.io](https://www.bravas.io/) a try!

{% include videos/video.html id="VAvtpBQ9wMA" header="/images/covers/2024/Header-Bravas-4.png" %}