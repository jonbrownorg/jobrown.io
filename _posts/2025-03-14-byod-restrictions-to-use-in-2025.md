---
layout: post
date: '2025-03-14'
author: Jon Brown
permalink: /blog/byod-restrictions-to-use-in-2025/
published: true
title: "BYOD Restrictions & Strategies for 2025"
description: "BYOD Restrictions & Strategies for 2025"
blogimgpath: 202408034Up
tags:
categories:
  - scripts
  - jamf
  - tutorials
image: /assets/images/covers/2025/byod_restrictions_2025.png
thumbnail: /assets/images/covers/2025/byod_restrictions_2025.png
cta: 2
comments: true
series: byo
---

{% include series.html id="byo" %}

## BYOD Restrictions

As organizations continue to embrace Bring Your Own Device (BYOD) strategies, ensuring security without compromising user experience remains a challenge. This post outlines a minimum baseline for BYOD restrictions across iOS, Android, macOS, and Windows devices—providing a foundation for companies to secure personal devices while allowing employees the flexibility to work from their own hardware. While these recommendations represent best practices, they are not a one-size-fits-all solution. Each company has unique security needs, regulatory requirements, and risk tolerances, meaning these restrictions can be improved upon, debated, or modified to better suit different environments. The goal here is to establish a starting point for securing BYOD devices in 2025 and beyond while balancing security and usability.

## iOS Restrictions for BYOD

In a **Bring Your Own Device (BYOD)** strategy, it is crucial to enforce security policies that balance user privacy with corporate data protection. For **iOS devices**, restrictions ensure that sensitive corporate data remains secure while maintaining a seamless user experience. Compliance checks in **Jamf Pro** help validate whether a device meets these standards.  

### **Functionality Restrictions**  

The table below outlines key restrictions that should be applied to iOS BYOD devices to prevent unauthorized data access, improve security, and maintain compliance:  

| **Setting** | **Platform** | **Enforcement Level** | **Purpose** |
|------------|-------------|---------------------|-------------|
| **Encrypted backups** | iOS | Enforced | Ensures device backups are encrypted, protecting corporate data from unauthorized access. |
| **Limited ad tracking** | iOS | Enforced | Reduces ad tracking to protect user and corporate privacy. |
| **Users to accept untrusted TLS certificates** | iOS, visionOS | Restricted | Prevents users from accepting untrusted security certificates that could lead to man-in-the-middle attacks. |
| **Documents from managed sources open in unmanaged destinations** | iOS | Restricted | Prevents corporate data from being shared with personal apps. |
| **Documents from unmanaged sources open in managed destinations** | iOS | Restricted | Stops unverified personal files from being imported into corporate apps. |
| **Pasteboard respects managed/unmanaged document restrictions** | iOS, tvOS | Enforced | Ensures clipboard data from managed apps cannot be pasted into unmanaged apps. |
| **Unmanaged apps to read contacts from managed contacts accounts** | iOS 12 or later | Restricted | Protects corporate contacts from being accessed by personal apps. |
| **Sending diagnostic reports to Apple** | iOS | Restricted | Prevents the device from sending potentially sensitive system reports to Apple. |
| **Wallet notifications on the Lock Screen** | iOS | Restricted | Protects corporate payment data from unauthorized access. |
| **Control Center on the Lock Screen** | iOS 7 or later | Hidden | Prevents unauthorized access to quick settings without unlocking the device. |
| **Notifications history view on the Lock Screen** | iOS 7 or later | Hidden | Hides notification history to prevent exposure of sensitive corporate information. |

---

## **iOS Compliance Smart Group**  

To ensure compliance, **Jamf Pro Smart Groups** dynamically track devices that meet the BYOD policy. The following criteria should be used to enforce compliance:  

- **Device Ownership Type is Personal (Account-Driven User Enrollment)**  
- **Device Ownership Type is Personal (User Enrollment)**  
- **Jailbreak Detected is No**  

These checks ensure that **only personal devices enrolled through the proper user-driven methods** are allowed access to corporate resources, while **jailbroken devices** (which pose a significant security risk) are **automatically excluded** from corporate access.  

---

### **Why These Restrictions Matter**  

Implementing these restrictions helps **maintain a strong security posture** while allowing employees to use their personal iOS devices for work.  
- **Preventing data leakage**: Managed data remains within corporate apps, reducing the risk of accidental or intentional data leaks.  
- **Enhancing security**: Blocking untrusted certificates and disabling certain Lock Screen functions prevents unauthorized access.  
- **Ensuring regulatory compliance**: Organizations handling sensitive data (e.g., healthcare, finance) must enforce these policies to comply with standards like **GDPR** and **HIPAA**.  

