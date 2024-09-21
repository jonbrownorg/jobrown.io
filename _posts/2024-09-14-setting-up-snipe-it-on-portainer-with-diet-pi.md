---
layout: post
date: '2024-09-14'
author: Jon Brown
permalink: /blog/setting-up-snipe-it-on-portainer-with-diet-pi/
published: true
title: "Setting up Snipe-IT on Portainer with DietPi"
description: "Setting up Snipe-IT on Portainer with DietPi"
blogimgpath: 202408034Up
tags:
  - MacOS
  - iOS
categories:
  - tips
  - video
image: /assets/images/covers/2024/Header-Docker-Pi-4.png
thumbnail: /assets/images/covers/2024/Header-Docker-Pi-4.png
cta: 2
comments: true
---

### Series
- Part 1: [Setting up SNIPE-IT with DietPi on a Raspberry Pi]({{ site.site_cdn }}/blog/setting-up-diet-pi-on-a-rasberry-pi-for-use-with-docker-and-portianer/)
- Part 2: [Installing Docker & Portainer on DietPi for Snipe-IT]({{ site.site_cdn }}/blog/installing-docker-portainer-on-dietpi-for-snipe-it/)
- Part 3: [Securing Raspberry Pi with Reverse Proxy and or Cloudflare Proxy Tunnel]({{ site.site_cdn }}/blog/diet-pi-with-docker-reverse-proxy-portainer-vs-cloudflare-secure-tunnel/)
- Part 4: [Setting up Snipe-IT on Portainer with DietPi]({{ site.site_cdn }}/blog/setting-up-snipe-it-on-portainer-with-diet-pi/)


### Setting up SNIPE-IT with Portainer

Ok so now that we have Portainer up and running, its running securely so now we are ready to setup SNIPE-IT. Here are the steps to add SNIPE via Portainer. The first step is logging into Portainer. Upon logging into Portainer you will click on "Local" under Environments. This is the default Environment.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/3.png" class="img-fluid rounded m-2" width="800" />

In the sidebar click on Stacks. This will take you into the stacks area of the default environment. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/2.png" class="img-fluid rounded m-2" width="300" />

We have to next click on Add Stack to add the Snipe-IT stack. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/1.png" class="img-fluid rounded m-2" width="800" />

Once we click on "Add Stack" we need to give the stack a name. Note the name must not contain any spaces, numbers or uppercase letters. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/4.png" class="img-fluid rounded m-2" width="800" />

We will need to add the following items to the "Web Editor area"

{% highlight bash %}
version: "3.9"
services:
  db:
    image: mariadb:11.3-jammy
    container_name: SNIPE-IT-DB
    security_opt:
      - no-new-privileges:true
    hostname: db
    volumes:
      - /volume1/docker/snipeit/db:/var/lib/mysql:rw
    environment:
      - MYSQL_ROOT_PASSWORD=snipe
      - MYSQL_USER=snipe
      - MYSQL_PASSWORD=snipe
      - MYSQL_DATABASE=snipe
      - TZ=Europe/Bucharest
    restart: on-failure:5
      
  snipeit:
    image: lscr.io/linuxserver/snipe-it:latest
    container_name: SNIPE-IT
    restart: on-failure:5
    healthcheck:
      test: curl -f http://localhost:80/ || exit 1
    depends_on:
      - db
    volumes:
      - /snipe-vol:/var/lib/snipeit:rw
      - /volume1/docker/snipeit/db:/var/lib/mysql:rw
    environment:
      - TZ=Europe/Bucharest
      - APP_URL=https://inventory.jonbrown.org
      - NGINX_APP_URL=https://inventory.jonbrown.org
      - APP_KEY=XXXXXXXXX
      - APP_FORCE_TLS=true
      - MYSQL_PORT_3306_TCP_ADDR=db
      - MYSQL_PORT_3306_TCP_PORT=3306
      - MYSQL_DATABASE=snipe
      - MYSQL_USER=snipe
      - MYSQL_PASSWORD=snipe
      - PUID=1026
      - PGID=100
      - MAIL_PORT_587_TCP_ADDR=smtp.gmail.com
      - MAIL_PORT_587_TCP_PORT=465
      - MAIL_ENV_FROM_ADDR=test@gmail.com
      - MAIL_ENV_FROM_NAME=test@gmail.com
      - MAIL_ENV_ENCRYPTION=TLS
      - MAIL_ENV_USERNAME=test@gmail.com
      - MAIL_ENV_PASSWORD=XXXXXXXXX
    ports:
      - 443:80
{% endhighlight %}  

