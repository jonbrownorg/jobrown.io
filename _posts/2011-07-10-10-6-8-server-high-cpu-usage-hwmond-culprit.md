---
title: 10.6.8 Server high CPU usage, hwmond culprit
author: Jon
layout: post
permalink: /blog/10-6-8-server-high-cpu-usage-hwmond-culprit/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/cpu.png
categories:
  - mail-server
  - osx-system-administration
  - rants
tags:
  - cpu
  - server
  - solution
  - upgrade
  - usage
---
It seems no matter how careful Apple is each OS update (especially server updates) reveals its own challenges for the user, that leaves them wishing that they had not left their stable platform for the bug fixes that made that update so desirable. the 10.6.8 server update was no different it claimed to fix such long time bugs as Server Side Rules which has been a thorn in the side of OSX Server Administrators everywhere who use OSX Servers as their primary email server. So many of us including myself, downloaded the update and wished for the best. Once done, we all noticed the same bug, extremely high CPU usage on XServes running the new 10.6.8 software and the culprit, hwmond. Hey, hwmond, you are supposed to monitor the hard drives in the XServe and not hog all the resources what gives? Was my initial reaction so I started Googling I found that the hwmond was a service that Apple launches to monitor hardware, it can not be unloaded easily like other launch daemons I ran  

{% highlight bash %}
sudo launchctl unload /System/Library/LaunchDaemons/com.apple.hwmond.plist{% endhighlight %}

which initially threw an odd error, looked at the list of loaded items by running launchctl list on the server and noticed that it was gone. I restarted my XServe and sure enough it had loaded itself. Figuring that there must be something in the OS automatically loading this on each reboot I started searching ways to modify or disable hwmond on my server. In my case I needed to stop the high CPU usage so badly that I was willing to make the tradeoff, of not having hardware monitoring enabled on my system for a modicum of stability for my users, and since this was an email server it seemed like a fair tradeoff. Especially since it looked like the hwmond process could be the process that would cause the most damage to my system if it was allowed to continue and then would be the thing to notify me that the hardware had failed due to extremely high CPU usage over a long period of time. I ran across a post made by Apple [https://support.apple.com/kb/TS2066][1] and decided to take a read, basically the issue that this resolves is hwmond not working and having a tag in the plist file that disables hwmond. Since this was my goal I did the opposite of what the knowledge base suggested, instead of removing the said code from the plist, I put the code into the plist and then rebooted my XServe.

{% highlight bash %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.apple.hwmond</string>
  <key>OnDemand</key>
  <false/>
  <key>Program</key>
  <string>/usr/sbin/hwmond</string>
  <key>ProgramArguments</key>
  <array>
			<string>hwmond</string>
			<string>-s255</string>
  </array>
  <key>ServiceIPC</key>
  <false/>
  <key>Disabled</key>
  <true/>
</dict>
</plist>
{% endhighlight %}

Once the server rebooted I was back in business. My server&#8217;s CPU usage was back to normal and life was grand. Three days later, I restarted my server for an update to Virusbarrier the software I use to help block unwanted attacks on my server, and the high CPU issue returned. I looked at the hwmond.plist file and sure enough it had been re-enabled. I applied the fix above and restarted and it seemed to take. Well this is by no means a permanent fix but then I found this forum post <https://discussions.apple.com/thread/3138473?start=0&tstart=0> It seems as though Apple has been informed of the issue and they are working on a fix. But as an update sceptic I find myself chuckling inside, the 10.6.9 update will claim to fix the hwomond cpu issue but what new issues will lie lurking in the wings to terrorize my system? Only Apple knows or maybe they just don&#8217;t have a clue. Hopefully they will come up with a fix, until then I have learned my lesson, I will not update my system so cavalierly in the future. I welcome your feedback and let me know what you have done to combat this issue.

 [1]: https://support.apple.com/kb/TS2066 "https://support.apple.com/kb/TS2066"