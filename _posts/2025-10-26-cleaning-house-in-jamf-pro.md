---
layout: post
date: '2025-10-26'
author: Jon Brown
permalink: /blog/cleaning-house-in-jamf-pro/
published: true
title: "Cleaning House in Jamf Pro: A Friendly Auditor Script for Real-World Hygiene"
description: "A small, opinionated Jamf Pro auditor that flags unscoped/unused items, dead policies, and more—plus a simple workflow to archive clutter safely."
blogimgpath: 202408034Up
tags:
categories:
  - automation
  - jamf
  - macos
image: /assets/images/covers/2025/Cleaning_House.png
thumbnail: /assets/images/covers/2025/Cleaning_House.png
cta: 2
comments: true
---

There’s a tipping point in every Jamf Pro environment where the policy list begins to feel like a junk drawer. Everyone means well. Nobody deletes anything. And then, months later, you’re trying to answer simple questions like: *Which policies are actually scoped? What’s no longer referenced? Why are there five versions of the same script?* This post covers a small, practical script I wrote to help you **see** what’s stale, **explain** why it’s stale, and (optionally) **park** it safely out of the way—without deleting a thing.

If you want to jump straight to the code, the repo lives here:

- Script & folder: [**Jamf Maintenance (Auditor)**](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/JAMF/Maintenance)

## What the Jamf Pro “Cleanup Auditor” does

In plain terms: it inventories your Jamf Pro objects via the Modern API and runs a few hygiene checks that mirror how humans actually review environments:

- **Unscoped** policies and macOS configuration profiles—objects that never target anything.
- **Unused** scripts, packages, and computer groups—things referenced by nothing.
- **“Dead” policies**—no triggers and not in Self Service (they’ll never run).
- **Exposed policies**—active and in Self Service (useful when you’re auditing what’s user-visible).

By default it’s **read-only** and prints tidy tables you can review in a few minutes. If you want to take action, there’s an **opt-in** switch to move flagged items into an archive category (e.g., `z_Archive`). That’s reversible and keeps your history intact.

## Why this matters in the real world

This isn’t about shaming old work; it’s about shrinking the surface area of future mistakes. Stale objects create accidental scope, duplicate logic, and mystery behaviors months later. When your list is clean, every next change gets easier: fewer collisions, clearer review, and faster incident response. If auditors ever ask about process, being able to show a simple, recurring hygiene pass goes a long way.

## Requirements (one time)

You’ll run the script with **MacAdmins Python** so the interpreter and libraries are consistent across admin hosts.

- [**MacAdmins Python** (managed Python 3)](https://github.com/macadmins/python)

- Jamf Pro role with **read** rights to policies, profiles, scripts, packages, groups.  
  If you want to park items in an archive category, that role also needs **write** permission to update categories.

> The script prefers **OAuth** client credentials. It will fall back to username/password if OAuth isn’t enabled on your tenant.

## Install MacAdmins Python (once)

Follow these steps on your admin Mac (or wherever you run Jamf tooling):

1. Download the latest **MacAdmins Python** pkg from the [releases page](https://github.com/macadmins/python/releases).
2. Install the package (double-click the `.pkg` or use `installer`).
3. Confirm it’s available:
   ~~~bash
   /usr/local/bin/managed_python3 --version
   ~~~
   You should see a Python 3.x version. From here on, we’ll use `/usr/local/bin/managed_python3` to run the script.

## Configure Jamf credentials

Use **OAuth** client credentials if possible; otherwise username/password works too. Export them in the shell before running the auditor:

**OAuth (recommended)**
~~~bash
export JAMF_URL="https://yourorg.jamfcloud.com"
export JAMF_CLIENT_ID="your_client_id"
export JAMF_CLIENT_SECRET="your_client_secret"
~~~

**Username/Password (fallback)**
~~~bash
export JAMF_URL="https://yourorg.jamfcloud.com"
export JAMF_USER="api_reader"
export JAMF_PASSWORD="••••••••"
~~~

The script will first try `/api/oauth/token` (and the older `/oauth/token` path), then gracefully fall back to `/api/v1/auth/token` with user/pass if needed. Tokens refresh automatically.

## Quick start (read-only)

~~~bash
/usr/local/bin/managed_python3 "JAMF Auditor.py"
~~~

You’ll see sections like:

- Unscoped Policies  
- Unscoped macOS Configuration Profiles  
- Unused Scripts / Packages / Computer Groups  
- Policies with **NO** Triggers **AND NOT** Self Service  
- **Active** Policies **with** Self Service enabled

That should be enough to triage in a quick session.

## JSON output (for tickets, CI, dashboards)

If you’d rather capture results for a ticket, Slack post, or dashboard:

~~~bash
/usr/local/bin/managed_python3 "JAMF Auditor.py" \
  --format json --out audit.json
~~~

The JSON includes friendly “why” helpers so you can pick apart a single object when someone asks for detail:

~~~bash
/usr/local/bin/managed_python3 "JAMF Auditor.py" --why-policy 123
/usr/local/bin/managed_python3 "JAMF Auditor.py" --why-profile 456
~~~

## Optional: move clutter to an archive category

When you’re ready to tidy without deleting:

~~~bash
/usr/local/bin/managed_python3 "JAMF Auditor.py" \
  --move-to-archive --archive-category "z_Archive"
~~~

This only updates the **category** of flagged items, so it’s reversible and non-destructive.

## Inline script (copy-ready)

If you prefer to fetch the exact current version straight from GitHub (no formatting surprises), this will drop `JAMF_Auditor.py` in your working directory:

~~~bash
curl -L \
  https://raw.githubusercontent.com/jonbrown21/macOS-JAMF-Scripts/main/Scripts/JAMF/Maintenance/JAMF%20Auditor.py \
  -o JAMF_Auditor.py
~~~

Or browse the repo page directly to read/inspect first:

- [**Jamf Maintenance (script folder)**](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/JAMF/Maintenance)

## A few operating notes

I run this in **read-only** mode as part of routine hygiene, and then use JSON mode when I want to capture a “before/after” diff in a ticket. Keeping an `archive` category creates a safe parking lot that you can revisit during change windows. If anything needs to come back, it’s one click away—and you’ve permanently removed noise from your daily view in the meantime.

If you’re starting with a very large environment, bump the timeout a bit (e.g., `--timeout 45`) and consider a scoped admin API role that only has what the script needs. That lowers risk and reduces the surface area for this service account.

---

## References

- [**Script: Jamf Maintenance (Auditor)** — repository directory](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/JAMF/Maintenance)
- [**MacAdmins Python** — project](https://github.com/macadmins/python) · [**releases**](https://github.com/macadmins/python/releases)
- [**Jamf Pro API docs** — Modern API authentication and endpoints](https://developer.jamf.com/jamf-pro/docs)


## Ready to take your Apple IT skills and consulting career to the next level?
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**