Please note that you must change the following sections to suite your needs. 

#### Email Customization

{% highlight bash %}
      - MAIL_PORT_587_TCP_ADDR=smtp.gmail.com
      - MAIL_PORT_587_TCP_PORT=465
      - MAIL_ENV_FROM_ADDR=test@gmail.com
      - MAIL_ENV_FROM_NAME=test@gmail.com
      - MAIL_ENV_ENCRYPTION=TLS
      - MAIL_ENV_USERNAME=test@gmail.com
      - MAIL_ENV_PASSWORD=XXXXXXXXX
    ports:
      - 443:80
{% endhighlight %}  


#### Time Zone, URL, and App_Key Customization

{% highlight bash %}
    environment:
      - TZ=Europe/Bucharest
      - APP_URL=https://inventory.jonbrown.org
      - NGINX_APP_URL=https://inventory.jonbrown.org
      - APP_KEY=XXXXXXXXX
{% endhighlight %}  

*Note* To get an App_Key you can use the default key as noted [https://snipe-it.readme.io/docs/docker](here).

{% highlight bash %}
Please re-run this container with an environment variable $APP_KEY
An example APP_KEY you could use is: 
base64:D5oGA+zhFSVA3VwuoZoQ21RAcwBtJv/RGiqOcZ7BUvI=
{% endhighlight %}  

#### MYSQL table and password customization

{% highlight bash %}
version: "3.9"
services:
  db:
    image: mariadb:11.3-jammy
    container_name: SNIPE-IT-DB
    security_opt:
      - no-new-privileges:true
    hostname: db
    volumes:
      - /volume1/docker/snipeit/db:/var/lib/mysql:rw
    environment:
      - MYSQL_ROOT_PASSWORD=snipe
      - MYSQL_USER=snipe
      - MYSQL_PASSWORD=snipe
      - MYSQL_DATABASE=snipe
      - TZ=Europe/Bucharest
    restart: on-failure:5
{% endhighlight %}  

I highly recommend creating a custom name, and database password that differs from the default. Once you have customized that information paste it into the main "Web Editor" area.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/6.png" class="img-fluid rounded m-2" width="800" />

Once done click on "Deploy the stack".

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/7.png" class="img-fluid rounded m-2" width="800" />

Once the stack deploys you will see a new stack with your name in the stack list. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/8.png" class="img-fluid rounded m-2" width="800" />

Click into the stack and you will see you have your database container and your actual SNIPE-IT container running. 

*Note* If you do not see your containers running, click on the checkmark next to the not running container and click "Start" to start the container. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/9.png" class="img-fluid rounded m-2" width="800" />


### Configuring SNIPE-IT

Now that you have SNIPE running you need to set some configurations to ensure that its running correctly. From the "Stacks" area click into your SNIPE-IT container. Here you will see the container status and health. Lets click on the "Duplicate/Edit" button in the top of the "Actions" area.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/10.png" class="img-fluid rounded m-2" width="800" />

We need to be sure that we have our Network Ports setup as follows. We should have host 443 pointing to container port 443. These ports typically need to match. Mismatched ports here will not allow HTTPS traffic through to your SNIPE-IT environment. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/11.png" class="img-fluid rounded m-2" width="800" />

Next in the Advanced Container Settings area, click on ENV. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/12.png" class="img-fluid rounded m-2" width="800" />

We need to be sure that we have "APP_FORCE_TLS" set to ture and we need to have "ALLOW_DATA_PURGE" set to true as well. The first item forces connections over HTTPS. The second forces or allows deleted items in SNIPE to be purged. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/13.png" class="img-fluid rounded m-2" width="800" />
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/14.png" class="img-fluid rounded m-2" width="800" />

Once done press the "Deploy the Container" button. This will save your changes, deploy the container and restart it. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/15.png" class="img-fluid rounded m-2" width="300" />

Ok so now you have SNIPE-IT running but you can't yet login to SNIPE-IT because when you do, it will not load over SSL because you have not yet installed the SSL certificate. So how do you do that? Well you must do that over an SSH connection to your Diet-Pi. Lets make that connection now. 

{% highlight bash %}
ssh root@<ip of dietpi server> -p<port of dietpi server>
{% endhighlight %}  

Remember we set the IP address and the port of the Diet-Pi server in a previous tutorial. Once you are logged into the Diet-Pi you will need to copy the SSL information into the running SNIPE-IT container. At this stage we must capture the SSL key and full chain information that we generated in the previous tutorial. 

This is important because we need to paste this information into the default certificate files created when SNIPE-IT was instantiated. 

Once you have your fullchain certificate contents and your certificate key file contents you can proceed. You can do this by running the following commands

{% highlight bash %}
cd /etc/letsencrypt/live/<your domain>
{% endhighlight %} 

{% highlight bash %}
nano fullchain.pem
{% endhighlight %} 

Then copy the contents to a file outside of your SSH connection. Then run

{% highlight bash %}
nano privkey.pem
{% endhighlight %} 

Then copy the contents to a file outside of your SSH connection. The fullchain.pem contnets will be pasted into the cert.crt file. The privkey.pem contents will be pasted into the cert.key file in the next steps. 

Next, while SSH'd into the Diet-PI server, you must run. 

{% highlight bash %}
docker exec -it SNIPE-IT /bin/bash
{% endhighlight %}  

Make sure to replace "SNIPE-IT" with whatever you ended up naming your container when you edited the values earlier. 

{% highlight bash %}
snipeit:
    image: lscr.io/linuxserver/snipe-it:latest
    container_name: SNIPE-IT <------ HERE
{% endhighlight %}  

This will connect you into the container. Now that you are connected into the container run these commands. 

{% highlight bash %}cd /config/keys/
{% endhighlight %} 

Now that you are in the Keys location you will see the 2 certificate files the cert.crt and cert.key you can see these by running

{% highlight bash %}ls
{% endhighlight %} 

in the directory. This will list these 2 files. We need to recreate these files so first lets rename these files by running these commands. 

{% highlight bash %}mv cert.crt cert-old.crt
mv cert.key cert-old.key
{% endhighlight %} 

These commands will rename the files. Next we need to copy the contents of the fullchain certificate file that we created in the previous tutorial. That file would typically be stored in

{% highlight bash %}/etc/letsencrypt/live/<your domain>{% endhighlight %} 

On the core server. If you have not copied the contents of the fullchain and key files from these locations you need to do that as we previously stated. 

Now we will run 

{% highlight bash %}nano cert.crt{% endhighlight %} 

We will paste in the values of the fullchain.pem file and save. To save the document press the CNTRL+Z key on your keyboard and press enter. 

Now we will run 

{% highlight bash %}nano cert.key{% endhighlight %} 

We will paste in the values of the privkey.pem file and save. To save the document press the CNTRL+Z key on your keyboard and press enter. Now, what have we just done? We have now installed the SSL certificate needed in order to load the SNIPE-IT setup!

### SNIPE-IT Setup

Now that we have SNIPE-IT running we need to go to the URL and go through the setup wizard. For me my APP_URL was set to https://inventory.jonbrown.org assuming we have our DNS forwarded or proxied correctly to our Diet-PI container we should be able to load this URL. This URL will redirect us to https://inventory.jonbrown.org/setup or whatever your domain is and you will hopefully see a SNIPE-IT Pre-Flight screen. If you have configured everything correctly it will be running over HTTPS, with your updated certificate and all items will be green. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/17.png" class="img-fluid rounded m-2" width="800" />

Press the "Next: Create Database Table" button to proceed. Simply follow the on-screen instructions. You'll be prompted to create your first user, with an option to email yourself the credentials you used to create your user.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/18.png" class="img-fluid rounded m-2" width="800" />

If you've entered all of the fields correctly, you'll see a final message informing you that your Snipe-IT setup is complete and prompting you to login.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/202408034Up/19.png" class="img-fluid rounded m-2" width="800" />

Once you have created the first user you will be directed to login to your environment. For me that was https://inventory.jonbrown.org/ and I was able to login with the user that I created!

### Securing SNIPE-IT (With SSO) *From Documentation*

To ensure that your site does not become the target of bots and hackers, lets secure our SNIPE-IT Environment. For me since I use Azure AD for my directory, I am adding in a connection to Azure SSO. If you happen to use Okta or some other directory provider you can use the instructions outlined in the [https://snipe-it.readme.io/docs/saml](SNIPE-Docs) for how to configure SAML for a variety of providers. 

Add an "Azure AD SAML Toolkit" app to your Enterprise apps in Azure AD, and edit the "Single Sign On" page, choosing SAML as the method. Edit the first section with the values below, substituting your own domains.

<table><thead><tr><th style="text-align:left">Key</th><th style="text-align:left">Value</th></tr></thead><tbody><tr><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">Entity-ID</span></code></td><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">https://assets.example.com</span></code></td></tr><tr><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">Assertion Consumer Service (ACS) URL</span></code></td><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">https://assets.example.com/saml/acs</span></code></td></tr><tr><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">Single Logout Service (SLS) URL</span></code></td><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">https://assets.example.com/saml/sls</span></code></td></tr><tr><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">Sign on URL</span></code></td><td style="text-align:left"><button aria-label="Copy Code" class="rdmd-code-copy fa"></button><code class="rdmd-code lang- theme-light" data-lang="" name="" tabindex="0"><span class="cm-s-neo" data-testid="SyntaxHighlighter">https://assets.example.com</span></code></td></tr></tbody></table>

Azure will automatically configure a certificate for you to sign the SAML responses. This is included in the metadata file which you download from Azure and upload into the Snipe-IT SAML settings.

Download this metadata once you have filled in all of the above information, by clicking the "Federation Metadata XML" download link. Upload it into Snipe-IT.

Finally, add the users that are allowed to sign in via SAML to the Azure AD app under Users and Groups. If you miss this step, users will receive an error if they try and sign in via SAML.

Alternatively, if you would like to manage user assignment in Azure AD in a different way, refer to this [documentation](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/ways-users-get-assigned-to-applications) from Microsoft.

### BUG #1: SSL Configuration

For anyone having this issue, if you are using local certificated you need to add your bundleCA to the php configuration, otherwise it will check only the CAs of the container os and not the ones installed on the host machine, I made aware of my custom CA by copying it to the /config/keys place.

- [https://github.com/linuxserver/docker-snipe-it/issues/73](https://github.com/linuxserver/docker-snipe-it/issues/73)

### BUG #2: Logo does not show up on PDF after Acceptance

I have confirmed that editing the /app/www/config/dompdf.php and adding these paths to the CHROOT line fixes the issue

FROM

{% highlight bash %}",/var/lib/snipeit/data/uploads,/var/lib/snipeit/data/private_uploads",{% endhighlight %}

to

{% highlight bash %}",/var/lib/snipeit/data/uploads,/var/lib/snipeit/data/private_uploads,/app/www/storage/private_uploads/,/config/uploads",{% endhighlight %}

This version of SNIPE-IT uses these 2 paths.

{% highlight bash %}
/app/www/storage/private_uploads/
/config/uploads
{% endhighlight %} 

Which needs to be added to the dompdf.php file.

- [https://github.com/linuxserver/docker-snipe-it/issues/75](https://github.com/linuxserver/docker-snipe-it/issues/75)

### Sources
- [https://snipe-it.readme.io/docs/pre-flight-setup](https://snipe-it.readme.io/docs/pre-flight-setup)
- [https://snipe-it.readme.io/docs/saml](https://snipe-it.readme.io/docs/saml)
- [https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/ways-users-get-assigned-to-applications](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/ways-users-get-assigned-to-applications)
- [https://github.com/linuxserver/docker-snipe-it/issues/73](https://github.com/linuxserver/docker-snipe-it/issues/73)
- [https://github.com/linuxserver/docker-snipe-it/issues/75](https://github.com/linuxserver/docker-snipe-it/issues/75)

{% include videos/video.html id="EwIi8aGXYkc" header="/images/covers/2024/Header-Docker-Pi-4.jpg" %}
