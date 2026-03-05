---
layout: post
date: '2026-03-05'
author: Jon Brown
permalink: /blog/quickpkg-walkthrough-update/
published: true
title: "QuickPKG - More to Unpack"
description: "A practical QuickPKG walkthrough and review for Mac admins covering how it turns apps, DMGs, and ZIP files into installer packages quickly, where it fits in packaging workflows, and when to use it."
blogimgpath: 202408034Up
tags:
categories:
  - macadmins
  - video
  - tutorials
image: /assets/images/covers/2026/quickpkg_header_updated.png
thumbnail: /assets/images/covers/2026/quickpkg_header_updated.png
cta: 2
comments: true
series: quickpkg
---

{% include series.html id="quickpkg" %}

A few days ago I released a review of [QuickPKG](https://github.com/scriptingosx/quickpkg), a tool I love, and use almost daily. What I really love about packaging and QuickPKG is that no matter what MDM I am working in at any given moment, it provides a universal way to create a quick package to import into JAMF, Mosyle, or any MDM. 

I wanted to talk about some of the packaging features in QuickPKG 2.0 that I have specifically found very handy with the hopes that you will find them handy too!

## QuickPKG 2.0 Features

When you go to the [QuickPKG](https://github.com/scriptingosx/quickpkg) release page you will see that there are several new features

1. No more python dependency, complete re-write in Swift.
2. Builds distribution packages by default (use --component option to revert to building component packages)
3. Gathers minimum required OS version from the app bundle and applies that to the package applies --compression latest for better pkg compression (use --compression legacy to override)
4. Quarantine flags are removed from the payload before creating the package

Lets walk through some of these new features together. 

## No more python dependency

This is huge, [QuickPKG](https://github.com/scriptingosx/quickpkg) has been completely rewritten in Swift from the ground up, and no longer requires that binary dependency. This means for many companies QuickPKG just got a whole lot more trustworthy, why? Because vulnerabilities in Python are not a core concern any longer. If you were using QuickPKG and Python on your Mac you can now remove Python and use QuickPKG natively. 

Now there are a lot of other tools that use Python, and Python is someting that gets updated regularly but its something you have to remember to do. This move away from Python adds some much loved simplicity to the product. 

## Builds distribution packages by default

One of the most useful changes in QuickPKG 2.0 is that it now builds distribution packages by default. Instead of producing only a simple component package, QuickPKG wraps the payload in a proper distribution package using productbuild. This mirrors how many vendor installers are structured and gives administrators a more flexible installer format out of the box. 

For Mac admins, this matters because distribution packages allow for richer installer behavior. They can include pre- and post-install scripts, conditional logic, and multiple components if needed.

The result is a more production-ready package without any extra work. With a single command, you get a cleaner installer structure that’s easier to integrate into MDM deployments, packaging workflows, or automated software distribution systems.

In fact customizing a package with pre or post installers is as simple as passing in these 2 variables. 

```bash
--postinstall <script> (or --post)
Use the script file given as a postinstall script. If given together with the --scripts option will attempt to merge the two and error if a postinstall script is already present.

--preinstall <script> (or --pre)
Use the script file given as a preinstall script. If given together with the --scripts option will attempt to merge the two and error if a preinstall script is already present.
```

```bash
quickpkg /Applications/Numbers-app --postinstall ~/Desktop/Scripts/postinstall.sh 
```

Now of course you can still build a simple non distribution package if you want manually

```bash
quickpkg /Applications/MyApp.app --component
```

To save your package to a specific folder use teh --output flag

```bash
quickpkg /Applications/Numbers.app --output ~/Packages/
```

## Gathers minimum required OS version from the app bundle

QuickPKG has always been about reducing manual packaging steps, and version 2.0 continues that philosophy by automatically extracting metadata from the application bundle—including the minimum supported macOS version.

When QuickPKG analyzes the application, it reads the bundle information and uses details such as the application name, version, identifier, and minimum OS requirement to build the installer package.  ￼ This means the package metadata reflects the actual compatibility constraints of the application, rather than relying on guesswork or manual configuration.

For administrators managing large fleets, this small automation removes an entire class of packaging mistakes. Deployments become more reliable because the package accurately represents the software’s requirements, ensuring the installer behaves consistently across different macOS versions.

## Quarantine flags are removed

> When the application carries a quarantine flag, quickpkg will remove it before packaging, so that the installed app on the destination system is not quarantined.

Another practical improvement in QuickPKG’s workflow is the automatic removal of quarantine flags from applications before packaging.

Files downloaded from the internet often carry the com.apple.quarantine extended attribute, which signals macOS security systems like Gatekeeper to perform verification checks when the app is first launched.  ￼ If that attribute is preserved inside a package, the installed application can still appear quarantined on the destination system, leading to unnecessary prompts or warnings.

This is a great and much needed step since QuickPKG does not offer notarization.

> quickpkg does not support notarization. Apple's notarization process requires that the application inside the package is signed with the same Developer ID as the package itself. Since quickpkg is designed to repackage third-party applications that you don't control the code signing for, notarization is not recommended or possible for packages created with this tool. 

However a nice little add-on script in the repo seems to offer some basic packaging and notarization features [here](https://github.com/scriptingosx/quickpkg/blob/main/pkgAndNotarize.sh).

[Armin Briegel](https://www.linkedin.com/in/armin-briegel/) wrote a great [blog](https://scriptingosx.com/2023/08/build-a-notarized-package-with-a-swift-package-manager-executable/) about this wonderful tool and its well worth the read. 

Check out the video on QuickPKG, I haven't had the time to re-record an updated version but the use-cases are mostly unchanged, the only main differences are how you install it and how much more flexible it is to use as a universal binary. You can read the updated [blog here](https://jonbrown.org/blog/quickpkg-walkthrough-and-review/) for more information. 

{% include videos/video.html id="wQ0DGrnpFZ4" header="/assets/images/covers/2026/quickpkg_header.png" %}

## Compression

QuickPKG 2.0 introduces explicit control over package compression, making it easier to optimize installer size and compatibility. With the new --compression option, QuickPKG can pass compression settings directly to pkgbuild, allowing you to choose between modern or legacy compression algorithms when creating the installer.  ￼

By default, QuickPKG uses --compression latest, which allows macOS packaging tools to select the most efficient compression algorithm available for the minimum supported OS version. This typically results in smaller package sizes and faster deployments compared to older compression methods.  ￼

For environments that still support older macOS versions, you can switch to --compression legacy. This ensures compatibility with older installer frameworks that expect the classic compression format. The flexibility gives Mac admins control over the trade-off between maximum compatibility and optimal package size, while still keeping the QuickPKG workflow simple and predictable.

```bash
quickpkg /Applications/Numbers.app --compression legacy
```

## Signing a package

QuickPKG also makes it easy to build signed installer packages, which is increasingly important for modern macOS deployment workflows. By providing the --sign option with a valid Developer ID Installer certificate, QuickPKG will automatically sign the resulting distribution package as part of the build process.  ￼

Signing a package ensures that macOS can verify the origin and integrity of the installer. This is especially important when distributing software through management platforms, internal repositories, or automated deployment pipelines. A signed package helps prevent tampering warnings and improves trust with macOS security features such as Gatekeeper.

For administrators and developers, the advantage is convenience. Instead of building a package and then running a separate signing step, QuickPKG can handle the process in a single command. The result is a cleaner packaging workflow that produces deployment-ready installers suitable for enterprise distribution.

```bash
quickpkg ~/Downloads/Firefox.dmg --sign "Developer ID Installer: Your Name"
```

You can find available signing identities with:

```bash
security find-identity -p basic -v
```

## Conclusion

QuickPKG 2.0 continues to refine what makes the tool so useful for Mac administrators: speed, sensible defaults, and fewer manual packaging steps. Features like distribution packages by default, automatic metadata detection, compression control, package signing, and quarantine cleanup remove common friction points in the packaging workflow. The result is a tool that lets you go from an app bundle to a deployment-ready installer in seconds—while still producing packages that meet the expectations of modern macOS management and security practices.