---
layout: post
date: '2024-07-30'
author: Jon Brown
permalink: /blog/get-more-out-of-scripting-than-you-might-expect/
published: true
title: "Get more out of scripting than you may expect"
description: "Get more out of scripting than you may expect"
blogimgpath: 20240732Up
tags:
  - MacOS
  - iOS
categories:
  - tips
  - video
image: /assets/images/covers/2024/Header-Conference.png
thumbnail: /assets/images/covers/2024/Header-Conference.png
cta: 2
comments: true
---
### What is Expect?

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 2.png" class="img-fluid rounded m-2" width="800" />

Expect is an extension to the Tcl scripting language written by Don Libes. The program automates interactions with programs that expose a text terminal interface. Expect, originally written in 1990 for the Unix platform, has since become available for Microsoft Windows and other systems. [Wikipedia]

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 3.png" class="img-fluid rounded m-2" width="800" />

Don Libes is a computer scientist at NIST performing computer science research on interoperability. I just think its cool to call out and connect creators of tools that we see and use today and I encourage you to connect with him on LinkedIn. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 4.png" class="img-fluid rounded m-2" width="800" />

Expect is a program to control interactive applications. These applications interactively prompt and expect a user to enter keystrokes in response. By using Expect, you can write simple scripts to automate these interactions. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 5.png" class="img-fluid rounded m-2" width="800" />

And using automated interactive programs, you will be able to solve problems that you never would have even considered before.

Expect is a tool for automating interactive applications such as telnet, ftp, passwd, fsck, rlogin, tip, etc.

### Expect MAN Page

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 6.png" class="img-fluid rounded m-2" width="800" />

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 7.png" class="img-fluid rounded m-2" width="800" />

Lets review the man page of Expect and highlight some of the commands of Expect. 

We have the usual suspects such as Close, Debug, Disconnect and Exit up here, which are all commands that you can run with expect. 

You also have Spawn, which creates a new process running program args, 

Expect itself has a Send command that allows you to send specific flags like the -s flag that actually allows you to send string slowly while the h flag allows you to send it as if a human were typing it. 

### Scripts

{% highlight bash %}
#!/bin/bash
 
echo "Enter your name"
 
read $REPLY
{% endhighlight %}

{% highlight bash %}
#!/usr/bin/expect -f
 
set timeout -1
 
spawn ./test.sh
 
expect "Enter your name\r"
 
send -- "I am Jon\r"
expect eof
{% endhighlight %}

Ok lets break it down. We have 2 shell scripts here. One called test.sh, and another called expect.sh. Both in the same directory for simplicity sake. 

The first script is a bash script we know that because its pointing to /bin/bash

In the first script we see echo which prints out the line and the second line

read which is looking for the input in this case the value that its waiting for the user to enter thats the thing that expect is going to help automate in this case. 

The second script is the expect script notice that this script is calling /usr/bin/expect the -f flag denotes that were calling this from a file according to the man page The -f flag prefaces a file from which to read commands from.

We have a set timeout on the first line

And then the script spawns the bash script, expect then is called and looks for that specific output used in the first script and then sends the desired prompt of 

I am Jon in this case. 

Its critical to understand that expect’s value must match exactly the same value that the script is asking for even a slight variation and there will be a mismatch and it will not align. 

So as you can see it helps to automate interactive prompts for scripts that require automated human responses. 

During this talk I am going to talk through three uses cases that I have used Expect for as a Mac Admin where I have found it useful in automating around these kinds of user interactive prompts. 

In this case you would never run the test.sh script you would simply run expect.sh as it calls the test.sh script and automates its answers. 

### Variables

{% highlight bash %}
#!/usr/bin/expect
set NAME "JON"
set AGE "45"

set PHONE [lindex $argv 0]

spawn ./expect_vars.sh
expect "Hello, who is this?\r"
send -- "$NAME\r"

expect "How old are you?\r"
send -- "$AGE\r"

expect "Whats your phone number?\r"
send -- "$PHONE\r"

expect eof
{% endhighlight %}

Ok so here we are setting some variables. We are seeing that we are setting two types of variables using the set command. 

The first 2 variables are fixed variables they are defined here. 

