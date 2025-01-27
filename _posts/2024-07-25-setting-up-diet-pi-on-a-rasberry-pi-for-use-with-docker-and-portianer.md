---
layout: post
date: '2024-07-25'
author: Jon Brown
permalink: /blog/setting-up-diet-pi-on-a-rasberry-pi-for-use-with-docker-and-portianer/
published: true
title: "Setting up SNIPE-IT with DietPi on a Raspberry Pi"
description: "Setting up SNIPE-IT with DietPi on a Raspberry Pi"
blogimgpath: 20240102Up
tags:
  - snipe
  - iOS
categories:
  - snipe
  - video
  - tutorials
image: /assets/images/covers/2024/Header-Docker-Pi-1.png
thumbnail: /assets/images/covers/2024/Header-Docker-Pi-1.png
cta: 2
comments: true
series: snipe
---

{% include series.html id="snipe" %}

### How to setup Rasberry Pi

The first step in setting up SNIPE-IT is to setup the platform that it will run on. Luckily the best platform and most economical is a Rasberry Pi. We are using a Rasberry Pi 3 in this case. Before we get too far we need to pick the operating system that the Rasberry Pi will use. 

The drive or the card that we will use in the Rasberry Pi is a 64GB card, now we could use any size card we like, the smaller the card the leaner the OS needs to be so in this case I am going to pick a lean OS, DietPI is a great choice for this. If you chose a higher size card then maybe Rasberian or Ubuntu would be a good choice. The OS isn't a huge factor in following along with the steps. 

The concepts are still the same. At the core, we need to install the OS, install Docker, and then install Snipe-IT. 

#### Ok so let's continue on and set up DietPI on the SD Card. 

