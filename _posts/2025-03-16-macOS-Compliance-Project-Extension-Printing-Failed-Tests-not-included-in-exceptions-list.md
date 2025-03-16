---
layout: post
date: '2025-03-16'
author: Jon Brown
permalink: /blog/macOS-Compliance-Project-Extension-Printing-Failed-Tests-not-included-in-exemptions-list/
published: true
title: "Modified JAMF Compliance Editor Extension: List failed items NOT in exemption list"
description: "Modified JAMF Compliance Editor Extension: List failed items NOT in exemption list"
blogimgpath: 202408034Up
tags:
categories:
  - scripts
  - jamf
  - tutorials
image: /assets/images/covers/2025/jamf_extention_attributes_editor.png
thumbnail: /assets/images/covers/2025/jamf_extention_attributes_editor.png
cta: 2
comments: true
---

## macOS Compliance Project + JAMF Compliance Editor

As promised I am continuing to look for ways to build out my [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts). One of the items that I have been working heavily with in my role is the macOS Compliance Project and as I am a JAMF administrator that means leveraging the [JAMF Compliance Editor](https://trusted.jamf.com/docs/establishing-compliance-baselines). The JAMF Compliance Editor gives you the ability to rapidly configure, tailor and deploy a custom baseline with the macOS Compliance Project. 

If you are new to either the macOS Compliance Project or JAMF Compliance Editor, I would recommend watching and reading the following videos and blog posts on the topic. 

- [NIST macOS Security & JAMF Compliance Review](/blog/nist-macos-security-and-jamf-compliance/)
- [NIST macos security How-To](https://github.com/Honestpuck/NIST-macos-security-HOWTO)
- [2023 JNUC Presentation on JAMF Compliance Editor](https://www.youtube.com/watch?v=hCq4PbLX0Tc&list=PLlxHm_Px-Ie2uIFiar6_3JejiOnObiujM&index=129)

Lets assume for the sake of this blog post that you are familiar with both of these wonderful solutions to baseline compliance on macOS. 

## JAMF Compliance Editor

When you use the JAMF Compliance Editor and you build a baseline it comes with a set of premade scripts that is to be used as a Computer Extension in JAMF.

- compliance-FailedResultsList.sh: A script that will return a list of failed tests that are not passing the baseline test. 
- compliance-exemptions.sh: A script that reads the preference file for exemptions that you may have set locally on each machine. 
- compliance-FailedResultsCount.sh: A script that counts the number of failed tests. Useful for creating smart groups or reporting on non compliant devices. 
- compliance-version.sh: A script that lists the version of the baseline that you are testing for on a specific machine. 

Each of these does what it says well. However they, in my mind, have one flaw. They do not take account for each other. For example if you have no exemptions for your baseline then these will work entirely well. 

However if you do have exemptions you likely will not want to list the failed tests that are also no longer in scope. 

## Computer Extension: Failed Results List

Lets focus on compliance-FailedResultsList.sh

The point of the file is to loop through and list all the tests that your baseline has failed on for each computer and display it on the users computer record. This is great and serves an important function. You can now attest to an auditor that you are passing or failing a test and you can prove that you are actively testing and flagging the test results from JAMF. 

This is important because its critical that you be aware when a computer falls out of compliance. The entire point of this extension is that you can use it to create smart groups and alerts to ensure you are aware when a computer is no longer in a compliant state. 

Here is a copy of the script in question. 

{% highlight bash %}
#!/bin/bash
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#
# Copyright (c) 2022 Jamf.  All rights reserved.
#
#       Redistribution and use in source and binary forms, with or without
#       modification, are permitted provided that the following conditions are met:
#               * Redistributions of source code must retain the above copyright
#                 notice, this list of conditions and the following disclaimer.
#               * Redistributions in binary form must reproduce the above copyright
#                 notice, this list of conditions and the following disclaimer in the
#                 documentation and/or other materials provided with the distribution.
#               * Neither the name of the Jamf nor the names of its contributors may be
#                 used to endorse or promote products derived from this software without
#                 specific prior written permission.
#
#       THIS SOFTWARE IS PROVIDED BY JAMF SOFTWARE, LLC "AS IS" AND ANY
#       EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
#       WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
#       DISCLAIMED. IN NO EVENT SHALL JAMF SOFTWARE, LLC BE LIABLE FOR ANY
#       DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
#       (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
#       LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
#       ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
#       (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
#       SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
######
# INSTRUCTIONS
# This Jamf Extension Attribute is used in conjunction with the macOS Security Compliance project (mSCP)
# https://github.com/usnistgov/macos_security
#
# Upload the following text into Jamf Pro Extension Attribute section.
#
# Used to gather the list of failed controls from the compliance audit.
######

audit=$(/bin/ls -l /Library/Preferences | /usr/bin/grep 'org.*.audit.plist' | /usr/bin/awk '{print $NF}')
FAILED_RULES=()
if [[ ! -z "$audit" ]]; then

    count=$(echo "$audit" | /usr/bin/wc -l | /usr/bin/xargs)
    if [[ "$count" == 1 ]]; then
        auditfile="/Library/Preferences/${audit}"

        rules=($(/usr/libexec/PlistBuddy -c "print :" "${auditfile}" | /usr/bin/awk '/Dict/ { print $1 }'))
        
        for rule in ${rules[*]}; do
            if [[ $rule == "Dict" ]]; then
                continue
            fi
            FINDING=$(/usr/libexec/PlistBuddy -c "print :$rule:finding" "${auditfile}")
            if [[ "$FINDING" == "true" ]]; then
                FAILED_RULES+=($rule)
            fi
        done
              

    else
        FAILED_RULES="Multiple Baselines Found"
    fi
else
    FAILED_RULES="No Baseline Set"
fi

# sort the results
IFS=$'
' sorted=($(/usr/bin/sort <<<"${FAILED_RULES[*]}")); unset IFS

printf "<result>"
printf "%s
" "${sorted[@]}"
printf "</result>"
{% endhighlight %} 


## What about tailoring?

For many, the out of the box restrictions are not acceptable to apply to their fleet in its entirety. For example CMMC requires the use of CAC (Common Access Cards) Cards for authentication. This is just not feasible for many small businesses so we create an exemption. 

I wrote a [blog entirely on how to create exemptions using JAMF Pro](/blog/how-to-setup-exemptions-with-jamf-compliance-editor/) and the macOS Compliance Project, but lets assume again that you have a few exemptions set. The blog post I linked to prior has a good documented workflow for setting up exemptions. 

- [NIST macos security How-To](https://github.com/Honestpuck/NIST-macos-security-HOWTO)

For now when using the script above to report on failed tests, it will return failed tests and list them, even those that are in the exemptions list. That is less than ideal when trying to show an auditor that you are passing all in scope tests.

A novice auditor not familar with the project, or JAMF in general will simply see failed tests here and may have cause to mark them as an active finding even though they are technically out of scope and even though technically they are listed in the exemption section of the users computer record. 

I decided to modify the script provided by JAMF to only list failed tests in scope and not in the exemptions list. This is below and you can also find this on my Github repo. 

{% highlight bash %}
#!/bin/bash
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#
# Copyright (c) 2022 Jamf.  All rights reserved.
#
#       Redistribution and use in source and binary forms, with or without
#       modification, are permitted provided that the following conditions are met:
#               * Redistributions of source code must retain the above copyright
#                 notice, this list of conditions and the following disclaimer.
#               * Redistributions in binary form must reproduce the above copyright
#                 notice, this list of conditions and the following disclaimer in the
#                 documentation and/or other materials provided with the distribution.
#               * Neither the name of the Jamf nor the names of its contributors may be
#                 used to endorse or promote products derived from this software without
#                 specific prior written permission.
#
#       THIS SOFTWARE IS PROVIDED BY JAMF SOFTWARE, LLC "AS IS" AND ANY
#       EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
#       WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
#       DISCLAIMED. IN NO EVENT SHALL JAMF SOFTWARE, LLC BE LIABLE FOR ANY
#       DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
#       (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
#       LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
#       ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
#       (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
#       SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
######
# INSTRUCTIONS
# This Jamf Extension Attribute is used in conjunction with the macOS Security Compliance project (mSCP)
# https://github.com/usnistgov/macos_security
#
# Upload the following text into Jamf Pro Extension Attribute section.
#
# Used to gather the list of failed controls from the compliance audit.
#
#
#
# Modified by Jon Brown for the purposes of showing only the failed results that are in scope and not listing 
# any of the failed items listed as exemptions in the macOS Compliance Project.
# Use at your own risk.
######

audit=$(/bin/ls -l /Library/Preferences | /usr/bin/grep 'org.*.audit.plist' | /usr/bin/awk '{print $NF}')
FAILED_RULES=()
EXEMPT_RULES=()

if [[ ! -z "$audit" ]]; then
    count=$(echo "$audit" | /usr/bin/wc -l | /usr/bin/xargs)
    if [[ "$count" == 1 ]]; then
        auditfile1="/Library/Preferences/${audit}"
        auditfile2="/Library/Managed Preferences/${audit}"
        if [[ ! -e "$auditfile2" ]]; then
            auditfile2="/Library/Preferences/${audit}"
        fi

        # Process FAILED_RULES
        rules1=($(/usr/libexec/PlistBuddy -c "print :" "${auditfile1}" | /usr/bin/awk '/Dict/ { print $1 }'))
        for rule in ${rules1[*]}; do
            if [[ $rule == "Dict" ]]; then
                continue
            fi
            FINDING=$(/usr/libexec/PlistBuddy -c "print :$rule:finding" "${auditfile1}")
            if [[ "$FINDING" == "true" ]]; then
                FAILED_RULES+=($rule)
            fi
        done

        # Process EXEMPT_RULES
        rules2=($(/usr/libexec/PlistBuddy -c "print :" "${auditfile2}" | /usr/bin/awk '/Dict/ { print $1 }'))
        for rule in ${rules2[*]}; do
            if [[ $rule == "Dict" ]]; then
                continue
            fi
            exemptions=$(/usr/libexec/PlistBuddy -c "print :$rule:exempt" "${auditfile2}" 2>/dev/null)
            if [[ "$exemptions" == "true" ]]; then
                EXEMPT_RULES+=($rule)
            fi
        done
    else
        FAILED_RULES=("Multiple Baselines Found")
        EXEMPT_RULES=("Multiple Baselines Found")
    fi
else
    FAILED_RULES=("No Baseline Set")
    EXEMPT_RULES=("No Baseline Set")
fi

if [[ ${#EXEMPT_RULES[@]} == 0 ]]; then
    EXEMPT_RULES=("No Exemptions Set")
fi

# Remove items from FAILED_RULES that are in EXEMPT_RULES
filtered_failed_rules=()
for rule in "${FAILED_RULES[@]}"; do
    if [[ ! " ${EXEMPT_RULES[@]} " =~ " ${rule} " ]]; then
        filtered_failed_rules+=("$rule")
    fi
done

# Sort the results
IFS=$'\n' sorted=($(/usr/bin/sort <<<"${filtered_failed_rules[*]}")); unset IFS

printf "<result>"
printf "%s\n" "${sorted[@]}"
printf "</result>"
{% endhighlight %} 

## Conclusion

With this updated version I can now show an auditor that while we do have exemptions we are passing all in scope tests in JAMF Pro for an easier attestation process.

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
- [How to create exemptions using JAMF Pro](/blog/how-to-setup-exemptions-with-jamf-compliance-editor/)
- [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts)
- [NIST macOS Security & JAMF Compliance Review](/blog/nist-macos-security-and-jamf-compliance/)
- [NIST macos security How-To](https://github.com/Honestpuck/NIST-macos-security-HOWTO)
- [2023 JNUC Presentation on JAMF Compliance Editor](https://www.youtube.com/watch?v=hCq4PbLX0Tc&list=PLlxHm_Px-Ie2uIFiar6_3JejiOnObiujM&index=129)