The last variable is an argument based variable. The index of the variable [lindex] indicates the position of the argument and 0 means that its expecting it to be the first argument. 

Typically 0 means 1 in this context as counting of variables starts with the number 0 not 1. 

When we run this script we will pass an argument after the command it will automatically send the set variables and the argument as well. 

### Problem: Salesforce Dataloader

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 14.png" class="img-fluid rounded m-2" width="800" />

Its a pretty straightforward issue and as you can see the issues are that first you must install java which has its own set of challenges. 

For the sake of the talk today were going to not focus on how I solved that particular issue.

Data Loader is a command file which is like a windows .bat file, it comes down with a quarantine flag which has to be removed. 

It's not digitally signed by Salesforce. 

We have to deploy this script but its interactive and I don’t want to modify the core of the script, and mess with packaging it, or repacking it so that's where expect comes into play. 

Before I get into the solution here’s what Data Loader looks like. 

(See Presentation)

{% highlight bash %}
#!/bin/bash

mkdir /var/tmp/dataloader_v60.0.1/

curl https://a.sfdcstatic.com/developer-website/media/dataloader/dataloader_v60.0.1.zip > /var/tmp/dataloader_v60.0.1.zip

/usr/bin/unzip -d /var/tmp/dataloader_v60.0.1/ /var/tmp/dataloader_v60.0.1.zip

cd /var/tmp/dataloader_v60.0.1/

xattr -r -d com.apple.quarantine install.command

sleep 5
{% endhighlight %}

So here’s how we solved it. 

First things first. Data loader must be installed by the logged in user, it can’t be installed by root so when your planning to deploy this ensure that your deploying this to be run and executed by the current logged in user. 

We wrote a bash script and I am just going to walk you through it line by line. 

This script is something that we deployed via Jumpcloud but honestly its something you can deploy via any MDM, like JAMF, Kandji or any mechanism where you can deploy a script. 

First the script makes a directory. Mkdir

Then it downloads the dataloader application. 

Then it extracts and unzips the dataloader application. 

Then we cd into the dataloader directory that was created after we unzipped the application. 

Then we remove the quarantine flag that was added to the file because it was an untrusted download using the com.apple.quarantine against the install.command file 

Then we wait 5 seconds before proceeding 

This is all that would fit on this slide the next slide is simply a continuation of the same script

However on this slide notice right at the top we are calling /usr/bin/expect and in order to call expect in the middle of a bash script we have to use those less than sign with end of file line that denotes that we are switching languages and are now using expect all the items below are now using expect. 

As you can see the next line is calling spawn which is an expect command and we are spawning the install.command file

We care then expecting the output of that command, and by doing so we are calling out that the output of that expect is the fact that we have some special characters in the output of that sentence and in order for expect to translate those properly we must escape them and that's what we're doing here with those backslashes. If we didn’t put those backslashes here in front of and behind the brackets the brackets themselves would be treated as actual code vs as part of the text as part of the expect string so its important that they are there so that's why I am calling that out. 

We could use exp_continue but we will touch on that later in the presentation

Also notice that when you call expect, if you want to keep the script moving you need to also send an enter, and you have to do that with a second send command, so as you can see here, we are sending the answer, and also sending the enter which is denoted as the backslash r which is the code command for the hard return enter key press. 

We are pressing enter again for the next question and then where it asks if we want to create a desktop shortcut notice that we again had to escape those brackets in the question. 

Again as you can see were processing our way through the script, and then finally we get to the end of the file. 

Expect eof means we are expecting the end of the file 

EOF in uppercase means we have reached the end of the file and that section of the code block has now ended. 

Once we have ended the Expect code block we resume the bash code block and we simply delete the downloaded directory and zip file that was downloaded by the script

Now of course we need to uninstall Data Loader and that is pretty straightforward. 

{% highlight bash %}
#!/bin/bash

rm -rf /Applications/DataLoader\ 60.0.1
rm -rf ~/dataloader
rm -rf ~/Desktop/DataLoader\ 60.0.1
{% endhighlight %}

To uninstall dataloader for any specific version simply change the version in the script 

As you can see dataloader installs at the user context so when installing data loader you must run the script as the logged in user. 

### Autopkg with Expect

