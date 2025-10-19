---
layout: post
date: '2025-10-12'
author: Jon Brown
permalink: /blog/turn-jamf-compliance-output-into-real-audit-evidence/
published: true
title: "Turn Jamf Compliance Output into Real Audit Evidence"
description: "A small reporting script that converts your compliance EA into two CSVs auditors will actually accept."
blogimgpath: 202408034Up
tags:
categories:
  - automation
  - jamf
  - macos
  - cybersecurity
image: /assets/images/covers/2025/compliance_evidence.png
thumbnail: /assets/images/covers/2025/compliance_evidence.png
cta: 2
comments: true
---

Most teams use Apple’s macOS Security Compliance Project (mSCP) baselines because they scale and they’re repeatable. Jamf’s tooling makes deployment straightforward and the Extension Attribute (EA) output is a convenient place to capture drift. What you don’t automatically get is the artifact an auditor will accept on a specific date—an actual document you can file that shows which endpoints are failing which items, plus a concise roll-up of failure counts you can act on. Smart Groups answer scope; they don’t produce evidence.

This script fills that gap. It reads computer inventory from Jamf Pro, pulls the EA your baseline emits, normalizes whatever format it finds, and writes two CSVs: one per-device view with the failing items for each machine, and one fleet-level summary of unique failing items with counts. The goal is boring on purpose. You run it, it writes files, you attach those files to a ticket or a GRC record, and you can reproduce the process tomorrow without reinventing the report.

### The problem this solves

Compliance baselines are great at enforcing state. Where teams get stuck is at the reporting layer—turning console views and ad-hoc exports into a dated artifact that stands up in an audit. People copy lists, paste them into spreadsheets, and lose the thread the next time someone asks for “the same snapshot for last Tuesday.” Evidence should be reproducible, timestamped, and easy to compare over time. That’s what these two CSVs are meant to be.

There’s also the question of signal. When you’re chasing individual devices from a dashboard, it’s hard to tell which failures are actually driving risk at scale. A simple count by failing item puts that in focus immediately. The script’s fleet summary file gives you that lens so you can prioritize remediation tasks and prove progress with before/after runs instead of screenshots.

### How it works

Under the hood, the script authenticates to the Jamf Pro **Modern API** and pages through computer inventory. It reads the EA you’ve designated for compliance output—commonly the one populated by your mSCP baseline—and then parses the content into a consistent model. It’s defensive by design: if your EA is JSON in one environment and pipe-delimited or multiline in another, the parser still produces clean rows. A special case is “No baseline set.” You’ll see that status on the per-device report so you can fix scoping, but it’s excluded from the fleet summary so it doesn’t distort the counts. The point is predictable output that compares cleanly across days and audits.

### Requirements

You need a Jamf Pro API account with read access to inventory and authentication endpoints, and you should already be deploying a compliance baseline that populates the EA this script reads. On the runtime side, plan to use the **MacAdmins Python** framework on your admin host or runner—the script expects to be invoked with the `managed_python3` shim that’s standard in a lot of MacAdmin shops. With those pieces in place, you can run locally for ad-hoc snapshots or schedule it to produce daily evidence.

### Usage

Export credentials first. OAuth client credentials are preferred; username/password will work as a fallback:

```bash
# OAuth (recommended)
export JAMF_URL="https://yourorg.jamfcloud.com"
export JAMF_CLIENT_ID="your_client_id"
export JAMF_CLIENT_SECRET="your_client_secret"

# or username/password fallback
export JAMF_USER="jamf_api_reader"
export JAMF_PASSWORD="••••••••"
```

Then run the tool:h

```bash
/usr/local/bin/managed_python3 "JAMF Compliance Reports.py"   --ea-name "Compliance - Failed Result List"   --out-dir "./Reports"
```

You’ll end up with two files—`compliance_failed_by_device.csv` and `compliance_failed_counts.csv`—in the output directory you specify. Save them with the date in the filename or drop them into an evidence bucket you control so they form a reliable trail.

### Operational notes

If a large slice of the fleet reports “No baseline set,” fix that first. It’s almost always scoping or profile precedence, and until baselines land consistently you’ll be chasing noise. Once baselines are stable, the fleet summary makes prioritization obvious. There are usually a handful of recurring items that deserve focused remediation or a profile cleanup; when you fix those, the counts move quickly and the before/after story is easy to tell. Treat the CSVs as artifacts, not just diagnostics. Store them in a place with retention and immutability so you can answer “what did this look like last quarter?” without rebuilding anything.

### Where POA&M fits

A **Plan of Action and Milestones (POA&M)** is the administrative counterpart to technical remediation. It’s a record that captures the weakness, the owner, the plan, and the dates—then closes with evidence. The per-device CSV tells you exactly which systems and users are in scope so you can assign work with precision. The fleet summary gives you a rational way to prioritize and communicate risk. When you attach a dated CSV to the POA&M record, and later attach a newer one showing the reduction or closure, you’ve moved from “we know this is a problem” to “we fixed it on purpose and here’s the proof.” That’s what auditors expect, and it’s healthier operationally because the process is repeatable.

If you want the nuts and bolts, the code lives here: [Scripts/Security/NIST](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/Security/NIST) in my repo. It’s intentionally small. Run it, produce the two files, and keep moving.

---

## Sources

- JAMF Pro Compliance Report Script - [REPO & Readme](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/Security/NIST)
- Apple: **macOS Security Compliance Project** overview and docs — [Apple Platform Security](https://support.apple.com/guide/certifications/macos-security-compliance-project-apc322685bb2/web) / [mSCP site (NIST Pages)](https://pages.nist.gov/macos_security/).
- Jamf: **Compliance Editor** baseline guidance — [Trusted Jamf Docs](https://trusted.jamf.com/docs/establishing-compliance-baselines) • Jamf Pro API — [API Overview](https://developer.jamf.com/jamf-pro/docs/jamf-pro-api-overview) / [API Authentication](https://developer.jamf.com/jamf-pro/reference/api-authentication-1).
- NIST CSRC: **Plan of Action & Milestones (POA&M)** — [CSRC Glossary](https://csrc.nist.gov/glossary/term/plan_of_action_and_milestones).
- MacAdmins Python: framework used widely with Jamf — [GitHub Repo](https://github.com/macadmins/python) / [Releases](https://github.com/macadmins/python/releases).


## Ready to take your Apple IT skills and consulting career to the next level?
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**