We are using a Mac and I have an SD Card Reader. Once the card is inserted, I used the software created by Rasberry Pi called the [Raspberry Pi Imager](https://www.raspberrypi.com/software/). This tool allows you to image the SD card and it gives you the option to pick any number of great operating systems to flash the card with. Unfortunately, DIetPI is not one of them. Therefore we must go to the DietPi website and download the image and use the tool to upload the image and flash the card manually. 

Ok so we have the Rasberry PI 3 so we need to go to the DietPi website and download the right image file. You can download it [here](https://dietpi.com/#downloadinfo). The website gives you the option to pick the Rasberry Pi model that you have and it gives you the right build that will work for your device. 

Once you have downloaded the right Image go back to the Raspberry Pi Imager and under operating systems click use custom. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/imager.png" class="img-fluid rounded m-2" width="800" />

Once done you can upload the .img file you downloaded from the previous step. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/misc-utility-images.png" class="img-fluid rounded m-2" width="800" />

Then you will select the SD card and it will image the card with the DietPi image. It will happen very fast because DietPi is very small and compact thus the name. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/newInstaller_writeSuccessful.png" class="img-fluid rounded m-2" width="800" />

Now that DietPi is flashed you need to eject the SD Card and insert it into your Rasberry Pi. 

#### Setting up WiFi & Initial Configuration

Note that your Pi is not going to have WiFi enabled so if you have a USB Wireless adapter like I do, you will need to first plug it into a network ethernet jack for it to connect to the network OR you will need to connect it to a monitor, keyboard and mouse so that you can interact with it. What did I do at this stage? I connected it to a keyboard, mouse and monitor. 

When  you first boot up the DietPi image on the SD card you will see the boot sequence and a launch screen with the default username and password shown. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/0_firststep.png" class="img-fluid rounded m-2" width="800" />

Use this default password to login to the Raspberry Pi. After you login it runs through a lot of updates and setup steps steps like setting up the language and keyboard localization. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/keyboard.png" class="img-fluid rounded m-2" width="800" />

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/keyboard2.png" class="img-fluid rounded m-2" width="800" />

You will then be prompted to change the global password which we highly recommend doing for security. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/global.png" class="img-fluid rounded m-2" width="800" />

Also for added security it will prompt you to change the default root password again we highly recommend doing this. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/root.png" class="img-fluid rounded m-2" width="800" />

Now your taken to the software update prompt, at this stage your being prompted to confirm and continue with the updates that are needed for DietPi. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/software.png" class="img-fluid rounded m-2" width="800" />

You must confirm the updates if you don't you will get this error message

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/error.png" class="img-fluid rounded m-2" width="800" />

You confirm the updates by down arrowing to the bottom of the list and selecting "Install" and then selecting ok. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/install.png" class="img-fluid rounded m-2" width="800" />

Since we just downloaded this image there are very minimal updates so we get the message that there are not many updates and were asked if we want to stay with the minimal Image which we do. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/unable.png" class="img-fluid rounded m-2" width="800" />

Once the updates are done the Pi should return you to a plain command prompt. Now that your at the command prompt you need to run the following command to get to the configuration screen

{% highlight bash %}
sudo dietpi-config
{% endhighlight %}

At this point I used the arrow keys to scroll through the various options. I selected “Network Options: Adapters” and hit the enter key and at this point, I was presented with a screen listing all the various network adapter options. These include:

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/1_adapters.png" class="img-fluid rounded m-2" width="800" />

- Ethernet
- WIFI
- On-board WIFI

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/threelist.png" class="img-fluid rounded m-2" width="800" />

Of course I selected WIFI because I wanted to put the Rasberry Pi in a place where I did not have an ethernet port available on my modem. Now on the screen, you will see that WiFi is currently set to “OFF” and “disconnected".

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/no_wifi.png" class="img-fluid rounded m-2" width="800" />

Now when you hit enter you should see the prompt, “Would you like to enable WIFI now?” When you hit the arrow keys to select “OK” I hit enter to enable WiFi.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/ask_wifi.png" class="img-fluid rounded m-2" width="800" />

You will see various configurations happening on your Terminal. If you don’t get any error message, WIFI was successfully enabled on your system.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/various.png" class="img-fluid rounded m-2" width="800" />

You will now see that WiFi is set to On. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/wifi_on.png" class="img-fluid rounded m-2" width="800" />

You will see a screen similar to the image below where you must choose the “Scan and Configure SSID” menu and hit Enter.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/2_configuressid.png" class="img-fluid rounded m-2" width="800" />

Next, you will see various slots you can use to configure a WIFI network. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/3_selectline.png" class="img-fluid rounded m-2" width="800" />

On the next screen, you will see two options that you can use to connect to WiFi.

- Scan: Scan and Configure SSID
- Manual: Manually enter the SSID and other network details.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/4_scan.png" class="img-fluid rounded m-2" width="800" />

I chose the “Scan” option as it automatically scans the networks around you and displays the networks in a nice list that you can easily pick from.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/5_listssid.png" class="img-fluid rounded m-2" width="800" />

On the next screen, you will be required to select the encryption method used on the target WIFI network. They are;

- WPA-PSK: Default (recommended)
- WEP: Legacy (insecure)
- NONE: Open host that does not require a key (e.g., public WiFi)

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/6_security.png" class="img-fluid rounded m-2" width="800" />

Click “OK” when done. Enter the password for the wireless network. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/7_enterpassword.png" class="img-fluid rounded m-2" width="800" />

When your done press Apply.

If your connected successfully, you will see a detailed screen with the following information.

- SSID
- IP Address
- Gateway address

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/8_confirmation.png" class="img-fluid rounded m-2" width="800" />

Once your done you must press apply, you will get a warning that this will restart the Raspberry Pi. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/9_apply.png" class="img-fluid rounded m-2" width="800" />

Warning: All WiFi connections will be dropped!

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/10_okdropped.png" class="img-fluid rounded m-2" width="800" />

Once the system reboots re-enter into the configuration and you will see that WiFi is now connected, however at this point we're getting a DHCP non static IP which isn't great.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/11_onfinal.png" class="img-fluid rounded m-2" width="800" />


#### Static IP Address
Now we need to setup the Rasberry Pi with a static IP address because its going to be used as a server. Because of that we need to follow these steps. 

We are still in the terminal so you run the command 

{% highlight bash %}
sudo nano /etc/network/interfaces
{% endhighlight %}

And press Enter. This puts you in the text edit mode for the interfaces file. 

Scroll down and edit the wlan0 section using the down arrow button on the keyboard.

{% highlight bash %}
auto wlan0
iface wlan0 inet static
address 192.168.1.59 #REPLACE THIS ADDRESS
{% endhighlight %}

Replace the IP address 192.168.1.59 with the desired static IP address

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/static.png" class="img-fluid rounded m-2" width="800" />

Press Ctrl+X, Y, and Enter to save the changes and exit nano.

Finally run this command to restart the network and apply the settings. 

{% highlight bash %}
sudo service networking restart
{% endhighlight %}

#### Update Strategies

Ok so we now have DietPi setup on Rasberry Pi with WiFi configured with a Static IP address. Thats the end of Step 1 now that we have this baseline we need to update DietPi we can do that by running some updates. Now before we go into that lets talk a little bit about DietPi updates. A good strategy here for DietPi updates could be summed up as follows. 

monthly:

{% highlight bash %}
apt update && apt upgrade -y
{% endhighlight %}

quarterly:

{% highlight bash %}
dietpi-update
{% endhighlight %}

dietpi-update is for updating the components of diet-pi customizations, scripts, and a few system level and apt are for the operating system updates and upgrades (kernels, packages, security patches, etc..). 

For now I am going to run 

{% highlight bash %}
apt update && apt upgrade -y 
{% endhighlight %}

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240102Up/update.png" class="img-fluid rounded m-2" width="800" />

and let that run here. As you can see I already installed Docker, Docker CLI and Docker Compose but we will cover how I installed them and the pitfalls on a few of the methods of how they were installed in the next post.

In the next document series were going to install Docker and Portainer the GUI interface for interfacing with Docker. We will also run through how to secure Portainer leveraging free SSL certificates using Lets Encrypt. 

{% include videos/video.html id="PXFPRCwt9Cc" header="/images/covers/2024/Header-DietPi.jpg" %}