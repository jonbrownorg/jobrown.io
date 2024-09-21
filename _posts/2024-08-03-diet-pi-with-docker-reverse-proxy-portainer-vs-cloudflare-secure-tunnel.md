---
layout: post
date: '2024-08-03'
author: Jon Brown
permalink: /blog/diet-pi-with-docker-reverse-proxy-portainer-vs-cloudflare-secure-tunnel/
published: true
title: "Securing Raspberry Pi with Reverse Proxy and or Cloudflare Proxy Tunnel"
description: "Securing Raspberry Pi with Reverse Proxy and or Cloudflare Proxy Tunnel"
blogimgpath: 20240803Up
tags:
  - MacOS
  - iOS
categories:
  - tips
  - video
image: /assets/images/covers/2024/Header-Docker-Pi-3.png
thumbnail: /assets/images/covers/2024/Header-Docker-Pi-3.png
cta: 2
comments: true
---

### Series
- Part 1: [Setting up SNIPE-IT with DietPi on a Raspberry Pi]({{ site.site_cdn }}/blog/setting-up-diet-pi-on-a-rasberry-pi-for-use-with-docker-and-portianer/)
- Part 2: [Installing Docker & Portainer on DietPi for Snipe-IT]({{ site.site_cdn }}/blog/installing-docker-portainer-on-dietpi-for-snipe-it/)
- Part 3: [Securing Raspberry Pi with Reverse Proxy and or Cloudflare Proxy Tunnel]({{ site.site_cdn }}/blog/diet-pi-with-docker-reverse-proxy-portainer-vs-cloudflare-secure-tunnel/)
- Part 4: [Setting up Snipe-IT on Portainer with DietPi]({{ site.site_cdn }}/blog/setting-up-snipe-it-on-portainer-with-diet-pi/)

### Option #1: Reverse Proxy with NGINX-PROXY

Ok so I've done a lot of research on reverse proxys and they are great at protecting your internal assets but there are some inherent security flaws that you have to live with if you want perfect security. Lets face it there is no such thing, but we can get pretty close. 

Some of the flaws of a reverse proxy are that you still need to open ports up on your firewall to get them to work, in most cases. Sure you can run a VPN to secure the ports but even then in many cases the VPN needs to have their own ports exposed on your firewall. We will cover a method below that eliminates this risk. 

