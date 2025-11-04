---
layout: post
date: '2025-11-03'
author: Jon Brown
permalink: /blog/searching-jamf-profiles-with-python/
published: true
title: "Hunting Down Jamf Profile Payloads with Python"
description: "A practical Jamf Pro script to search configuration profiles for payloads, keys, and values."
blogimgpath: 202408034Up
tags:
categories:
  - jamf
  - articles
  - scripts
image: /assets/images/covers/2025/jamf_searching_profiles.png
thumbnail: /assets/images/covers/2025/jamf_searching_profiles.png
cta: 2
comments: true
---

If you've spent enough time living inside Jamf Pro, you eventually run into the same problem: someone set a configuration somewhere, sometime, and nobody remembers where. It might be something obscure – a certificate payload, a conditional SSO predicate, or that one security preference quietly misbehaving on three machines in accounting. And when you have dozens of configuration profiles, each with multiple payloads, nested keys, and XML-wrapped values, finding that setting can feel like forensic archaeology.

We’ve all been there, scrolling through the Jamf UI, expanding payloads, repeatedly searching in the browser hoping to get lucky. Eventually you realize: _I need a better way to search this stuff._

That's why I built a Python script to search Jamf Pro’s configuration profiles directly via API. It pulls profile XML, looks for a search term, and tells you exactly which profiles match — whether they’re macOS or mobile, scoped or not, archived or active. It’s fast, it respects Jamf’s token-based auth model, and most importantly, it removes guesswork. I don’t like guesswork.

[JAMF Profile Search Tool](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/JAMF/Profile%20Search)

---

## Why Create Another Jamf Profile Search Tool?

There are already ways to do this — but I wasn’t trying to reinvent the wheel. I was trying to build a **reliable, script-driven tool** for environments where automation, repeatability, and security matter.

I wanted three things specifically:

1. **Modern authentication**  
   Token-based auth instead of UI scraping or baking clear-text creds into scripts.

2. **Portability**  
   Something that runs cleanly on macOS, Linux, inside CI, or as part of a security toolkit.

3. **Context-aware output**  
   Not just “where is this key,” but whether the profile is enabled, scoped, or archived.

Sometimes you just need precision — and you want it fast.

---

## Why Python?

Jamf admins love Bash, and for good reason — it's everywhere, it's powerful, and for quick hitters it's great. But for API-heavy workflows, Python gives us:

- Reliable HTTP libraries
- Structured error handling
- Readable XML/JSON parsing
- Better automation support
- Stable environment for secrets handling

Python lets us use Jamf’s token model cleanly. No brittle parsing, no chained curl pipes, and no risking credentials in temp history.

It’s not just about speed — it's about **doing it right**.

---

## How It Works

You provide a search term, and the script:

1. Authenticates to Jamf via token
2. Retrieves all configuration profile XML
3. Searches for the string case-insensitively
4. Reports results with context

Usage example:

~~~bash
python3 jamf_profile_search.py \
  --url https://yourorg.jamfcloud.com \
  --user api_reader \
  --pass "$JAMF_PASS" \
  --term Kerberos
~~~

macOS-only:

~~~bash
python3 jamf_profile_search.py --term "FileVault" --which mac
~~~

See archived and unscoped configs:

~~~bash
python3 jamf_profile_search.py \
  --term "SSO" \
  --include-archived \
  --include-unscoped-and-disabled
~~~

It’s a Jamf search engine without the click-scroll-repeat pain.

---

## Featured Alternative: A GUI-Driven Profile Search

Not everyone wants to live in Terminal land — and that’s totally valid. One of the best community tools in this space is Scott Kendall’s **Jamf Config Profile Search** project.

[Jamf Config Profile Search – GitHub Repository](https://github.com/ScottEKendall/JAMF-Pro-Scripts/tree/main/JAMFConfigProfileSearch)

Scott went the extra step and built a **GUI**, which makes it far more approachable for admins who prefer clicking to shell flags.

Download from his repo, launch the GUI, provide your Jamf URL and credentials, and you can search your profile XML without touching a command line. It’s friendly, fast for one-off inspections, and great for support staff or junior techs who just need visibility without needing to know regex or API internals.

### Where Scott’s GUI Shines

- ✅ Easy to run with zero Python or pip installs
- ✅ No command flags to memorize
- ✅ Results visible in a window, not just stdout
- ✅ Fantastic for “find this setting right now” moments
- ✅ Lower barrier of entry for newer Jamf admins

### Where Python Adds Value

My Python script shines when you need:

- CI/CD or automation support
- Token authentication workflows
- Audit logging / repeatable reporting
- Filtering (enabled, scoped, archived)
- Remote or containerized execution

**GUI vs CLI** isn’t a competition — it’s choice. Scott’s tool is approachable and visual. Mine leans into automation and scale. Use whichever aligns with your workflow. In fact, use both. I do.

---

## Security Considerations

Security matters — especially when you start automating API access. This script:

- Uses short-lived token authentication
- Avoids printing credentials or tokens
- Supports environment-based secret injection
- Avoids local XML dumping by default
- Can run without placing credentials in history

You get transparency without tradeoffs — and that’s the goal.

---

## Closing Thoughts

Visibility is the first step toward control — especially in tools like Jamf where config sprawl grows quietly over time. When things break, or worse, when they break silently, knowing exactly which profile holds which keys can save hours.

This script gives you **clarity and confidence**. Scott’s GUI gives you **speed and accessibility**. Both exist to make Jamf administration a little less mysterious, a little less tribal, and a lot more predictable.

If this helps you during a late-night “why is SSO breaking for only six machines?” debugging session, or before a large compliance audit, then it did its job.

And if it saves you from scrolling through XML at 5 PM on a Friday — you’re welcome.

---

## Resources

- **Python Jamf Profile Search Script**  
  [https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/JAMF/Profile%20Search](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/Scripts/JAMF/Profile%20Search)

- **Scott Kendall’s Jamf Config Profile Search (GUI)**  
  [https://github.com/ScottEKendall/JAMF-Pro-Scripts/tree/main/JAMFConfigProfileSearch](https://github.com/ScottEKendall/JAMF-Pro-Scripts/tree/main/JAMFConfigProfileSearch)

- **Jamf Classic API Authentication**  
  [https://developer.jamf.com/jamf-pro/docs/classic-api-authentication](https://developer.jamf.com/jamf-pro/docs/classic-api-authentication)

- **Python Requests Documentation**  
  [https://requests.readthedocs.io/en/latest/](https://requests.readthedocs.io/en/latest/)


## Ready to take your Apple IT skills and consulting career to the next level?
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**
