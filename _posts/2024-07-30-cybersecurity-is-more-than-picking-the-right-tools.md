---
layout: post
date: '2024-07-30'
author: Jon Brown
permalink: /blog/cybersecurity-is-more-than-picking-the-right-tools/
published: true
title: "Cybersecurity is more than having the right tools"
description: "Cybersecurity is more than having the right tools"
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
### What is Cybersecurity?

Cybersecurity is the convergence of people, processes and technology that come together to protect organizations. 

Notice that technology is the last part here. 

People, that's you and I. We’re first. 

Without us, there is no cybersecurity. 

We are the first line of defense. 

We tend to forget that. 

I don’t why we forget that but as systems administrators we do. 

Processes, cybersecurity is 99% documentation, writing, that's what it is, if you do not like writing policies and procedures, and enforcing them and potentially making enemies with your coworkers…

then do not get into cybersecurity. 

Finally technology. 

Technology can do amazing things to help automate and make our lives better 

but let's be clear

Most cybersecurity technology is being used on the defense 

What we need however are more amazing people to develop great technology for use on the offense as well. 

This is a very high level view of cybersecurity. 

### CIA Triad

At its core, cybersecurity centers around confidentiality, integrity and availability typically of data or information. 

Citing this from the [Microsoft Cybersecurity 101 Github page](https://github.com/microsoft/Security-101/blob/main/1.1%20The%20CIA%20triad%20and%20other%20key%20concepts.md).

Confidentiality is the process of protecting data and information from unauthorized access attempts 

For example only people who need to see information are able to access it. 

That's Access Control and Permissions of systems that you administer. 

Integrity refers to protecting the accuracy and trustworthiness of data contained within environments and not allowing the data to be altered or amended by unauthorized individuals. 

For example not allowing a student to alter their date of birth on their driving record at the DMV to make themselves older so they can get their license reprinted with an earlier date of birth to buy alcohol. 

Another way to look at this from a systems administration perspective is encryption and file hash verification.  

There are specific types of attacks that target availability that security professionals must protect against 

For example distributed denial of service attacks or DDOS attacks

Another way to look at availability is server uptime or cloud system uptime. 

Were getting more focused now. 

But still were not getting any tangible guidelines on how to do any of these things related to cybersecurity. 

### So what makes up cybersecurity?

Here’s where we get the sets of directions in the sense. 

Here’s how I like to think about it. 

Different organizations, companies, and government agencies, created frameworks, laws and technology platforms that set forth certain guidelines for certain sectors to apply a baseline compliance to their organization and tools that allow them to do their jobs in a secure manner and laws for securing the data that flows through them that protects the privacy of the users that use them. 

That's a very simplistic way to think about it but we only have an hour roughly so I have to keep it simple. 

There are many frameworks the ones on this slide are 

SOC2 you would need this if you make cloud software or if you have software that has data hosted in the cloud. 

NIST CSF (CSF stands for Cyber Security Framework) a voluntary cybersecurity framework created for any business to adopt, there are offshoots of this that we will go into later in the presentation. 

PCI DSS a financial framework to protect credit card data if you store credit card data you need to follow this framework, 

ISO 27001 mostly required if you are an international organization its a very robust global framework, and 

HITRUST a very robust and more comprehensive set of cybersecurity controls similar to NIST but more complete and expansive. 

Security is its own layer, as you can see here there are lots of security types and each of them are robust in their own right and each of them have in may cases their own set of tooling, their own experts in their own field their own sets of certifications and their own requirements based on industry sectors. 

Finally laws. 

As you can see HIPAA, GDPR, CCPA these are Laws, or Acts passed by Federal or State legislatures and not frameworks. 

While they have language in them with guidance 

the language is not specific and is very broad 

which is why in many cases when organizations look to seek compliance with these laws they sometimes look at multiple frameworks that cross off all the requirements of the HIPAA law

For example this is typically called cross walking a framework. 


### So putting it all together 

Lets say a non profit organization that is based in San Francisco and has offices in Washington DC, and in Brussels 

With site to site VPN’s to each office and has all of their systems in the cloud to keep things simple 

What would the recommended cybersecurity program be for that kind of organization?

I would say in terms of very basic prescriptive cybersecurity program, 

based on what we saw on the last slide I would say. 

Framework’s would be: Likely NIST CSF and PCI if they accept and store credit cards locally let's assume they might since they may accept small donations who knows. 

Security:  They likely have Infrastructure, Cloud, Network, Organizational, Information, End-User Behavior, Access Control, Application, Encryption, End User Education, Disaster Recovery

Laws: In terms of Laws we need to follow CCPA, and GDPR  since they are HQ’d in California and have offices in the EU. 

Now we have the roughed in idea for what we need in terms of the “Program” that we have to follow, but you may need to dig deeper. 

Remember, People, Processes and Technology.  

When thinking about cybersecurity it's important to understand that each company is different so a one size fits all approach is never going to work. 

And that brings us to the tools. 


### Watch the entire presentation


{% include videos/video.html id="Lo2gyR1cRS0" header="/images/covers/2024/Header-Conference.png" %}