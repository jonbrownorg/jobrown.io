---
layout: post
date: '2025-04-06'
author: Jon Brown
permalink: /blog/lessons-learned-building-an-msp-in-2025-lessons-learned-3/
published: true
title: "Lessons Learned: Scale without the burnout. Lessons learned from an IT Entrepreneur on how to build an ideal, converting, MSP in 2025"
description: "Lessons learned from an IT Entrepreneur on how to build an ideal, converting, MSP in 2025"
blogimgpath: 202408034Up
tags:
categories:
  - business
  - articles
  - rants
image: /assets/images/covers/2025/Header-Ideal-MSP-3.png
thumbnail: /assets/images/covers/2025/Header-Ideal-MSP-3.png
cta: 2
comments: true
series: msp
---

{% include series.html id="msp" %}

## What I’d Automate, Delegate, and Eliminate

I’ve written about how I’d build an MSP from scratch in 2024. I followed that up with what I’d do differently in 2025 after a few more battle scars. Now, as I reflect on the way this space keeps evolving, I think it’s time to talk about scale—and more specifically, how not to lose your mind while scaling.

If I had to do it again today, here’s what I’d focus on: automation, delegation, and elimination. These are the three levers that I wish I had understood better earlier on. They’re not buzzwords. They’re survival strategies. And they’re the difference between building something sustainable and building yourself a very expensive, very stressful job.

## Automate the Repetitive Before It Repeats

Here’s the truth: if you’re still manually onboarding users in 2025, you’re doing it wrong. The same goes for patch management, ticket triage, alerting, reporting, license reconciliation, and 90% of the crap that quietly eats up your day.

Early on, we were proud of our white-glove processes. “We don’t automate because we care,” we told ourselves. But what we were actually doing was spending hours doing something a script could do in seconds. That doesn’t scale, and it sure as hell doesn’t impress the clients when you're three days late on something because you were too “hands-on.”

Today, I'd build the automation from day one. I'd invest early in RMM tools that actually integrate with the rest of the stack. I’d build playbooks, not just workflows. And I’d standardize—not just for efficiency, but for sanity.

Automate the stuff you touch more than twice. You'll thank yourself later.

## Delegate Like You’re Not the Smartest Person in the Room (Because You Aren’t) 

This one took me way too long to learn. I used to think no one could do things the way I could. Maybe that was true. But doing everything yourself isn't leadership—it’s control. And control doesn’t scale.

If you’re the founder or the technical lead or both, you’ve got to get out of your own way. That means building a team you trust and actually trusting them. It means writing SOPs that someone else can follow without Slack messaging you at 10 PM. It means hiring people for what they’re good at instead of trying to clone yourself.

Would I still get my hands dirty now and then? Absolutely. But I’d be clear on what I need to own versus what I just happen to be good at. The more you delegate, the more time you have to work on the business instead of in it.

And if you think you can’t afford to delegate yet? You can’t afford not to.

## Eliminate the Stuff That Sucks the Life Out of You

Here’s the fun part: you don’t have to do everything. You don’t have to support every tool, every vendor, or every type of client. In fact, trying to be everything to everyone is one of the fastest ways to hate your own business.

What would I eliminate if I were starting over today?

- Break/fix clients. If they’re not on a plan, they’re not a client.
    
- Tech debt vendors—those legacy apps that make every ticket take 3x longer.
    
- One-off projects with no long-term value.
    
- Clients who don’t listen to advice, don’t follow process, and don’t pay on time.
    

I’d be ruthless about it. Not out of ego, but out of clarity. The energy it takes to support bad fits is the same energy you need to serve your ideal clients well—and to actually grow.

When you eliminate the junk, you make space for the work you _want_ to do.

### It’s Not About Scaling Big—It’s About Scaling Smart

Look, not everyone wants a 50-person MSP. Maybe you want a tight team of five who absolutely crush it. That’s fine. This isn’t about scaling big, it’s about scaling with intention.

You scale by building systems that don't rely on you. You scale by creating repeatable excellence, not one-off heroics. You scale by trusting others, focusing on the work that matters, and letting go of the stuff that doesn’t.

If I were doing it again in 2025, I wouldn’t aim to build a bigger MSP. I’d aim to build a lighter one—a business that runs smoother, makes more sense, and leaves a little room to breathe.

Because at the end of the day, what’s the point of building your own thing if you can’t even enjoy it?

## Okay, But What Would I Actually Do?

### 🔧 Automation: Start With These

You don’t need to go full DevOps engineer to get 80% of the benefits. The goal here isn’t automation for its own sake—it’s about time saved, errors avoided, and consistency you can count on.

Here’s where I’d start:

- **Intune + Autopilot (PC)**  
    I’d lean hard into Microsoft’s stack for device provisioning. Zero-touch deployment is real, and if your clients are already on M365, you should be living in this space. Autopilot saves hours on onboarding, and combined with Intune, gives you real visibility and control without physically touching a machine.
    
- **JAMF Pro or JAMF Now (Mac)**  
    If you’ve got Mac-heavy clients, JAMF is non-negotiable. JAMF Pro gives you full control over app deployment, security baselines, inventory, and patching. JAMF Now is a lighter version that still handles core needs for smaller shops. You can set up zero-touch deployments for Macs that rival Autopilot on the PC side. It’s what Apple shops expect, and if you don’t offer it, you’re not serious about managing Macs.
    
- **Mosyle or Kandji (Mac alternatives)**  
    If JAMF feels too heavy or your clients want a better UI/UX, Mosyle and Kandji are strong contenders. Mosyle is incredibly scriptable and flexible, while Kandji wins on compliance and aesthetics. Both work well in mixed environments too, which is helpful if your clients are BYOD or hybrid.
    
