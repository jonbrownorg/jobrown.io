---
title: Understanding Mobile Access Server
author: Jon
layout: post
permalink: /blog/understanding-mobile-access-server/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/keys.png
categories:
  
  - osx-system-administration
tags:
  - mobile-access
  - server
---
Well if you were like me you were thrilled about the idea of Apples new Snow Leopard Server feature Mobile Access server. So great what is it, what does it do? Well it keeps your private web, ical and mail data secure without the use of a VPN and its really easy to setup. Great I was sold, and I started down the path of figuring out the Mobile Access Server. The more I got down into the nitty gritty of the setup the more I realized just what a 1.0 feature this really is. After some trial and error I decided to share my experience with others in the hopes of fully Understanding the Mobile Access Server.

Alright first thing you have to understand put aside any notion of running mobile access server on any other server you may already have. Mobile access server is meant to run on a gateway server. A gateway server is a server that routes traffic to multiple destinations. Meaning its a stand alone server whose primary function is to keep your private data private.It translates public requests and serves up private content. You must run mobile access server on a separate server from the servers which contain your private data.

The second mental hurdle to get over is that yes, the gateway server or your mobile access server must be on the same subnet as the other private servers for which public requests will be relayed. The server has to have some sort of direct line of communication to the private server or servers in question. The next hurdle is DNS, yes DNS can be a huge headache but here are a few things to understand. 

The Public DNS that will be routed through the gateway server should point to the gateway server.

The gateway server in turn should be able to resolve all of those DNS names into private IP addresses meaning you must have internal DNS setup with the appropriate zones and records. I learned this the hard way, the Mobile Access service looks to internal DNS do not point to an external private DNS server for internal DNS it must be running on the same server as the Mobile Access service.

The last hurdle is this once DNS is setup and the service is started and you feel like you have configured everything correctly and when your so exhausted and you go to try your Mobile Access server settings and they do not work the first time, do not be surprised as I said this is a very 1.0 feature. Be prepared to check, and re-check your settings. Be prepared to start and stop DNS multiple times. Mobile Access server is a great service and works great once configured correctly. 

I am now open to field questions you may have reagarding setup or ideas for further posts to explain in more detail. I hope this at least clears up some of the misconceptions that I had with the service for you ahead of time.

