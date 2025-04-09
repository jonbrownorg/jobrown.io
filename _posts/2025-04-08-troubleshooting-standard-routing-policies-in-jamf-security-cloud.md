---
layout: post
date: '2025-04-08'
author: Jon Brown
permalink: /blog/troubleshooting-standard-routing-policies-in-jamf-security-cloud/
published: true
title: "Troubleshooting Standard Routing Policies in JAMF Security Cloud"
description: "Troubleshooting Standard Routing Policies in JAMF Security Cloud"
blogimgpath: 202408034Up
tags:
categories:
  - jamf
  - articles
  - scripts
image: /assets/images/covers/2025/jamf_security_cloud.png
thumbnail: /assets/images/covers/2025/jamf_security_cloud.png
cta: 2
comments: true
---

## The Problem: Standard Routing Policies Need Fixing

As a fairly new administrator of JAMF Security Cloud, it was the ease of which its administered that admittedly drew me in. Quite an elegant solution for securing the various apps on business workstations with premade app based VPN routing rules built right in, I was hooked. The concept is simple. Turn on the policies, create your enrollment and deploy and your done. 

The problem is that each rule is made up of allowed subnets, and domains that change. This is problematic because if Microsoft or Slack introduces a new content delivery network or domain into their app, and the policy is not allowing this new traffic the user experience is less than ideal, and you as the administrator are left trying to figure out whats going on. 

Is this an app issue? Is this a network issue? Did the developer just push out a bad update? Its not a fun position to be in. 

## Ruling Out Avenues

It was one such app that started giving me issues, Microsoft Teams for iOS. I have almost never had any issues with iOS, typically they are rock solid as they are vetted at least in some part by Apple and most developers tend to push regular updates, patches and fixes in most cases weekly. 

However, when a new version of Teams made its way onto our BYOD devies it spelled trouble for my fleet. Users started experiencing strange issues. Now we use app based VPN in JAMF Pro and we ensure that JAMF Trust is setup and works on every device. So the question really was, was this issue related to a Teams service issue? It certainly seemed plausible. At the exact time the issue started being reported there was a known minor Teams outage on their status tracker. 

Was this a VPN issue? Looking at JAMF Security cloud all systems seemed like it was a go. Not all elements in the app were malfunctioning, some features worked fine while others just seemed slow and unresponsive. 

Maybe it was just a bad update as I mentioned before. I opened support tickets with all of the usual suspects. Apple, Microsoft and JAMF. 

## Digging in Deep

While the Apple and Microsoft tickets led to the usual places. Have you tried removing the app? Have you tried clearing the cache? Have you tried resetting your phone? Have you tried a different network? Of course nothing helped. 

JAMF referred me to their security team and they started digging in. Looks like the policy was not including all the domains and subnets that were documented in a recent update in [Microsofts URL allow](https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide) list article for Microsoft Teams. 

After two weeks of solid testing we finally got to the bottom of all the URLs that were part of the built in policy and which ones needed to be added. 

### Allowed & Required URLs for Jamf Security Cloud App VPN Policy (Microsoft Services)

| Category                         | URLs / Subnets                                                                 |
|----------------------------------|---------------------------------------------------------------------------------|
| **Prebuilt Policy (Default)**    | *.adl.windows.com  |
|                                  | *.mediaservices    |
|                                  | windows.net        |
|                                  | *.msecnd.net       |
|                                  | *.msteams          |
|                                  | *.sfbassets.com    |
|                                  | *.skvne.com        |
|                                  | *.skvneforbusiness.com |
|                                  | *.adl.windows.com  |
|                                  | *.mediaservices.windows.net |
|                                  | *.msecnd.net       |
|                                  | *.mstea.ms         |
|                                  | *.sfbassets.com    |
|                                  | *.skype.com        |
|                                  | *.skypeforbusiness.com |
|                                  | * teams.microsoft.com |
|                                  | skype.com          |
|                                  | skypeforbusiness.com |
|                                  | teams.microsoft.com |
| **Additional Required Entries** | *.lync.com         |
|                                  | *.resources.office.net |
|                                  | *.static.microsoft |
|                                  | *.teams.cloud.microsoft |
|                                  | *.usercontent.microsoft |
|                                  | *.users.storage.live.com |
|                                  | compass-ssl.microsoft.com |
|                                  | join.secure.skypeassets.com |
|                                  | mamservice.manage.microsoft.com |
|                                  | mlccdnprod.azureedge.net |
|                                  | resources.office.net.edgekey.net |
|                                  | 52.122.0.0/15       |
|                                  | 52.244.160.207/32   |
|                                  | 52.238.119.141/32   |

## Conclusion

Almost immediately once the policy was updated things returned to normal. Its a good reminder that you can't assume any company is always working to update and test changes in your ecosystem. At the end of the day its your responsibility to maintain it and understand where the weaknesses are. JAMF posted back that they will update these URLS into their default prebuilt policy but it was clear that they also are not always aware of underlying changes at the app level. 

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
- [Microsoft 365 URLs and IP address ranges](https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide)
