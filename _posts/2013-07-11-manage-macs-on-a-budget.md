---
title: Manage your Macs on a budget
author: Jon
layout: post
permalink: /blog/manage-macs-on-a-budget/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - cloud-computing
  - osx-system-administration
  - product-reviews
  - Web-Server
tags:
  - budget
  - cloud
  - mac
  - manage
  - munki
  - osx
---
Let me preface this article by saying that Munki is an open source tool that allows system administrators trying to take hold of their Macintosh environment with little to no budget. Munki is a tool that was developed by a systems administrator over at Disney Animation Studio&#8217;s. It is now used by small companies and large alike (Disney & Google). Now its also true that both of these giant&#8217;s also use Casper a top shelf product by JAMF software.

Munki has a few things going for it. It has a small footprint. Its open source. Its well supported. Its free. Its not a complete solution but if you want a way to manage your systems and deploy software to your fleet of Macintosh computers with little to no budget its a good alternative to Casper. Many companies use Munki and Casper together (Google) while other smaller companies use only Munki. Munki requires any web server or Mac OSX Server running Apache, and a fairly stable network. 

**Setup**  
Munki consists of client-side tools written largely in Python, and is available as open-source under the Apache 2 license at <https://code.google.com/p/munki>. The client tools run on Leopard and Snow Leopard. They require Python 2.5, and so will not run on Tiger or earlier versions of Mac OS X.

Its pretty easy to setup and I won&#8217;t go through a typical setup that is because there is already an awesome walkthrough over at the Google Code website [located here][1]. The concept here is that you install an agent on the client computers that connects using a &#8220;heartbeat&#8221; or a LauncDeamon that checks a local repository for updates. Munki allows you to serve updates to your entire fleet of Mac computers and it ties in nicely with Apple&#8217;s own software updates as well. 

Managing Mac OS X machines has many facets. Many of the commercial solutions for software deployment also provide solutions for other facets of Mac management. Munki does not. Munki focuses only on software deployment. You&#8217;ll need to turn to other tools for imaging, inventory, remote assistance, and preference management. At my organization, we&#8217;re using DeployStudio for imaging and Apple&#8217;s Screen Sharing for remote assistance. If you&#8217;ve been reading this column for very long, it shouldn&#8217;t come as a surprise that we&#8217;re using Local MCX for preference management.

**Munki Data**  
Munki uses three types of data. **Installer items:** these are packages or disk images containing the software to be installed. In many cases, you can use a package or disk image provided by the software vendor without having to repackage or convert the installer package in any way. For example, munki can install Firefox from the disk image that you download from https://www.mozilla.com.

**Catalogs:** these are lists of available software, containing metadata about the installer items. You, as the munki administrator, build these catalogs using tools provided with munki.

**Manifests:** A manifest is essentially a list of what software should be installed on or removed from a given machine. You could have a different manifest for every machine, or one manifest for all of your machines. Manifests can include the contents of other manifests, allowing you to group software for easy addition to client manifests. For example, you could create a manifest listing all of the software every machine in your organization must have. The manifest for a client could then include the common-software manifest, and additionally have software unique to that client.

Manifests and catalogs are stored on the web server as standard Apple plist files in text format. If you&#8217;ve administered Mac OS X machines, you&#8217;ve almost certainly encountered plist files. They are a well-understood way to store structured data in a text format.

**Munki Behaviors**  
This is a good time to discuss a major part of munki&#8217;s design. Munki is designed to be polite. It never installs anything under a currently active user session without the user&#8217;s approval.  If no one is logged in, munki will by default install or remove software automatically, hiding the loginwindow and presenting a status window. If a user is logged in, munki notifies the user of updates and allows the user to either update right away or defer the update until later. Munki also handles multiple user logins (via Fast User Switching) gracefully and will not install items if more than one user is logged in (as doing so could cause switched-out users to lose work).

Administrators can customize these behaviors, configuring munki to never bother the user with available updates (therefore waiting to install all updates when no user is logged in), or the inverse &#8211; telling munki to never automatically install software when at the loginwindow, and instead always requiring user consent for all updates. Administrators cannot, however, easily configure munki to force an install or removal while users are logged in.

**Munki Web Admin**  
Munki is good but what if you want to report on all the computers or check if they have installed the updates. Well with Munki Web Admin now you can! MunkiWebAdmin is a Django web application that incorporates the functionality of the MunkiReport project and also provides the ability to browse catalogs, and browse and edit manifests of an existing Munki repo. Again setup is very simple and I set it up on my own repository and it works great. Find [the documentation here.][2] 

**Munki Admin App**  
Adding applications or updates to Munki is 100% command line. Not everyone is familiar or comfortable in this environment. Munki Admin App helps beginners add programs and updates, build catalogs, and manifests and ultimately configure the package info files and other components of munki in a nice easy to understand user interface. Check out the code [here][3] and download a pre-compiled version as well.

**Simian**  
Developed by Google corporate engineering, provides a web-based admin interface for munki clients.Simian is a wordplay of munki, actually meaning “higher primate,” ergo the advancement of the munki product.

Simian provides a number of admin functions that were missing from a true enterprise class product, such as dynamic generation of the catalog (software to consume), web based tools instead of a CLI, reporting information (number of munki hosts, client versions, patch status, etc). Simian clients can connect anywhere (internal or external network) because the application is hosted by Google App Engine; whereas the common munki-only deployment usually was deployed in the intranet only. The SaaS Google Apps engine model also allows for all the same advantages of any cloud platform (scale, elasticity, price per consumption, etc.).

**Conclusion**  
There are many controversial viewpoints on management software for Mac OSX. Personally I love simplicity and simplicity lies in an all encompassing solution such as Casper from JAMF software. However its a cost prohibitive solution for many small companies. Using Munki or Simian with Munki Admin App and Munki Web Admin gives you most of the features that you will need to deploy software to your fleet of Macintosh computers.



 [1]: https://code.google.com/p/munki/wiki/DemonstrationSetup
 [2]: https://code.google.com/p/munki/wiki/MunkiWebAdminOSXSetup
 [3]: https://github.com/hjuutilainen/munkiadmin