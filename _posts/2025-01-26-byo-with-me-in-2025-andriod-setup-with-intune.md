---
layout: post
date: '2025-01-26'
author: Jon Brown
permalink: /blog/2025-01-26-byo-with-me-in-2025-andriod-setup-with-intune/
published: true
title: "Managing Bring Your Own Device (BYOD) for Android with Microsoft Intune"
description: "BYO with me in 2025: Learn how to effectively manage Android devices in a BYOD environment using Microsoft Intune, ensuring security and compliance for your organization."
blogimgpath: 20240803664Up
tags:
categories:
  - cybersecurity
  - tips
  - tutorials
image: /assets/images/covers/2025/BYOD on Andriod Devices.png
thumbnail: /assets/images/covers/2025/BYOD on Andriod Devices.png
cta: 2
comments: true
---
## BYOD For Android using Microsoft Intune

Alright, so today we're going to be talking about the management of bring your own device BYOD for Android devices. There's a lot of information out there for the management of iOS devices and you can do that with pretty much any Apple MDM on the market. We just happen to use Jamf where I work, but you could use anything from Braavos to SimpleMDM to Kanji or JumpCloud. Mosyle is also a great option. 

Lots of really great solutions and lots of really great information out there. [I've even written a blog](https://jonbrown.org/blog/byo-with-me-in-2025-for-mac-ios-andriod-and-windows/) and I'll put a link [here](https://jonbrown.org/blog/byo-with-me-in-2025-for-mac-ios-andriod-and-windows/) where you can get more information about user enrollment with iOS devices or Apple based devices. So lots of great information there, but not a lot of great information in terms of how do you manage Android devices.

## Cant you manage devices with Google Workspace?

If you are a Google subscriber, you use Google Workspace, with that you already have the ability to manage devices directly within your Google Workspace account. In this post we're not going to talk about that we're going to focus on how we manage Android devices with Microsoft Intune.

## If your already using O365 there is a solution

Within the Office 365 ecosystem, you have many things, maybe you have email through that platform, or you leverage OneDrive or Sharepoint. Many organizations use Microsoft Teams. Maybe you use Azure. In that case you are likely already using Intune to manage your Windows fleet. So how do we use, or how do we leverage the Intune ecosystem for the management of bring your own device for Android devices?

Well, it's really Something that I think Microsoft has done well is they've partnered with Google and the integration with the Google Play ecosystem and allowed a lot of really  great interactions between the Google sphere, Android and the management of devices. So I'm just going to walk you through this article online that talks a little bit about how to integrate these two systems.

---

## Part 1: Connect Intune to Google Play Enterprise

So first thing that you're going to need is you're going to need an Office 365 account. You're going to need to be an administrator. You're going to need to have access to create a administrator account on the Google Play ecosystem. So I'm going to go ahead and you can see I'm logged into my Office 365 ecosystem.

You can see here that I am signed in with my little Playground account here over at Breedlabs. And I am logged into the Microsoft 365 admin center. So what I need to do is I need to go to Microsoft Intune. And I'm going to go ahead and just sign in with my account. And we also need to sign into Azure as well.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/2.png" class="img-fluid rounded m-2" width="700" />

So we're going to be talking about the concept of managing devices, but also we're going to be talking about the concept of doing so with a zero trust mindset. So in the article, it basically says, the first thing you have to do is go to the Intune admin center, go to devices and enrollment, and then click on the Android tab.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/1.png" class="img-fluid rounded m-2" width="700" />

So we're going to go ahead and do that and click on devices. We're going to go to Android and within this environment, we can see we have an enrollment tab. So the very first thing, the prerequisite is we need to connect this to a manage Google play accounts. I do not have one of those accounts, so I am going to go ahead and do that.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/3.png" class="img-fluid rounded m-2" width="700" />

I'm going to click on, I agree. And then we click on launch Google to connect. Now, now it's going to pop up an option here. I'm going to go ahead and, and just kind of follow these prompts. I'm going to sign in. With my Microsoft account, I'm going to consent and accept. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/4.png" class="img-fluid rounded m-2" width="700" />

All we need is this Android enterprise subscription and it's free as you can see and I agree and allow and create account. I'm setting this up with my Microsoft account through Google and I'm essentially authorizing the Microsoft Intune ecosystem to manage applications that are enrolled with my company information.

We need to think about BYOD very holistically. So not only do we want to make sure that if we are offering a BYOD program, we're doing it for people who have Android devices and Apple devices, people who have Windows devices and Apple devices. So any kind of device that someone could bring to, into your work ecosystem.

You have to have a way of managing that and you have to have rules set up for how you want to interact with them or how do you want to manage them. Okay. So now that I have this set up, we are essentially going to be configuring the personally owned devices with work profile. 

---

## Part 2: Configuration of Microsoft Intune

Now we're going to set up some configurations. So we want to create the baseline standard of security for our,

there we go. For our managed bring your own device. So I am going to go with Android Enterprise and we're going to click, we're going to stick with these personally owned work profile. So we only want to restrict settings specifically within the context of the work profile. So Android is great because it creates an actual separation between personal and work on the end user's device. 

So we're not actually managing the information on the personal side of the device. We are managing the settings and elements on the work profile. So, I'm going to go ahead and just click on device restrictions. And we're going to set up some common Bring your own device Android restrictions.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/5.png" class="img-fluid rounded m-2" width="700" />

So we're not going to do a lot of restrictions, but we want to make sure that we are blocking, cutting and pasting between the work and personal profiles. And that is a device that's a default. That's all on the moment you create this profile. We don't want to, We're just going to select device default where it says data and sharing between work and personal profiles.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/6.png" class="img-fluid rounded m-2" width="700" />

Work profile notifications while device are locked. We're going to go ahead and block that default app permissions. We're going to keep those standard screen capture. We're going to block, we're going to allow sharing via Bluetooth because we have found that if you turn this off Connections between Bluetooth keyboards and headphones can be disrupted.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/7.png" class="img-fluid rounded m-2" width="700" />

Display work, contact, caller ID, and personal profile. We're going to block that. We're going to allow the use of the camera and we're going to keep all of these other items as default for all the Android devices. We're going to require a passcode specifically for the work ecosystem. And we are going to have the phone lock after one minute of inactivity.

We're going to require threat scan on apps and we're going to make sure that we prevent installation of unknown sources in the personal profile. We don't have an always on VPN. We're not going to enable lockdown mode. And that, that's it. We're going to go ahead and just scope this to all devices. If you were setting this up in your ecosystem, I would highly recommend scoping this to a specific group.

In fact, let's just go ahead and go through the process of creating a group. So we're in Entra. If I go to groups, all groups, I'm actually just going to do it. I'm going to create a new group And I'm going to call it Android BYOD. 

No users, no devices assigned just yet. I'm going to add a group. Android BYOD, there it is. Next, create. Alright, so now we have a configuration. I'm going to go ahead and just create a couple more.


---

## Part 3: Time for Device Compliance

So I think a lot of people get compliance and configuration Confused because they think well, I'm going to create a compliance Profile and that compliance profile is going to enforce Security settings no compliance In this context is reporting on the state of settings that you define as the compliant level, if the device has that setting, then it will be marked as compliant. So we're going to go ahead and do that now. So I'm going to click on compliance and we see here that we already have a default compliance policy. 

I click on properties and I click on edit. I can edit. the compliance settings and I can see what options we have here.

So I can set this to say, I want this device to have a low require this device to be at or under the low machine risk score devices managed with the device with device administrator rooted devices block. Google Play Protect is configured. We want that, we want that, we want that. Remember, we just set these as configuration properties.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/8.png" class="img-fluid rounded m-2" width="700" />

I'm not gonna set the minimum OS version just yet. I do want the device to be re encrypted. I do wanna block apps from unknown sources. We do wanna require  this. And I'm gonna leave everything else. the default. Require a password? Yes, require. Now I'm going to save these policies. Now I have my compliance profile, which is outlining what I am requiring the device to be at in terms of configurations or settings for the device to be marked as compliant.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/9.png" class="img-fluid rounded m-2" width="700" />


---

## Part 4: Conditional Access Policies in Azure

Within Conditional Access, we're going to set up a few policies. So a few conditions that people must follow when they interact with your Office 365 ecosystem. So if we click up here, we can see that we have several policy templates. I love these because we can actually set up our entire program with a few clicks. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/10.png" class="img-fluid rounded m-2" width="700" />

So we want to require multifactor authentication for admins. We definitely want to do that. So I'm going to go ahead and click on review and create. And I'm just going to put this in a report only for now. Report only means that it's not going to enforce the condition yet until we get more information about how it might be operating within our ecosystem.

Next thing we're going to do is we're going to require MDM enrolled and compliant device to access cloud apps. So this is, otherwise known as zero trust. 

We're talking about Android in this blog. I'm going to just select me as the person who it's targeting so that I can test this before applying it to everybody. Let's click on target resources. So we're basically saying all cloud apps.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/11.png" class="img-fluid rounded m-2" width="700" />

Now I have seen some issues that if you use single sign on, which is something that's highly recommended if you're going to be setting up a zero trust network. But if you use Office 365 for single sign on let's say for Box. com and you are blocking access to Box. com for authentication using Office 365 and it would fall under the umbrella of all resources and it could be kind of a catch 22.

All right, so now I've got my target resources. Now what I need to do, if I wanted to specifically set up this policy just for a specific device platform, I could do that by pressing configure, and I can select just Android, but I don't want to, I want this to apply to all devices. So we're gonna go ahead and keep that as not configured.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/12.png" class="img-fluid rounded m-2" width="700" />

And finally, where it says Grant. We have to make sure that the device is marked as compliant. So I'm going to go ahead and press select. I'm going to turn this on and I am going to say security defaults must be disabled to enable conditional access policy.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/13.png" class="img-fluid rounded m-2" width="700" />
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/14.png" class="img-fluid rounded m-2" width="700" />

---

## Part 5: App Configuration for Android and Google Play

Alright, so now I have that conditional access policy in place. And I am good to go. So now I have my Android environment. I have my conditions set up. The final thing I need to do is have a few of my work apps installed on my Android device. When the device is enrolled.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/15.png" class="img-fluid rounded m-2" width="700" />

And you can see here that there's four tools or, or apps that are added for me, but I have not yet assigned them. So I'm going to go ahead and do that. I'm going to click on the properties and we have to set up an assignment. I'm going to add a group and I'm going to scope this to the Android BYOD group.

I'm going to add two more apps. I'm going to click on manage Google play app and select and we are going to add the Google Chrome app. So you select it, you click select, and then you press sync. Not super intuitive, but now it's going to sync over. I'm going to add one more app.

And I am going to go ahead and add Dropbox, select and sync. So these two apps will show up here once they've synchronized into my ecosystem. Again, this is that connection that we created with our Google Play Enterprise account and the connection in with Intune. So there is Google Chrome. It comes in on a sign.

So I'm going to go ahead and assign it to all members of the BYOD group.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/16.png" class="img-fluid rounded m-2" width="700" />

And then I am going to refresh until we see Dropbox in the list here. And there it is. And we're going to assign that also to the BYOD group. All right. So now we have our entire ecosystem set up. We have it set up where if I'm an Android user and I want to access a company resource, I have to enroll my device.

---

## Part 6: Test the Enrollment Process

So now we need to test this out and make sure that it works. Good news is it should work. Bad news is I don't actually have an Android device. I have only Apple devices. So in that, Situation. What do I do? Well, the easiest way to handle this is to open up Android Studio. Android Studio is a open source or a free developer tool that Google Android has put out there.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/17.png" class="img-fluid rounded m-2" width="700" />

We already have this installed. So I'm gonna go ahead and just open it up Android studio So here it is and I'm going to create a new project File new project and the installation by the way of Android studio Is very simple once you once it downloads you drag it into your applications folder If you're on a Mac double click the installer if you're on Windows, then And you're presented with this sort of like splash screen and the ability to create a project.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/18.png" class="img-fluid rounded m-2" width="700" />

So whenever I'm just trying to test something on a virtualized device inside of Android Studio, I always just click empty activity because I'm not actually creating an app. And I'm just going to call it BYOD test and press finish. So now that I have my Android Studio ecosystem. I can go to tools up here in the menu bar and I can go to device manager and that brings over my device manager and I have the ability to create a virtual device.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/19.png" class="img-fluid rounded m-2" width="700" />

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/20.png" class="img-fluid rounded m-2" width="700" />

Now we need to make sure that we pick a device that's new enough. And also has the Google Play Store pre installed. So you see how we have this column that says Play Store, and we see this icon, the Google Play icon, indicating that, in fact, it does have Google Play pre installed. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/21.png" class="img-fluid rounded m-2" width="700" />

If I press Next, it'll ask me to confirm the operating system that I want, and you need to make sure, again, confirm that it has in brackets, Google Play, because if it doesn't have the Google Play app pre installed, then you're going to have to start over again as we need to install the company portal app in order to manage the device.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/22.png" class="img-fluid rounded m-2" width="700" />

I'm going to click on finish and here is my device here. So I'm going to go ahead and just start this device. I'm just going to make this a little bit bigger so that it's easier to see the device. So, it's connecting to the emulator, it's booting up the Android phone.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/23.png" class="img-fluid rounded m-2" width="700" />
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/24.png" class="img-fluid rounded m-2" width="700" />
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/25.png" class="img-fluid rounded m-2" width="700" />

And it's going to automatically put me into a, a mode here where I need to sign in to personalize the device. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/26.png" class="img-fluid rounded m-2" width="400" />

Now first thing you have to do is you have to go into the settings on the phone and you need to make sure that the SIM card has mobile data turned off. This in the emulator causes some disruption in terms of the bridged internet connection that you're sharing with your Mac or PC to the phone itself.

So I just turned that off and get rid of that. All right. Next step is to sign in with the Google play store. So it's going to check your accounting your check your device. for eligibility and then you have to sign in. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/27.png" class="img-fluid rounded m-2" width="400" />

So we're going to just click through all these and search for company portal. There it is. And we're going to install it.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/28.png" class="img-fluid rounded m-2" width="700" />
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/29.png" class="img-fluid rounded m-2" width="700" />

Once we have this app installed, it's going to allow us to create a work profile. Here are the things that it can what the MDM can do. Here's what the company might see.

And then it's going to go ahead and facilitate the creation of that work profile environment on the device. We're going to accept and configure accepting, continue work apps, as explained here are being separated from personal apps and it's setting up the work profile now.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/30.png" class="img-fluid rounded m-2" width="400" />

And we next company portal is going to validate everything and it's going to activate the work profile. We're going to continue that process and it is now registering the device. It's adding the device to the company portal, which means that if I go back to Intune here, we should eventually see Our new device show up in the platform

So this is the device. And we're just going to check to see if it is compliant. Now remember the settings and compliance not going to trigger until we put this device in the group that we created. So if we go back into our group area and we look at our BYOD group, we need to make sure that we are adding that member.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/31.png" class="img-fluid rounded m-2" width="400" />

It's going to apply those security standards, and it's going to install. those two work apps that we told it to install. So Chrome and Dropbox.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/33.png" class="img-fluid rounded m-2" width="400" />
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2025/20240803664Up/32.png" class="img-fluid rounded m-2" width="400" />

We can see that they are pending installation status and if I go back to the company portal app and now click on get apps. I should eventually see applications installing here and we can see that they are in queue and we can see that the device configuration is being applied and it can say it says here that it can take up to 20 minutes for this to all propagate down.

The whole point of this being that yes, it can take some time, but now at least you have a way for it that you can test what the actual experience is like for people who have Android devices. So we have our work profile, we have our personal profile and now we can access specific company resources.

{% include videos/video.html id="vS4URcQEhLs" header="/images/covers/2025/BYOD on Andriod Devices.png" %}


### Sources

- [Andriod Studio](https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQiA19e8BhCVARIsALpFMgGBFq3J18d0ip7L2Ls1w5Zo_9UnOwD3ZF8QwLnl3HoRMvUAsGlaTYsaAhOvEALw_wcB&gclsrc=aw.ds)
- [Connect your Intune account to your managed Google Play account](https://learn.microsoft.com/en-us/mem/intune/enrollment/connect-intune-android-enterprise)
- [Device staging overview](https://learn.microsoft.com/en-us/mem/intune/enrollment/device-staging-overview)
- [Set up enrollment of Android Enterprise personally owned work profile devices](https://learn.microsoft.com/en-us/mem/intune/enrollment/android-work-profile-enroll)