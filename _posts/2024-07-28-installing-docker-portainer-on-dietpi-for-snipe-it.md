---
layout: post
date: '2024-07-28'
author: Jon Brown
permalink: /blog/installing-docker-portainer-on-dietpi-for-snipe-it/
published: true
title: "Installing Docker & Portainer on DietPi for Snipe-IT"
description: "Installing Docker & Portainer on DietPi for Snipe-IT"
blogimgpath: 20240729Up
tags:
  - MacOS
  - iOS
categories:
  - tips
  - video
image: /assets/images/covers/2024/Header-Docker-Pi-2.png
thumbnail: /assets/images/covers/2024/Header-Docker-Pi-2.png
cta: 2
comments: true
---
#### Installing Docker, Portainer and SSL

At this stage were assuming your still connected to the Raspberry Pi via a monitor. If you're already SSH'd into the machine great your one step ahead. 

Now that we have the Rasberry Pi setup we need to set up Docker. Why? Because eventually, we will use the Docker version of SNIPE-IT. There are lots of reasons to use the Docker version but the reason that I decided to use it is because it's self-contained and leaves a lot of the effort of setting up the environment off the table. 

Ok so setting up Docker in DietPi is pretty straightforward forward you can do this right from the DietPi software library. To install Docker run this command. You will need to install Docker, Docker Compose and Portainer right from the Docker Library. 

Run this command

{% highlight bash %}
dietpi-software
{% endhighlight %}

this will bring up the DietPi Software Library. Toggle down to the Search for Software section and this will allow you to search for Docker. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step1.png" class="img-fluid rounded m-2" width="800" />

When you type in Docker you will be presented with Docker, Docker Compose and Portainer. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step2.png" class="img-fluid rounded m-2" width="800" />

Press the spacebar on each item to select the items and then press enter to initiate the installation. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step3.png" class="img-fluid rounded m-2" width="800" />

Once they are all selected you will be asked to install the applications you selected.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step4.png" class="img-fluid rounded m-2" width="800" />

DietPi will then confirm that you want to proceed with the installation you will say, "Ok".

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step5.png" class="img-fluid rounded m-2" width="800" />

You will now see DietPi installing Docker, Portainer and Docker Compose

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step6.png" class="img-fluid rounded m-2" width="800" />

The core files will be installed. Now that we have all three components installed we need to SSH into the Rasberry Pi. Now the Pi has SSH enabled by default so you should be able to run 

{% highlight bash %}
ssh root@<IP ADDRESS>
{% endhighlight %}

the default password to dietpi if you haven't changed the password is "dietpi". Ok now that you have SSH'd into the Pi, make a directory, for my Pi I created a directory called compose by running

Now the software we recently installed Docker Compose is not the correct versin of Docker Compose we need to run this command. 

{% highlight bash %}
apt-get install docker-compose
{% endhighlight %}

this will install the correct version of Docker Compose. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step7.png" class="img-fluid rounded m-2" width="800" />

Now that we have the correct version installed we can make a directory in the home directory which at this point we should already be located in the command line.  Type the following command. 

{% highlight bash %}
mkdir compose
{% endhighlight %}

then I went into the directory by running

{% highlight bash %}
cd compose
{% endhighlight %}

and then I ran

{% highlight bash %}
nano docker-compose.yaml
{% endhighlight %}

and I entered in the following 

{% highlight bash %}
version: "3.8"
services:
  portainer:
    container_name: portainer
    image: portainer/portainer-ce
    environment:
      - TZ=America/New_York
    networks:
      - internal
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /data:/data
    ports:
      - "9443:9443"
    restart: unless-stopped
networks:
  internal:
    name: internal
    driver: bridge
{% endhighlight %}

This YAML file is the formula to run portainer. Save the file and then run 

{% highlight bash %}
cd /
{% endhighlight %}

and then 

{% highlight bash %}
mkdir data
{% endhighlight %}

and then 

{% highlight bash %}
cd ~/compose
{% endhighlight %}

finally run

{% highlight bash %}
docker compose up -d
{% endhighlight %}

If you get an error saying that

"The container name "/portainer" is already in use by the container "......."

run

{% highlight bash %}
docker rm -f portainer
{% endhighlight %}

and try 

{% highlight bash %}
docker compose up -d
{% endhighlight %}

this will run portainer on the local IP address of the Rasberry PI on port 9443 in my case that was 

https://192.168.1.1:9443

Lets break down the YAML file shall we. The first part the file is the version. 

{% highlight bash %}
version: "3.8" <-----
{% endhighlight %}

The second part of the file shows the servies we are going to install in Docker. 

{% highlight bash %}
version: "3.8"
services: <------------
  portainer: <--------------
{% endhighlight %}

Most notably its Portainer the application that we want to run. This is a recipie file that will pull down the Portainer image from Docker's repository of images and we are telling Docker to use this image to deploy this containerized application in Docker. The next section are the variables for Portainer