- **SaaS Alerts or Augmentt**  
    You _need_ a SaaS visibility layer. Clients are stacking up random apps left and right, and you can't manage what you can’t see. SaaS Alerts has come a long way and does a solid job of surfacing user activity anomalies. Augmentt is a solid alternative if you’re going heavier on SaaS management.
    
- **CloudRadial or DeskDirector**  
    These tools automate client communication and give clients a portal that feels modern. Ticket intake, QBR reporting, client education—it’s all there. CloudRadial especially is like giving your clients a dashboard to your MSP without you having to handhold it.
    
- **Tactical RMM (PC)**  
    It’s lightweight, scriptable, and fast. If you want something open-source and punchy, it’s worth looking at—especially if you’re bootstrapping or don’t need the bloated features of legacy tools. (No strong Mac support here, so pair it with JAMF or Mosyle.)
    
- **Power Automate + Zapier**  
    Seriously, don’t sleep on this combo. Power Automate can do some wild stuff inside the M365 universe, and Zapier is still the king for cross-app workflows. You can glue your tools together and build lightweight automations in a day that save you weeks over time.
    
### 🧑‍💼 Delegation: People and Process

Tools are great, but they’re nothing without people who know how to use them—and a system that lets people succeed.

- **Document Everything** with **Scribe** or **Notion**  
    Stop making tribal knowledge your business model. Record your processes. Use Scribe to generate step-by-step guides from real workflows, or Notion to build a living, breathing SOP hub your team can actually navigate.
    
- **Hire Remote, Think Global**  
    If I had to start again, I’d go international from day one. Platforms like Support Adventure or We Work Remotely give you access to global Tier 1/Tier 2 techs who are hungry to learn. Pair that with good documentation and communication and you’ve got a real foundation.
    
- **Client Communication: Standardize the Experience**  
    Every client should get the same level of responsiveness and clarity. Use **Helpdesk Buttons**, automated email check-ins, or even simple scheduled email reports to keep them in the loop. People don’t just want their problem fixed—they want to know someone’s got it under control.
    
### 🧹 Eliminate the Chaos

This is less about tools and more about _decisions_—but the impact is massive.

- **No more all-you-can-eat**  
    I’d never again offer unlimited anything. Flat-fee plans, yes—but scope needs to be clear, and overages need to be enforced. This keeps both sides honest and prevents client resentment when things go sideways.
    
- **Kill the Legacy App Stack**  
    Don’t be the tech whisperer for ancient Access databases and weird ERP bolt-ons. These become support sinkholes. If the client won’t upgrade, politely walk away.
    
- **Standard Stack, No Exceptions**  
    Choose your stack and live by it. That means picking a firewall vendor, a backup platform, an AV solution—and not deviating. I’d document it, audit against it, and make it part of every contract. Deviations cost time and kill scale.
    
- **Audit Clients Like You Audit Vendors**  
    Treat your client base like a portfolio. Who’s profitable? Who’s a pain? Who listens, who doesn’t? Do a quarterly gut check. If someone drains more than they pay, it’s okay to let them go.
    
## Final Thought: Give Future You a Break

Every shortcut you don’t take today is a problem future you is going to have to solve at 2 AM. That’s what this third blog is really about—building with the future in mind.

Automation, delegation, and elimination aren’t optional—they’re essential. And they’re not just technical strategies, they’re personal ones. They’re how you keep this thing sustainable, maybe even enjoyable.

If I had to build it all again, I wouldn’t just build something profitable—I’d build something I could walk away from for a week without it falling apart. That’s real scale. And that's what I’d do differently in 2025.

[Follow me](https://www.linkedin.com/in/jonbrown2/) for more as I explore my next lesson and building block as I craft the ideal MSP in my next post! 

### Sources

**PC & Cross-Platform Tools**

- Microsoft Intune & Autopilot: [https://www.microsoft.com/en-us/microsoft-365/business/microsoft-intune](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-intune)
    
- SaaS Alerts: [https://saasalerts.com/](https://saasalerts.com/)
    
- Augmentt: [https://www.augmentt.com/](https://www.augmentt.com/)
    
- CloudRadial: [https://www.cloudradial.com/](https://www.cloudradial.com/)
    
- DeskDirector: [https://www.deskdirector.com/](https://www.deskdirector.com/)
    
- Tactical RMM: [https://tacticalrmm.com/](https://tacticalrmm.com/)
    
- Power Automate: [https://powerautomate.microsoft.com/](https://powerautomate.microsoft.com/)
    
- Zapier: [https://zapier.com/](https://zapier.com/)
    

**Mac-Centric Tools**

- JAMF Pro: [https://www.jamf.com/products/jamf-pro/](https://www.jamf.com/products/jamf-pro/)
    
- JAMF Now: [https://www.jamf.com/products/jamf-now/](https://www.jamf.com/products/jamf-now/)
    
- Mosyle: [https://mosyle.com/](https://mosyle.com/)
    
- Kandji: [https://www.kandji.io/](https://www.kandji.io/)
    

**Delegation & Documentation Tools**

- Scribe: [https://scribehow.com/](https://scribehow.com/)
    
- Notion: [https://www.notion.so/](https://www.notion.so/)
    
- Support Adventure (remote staffing): [https://www.supportadventure.com/](https://www.supportadventure.com/)
    
- We Work Remotely (global hiring): [https://weworkremotely.com/](https://weworkremotely.com/)