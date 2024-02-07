---
title: Authenticate with AD credentials via ARD / SSH
author: Jon Brown
layout: post
permalink: /blog/authenticate-with-ad/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: "Authenticate with AD credentials via ARD / SSH"
categories:
  - bash-scripts
  - microsoft
  - osx-system-administration
tags:
  - tutorials
  - mac
  - bash-scripts
  - Microsoft
---
Binding a Mac to an AD is fairly straight forward. Most Mac Admin's worth their salt, know how this is done, many know how to do this via the command line. Once your Mac is bound, authentication is easy, local authentication that is. But what if you want to use your secure AD credentials over an SSH or Apple Remote Desktop connection? Well thats when things need a bit more configuration. Having recently deployed a series of servers with this configuration I figured I would share some of the commands needed to get this configured correctly.

The way to accomplish ARD AD authentication is by nesting an AD group inside a local group. You can create any group you want but for the sake of this article we will use ARD_ADMIN. I need to credit [this article][1]. The UNT Apple Managers group is a valuable and often looked over internet resource. I highly recommend checking out their group articles and tutorials.  

### Setup ARD Access
---

* Create a Local ARD_ADMIN group using dscl in Terminal:

{% highlight bash %}
sudo dscl . -create /Groups/ARD_ADMIN
sudo dscl . -create /Groups/ARD_ADMIN PrimaryGroupID "530" 
sudo dscl . -create /Groups/ARD_ADMIN Password "*" 
sudo dscl . -create /Groups/ARD_ADMIN RealName "ARD_ADMIN" 
sudo dscl . -create /Groups/ARD_ADMIN GroupMembers "" 
sudo dscl . -create /Groups/ARD_ADMIN GroupMembership ""
{% endhighlight %}

* Now you just need to create an active directory group that you will add to the ARD_ADMIN group. I already had such a group, I wanted to add the ARD group to the ARD_ADMIN group to add the group use this command

{% highlight bash %}
sudo dseditgroup -o edit -a "UNT\SomeGroupName" -t group ARD_ADMIN
{% endhighlight %}

* Now that you have a local group with an AD group nested inside, you can give your group the necessary privileges via the ARD Kickstart command:

{% highlight bash %}
cd /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/
sudo ./kickstart -activate -configure -access -on -privs -all -users ARD_ADMIN -restart -agent
{% endhighlight %}

* The last step in this process is to set the ARD client options to allow directory logins, again do this via the ARD Kickstart command:

{% highlight bash %}
cd /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/
sudo ./kickstart -configure -clientopts -setdirlogins -dirlogins yes
{% endhighlight %}  

  
  

### Setup SSH Access
---
The process here is pretty straight forward. You would add a user to SSH, active directory or otherwise using the System Preferences, Sharing preference pane. But what if the admin account in question is hidden? Hidden accounts can be great for system admins who want to hide a backup or admin account on their workstation

However there is no way to add a user that is hidden, to get around this you can un-hide the user using this command

{% highlight bash %}
sudo defaults write /Library/Preferences/com.apple.loginwindow Hide500Users -bool NO
{% endhighlight %}

Once done, you can add the user via System Preferences -> Sharing, the Remote Login option should have a spot for "Only these users".

If you've properly joined the machine to the domain, you should be able to select the group from the "+" sign. To re-hide any formerly hidden user accounts run this command

{% highlight bash %}
sudo defaults write /Library/Preferences/com.apple.loginwindow Hide500Users -bool YES
{% endhighlight %}



### The Apple Way: How to allow administration of OS X from network-based accounts
---
[Apple][2] has its own write up on how to authenticate users via active directory credentials. 

System Preferences

1. You can add a network user to the local admin group using System Preferences.
2. Log in with a network user account.
3. From the Apple menu, choose System Preferences.
4. From the View menu, choose Users & Groups.
5. Select the "Allow user to administer this computer" checkbox.
6. Enter a current administrator's name and password when prompted.

Directory Utility (Active Directory)

1. You can add Active Directory (AD) groups to the local admin group using Directory Utility. (Only Active Directory groups may be added using this method.)
2. From the Apple menu, choose System Preferences.
3. From the View menu, choose Users & Groups.
4. Click Login Options.
5. Click the Edit button by "Network Account Server".
6. Click the Open Directory Utility button to open Directory Utility (/System/Library/CoreServices/Directory Utility).
7. Click the lock in the lower left corner to authenticate.
8. Under the Services tab, double-click Active Directory to edit it.
9. Click the disclosure triangle next to "Show Advanced Options" to reveal its contents.
10. Under the Administrative tab, click the "Allow administration by" checkbox to enable it.
11. Click the add button (+) to add new entries to the list.
12. Click OK to save your changes.

Command line (advanced)

If you're familiar with using Terminal and the command line, you can add network users or groups to the local admin group using the dseditgroup command in Terminal. The following example adds a network user to the admin group:

{% highlight bash %}
dseditgroup -o edit -n /Local/Default -u localadmin -p -a networkuser -t user admin
{% endhighlight %}

In this example, "localadmin" is the name of a local administrator account on the workstation (you're prompted for this account password) and "networkuser" is the short name of the network user.


### Conclusion
---
As you can tell there are many ways to accomplish administration, of your Mac via an active directory user account. Locally, via ARD / VNC and SSH. A few things to toss in, in the event that you run into some roadblocks with some of the terminal commands

To add a single Active Directory user to the local ard_admin group, do not use dscl to add or delete individual users. Use dseditgroup with the -a (to add) or -d (to delete) options.

{% highlight bash %}
sudo dseditgroup -o edit -a EUID -t user ard_admin
{% endhighlight %}

Remember the man pages for the Kickstart command are hidden. You can not just type "man kickstart" in terminal, this will not work. You can access this man page and others using the following commands:

{% highlight bash %}
man /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart
{% endhighlight %}
{% highlight bash %}
man dscl
{% endhighlight %}
{% highlight bash %}
man dseditgroup
{% endhighlight %}

Active Directory authentication doesn't always work so you want to be sure that you have a local admin account waiting in the wings in the event that something goes south with the AD bind to the Mac. 



 [1]: https://applemanagers.unt.edu/docs/sop/configure-ard-clients-ad-authentication
 [2]: https://support.apple.com/en-us/HT202112
