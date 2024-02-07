---
title: 'III Syncing a failover website : Scheduling the sync'
author: Jon
layout: post
permalink: /blog/iii-syncing-a-failover-website-scheduling-the-sync/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/sync.png
docit_tax_admin_order:
  - 4
categories:
  - osx-system-administration
tags:
  - backup
  - cronjob
  - schedule
---
So now we have our backup script, we have our secure SSH tunnel between the two servers and we have successfully synced our two databases and our files. Now we just have to schedule this task so that we do not have to manually run this each time we need to synchronize our systems. On Mac OSX Servers you have two options you can use Crontab and run a Cronjob, or you can use Launchd. If your running a Linux server then your pretty limited to just a Cronjob. We will talk about both types of scheduling methods and which one makes the best sense for your setup. 

Crontab is one of the longest lasting scheduling daemons around, its part of any linux / unix system and uses a file that will trigger a script at a specific time at specific intervals. Cron can be pretty amazing but pretty daunting too if you are unsure about how to use cron, I recommend starting out easy and using this GUI for Mac OSX called [Cronnix][1].

[Cronnix][1] is a great tool because it lets you modify, save and create crontab cronjobs in a very easy to use interface. Before [Cronnix][1] you basically had to use the VI editor in order to edit the crontab file manually which did not always prove successful. Once your ready to make your first schedule then you need to know what time or at what intervals you want the backup to run. I had my backup script run at midnight every-night so my crontab looked like this.

{% highlight bash %}
0 0 * * * /bin/bash /path/to/my/sync/script.sh
{% endhighlight %}

Here are some other popular crontab examples that might give you some greater insight and understanding on the whole cronjob scheduling schema.

{% highlight bash %}
0 0 * * *          -- midnight every day
0 0 * * 1-5        -- midnight every weekday
0 0 1,15 * *       -- midnight on 1st and 15th
                      of month
0 0 1 * 5          -- midnight on 1st of month
                      and every Friday
{% endhighlight %}

The second method for scheduling tasks on a Mac OSX Server platform is Launcd. This is the timer system that Apple has written and sanctioned as being the best way to schedule tasks, the reason is that unlike a cronjob where if you want to pause the job, you must remove it from the system entirely and then re-enter it when you want it to resume. With launchd you can unload / or load schedules to run at startup or on regularly scheduled intervals. I would be lying if I told you I was a launchd master, but I do like the advantages that launchd has to offer. 

While getting my script up and running I used [This tutorial][2] to get me started. The launchd file below is what I used in order to get my backup scheduled. In order to install your launchd file place it in one of these locations.

/System/Library/LaunchDaemons (admin level system daemons)  
/System/Library/LaunchAgents (admin level user agents)

Once you have your launchd file installed you must register the launchd file with your system by running

{% highlight bash %}
launchctl load ~/Library/LaunchAgents
{% endhighlight %}

Then issue

{% highlight bash %}
launchctl list
{% endhighlight %}

Then you should see something like this

{% highlight bash %}
[Voyager:~/Library/Scripts] gohara% launchctl list
com.macresearch.backup
{% endhighlight %}

for my sync script I chose to use a crontab, because my knowledge of launchd is limited and my experience with cronjobs is more extensive I found that adding a cronjob was faster, quicker and more efficient for permanent scheduled items on my servers. I would love to get your feedback however and learn more about launchd from you.



 [1]: https://code.google.com/p/cronnix/
 [2]: https://www.macresearch.org/tutorial_backups_with_launchd