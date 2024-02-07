---
layout: post
date: '2018-04-16 15:35 -0400'
author: Jon Brown
permalink: /blog/using-remote-login-in-macos/
published: true
type: BlogPosting
title: Using Remote Login in MacOS
image: /assets/images/covers/2018/remotelogin.jpg
thumbnail: /assets/images/covers/2018/remotelogin.jpg
link: /assets/app-images/2018/remotelogin.jpg
tagline: Using Remote Login in MacOS
tags:
  - mac
  - ios
categories:
  - tips
cta: 3
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
When you enable remote login, you can access your Mac using Secure Shell (SSH) from another computer.

If you don’t know what this is then you most likely do not want to enable it as it will make your Mac less secure, however if you need to use SSH to access your Mac read on!

Go to:

System Preferences > Sharing

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image1.png" class="img-fluid rounded m-2" width="700" />

Check the Remote Login Service. This will also enable secure FTP (sftp).

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image3.png" class="img-fluid rounded m-2" width="700" />

You now need to set which users can log in:

From the Allow access for list:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image2.png" class="img-fluid rounded m-2" width="700" />

All users:  Will allow any of your Mac’s users to log in, this includes any Network Users / Network Groups that are set in the Users & Groups preference pane.

To restrict the users that can access this Mac set the radio option to Only these users:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image5.png" class="img-fluid rounded m-2" width="700" />

If you want to be more specific than just restricting access to Administrators (to see which users are set to Administrator open the Users & Groups preference pane):

Click the plus button <kbd>+</kbd> to add users, then choose who can log in using SSH.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image7.png" class="img-fluid rounded m-2" width="700" />

Users & Groups is a list of all the users on your Mac. Network Users / Network Groups include people on your network. Select the user you want to add and then click Select.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image6.png" class="img-fluid rounded m-2" width="700" />

You can remove Users from the Access list by selecting their name and pressing the <kbd>-</kbd> button:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image8.png" class="img-fluid rounded m-2" width="700" />

To Log in from another computer using SSH open the Terminal which is in Applications/Utilities on a Mac, then type: ssh username@IP address

For example, if your user name is pete, and your computer’s IP address is 192.168.2.3, open the Terminal on another Mac and type: ssh pete@192.168.2.3.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image11.png" class="img-fluid rounded m-2" width="900" />

If you don’t know the user name and IP address for the Mac you want to access via SSH then open the Remote Login pane of Sharing preferences and your user name and IP address are shown below “Remote Login: On”.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/remotelogin/image10.png" class="img-fluid rounded m-2" width="700" />

The IP address 192.168.2.3 is a local subnet IP address and won’t allow you to access your Mac from outside the local network (both computers will need to be on the same network).

In order to use Remote Login to SSH into your Mac from the outside world you will have to set up port forwarding on your router and make note of the public IP address of your router, if you do not have a static IP address with your Internet Service Provider you can use a dynamic DNS service which is supported by most routers. Wikihow has a generic guide to setting up Port Forwarding on your router [here][1].

You will want to set up and enable port forwarding for port 22 to the IP address of the Mac you have turned Remote Login on. Doing this is opening up your Mac to the world and presents a huge security risk if you do not know what you are doing.

[1]: https://www.wikihow.com/Set-Up-Port-Forwarding-on-a-Router