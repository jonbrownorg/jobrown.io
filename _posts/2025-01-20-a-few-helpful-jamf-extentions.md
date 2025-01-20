---
layout: post
date: '2025-01-20'
author: Jon Brown
permalink: /blog/a-few-helpful-jamf-extentions/
published: true
title: "A few helpful JAMF extension attributes for Computers"
description: "A few helpful JAMF extension attributes for Computers"
blogimgpath: 202408034Up
tags:
categories:
  - scripts
  - jamf
  - tutorials
image: /assets/images/covers/2025/jamf_extention_attributes.png
thumbnail: /assets/images/covers/2025/jamf_extention_attributes.png
cta: 2
comments: true
---

## A few helpful JAMF extension attributes for Computers

As I continue to build out my [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts) it was no surprise that JAMF Extensions are one of the key and fundamental elements and features that gives JAMF that edge as an MDM. Scoping is a key part of what makes an MDM so powerful and the ability to group, report and then scope to specific custom values is what sets it apart. 

In that vein, I have put together some of my computer JAMF extensions that I use and thought others would find helpful. 

## Computer Uptime in Hours

One of the things I love the most about JAMF is its community. That said, this script came to us courtesy of [Jason Bush](https://www.linkedin.com/in/bushjason/) in [this accepted solution on JAMF Nation](https://community.jamf.com/t5/jamf-pro/uptime-or-last-shutdown-restart/m-p/53072). The script when used as an extension attriute allows you to target computers via their uptime in hours. 

Display Name: Computer Uptime in Hours

Enabled (script input type only): Select the checkbox.

Description: This attribute displays the current uptime in hours.

Data Type: String

Inventory Display: Extension Attributes

Input Type: Script

Code (be sure to preserve line breaks as shown below): Shell  Default Theme


{% highlight bash %}
#!/bin/sh

DAYS="days,"
HRS=" hrs"

DAYScheck=$(uptime | awk {'print $4'})

if [ $DAYScheck = "$DAYS" ]; then

result=$(uptime | awk {'print $3.$4.$5'} | sed 's/,/ /g' | sed 's/d/ d/g')

        echo "<result>$result$HRS</result>"

        else

result=$(uptime | awk {'print $3'} | sed 's/,//g')

        echo "<result>$result$HRS</result>"
fi

exit
{% endhighlight %} 


## Secure Tokens

I often need to know and see a full list of all users on and endpoint and which ones are secure token holders and not. [bp88 SecureToken Script](https://github.com/bp88/Jamf-Pro-Extension-Attributes/blob/master/Secure%20Token%20Users.sh) has come in handy for me in my ecosystem and I highly recommend implementing this as an extension attribute.

Display Name: Secure Tokens

Enabled (script input type only): Select the checkbox.

Description: This attribute displays the secure tokens on the workstation.

Data Type: String

Inventory Display: Extension Attributes

Input Type: Script

Code (be sure to preserve line breaks as shown below): Shell  Default Theme


{% highlight bash %}
#!/bin/zsh

# Extension attribute to report all user accounts who have a secure token
# If a user is found to have a secure token, the results will be displayed as:
#   Admins: user1, user2 (or "None" if none found)
#   Non-Admins: user1, user2 (or "None" if none found)
#
# If no user is found to have a secure token, the result will be:
#   "No Secure Token Users"
# If an unsupported file system is found, the result will be:
#   Unsupported File System: (File System Type)

# Variable to determine File System Personality
fsType="$(/usr/sbin/diskutil info / | /usr/bin/awk 'sub(/File System Personality: /,""){print $0}')"

if [[ "$fsType" != *APFS* ]]; then
    echo "<result>Unsupported File System: $fsType</result>"
    exit 0
fi

secureTokenAdmins=()
secureTokenUsers=()

# Loop through UUIDs of secure token holders
for uuid in ${$(/usr/sbin/diskutil apfs listUsers / | /usr/bin/awk '/\+\-\-/ {print $2}')}; do
    username="$(/usr/bin/dscl . -search /Users GeneratedUID ${uuid} | /usr/bin/awk 'NR==1{print $1}')"
    
    if /usr/sbin/dseditgroup -o checkmember -m "$username" admin &>/dev/null; then
        secureTokenAdmins+=($username)
    else
        secureTokenUsers+=($username)
    fi
done

if [[ -z ${secureTokenAdmins[@]} ]]; then
    stList="$(echo "Admins: None")"
else
    stList="$(echo "Admins: ${secureTokenAdmins[1]}")"
    
    for user in ${secureTokenAdmins[@]:1}; do
        stList+=", $user"
    done
fi

if [[ -z ${secureTokenAdmins[@]} ]] && [[ -z ${secureTokenUsers[@]} ]]; then
    stList="$(echo "No Secure Token Users")"
elif [[ -z ${secureTokenUsers[@]} ]]; then
    stList+="\n$(echo "Non-Admins: None")"
else
    stList+="\n$(echo "Non-Admins: ${secureTokenUsers[1]}")"
    
    for user in ${secureTokenUsers[@]:1}; do
        stList+=", $user"
    done
fi

echo "<result>$stList</result>"
{% endhighlight %} 


## Screensaver Lock

I got this one from [Drata](https://help.drata.com/en/articles/5456409-jamf-connection) our security GRC tool. 

Display Name: Screen Saver Lock

Enabled (script input type only): Select the checkbox.

Description: This attribute displays the current Screen Saver Lock time. The value to be verified is the time before the password is required to unlock the machine, as specified in System Preferences -> Security & Privacy -> General. Example: 'screenLock delay is 60 seconds' verifies that a password will be required after the machine is idle for 1 minute.

Data Type: String

Inventory Display: Extension Attributes

Input Type: Script

Code (be sure to preserve line breaks as shown below): Shell  Default Theme

NOTE: use this code for any devices running Catalina OS version 10.15.4 or earlier.

{% highlight bash %}
#!/bin/sh
askForPassword=$(sysadminctl -screenLock status 2>&1 | awk '{split($0,a,"]"); print a[2]}' | xargs)
user=$( ls -la /dev/console | cut -d " " -f 4 )
idle_time=$(sudo -u $user defaults -currentHost read com.apple.screensaver idleTime)

if [[ ! -z "$askForPassword" && $idle_time -le 900 ]]; then
    echo "<result> $askForPassword </result>"
else
    echo "<result>Disabled</result>"
fi
{% endhighlight %} 


## Last Restart

this script came to us courtesy of [Jason Bush](https://www.linkedin.com/in/bushjason/) in [this accepted solution on JAMF Nation](https://community.jamf.com/t5/jamf-pro/uptime-or-last-shutdown-restart/m-p/53072). This shows the last reboot of a workstation and can be used in conjunction with the Uptime in Hours attribute to track uptime and restarts. 

Display Name: Last Restart

Enabled (script input type only): Select the checkbox.

Description: This attribute shows the last time a computer was restarted.

Data Type: String

Inventory Display: Extension Attributes

Input Type: Script

Code (be sure to preserve line breaks as shown below): Shell  Default Theme

{% highlight bash %}
#!/bin/bash

lastReboot=`who -b | awk '{print $3" "$4}'`

echo "<result>"$lastReboot"</result>"

exit 0
{% endhighlight %} 


## iCloud Logged in Status

For many tracking who is logged into iCloud is a good indicator of users using personal iCloud accounts. This extension by [BlackGloveEng1](https://community.jamf.com/t5/jamf-pro/find-users-who-have-icloud-drive-and-find-my-mac-turned-on/m-p/253716) allows us to do just that. Posted on 3/31/24 this is a great way to report on this. 

Display Name: iCloud Logged In Status

Enabled (script input type only): Select the checkbox.

Description: This attribute shows the status of iCloud.

Data Type: String

Inventory Display: Extension Attributes

Input Type: Script

Code (be sure to preserve line breaks as shown below): Shell  Default Theme

{% highlight bash %}
#!/bin/bash

currentUser=$(stat -f%Su /dev/console)

iCloudLoggedInCheck=$(defaults read /Users/$currentUser/Library/Preferences/MobileMeAccounts Accounts)

if [[ "$iCloudLoggedInCheck" = *"AccountID"* ]]; then
echo "<result>LOGGED IN</result>"
else
echo "<result>NOT LOGGED IN</result>"
fi
{% endhighlight %} 

## Firewall State

I got this one from [Drata](https://help.drata.com/en/articles/5456409-jamf-connection) our security GRC tool. 

Display Name: Firewall

Enabled (script input type only): Select the checkbox.

Description: This attribute displays whether or not the system firewall is enabled. This attribute applies to both Mac and Windows.

Data Type: String

Inventory Display: Extension Attributes

Input Type: Script

Code (be sure to preserve line breaks as shown below): Shell  Default Theme

{% highlight bash %}
#!/bin/bash
OS=`/usr/bin/sw_vers -productVersion | /usr/bin/colrm 5`
if [[ "$OS" < "10.5" ]]; then 
   result=`/usr/bin/defaults read /Library/Preferences/com.apple.sharing.firewall state` 
if [ "$result" == "YES" ]; then 
   echo "<result>On</result>" 
elif [ "$result" == "NO" ]; then 
   echo "<result>Off</result>" 
fi
else 
   result=`/usr/bin/defaults read /Library/Preferences/com.apple.alf globalstate` 
if [ "$result" == "0" ]; then 
   echo "<result>Off</result>"
else echo "<result>On</result>" 
fi
fi
{% endhighlight %} 

## Conclusion

I hope you enjoyed these JAMF Computer Extentions and that they help you in your environment. These super helpful extensions shared with me via various methods have worked well in my environment. I hope that now that you are aware of them continue making them great! 

If you found this post useful, [Follow me](https://www.linkedin.com/in/jonbrown2/) and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post.

### Sources
- [JAMF Github Repo](https://github.com/jonbrown21/macOS-JAMF-Scripts)
- [Uptime in Hours](https://community.jamf.com/t5/jamf-pro/uptime-or-last-shutdown-restart/m-p/53072)
- [Jason Bush - LinkedIn](https://www.linkedin.com/in/bushjason/)
- [bp88 SecureToken Script](https://github.com/bp88/Jamf-Pro-Extension-Attributes/blob/master/Secure%20Token%20Users.sh)
- [Drata Screensaver Screen Lock](https://help.drata.com/en/articles/5456409-jamf-connection)
- [BlackGloveEng1 iCloud Logged In Status](https://community.jamf.com/t5/jamf-pro/find-users-who-have-icloud-drive-and-find-my-mac-turned-on/m-p/253716)