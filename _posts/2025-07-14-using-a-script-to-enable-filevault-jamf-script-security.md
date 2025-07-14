---
layout: post
date: '2025-07-14'
author: Jon Brown
permalink: /blog/using-a-script-to-enable-filevault-jamf-script-security/
published: true
title: "Using a script to Enable FileVault via JAMF: A Word of Caution"
description: "Using a script to Enable FileVault via JAMF: A Word of Caution"
blogimgpath: 202408034Up
tags:
categories:
  - automation
  - macos
  - jamf
image: /assets/images/covers/2025/filevault25.png
thumbnail: /assets/images/covers/2025/filevault25.png
cta: 2
comments: true
---

Enabling FileVault is a critical step in securing macOS devices, particularly in managed environments like schools, enterprises, and remote teams. For administrators using **Jamf Pro**, automating this process can simplify device onboarding and ensure compliance with disk encryption policies.

One such script, [`Add_FV_Prompt.sh`](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/Add_FV_Prompt.sh), helps automate the addition of users to FileVault by prompting for credentials via `osascript` and passing them to `fdesetup`. While it’s functional and useful in certain edge cases, **there are security caveats to be aware of**.

---

## ⚙️ What the Script Does

The `Add_FV_Prompt.sh` script enables FileVault for a target user by automating the following steps:

1. Prompts the user for their username and password using `osascript` dialogs.
2. Prompts for the admin account’s username and password.
3. Uses `expect` to automate the interaction with the `fdesetup add` command, feeding in the required credentials.

### 🔐 osascript Prompts

The script uses two forms of AppleScript via `osascript` to request input:

```bash
adminName=`osascript -e 'Tell application "System Events" to display dialog "Enter your username: Your username is the first initial and last name all lowercase no spaces" default answer ""' -e 'text returned of result'`
```

```bash
adminPass=`osascript -e 'Tell application "System Events" to display dialog "Enter your password:" with hidden answer default answer ""' -e 'text returned of result'`
```

The first line prompts for the username — this is **visible plaintext input**, which presents less risk.

The second line prompts for the password using the `with hidden answer` clause — this masks input from view but does **not** securely handle the password:

- The value is still stored in a shell variable (`$adminPass`).
- It can be read from memory during execution.
- It may still show in logs or crash dumps under certain conditions.

> ⚠️ **Hidden input in AppleScript does not equate to encryption.** It is merely UI-level obfuscation.

---

## 💡 What Happens Next

After collecting the credentials, the script pipes them into `fdesetup` using `expect` automation:

```bash
expect -c "
spawn sudo fdesetup add -usertoadd $userName
expect "Enter the user name:"
send ${adminName}
expect "Enter the password for user '$adminName':"
send ${adminPass}
expect "Enter the password for the added user '$userName':"
send ${userPass}
expect eof
"
```

This allows non-interactive FileVault user addition, which is helpful in environments where user interaction is not ideal or available — such as lab setups or remote support sessions.

---

## ⚠️ Security Warning

While the automation is convenient, **passing passwords in plain-text variables** is a **security risk**:

- Even though the password dialog masks input, the resulting shell variable (`$adminPass`, `$userPass`) is in memory.
- On some MDM platforms like Jamf, script parameters — even hidden — **can be written to log output**, making them visible to admins or attackers with access.
- The `expect` process can also expose these values in real-time if not sandboxed or locked down.

> **Recommendation:** Only use this script in **low-risk or one-off situations**, such as lab environments, loaner devices, or when users are being onboarded under direct supervision.

For more secure environments, consider using Jamf’s native FileVault configuration profiles, secure tokens escrowed during DEP enrollment, or triggering `fdesetup` manually via Self Service with user input.

---

## 🧪 When to Use This Script

- 🔧 You need to re-enable FileVault for a user without triggering full disk decryption.
- 🧑‍💻 You’re working in a lab or low-security environment where credentials are temporary or non-sensitive.
- ⚠️ You understand and accept the logging risks associated with passing credentials in scripts.

---

## 📝 Final Thoughts

Scripts like `Add_FV_Prompt.sh` can be powerful tools in the right context — but with great power comes great responsibility. Security professionals and MacAdmins should always weigh convenience against risk.

If you choose to use this script:

- Restrict who can deploy or trigger it.
- Avoid reusing admin credentials.
- Rotate passwords after use if possible.

For a look at the script, visit the repo:
👉 [`Add_FV_Prompt.sh`](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/Add_FV_Prompt.sh)

Stay secure and script smart. 💻🔒

---

## Ready to take your Apple IT skills and consulting career to the next level?  
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**