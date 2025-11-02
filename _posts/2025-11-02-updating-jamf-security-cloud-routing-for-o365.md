---
layout: post
date: '2025-11-02'
author: Jon Brown
permalink: /blog/updating-jamf-security-cloud-routing-for-o365/
published: true
title: "Keeping Jamf Security Cloud Current for Microsoft 365: Updated Routing Policies"
description: "Updated Jamf Security Cloud routing and App VPN allow-lists for Microsoft 365 and Teams."
blogimgpath: 202408034Up
tags:
categories:
  - jamf
  - articles
  - scripts
image: /assets/images/covers/2025/jamf_security_cloud_updated.png
thumbnail: /assets/images/covers/2025/jamf_security_cloud_updated.png
cta: 2
comments: true
series: jamfsecuritycloud
---

{% include series.html id="jamfsecuritycloud" %}

## Keeping Jamf Security Cloud Sharp for O365

When I first wrote about troubleshooting Standard Routing Policies in Jamf Security Cloud, the goal was simple: help admins keep Microsoft Teams and Microsoft 365 traffic flowing smoothly through Jamf Trust + App-Based VPN.

Fast-forward, Microsoft has added additional IP ranges and hostnames — and if you're relying solely on Jamf's built-in policy, you're eventually going to feel the pain when Teams, Outlook, or SharePoint suddenly stop behaving.

This post updates the original allow-list to ensure full functionality with Microsoft 365 services, including Teams calling, media, authentication, and content delivery.

As before — we don't remove anything. We only **add what's required** and label what's **New**.

---

## Updated Allowed & Required URLs for Jamf Security Cloud App VPN Policy (Microsoft Services)

### ✅ Default Jamf Policy URLs (Unchanged)

| Category | URLs / Subnets |
|---|---|
| Prebuilt Policy | \*.adl.windows.com |
|  | \*.mediaservices |
|  | windows.net |
|  | \*.msecnd.net |
|  | \*.msteams |
|  | \*.sfbassets.com |
|  | \*.skvne.com |
|  | \*.skvneforbusiness.com |
|  | \*.adl.windows.com |
|  | \*.mediaservices.windows.net |
|  | \*.msecnd.net |
|  | \*.mstea.ms |
|  | \*.sfbassets.com |
|  | \*.skype.com |
|  | \*.skypeforbusiness.com |
|  | \*.teams.microsoft.com |
|  | skype.com |
|  | skypeforbusiness.com |
|  | teams.microsoft.com |

---

### ✅ Required Custom Hostnames (Original + New)

| Hostname | Status |
|---|---|
| \*.lync.com | Required |
| \*.resources.office.net | Required |
| \*.static.microsoft | Required |
| \*.teams.cloud.microsoft | Required |
| \*.usercontent.microsoft | Required |
| \*.users.storage.live.com | Required |
| compass-ssl.microsoft.com | Required |
| join.secure.skypeassets.com | Required |
| mamservice.manage.microsoft.com | Required |
| mlccdnprod.azureedge.net | Required |
| resources.office.net.edgekey.net | Required |
| aadcdn.msftauth.net | **New** |
| autodiscover.office365.com | **New** |
| cdn.office.net | **New** |
| cdn.office365.com | **New** |
| config.office.com | **New** |
| exchange.microsoft.com | **New** |
| \*.akadns.net | **New** |
| \*.azureedge.net | **New** |
| attachments.office.net | **New** |

---

### ✅ Required IP Ranges (Original + New)

| IP Range / Address | Status |
|---|---|
| 52.122.0.0/15 | Required |
| 52.244.160.207/32 | Required |
| 52.238.119.141/32 | Required |
| 40.64.0.0/10 | **New** |
| 131.253.0.0/16 | **New** |
| 52.96.0.0/14 | **New** |
| 20.190.128.0/18 | **New** |
| 104.146.0.0/16 | **New** |
| 204.79.197.0/24 | **New** |
| 13.107.0.0/16 | **New** |

---

## What Changed?

Microsoft is rapidly expanding delivery and authentication networks to support:

- Teams AV media & recording services
- CDN-accelerated Office 365 content
- Exchange and Outlook authentication shifts
- Azure AD / Entra traffic delivery upgrades
- Regional cloud & edge expansion

Jamf’s default routing list still doesn’t always catch everything — so the safest path is **periodic manual validation** against the Microsoft service endpoint list.

👉 https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges

---

## Conclusion

Once again — the minute these new entries were added, end-user friction disappeared. Teams behaved, Outlook synced, and Microsoft 365 returned to the smooth experience we expect.

**Key takeaway:**  
Even with platform vendors automating routing intelligence, **cloud environments evolve faster than policy libraries**. Review, validate, test, and stay ahead — or your users will alert you the hard way.

If you found this helpful, follow me on [LinkedIn](https://www.linkedin.com/in/jonbrown2/) and feel free to drop questions or lessons you've learned in your environment.

Stay secure, stay curious, and keep Jamf sharp. 🔐💪

### Sources
- [Microsoft 365 URLs and IP address ranges](https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide)

## Ready to take your Apple IT skills and consulting career to the next level?
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**
