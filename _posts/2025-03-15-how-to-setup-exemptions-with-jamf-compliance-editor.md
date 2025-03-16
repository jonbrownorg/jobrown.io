---
layout: post
date: '2025-03-15'
author: Jon Brown
permalink: /blog/how-to-setup-exemptions-with-jamf-compliance-editor/
published: true
title: "How to setup exemptions with JAMF Compliance Editor"
description: "How to setup exemptions with JAMF Compliance Editor"
blogimgpath: 202408034Up
tags:
categories:
  - scripts
  - jamf
  - tutorials
image: /assets/images/covers/2025/exemptions_compliance_editor.png
thumbnail: /assets/images/covers/2025/exemptions_compliance_editor.png
cta: 2
comments: true
---

## Setting the stage

If you are new to either the macOS Compliance Project or JAMF Compliance Editor, I would recommend watching and reading the following videos and blog posts on the topic. 

- [NIST macOS Security & JAMF Compliance Review](/blog/nist-macos-security-and-jamf-compliance/)
- [NIST macos security How-To](https://github.com/Honestpuck/NIST-macos-security-HOWTO)
- [2023 JNUC Presentation on JAMF Compliance Editor](https://www.youtube.com/watch?v=hCq4PbLX0Tc&list=PLlxHm_Px-Ie2uIFiar6_3JejiOnObiujM&index=129)

Lets assume for the sake of this blog post that you are familiar with both of these wonderful solutions to baseline compliance on macOS. 

For many who use JAMF and the macOS Compliance Project, the use of JAMF Compliance Editor, a GUI tool that helps you to automate the process of picking, and tailoring your baseline for macOS hardening is a no brainer. 

It works extremely well and when done it creates a series of useful files that you can use to pass compliance audit but also to systematically enforce baseline settings and configurations to your fleet of macOS workstations or iOS devices. 

When you build your baseline it generates a series of folders and files in your "Build" folder area. I created a tailored version of the 800-53r5_moderate baseline so my files are named accordingly with the 800-53r5_moderate as teh file name. 

Here are the contents of my /build/800-53r5_moderate folder

- 800-53r5_moderate_compliance.sh: A script you can use to check if a device is in compliance.
- 800-53r5_moderate.adoc - an adoc file you can use to show all the tests that are in scope for your tailored baseline.
- 800-53r5_moderate.html - an HTML file you can use to show all the tests that are in scope for your tailored baseline.
- 800-53r5_moderate.pdf - a PDF file you can use to show all the tests that are in scope for your tailored baseline.
- 800-53r5_moderate.xls - an Excel file you can use to show all the tests that are in scope for your tailored baseline.
- jamfpro - A folder of JAMF Pro specific Computer Extensions to use for smart groups and reporting. It also includes a JSON file of tests that are in scope.
- mobileconfigs - A folder of Mobile Config files that you can deploy to enforce settings in scope for your tailored baseline. 
- preferences - A with a file inside it that tells you the tests that are exempt or in scope. 

When you build a tailored baseline it creates a JSON File in the /jamfpro folder called 800-53r5_moderate.json (remember your name will be different its named that for me because thats the baseline I am working with).

This file has ALL the items that are included in the baseline even the items you have exempted or removed. You can use this file and create a set of exemptions. 

## How exactly do you setup Exemptions with the outputted JSON File?

There are a few blog posts that are written out there that have a few tips or tricks that you can follow but no step by step guides that I could find until I found this one. 

- [NIST macos security How-To](https://github.com/Honestpuck/NIST-macos-security-HOWTO)

It at least pointed me in the right direction which was super helpful. Turns out that in essence there are two options. 

Option #1 you can use a script that [Bob Gendler](https://github.com/boberito) where you can it against your tailored baseline to generate an exemption json file that you can use in JAMF Pro. 

Option #2 you can use the JSON file that comes as a standard output file located in the /build/<your baseline name>/jamfpfo/<your baseline name>.json

Both steps assume that you have deployed the compliance script, the mobileconfig files and he preference file in the /preferences folder.

## The importance of Preference Naming

Before we move forward lets be clear on a few concepts with the macOS Compliance Project and the JAMF Compliance Editor. The name of the files and the name of the preferences matter, greatly. 

When you use the JAMF Compliance Editor and you build a baseline it comes with a set of premade scripts that is to be used as a Computer Extension in JAMF.

- compliance-FailedResultsList.sh: A script that will return a list of failed tests that are not passing the baseline test. 
- compliance-exemptions.sh: A script that reads the preference file for exemptions that you may have set locally on each machine. 
- compliance-FailedResultsCount.sh: A script that counts the number of failed tests. Useful for creating smart groups or reporting on non compliant devices. 
- compliance-version.sh: A script that lists the version of the baseline that you are testing for on a specific machine. 

Lets take a look at each script so you can understand what file its looking for on the Mac in question so you can understand what preference domain that you must use for each item that you use in JAMF that comes from the JAMF Compliance Editor. 

Lets take a look at the compliance-FailedResultsList.sh in this file it specifically is looking for a file by running the following variable.

{% highlight bash %}
audit=$(/bin/ls -l /Library/Preferences | /usr/bin/grep 'org.*.audit.plist' | /usr/bin/awk '{print $NF}')
{% endhighlight %} 

Its looking for a file named org.800-53r5_moderate.audit.plist, I know this because the wildcard in the variable above is a placeholder for the name of my baseline which happens to be as mentioned 800-53r5_moderate.

The org.800-53r5_moderate.audit.plist file is included in the /build/<your baseline name>/preferences/org.<your baseline name>.audit.plist

This file is important to deploy to your endpoints because its the preference file that the script and the computer extensions will use to know which baseline to test your system on. 

Lets now take a look at compliance-FailedResultsCount.sh in this file it specifically is looking for a file by running the following variable.

{% highlight bash %}
audit=$(/bin/ls -l /Library/Preferences | /usr/bin/grep 'org.*.audit.plist' | /usr/bin/awk '{print $NF}')
{% endhighlight %} 

Wait the variable s the same, its looking for the same preference name? Is that correct? YES! The naming convention here is the same but if you look further down the script you will see

{% highlight bash %}
exemptfile="/Library/Managed Preferences/${audit}"
{% endhighlight %} 

That it calls that audit variable just for the name but references a new location for the exemptions. So we have 2 preference files one in 

/Library/Preferences/ - Which is where the tests that are in scope are defined
/Library/Managed Preferences/ - Which is where the tests that are out of scope are defined

Both have the same preference domain. This confused me a bit at first so I wanted to call this out as it was not fully clear to me in any blog posts or documentation items.

## Option #1: Generate a clean JSON with Script

*DISCLAIMER* You only NEED to do this step if you are using the macOS Compliance Project without the JAMF Compliance Editor. 

As mentioned [Bob Gendler](https://github.com/boberito) wrote a [script](https://github.com/boberito/mscp_jamf/blob/main/generate_json.py) that you can use to create a JSON file for the purposes of creating the preference file that will live in the Library/Managed Preferences/ folder.

Certain security baselines enforce the use of Common Access Cards (CAC) for authentication. While this may be necessary for larger organizations, it might not be practical for a small business. To disable this requirement, simply update the preference file by changing <true/> to <false/> and deploy it just as you would with other configuration profiles. By limiting the scope of this preference file to the appropriate devices, the issue is resolved without affecting the rest of the environment.

Manually managing these kinds of exceptions can quickly become time-consuming and prone to errors. Using the above script, it generates a structured JSON file that can be uploaded to Jamf, making it easy to toggle specific rules on or off as needed. 

To use it, place the script inside the scripts directory of your project, then execute the following command:

{% highlight bash %}
$ ./scripts/generate_json.py /build/baselines/<name of your custom baseline exemptions only>.yaml
{% endhighlight %} 

Applying the script to a full baseline as stated [here](https://github.com/Honestpuck/NIST-macos-security-HOWTO?tab=readme-ov-file), can result in an extensive JSON file that has ALL of your baseline items including those that are in scope. To make it more manageable, I created a separate version of the file with _exempt added to its name. I then went through and eliminated any rules that would never need exemptions, significantly reducing both the number of rules and the overall file size.

Once you have the JSON File you can upload it to JAMF Pro as outlined [here](https://docs.jamf.com/technical-papers/jamf-pro/json-schema/10.19.0/Customize_the_App_Using_Jamf_Pro.html)

1. Log in to Jamf Pro.
2. Navigate to Computers > Configuration Profiles.
3. Click New to create a new configuration profile.
4. Under the Options tab, choose Application & Custom Settings.
5. Click + Add and select Custom Schema.
6. Enter the Preference Domain for the application. You must choose the preference org.*.audit.plist where the wildcard is your baseline name
7. Click Upload Schema and select your JSON file.
8. Once uploaded, verify that the settings appear correctly in the Jamf UI.

The benefit of this step is that the JSON file you upload is the delta or the exceptions of the tailored baseline so all of the items you will configure will be selected and you can select them all vs scanning through a large file of ALL items and only selecting the few that are true exemptions. 

**Configuring Exemptions in the Custom Schema**

1. Navigate to the Configuration Profile
- In Jamf Pro, go to Computers > Configuration Profiles.
- Select the profile where you uploaded the JSON schema.
2. Modify Properties Based on Your Organization's Needs
- Locate the Preference Domain (e.g., org.cis_lvl2_puck.audit.plist).
- Click Add/Remove Properties to customize the settings.
3. Setting an Exemption
- Identify the rule you want to modify (e.g., os_httpd_disable).
- Set the exempt field to true or false:
-- true means the setting is being exempted.
-- false means the rule is enforced.
- If exempt = true, an exempt_reason is required.
- Example: "web server required for app testing"

## Option #2: Use the JSON that comes with your build

Using Jamf Compliance Editor (JCE) simplifies the process of generating a .json file for external application preferences in Jamf Pro. However, this file includes all baseline items—even those not in scope—so some manual cleanup may be required. Below are the detailed steps to create and configure an external application preference using JCE and a JSON schema.

**Generate the JSON Schema Using Jamf Compliance Editor** 

1. Open Jamf Compliance Editor and load your baseline.
2. Click Build to generate the JSON schema.
3. Locate the file in:

{% highlight bash %}
/build/<your_baseline_name>/jamfpro/<your_baseline_name>.json
{% endhighlight %}
{:start="4"}
4. Modify the JSON file if necessary:
- Remove unnecessary rules to exclude out-of-scope items manually.
- Alternatively, you can leave all rules in place and disable out-of-scope items later in Jamf Pro.

**Upload the JSON Schema to Jamf Pro**

1. Log in to Jamf Pro.
2. Navigate to Computers > Configuration Profiles and click New.
3. In the General payload, provide a profile name and description.
4. Select Application & Custom Settings and click Configure.
5. Choose Custom Schema as the source.
6. Set the Preference Domain:
-- This is critical—it must match the application’s preference domain, e.g., com.example.app.
7. Copy and paste the JSON schema into the Custom Schema field.
8. Click Save to apply changes.

**Configuring Exemptions in the Custom Schema**

1. Navigate to the Configuration Profile
- In Jamf Pro, go to Computers > Configuration Profiles.
- Select the profile where you uploaded the JSON schema.
2. Modify Properties Based on Your Organization's Needs
- Locate the Preference Domain (e.g., org.cis_lvl2_puck.audit.plist).
- Click Add/Remove Properties to customize the settings.
3. Setting an Exemption
- Identify the rule you want to modify (e.g., os_httpd_disable).
- Set the exempt field to true or false:
-- true means the setting is being exempted.
-- false means the rule is enforced.
- If exempt = true, an exempt_reason is required.
- Example: "web server required for app testing"


## Conclusion

I hope this blog post outlines the steps clearly for those that need to use the exemptions feature of the macOS compliance project and the JAMF Compliance Editor to work with the provided reporting computer extensions in JAMF Pro correctly. 

Understanding that the preference domain is the glue that holds this configuration all together is critical to ensuring that the computer extensions run correctly and that your preferences for exempt items in your baseline are deployed to each in scope workstation.

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
- [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts)
- [Bob Gendler: generate_json.py](https://github.com/boberito/mscp_jamf/blob/main/generate_json.py)
- [NIST macOS Security & JAMF Compliance Review](/blog/nist-macos-security-and-jamf-compliance/)
- [Customize the App using JAMF Pro](https://docs.jamf.com/technical-papers/jamf-pro/json-schema/10.19.0/Customize_the_App_Using_Jamf_Pro.html)
- [NIST macos security How-To](https://github.com/Honestpuck/NIST-macos-security-HOWTO)
- [2023 JNUC Presentation on JAMF Compliance Editor](https://www.youtube.com/watch?v=hCq4PbLX0Tc&list=PLlxHm_Px-Ie2uIFiar6_3JejiOnObiujM&index=129)
