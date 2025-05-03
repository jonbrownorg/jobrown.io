---
layout: post
date: '2025-05-03'
author: Jon Brown
permalink: /blog/automatically-connecting-and-staying-connected-to-jamf-trust-vpn-with-jamf-pro/
published: true
title: "Ensuring Jamf Trust VPN Stays Connected with Jamf Pro"
description: "Ensuring Jamf Trust VPN Stays Connected with Jamf Pro"
blogimgpath: 202408034Up
tags:
categories:
  - jamf
  - articles
  - scripts
image: /assets/images/covers/2025/jamf-trust.png
thumbnail: /assets/images/covers/2025/jamf-trust.png
cta: 2
comments: true
---

Keeping your organization's VPN always connected is crucial—especially with Zero Trust Network Access (ZTNA) frameworks like **Jamf Trust**. One of the challenges with **Jamf Trust** is that it does *not* automatically open or reconnect on startup or login by default. However, with a combination of Jamf Pro policies, a custom script, and an extension attribute, you can ensure your users stay securely connected.

This guide outlines how to do exactly that.

---

## Why This Matters

Disconnected VPNs mean lost productivity, increased support tickets, and security risks. Jamf Trust provides a seamless VPN experience when connected—but if users forget to open it, it defeats the purpose.

Jamf Support clarified the following:

> "Jamf Trust by default will not open automatically after deployment, startup, or login. However, you can leverage policies in Jamf Pro to auto-launch Jamf Trust at login and auto-enable ZTNA Service."

---

## Part A: Auto-Launch Jamf Trust App

This policy ensures that Jamf Trust launches at user login.

### Steps:

1. In **Jamf Pro**, go to `Policies > New` and configure the **General** payload:
   - **Name**: Jamf Trust Auto Launch  
   - **Trigger**: Login  
   - **Execution Frequency**: Once every day

2. Add the **Files and Processes** payload:
   - **Execute Command**:
     ```bash
     open -a "Jamf Trust" com.jamf.trust://?action=open
     ```

3. Add target machines under **Scope**.

4. Click **Save**.

This will open the app—but note, users will still need to **authenticate manually**.

---

## Part B: Automatically Enable the VPN (ZTNA)

This policy takes it a step further: automatically enabling the VPN service.

### Steps:

1. In **Jamf Pro**, go to `Policies > New` and configure the **General** payload:
   - **Name**: Jamf Trust Auto Enable  
   - **Trigger**: Login  
   - **Execution Frequency**: Once every day

2. Add the **Files and Processes** payload:
   - **Execute Command**:
     ```bash
     open -a "Jamf Trust" "com.jamf.trust://?action=enable_vpn"
     ```

3. Scope it to your test or target devices.

4. Click **Save** and log into the machine to test.

---

## Bonus: Prompt Users When VPN Disconnects

## Step 1: Create an Extension Attribute to Detect VPN Disconnection ✅

Before you can remediate devices, you need a way to detect when Jamf Trust VPN is **not running**. Here's how to create an **Extension Attribute** to help with that.

### Extension Attribute Script

1. In **Jamf Pro**, go to:  
   `Settings > Computer Management > Extension Attributes`

2. Click **New** and configure:
   - **Name**: `Jamf Trust VPN Status`
   - **Data Type**: String  
   - **Inventory Display**: General  
   - **Input Type**: Script

3. Paste this script:

    ```bash
    #!/bin/bash

    if /usr/bin/pgrep "Jamf Trust" > /dev/null; then
        echo "<result>Connected</result>"
    else
        echo "<result>Disconnected</result>"
    fi
    ```

4. Save the Extension Attribute.

---

## Step 2: Build a Smart Group 🎯

This Smart Group identifies machines where Jamf Trust is disconnected.

1. Go to `Computers > Smart Computer Groups > New`
2. Name the group: `VPN Not Connected`
3. Add criteria:
   - **Jamf Trust VPN Status** is **Disconnected**
4. Save the group.

---

## Step 3: Deploy the VPN Reconnect Script via Policy 🛠️

Now that Jamf Pro can detect disconnected machines, use the following script to prompt users and reconnect VPN. This should be scoped only to the **VPN Not Connected** Smart Group.

### What It Does

- Prompts the user with a GUI message  
- Offers a button to reconnect VPN  
- Automatically reconnects  
- Cleans up Jamf Protect extension attributes  
- Runs `jamf recon` to update inventory

### Reconnect Script

{% highlight bash %}
#!/bin/bash

currUser=$(/usr/bin/stat -f%Su /dev/console)

jamfHelper="/Library/Application Support/JAMF/bin/jamfHelper.app/Contents/MacOS/jamfHelper"
msgtitle="JAMF Trust Not Connected"
heading="Jamf Trust VPN Access"
description="Looks Like Jamf Trust VPN has stopped running!

You should always be on the VPN. 
Open the JAMF Trust app to reconnect to the VPN automatically."

button1="Ok"
button2="Connect VPN"
icon="/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/ToolBarInfo.icns"

userChoice=$("$jamfHelper" -windowType utility -title "$msgtitle" -heading "$heading" -description "$description" -button1 "$button1" -button2 "$button2" -icon "$icon")

/usr/bin/open -a "Jamf Trust" "com.jamf.trust://?action=enable_vpn"

sudo jamf recon
{% endhighlight %}

### Policy Setup

- **Trigger**: Recurring Check-In
    
- **Execution Frequency**: Ongoing
    
- **Scope**: VPN Not Connected Smart Group
    
- **Payload**: Scripts (use the script above via the script payload)

---

## Conclusion

Maintaining a stable and always-on VPN connection with Jamf Trust can be challenging out of the box, but with a few well-structured Jamf Pro policies, extension attributes, and scripts, you can create a reliable and self-healing solution. This guide helps ensure your organization maintains security compliance, reduces user disruption, and proactively remediates disconnected clients. Thanks to contributions from the Jamf community and direct guidance from Jamf Support, it’s now easier than ever to build robust workflows that keep Jamf Trust connected and users protected.


### Sources

- **Jamf Support** – Direct communication provided implementation guidance for auto-launching and auto-enabling Jamf Trust via login-triggered policies.
    
- **Jamf Community Forums** – Special thanks to _user Trevor_ for outlining the original challenge and proposed solution in this [Jamf Nation thread](https://community.jamf.com/t5/jamf-pro/jamf-trust-how-to-guide-a-user-to-enable-jamfprivateaccess/m-p/290339), which inspired this blog post.
    
- **Jamf Documentation** – Referenced Jamf Trust macOS URL Scheme documentation for policy scripting. [JAMF Trust Documentation](https://learn.jamf.com/en-US/bundle/jamf-security-cloud-setup-guide/page/Jamf_Trust_for_macOS_URL_Schemes.html)