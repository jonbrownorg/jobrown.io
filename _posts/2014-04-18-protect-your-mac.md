---
title: Protect your Mac!
author: Jon Brown
excerpt: Apple computers recently have exploded in popularity, Apple stock is soaring and Apple computers are now and have been for some time prime real estate for sticky fingers. So what is an Apple user to do, keep your beloved computer locked up? With the threat of loss, or theft of Apple devices being a reality many companies and many solutions have emerged in the marketplace.
  While looking at the options out there for laptop security and recovery, and reviewing all the options, it seemed wise to take a step back and ask the question, what is the end goal? What do you expect to happen when your precious laptop or desktop is lost or stolen? Do you expect to retrieve it? Will you claim it as a loss and report it with your insurance company? The answers to these questions will impact how you should consider the choice for what kind of solution to use to protect your computer.
  Almost all recovery software requires the lost or stolen computer to be used and connected to the internet to actually work. So security settings like setting a firmware password or having your computer encrypted with Filevault with no guest account would render the computer unusable, and at the same token untraceable. If laptop recovery is the goal, you need to make it easy for the thief to use the computer even if its only for a little while, else the computer may never register at all.
layout: post
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: Protect your Mac!
permalink: /blog/protect-your-mac/
categories:
  - bash-scripts
  - leter-to-the-editor
  - product-reviews
  - rants
tags:
  - bash
  - review
  - script
  - stolen
---
Apple computers recently have exploded in popularity, Apple stock is soaring and Apple computers are now and have been for some time prime real estate for sticky fingers. So what is an Apple user to do, keep your beloved computer locked up? With the threat of loss, or theft of Apple devices being a reality many companies and many solutions have emerged in the marketplace.

While looking at the options out there for laptop security and recovery, and reviewing all the options, it seemed wise to take a step back and ask the question, what is the end goal? What do you expect to happen when your precious laptop or desktop is lost or stolen? Do you expect to retrieve it? Will you claim it as a loss and report it with your insurance company? The answers to these questions will impact how you should consider the choice for what kind of solution to use to protect your computer.

Almost all recovery software requires the lost or stolen computer to be used and connected to the internet to actually work. So security settings like setting a firmware password or having your computer encrypted with Filevault with no guest account would render the computer unusable, and at the same token untraceable. If laptop recovery is the goal, you need to make it easy for the thief to use the computer even if its only for a little while, else the computer may never register at all.

If the goal is to be able to keep your data safe and secure then set the firmware password and encrypt the drive and forget the recovery software, since in order to use the computer in that state it would have to be wiped or otherwise modified physically the software would be removed. 

Don&#8217;t over protect your devices, but also take some very practical steps to ensure the security of your files and your systems. Backup your files often, store your files in the cloud (Google Drive, Dropbox, etc..), and seriously consider physical security from where you keep your computer in your house, to how you store it in your car. 

Now that you&#8217;re ready to pick a laptop security solution consider the options. 

[iCloud &#8211; Find my Mac][1]  
This is a good solution that will automatically track, locate your mac. Allows you to remotely wipe, and display a message on the screen of the lost / stolen laptop. Does not have an option to take pictures or screenshots of the computer and can be easily turned off. If your already an iCloud user not a bad thing to have but consider another solution that has more robust features. 


[LoJack for Laptops][2]  
This solution offers a guarantee of laptop recovery, which could be important if you have a large number of computers. If you do [Computrace][3] their enterprise version may be a better solution for you. LoJack allows you to track, take photos and screenshots of the stolen mac. It allows you to enter the police details to help you recover the computer. 


[Undercover Mac][4]  
This has been a personal favorite of mine, one of the most comprehensive solutions with a well designed user portal. This software offers the ability to track, take photos, and screenshots of the stolen computer. It also sends key logs of the computer to the portal as well. The team at undercover mac will work with authorities if police info is entered to track and find the laptop. They also have the ability to deploy the product to a large number of systems silently.


[Prey][5]  
Prey Project is cool and offers a lot of the same features of Undercover Mac. Remote tracking, screenshots, and photos are all part of the package but Prey offers an On Demand mode that allows you control when the reports are generated. You can also change the timing of the reports as well. The only thing with Prey you pay for the amount of reports you can store so the basic package will delete old reports once newer ones arrive. Prey also provides a way to deploy the installer silently. 


So this is great, lets talk business and enterprise environments. In many environments privacy concerns are a reality and installing tracking software that can be activated at any time is a concern that can impact employee productivity and cause real concern. Companies with a large number of Mac&#8217;s to manage should be using some kind of management tool like [Munki][6] or [Casper][7]. I strongly recommend having an account with Undercover Mac or Prey and having the ability to remotely enroll a computer that has gone missing. 

Before we talk about the how, lets talk briefly about policy. Having a policy in place to ensure that loss or theft is caught early is important. Consider doing regular inventory checks, using asset management software and have systems in place to ensure overall compliance. 

Ok, so how do we install tracking software on a managed computer remotely? Its all about targeting the stolen computer. In MUNKI and in Casper you can create a conditional rule and assign that to an installer. The rule would be for the &#8220;Hostname&#8221; of the system and the install should be a quiet background install.

In Casper you could do this by deploying a script

{% highlight bash %}
cd /Library/Application\ Support/ && sudo curl -O https://preyproject.com/releases/0.6.0/prey-0.6.0-mac-batch.mpkg.zip && sudo unzip -XKo /Library/Application\ Support/prey-0.6.0-mac-batch.mpkg.zip && sudo chmod 777 prey-0.6.0-mac-batch.mpkg && API_KEY="PUT_IN_YOUR_OWN_API_KEY" sudo -E installer -pkg /Library/Application\ Support/prey-0.6.0-mac-batch.mpkg -target /
{% endhighlight %}

You can also check out the instructions on how to remotely deploy Prey here.

https://support.preyproject.com/kb/installation/how-to-deploy-prey-in-batch-mode-mac-os

If you decide to go with Undercover Mac, you would use their deployment method which requires you to add a [post install step in the installer to trigger the actual registration.][8] 

Disk image deployment  

1. Run the Undercover (Automated) installer when creating your disk image. This will install the required Undercover binaries, but will not register the Mac with Undercover!

2. Each time the disk image is deployed on a Mac, Undercover has to register the Mac. Therefore, you should include the registration command in a post-deployment script, or execute it manually 

for each Mac: /usr/local/uc/bin/tools/uc-registration -s YOUR\_SERIAL\_NUMBER

Hopefully this gives you something to think about. I would love to hear about your experiences and get your feedback on theft recovery software in the comments below!



 [1]: https://www.icloud.com
 [2]: https://lojack.absolute.com
 [3]: https://www.absolute.com/en/products/absolute-computrace
 [4]: https://orbicule.com/undercover/mac/
 [5]: https://preyproject.com
 [6]: https://code.google.com/p/munki/
 [7]: https://www.jamfsoftware.com/products/casper-suite/
 [8]: /blog/10-9-deploying-appstore-packages/ "10.9 Deploying Mac App Store Packages"
