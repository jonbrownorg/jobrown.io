---
title: 'I Syncing a failover website : Creating an SSH key'
author: Jon
layout: post
permalink: /blog/creating-an-ssh-key-for-secure-development/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/sync.png
categories:
  - osx-system-administration
tags:
  - backup
  - cronjob
  - key
  - schedule
  - ssh-tunnel
---
Recently at our organization we were charged with the task of creating an auto failover solution for our websites. Basically the idea here is that we have our web server sitting in a data center but if for some reason the server were to ever go down then the website would fail over to a second server where a duplicate of the website is waiting to be accessed in the event that the primary ever had an issue. This is doable but it requires that you have all your ducks in a row.

First, you must have DNS that can process a failover, you must have a script that will sync your files and your databases and most importantly of all you must have an open SSH tunnel between the two servers so that the sync can perform in a secure way without risk of any hacking happening. In this article I am going to outline the process of creating an ssh key for your second server, using terminal, and CPANEL. The failover hosting company we chose uses CPANEL and before we started we had to ask our host to enable jailed SSH access on our account in order to proceed.

Once enabled we must go through the process of creating a set of keys, a public key, and a private key. You must create the key on the computer that is considered to be the primary or the computer that will be running the sync script. Once your logged into that computer run these commands in terminal to create your private and public keys.

{% highlight bash %}
mkdir ~/.ssh{% endhighlight %}

{% highlight bash %}
cd ~/.ssh{% endhighlight %}

{% highlight bash %}
ssh-keygen -b 1024 -t dsa -f id_dsa -P ''{% endhighlight %}

{% highlight bash %}
chmod 400 id_dsa{% endhighlight %}

Now in your ~/.ssh folder you should have an id\_dsa file, an id\_dsa.pub and a file called authorized_keys. The first file is your private key. The second file is your public key. The last file is a file that protects your primary server, meaning no one will be able to ssh into your primary server without the public or private keys as a form of authorization.

On the secondary server with CPANEL login to your control panel and choose SSH from the list of options. Once there, press the &#8220;Import Keys&#8221; button and you will see two fields one for a public key one for the private key. Copy and paste the contents of your private key id\_dsa on your primary server into the private key field. Copy the contents of id\_dsa.pub into the second field labeled public key. Name the key, in the top field and press save.

Now that you have the keys there, you must authorize the keys, once you have you will be able to ssh into your secondary server from your primary server without entering your password. Your host may have you connect to their ssh tunnel using a custom port, if this is the case then this is the syntax.

{% highlight bash %}
ssh -p8569 username@host_name{% endhighlight %}

This will give you access to your account area, in our next article we will talk about how to create the sync script and sync your files, and databases over from the primary server to the secondary server on a scheduled basis.