So then how do you implement a reverse proxy on Docker? Luckily there are many Docker images that offer dynamic proxys that automatically bind to new containers and sit between you and their services so long as you configure each container properly. One such proxy is called [NGINX-PROXY](https://github.com/nginx-proxy/nginx-proxy) and its really awesome let me show you how it works. 

First step is deploying the reverse proxy service. You can do that in Docker like so. 

{% highlight bash %}
version: "3.8"
services:
  nginx-proxy:
    container_name: nginx-proxy
    image: nginxproxy/nginx-proxy:latest
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
      - "/data/certs:/etc/nginx/certs"
       - "/data/vhost:/etc/nginx/vhost.d"
    networks:
      - internal

networks:
  internal:
    name: internal
    driver: bridge
{% endhighlight %}  

A huge call out here that had me struggling for hours. You must make sure that you put the NGINX-PROXY on the same network as your other services so in this case make sure you have like I do the same network referenced in the network section in the NGINX-PROXY section as well otherwise you will not be running the proxy on the same network. 

You can inspect exactly what is running on your networks by running this command and you can see all the containers running on the network. 

{% highlight bash %}
docker network inspect <network name>
{% endhighlight %}  

Ok so next step here we must create some drives and map them for the NGINX-PROXY container. You will see that in the above configuration we are mapping 2 volumes. 

{% highlight bash %}
version: "3.8"
services:
  nginx-proxy:
    container_name: nginx-proxy
    image: nginxproxy/nginx-proxy:latest
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
      - "/data/certs:/etc/nginx/certs" <-------------
       - "/data/vhost:/etc/nginx/vhost.d" <-------------
    networks:
      - internal

networks:
  internal:
    name: internal
    driver: bridge
{% endhighlight %}  

So we must now create 2 folders and we must put items in these folders based on the information we created in the last post. Remember in the last post we picked a domain for our Portainer instance, I chose container.jonbrown.org and so that will be the domain we will be using in this instance. 

Ok so first step we must create the certs and vhost folders

{% highlight bash %}
cd /

cd /data

mkdir certs
mkdir vhost
{% endhighlight %} 

Ok now that we have these folders we must populate these folders with some default certificates. The NGINX-PROXY server needs 2 sets of certificates to work properly. Remember in the previous blog post we created a wildcard certificate which means we must add the certificate in the certs directory in the following format

domain.tld.crt and domain.tld.key and we also need a duplicate copy of those certificates called default.crt and default.key

Make sure to copy the files from the /etc/letsencrypt/live/<yourdomain>/ to this directory like so

{% highlight bash %}
cp /etc/letsencrypt/live/<yourdomain>/fullchain.pem /data/certs/domain.tld.crt
cp /etc/letsencrypt/live/<yourdomain>/fullchain.pem /data/certs/default.crt

cp /etc/letsencrypt/live/<yourdomain>/privkey.pem /data/certs/domain.tld.key
cp /etc/letsencrypt/live/<yourdomain>/privkey.pem /data/certs/default.key
{% endhighlight %} 

Now that we have the certificates in the directory we can move on to the vhost folder. We must add a file in the vhost folder to disable SSL verifiation. This is because sometimes the proxy can fail to load websites if the certificate chain is off and it happens from time to time, even when the certificate is valid. 

{% highlight bash %}
cd /

cd /data/vhost

sudo nano domain.tld_location
{% endhighlight %} 

Once in NANO mode (Edit mode), you will be able to add the following

{% highlight bash %}
proxy_ssl_verify off;
{% endhighlight %} 

and save the document in the volume. Thats it. All of the volumes now have the information needed and we are ready to add the final information to the portainer container. 

{% highlight bash %}
version: "3.8"
services:
  nginx-proxy:
    container_name: nginx-proxy
    image: nginxproxy/nginx-proxy:latest
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
      - "/data/certs:/etc/nginx/certs"
    networks:
      - internal

  portainer:
    container_name: portainer
    image: portainer/portainer-ce:latest
    command: 
      -H unix:///var/run/docker.sock
      --ssl
      --sslcert /data/certs/jonbrown.org.crt
      --sslkey /data/certs/jonbrown.org.key
    environment:
      - TZ=America/New_York
      - VIRTUAL_HOST=container.jonbrown.org
      - VIRTUAL_PORT=9443
      - VIRTUAL_PROTO=https
      - CERT_NAME=jonbrown.org
    networks:
      - internal
    expose:
      - "9443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /data:/data
    depends_on:
      - nginx-proxy
    restart: always

networks:
  internal:
    name: internal
    driver: bridge
{% endhighlight %} 

Notice that we are adding a lot of additional items to the portioner configuration. We are forcing https and providing Portainer the certificate in the data folder. 

The environment area also is configuring the NGINX-PROXY with the following

{% highlight bash %}
    environment:
      - TZ=America/New_York
      - VIRTUAL_HOST=container.jonbrown.org
      - VIRTUAL_PORT=9443
      - VIRTUAL_PROTO=https
      - CERT_NAME=jonbrown.org
{% endhighlight %} 

We are telling the NGINX-PROXY that we are using port 9443 which is the HTTPS port that Portainer uses. We are telling NGINX-PROXY that we are using the vhost container.jonbrown.org and that we are using HTTPS behind the proxy. Finally we are telling NGINX-PROXY exactly which certificate to use. 

Lastly we are telling the NGINX-PROXY that Portainer depends on NGINX-PROXY

{% highlight bash %}
    depends_on:
      - nginx-proxy
{% endhighlight %} 

lastly we are exposing 9443 internally, we are not opening any ports, notice that the ports are missing we are just exposing 9443 which matches the proxy port, yes they must match. 

{% highlight bash %}
    expose:
      - "9443"
{% endhighlight %} 

Now if you save the file and run 

{% highlight bash %}
docker compose down && docker compose up -d
{% endhighlight %} 

this will take down any running docker containers and restart docker with NGINX-PROXY. Great it works. NO!! Wait what?? Well here's the rub, remember what I said with a reverse proxy yes the proxy itself is protecting and routing traffic to the internal container so that Portainer itself is not exposed. 

However, we must still open ports 80, and 443 to the proxy itself that means we need to open those ports on our firewall and we have to hope and pray that our WAN (Public IP) address doesn't change. (Yes, it changes when you reboot your router, hope you don't have power outages). And, no I do not have as static IP and few do so what do you do?

