---
layout: post
date: '2024-07-30'
author: Jon Brown
permalink: /blog/cybersecurity-is-more-than-picking-the-right-tools/
published: true
title: "Cybersecurity is more than having the right tools"
description: "Cybersecurity is more than having the right tools"
blogimgpath: 20240731Up
tags:
  - MacOS
  - iOS
categories:
  - tips
  - press
  - video
image: /assets/images/covers/2024/Header-Conference.png
thumbnail: /assets/images/covers/2024/Header-Conference.png
cta: 2
comments: true
---
### What is Cybersecurity?

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 2.png" class="img-fluid rounded m-2" width="800" />

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

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 3.png" class="img-fluid rounded m-2" width="800" />

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

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 4.png" class="img-fluid rounded m-2" width="800" />

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

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 5.png" class="img-fluid rounded m-2" width="800" />

There is a great article in Wirecutter that you can get to in this slide’s QR Code that I highly recommend checking out: 
[https://www.nytimes.com/wirecutter/blog/state-of-privacy-laws-in-us/](https://www.nytimes.com/wirecutter/blog/state-of-privacy-laws-in-us/)
[https://www.itgovernanceusa.com/data-breach-notification-laws](https://www.itgovernanceusa.com/data-breach-notification-laws)

That talks about the US’s state privacy laws we have over 54 of them. Which again makes cybersecurity even more complex depending on which region you happen to be operating in. 

The NY Times also has a great article on the state of privacy laws in the USA. 

If you're looking for more information these websites are invaluable resources. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 6.png" class="img-fluid rounded m-2" width="800" />

The fact is, 

that laws in the USA are so regional 

it makes fully understanding how to respond to an cybersecurity event from a legal perspective a complex endeavor

 which is why most organizations have legal counsel to advise them on such matters. 

While that's typically the case, it's still up to the cybersecurity professional, 

or in some cases the IT professional, 

to be aware of the local laws and their organizations responsibilities for their industry or sector. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 7.png" class="img-fluid rounded m-2" width="800" />

I am quoting the article here:

“Currently, three states in the US have three different comprehensive consumer privacy laws: California (CCPA and its amendment, CPRA), Virginia (VCDPA), and Colorado (ColoPA). Regardless of which state a company is located in, the rights the laws provide apply only to people who live in these states.”

The map here shows as of 2021 the US State Privacy Legislation tracker. 

Again this is all just to highlight how regional and how complex cybersecurity is in terms of compliance with cyber law, and privacy law. 

Remember this ties back to the core principle that we talked about before in the CIA triad confidentiality or Privacy. 


### So putting it all together 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 8.png" class="img-fluid rounded m-2" width="800" />

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

### Look at all these tools. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 9.png" class="img-fluid rounded m-2" width="800" />

It's super easy to get sucked into a world where you get so focused on the tool. 

I mean just look at all these tools up here. 

Its super easy to be focused on the tools that you use to do your jobs that you fail to see past them. 

In fact in 1989 in an interview Steve Jobs himself was quoted as saying 

“I think humans are basically tool builders, and the computer is the most remarkable tool we've ever built.” 

were here at the MacAdmins conference because we love the Mac and we love how it amplifies and enables the work that the people we support do every day. 

That last bit there, I think… is also a quote by Steve as well. 

However when it comes to cybersecurity because there are so many moving parts I think it's really risky to think about it starting with the tools. 

I think rather it's more important to think about it as a system and understand why the tools exist and then better understand if you really need them for your organization. 

Just because there are tools out there does not mean that you need ALL of them. 

Your companies Compliance requirements, Security needs and obligation to Cyber Law will be different from other organizations. 

If your a non profit for example then your situation will be far different from a company in Manhattan on wall street for example. 

Not just in compliance but in regulatory needs but security needs as well. 

### Business Strategies

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 10.png" class="img-fluid rounded m-2" width="800" />

When I first came on board at Montage Marketing Group what was clear was that they needed a set of strategies that would guide them and not just technical strategies, but business level strategies. 

Luckily for me I have some business experience in that space, 

I ran a company for 10 years and during that time I had experience building out departments and learning how to navigate approval processes. 

Since I was essentially being tasked with building a new department from scratch that's where I knew I had to start. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 11.png" class="img-fluid rounded m-2" width="800" />

Now Montage Marketing had been around for a while, about 10 years and had been supported mostly by MSP contractors until I was hired. 

Part of my job was to evaluate the current MSP provider. Their role was IT Helpdesk, Managed Cybersecurity and Managed IT. 

I am going to walk you through the strategy in the next few slides that I created for them 

the process I created which worked for me is a cyclical one, and it could work for you as well. 

It starts with creating a strategy, and going through a strategic approval process. 

For me that strategy was just writing down what I wanted to accomplish in the first 1 year based on the goals they put before me, then that naturally fed into a budgeting process that I went through to pick the tools that I ultimately selected to support the security and compliance efforts for the organization and the rationalization for those decisions. 

That led to a formal vendor review process that I built out and then a tool selection process, and a tool approval and implementation process which of course full circle fed back into the strategy and strategy approval loop. 

Notice that I started with building the strategy and then after it was approved, then I put together a budget for the tools needed to follow through on the strategy. 

The budget was created for an allotment of funds for non specific tooling, meaning I put in the budget what I need for a backup solution, or what I needed for an MDM solution, and later in the process cycle I took the approved bucket of funds and shopped for a solution within that approved funded allotment. 

What I have found is

When you ask for money your asking for funds for the solution not the specific tool 

Selecting the tool comes later in the process. 

Many times I think JR administrators miss this point 

they approach their managers and they ask for a tool first, and they have nothing solid to back it up with. 

When you present a strategy first, 

an idea, 

a methodology 

to do something that benefits the organization 

and then you ask for the tools to support those efforts

your more likely to get what your asking for, which in this case I did. 

The vendor review process is also very important, for every budgeted item you need you should get three proposals, 

This is critical 

competition and proper evaluation is key in cybersecurity. 

By getting three vendor options you always are able to present a  good, better, best scenario using a needs assessment matrix. 

The matrix in this case allowed me to rank the needs of the organization for the tool along one edge and then rank the features of the tools along the other edge 

Once complete, it's super easy to make the most educated decision. 

Our policy was to also make sure we only ever signed 1 year agreements

In addition we did vendor background checks or security reviews against all vendors which of course is a security requirement. 

Now this business strategy has to be cyclical because after the tool is approved and implemented we tied that back into the strategy by updating the policies, and procedures which then flows back into next years budgeting process which forces us to review our tool stack each year which forces us to review our vendors each year and if needed go through a toolset needs evaluation, a new evaluation cycle then kicks off and so on and so forth. 

Each year the strategy evolves as the needs of the organization changes. 

### Cybersecurity Strategies

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 12.png" class="img-fluid rounded m-2" width="800" />

Next I had to come up with some cybersecurity strategies. 

In order to decide what kind of strategies to deploy I had to understand the organization's requirements.

Fully understanding an organization's requirements means listening and asking questions.  

When I first came on board I sat down with each department head and asked them about their needs, and challenges as it pertained to their ability to meet their contractual and client based obligations. 

Those first key interviews were important in helping me assess some underlying requirements that the organization needed. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 13.png" class="img-fluid rounded m-2" width="800" />

So what were the needs of the organization. 

When I came in during my interview they told me they were required to be CMMC and FISMA compliant. 

It was pretty clear right away exactly which cyber laws they needed to be compliant with and which frameworks they needed to be matched up with 

but in terms of their technology stack that was very much in flux and needed to be evaluated. As you can see here on this slide they had a little bit of everything in their environment. A need for disaster recovery, access control, information management, cloud management, infrastructure management, user education, encryption, an application and network layer as well that all needed to be evaluated for overall security posturing. 

Their requirements were NIST 800-53, CMMC or NIST 800-171. As you can see on this slide that means the implementation of over 400 individual controls. Most of the controls outlined on this slide are not technical controls but policy, and procedural controls. 

In addition to these framework level domains and controls of course you have to secure the systems and each of those have their own hardening checklists of controls so essentially there are thousands of things to do across multiple platforms. 

In order to get started I had to implement a strategy

now that I had a good business strategy in place I had to implement a good cybersecurity strategy, but where to get started?

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 14.png" class="img-fluid rounded m-2" width="800" />

Luckily for us NIST has a guide that provides a pretty great step by step strategy for how to implement a baseline overview plan for implementing a cybersecurity program. Now this is from the NIST Commericial guidelines for their Commerical Facilites Sector so depending on your sector your guidance may be slightly different. NIST has guidance on a variety of different sectors and they outline common strategies within their documentation to help you get started. 

NIST provides a template or a baseline of what you need to get started so let's take a look at what we have here. 

Step 1. Prioritize and scope. Identify Business Mission Objectives

What does this mean, it means to sit down and identify all the items that are mission critical for your company and rate them and rank them in order of importance and risk. 

Step 2: Orient: Identify the systems, assets, requirements, and risk management approaches

Here we are setting the requirements for the different systems and approaches we are going to take so how will we harden our systems, which tools will we use for evaluation etc. 

Step 3: Create Current Profile: Map current cybersecurity and risk management practices to a framework implementation tier

Here we are creating a risk register typically writing down our risk management practices

Step 4: Conduct a Risk Assessment: Identify Risks

Here were conducting an actual risk assessment. NIST has a great guide on how to conduct a risk assessment if you’ve never done this. 

Step 5: Create a Target Profile: Describe desired cybersecurity outcomes

Here were doing just what it says describing our desired outcomes 

Step 6: Determine, Analyze, and prioritize Gaps

Here were looking at the things were not doing well on and analysing them 

Step 7: Implement an Action Plan

Finally were creating plans for those items. 

Now again your noticing a trend, cybersecurity is cyclical these steps repeat they do not end at step seven they cycle in on themselves each year you want to monitor and reassess. This is the out of the box cybersecurity strategy that you can implement directly from NIST. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 15.png" class="img-fluid rounded m-2" width="800" />

Ok so using this as the core of my strategy, what was I trying to accomplish in my first year and what was my plan. 

My goal was to create a cyclical strategy, 

similar to NIST, 

that I could improve upon year after year. 

I knew that at the core I had some requirements but 

I also knew that the owners of the company wanted to see a document that conveyed vision more than hard technical information, 

after all this was a strategic plan not a technical roadmap. 

My 2 goals were defined pretty simply Goal #1 as outlined on this slide was to

Build out a compliance strategy. 

The vision was

To build an internal compliance program for the needs of the organization to meet its security posture and compliance goals of CMMC 2.0 Level 2 and NIST 800-53 Low baseline

The document I created outlined how I would create policies, and procedures and a process by which the owners would review and sign off on them every 2 weeks. 

The next step was the implementation of a system security plan, which is the evolving document that is updated as you implement policies and systems at your organization. It’s the document that shows how you are securing the systems at your company. 

Then I outlined how I would create and implement a business impact analysis. The business impact analysis analyzes the operational and financial impacts of a business disruption and is a NIST 800-53 requirement. 

Next step was to undergo a formal risk assessment so that became a critical part of the overall compliance strategy. 

Finally for year one I ended with a disaster recovery plan. 

Now there are a lot of other things that I could have and should have included but these were the things that I knew I could accomplish in my first year and again these are things that are cyclical and things that I can improve on. 

At the core of these items I created a security team or a steering committee to guide the organization which consisted of my COO, CEO and myself to ensure that we were in consistent sync. 


### Multiple Strategies

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 16.png" class="img-fluid rounded m-2" width="800" />

Now I had a strategy but there was a twist I still had to account for NIST 800-171 or CMMC which is an audit readiness framework so that required me to have an additional strategy. 

This means that eventually we need to be able to pass an actual audit for compliance against this framework which is a Department of Defense requirement. 

Luckily CMMC Awesomeness a website that has created an amazing off the shelf CMMC strategy, 

has also created an equally amazing flow chart for the implementation of CMMC. 

If your working on CMMC or implementing NIST 800-171 or if your organization is handling CUI in any way I highly recommend the CMMC Awesomeness.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 17.png" class="img-fluid rounded m-2" width="800" />

Im merely sharing this flowchart to illustrate the overlap in strategic thinking that we have in the NIST framework. 

As you can see its very similar afer all CMMC is in essence NIST 800-171 

however this is specific to requirements set by the DOD so step 2 is establishing a scope or an assessment boundary,

This is key, because with CMMC the only thing that is audited are items within the scope of your assessment boundary you can control exactly how broad and narrow your scope is. 

You determine your organizations scope for CMMC by how CUI or Controlled Unclassified Information flows between systems at your company 

This is a classification of data that the DOD categorizes for you contractually. These data flows will help you determine exactly what is in scope and what is not in scope

What systems are in scope and what users are in scope and by doing so the goal is to narrow in on exactly the least or smallest assessment scope possible. 

 and step three is documenting the environment, 

NIST 800-171 is very heavily focused on documentation, technical, process and procedural documentation auditors will want to match up what you do in reality with what you actually historically did to ensure that its all in alignment. 

So as you can see this strategy is already a little different 

and because of that my goals had to shift slightly. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 18.png" class="img-fluid rounded m-2" width="800" />


Step 4 as sheen here we had to implement a network architecture diagram 

Again your seeing more documentation. 

A network architecture diagram is not something new and most organizations have this or have systems that can generate this. Unifi, Meraki most systems these days have network visualization capabilities and all we need really is to show how the network flows data from workstation to cloud based systems. 

and then step 5 plan, identify gaps and prioritize resources 

You’ve probably heard the term “Gap Assessment” this is where that typically comes into play. A gap analysis or assessment is part of the cybersecurity strategic process and again as you find issues you document them into documents call Plan of actions and Milestones and these are planned for remediation. 

Were seeing some overlap in the generic NIST planning strategy a little bit. 

Notice that in the CMMC they are requiring a budget which is something I included in my business strategy so now we're seeing how interconnected some of these strategies are. 

A budget in cybersecurity terms is important as it shows your organization's commitment to funding your overall security program which is a key component of any successful security program. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 19.png" class="img-fluid rounded m-2" width="800" />

Now we're developing processes and procedures,

In my original strategy this is where my policy review cadence comes into play

 and finally implementing a risk management program. 

A risk management program in terms of this overall strategic plan is a process of identifying risks typically by doing a risk assessment which starts by filling out a risk register 

A risk register in cybersecurity terms is a list of cyber events and the likelihood that you could recover from that event and then coming up with mitigating controls or actions to reduce your organizations overall risk. 

A good example of this would be if your company has a server that has sensitive data that needs to be online then you may want to ensure that there are redundant hard drives and maybe even redundant ISP’s on site where that server is located.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 20.png" class="img-fluid rounded m-2" width="800" />

Finally were implementing incident response capabilities 

For us having a robust incident response plan was a critical part of our process. 

Not only did we have a document that outlined our plan for how we would respond to an incident but we also had an incident log where we would log our incidents and ultimately implemented a system to scan and evaluate our logs a SEIM / SOC solution to ensure that we were being notified of any issues with any of our platforms. 

For those of you who are not aware of what a SEIM tool (Security information and event management) is a its a tool that typically integrates with your typically cloud providers or desktops over an API connection that collects and aggregates your system logs into a centralized repository. Once all the logs are into a centralized place they can be reviewed, enriched and managed by a SOC (Security Operations Center) and they are staffed by Security Analysts and they review the logs and look for events that you may need to be aware of or should be flagged as suspicious. 

This is all part of situational awareness and incident response. You need to be aware of what's going on in your environment and have a plan to respond. There are many open source SEIM tools but most SOC centers are paid for services. 

So as you can see these requirements are going to dictate the kinds of tooling that we needed 

which is a great segue into security strategies. 

### Security Strategies

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 21.png" class="img-fluid rounded m-2" width="800" />

For security strategies I had to come up with a plan to ensure that as a team of 1 that I had the ability to keep our systems safe and secure and this is where I feel tools are actually really important. 

Tools are really the heartbeat of the security area however without all the strategic thinking we just went through, all the tools we are about to talk about really could be implemented poorly or not utilized correctly. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 22.png" class="img-fluid rounded m-2" width="800" />

Goal #2 was security. 

On this goal, again following my cyclical nature my ultimate goal was to develop my own internal IT Team, or Security Department. 

But for my first year the goal was to do a security review and audit of all the systems at the organization. 

Of course this led to an organic stage where I would have to report on my findings, 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/IMG_0063.jpeg" class="img-fluid rounded m-2" width="800" />

and again that led naturally to a network security review, a security review of Azure and Office 365, our Windows workstations, macOS workstations, and all of our other platforms. 

Each system had to be reviewed against security baselines and compliance guidelines 

Then for each platform I had to come up with strategic technical project plan for implementing those requirements. I’ll be going through a few of these in the next few slides. 

The next step or phase was to create a maintenance and monitoring program for ensuring that those systems stay secure over time and then a plan for remediation

So that's of course vulnerability management and patch management, the things we're here to learn about at macAdmins 

The overall strategy that we employed here was one of lets utilize all the capabilities of the tools that we had already to ensure that were maximizing the security capabilities of what we already had before going out and buying new tools. 

This meant that we needed to evaluate the capabilities of our tools to ensure that the tools that we had actually still worked well for the needs of the company. 

Remember I came in and inherited many of the security platforms and tools so an evaluation still needed to happen. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 23.png" class="img-fluid rounded m-2" width="800" />

The first thing I did was get a handle on the Workstations, since I knew I had to be compliant with FISMA and CMMC (NIST 800-171). 

The MSP we worked with initially used Addigy for macOS management and of course we already had Intune for Windows management so those were my resources that were in use at the time that I came on board. 

After we evaluated these tools at the time they seemed ok and we maximized the use of them by implementing all the security capabilities that they had. 

For Addigy this meant implementing and enforcing a NIST 800-53 baseline to all workstations. This worked out pretty well and allowed us to ensure that we had most of the controls we needed to be compliant on the macOS side. 

For Intune this meant enabling Microsoft Defender, Firewall, Bitdefender and other such policies and enabling the security baselines as well on all windows platforms. 

Using additional open source tools like SAP Privileges and Freemium platforms like Admin by request we were able to bring our administrative rights policy back inline with our requirements and organizational needs. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 24.png" class="img-fluid rounded m-2" width="800" />

Our business strategy of bringing IT in house led us to broadening how much control we had on how we were able to meet our overall security and compliance needs.  

Ultimately we implemented JAMF Pro, and JAMF Connect and hardened the workstations to NIST 800-171 standards and rolled out Microsoft Defender to all workstations. 

We also partnered with Arctic Wolf as well 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/IMG_0064.jpeg" class="img-fluid rounded m-2" width="800" />

On the Windows side of the house we used Hardening Kitty and Intune to manually rollout the Compliance Framework for Windows 11, and implemented the GPOs and validated them via the Hardening Kitty tool. 

We also implemented Admin by Request for admin elevation for Windows as we talked about before. 

We implemented security for macOS using the macOS security compliance framework. 

If you’ve never used the macOS security compliance framework then I highly recommend that you check out the talk that Bob gave on the macOS security compliance framework at macAdmins several years ago its amazing. The QR Code on this slide will take you to it. 

If you’ve never heard of hardeningKitty then I highly recommend checking it out it’s a great windows tool for checking the compliance of a windows platform for overall Windows compliance. 

Remember I work in a mixed hybrid environment we still need to ensure that I was finding comparable tools for the same platforms so this was key HardeningKitty is the closest overall tool I could find to the macOS Security Compliance project for windows.  

There's also a great article on Microsoft's Blog that I will have linked at the end of this presentation on how to implement Stigs in Microsoft intune that was really helpful for me as well, essentially the DOD releases STIG baselines that you can import into Intune deploy right to your workstations which is pretty cool. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 25.png" class="img-fluid rounded m-2" width="800" />

Just throwing up [Bob’s information here](https://www.linkedin.com/in/boberito/). 

if you haven’t connected with [Bob on Linkedin](https://www.linkedin.com/in/boberito/) or on MacAdmins I highly recommend that you do, he’s an invaluable resource and a huge contributor to the community and I really am appreciative for his contributions. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 26.png" class="img-fluid rounded m-2" width="800" />

In the last few months I have 

Implemented a disaster recovery plan

Implemented a more robust security awareness and training kadence with a variety of different tools. 

Implemented a security incident response plan for the staff and for the leadership

Wrote an acceptable use policy

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/IMG_0069.jpg" class="img-fluid rounded m-2" width="800" />

Contributed to the organizational handbook

Helped contribute to their code of conduct policy 

Started conversations around their BYOD policy. This is important especially for my organization because they have to control the flow of information, and that requires a user education and organizational play which is a delicate dance. 

And started a conversation around revamping their overall documentation organization structure. 

This one in my mind is key. 

If you can’t find the information you're looking for and you don’t know where its located then it's always going to be part of the struggle to tackle that organizationally. 

Having that good file system hygiene helps establish some good best practices that are foundational to the NIST 800-53 framework such as limiting the reuse of core identifiers across the organization. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 27.png" class="img-fluid rounded m-2" width="800" />

Written and reviewed an access control policy 

Written and reviewed a business impact analysis with the organization owners which is critical part of my role in the company because it really helped establish their risk tolerance profile.

We implemented a formal procedure for access control asset management (inventory management) 

Physical inventory is a key part of NIST 800-53 so monthly physical inventory checks is a key element of my role. 

Vendor reviews, we implemented a vendor security review program which was important and we now vet and validate every vendor that we do business with as part of our active supply chain management. 

I wrote a business impact assessment and disaster recovery plan with my COO and CEO and while the goal was to write the System Security Plan over the course of the entire year I was asked by one of our customers for a copy during my first 4 months so I had to bump that up in priority so that was written. 

We implemented Arctic Wolf, Drata for Compliance

Druva is scheduled to be rolled out for Backups not only of endpoints but also of our cloud environments in Q3/Q4. 

We implemented Box.com for the protection of CUI wich is where we store our sensitive information. This is really tied back to our NIST 800-171 requirement. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 28.png" class="img-fluid rounded m-2" width="800" />

Finally we implemented Bitlocker and Filevault with the help of EscrowBudddy!! 

We hardened our O365 environment using Harden365 and Soteria Inspect both really great open source projects that I highly recommend checking out. 

We checked and validated our network security using the Meraki Security Baseline tool again a great open source python script that I highly recommend checking out on Github. 

We implemented Cisco Umbrella and then of course we continued to leverage Arctic Wolf for the additional requirements for NIST 800-53, 171

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 29.png" class="img-fluid rounded m-2" width="800" />

So here is the tool stack that we landed on that we use. 

And again yes we use tools, but we use them in concert with so much more. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/IMG_0072.jpg" class="img-fluid rounded m-2" width="800" />

The tools are part of a wider strategy. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 30.png" class="img-fluid rounded m-2" width="800" />

Along with those tools here are the processes, controls, and policies that we also use to support the use of those tools. Now these are just a sampling of some of the resources that we used. Most of the items I used were publicly available and free. 

Policies that we used were referenced from the SANS institute as well as Drata our GRC tool but luckily for me we already had a good baseline set of standardized policy we just needed some solid procedures to go along with them. 

Most of cybersecurity is writing, and about 50% of it is technical writing and the other is policy, and procedural writing.

If I have to pass on one piece of advice start working on your writing skills don’t rely on ChatGPT, or template policies, what sets amazing cybersecurity experts from the rest are their ability to write 

which is true of amazing systems administrators as well. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 31.png" class="img-fluid rounded m-2" width="800" />

Cybersecurity is more than just tools I hope that this conversation helped you realize that in the grand scheme of cybersecurity that it's just one part of the overall cycle of cybersecurity, while its a critical part of it, it’s not the only part. 

When companies only focus on that part they are missing out, 

dangerously so, on the bigger mission of what it means to think about and manage risk for an organization at large. 

Beware of any company that markets themselves as a one stop shop or solution for all your cybersecurity needs. 

Cybersecurity is so complex and so unique for each organization no single tool or set of tools could possibly be a one size fits all solution for any industry, organization or company. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240731Up/Cybersecurity is more than just the right Tools 32.png" class="img-fluid rounded m-2" width="800" />

At the end of the day we picked the right processes, technology, and tools, that came together to protect our organization. 

Remember you can pick tools and they can secure your systems but they can’t tell you in most cases the legal requirements you are bound by in your state depending on the type of event you happen to encounter. 

You can get policy templates and implement good procedures but you still have to be the one to respond to an actual security event and put those into practice and if your outsourcing security entirely than you still need to hold that company, and their team accountable for the tools they implement the policies and procedures they follow because at the end of the day you can’t fully pass on your organizations risk, it still falls on your shoulders. 

Cybersecurity as a whole is far more complex than just securing systems its understanding how people, processes and technology work together and in doing so managing internal risk. 

### Resources

[Github Page](https://github.com/jonbrown21/cyber-presentation)

### Useful Links

- [https://www.nytimes.com/wirecutter/blog/state-of-privacy-laws-in-us](https://www.nytimes.com/wirecutter/blog/state-of-privacy-laws-in-us)
- [https://www.itgovernanceusa.com/data-breach-notification-laws](https://www.itgovernanceusa.com/data-breach-notification-laws)
- [https://github.com/scipag/HardeningKitty](https://github.com/scipag/HardeningKitty)
- [https://github.com/R33Dfield/WindowsHardening](https://github.com/R33Dfield/WindowsHardening)
- [https://github.com/usnistgov/macos_security](https://github.com/usnistgov/macos_security)
- [https://andrewstaylor.com/2022/05/31/intune-security-policies-which-to-apply-where](https://andrewstaylor.com/2022/05/31/intune-security-policies-which-to-apply-where)
- [https://github.com/eneerge](https://github.com/eneerge)
- [https://github.com/eneerge/CIS-Microsoft-Intune-For-Windows-IntuneProfile](https://github.com/eneerge/CIS-Microsoft-Intune-For-Windows-IntuneProfile)
- [https://cmmc-coa.com/cmmc-awesomeness](https://cmmc-coa.com/cmmc-awesomeness)
- [https://soteria.io/solutions/soteria-inspect](https://soteria.io/solutions/soteria-inspect)
- [https://github.com/iramku/Meraki-Security-Baseline](https://github.com/iramku/Meraki-Security-Baseline)
- [https://github.com/macadmins/escrow-buddy](https://github.com/macadmins/escrow-buddy)
- [https://www.sans.org/information-security-policy](https://www.sans.org/information-security-policy)

### Watch the entire presentation


{% include videos/video.html id="Lo2gyR1cRS0" header="/images/covers/2024/Header-Conference.png" %}