---
title: Munki Software License Tracking
author: Jon
excerpt: "Beginning with the 0.9.1 builds of the munki tools, Munki can query a webserver to determine if there are available seats for licensed software (or any software you wish to make available via optional_installs, yet control the number of deployed copies). In order to use this wonderful new feature here are the things you need."
layout: post
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
permalink: /blog/munki-software-license-tracking/
categories:
  - casper-munki
  - osx-system-administration
tags:
  - license-tracking
  - munki
  - query
  - software
  - sql
---

Beginning with the 0.9.1 builds of the munki tools, Munki can query a webserver to determine if there are available seats for licensed software (or any software you wish to make available via optional_installs, yet control the number of deployed copies). In order to use this wonderful new feature here are the things you need.

  * lient running munkitools 0.9.1.x or later
  * Web service that is tracking available seats and that provides information in a specific format in response to queries. One such server is MunkiWebAdmin as of 16 July 2013.

If you have a running instance of MunkiWebAdmin, make sure you&#8217;ve updated to the latest code. [See this post][1] for instructions on how to update MunkiWebAdmin.

This new functionality is basically a set of stored queries that query the inventory items database to count the number of machines that have a specific thing installed. To add items to the license seat tables, login to the admin interface (http:/your.munkiwebadmin.server/admin) &#8212; you may need to use your superuser account).

Click on &#8220;Licenses&#8221;.

Click the &#8220;Add license&#8221; button. 

tem name contains the name of the thing you are tracking. To take advantage of upcoming integration with the Munki client and Optional installs, this should be the same as the name of the related pkginfo item.

Total is the total number of seats you have available (values seen here are fake).  
Cost per seat can be used to track your &#8220;per seat&#8221; license cost (values seen here are fake).

The next four fields control the query that will be done to find entries in the inventory items table.

**Inventory name** matches the name of the item in the inventory items table. This is the application name part of the path (minus .app).  
**Inventory version** is the version number of the item. This value supports * as a wildcard to allow you to match all items starting with a major version number.  
**Inventory bundleid** is the CFBundleIdentifier of the item  
**Inventory bundlename** is the CFBundleName of the item  
**Inventory path** is the full pathname of the item.

For any given item, you would use one of Inventory name|Inventory bundleid|Inventory bundlename|Inventory path and optionally Inventory version.

In the example above, the query would be for all items with bundleid=&#8221;com.apple.iWork.Keynote&#8221; and version starting with &#8220;5.&#8221; Machines with this item are considered to have iWork09 installed.

For each item you wish to track, you need to specify a unique item to count. For single applications, this is straightforward. For application &#8220;suites&#8221; this can be a bit trickier and may require some judgement calls.

For Adobe CS4, CS5, and CS6 installs, I am using the presence of the \_uninstaller\_ application as the thing to count. This allows the mechanism to distinguish between the various suites and individual products.

Outside of the admin interface, tracked installs display like this

**How does this work?**  
During a managedsoftwareupdate run that includes checking with the server for updates, if there are any uninstalled optional_installs, Munki crafts one or more queries of the form:

LicenseInfoURL?name=ItemOne&name=ItemTwo&name=ItemThree

where LicenseInfoURL is the license info URL (for MunkiWebAdmin, that&#8217;s something like https://mwaserver/licenses/available/) and ItemOne, ItemTwo and ItemThree are names of pkginfo items.

The server then looks up license seat info for ItemOne, ItemTwo and ItemThree and responds with a plist

{% highlight bash %}
curl "https://mwa:8444/licenses/available/?name=MicrosoftOffice2008&name=MicrosoftOffice2011&name=FooBarBaz"

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>MicrosoftOffice2008</key>
	<false/>
	<key>MicrosoftOffice2011</key>
	<true/>
</dict>
</plist>
{% endhighlight %}

The returned plist should contain key/value pairs, where the key is the item name and the value is a boolean: true if there are available seats, false otherwise. If the server has no information for an item (as is the case for item &#8220;FooBarBaz&#8221;) it is acceptable to return nothing. A request and response for only &#8220;FooBarBaz&#8221; looks like this

{% highlight bash %}
curl "https://mwa:8444/licenses/available/?name=FooBarBaz"

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
</dict>
</plist>
{% endhighlight %}

The returned results are recorded in /Library/Managed Installs/InstallInfo.plist. Any optional\_installs item with license seat info gets a new key &#8212; licensed\_seats_available:

{% highlight bash %}
<dict>
	<key>description</key>
	<string>Installs Adobe Photoshop CS5 and related components.</string>
	<key>display_name</key>
	<string>Adobe Photoshop CS5</string>
	<key>installed</key>
	<false/>
	<key>installed_size</key>
	<integer>1028875</integer>
	<key>installer_item_size</key>
	<integer>1028875</integer>
	<key>licensed_seats_available</key>
	<true/>
	<key>name</key>
	<string>AdobePhotoshopCS5</string>
	<key>uninstallable</key>
	<true/>
	<key>version_to_install</key>
	<string>12.0.0.0.0</string>
</dict>
{% endhighlight %}

When Managed Software Update is displaying Optional Software, any item with a licensed\_seats\_available key equal to false will have its checkbox greyed out, preventing a user from selecting it for install. Additionally, the Status column will read &#8220;No available licensed seats&#8221;.

Note that there is no explicit mechanism for a client to notify the server that it has installed an item (or will install an item). Instead, the client submits an updated ApplicationInventory.plist to the server. The server uses this information to determine the number of installed seats. (A server other than MunkiWebAdmin is free to use some other method to determine the number of installed seats.)

 [1]: {{ site.site_cdn }}/blog/updating-munki…vericks-server/ ‎