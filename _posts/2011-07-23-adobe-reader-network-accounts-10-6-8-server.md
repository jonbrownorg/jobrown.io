---
title: 'Adobe Reader, Network Accounts &#038; 10.6.8 Server'
author: Jon
layout: post
permalink: /blog/adobe-reader-network-accounts-10-6-8-server/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bug-fixes  
tags:
  - account
  - acrobat
  - adobe
  - bugs
  - fixes
  - network
  - reader
---
There has been a lingering issue with running Network Accounts and letting the users of those network accounts use Adobe Acrobat Reader on an OSX Leopard & Snow Leopard server environment for a while. The issue presents itself as a hard crash of Adobe Reader, while the user is trying to use the program. After much trial and investigation, I have narrowed down the reason for the crash to the fact that the program is trying to save temporary cache files to the users Documents folder. Since the folder is a network based folder (Network account, running mobile home folders off of the server), the program crashes as it is unable to create those files in the remote network location. 

This is quite frustrating and for the System Admins trying to use Network Accounts, waiting for Adobe to fix this issue has been a waiting game that so far has not come to an end. The obvious solution of course that I tell my users is to use Preview instead of Adobe Acrobat Reader to read their PDF files. This does solve their problems in the short term however my users quickly point out that they need Adobe Acrobat Pro which causes the same issue. Since Preview is no substitution for Adobe Acrobat Pro, this poses a real challenge for the user and the System administrator.

I have been scouring the web trying to find a solution and finally I got a break. A user on an Adobe Forum post, posted a temporary fix that worked wonders for my problem. It was so great I wanted to be sure that this solution gets the exposure that it so rightly deserves. You can read the entire [post][1] here and the solution below.


Hi I have seen this issue on Network accounts for quite a while. It also affects Adobe Acrobat Pro and we have come up with a temporary fix until something is done about the issue. The main problem as I understand it is Adobe Reader does not like writing to network locations.

If you are logged in as a network user then your home directory is going to be something like smb://server/home/user which Adobe does not like and causes the app to crash. To get around this issue we have created a small login hook that creates a symlink in ~/Application Support/Adobe which redirects the data to /Users/shared which is stored locally on the machine. 

Here is the login hook we&#8217;re using if it helps anyone.&#8221;

{% highlight bash %}
#!/bin/sh
rm -rf /Network/Servers/yourservername/homes/$1/Library/Application Support/Adobe
sudo mkdir -p /Users/Shared/$1
sudo chmod -R 777 /Users/Shared/$1
ln -s /Users/Shared/$1 /Network/Servers/yourservername/homes/$1/Library/Application Support/Adobe
exit
{% endhighlight %}

I throw this in /Library/Preferences and call it symlink.sh and then run the following command to setup the login hook 

sudo defaults write com.apple.loginwindow LoginHook /Library/Preferences/symlink.sh

You will find the adobe Reader / Pro and other adobe apps will now work with network accounts. Not the nicest solution but a working one. 
I can verify that the solution works well. The script runs, creates the appropriate symlinks and then allows the program to continue to function. The files are created locally for the network user. The only drawback to this is that if you have temporary accounts using computers you will need to clean-up these files from time to time. If the users move about from workstation to workstation then the files will be re-created for that user on multiple machines. These are minor inconveniences that are less noticeable for the user and enable them to get their work done while using Network based accounts in OSX. Let us know what your experiences have been, and if this solution works for you!



 [1]: https://forums.adobe.com/thread/794726