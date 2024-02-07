---
title: 10.7 Server throttle high CPU usage script
author: Jon
excerpt: For the last two years, I have noticed a trend. From time to time Apple will release updates to its OSX Server environment, sometimes these updates go smoothly however the bulk of the time it causes several nasty side affects one of them being high CPU usage among rogue processes.
layout: post
permalink: /blog/10-7-server-throttle-high-cpu-usage-script/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bash-scripts
  - osx-system-administration
tags:
  - bash-scripts
  - OSX-Lion
  - solution
---
For the last two years, I have noticed a trend. From time to time Apple will release updates to its OSX Server environment, sometimes these updates go smoothly however the bulk of the time it causes several nasty side affects one of them being high CPU usage among rogue processes. One such was covered here the [HWMOD bug][1] which caused extremely high CPU usage. Sometimes these are easy to fix while other times these cause your system to crash and burn due to high CPU usage. On the flip side of this coin I have had several experiences with services on the OSX Platform that when they are corrupt or start having issues that specific service will shoot up over 100% CPU while struggling to complete a specific task. Examples include but are not limited to a corrupt open directory master trying to replicate will cause the password service to shoot up over 100% CPU and poor PHP programming can cause the HTTP service to do the same.

I needed a way for my server to notify me by email every time there was a potential problem which results in high CPU usage so that I could mitigate that issue quickly. The server monitor and server admin apps do not allow you to monitor CPU usage and Activity monitor is great as long as you are willing to stand in front of your terminal screen all day. I decided to write a script that would alert me when specific processes started running wild.

{% highlight bash %}
#!/bin/bash

processToWatch="PasswordService" # in my case I need to watch convert
emailAddress="me@me.com" # this is my main emailaddress
triggerValue=10 # if the CPU use is above 50% send an email. DO NOT USE a DOT or COMMA!
tempFileName=cpulog # some name of the temp file for the ps, grep data

ps auxww | grep "$processToWatch" | grep -v grep > /Scripts/Logs/$tempFileName
export LINE
(
read LINE
while [ -n "$LINE" ]
do
set $LINE
read LINE
if [ $(echo "$3" | sed -e 's/.[0-9]*//g') -gt $triggerValue ]; then
sudo kill -9 $2;
mail -s "CPU message alert for: $processToWatch" $emailAddress <<-END
This is to inform you that the following process: $processToWatch with PID (Process ID) $2 is now using more than your preset $triggerValue value.

Process: $processToWatch is using: $3 of CPU
The command used is: $11
END
fi
done
)< /Scripts/Logs/$tempFileName
{% endhighlight %}


The above script will notify me of an issue with the PasswordService and alert me. This has worked out great for me since I only care about a specific service on one server at a time. I can set the time variable in the script to warn me at a specific interval and I use a cron job to schedule the task. I usually have it running every 5 minutes. If you need help with the cron job you can refer to my past post on [scheduling tasks on servers using Cron.][2]



 [1]: {{ site.site_cdn }}/blog/2011/07/10/10-6-8-server-high-cpu-usage-hwmond-culprit/ "10.6.8 Server high CPU usage, hwmond culprit"
 [2]: {{ site.site_cdn }}/blog/2010/05/31/iii-syncing-a-failover-website-scheduling-the-sync/ "III Syncing a failover website : Scheduling the sync"