By combining **functional restrictions with compliance checks**, IT administrators can confidently enforce security policies without compromising user experience.  

---

With these policies in place, companies can **enable BYOD securely**, ensuring employees have the flexibility to use their personal devices while maintaining **enterprise security**.  


## macOS Restrictions for BYOD

For **macOS BYOD** devices, restrictions must balance **security, user privacy, and device functionality**. Apple’s **MDM (Mobile Device Management)** framework, particularly through **Jamf Pro**, provides the necessary controls to ensure that **corporate data is protected** while allowing users the flexibility of using personal devices for work.  

---

## **Application Restrictions**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Allow software update notifications** | Restricted | Prevents unnecessary update prompts while still ensuring security updates are applied. |
| **Restrict the App Store** | Restricted | Controls access to third-party applications, reducing the risk of malware and unauthorized software. |

---

## **Media Restrictions**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Internal Disks** | Allow | Permits the use of internal storage for work files. |
| **Disk Images** | Allow | Allows the use of disk images while maintaining security policies. |

---

## **Functionality Restrictions**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Allow use of Camera** | Allowed | Maintains functionality while ensuring that privacy concerns are addressed. |
| **Allow screenshots and screen recording** | Allowed | Prevents unauthorized screen recording but allows necessary documentation. |
| **Allow AirPlay, View Screen by Classroom, and Screen Sharing** | Allowed | Ensures that remote presentations and educational tools are functional. |
| **Allow AirPrint** | Allowed | Allows printing to corporate-managed printers. |
| **Allow discovery of AirPrint printers using iBeacons** | Allowed | Enhances AirPrint usability while keeping managed printers secure. |
| **Allow Spotlight Suggestions** | Allowed | Maintains usability of macOS search features without compromising security. |
| **Allow file provider to access the path of the requesting process** | Allowed | Enables seamless integration of file storage solutions. |
| **Defer updates of software updates for 1 day** | Enforced | Provides a buffer period before updates are pushed. |
| **Include major software updates with a 90-day delay** | Enforced | Prevents immediate installation of major OS updates to ensure compatibility. |
| **Allow devices to install Rapid Security Responses** | Allowed | Ensures urgent security updates are installed promptly. |
| **Allow USB restricted mode** | Allowed | Prevents unauthorized USB accessory access when the device is locked. |

---

## **Security and Privacy: General**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Password Change** | Allowed | Allows users to manage their own passwords securely. |
| **Set Lock Message** | Restricted | Prevents users from changing the lock screen message, ensuring corporate branding and security messages remain intact. |
| **Send diagnostic and usage data to Apple** | Allowed | Enables Apple diagnostic data collection while ensuring corporate data is not exposed. |
| **Unlock macOS using an Apple Watch** | Restricted | Prevents unauthorized access through an Apple Watch. |
| **Gatekeeper** | Mac App Store and identified developers only | Ensures only verified apps can be installed. |
| **Temporarily override Gatekeeper settings** | Restricted | Prevents users from bypassing Gatekeeper to install unauthorized software. |

---

## **Security and Privacy: FileVault (Disk Encryption)**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Enable FileVault** | Enabled | Provides full disk encryption to protect corporate and personal data. |
| **Event to prompt FileVault enablement** | At Login | Ensures users are prompted to enable encryption. |
| **Force Enable in Setup Assistant** | Enabled | Ensures FileVault is enabled at device setup. |
| **Recovery keys** | Personal | Allows users to recover their encrypted data. |
| **Display personal recovery key to user** | Hidden | Ensures recovery keys are securely stored and not exposed. |
| **Allow users to bypass FileVault prompts at login** | Always Prompt | Prevents users from skipping FileVault encryption. |
| **User adjustment of FileVault options** | Prevented | Ensures FileVault settings remain secure. |
| **Require user to unlock FileVault after hibernation** | Disabled | Reduces unnecessary login prompts while maintaining security. |
| **Secure Token User Prompt** | Displayed | Ensures secure token authorization. |
| **Escrow Personal Recovery Key** | Enabled | Encrypts recovery keys and securely stores them in Jamf Pro. |

---

## **Security and Privacy: Firewall**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Firewall settings change** | Restricted | Prevents users from modifying firewall settings. |
| **Firewall** | Enabled | Ensures the firewall is always active on managed macOS devices. |
| **Policy** | All incoming connections blocked | Blocks unauthorized incoming network connections. |
| **Stealth Mode** | Enabled | Hides the device from unauthorized network scans. |

---

## **macOS BYOD Compliance Smart Group (Jamf Pro)**  

To ensure **macOS devices meet compliance**, a **smart group** in **Jamf Pro** can check the following:  

