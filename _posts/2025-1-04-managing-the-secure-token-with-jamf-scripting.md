---
layout: post
date: '2025-01-04'
author: Jon Brown
permalink: /blog/lessons-learned-if-i-had-to-build-an-msp-from-scratch-heres-how-id-do-it-in-2024/
published: true
title: "Lessons Learned: If I had to build an MSP from scratch, here's how I would do it!"
description: "Lessons learned from an IT Entrepreneur on how to build an ideal, converting, MSP in 2024"
blogimgpath: 202408034Up
tags:
categories:
  - bravas
  - articles
  - rants
image: /assets/images/covers/2024/Header-Ideal-MSP-1.png
thumbnail: /assets/images/covers/2024/Header-Ideal-MSP-1.png
cta: 2
comments: true
---

## Lessons Learned

From 2014 until 2022 I built and ran a series of successful IT consultancies, from a one person solopreneurship (Jon Brown Consulting), to a startup (Mac Gurus) to its more mature and accomplished predecessor (Grove Technologies) where I eventually sold the business and exited the industry. 

It was a hard path and each step and stage of the companies existence I learned more and more not only about how to run a business, but about myself, and my clients and their needs. More importantly I learned that you can't run a successful business alone. Growth takes many hands contributing and its not just true of staff. Lots of emphasis is placed on growth with hiring and gaining new customers. While thats true reliance on third party vendors is equally important. 

While building my business I worked hard to perfect the partnerships and alliances with vendors, consultants, contractors and other businesses to ensure that I was building an ecosystem that would allow my clients to be successful, in a responsible and profitable manner. 

Since I have sold my business I am often asked "If you had to do it again, would you and what if anything would you do differently?". Let's dig into that shall we. Many of the things I did right, were evident in positive and financial ways and those things are easy to remember when looking back on past success. However remembering the times you fell down are equally important. 

Sit back while I reflect on the things that worked for me, what I would ditch and what I would keep if I were to build the ultimate MSP in 2024.

## Lesson #1: Do no harm. 

This one may seem obvious but its true, do not seek to disrupt, bother or cause any problems with a clients business, their employees and the tools they use to conduct business. You should be there as a transparent entity. You're at your best when they don't see you, things run efficiently without failure and IT just fades into the background. 

Does this mean that you never touch base? On the contrary constant communication with the client is key however too often I have seen MSP's become the cause of the problems with a companies business. Poor MSP's interfere and create cumbersome processes that impede workflow, suck up time and slow down tools used for critical daily tasks. 

They may not even know they are doing it which is why I painstakingly tested and validated that every tool in my arsenal that I would recommend worked flawlessly together. The tools, policies, and procedures all had to compliment the workflow of my clients. That mixture of solutions and care really impacted their ability to continue to focus on their bottom line. Which is not IT. 

A good foundation is a great management platform. At the time I relied on a mixture of great solutions. JAMF, Jumpcloud, Munki just to name a few. Lets deep dive the tools I used then and what I would choose now in 2024 to build a platform of "Do no harm".

### Management Platforms: What I used in the past

