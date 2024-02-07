---
layout: post
date: '2018-03-22 03:26 -0400'
author: Jon Brown
permalink: /blog/screen-share-on-your-mac/
published: true
type: BlogPosting
title: 'Sharing : Screen Share to your Mac over a local network'
tagline: 'Sharing : Screen Share to your Mac over a local network'
tags:
  - tutorials
  - mac
categories:
  - tips
image: /assets/images/covers/2018/screens_vnc_30_mac_book_pro_hero.jpg
thumbnail: /assets/images/covers/2018/screens_vnc_30_mac_book_pro_hero.jpg
link: /assets/app-images/2018/osx-control-remotely-670x335.jpg
cta: 4
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
In my previous post we spoke about how to share access to a DVD disk over the local network to a Mac that has no DVD drive. 

The next item in the list for Sharing is Screen Sharing, this can be very useful if you want to control one Mac on the same network from another.

It allows you to view and control the Macs desktop and apps as well as access the folders and files.

It is a little more complicated than using DVD sharing in that you also have to consider permissions, these are an access list of users that can control the Mac via Screen Sharing.

Normally you may allow access to all users or just allow Administrators to control the Mac to see whether a user is an Administrator or not go to System Preferences > Users & Groups:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image9.png" class="img-fluid rounded m-2" width="700" />

Then in the list on the left-hand side you can see whether a user is an Administrator or not as they will have “Admin” under their username:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image8.png" class="img-fluid rounded m-2" width="700" />

To enable Screen Sharing check the box for Screen Sharing from the Sharing preference pane:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image12.png" class="img-fluid rounded m-2" width="700" />

If after checking the Users & Groups System Preference pane you are happy to allow access to all users you can leave the default settings in the Allow access box:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image10.png" class="img-fluid rounded m-2" width="700" />

If you want to limit access to just Administrators simply change the radio box to Only these users:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image11.png" class="img-fluid rounded m-2" width="700" />

By default, only Administrators will be in the access control list, to add other users or groups click the plus sign + at the bottom of the list:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image13.png" class="img-fluid rounded m-2" width="700" />

Now select the user you want to grant Screen Sharing Permissions to and then click select:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image14.png" class="img-fluid rounded m-2" width="700" />

Now we’ve added the user “mini” to the screen sharing list, you should be aware that this user may now access the current screen of your Mac so if you are logged in on your main account as the Administrator the user mini will now be able to view and control your Mac as if they were you, you must log out first if you do not want this to happen and when the user mini connects they will see the normal macOS login screen and will only be able to access accounts that they have the password for.

There is also a button on the Sharing pane called Computer Settings, this can allow you to enable the use of VNC viewers such as realVNC and TightVNC to access the Mac using just a password, if you enable this make sure you use a strong password. It can also be somewhat hit and miss using VNC from a PC rather than the Macs built in Screen Sharing.

The other option is to allow anyone to request permission to control the screen, if you enable this using another Mac and accessing screen sharing will make an alert box pop up asking you if you want to grant them permission.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image15.png" class="img-fluid rounded m-2" width="700" />

To access the screen of the Mac you have enabled Screen Sharing on look for the mac in the sidebar of the finder window, here we can see “workstation” click on workstation and then click Share Screen. If both Macs are connected to the same iCloud account no usernames and passwords will be required:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image16.png" class="img-fluid rounded m-2" width="700" />

If both Macs are not connected to the same iCloud account when you click on share screen a login dialogue box will open and you enter your User Name and password for that Mac the same as you would when logging on to the Mac when you are sat in front of it:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image17.png" class="img-fluid rounded m-2" width="700" />

This will open the Screen Sharing App which shows you the screen of the Mac you are controlling.
There are a few options worth taking note of:

From the edit menu, you can enable the shared clipboard, that is if you copy something on the screen of the remote Mac you can paste it into the Mac you are using.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image18.png" class="img-fluid rounded m-2" width="700" />

And the other option worth noting is the screen quality, if the connection is a little slow and there is a lag between your actions you can set the screen quality to Adaptive from the View menu in the Screen Sharing App:

<img src="{{ site.site_cdn }}/assets/images/blog/2018/vnc/image19.png" class="img-fluid rounded m-2" width="700" />

In the coming weeks we will cover all the options in the Sharing Preference pane, see you next week.
