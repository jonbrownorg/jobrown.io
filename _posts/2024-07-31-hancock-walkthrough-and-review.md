---
layout: post
date: '2024-07-31'
author: Jon Brown
permalink: /blog/hancock-walkthrough-and-review/
published: true
title: "Hancock Walkthrough and Review"
description: "Hancock Walkthrough and Review"
blogimgpath: 2024031Up
tags:
  - MacOS
  - iOS
categories:
  - reviews
  - video
image: /assets/images/covers/2024/Header-Hancock.jpg
thumbnail: /assets/images/covers/2024/Header-Hancock.jpg
cta: 2
comments: true
---
### Hancock: PSU MacAdmins Hackathon 2016 Winner!

Back in 2016 [Hancock](https://github.com/JeremyAgost/Hancock) was created at the MacAdmins PSU conference at the Hackathon and took the award for "Biggest Time Saver" thank you Jeremy Agostino for a great little utility!! 

I use this often and wanted to share this utility with my followers to share some of the tools that I use on the regular with my Mac followers. If you found this tool useful please follow [Jeremy Agostino here](https://www.linkedin.com/in/jeremy-agostino-5b155130/).

Citation: https://github.com/JeremyAgost/Hancock

Hancock is a GUI tool for signing packages and mobileconfig files. First it looks through your keychain for all certificates that can be used to sign, then signs the files using the selected certificate.

It can also unsign mobileconfig files, giving the user the ability to then read or make changes to mobileconfig file already signed.

### Requirements
At least one certificate with a private key installed. This could be an Apple Developer certificate or as simple as a free Comodo email cert.

### Signing
1. Select a valid certificate from the dropdown. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/2024031Up/SelectIdentity.png" class="img-fluid rounded m-2" width="800" />

2. Select the mobileconfig/pkg to sign by clicking Sign.... You are also able to drag and drop.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/2024031Up/DragNDrop.png" class="img-fluid rounded m-2" width="800" />

3. You will get prompted to allow access to your keychain. Choose Allow or choose Always Allow, if you plan on using that certificate again.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/2024031Up/AllowPrompt.png" class="img-fluid rounded m-2" width="800" />

4. Choose where you want to save the signed file.

### Certificate Status
Any certificate listed in the drop down can be used to sign. The icons tell you if the certificate is fully trusted by the system or not. ✅ Trusted by system. ⚠️ Not Trusted by system.

### Unsigning
If you want to make changes to a signed mobileconfig file, or it you want to view the contents you will need unsign the mobileconfig file first. This can be accomplished by clicking the Unsign... button and selecting the mobileconfig file to unsign. *NOTE: Unsigning pkgs is not supported.

{% include videos/video.html id="TFKMsl5qMtM" header="/images/covers/2024/Header-Hancock.jpg" %}