There are two things you can do. You can create a DNS entry to your domain in this case the domain is container.jonbrown.org I could point that to my firewall IP, or I could use a DDNS provider. A DDNS or Dynamic DNS provider allows you to bind a domain name to your routers IP and when that IP changes, so will the DNS entry. Thats great, but you still need to open those ports!

So while the internal Docker Portainer container is now protected, to access it externally you must still open those ports on your firewall. Again your firewall will vary and there are a variety of DDNS providers out there. I use TPLINK Deco as my home router and they support in the router itself a DDNS called [NO-IP](https://www.noip.com/) which is a free DDNS provider. If your router supports this feel free to use it. 

Look at your router settings, if it has DDNS support use whatever DDNS provider that it automatically binds with that will save you time and effort because that will automatically inform the DDNS provider whenever your router IP changes. 

For me I used NO-IP and I setup my account credentials in my router. I then got a host name from NO-IP and I set up that host as a CNAME record for container.jonbrown.org. 

That coupled with the open ports that are forwarding to my Rasberry PI at 192.168.64.3 I was able to load the Portainer instance. Another option for testing is to add a hostname record in the /etc/hosts file

{% highlight bash %}
sudo nano /etc/hosts

192.168.64.3    container.jonbrown.org
{% endhighlight %} 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/hosts.png" class="img-fluid rounded m-2" width="800" />

This allowed me to test the connection internally on my local computer without opening any ports because the computer looks to the host file first when resolving DNS entries. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/portainer1.png" class="img-fluid rounded m-2" width="800" />

{% highlight bash %}
version: "3.8"
services:
  nginx-proxy:
    container_name: nginx-proxy
    image: nginxproxy/nginx-proxy:latest
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
      - "/data/certs:/etc/nginx/certs"
    networks:
      - internal

  portainer:
    container_name: portainer
    image: portainer/portainer-ce:latest
    command: 
      -H unix:///var/run/docker.sock
      --ssl
      --sslcert /data/certs/jonbrown.org.crt
      --sslkey /data/certs/jonbrown.org.key
    environment:
      - TZ=America/New_York
      - VIRTUAL_HOST=container.jonbrown.org
      - VIRTUAL_PORT=9443
      - VIRTUAL_PROTO=https
      - CERT_NAME=jonbrown.org
    networks:
      - internal
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /data:/data
    depends_on:
      - nginx-proxy
    restart: always

networks:
  internal:
    name: internal
    driver: bridge
{% endhighlight %}


### Option #2: Cloudflare with Cloudflared Secure Tunnel ZERO Trust

Ok so what if you do not want to deal with opening ports on your firewall and you do not want to deal with DDNS? Well there is a modern solution made for you. There are however a few caveats

1. Its not 100% free. 
2. It requires you to have a Cloudflare account if you have one great, if not sign up for Cloudflare and migrate your DNS to Cloudflare. 
3. Now that your on Cloudflare you must enable the ZERO Trust feature which again requires you to have a credit card on file even on the free plan. 

Ok now that is out of the way, lets assume you have Cloudflare setup and DNS migrated. If you do not, watch the beginning part of this great tutorial he shows you how to do it. 

{% include videos/video.html id="yMmxw-DZ5Ec" %}

What you need to do is to go to the ZERO Trust area of Cloudflare. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/1.png" class="img-fluid rounded m-2" width="400" />

Click on Networks > Tunnels. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/2.png" class="img-fluid rounded m-2" width="400" />

We are going to create a new tunnel here. Press create a new tunnel. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/3.png" class="img-fluid rounded m-2" width="800" />

Choose Cloudflared

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/4.png" class="img-fluid rounded m-2" width="800" />

Pick a name for your tunnel

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/5.png" class="img-fluid rounded m-2" width="800" />

Select Docker as your environment

In the "Install and run a connector" copy the token out of the code. We will use this to set an environment variable on your Rasberry Pi. On the PI, SSH into the PI and run the following

{% highlight bash %}
sudo nano ~/.bashrc

export TOKEN=<tokengoeshere>
{% endhighlight %}

Now your token is set as an environment variable. 

Ok so you have your token, now its time to add your cloudflared service. If you previously added the NGINX-PROXY you will want to remove that and all the configuration, you may want to start with a clean docker-compose.yaml file

{% highlight bash %}
docker compose down && docker compose up -d
{% endhighlight %} 

Running this will take down and bring up your Docker and will run the below yaml configuration and bring up cloudflared. 

{% highlight bash %}
version: "3.8"
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    restart: unless-stopped
    command: tunnel run
    environment:
      - TUNNEL_TOKEN=$TOKEN
    networks:
      - internal

  portainer:
    container_name: portainer
    image: portainer/portainer-ce:latest
    command: 
      -H unix:///var/run/docker.sock
      --ssl
      --sslcert /data/certs/jonbrown.org.crt
      --sslkey /data/certs/jonbrown.org.key
    environment:
      - TZ=America/New_York
    networks:
      - internal
    ports:
      - "9443:9443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /data:/data
    restart: always

networks:
  internal:
    name: internal
    driver: bridge
{% endhighlight %}

Notice we are exposing and opening ports here, thats because Cloudflare is acting as an actual reverse proxy. Ok not done yet, the cloudflared tunnel is running but we need to add a hostname and map the container

In the Tunnel go to Public Hostname and click on Add a Public Hostname

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/6.png" class="img-fluid rounded m-2" width="400" />

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/7.png" class="img-fluid rounded m-2" width="800" />

Then add in your domain, for me the domain is a subdomain container.jonbrown.org and the service type is https and the port is 9443. The URL is pointing to the container and cloudflared is on the same network. 
 
{% highlight bash %}
version: "3.8"
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    restart: unless-stopped
    command: tunnel run
    environment:
      - TUNNEL_TOKEN=$TOKEN
    networks:
      - internal
{% endhighlight %}

Because of that we can just tell cloudflared that we are routing to the container itself and it will know what to do! Cool! 

Finally we must go to Additional application Settings > TLS and turn on "No TLS Verify"

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803Up/8.png" class="img-fluid rounded m-2" width="800" />

This is it. If you now go to your domain it will run through the proxy in Cloudflare, route the traffic through the tunnel to the Docker Container, and to your Portainer docker on port 9443, if you've been following along, the SSL certificate would have already been installed from the previous blog entry from Lets Encrypt which allows the secure connection. 

If you created a /etc/hosts file entry be sure to remove it at this point if your going to stick with this method.

### Sources
- [https://github.com/jonas-merkle/container-cloudflare-tunnel/blob/master/docker-compose.yml](https://github.com/jonas-merkle/container-cloudflare-tunnel/blob/master/docker-compose.yml)
- [https://github.com/nginx-proxy/nginx-proxy/issues/1465](https://github.com/nginx-proxy/nginx-proxy/issues/1465)
- [https://gusiol.medium.com/nginx-proxy-and-portainer-multiple-applications-in-one-domain-d82efec0750f](https://gusiol.medium.com/nginx-proxy-and-portainer-multiple-applications-in-one-domain-d82efec0750f)
- [https://gist.github.com/6rube/e59ced4b0e277e9d167f0c388087bb7a](https://gist.github.com/6rube/e59ced4b0e277e9d167f0c388087bb7a)
- [https://docs.portainer.io/advanced/reverse-proxy/nginx](https://docs.portainer.io/advanced/reverse-proxy/nginx)
- [https://www.boomam.com/docs/cloudflare/cloudflare_how-to_cloudflare-deploying-a-tunnel-with-npm/](https://www.boomam.com/docs/cloudflare/cloudflare_how-to_cloudflare-deploying-a-tunnel-with-npm/)
- [https://github.com/nginx-proxy/nginx-proxy/issues/200](https://github.com/nginx-proxy/nginx-proxy/issues/200)
- [https://www.youtube.com/watch?v=yMmxw-DZ5Ec](https://www.youtube.com/watch?v=yMmxw-DZ5Ec)

In the next document series were going to actually install Snipe-IT and we will use it with both scenerios, a reverse proxy and with Cloudflared ZERO Trust Tunnel to see the difference and help you decide which one is best for you. 

{% include videos/video.html id="PjZNWpcVjqg" header="/images/covers/2024/Header-Docker-Pi-3.jpg" %}