| **Condition** | **Criteria** |
|--------------|-------------|
| **Compliance - Failed Results Count** | More than 0 |

This ensures that **devices failing compliance checks** are flagged, allowing IT teams to take appropriate action.

---

## **Why These Restrictions Matter**  

For macOS **BYOD deployments**, enforcing **security policies** ensures:  

- **Corporate data remains protected** even on **personally owned devices**.  
- **Unauthorized apps and software installations are prevented**, reducing security risks.  
- **Disk encryption (FileVault)** secures data in case of device theft or loss.  
- **Firewall and network security policies** prevent unauthorized network access.  
- **Controlled software updates** ensure system stability and compatibility.  

By implementing these **macOS restrictions and compliance checks**, organizations can **allow BYOD while maintaining security and compliance** with corporate policies.  


## Android Restrictions for BYOD

Implementing **Bring Your Own Device (BYOD)** policies for **Android** devices requires a balance between corporate security and user privacy. Android's **Work Profile** feature allows organizations to manage business data while keeping personal data separate. By enforcing the following **restrictions and compliance checks**, IT teams can secure corporate resources while ensuring user flexibility.  

---

## **Android BYOD Restrictions (Configurations)**  

The following **work profile settings** help prevent data leaks, enforce security measures, and ensure a seamless work experience:  

### **Work Profile Settings**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Copy and paste between work and personal profiles** | Block | Prevents users from copying corporate data into personal apps. |
| **Work profile notifications while device locked** | Block | Protects sensitive notifications from being visible on the lock screen. |
| **Screen capture** | Block | Prevents screenshots from being taken within work apps. |
| **Display work contact caller-ID in personal profile** | Block | Protects work contact privacy from appearing in personal apps. |
| **Search work contacts from personal profile** | Block | Prevents access to corporate contacts from personal apps. |
| **Allow widgets from work profile apps** | Enable | Allows work-related widgets to be used for productivity. |
| **Require Work Profile Password** | Require | Enforces password protection for accessing work apps. |
| **Password expiration (days)** | 365 | Ensures employees reset their work profile passwords annually. |

### **Password Requirements**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Password expiration (days)** | 365 | Ensures users update passwords regularly. |
| **Required password type** | Device default | Maintains secure access based on the device's security settings. |

### **System Security**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Threat scan on apps** | Require | Ensures all work apps are scanned for malware and security threats. |
| **Prevent app installations from unknown sources in the personal profile** | Block | Prevents unauthorized app installations that may pose a risk to corporate data. |

### **Connectivity**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Always-on VPN** | Enable | Ensures that corporate data is always transmitted through a secure VPN connection. |
| **VPN client** | Custom | Allows IT to define a specific VPN client for secure access. |
| **Package ID** | Your VPN Package ID Here | Specifies the package ID of the VPN application for compliance. |

---

## **Android BYOD Compliance Checks in Intune**  

To ensure devices meet security requirements, **compliance checks** in **Microsoft Intune** or **Google Enterprise** should validate the following:  

### **Device Health Compliance**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Rooted devices** | Block | Prevents compromised (rooted) devices from accessing corporate data. |
| **Google Play Services is configured** | Required | Ensures the device has critical Google services enabled for security updates. |
| **Up-to-date security provider** | Required | Validates that the device has the latest security patches. |
| **Threat scan on apps** | Required | Ensures apps undergo security threat analysis. |
| **Play Integrity Verdict** | Check basic integrity | Confirms device integrity to prevent tampering. |

### **Device Security Compliance**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Block apps from unknown sources** | Block | Prevents sideloading of unauthorized apps. |
| **Company Portal app runtime integrity** | Required | Ensures the **Intune Company Portal app** is running securely. |
| **Require a password to unlock mobile devices** | Required | Enforces password protection on personal devices accessing work apps. |
| **Microsoft Defender for Endpoint** | Require the device to be at or under the machine risk score: Low | Ensures the device is categorized as **low risk** before accessing corporate data. |

---

## **Why These Restrictions Matter**  

These settings ensure that **corporate security** is upheld while still allowing employees to use **personal Android devices** for work. The **Work Profile** separation allows organizations to:  

- **Prevent data leaks** by blocking **copy-paste, screenshots, and unauthorized access** to corporate data.  
- **Enforce security** by requiring **passwords, VPN connections, and malware scans**.  
- **Reduce the risk of compromised devices** by blocking **rooted devices and apps from unknown sources**.  

By implementing these restrictions and **compliance checks**, businesses can **securely enable BYOD** while minimizing risks to corporate data.  


## Windows Restrictions for BYOD

