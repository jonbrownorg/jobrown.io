---
title: 10.7 Web Server Admin Alternatives
author: Jon
excerpt: 'If you are using 10.7 server to administer any sort of website then you may have noticed that Apple has removed the bulk of the administration capabilities once found in the Server Admin app, and shifted a tiny fraction of that functionality to the Server app. Now one could speculate that if indeed Apple is shifting to a home server market, and it is currently frowned upon to run a robust website over a shared internet connection from ones living room that Apple may have done this to discourage users from using their new OS for that reason, however for those of us who need to run websites on 10.7 for our job or because we absolutely love OSX Servers then there are a few alternatives. '
layout: post
permalink: /blog/10-7-web-server-admin-alternatives/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - Web-Server
tags:
  - musings
  - review
  - server
  - Web-Server
---
If you are using 10.7 server to administer any sort of website then you may have noticed that Apple has removed the bulk of the administration capabilities once found in the Server Admin app, and shifted a tiny fraction of that functionality to the Server app. Now one could speculate that if indeed Apple is shifting to a home server market, and it is currently frowned upon to run a robust website over a shared internet connection from ones living room that Apple may have done this to discourage users from using their new OS for that reason, however for those of us who need to run websites on 10.7 for our job or because we absolutely love OSX Servers then there are a few alternatives.

I have been playing around with two pieces of software that promise to help bring back this lost functionality in an easy to use GUI tool and perhaps even restore a little sanity to running a website on Lion. The first application that I reviewed was called <a title="VirtualHostX" href="https://clickontyler.com/virtualhostx/" target="_blank">VirtualHostX</a>.

> VirtualHostX 3.0 is the easiest way to host and share multiple websites on your Mac. It&#8217;s the perfect solution for web designers working on more than one project at a time. (Aren&#8217;t we all?) No more nesting folders or asking the programmer across the cubicle for help. With VirtualHostX you can easily create and manage Apache virtual hosts with just a few clicks.

The other feature that I love about this tool is that you can share a private webpage or site that you are working on, that is not publicly available and share it with anyone publicly through a secure password protected connection. This is great if you need to show people updates of your site and their not on the local subnet. This tool allows you to code custom directives (If you need a list you can check out my last post [Missing Manual][1]). 

Out of the box this product works with popular platforms like WordPress and it uses the built in Apache that comes with OSX. Alternatively you can even set it to manage any instance of apache on your server.

Lastly you can even backup the changes that it makes to your system so that you can performa  seamless migration or just for your own peace of mind. I love this software and its an amazing alternative to using the Server app.

The other tool that I found that handles Apache administration on 10.7 is <a title="WebMon" href="https://cutedgesystems.com/software/WebMonForLion/" target="_blank">WebMon</a>. Webmon does not look as cool as VirtualHostX however it does have greater support for Custom Directives out of the box in the form of GUI interface.

> WebMon configures OS X&#8217;s built-in web server to support server-side includes, execCGI, PHP, SSL (including support for inserting Intermediate CA certs) and WebDAV, for multiple domains running on the same server.
> 
> With WebDAV turned on, your web server [acts like an iDisk][2], allowing you to connect to the WebDAV folder remotely, securely, and directly from the Finder, so you can save, share, and distribute your files and folders. You can also use the WebDAV folder to [share your iCal calendars][3].
> 
> WebMon also helps you set up the web server so that you can [monitor its log file][4] from a remote machine. WebMon is able to help you monitor any number of web servers from a single remote machine.

With WebMon you can setup and manage SSL Certificates, turn on CGI Support and much much more. This tool certainly restores almost all of the lost functionality . If you run multiple Web Servers than you might also like its built in monitoring service that makes sure that Apache is running soundly on other systems.

The great thing about both of these solutions is that they work well together, so you can use both or one of them but for the beginner web server administrator these tools restore a little more control when it comes to Apache administration.

I hope that you all found this article and walkthrough educational, as always please feel free to interact with me by posting questions and comments and I will answer them as best as I can. If you feel like any of this is wrong or could be improved upon also please leave a comment below, thanks!



 [1]: {{ site.site_cdn }}/blog/2011/12/09/10-7-server-web-administration-missing-manual/ "10.7 Server Web Administration: Missing Manual"
 [2]: https://cutedgesystems.com/software/WebMonForLion/#iDisk
 [3]: https://cutedgesystems.com/software/WebMonForLion/#iCal
 [4]: https://cutedgesystems.com/software/WebMonForLion/#log