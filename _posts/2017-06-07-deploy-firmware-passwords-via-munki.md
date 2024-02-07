---
title: Deploy Firmware Passwords
author: Jon Brown
layout: post
image: /assets/images/covers/2017/firmware.jpeg
thumbnail: /assets/images/covers/2017/firmware.jpeg
tagline: "<br>Deploy Firmware Passwords via Munki"
permalink: /blog/deploy-firmware-passwords/
categories:
  - bash-scripts
  - ard
  - munki
tags:
  - tutorials
  - mac
  - bash-scripts
  - popular
---
Theres no doubt that the security of our computers these days is a very sensitive topic. I have helped several of my clients protect their Mac systems by setting firmware passwords. But what if you have hundreds or thousands of computers you want to have a firmware password set on?    



What if you don't have the luxury of a system like JAMF Pro or its predecesor the Casper Suite? Enter Munki, one of the most versatile, open source Mac Management tools. If your reading this you likely already have Munki. In this blog were going to walk through the approach of creating and deploying a package via Munki that can set or reset the firmware password on computers in your environment.          

                                              
## Understanding how a Firmware Password works
---

On 10.6.0 - 10.9.5 firmware passwords are managed by the binary application setregproptool. This binary only exists in the OS installer and on the Recovery Partition, it doesn't actually exist in the OS natively. This is to ensure that the Firmware password cannot be reset unless you have booted into the recovery partition of either the OS or the OS Installer. 

You can however extract this binary and install it in order to use it to reset the password. This is the same method that JAMF uses in its casper suite and its the same method we will use with MUNKI.  

  
## Extracting the Binary
---
Lets create a directory where we’ll store the binary, the scripts and the pkg

{% highlight bash %}
bash-3.2$ cd ; mkdir firmwareInstaller ; cd firmwareInstaller
bash-3.2$ diskutil mount Recovery\ HD
bash-3.2$ hdiutil attach -quiet /Volumes/Recovery\ HD/com.apple.recovery.boot/BaseSystem.dmg
bash-3.2$ cp /Volumes/Mac\ OS\ X\ Base\ System/Applications/Utilities/Firmware\ Password\ Utility.app/Contents/Resources/setregproptool .
bash-3.2$ hdiutil detach /Volumes/Mac\ OS\ X\ Base\ System/
bash-3.2$ diskutil unmount Recovery\ HD
{% endhighlight %}

Now for the sake of documenting check which version you just got and read through the available switches

{% highlight bash %}
bash-3.2$ sudo ./setregproptool
{% endhighlight %}

I am getting this on a 10.10

setregproptool v 2.0 (9) Jun 20 2012


## Deploy setregproptool
---
The next step is to package up and deploy the setregproptool binary that we extracted in the above step. I recommend using [Packages][1] a great tool for creating OSX packages. We can always assist if you need a hand but its pretty straight forward. You can set the folder you want the setregproptool binary to be in and then depending on where you put it, is where you would target it in the below scripts. For the sake of this article for example I am putting the binary in /usr/sbin/setregproptool



## Approach for new or unprotected computers
---
Create the two scripts, one for enabling the firmware password and the second to disable the same. I highly recommend you create the installer and “uninstaller” in pairs and always match the version numbers. 

This is especially critical if you are required to change the firmware passwords in the future and versioning starts to be an issue. The main reason for this is that computer models newer than 2010 require the same password to disable the prompt, so the “uninstaller” version should always match the installer version used previously.

This is, for example, you receive a brand new recent model half batch of computers, then you install your firmware password version 1.0. Then the next week you receive the other half of the shipment and install the firmware password version 1.1. 

Then if you use the uninstaller 1.0 to target all of them only the first half will have it disabled. What a difficult explanation but I hope is clear

Also it is a good practice that when you set the password to blank when disabling it. This way you won’t face problem if the computer needs to be protected again


## Creating the scripts
---
touch enable.postflight.sh disable.postflight.sh

enable.postflight.sh could be something like this

