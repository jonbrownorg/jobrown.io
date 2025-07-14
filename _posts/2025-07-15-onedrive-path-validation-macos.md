---
layout: post
date: '2025-07-15'
author: Jon Brown
permalink: /blog/onedrive-path-validation-macos/
published: true
title: "Detecting Invalid Characters and Long Paths in OneDrive on macOS"
description: "Detecting Invalid Characters and Long Paths in OneDrive on macOS"
blogimgpath: 202408034Up
tags:
categories:
  - automation
  - macos
  - jamf
image: /assets/images/covers/2025/onedrive25.png
thumbnail: /assets/images/covers/2025/onedrive25.png
cta: 2
comments: true
---

Microsoft OneDrive is widely used for syncing documents across devices, but on macOS, it can silently fail to sync certain files if they violate Windows filesystem rules — like overly long paths or invalid characters. This creates frustrating experiences for end users who don’t know why files aren’t syncing.

To address this issue, I created a script — [`check_onedrive_paths.zsh`](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/check_onedrive_paths.zsh) — which detects common pathing issues and logs them to a file for JAMF or local review.

---

## 🔍 What the Script Does

This Zsh-based script is designed to scan a user’s OneDrive directory and:

- 🚫 Detect filenames with Windows-incompatible characters (like `*`, `:`, `?`, `|`, etc.)
- 📏 Identify file paths exceeding the maximum path length (400 characters)
- 🔠 Flag individual filenames that exceed macOS filesystem length limits (255 characters)
- 🪄 Optionally shorten long filenames automatically to prevent sync issues

A log file is written to `/Users/Shared/onedrive_path_check.log` and displayed at the end of the run for JAMF integration.

---

## 📁 How It Works

1. **Defines Limitations:**
   - Max path length: 400
   - Max filename length: 255
   - Invalid characters defined as a pattern: `[*:<>?/\\|"]`

2. **Looks Up the Logged-In User:**
   Uses `stat -f %Su /dev/console` to find the current user and determine their OneDrive directory path.

3. **Recursively Scans Files:**
   Uses `find` to inspect all files in the OneDrive directory and:
   - Reports invalid characters
   - Logs overly long paths
   - Shortens names if the `shorten_filename()` function is triggered

4. **Outputs a Log:**
   The log summarizes every issue found, making it easy for IT to take action.

---

## 🛠 Example Output

```text
OneDrive Path Check - Mon Jul 14 10:23:45 EDT 2025
Invalid characters: /Users/jon/Library/CloudStorage/OneDrive/file:backup.docx
Path too long (405 chars): /Users/jon/Library/CloudStorage/OneDrive/very/deep/nested/folder/structure/that/keeps/going/on/and/on...
Filename too long (280 chars): /Users/jon/Library/CloudStorage/OneDrive/photos/this_is_a_very_very_very_very_long_filename_that_should_probably_be_shortened.jpg
```

---

## ⚠️ Why This Matters

Microsoft OneDrive follows stricter pathing and filename rules due to its underlying Windows-based architecture. macOS doesn't naturally enforce these, so users can create files that OneDrive won’t sync — with no clear error message.

This script provides an automated way to detect and optionally fix these issues, ideal for use in:

- JAMF Pro policies
- IT onboarding scripts
- Scheduled maintenance routines

---

## 🔄 Customization

You’ll want to modify this section of the script to match your OneDrive setup:

```
ONEDRIVE_FOLDER_NAME=""
```

Replace with your folder name (e.g., `"OneDrive - CompanyName"`).

You can also tune the limits or logging path to suit your environment.

---

## 📎 Get the Script

👉 [`check_onedrive_paths.zsh`](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/check_onedrive_paths.zsh)

Keep your users syncing smoothly — and OneDrive compliant — by proactively checking for path issues!

---

## Ready to take your Apple IT skills and consulting career to the next level?  
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**