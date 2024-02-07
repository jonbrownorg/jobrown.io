---
title: PXE Boot Clonezilla Live with Synology
author: Jon
excerpt: I was excited to see that Synology have recently integrated a PXE solution in their latest version of Diskstation Manager – DSM 4.2 beta. This makes their NAS devices even more ideal in a home virtualisation lab as they are both cheap to buy and to run (the DS212 unit that I own consumes less than 20W in use), but also easy to configure and they offer a wide range of storage and network services such as CIFS / AFP / NFS / iSCSI, LDAP, PXE, TFTP, VPN, DNS.
layout: post
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
permalink: /blog/pxe-boot-clonezilla-live-with-synology/
categories:
  - microsoft-imaging
tags:
  - clonezilla
  - dhcp
  - dns
  - pxe
  - Windows
---
I was excited to see that Synology have recently integrated a PXE solution in their latest version of Diskstation Manager – DSM 4.2 beta. This makes their NAS devices even more ideal in a home virtualisation lab as they are both cheap to buy and to run (the DS212 unit that I own consumes less than 20W in use), but also easy to configure and they offer a wide range of storage and network services such as CIFS / AFP / NFS / iSCSI, LDAP, PXE, TFTP, VPN, DNS.

They also offer more powerful Enterprise versions of their NAS devices, which run the same operating system but with much faster hardware. I’ve yet to test them in a production environment, but given my experience in the lab, I am sure they would be a competitive solution.

In this post I will show you how to set up a PXE boot server that will let you perform a network installation of Centos 6.3 using your Synology NAS.

**What is PXE?**

PXE (pronounced pixie) stands for Preboot eXecution Environment. It’s a technology that can be used to boot a computer into an operating system from it’s network card without needing anything to be installed on the computer’s local storage devices in advance. Most modern servers come with PXE support as standard.

It’s incredibly useful if you wish to automate the deployment of many servers without having to attend each one with an installation CD / DVD / USB stick. With a little work, you can also configure custom kickstart files to be served to each server, to save having to enter all the installation options manually.

How to set up your Synology NAS as a PXE boot server

**Step 1 – Install DSM 4.2**

Upgrade your Synology device to DSM 4.2 beta if you haven’t already. Follow the [download links][1] for your region, download the appropriate firmware that for your model of device, then upload it in the DSM admin panel – control panel – DSM update screen.

**Step 2 – Set up the DHCP Service on your NAS**

I would recommend you set up the DHCP server on your Synology first and test it works. If you are running this on your main LAN, you will need to disable the DHCP server on your router so they don’t conflict. You can download the DHCP server package in Package Center.

You will need to configure the relevant primary and secondary DNS, start and end IP addresses, netmask and gateway settings. 

Once you are happy this is working, you can move on to configure the TFTP and PXE servers.

**Step 3 – Set up the TFTP and PXE Services.**

Tick the Enable TFTP service box. You also need to specify a folder somewhere on your NAS that can be used as the TFTP root folder.

Tick the Enable PXE service box. In the boot loader box type pxelinux.0. Fill out the remaining fields using the same settings you used for DHCP in step 2. This will override the DHCP service settings.

This will set up a DHCP service which sets DHCP 67 (boot filename) in it’s DHCP offers to be PXELINUX.0. If the server making the DHCP request is performing a PXE boot, it will attempt to retrieve and load this file via TFTP from the DHCP server IP address. It is possible to tell the server to use a different server for TFTP using DHCP option 66 – but this is not necessary in our case because the Synology NAS is performing both functions.

**Step 4 – Upload the PXELINUX scripts and PXE menu to your tftp folder.**

In order to get PXE boot working, we now need to upload the PXELINUX.0 and a few associated files from the SYSLINUX project to the TFTP share. I’m sure you could use other boot loaders, but I have never tried any, so I’m going to stick to what I know!

According to the Centos wiki, the minimum required files to perform a PXE network boot using Clonezilla Live are:

pxelinux.0  
menu.c32  
memdisk  
mboot.c32  
chain.c32  
pxelinux.cfg/default  
path/to/your\_kernel\_of_choice  
path/to/your\_init\_ramdisk\_of\_choice  
vmlinuz  
initrd.img  
filesystem.squashfs

[Download Clonezilla live zip][2] file (You have to use Clonezilla live 1.2.0-25 or later), and unzip the required files (vmlinuz, initrd.img, and filesystem.squashfs in dir live) to /tftpboot/nbi\_img/. You can make it by something like: &#8220;unzip -j clonezilla-live-\*.zip live/vmlinuz live/initrd.img live/filesystem.squashfs -d /tftpboot/nbi\_img/&#8221; (Replace clonezilla-live-\*.zip with the file name you just downloaded).

To make things easier I have forked a GitHub repo that was created to get PXE Boot of a CentOS Install started but modified it for Clonezilla Live.

<a class="btn d-block w-100 btn-default btn-lg" href="https://github.com/jonbrown21/TFTP-PXE-Boot-Server"><i class="icon-github"></i> TFTP PXE Boot Server Repo </a> 

Edit your PXElinux config file /tftpboot/nbi_img/pxelinux.cfg/default, and append the following

{% highlight bash %}
label Clonezilla-live
MENU LABEL Clonezilla Live (Ramdisk)
KERNEL vmlinuz
APPEND initrd=initrd.img boot=live config noswap nolocales edd=on nomodeset ocs_live_run="ocs-live-general" ocs_live_extra_param="" keyboard-layouts="" ocs_live_batch="no" locales="" vga=788 nosplash noprompt fetch=tftp://$serverIP/filesystem.squashfs
{% endhighlight %}

**Note**

  1. Replace $serverIP with your IP address of tftp (DRBL) server.
  2. Remember to check kernel, initrd file names and boot parameters in syslinux/syslinux.cfg from the zip file, copy them to here. It might be different from here, say vmlinuz path maybe different.
  3. Here we do not put &#8220;ip=frommedia&#8221; in the boot parameters because the /etc/resolv.conf get in live-initramfs won&#8217;t exist in the system after initramfs is done.
  4. &#8220;fetch&#8221; also supports http or ftp, if you want to use http or ftp instead of tftp, you have to put the file filesystem.squashfs in your http or ftp server and the corresponding path.
  5. If you want to do unattended clone, you can assign clonezilla live parameters (ocs\_live\_run, ocs\_live\_extra\_param, ocs\_live\_keymap, ocs\_live\_batch and ocs\_lang) in kernel parameters. For example, you can use:


{% highlight bash %}
append initrd=initrd.img boot=live union=aufs noswap noprompt vga=788 keyboard-layouts=NONE locales=en_US.UTF-8 fetch=tftp://$serverIP/filesystem.squashfs
{% endhighlight %}

**Step 5 – Attempt to PXE boot a server.**

All you need now is a server. Ensure the server is connected to the LAN with your Synology NAS on it, then power on the server and instruct it to perform a network boot. It should make a DHCP request to the NAS, and then perform a PXE boot using the files that we copied to the TFTP server.

If you want to load a different operating system, you need to copy across the relevant kernels / initial ramdisks for the distribution of your choice and then edit the PXE menu in pxelinux.cfg/default. You may also wish to either remove the kickstart parameter, or refer to a different kickstart of your own creation.



 [1]: https://www.synology.com/support/beta_dsm4.2.php?lang=us
 [2]: https://clonezilla.org/downloads.php