{% highlight bash %}
#!/bin/sh
###
# VERSION 1.0 of the password enabler. Use the same version to disable it.
###
## Fix Permissions
sleep 5
chown root:wheel /usr/sbin/setregproptool
chmod 755 /usr/sbin/setregproptool
# Deactivating the password if it was set. The script will fail or hang if the firmware password set does not match the one listed below
/usr/sbin/setregproptool -d -o "veryoldpass"
sleep 5
# Setting the password and the mode. This will fail if the old password does not match exactly. 
# for 10.10 use sudo /usr/sbin/firmwarepasswd -verify to verify that the old password equals the veryoldpass below if it doesn't the script won't run.
# To verify the password on 10.6, 10.7, 10.8 & 10.9 run the BinaryOnly package first then run this command
#  
sudo /usr/sbin/setregproptool -m command -p "verynewpass" -o "veryoldpass"
# Logging
echo "The firmware password version 1.0 is now set up!"
exit 0
{% endhighlight %}

disable.postflight.sh could be something like this

{% highlight bash %}
#!/bin/sh
###
# VERSION 1.0 of the password disabler. Works only if the password was set up using the same version enabler
###
# Setting the password to blank WILL TAKE EFFECT AFTER REBOOT
$setregproptool -p "" -o "NewPassword"
sleep 1
# Disable the prompt for password
$setregproptool -d -o "NewPassword"
# Logging
echo "Firmware password now set to blank and prompt disabled, reboot for the changes to take effect!"
#forget that the password was ever installed. Munki likes this
pkgutil --forget com.mycompany.pkg.firm.pass
exit 0
{% endhighlight %}

As long a you use the same pkg name you can verify what version of the password a computer has by running `

{% highlight bash %}
pkgutil --info com.mycompany.pkg.firm.pass
{% endhighlight %}

Then use the correct uninstaller


## What if I already have passwords set?
---
Many of my clients already have Firmware Passwords set in their environment. Not to fear you can create a package with a script in it that you can use to wipe out the old password and to reset the new one. 

This package script below loops through 2 possible passwords using the tool firmwarepasswd and if one of the passwords works it removes the password from the computer. On reboot the computer will no longer have a firmware password.

On 10.10.0 - 10.11 firmware passwords are managed by the binary application firmwarepasswd. This new binary exists on the Core OS already and is the prefered new method of managing firmware passwords.


## Caveats
---
The only caveats here are understanding that we are using the #!/usr/bin/expect binary to write our scripts, while this is similar to bash, its not the same, and uses its own unique syntax. The reason we use #!/usr/bin/expect is because we will be prompted to enter a password the expect binary lets you send pre filled answers to expected questions in the terminal environment. Since the goal is to loop through a variety of passwords its the best tool for that task.

Installer Script

{% highlight bash %}
#!/usr/bin/expect
spawn sudo firmwarepasswd -setpasswd
expect {
    "Enter password:" {
        send "FirstPassword\r"
        exp_continue
    }
    "Enter new password:" {
        send "SecondPassword\r"
        exp_continue
    }
    "Re-enter new password:" {
        send "ThirdPassword\r"
        exp_continue
    }
}
spawn sudo bless -mount /Volumes/Macintosh\ HD -setBoot
{% endhighlight %}

Uninstaller Script

{% highlight bash %}
#!/usr/bin/expect

set verifyPassword [exec sudo firmwarepasswd -check]

if { $verifyPassword eq "Password Enabled: Yes" } {

   spawn firmwarepasswd -delete
   expect "Enter password:"
   send "FirstPassword\r";
   expect {
      "Password incorrect" {
         puts "Trying 2nd password"
         expect eof
         spawn firmwarepasswd -delete
         expect "Enter password:"
         send "SecondPassword\r";
         expect "Password removed"
         puts "Firmware Password Deleted using 2nd Password"
       }
      "Password removed" {
        puts "Firmware Password Deleted using 1st Password"
        }
   }
} else {
		puts "<result>Not Found</result>"
}
{% endhighlight %}



## Conclusion
---
Setting up and managing Firmware Passwords via Munki or JAMF is a tricky proposition but I hope that the information above gives you a little glimpse and or help. If you need assistance or help in any way do not hesitate to reach out to me via the comments section below. Giving credit where credit is due much of this walk through is credited to [nbolonso.com][2] who helped point me in the right direction. We then took it to the next level by informing you how to manage the firmware passwords on 10.10 and newer workstations and also how to use the /usr/bin/expect system to reset old password in a loop. 
 
 [1]: https://s.sudre.free.fr/Software/Packages/about.html
 [2]: https://www.nbalonso.com/install-firmware-passwords/