{% highlight bash %}
version: "3.8"
services:
  portainer:
    container_name: portainer <-----------
    image: portainer/portainer-ce <-----------
    environment: <-------------
      - TZ=America/New_York
    networks: <------------
      - internal
    volumes: <-------------
      - /var/run/docker.sock:/var/run/docker.sock
      - /data:/data
    ports:<-------------
      - "9443:9443"
    restart: unless-stopped <-------------
{% endhighlight %}

Note here we are telling Portainer to set the environment variable for the Time Zone to the East Coast. To use the "Internal Network" which we will talk about in a moment. 

We are then asking it to create several volumes to then open port 9443 for both HTTP and HTTPS traffic. We are also telling Portainer to restart only in the event that the system is restarted. 

Now remember above when we ran 

{% highlight bash %}
mkdir data
{% endhighlight %}

this was because we are making a volume called Data and mapping it to the Data folder at the root of the Raspberry Pi. 

{% highlight bash %}
    volumes: <-------------
      - /var/run/docker.sock:/var/run/docker.sock
      - /data:/data <-------------
{% endhighlight %}

Finally, we set the networks. As you can see the name of the network is "Internal", as we referenced in the Portainer configuration above. We are using the bridge'd network driver which states that we are sharing the network connection of the Raspberry Pi in this instance. 

{% highlight bash %}
networks: <--------
  internal:
    name: internal
    driver: bridge
{% endhighlight %}


#### Setting up Portainer

Ok so now lets login to your portioner instance by going to your Rasberry Pi IP with HTTPS and yes you will get a connection is insecure. Bypass this and continue. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step16.png" class="img-fluid rounded m-2" width="800" />

https://192.168.1.1:9443/

You will need to pick a password for Portainer here. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step8.png" class="img-fluid rounded m-2" width="800" />

Ok now that you have gone to the site, you will need to setup a username and password. Once done confirm the password, then press Create user.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step9.png" class="img-fluid rounded m-2" width="800" />

Next press Get Started in Portainer, on the right in the Environments, click on the little pencil icon. After you click on the little pencil a new page will open. On the Public IP area type n your the Rasberry Pi IP address. In the next step you will enter the domain name that you want to use for the Portainer instance. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step10.png" class="img-fluid rounded m-2" width="800" />

Now for me I needed to secure my Portainer instance it was critical so for that I had to use a domain. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step11.png" class="img-fluid rounded m-2" width="800" />

#### Thoughts on Networking

There are lots of strategies for securing Portainer. You can use a reverse proxy, you can use DDNS or you can open a port on your firewall and port forward a static IP address to an internal LAN IP. For us we had a good firewall, an intrusion detection system and a static IP address so we chose the later strategy. 

We also restricted access in our router to specific workstations for an extra layer of security. I will not be documenting those settings here but there are lots of tutorials on how to port-forward WAN to LAN IP addresses in your modem or router. In the next article in the series I will go into several other strategies for setting up a reverse proxy vs, cloud DDNS, vs port forwarding and talking about the pros and cons of each method. 

Ok so now that I had a port opened on my router and I had a static WAN IP forwarded to my Rasberry PI's LAN IP I needed to get a domain name. In this example I will use container.jonbrown.org as an example domain to use. 

Since I will use the secured version in Portainer we will enter container.jonbrown.org into the public IP field. Do not enter https:// just the domain goes here. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step12.png" class="img-fluid rounded m-2" width="800" />

Finally, you must have a domain and a valid DNS entry for that WAN IP address that we mentioned earlier. 

#### Securing Portainer

Ok now you update the environment and it will start using that as the domain. Wait we don't have a certificate yet. To setup a certificate we need to install certbot on DietPi. You can do that by running 

{% highlight bash %}
sudo apt-get install letsencrypt
{% endhighlight %}

the command to setup the wildcard certificate we need below allows us to run this using a DNS challenge. --email is the email of your choice, typically your domain administrators email. --preferred-challenges=dns notes that we are asking letsencrypt to ask us to verify the domain via DNS vs by http file methodologies. 

{% highlight bash %}
sudo certbot certonly --manual --preferred-challenges=dns --email jon@jonbrown.org --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d *.jonbrown.org
{% endhighlight %}

Once you run this command it will give you the DNS information you need to prove you own the domain. Enter the 2 entries into your DNS and you will get a valid SSL certificate in the /etc/letsencrypt/live/ directory

{% highlight bash %}
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:

_acme-challenge.jonbrown.org.

with the following value:

XXXXXXXX

Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.jonbrown.org.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
{% endhighlight %}

Once you have added the DNS records you will get a message like this. 

{% highlight bash %}
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/jonbrown.org/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/jonbrown.org/privkey.pem
This certificate expires on 2024-10-26.
These files will be updated when the certificate renews.

NEXT STEPS:
- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.
{% endhighlight %}

