---
title: 10.6.2 Split Horizon DNS
author: Jon
layout: post
permalink: /blog/10-6-2-split-horizon-dns/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/xserve.png
categories:
  - dns-settings
  
tags:
  - admin
  - dns
  - server
  - solution
  - split-horizon
---
The DNS interface in Server Admin.app is not suitable for doing a split-horizon DNS configuration. It simply doesn&#8217;t expose all of the flexibility of bind that you need to pull off such a configuration.

If you poke around the bind config files on your OS X Server, you&#8217;ll be able to see how apple has set them up so that you can edit them directly without confusing the GUI. /var/named contains zone files that you may edit, and they include corresponding files in /var/named/zones which you should not edit. They&#8217;ve done something similar for /etc/named.conf and the files in /etc/dns/.

Having said that, I recommend not doing both internal and external resolving for split-horizon DNS on your server, mainly because:

  1. It&#8217;s kind of complicated, and you lose any convenience you had when you were able to use the GUI exclusively
  2. You have NAT, which makes it even more complicated
  3. There are solutions available from third parties that are better-performing, cheap/free, and more robust

In my organization, we use DNS in Mac OS X Server extensively for the internal part of a split-horizon setup. We use the &#8220;Advanced DNS&#8221; part of a network solutions account for the external part. It comes free with the domains we&#8217;ve purchased, and has redundancy and speed far greater than what I could justify for hosting a handful or externally-resolving names myself.

You need to reconfigure BIND to use &#8220;views&#8221; with two different versions of your zone file, such that access from inside your network gives the 192.168.1/24 (internal) addresses, but requests forwarded from outside (via your 2-Wire router) give out your static public IP.

{% highlight bash %}
acl internal {
    127.0.0.0/8;
    192.168.1.0/24;
};

view "internal" {
    match-clients { internal; };
    zone "mydomain.com" {
        type master;
        file "/etc/bind/internal/db.mydomain.com";
     };
};

view "external" {
    match-clients { any; };
    zone "mydomain.com" {
        type master;
        file "/etc/bind/external/db.mydomain.com";
    };
};{% endhighlight %}

For more information check this out it is a [How To with more detailed instruction][1]s for Split Horizon DNS configuration.



 [1]: https://www.howtoforge.com/two%5Fin%5Fone%5Fdns%5Fbind9%5Fviews