Autopkg is a great automation platform and we’ve used it in combination with a script that we’ve used to automate the validation of recipes in concert with an expect script that helps with trust settings, here’s how it works. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 21.png" class="img-fluid rounded m-2" width="800" />

SNIPPIT ONLY: [https://github.com/aysiu/Mac-Scripts-and-Profiles/blob/main/AutoPkgReviewAndRun.py](https://github.com/aysiu/Mac-Scripts-and-Profiles/blob/main/AutoPkgReviewAndRun.py)

{% highlight bash %}
#!/Library/AutoPkg/Python3/Python.framework/Versions/Current/bin/python3 

import argparse
import os
import subprocess
import sys

# Where is the recipe list (one recipe per line) located?
# Recipe list should be one recipe per line, separated by a carriage return ("\n")
recipe_locations = [ os.path.expanduser('~/Library/AutoPkg/recipe_list.txt'),
    os.path.expanduser('~/Library/Application Support/AutoPkgr/recipe_list.txt') ]

# Acceptable affirmative responses
affirmative_responses = ["y", "yes", "sure", "definitely"]
{% endhighlight %}

Ok lets break it down, first lets look a the python script that were automating here. This is a script that I had on my autopkg server that we used to download packages for testing purposes. 

These recipes we had loaded into autopkg. We had this script setup and the expect.sh script running on a weekly launchd task that would run the python script and automatically answer the questions posed within it. 

The script itself as I stated iterates through the recipe ist and has a variety of affirmative responses that can be used. 

A bit further down the script we see an example of one of the questions posed and as you an see once you answer the question it will run the recipe. 

Pretty straight forward. 

SNIPPIT ONLY: [https://github.com/aysiu/Mac-Scripts-and-Profiles/blob/main/AutoPkgReviewAndRun.py](https://github.com/aysiu/Mac-Scripts-and-Profiles/blob/main/AutoPkgReviewAndRun.py)

{% highlight bash %}
if desired_result not in verify_result:
            print(err)
            confirmation = input("Do you trust these changes? (y/n) ")
            if confirmation.lower().strip() in affirmative_responses:
                print("Updating trust info for {}".format(recipe))
                cmd = [ "/usr/local/bin/autopkg", "update-trust-info", recipe ]
                p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                    encoding='utf8')
                out, err = p.communicate()
                if err:
                    print("Unable to update trust info: {}".format(err))
{% endhighlight %}

Now here is my expect.sh script. As you can see again we’re calling it with the -f flag because its a file. 

Again were setting a -1 timeout and were running the autopkg script. 

Were asking the 2 questions and look at this we’re using a wildcard expression, yes we can do that. 

Notice where calling exp_continue

The command exp_continue allows expect itself to continue executing rather than returning as it normally would. By default exp_continue resets the timeout timer. 

We only all EOF and it only triggers until the python file reaches the end of its loop, and so we see that the python file is looping, our expect file itself is looping because it keeps continuing until the python file stops, and then once it stops our expect file stops continuing and it reaches its end of file state and ends. 

{% highlight bash %}
#!/usr/bin/expect -f

set timeout -1

spawn /usr/local/bin/python3 AutoPkgReviewAndRun.py

expect {
	"Do you trust these changes?" {
            send -- "y\r"
            exp_continue
      }
    "Search GitHub AutoPkg repos for a*" {
            send -- "n\r"
            exp_continue
      }
      eof
}
{% endhighlight %}

### 🚨🚨🚨🚨 Firmware Script 🚨🚨🚨🚨 DO NOT USE

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 27.png" class="img-fluid rounded m-2" width="800" />

I wrote this script many years ago, when I was very naive and I was not very aware of security, best practices etc.. I was a young mac admin and its an example of how to use expect but in a bad way. 

Back in 2015 I was tasked with rotating the firmware password of about 100 computers and at that time the machines were connected to macOS server using profile manager. 

They machines were all previously setup and imaged using a tool called Deploy Studio Server and they all had a predefined firmware password setup. 

Luckily they knew the password for the most part but it was unclear if they were known for all of them. 

They were one of 2 known passwords, so we had to write 2 scripts one for one kind of machine one where we for sure knew the password and one where we didnt. 

We used expect. 

{% highlight bash %}
#!/usr/bin/expect -f

spawn sudo firmwarepasswd -setpasswd

expect {
    "Enter password:" {
        send "<PWGOESHERE>\r"
        exp_continue
    }
    "Enter new password:" {
        send "<PWGOESHERE>\r"
        exp_continue
    }
    "Re-enter new password:" {
        send "<PWGOESHERE>\r"
        exp_continue
    }
}
{% endhighlight %}

So here we are with the first script and we are again calling expect

We are spawning the firmwarepasswrd command and we are setting the password

We are expecting the enter password and the enter new password pretty straight forward

When it works it worked, when it didn’t work it didn’t really work. 

Again where using exp_continue to continue

{% highlight bash %}
#!/usr/bin/expect -f

set verifyPassword [exec sudo firmwarepasswd -check]

if { $verifyPassword eq "Password Enabled: Yes" } {

   spawn firmwarepasswd -delete
   expect "Enter password:"
   send "<PASS1>\r";
   expect {
      "Password incorrect" {
         puts "Trying 2nd password"
         expect eof
         spawn firmwarepasswd -delete
         expect "Enter password:"
         send "<PASS2>\r";
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

In this script we were unsure what the password was so as your seeing here we are seeing a nested expect loop. 

In each loop we are spawning firmware password but in this script we are simply deleting the firmware password here the goal was to simply clear the firmware password so we could resell the computer. 

In this script we are entering 2 possible known passwords one in the Passowrd 1 field and another in the Passowrd 2 field and then deploying this to the computer. It will attempt to delete the firmware password with the first password if it fails, then it tries with the second password. 

The use of the puts allows us to know which password was used to delete the firmware lock. 

This was a super risky script and again I preface that the use of these scripts are at your own risk I am simply showing you that this is another use case for the expect command. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 31.png" class="img-fluid rounded m-2" width="800" />

So what was the outcome of the script, well 15% of the computers were bricked ie: we had to bring them to Apple to have the firmware lock removed. 

### Auto Expect

Now lets shift gears a little bit and talk about Auto Expect. Auto-expect is not Expect, its an entirely different utility that as Don writes 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 33.png" class="img-fluid rounded m-2" width="800" />

Autoexpect is an application to create an application! Once you start autoexpect, you then perform the actions that you want to script with Expect. Once you complete, it is well worthwhile to exercise the script to see that it does all that you really want it to do and that all error cases are handled.

A script generated by autoexpect can be less readable and more difficult to modify than a script written by a human.

When designing Expect scripts, it can be useful to look at autoexpect-generated scripts for inspiration and hints.

The first step is to install homebrew. Once homebrew is installed. 

{% highlight bash %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

Then you can run the command to install expect. 

{% highlight bash %}
brew install expect
{% endhighlight %}

To ensure that you have autoexpect installed you can then run man autoexpect to see that its running. 

{% highlight bash %}
man autoexpect
{% endhighlight %}

Ok so lets go back to Data Loader. With auto expect I can create an expect script like this. 

The script runs normally, it asks me the questions. I answer them. However this time it outputs a .exp file

When we open that file what do we see?

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240732Up/More to Expect than you may Expect 35.png" class="img-fluid rounded m-2" width="800" />

{% highlight bash %}
autoexpect /var/tmp/dataloader_v60.0.1/install.command
{% endhighlight %}

Its the same script that I had coded earlier manually but its been coded for me automatically. 

Its just the expect parts but its enough of the script that I can inject it into the bash script without having to write it manually. 

Thank you Don Libes!! 

{% highlight bash %}
expect "Do you want to install Data Loader in the current folder (/private/var/tmp/dataloader_v60.0.1)? \[Yes/No\]"

send -- "No"
send -- "\r"

expect "Provide the installation folder \[default: dataloader\]"

send -- "\r"

expect "Do you want to create a Desktop shortcut? \[Yes/No\]"

send -- "Yes"
send -- "\r"
{% endhighlight %}

### Get the scripts

[Github Repo](https://github.com/jonbrown21/expect-presentation)

### Watch the entire presentation


{% include videos/video.html id="X87T0Oxtgqw" header="/images/covers/2024/Header-Conference.png" %}