In Portainer go to Settings and scroll down to SSL. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step13.png" class="img-fluid rounded m-2" width="800" />

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step14.png" class="img-fluid rounded m-2" width="800" />

We need to get the SSL certificate from the Pi into Portainer. The easiest way to do that is on the PI run 

{% highlight bash %}
cat /etc/letsencrypt/live/<yourdomain>/fullchain.pem
{% endhighlight %}

and copy the entire contents into a text file on your computer ans save it as certificate.crt

then run 

{% highlight bash %}
cat /etc/letsencrypt/live/<yourdomain>/privkey.pem
{% endhighlight %}

and save it as key.key

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step15.png" class="img-fluid rounded m-2" width="800" />

now you will upload these files in Portainer. Once done save and click Save SSL Settings. At this point if you have a port opened, and WAN and LAN ip forwarded and a valid DNS entry you should have Portainer running securely on your open docker port. 

You should now be able to go to Portainer on your fully qualified DNS and with the correct certificate and key uploaded you should see that you are now on a fully secure and encrypted network connection. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step17.png" class="img-fluid rounded m-2" width="800" />

Log back into Portainer and go back to settings, and force HTTPS only to ensure that it only ever loads over HTTPS. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step18.png" class="img-fluid rounded m-2" width="800" />

#### Hardening Portainer & DietPi

##### <u>Azure AD Integration (Recommended)</u>

In the settings under Authentication you will notice that there are several methods. Internal, LDAP, Active Directory and OAuth. Within these sections many of these have settings that are business only features entirely which means that if you have the means to purchase a business portainer license I highly recommend that you do so. 

The [Portainer Pricing Page](https://www.portainer.io/pricing) shows that their pricing is relatively inexpensive. Home & Student Users for example can use Portainer for $149/yr which allows Portainer the ability to release awesome new features and functionality. 

The following section was heavily inspired by the post by Molotus over at Codestrian which you can read in depth [here](https://codestrian.com/index.php/2023/03/02/setup-portainer-single-sign-on-with-azure-ad-via-custom-oauth-setting/). Essentially even though many of the features are behind a paywall there are some key features that are not so if you are like me and you have an Azure enviornment I highly recommend that you follow the steps here to harden your system even further allowing the ability to further restrict and limit who can access your Portainer environment via Azure SSO. 

##### <u>If your going to use Internal... (Recommended)</u>

Then we recommend setting the password length to the maximum of 18th character length and se recommend setting the session lifetime to expire after 1 hour. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step19.png" class="img-fluid rounded m-2" width="800" />

##### <u>DietPi Fail2Ban... (Recommended)</u>

If you haven't installed Fail2Ban on your DietPi you can do so by running

{% highlight bash %}
dietpi-software
{% endhighlight %}

and searching for fail2ban in the search software list. Select that core software app and install it. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240729Up/step20.png" class="img-fluid rounded m-2" width="800" />

An IP address is by default ban triggered after 3 failed SSH login attempts. Fail2Ban will ban the source IP address for 10 minutes.

{% highlight bash %}
Status for the jail: sshd
|- Filter
|  |- Currently failed:	0
|  |- Total failed:	0
|  `- Journal matches:	_SYSTEMD_UNIT=sshd.service + _COMM=sshd
`- Actions
   |- Currently banned:	0
   |- Total banned:	0
   `- Banned IP list:
{% endhighlight %}

##### <u>DietPi SSH Hardening... (Recommended)</u>

{% highlight bash %}
#!/bin/bash

settings="
PubkeyAuthentication yes
PasswordAuthentication no
UsePAM no
PermitRootLogin no
X11Forwarding no
Port XXXX
"

echo “$settings” | sudo tee -a /etc/ssh/sshd_config.d/dietpi.conf > /dev/null
{% endhighlight %}

The following script will

- Disable Password authentication (You must use Public / Private Key Pairs for SSH)
- Enforces Public/Private Key SSH

If your looking for a good tutorial on how to use Public / Private Keys check out this [post](https://www.webhi.com/how-to/how-to-use-a-private-key-for-ssh-authentication/). 


- Disables ROOT user over SSH (Dangerous if you do not have another user account)

For a tutorial on how to create a new user for SSH check out this video: 

{% include videos/video.html id="86EYEuJWfeE" %}

- Changes the port for SSH to any other port you desire. 

If your having problems using OpenSSH after changing the port check out this [post](https://dietpi.com/forum/t/solved-unable-to-change-ssh-port/2698) as you may have to purge DropBear SSH. 

after you change the port of SSH you will need to restart the SSH server, by running: 

{% highlight bash %}
sudo service ssh restart
{% endhighlight %}

In the next article we will talk about networking strategies for Portainer. DDNS, VPN with Wireguard and Port Forwarding with pros and cons for each. Stay tuned. 

{% include videos/video.html id="tPbjDvC7OmQ" header="/images/covers/2024/Header-DietPi-2.jpg" %}