***[Watchman Monitoring](https://www.watchmanmonitoring.com/) (For hardware monitoring):***

Pros:

 - A tool that I used to monitor the hardware, uptime and other system information on Mac and PC workstations.
 -  It is a read only agent with a very lightweight set of reporting capabilities with no real method of causing a lot of CPU overload, or unnecessary overhead. 
 - Worked well with other solutions that we put on the system (we had almost no conflicts with using this tool with other IT management apps.)

Cons:

 - Its expensive to rebrand. There is a hefty one time fee to theme the app to fit into your overall look & feel. I ended up just telling clients "I use Watchman Monitoring".
 - All it does is monitoring. Thats a pro and a con. I does it well but for the cost and the information it provided all it served was a way to gather information my clients were asking for in report format. 
 - They use 'groups' to separate client data but it all lives in one database so true multitennancy is not possible within a single instance. Multiple instances would be required thus multiple subscriptions. 
 

***[Munki](https://www.munki.org/munki/) & [MunkiReport](https://github.com/munkireport/munkireport-php) (For metrics collection)***

Pros:

 - Its a free and open source tool. Run it in AWS, Google Cloud, or on your own server. Provide real time metrics and data to your clients with a lightweight agent that runs on your set schedule. 
 - If it goes into a non functional state there is limited if no impact on systems with installe agents. No notifications or pesky alerts for your end users. 

Cons:

 - Its a free and open source tool. Support may be limited and remanded to outside experts to keep it stable in a production environment. 
 - Its built with some security in mind, however the security of your ecosystem, server stack and cloud infrastructure is up to you and is a potential risk if not careful. 

***[JAMF](https://www.jamf.com/) (For large scale clients)***

Pros:

 - Great if your clients have the budget. In order to keep my costs down I would recommend the solution and the client would buy it. 
 - I was able to create a policy where we were "Platform Agnostic" we would simply recommend solutions and clients would buy and own them and we would manage them. Something I stand by until today. 
 - Its a best in class MDM that has been around a long time. Lots of amazing support, subject matter experts getting certified every day and a huge community. 

Cons:

 - Its expensive, to make money selling JAMF you have to go all in on their MSP program which is great if you are an Apple consultancy but may not be your first choice if you are focusing on a mixture of PC only and Mac/PC hybrid companies. 
 - Experts in the field are expensive. In order to bring in needed expertise I had to hire consultants with certifications to provide expertise to clients that ate into my overall bottom line. 
 - Its for macOS only. You can install Recon on PC's but it provides inventory data only. If you want inventory data stick with [Watchman Monitoring](https://www.watchmanmonitoring.com/) as a cheaper and easier to manage option. 

***[Jumpcloud](https://jumpcloud.com/) (For mid-level clients)***

Pros:

 - Its an amazing tool with a built in IDP along with a great MDM. If you are looking for a one stop shop, Jumpcloud ruled the world for a long time and still does with buit in cloud LDAP and Radius offerings. 
 - Its building in security features and single sign on features that allow your MSP to offer SSO offerings to your clients. It comes at a premium price but they do have an official MSP program. 
 - Has support for PC, Mac and Linux management which is rare to find in the true MDM, IDP solution market. 
 
 Cons:

 - For me they were late to the game with their MSP program and thus I had to play the JAMF card again. I could not afford to buy and resell Jumpcloud due to its extremely high cost, it was cheaper for clients to buy and for us to manage. 
 - Patching has always been a challenge for most MDM's but for Jumpcloud especially it has had its series of challenges. PC Patching is based on Chocolatey but macOS patching is based on leveraging open source solutions under the hood. 
 - I ended up using Jumpcloud in conjunction with other MDM's as they were late to the MDM game. When we first started adopting it at the time we were primarily using it for Radius in the cloud which is still a great feature. Because of this it was hard to transition clients who wanted redundancy in operations to a one stop management solution. 


***[Kandji](https://www.kandji.io/) (Flor clients with a focus on security)***

Pros:
 - Kandji was one of the first to market solutions for point and click security. They continue to innovate by adding in features such as vulnerability management and endpoint protection features. Similar to [JAMF Protect](https://www.jamf.com/products/jamf-protect/) and a vulnerability scanner like [Qualys](https://www.qualys.com/). 

Cons:
 - Until today they still do not have a viable MSP program so while I had close to 25 clients on the platform I was never able to leverage any cost savings or resell the solution to my clients. 

***[Mosyle](https://mosyle.com/) (For clients on a budget)***

Pros:
 
 - I was an early member of their MSP program which allowed me to create a multi-tenanted space to manage my clients macOS fleets with ease. 
 - They had a certification program that allowed me at low to no cost get my entire team trained on how to use the platform. 
 - They offered very affordable pricing that made it easy to sell the solution to smaller businesses who may have opted out of MDM management due to cost. 

Cons:

 - The platform was relatively stable, however it was not super intuitive to use and often relied heavily on reaching out for support to gain clarity on their support articles. 
 - The platform itself had a very complex user interface that was easy to get lost in as a manager and led to mistakes being made easily to client systems. 
 - Support is limited. They are hosted and managed out of the US which is a deal breaker for some clients with sensitive fleets or government contracts. 

### What would I use today?

Lets first talk about the lessons learned what I would keep and what I would ditch. 

***Things I would keep***

 - Platform Agnostic: I would remain platform agnostic. If a client came to me with a set need that I was not able to provide a solution for I would work with them to find a real solution. 
 - Platform Ownership: I would highly recommend this to more MSP's but lets stop holding platforms of end users hostage. Require all clients to be the sole owner and purchaser of their platforms. 

***Things I would work harder on***

 - Reselling Solutions: But doing so in a responsible manner. I would resell with the intent not to reap a fee or reward from the vendor but to pass on a much needed discount while being able to mark up the cost slightly to cover business expenses. Its a win-win. Be transparent about it. 

***Things I would ditch***

 - Overly complex platforms: I would ditch the overly complex set of tools in my arsenal for solutions. I would learn to say no more on the fringe solutions and things that were not our MSP's core competencies and offerings. 

So if I had to pick a set of management tools or platforms for managing macOS, Windows in 2024, what would I go with? None of the above. I would look at a whole new breed of systems that would

 - Simplify overall operations without the need for complex trainings, certifications and high priced experts. 
 - A platform that supported multiple OS platforms under one hood. 
 - A platform with built in security features, and a true IDP. 
 - A solution that offers robust reporting for client reporting and the ability for clients to own and even manage the platform if needed or desired. 
 - A platform that can aid in the effective onboarding of new systems for new hires and lock down workstations when offboards happen. 
 
In short the solution I would pick if I had to pick a single platform to be the foundation of a new MSP in 2024 would be [Bravas.io](https://bravas.io). [Bravas.io](https://bravas.io) meets all these needs plus:

 - They offer a partner and MSP program that allows me the business owner to resell the solution while having the client retain ownership. 
 - They offer a white-labeling solution where I can brand the entire platform as my own companies solution thereby garnering trust. 
 - They support PC and macOS management with ZERO Touch for both platforms built in. 
 - They take security seriously with passwordless technology built in. 
 
Finally, [Bravas.io](https://bravas.io) is a platform that would do no harm. It works and runs easily on the client endpoint and would allow the MSP to fade into the background, allowing the company to get back to what they do best which again is not IT. As a new MSP owner I would be able to train my new staff members easily since the platform is so easy to use and is in active development. 

Long gone are the days of constantly struggling to keep my team up to speed on 5-6 MDM platforms and management technologies. Ultimately this would pay dividends for my own MSP allowing me to focus more on growth and process / procedure standardization and company culture. 

All in all [Bravas.io](https://bravas.io) is a winning option that would be a game changer for any new or existing MSP. 

## Conclusion

I hope you enjoyed the first blog in this long series where I deep dive all my lessons learned. In this first installment, its critical to remember that as an IT Services company you are obligated to do no harm. Responsibly communicate with your clients on regular intervals. Do not seek to constantly upsell them or raise costs every year. In fact as I heard one person say those clients that were with you from the beginning deserve the deepest discounts, get out of the habit of automatically raising prices without adding additional value. 

As an MSP do not always spend your time seeking out the next client while neglecting the needs of your current client base, an MSP thats focused on growth is often less concerned about churn and cares less about overall retention. 

Finally do not forget how important those critical vendor, tool and platform choices are they literally make, and break your MSP and set you apart from your compeditors. When picking an MDM platform for device management, choose wisely and ensure that it allows you to get the job done without impacting the job your clients are trying so hard to accomplish with the tools they haven entrusted to you to manage. 

[Follow me](https://www.linkedin.com/in/jonbrown2/) for more as I explore my next lesson and building block as I craft the ideal MSP in my next post! 

### Sources
- [Watchman Monitoring](https://www.watchmanmonitoring.com/)
- [Munki](https://www.munki.org/munki/) & [MunkiReport](https://github.com/munkireport/munkireport-php)
- [JAMF](https://www.jamf.com/)
- [Jumpcloud](https://jumpcloud.com/)
- [Kandji](https://www.kandji.io/)
- [Mosyle](https://mosyle.com/)
- [Bravas.io](https://bravas.io) <u>2024 Management Tool Pick</u>

