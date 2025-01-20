---
layout: post
date: '2025-01-19'
author: Jon Brown
permalink: /blog/some-of-my-favorite-app-configs-in-jamf/
published: true
title: "Some of my favorite iOS and macOS App Configurations in JAMF"
description: "Some of my favorite iOS and macOS App Configurations in JAMF"
blogimgpath: 202408034Up
tags:
categories:
  - scripts
  - jamf
  - tutorials
image: /assets/images/covers/2025/appconfigs_jamf.png
thumbnail: /assets/images/covers/2025/appconfigs_jamf.png
cta: 2
comments: true
---

## About App Configs and Managed Preferences

As I work on building out my [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts) I am constantly looking at sharing some of the configurations that have worked for me and saved me time and effort. Many of these came from the JAMF Library, but some I wrote specifically due to tools and workflows that I had to tackle in my very own ecosystem. 

The following iOS App Configs were helpful in automating the configuration of key iOS apps. Some of these were a direct result of the [AppConfig Generator](https://generator.appconfig.jamfresearch.com/generator), if you are unfamiliar with this amazing tool I highly recommend checking it out as it offers a lot of good templates for specific app configurations. 

It also allow you to upload App Configurations from specific developers websites. A good example of this here is [ZOOM for iOS](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064102) which has a great support article on the topic that shows you sample configuration key pair values and XML examples to try right in JAMF. 


## Outlook iOS

Microsoft Outlook is one of those apps that has a great [support article](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune) outlining how to take advantage of an app config. Using the configuration below I was able to preconfigure the iOS app to ensure that users had to put in the minimal amount of information before using it. 

Notice I am using Microsoft Authenticator which is why I called out "ModernAuth" specifically. 

{% highlight bash %}
<dict>
    <key>com.microsoft.outlook.EmailProfile.AccountType</key>
    <string>ModernAuth</string>
    <key>com.microsoft.outlook.EmailProfile.EmailAddress</key>
    <string>$EMAIL</string>
    <key>com.microsoft.outlook.EmailProfile.EmailUPN</key>
    <string>$EMAIL</string>
    <key>com.microsoft.outlook.Mail.FocusedInbox</key>
    <false/>
    <key>com.microsoft.outlook.Mail.OrganizeByThreadEnabled</key>
    <true/>
    <key>com.microsoft.outlook.Mail.DefaultSignatureEnabled</key>
    <true/>
    <key>IntuneMAMAllowedAccountsOnly</key>
    <string>Disabled</string>
</dict>
{% endhighlight %} 


## Teams iOS

This one took some research. Yes you can use the AppConfig Generator but I specifically only wanted to allow limit logins. Thanks so much fot palmna a contributer on JAMF Nation that posted [here](https://community.jamf.com/t5/jamf-pro/jamf-and-microsoft-teams-limit-access-to-specific-tenant-id/m-p/307416).

{% highlight bash %}
<dict>
    <key>IntuneMAMAllowedAccountsOnly</key>
    <string>Enabled</string>
    <key>IntuneMAMUPN</key>
    <string>$EMAIL</string>
</dict>
{% endhighlight %} 


## ZOOM iOS

I already mentioned that [ZOOM for iOS](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064102) has a great support page. I only wanted to force SSO this AppConfig works great for that but there are so many other options you can set depending on your requirements. 

{% highlight bash %}
<dict>
	<key>ForceLoginWithSSO</key>
	<true/>
	<key>ForceSSOURL</key>
	<string><SSO Short Name></string>
</dict>
{% endhighlight %} 


## Box iOS

I Used the [AppConfig Generator](https://generator.appconfig.jamfresearch.com/generator) to generate this AppConfig. Using the ID: com.box.mdmios/current I was able to generate this appconfig that works great. You must get your Public ID from your CSM. 

{% highlight bash %}
<dict>
	<key>Public ID</key>
	<string><From Client Success Team></string>
	<key>Management ID</key>
	<string>$UDID</string>
	<key>com.box.mdm.oneTimeToken</key>
	<string>$UDID</string>
	<key>User Email Address</key>
	<string>$EMAIL</string>
	<key>Billing ID</key>
	<string/>
</dict>
{% endhighlight %} 


## ZOOM macOS

Now were shifting into the world of maOS managed preferences. ZOOM has a great article [Mass-deploying with preconfigured settings for macOS](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064957). Unlike AppConfigs that you deploy via the App configuration itself, for macOS preferences you will upload these PLIST files directly as a configuration profile on computers with the app that you wish to configure. 

In this case we are saying, no facebook, or google is allowed to login to ZOOM. the article shows the full list of key value pairs that you can use in your configuration. 

{% highlight bash %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
   <dict>
      <key>PayloadContent</key>
      <array>
         <dict>
            <key>NoFacebook</key>
            <true />
            <key>NoGoogle</key>
            <true />
            <key>PayloadDisplayName</key>
            <string>Zoom</string>
            <key>PayloadIdentifier</key>
            <string>us.zoom.config.290336AE-AB44-42F9-A54D-1EDD457C19FC</string>
            <key>PayloadType</key>
            <string>us.zoom.config</string>
            <key>PayloadUUID</key>
            <string>290336AE-AB44-42F9-A54D-1EDD457C19FC</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
         </dict>
      </array>
      <key>PayloadDisplayName</key>
      <string>ZOOM Preferences</string>
      <key>PayloadIdentifier</key>
      <string>7F13E4DE-C754-4EC2-88AE-6272EA33B368</string>
      <key>PayloadType</key>
      <string>Configuration</string>
      <key>PayloadUUID</key>
      <string>B3397A0D-94B9-4996-A80E-75397AAB8118</string>
      <key>PayloadVersion</key>
      <integer>1</integer>
   </dict>
</plist>
{% endhighlight %} 

## OneDrive macOS

Just like with ZOOM, Microsoft has a great article [Deploy and configure the OneDrive sync app for Mac](https://learn.microsoft.com/en-us/sharepoint/deploy-and-configure-on-macos) which outlines the configurations that you can use with OneDrive. 

Here I am disabling the PersonalSync, Tutorial, and ensuring that we hide the dock icon and launch at login. Launch at login is something that lots of admins struggle with, with OneDrive specifically so I hope this helps some of you out there!

{% highlight bash %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>DisablePersonalSync</key>
    <false/>
    <key>DisableTutorial</key>
    <true/>
    <key>AutomaticUploadBandwidthPercentage</key>
    <integer>0</integer>
    <key>UploadBandwidthLimited</key>
    <integer>0</integer>
    <key>DownloadBandwidthLimited</key>
    <integer>0</integer>
    <key>HideDockIcon</key>
    <true/>
    <key>OpenAtLogin</key>
    <true/>
    <key>SharePointOnPremFrontDoorUrl</key>
    <string/>
    <key>SharePointOnPremPrioritizationPolicy</key>
    <integer>0</integer>
    <key>SharePointOnPremTenantName</key>
    <string><NAME GOES HERE></string>
    <key>SharePointOnPremPrioritzationPolicy</key>
    <integer>0</integer>
    <key>DefaultToBusinessFRE</key>
    <false/>
    <key>EnableAddAccounts</key>
    <true/>
    <key>FilesOnDemandEnabled</key>
    <true/>
    <key>IsHydrationToastAllowed</key>
    <false/>
    <key>HydrationDisallowedApps</key>
    <string/>
    <key>EnableODIgnore</key>
    <array/>
    <key>EnableSyncAdminReports</key>
    <integer>0</integer>
    <key>EnableAllOcsiClients</key>
    <false/>
    <key>DisableAutoConfig</key>
    <integer>0</integer>
    <key>DisableHydrationToast</key>
    <false/>
    <key>BlockExternalSync</key>
    <true/>
    <key>KFMOptInWithWizard</key>
    <string/>
    <key>KFMSilentOptIn</key>
    <string>true</string>
    <key>KFMSilentOptInDesktop</key>
    <true/>
    <key>KFMSilentOptInDocuments</key>
    <true/>
    <key>KFMSilentOptInWithNotification</key>
    <true/>
    <key>KFMBlockOptIn</key>
    <integer>0</integer>
    <key>KFMBlockOptOut</key>
    <false/>
  </dict>
</plist>
{% endhighlight %} 

## Conclusion

I hope you enjoyed these snippets and that they help you in your environment. These have worked well for me and I hope we can contribute and enhance the capabilities of the AppConfig Generator as well as start the conversation around pre-configuring software for macOS and iOS. 

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
- [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts)
- [AppConfig Generator](https://generator.appconfig.jamfresearch.com/generator)
- [ZOOM for iOS AppConfig](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064102)
- [Outlook for iOS AppConfig](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune)  
- [Teams for iOS Discussion re: AppConfig](https://community.jamf.com/t5/jamf-pro/jamf-and-microsoft-teams-limit-access-to-specific-tenant-id/m-p/307416)
- [Mass-deploying with preconfigured settings for macOS](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064957)
- [Deploy and configure the OneDrive sync app for Mac](https://learn.microsoft.com/en-us/sharepoint/deploy-and-configure-on-macos) 