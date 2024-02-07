---
title: Web Help Desk on Amazon EC2
author: Jon
layout: post
permalink: /blog/install-webhelpdesk-on-amazon-ec2/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - cloud-computing
  - Web-Server
tags:
  - amazon
  - cloud
  - ec-2
  - musings
  - servers
  - web-help-desk
---
If your like me you have run several servers and you have learned that running your own servers and server hardware either locally or remotely is a huge commitment. A commitment of time, money and precious resources that many in the IT community can not afford. Since the inception of virtual environments people have been making their lives easier with simpler more disposable methods of hosting and that is what led me to the holy grail of virtual environments the Amazon EC2 server.

We have been looking at several help desk software solutions and the one that won was [Solarwinds][1] (formerly MacsDesign Studio&#8217;s) [Web Help Desk][2]. I have used this for years in other places and I love how it integrates with ARD and JAMF important for us Mac Administrators trying to stay on top of our inventory.

While investigating I noticed that there were basically two models. Run WHD yourself on your own server or virtual instance, or have it hosted. The hosted model is run by a company called Loop1. A great company but due to their limitations there are 2 concepts that you have to be comfortable with when hosting with them. First you have no control of the data backup and you have no control of the data. Meaning you can&#8217;t extract or dump the data. That was too restrictive for us so we decided to run it ourself but to do so in an Amazon EC2 environment.

There was no documentation on how to do this and the sales team had only hinted that it may be possible. I decided to give it a go and learned quite a lot in the process. I hope that this will help out a few people and help expand the pool of Web Help Desk and Amazon EC2 users.

**Sign up / Log in to your AWS Account**  
If you do not have an AWS account then you can signup for the [free usage tier][3] and login to your account.

**Setting up our server**  
After you have logged in to AWS account, click “My Account / Console” in top right corner of the screen and then click on “AWS Management Console”. You will be presented with something like this:

Click on “EC2″ link and you will be taken to the EC2 Dashboard. Click on “Launch Instance” button to create a new instance. Follow the “Classic Wizard” as shown below:

Click “Continue” and on the next screen select “Ubuntu Server 12.04.2 LTS”

On the next screen, you can proceed with the default settings. Make sure that “Instance Type” is set to “Micro” because that comes free with AWS Free Usage Tier. Click “Continue”

Click “Continue” on the next screen:

Again, click continue on the next screen. After that you can add a “Name” for your instance for better organization. I have named it as “Web Help Desk”.

Now, you need to create a “Key Pair” so that you can connect easily with your server via SSH. Give an easy to remember name to your key pair and download the file. Keep the file in a place that you can remember. As you will need this file to connect with your server.

Next step is to configure the Firewall and make sure that only required ports are open for our server. Create a new security group. I have named it as “WHD2”. Now, click the dropdown for “Create a new rule” select SSH and click “Add Rule”. Repeat it for HTTP. You will also need to create a custom rule for port 8081 as that is the port for Web Help Desk.

And we are done, setting up our instance. Click “Launch”.

Go to “Instances” page and you will see your new server being initialized and in some time it will be up and running. But, it’s not yet ready to run a Web Help Desk site. We need to setup the essential services to run Web Help Desk : Apache, PHP and MySQL.

**Connect via Terminal**  
Select the instance which we created above and click “Instance Actions”, in the pop-up menu click on “Connect”

Click on &#8220;Stand Alone SSH Client&#8221; once done you will be presented with the proper method for connecting to your instance. For me my command looked like this.

{% highlight bash %}
ssh -i /path/to/my/certificate/file.pem ubuntu@xx.xx.xx.xx
{% endhighlight %}

(Where xx.xx.xx.xx was the hostname or IP of my instance). The best method to connect was to CD into the directory where my pem file was and then run the command from there. More than a few directories seemed to cause the connection to fail. Connecting can be cumbersome or it can just work it took me a few tries to connect with the hostname before I decided to change to an Elastic IP.

**Mapping Domain Name**  
Now we have everything ready in place and all we need to do is map our domain with our virtual server. For this you will have to associate an IP with the instance and map the domain name to that IP.

Head back to EC2 console and click “Elastic IPs” in the left pane. Click “Allocate New Address”. Now, you will see a new IP address in the console. Click “Associate Address” to associate this IP with your instance.

Now, switch to back to “Instances” panel and you can check the attachment status. You will need to connect to your server by IP address now. Your hostname (public DNS) will no longer work, and if you detach the IP, your instance will be assigned a different hostname (public DNS). So, it’s best to not to change IP or detach it. You can map your domain name to this elastic IP and it will work perfectly.

**Setting up Apache**  
Now, we are connected to our server. Next step is to setup Apache. By default, you will be logged in as user : ubuntu. Let’s switch the user to “root” so that we can get complete access. Use the following command to do so

{% highlight bash %}
sudo su
{% endhighlight %}

Use the following command in terminal to install Apache on your server:

{% highlight bash %}
apt-get install apache2
{% endhighlight %}

After the installation is complete, look for Public DNS of your instance (Or IP address as shown above). Copy this Public DNS and paste it in browser’s address bar. You will see a test page for Apache like below:

**Installing PHP5**  
Our Apache is working and now we will install PHP5. For installing PHP5 use following commands in your terminal:

{% highlight bash %}
apt-get install php5
apt-get install libapache2-mod-php5
/etc/init.d/apache2 restart
{% endhighlight %}

Note: If your PHP installation fails with a message such as “Unable to fetch some archives…” then run the following command and repeat the above process:

apt-get update

Now, your web files placed in /var/www/ can be accessed in the browser via Public DNS.

Let’s create a test PHP file to make sure that we have PHP running properly. Use the following command to do so

{% highlight bash %}
cd /var/www/
pico mytest.php
{% endhighlight %}

This will create a new PHP file and open editor. Follow the following steps to add content to file :

  1. Type
{% highlight bash %}
<?php phpinfo() ?>{% endhighlight %}
  2. Hit escape key
  3. Type command+x to write the contents to file and quit the editor.
  4. Move the file into the appropriate directory.
{% highlight bash %}
mv mytest.php html/{% endhighlight %}

After creating the file run the file in your browser using the address as your-public-dns/mytest.php and it will show a page like below

Now that PHP is running perfectly on our Apache. We need MySQL for creating database.

**Install MySQL**  
Process for installing MySQL is similar to the process we followed for installing PHP. Use the following command in terminal to install MySQL

{% highlight bash %}
apt-get install mysql-server
{% endhighlight %}

During installation process you will be asked to create a password for “root” user. Keep this password safe in your memory or computer because this will be required to access the database later on.

Since we need to run PHP5 with MySQL, we will also install PHP module for MySQL using the following command

{% highlight bash %}
apt-get install php5-mysql
apt-get install libapache2-mod-auth-mysql
{% endhighlight %}

After this we can create database and continue with setting up Web Help Desk. But, it will be nice to setup phpMyAdmin visual interface. So, let’s go ahead with it.

**Installing phpMyAdmin**  
Use the following command to install phpMyAdmin and make sure you configure it for “Apache2″ web server

{% highlight bash %}
apt-get install phpmyadmin
{% endhighlight %}

Follow the instructions on screen and remember the password that you enter in each field. After the installation of phpMyAdmin is complete we need to configure our Apache to make phpMyAdmin accessible via browser.

Use the following command for configuring Apache

{% highlight bash %}
ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf.d/phpmyadmin.conf
in some systems you may need
ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-enabled/phpmyadmin.conf
/etc/init.d/apache2 reload
{% endhighlight %}

We restart the apache web server so that it picks up our changes. That’s all done. Now, you can access phpMyAdmin in browser via your-public-dns/phpmyadmin Enter username : root and the password which you created while installing MySQL.

Login to the admin and create a new database that we will use later for installing Web Help Desk. Now, we have all essential elements on our virtual server for running Web Help Desk and everything is working perfectly. So, let’s install Web Help Desk.

**Install Java 7**

You will need to install Java since Web Help Desk uses java to run. I recommend using the latest version at the time of this tutorial Java 7 was the latest. To install Java on Debian Linux run the following commands.

{% highlight bash %}
sudo apt-get update
sudo apt-get install default-jre
{% endhighlight %}

**Downloading Web Help Desk**

{% highlight bash %}
wget https://downloads.solarwinds.com/solarwinds/Release/WebHelpDesk/12.0.0/webhelpdesk-12.0.0.x86_64.rpm.gz
{% endhighlight %}

**Unzip Web Help Desk**

{% highlight bash %}
gunzip webhelpdesk-12.0.0.x86_64.rpm.gz
{% endhighlight %}

Before we can install Web Help Desk we need to install Alien a platform that allows the conversion and installation of Red Hat packages on a Debian platform. According to Ubuntu&#8217;s website <https://help.ubuntu.com/community/RPM/AlienHowto>

> Alien converts an RPM package file into a Debian package file or Alien can install an RPM file directly. This is not the recommended way to install software packages in Ubuntu. If at all possible, install packages from Ubuntu&#8217;s repositories using Add/Remove, apt-get, or the Synaptic Package Manager. Package dependency conflicts may occur when attempting to install RPM packages. The Synaptic Package Manager may be able to fix or remove any broken packages.

**Install Alien**

In a terminal, enter:

{% highlight bash %}
sudo apt-get install alien
{% endhighlight %}

Installing the WHD RPM file directly In a terminal, enter:

{% highlight bash %}
sudo alien -i webhelpdesk-12.0.0.x86_64.rpm
{% endhighlight %}

This will install Web Help Desk into the following location /usr/local/webhelpdesk to start Web Help Desk issue this command in the terminal.

{% highlight bash %}
sudo /usr/local/webhelpdesk/whd start
{% endhighlight %}

At this point in the installation you technically have Web Help Desk installed however. Solarwinds has put in a few checks. You are not allowed to run through the setup wizard of Web Help Desk using anything but 127.0.0.1:8081 which means that if your trying to load your WHD instance odds are that you are getting an error screen. The work around here is to install a GUI interface in your Amazon Instance and then login, open the browser and configure the software. Once done you can uninstall the GUI and start Web Help Desk from the terminal. (This took me hours to figure out by the way and a lot of back and forth with Solarwinds.)

**Increase the instance size**  
Because we have to install a GUI interface and connect over VNC you must increase the processor speed of the server from Micro to anything but micro. Go to the AWS console through the URL <https://aws.amazon.com/console>.

  1. In your AWS Management Console, go to the EC2 Tab.
  2. Check the instance you want to change (from micro to large, for example)
  3. Put the instance in a &#8216;Stopped&#8217; state.
  4. Click the &#8216;Instance Actions&#8217; menu, and choose &#8216;Change Instance Type&#8217;
  5. Choose the level you want the instance to run at (small, medium, large)
  6. Click &#8216;Yes, Change&#8217;.
  7. Restart the instance in question.

**Install a GUI interface**  
Amazon EC2 Linux servers does not come with GUI, all the operations have to be done using ssh client like putty. So if you wish to have a GUI for your amazon Linux instances, you can achieve it pretty easily. Once you installed the GUI essentials on your server, you can access it via windows remote desktop client. If you are using Linux , then you can use VNC viewer as a remote desktop client. In order to have a GUI a light weight lxde desktop has to be installed on your server. Enter LXDE! 

**LXDE:**

  1. Specially designed for cloud-based servers
  2. Light weight GUI for Linux
  3. Better interface
  4. Multi-language support
  5. Supports standard keyboard shortcuts
  6. Fast performance

> Make sure that RDP port is enabled on the ubuntu instance in which you are going to install lxde. Update the server and install lxde using the following commands.

{% highlight bash %}
sudo apt-get update 
sudo apt-get install lxde
{% endhighlight %}

Once lxde is installed on your server , start the ldxe using the following command

{% highlight bash %}
sudo start lxdm
{% endhighlight %}

**Enable VNC**  
Install xrdp to establish a remote desktop connection since you cant have a GUI using putty. Use the following command to install xrdp.

{% highlight bash %}
sudo apt-get install xrdp
{% endhighlight %}

Set a password for the default user &#8220;ubuntu&#8221; ,since remote desktop connection requires username and password.

{% highlight bash %}
sudo passwd ubuntu
{% endhighlight %}

**Login through VNC**  
Start the windows remote desktop client and enter the public DNS or the elastic ip of your server instance and hit connect.

Enter the user name and password of the server instance and hit ok as shown below.

You can start using your Ubuntu server with GUI via remote desktop connection.

**Install JDBC Driver**  
Now that you have logged into your new EC2 instance you need to install the latest JDBC driver. This is what Web Help Desk needs to run properly and to be in compliance with Oracle this is not packaged in the installer. Follow these instructions.

1. Download the latest MySQL JDBC Driver from https://dev.mysql.com/downloads/connector/j/

2. Copy the JDBC driver into one of the following extension directories. 

&#8211; Windows \Program Files\WebHelpDesk\bin\jre\lib\ext  
&#8211; Mac /Library/Java/Extensions  
&#8211; Linux /usr/local/webhelpdesk/bin/jre/lib/ext

3. Restart Web Help Desk.

**Configure Web Help Desk**  
I am not going to bore you with the details but Solarwinds has improved the setup of this product. Navigate to https://127.0.0.1:8081 and your new WHD instance should load in the web browser. If not then make sure that WHD is running and that you have a browser that can handle Java installed in your instance. I installed Firefox in my instance. This PDF file is a great resource as well and starting on page 43 you will find a detailed guide on how to setup and initialize WHD.

<https://www.solarwinds.com/documentation/WebHelpDesk/docs/WHDAdminGuide.pdf>

**Reduce the Instance size**  
Now that you have installed and configured WHD you should probably reduce the instance size you can do so the same way we outlined above. You pay per hour based on the size of your instance. Micro is about 2 cents an hour, Large can be up to $2 dollars or more per hour so it makes a huge difference.

Once your done SSH into your instance and start WHD (I have mine running in Small) and off you go! What I have noticed is that once you start WHD let it run for about 30 min before actually throwing any traffic at it. This allows it to load tomcat, and everything else it needs to run. For me performance improved substantially after this initial period of sluggishness.



 [1]: https://www.solarwinds.com
 [2]: https://www.webhelpdesk.com
 [3]: https://aws.amazon.com/free/