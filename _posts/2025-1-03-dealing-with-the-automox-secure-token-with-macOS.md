---
layout: post
date: '2025-01-03'
author: Jon Brown
permalink: /blog/dealing-with-the-automox-secure-token-with-macOS/
published: true
title: "Automox Secure Token with modern macOS deployments"
description: "Automox Secure Token with modern macOS deployments"
blogimgpath: 202408034Up
tags:
categories:
  - jamf
  - articles
  - scripts
image: /assets/images/covers/2025/automox_tokens.png
thumbnail: /assets/images/covers/2025/automox_tokens.png
cta: 2
comments: true
---

## The Problem

Its been a while since I have used Automox, but the premise of the tool is that it automatically patches your macOS, Linux and Windows workstations. for macOS it does this using a service account created with username _automoxserviceaccount and this account needs a secure token. The issue here is that when the package is deployed the secure token is not transferred to that account which means that it most cases it can't apply macOS updates. 

To solve this Automox provides a script that you can use to add the secure token attribute, except, it doesn't work or at least it didn't work at the time of writing this article. The solve for me was to use their own commands to remove automox, re-trigger the installation of automox and then adding the secure token attribute. 

The goal is to automate this workflow in JAMF Pro. There are a few things you need before you can use the script. 

## Step #1: Setup the Automox Installation Policy  

In JAMF Pro we need to upload the Automox package. Automox provides a package you can use to deploy the agent to workstations. Once you have the package from Automox upload the package in the Settings > Packages area of your JAMF Pro instance and upload it. Once the package is ready you can assign it to a policy. 

Next you will need to create a policy in JAMF Pro. Make sure that you set this to run as "Ongoing" and make sure that its set as a "Self Service" this allows you to call or trigger the policy via its policy ID. You will scope this to workstations where the _automoxserviceaccount account has no secure token. I did this using a Smart Group in JAMF Pro. 

I am not going to go into super depth on how to create a smart group, how to target smart groups, or how to setup the policy. If you need assistance just comment below or reach out and we can elaborate more below. 

### Step #2: Setup the script

Next we need to take the script and we need to add it to the JAMF Pro > Settings > Scripts area of your JAMF Pro instance. Lets review the script. 

{% highlight bash %}
#!/bin/bash

// These commands remove Automox if its already installed. 
sudo launchctl unload /Library/LaunchDaemons/com.automox.agent.plist
sudo /usr/local/bin/amagent --deregister
sudo rm -f /usr/local/bin/amagent
sudo rm -rf "/Library/Application Support/Automox/"
sudo /usr/bin/dscl . -delete /Users/_automoxserviceaccount

// Wait 5 seconds
sleep 5

// Trigger the JAMF Policy, you will need to pass the policy ID fromm Step 1 into the variable $4 area of your script policy
jamf policy -id $4

// Wait 5 seconds
sleep 5

// Here we need to pass the username and password of an account on the computer that already has a secure token thats what we enter into variable $5 and $6
sudo /usr/local/bin/amagent --adminuser '$5' --adminpass '$6'
sudo /usr/local/bin/amagent --automox-service-account enable
sudo /usr/local/bin/amagent --automox-user-prompt enable

jamf recon

sysadminctl -secureTokenStatus _automoxserviceaccount

/usr/local/bin/amagent --setkey $7
launchctl load /Library/LaunchDaemons/com.automox.agent.plist
{% endhighlight %} 

Notice that we need to know some information to pass into the variable fields. 

- $4 variable == The Policy ID of the automox install package policy. This is outlined in Step #1. You can get the Policy ID in the URL bar of the Policy, its a numerical value. 
- $5 variable == The known administrator username with a secure token already. Its important to know that this must already have a secure token. 
- $6 variable == The known password for the known administrator with secure token already. 

This script is in my [Github Repo](https://github.com/jonbrown21/Automox-macOS-Secure-Token) feel free to comment, contribute and post issues with it there. 

### Step #3: Create the Script Policy

Next you will need to create a script policy and add the script. Make sure to add the script we added in Step #2. Scope the policy to all computers with an _automoxserviceaccount user that has no secure token. You can do this with a smart group. 

Add the script and set the script to run recurring on checkin, and have it run only once per computer. 

The script will remove Automox if its installed. Remove the service account. Waits 5 seconds, and the reinstalls Automox. It then authorizes the account to receive the secure token. 

## Conclusion

This approach essentially installs Automox correctly, and allows the computer to check-in to Automox correctly and it allows the computer to actually manage macOS updates. 

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
- [Automox Script Github Repo](https://github.com/jonbrown21/Automox-macOS-Secure-Token)
