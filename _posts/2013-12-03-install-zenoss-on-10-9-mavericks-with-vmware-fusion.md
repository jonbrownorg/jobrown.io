---
title: Install Zenoss on 10.9 Mavericks with VMWare Fusion
author: Jon
excerpt: "If you are a network (or systems) administrator, you know how crucial it is to have the right tools for the job. One of the toughest tools to really nail down is a network monitoring tool. Although there are plenty of such tools out there, they range from the over-priced to the under-featured. Where do you look for any sort of middle ground where features don't lose out to price?"
layout: post
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
permalink: /blog/install-zenoss-on-10-9-mavericks-with-vmware-fusion/
categories:
  - bash-scripts
  - osx-system-administration
tags:
  - appliance
  - network
  - vmware
  - zenoss
---
If you are a network (or systems) administrator, you know how crucial it is to have the right tools for the job. One of the toughest tools to really nail down is a network monitoring tool. Although there are plenty of such tools out there, they range from the over-priced to the under-featured. Where do you look for any sort of middle ground where features don&#8217;t lose out to price?

Zenoss is an outstanding, enterprise-ready network monitoring tool that includes all of the features you are accustomed to finding in a much costlier solution. Many a network administrator would do well to deploy such a tool.

Zenoss Open Source Edition is for any network administrator who needs a one-stop-shop-tool for monitoring all devices on a network without having to empty their IT budget, nor waist a week&#8217;s worth of work to get it up and running. Zenoss is for any size network, from a small business to a large enterprise.

Zenoss solves the problem of being able to keep a close, constant watch on your network hardware to ensure it is running efficiently and well. And unlike Nagios, Zenoss doesn&#8217;t require the administrator to edit configuration files in order to set up monitors for devices. Zenoss brings a much simpler Web-based interface from start to finish.

**Installing Zenoss**

We will be installing the Zenoss Virtual Appliance and running that on VMWare Fusion 6 PRO on Mavericks 10.9 headless on a Mac Mini server in our network. This is a perfect solution for OSX Admins who need a Network tool in their environment.

**Installing the Appliance**

Follow these steps to download and install the Zenoss appliance.

  1. Download one of the Zenoss Virtual Appliance files (zenoss-Version-86.vmware.zip or zenoss-Version-x64.vmware.zip) from https://www.zenoss.com/download.
  2. Unzip the file into a working directory.
  3. Start VMWare Fusion 6 Pro.
  4. Use VMWare to navigate to the directory where you unzipped the Zenoss Virtual Appliance package, and then open the Zenoss Virtual Appliance.
  5. After loading the appliance, the virtual machine window displays a message similar to:


{% highlight bash %}

Welcome to Zenoss

To access the Zenoss Management Console, please browse to: https://xxx.xxx.xxx:8080 

{% endhighlight %}


**Note**: If this message does not appear, then you may need to change the VMware player network connection option from Bridged to NAT.

  6. Log in as user root. The default root password is ***zenoss***.
  7. Open a new Web browser, and then enter the URL that appears in the login screen.
  8. The Zenoss Setup Wizard appears.


**Whats Next?**

After installing Zenoss, go to the section titled &#8220;Quick Start&#8221; in the guide titled Getting Started with Zenoss. There you will find instructions for initial setup tasks and basic information to help you begin using Zenoss.

Download the guide (in Portable Document Format) from the Documentation area of the Zenoss Web site: <https://community.zenoss.org/community/documentation>

**Port Forwarding the website**

In order to see the webpage that is running in your VMWare Environment you need to edit your VMWare settings to allow access through the port on your system to the port on the VMWare appliance.

VMware Fusion supports NAT port-forwarding, which in short, lets the host machine to forward traffic directed to a set of configured ports in a guest VM. To set this up, I needed to do the following:

Edit the NAT configuration file to add the list of ports to be forwarded in this mode. To support HTTP proxy requests, I added port 8080 forwarding to the incomingtcp section of this file.

{% highlight bash %}
sudo pico "/Library/Application Support/VMware Fusion/vmnet8/nat.conf"
[incomingtcp]
8080 = 192.168.19.69:8080
...
{% endhighlight %}

Restart VMware Fusion networking.

{% highlight bash %}
sudo "/Library/Application Support/VMware Fusion/boot.sh" --restart
{% endhighlight %}

No restart of VMware Fusion application or the guest VM is necessary. This configuration change takes effect immediately, and from this point on the host machine acts as a stand in for the guest and will forward all HTTP proxy requests to the guest VM.

**Putting it all together**

Now that you have Zenoss running in a window in VMWare Fusion we want to be able to quit VMWare, logout and then somehow start Zenoss without having the system stay logged in, but how? The answer is a tool called vmrun, and it’s included (but hidden) with VMWare Fusion. In the VMWare Fusion application bundle you’ll find a Contents/Library folder with a number of scripts and tools, one of them being vmrun. On my Mac I created a symlink to the vmrun binary in /usr/local/bin so it’s available in my PATH.

{% highlight bash %}
ln /usr/local/bin/vmrun  "/Applications/VMware Fusion.app/Contents/Library/vmrun"
{% endhighlight %}

With that taken care of I can start up a headless VM instance with something like

{% highlight bash %}
vmrun -T fusion start "/path/to/zenosss.vmwarevm/zenosss.vmx" nogui
{% endhighlight %}

You will want to do this through SSH so that you can have your machine logged out. From your laptop SSH into the system and then run this command. You can exit your SSH session and Zenoss will still run. Enjoy!

