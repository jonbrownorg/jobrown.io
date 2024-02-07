---
title: 10.6.4 Group Calendars in iCal officially supported
author: Jon
layout: post
permalink: /blog/10-6-4-group-calendars-in-ical-officially-supported/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/ical.png
categories:
  - wiki-server
tags:
  - group-calendars
  - ical
  - musings
  - servers
  - solution
---
Group calendars in Apples Wiki Server has been an uncomfortable conversation piece among 10.4, 10.5 and 10.6 Apple Systems Administrators. Ever since Apple has given us the ability to use web based group calendars its been a cat and mouse game to get some level of support in iCal. In 10.4 when these calendars first came out it was a very cool idea give users their own calendars and give them a web interface to use it. Allow them to subscribe to their calendars in iCal which allowed the user read only access to their calendar.

When 10.5 server came out not only were there personal calendars but group calendars. The difference was that the personal calendars allowed the user to fully manage their calendar both on the web and in iCal however Apple still maintained that group calendars would be only subscribe-able in iCal. The difference here was that many users found workarounds that allowed the fully managed solution of group calendars in iCal by using the following methods.

Method A: Creating a user account and changing the server path with the &#8220;groups&#8221; variable. ([Solution][1])

Method B: Creating a user account and changing the server path with the &#8220;wikis&#8221; variable. ([Solution][2])

This worked but much needed security updates broke both of these solutions causing unnecessary stress on the Apple user and the Apple systems administrator. The most [recant update][3] to 10.6.4 caused the group calendars in iCal to stop working entirely and cause an almost never-ending string 

of login failed errors on the users computer. This made it very frustrating for Administrators who are trying to sell the idea of a wiki server as being a great web based and iCal based interface for users. In Apples defense they never officially claimed to support group calendaring in iCal.

One of the reasons for this was probably because of the volatile nature of the group account. In 10.5 server group calendars were maintained and created using workgroup manager in 10.6 server they were separated entirely and now the administration of group wikis is all done through their web interface. Due to the separation groups that once had a unique UID, username and password were demoted to the basic functionality of a web folder and directory for the purpose of internet data organization.

With this in mind I was very pleased when Apple released its [10.6.4 Wiki Server update][4]. The thing that really made me happy was the fact that now they have officially come out and are supporting group calendars in iCal. This is awesome finally what we have been waiting for. The best thing is that in true Apple fashion their update offers an elegant and much faster solution.

So how do you setup group calendars in 10.6.4? The answer is not really surprising as it takes some of the steps used in previous solutions.

In order to view the group calendars, open iCal, open its Preferences, and click on the Accounts tab.

1.  There you will create an account by hitting the &#8220;+&#8221; sign.
2.  Choose automatic enter the full account name and or email address that has access to the group calendar in question. Enter the users password.

iCal will contact the server and if the user is found an account will be setup. Once it is setup follow these steps.

1.  Click on the server settings tab. The server path URL here is what needs to be modified.
2.  By default the path will look like this /principals/__uids__/USERID/ change the path to this /principals/__uids__/wiki-nameofgroupcalendarhere/
3.  Go back to the account information tab and re-enter the users password.
4.  Change the calendar description.
5.  Close the preferences window, once done the calendar will refresh itself it may take some time. You can speed up the process by quitting iCal and re-launching.

Oddly enough this solution was and should be credited to a [user on this post ][5]who had originally tried to get group calendars in iCal working in 2009! Looks like Apple took some much needed advice in this arena and I am very happy that they have officially started supporting this much needed feature.



 [1]: https://www.macosxhints.com/article.php?story=20080410162942908
 [2]: https://discussions.apple.com/message.jspa?messageID=10132577#10132577
 [3]: https://lists.apple.com/archives/rockies-edu/2010/Jun/msg00039.html
 [4]: https://support.apple.com/kb/DL1062
 [5]: https://discussions.apple.com/thread.jspa?threadID=2140008&tstart=0