For **Windows BYOD** devices, security policies must ensure that **corporate data remains protected** while allowing **employees to use personal devices** for work. Using **Intune, Group Policy, and security configurations**, organizations can enforce restrictions that **mitigate security risks** while maintaining a seamless user experience.  

---

## **Application & Browser Restrictions**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Enable saving passwords to the password manager (Microsoft Edge)** | Disabled | Prevents users from storing corporate credentials in a browser, reducing credential theft risks. |

---

## **Firewall & Defender Policies**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Enable Domain Network Firewall** | True | Ensures firewall protection is always enabled on corporate networks. |
| **Defender Engine Updates Channel** | Default | Keeps the device updated automatically. |
| **Security Intelligence Updates Channel** | Default | Ensures the latest security intelligence is applied to protect against malware. |

---

## **BitLocker & Disk Encryption Policies**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Enforce drive encryption type on OS drives** | Enabled | Ensures full disk encryption for the OS drive. |
| **Encryption type (OS Drive)** | Full encryption | Provides maximum security by encrypting all data. |
| **Require additional authentication at startup** | Disabled | Prevents unnecessary authentication steps on boot while still enforcing encryption. |
| **Enforce drive encryption type on fixed data drives** | Enabled | Ensures all fixed drives are encrypted. |
| **Encryption type (Fixed Data Drives)** | Full encryption | Prevents unauthorized access to fixed data drives. |
| **Require Device Encryption** | Enabled | Ensures all BYOD devices have encryption enforced. |
| **Allow Warning for Other Disk Encryption** | Disabled | Prevents conflicts with other encryption software. |
| **Allow Standard User Encryption** | Enabled | Allows non-administrator users to encrypt their drives. |
| **Configure Recovery Password Rotation** | Enabled for Azure AD-joined devices | Ensures recovery passwords are rotated for added security. |

---

## **System Time Synchronization**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Enable Windows NTP Client** | Enabled | Ensures time synchronization with network time servers for security events and logging. |

---

## **Password & Lock Screen Policies**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Require Password** | Enabled | Enforces password protection on BYOD devices. |
| **Maximum minutes of inactivity before screen locks** | 15 minutes | Ensures idle devices are locked automatically. |
| **Simple passwords** | Block | Prevents users from using weak passwords. |

---

## **Attachment & Notification Policies**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Do not preserve zone information in file attachments** | Disabled | Ensures files retain security information to prevent execution of malicious content. |
| **Turn off toast notifications on the lock screen** | Enabled | Prevents notifications from exposing sensitive work-related information on the lock screen. |

---

## **User Experience Restrictions**  

| **Setting** | **Action** | **Purpose** |
|------------|-----------|-------------|
| **Allow Windows Spotlight** | Allowed | Maintains user experience without impacting security. |
| **Allow Third-Party Suggestions in Windows Spotlight** | Blocked | Prevents external content from being displayed, reducing security risks. |

---

## **Windows BYOD Compliance Smart Group (Intune)**  

To ensure **Windows BYOD devices meet compliance**, **Intune compliance policies** should check for the following:  

| **Condition** | **Criteria** |
|--------------|-------------|
| **BitLocker Encryption** | Required |
| **Firewall** | Required |
| **Trusted Platform Module (TPM)** | Required |
| **Antivirus** | Required |
| **Antispyware** | Required |
| **Microsoft Defender Antimalware** | Required |
| **Microsoft Defender Security Intelligence Up-to-Date** | Required |
| **Real-time Protection** | Required |
| **Minimum number of non-alphanumeric characters in password** | 2 |

This ensures that **only compliant devices can access corporate resources**, reducing **security vulnerabilities and data breaches**.

---

## **Why These Restrictions Matter**  

Windows **BYOD security policies** play a **critical role** in protecting corporate assets while allowing **employees to work efficiently** on their personal devices. These restrictions help:  

- **Prevent unauthorized data access** through strong **BitLocker encryption**.  
- **Enhance network security** with **firewall and Defender policies**.  
- **Enforce strong authentication** with **password complexity and lock screen settings**.  
- **Reduce malware risks** by **blocking unsafe attachments and unauthorized software execution**.  
- **Ensure compliance** through **Intune’s device compliance checks**, allowing only secure devices to connect to the corporate network.  

## Conclusion

BYOD security is a constantly evolving landscape, and while this post provides a solid baseline, there are always additional controls and improvements that organizations can consider. Security teams should continuously evaluate new threats, compliance requirements, and technological advancements to refine their approach. But what do you think? Do these restrictions align with your company’s BYOD policy? Are there additional safeguards you would recommend? Let’s start a conversation—drop your thoughts, suggestions, or critiques in the comments below! 🚀

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
