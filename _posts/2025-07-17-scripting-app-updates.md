---
layout: post
date: '2025-07-17'
author: Jon Brown
permalink: /blog/scripting-app-updates/
published: true
title: "The Power of Scripting App Updates Without Deploying Packages"
description: "The Power of Scripting App Updates Without Deploying Packages"
blogimgpath: 202408034Up
tags:
categories:
  - automation
  - macos
  - jamf
image: /assets/images/covers/2025/script25.png
thumbnail: /assets/images/covers/2025/script25.png
cta: 2
comments: true
---

Keeping macOS environments up-to-date in a seamless, efficient, and low-maintenance way has always been a challenge for IT admins. Traditional package deployment workflows can be time-consuming, prone to versioning issues, and require extensive testing and repackaging. But there's another way—a more elegant, nimble approach: scripting.

Scripting app installations and updates allows you to skip the packaging step entirely. Instead, you leverage trusted sources, automate installation logic, and let Jamf do what it does best—run policies and execute scripts. Below are three real-world examples that demonstrate the power of scripting app updates without the need for deploying packages.

## 1\. Box Drive Tools Installer

The `[install_Box_tools.sh](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/install_Box_tools.sh)` script automates the installation of Box Drive for macOS by downloading the latest DMG, mounting it, and installing the app. Rather than maintaining a static PKG that quickly becomes outdated, this script pulls the most current version directly from Box’s CDN. It starts by downloading the installer to the local machine, then mounts the disk image quietly in the background. Once mounted, the script uses the built-in `installer` command to deploy the package to the root volume. After the install completes, the script performs cleanup by deleting the temporary package file, ensuring minimal residual clutter. This method provides a lightweight and reliable way to deploy or update Box Drive across a fleet of devices without lifting a finger each time Box releases a new version.

### Script

```
#!/bin/zsh

BOX_URL="https://e3.boxcdn.net/box-installers/desktop/releases/mac/Box.pkg"
PKG_PATH="/tmp/Box.pkg"

# Download with error handling
echo "Downloading Box Drive from $BOX_URL..."
if ! curl -fL -o "$PKG_PATH" "$BOX_URL"; then
  echo "❌ Failed to download Box Drive. URL may have changed or is unreachable."
  exit 1
fi

# Validate file type
if [[ ! -f "$PKG_PATH" ]]; then
  echo "❌ Download failed: Box.pkg not found."
  exit 1
fi

# Install package
echo "Installing Box Drive..."
if ! sudo installer -pkg "$PKG_PATH" -target /; then
  echo "❌ Box Drive installation failed."
  exit 1
fi

# Clean up
rm -f "$PKG_PATH"
echo "✅ Box Drive installed successfully."

```


🔗 [View on GitHub](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/install_Box_tools.sh)

## 2\. Grammarly for Mac Installer

The `[install_Grammarly.sh](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/install_Grammarly.sh)` script simplifies the installation of Grammarly for Mac by eliminating the need to manually track version changes. It automatically downloads the latest `.dmg` from Grammarly’s servers and mounts it to a temporary volume. Once mounted, the script copies the `Grammarly.app` bundle directly to the `/Applications` directory, making it immediately available to the user. After the copy is complete, the script unmounts the disk image and removes the temporary `.dmg` file. This approach ensures that each deployment always uses the newest release without waiting for repackaging cycles or having to manage distribution manually.

### Script

```
#!/bin/zsh

URL="https://download.editor.grammarly.com/mac/Grammarly.dmg"
DMG_PATH="/tmp/Grammarly.dmg"
MOUNTPOINT="/Volumes/Grammarly"

echo "Downloading Grammarly from $URL..."
if ! curl -fL -o "$DMG_PATH" "$URL"; then
  echo "❌ Failed to download Grammarly. URL may have changed or is unreachable."
  exit 1
fi

if [[ ! -f "$DMG_PATH" ]]; then
  echo "❌ Download failed: Grammarly.dmg not found."
  exit 1
fi

echo "Mounting disk image..."
if ! hdiutil attach "$DMG_PATH" -mountpoint "$MOUNTPOINT" -nobrowse -quiet; then
  echo "❌ Failed to mount Grammarly.dmg"
  rm -f "$DMG_PATH"
  exit 1
fi

echo "Copying Grammarly.app to /Applications..."
cp -R "$MOUNTPOINT/Grammarly.app" "/Applications/" || {
  echo "❌ Copy failed."
  hdiutil detach "$MOUNTPOINT" -quiet
  rm -f "$DMG_PATH"
  exit 1
}

# Eject and clean up
hdiutil detach "$MOUNTPOINT" -quiet
rm -f "$DMG_PATH"
echo "✅ Grammarly installed successfully."

```

