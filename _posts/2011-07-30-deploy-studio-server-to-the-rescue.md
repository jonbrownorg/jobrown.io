---
title: Deploy Studio Server to the Rescue
author: Jon
layout: post
permalink: /blog/deploy-studio-server-to-the-rescue/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - product-reviews
tags:
  - deploy
  - review
  - server
  - solution
  - studio
---
As a Mac System Admin working in the Private sector, I must confess I find myself like a kid in the candy store looking, and trying out new products created by third party vendors that make my life, job and the user experience for my clients easier and more productive. I must stress that most admins can not fully share in my joy due to job or security restrictions. Admins in the Government sector for example can only use sanctioned tools and or methods for dealing with common Server Admin problems. These often lead to long, lenghtly solutions that could be eased with the use of third party software solutions. The restrictions are in place to keep security measures tight and ensure that proper procedures are followed.

Again, since I do not have any looming restrictions in my workplace I have found a piece of software that would never be allowed in larger Government facilities but works nicely for what I need. The problem, from time to time I need to re-image or re-core a massive amount of computers, sometimes hundreds of computers. I have a team of two, me and a Helpdesk Technician. This is a daunting task and since I do not like to work weekends, I find that Deploy Studio Server helps me keep my sanity in such situations.

This freeware tool can be used to create deployment files using Netboot, external USB or FireWire drives, or any AFP, SMB, or NFS sharepoint on the network. DeployStudio works with Mac OS X 10.4.11 to 10.6.8 at this point, and is updated regularly to include new OS versions. The package consists of DeployStudio Server, DeployStudio Assistant, DeployStudio Admin, and <del datetime="2014-02-22T17:05:45+00:00">diffPackageMaker</del>.

DeployStudio Server creates a network based deployment server containing the images. Assistant is used to configure the server and to create the NetInstall sets, while Admin is used to monitor deployments, manage disk images and scripts, enter configurations, and more. diffPackageMaker is no longer part of DSS I recommend [Doppelgänger][1] this utility can look at the difference between two file system snapshots and create installation packages based on what has been changed or added. Composer from Casper Suite is a better solution but it will cost some money and is not something you can trial without calling JAMF Software and requesting an official trial period. In my mind though Composer is the most accurate tool for this task.

I highly recommend using this fine product if you are in the fortunate position as myself and you are not under any pressure or regulations. This requires the use of an in-house server and it installs itself as a service on it. You configure the service to deploy images that you create, and the best part is that it can perform common tasks that will save you time after the re-imaging process is completed. Tasks like setting the computer name, setting up local accounts,  binding the computer to a directory server and much more. I describe it as Apple Netboot + Apple Automater = Deploy Studio Server. This is a useful tool that I highly recommend. Check out this instructional video that goes over how to set it up and use it.

I use Deploy Studio Server in my workplace and can field any questions you may have regarding its functionality, setup and configuration and ease of use. Write me a comment below and I will be happy to help!


 [1]: https://www.golgi-body.com