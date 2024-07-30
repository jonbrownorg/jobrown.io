---
layout: post
date: '2024-07-30'
author: Jon Brown
permalink: /blog/get-more-out-of-scripting-than-you-might-expect/
published: true
title: "Get more out of scripting than you may expect"
description: "Get more out of scripting than you may expect"
blogimgpath: 20240728Up
tags:
  - MacOS
  - iOS
categories:
  - tips
  - video
image: /assets/images/covers/2024/Header-Conference.png
thumbnail: /assets/images/covers/2024/Header-Conference.png
cta: 2
comments: true
---
### What is Expect?

Expect is an extension to the Tcl scripting language written by Don Libes. The program automates interactions with programs that expose a text terminal interface. Expect, originally written in 1990 for the Unix platform, has since become available for Microsoft Windows and other systems. [Wikipedia]

Don Libes is a computer scientist at NIST performing computer science research on interoperability. I just think its cool to call out and connect creators of tools that we see and use today and I encourage you to connect with him on LinkedIn. 

Expect is a program to control interactive applications. These applications interactively prompt and expect a user to enter keystrokes in response. By using Expect, you can write simple scripts to automate these interactions. 

And using automated interactive programs, you will be able to solve problems that you never would have even considered before.

Expect is a tool for automating interactive applications such as telnet, ftp, passwd, fsck, rlogin, tip, etc.

### Expect MAN Page

Lets review the man page of Expect and highlight some of the commands of Expect. 

We have the usual suspects such as Close, Debug, Disconnect and Exit up here, which are all commands that you can run with expect. 

You also have Spawn, which creates a new process running program args, 

Expect itself has a Send command that allows you to send specific flags like the -s flag that actually allows you to send string slowly while the h flag allows you to send it as if a human were typing it. 

### Scripts

{% highlight bash %}
#!/bin/bash
 
echo "Enter your name"
 
read $REPLY
{% endhighlight %}

{% highlight bash %}
#!/usr/bin/expect -f
 
set timeout -1
 
spawn ./test.sh
 
expect "Enter your name\r"
 
send -- "I am Jon\r"
expect eof
{% endhighlight %}

Ok lets break it down. We have 2 shell scripts here. One called test.sh, and another called expect.sh. Both in the same directory for simplicity sake. 

The first script is a bash script we know that because its pointing to /bin/bash

In the first script we see echo which prints out the line and the second line

read which is looking for the input in this case the value that its waiting for the user to enter thats the thing that expect is going to help automate in this case. 

The second script is the expect script notice that this script is calling /usr/bin/expect the -f flag denotes that were calling this from a file according to the man page The -f flag prefaces a file from which to read commands from.

We have a set timeout on the first line

And then the script spawns the bash script, expect then is called and looks for that specific output used in the first script and then sends the desired prompt of 

I am Jon in this case. 

Its critical to understand that expect’s value must match exactly the same value that the script is asking for even a slight variation and there will be a mismatch and it will not align. 

So as you can see it helps to automate interactive prompts for scripts that require automated human responses. 

During this talk I am going to talk through three uses cases that I have used Expect for as a Mac Admin where I have found it useful in automating around these kinds of user interactive prompts. 

In this case you would never run the test.sh script you would simply run expect.sh as it calls the test.sh script and automates its answers. 


### Watch the entire presentation


{% include videos/video.html id="X87T0Oxtgqw" header="/images/covers/2024/Header-Conference.png" %}