🔗 [View on GitHub](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/install_Grammarly.sh)

## 3\. Safari Updater

The `[update_Safari.sh](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/update_Safari.sh)` script provides a clean solution to a common issue: how to update Safari without triggering a full macOS update or user disruption. This script uses Apple’s native `softwareupdate` utility to check for and apply Safari-specific updates. It begins by scanning for available updates and filtering results for Safari. If a Safari update is available, it installs it quietly using the `-i` flag with a wildcard pattern matching “Safari.” This approach ensures that Safari remains current, which is especially important in environments where browser security is paramount. The script is lightweight, doesn’t rely on external files, and fits perfectly into a Jamf policy for periodic execution.

### Script

```
#!/bin/zsh

echo "Checking for Safari updates..."
AVAILABLE_UPDATES=$(softwareupdate --list 2>&1)

if echo "$AVAILABLE_UPDATES" | grep -q "Safari"; then
  echo "Safari update found. Installing..."
  if ! softwareupdate -i "Safari*" --verbose; then
    echo "❌ Safari update failed."
    exit 1
  fi
  echo "✅ Safari updated successfully."
else
  echo "✅ No Safari update available."
fi

```

🔗 [View on GitHub](https://github.com/jonbrown21/macOS-JAMF-Scripts/blob/main/Scripts/update_Safari.sh)

---

### 🔁 What Happens if the URL Changes?

If the download URL in any of your scripts changes (for example, Box or Grammarly updates their CDN link structure), **the script will fail silently or throw an error**—depending on how it's written. Here's what you can expect:

- **Best-case scenario**: The script logs an error or fails gracefully (e.g., the file doesn’t download, and the install step doesn’t proceed).
    
- **Worst-case scenario**: The script downloads a corrupted or incorrect file (e.g., an HTML error page saved as `.pkg`), then attempts to run it—potentially throwing system errors or prompting confusing dialogs for the end user.

### ✅ How to Make Your Scripts More Resilient

1. **Check for successful downloads**: Always verify the download actually succeeded and is the expected file type/size.
    
    `if [ ! -f "/tmp/Box.pkg" ]; then   echo "Download failed!"   exit 1 fi`
    
2. **Use `curl -f` or check HTTP status**: `curl -f` tells curl to fail silently on server errors (404, 500).
    
    
    `curl -fL -o "/tmp/Box.pkg" "https://..."`
    
3. **Monitor vendor changelogs or RSS feeds**: Many vendors post update notices when URLs or delivery methods change.
    
4. **Use versioned or redirect-proof URLs when available**: Some vendors maintain stable links (e.g., Grammarly’s) that always point to the latest release.
    
---

## Why This Approach Matters

Shifting your mindset from packaging to scripting is a transformative approach in modern Mac fleet management. With scripting, you gain a level of agility that's hard to match—scripts can be modified and improved on the fly, without the overhead of rebuilding, signing, and notarizing packages. This ensures that your deployments are always pulling from the latest source, so your users receive the most current versions automatically. Beyond the technical benefits, this strategy significantly reduces administrative burden: there’s less to manage, fewer artifacts to maintain, and far fewer opportunities for error. From a security perspective, scripts enable faster response times for pushing updates and closing vulnerabilities, a crucial advantage in today’s threat landscape. When speed, flexibility, and simplicity are top priorities, scripting offers a practical and scalable solution that fits perfectly within the Jamf ecosystem.

Explore more scripts at [macOS-JAMF-Scripts on GitHub](https://github.com/jonbrown21/macOS-JAMF-Scripts).

---

## Ready to take your Apple IT skills and consulting career to the next level?
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**