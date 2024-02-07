---
title: Better Quota notifications for OSX Server
author: Jon
excerpt: OSX Server comes pre-packaged with Dovecot one of the best IMAP services out there and one of the most extensible and flexible in my opinion. That is its flexible and extensible as long as you know how to configure Dovecot which most OSX Server Administrators are not. I had a conversation with a co-worker not too long ago about being an OSX Server Administrator and I joked that Apple made great hardware and a great OS but most if not all of the services under the hood for Web, Mail, Mailing Lists, etc... were all borrowed open source technologies and that Apple really does not offer any sort of support base for the open source technologies that they use. However without these pieces of software their entire PR Campaign would hold no water. What I praise Apple for is taking these tools and utilizing them and making them easier to use while leaving the ability to tinker and improve these services.
layout: post
permalink: /blog/better-quota-notifications-for-osx-server/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - mail-server
  - osx-system-administration
tags:
  - bash-script
  - dovecot
  - quota
  - scripts
---
OSX Server comes pre-packaged with Dovecot one of the best IMAP services out there and one of the most extensible and flexible in my opinion. That is its flexible and extensible as long as you know how to configure Dovecot which most OSX Server Administrators are not. I had a conversation with a co-worker not too long ago about being an OSX Server Administrator and I joked that Apple made great hardware and a great OS but most if not all of the services under the hood for Web, Mail, Mailing Lists, etc&#8230; were all borrowed open source technologies and that Apple really does not offer any sort of support base for the open source technologies that they use. However without these pieces of software their entire PR Campaign would hold no water. What I praise Apple for is taking these tools and utilizing them and making them easier to use while leaving the ability to tinker and improve these services.

One such service is the topic today, Dovecot. Dovecot is integrated with Server Admin, Apples GUI Server Administration tool. You can set two different kind of notifications to trigger here, a quota notification that will send an email out when someone is over a certain percentage of email quota and an email warning them when they have gone over quota. In my experience it takes more than a couple emails to make a user clean up their inbox.

What I wanted was a way to say, send out an email when a user goes over a specified limit and then send an email every ten percent they go over the original limit. When they reach ten percent before their quota is exceeded increase the email notification rate to one email every percent until they reach their quota and then at that time continue to send an email a day until their quota has been reduced. On top of that I wanted it to also notify me of people who have gone over quota so that I can prove to them that they did indeed get the notification. For me a good solution was having all quota notifications CC&#8217;d to our help desk which in turn opened a ticket on the behalf of the offender in a sense sending them two emails each time they went over quota. I am going to cover the necessary steps needed to accomplish this task on your OSX Mail server.

** Note what we are about to do will mean that you will no longer be able to use Server Admin to manage email notifications.

#### 1. Locate the Dovecot Configuration file.

{% highlight bash %}
cd /etc/dovecot/dovecot.conf{% endhighlight %}

#### 2. Edit the file

{% highlight bash %}
sudo pico /etc/dovecot/dovecot.conf{% endhighlight %}

#### 3. Find this line

{% highlight bash %}
quota_warning = storage=100%% /usr/libexec/dovecot/quota-exceeded.sh{% endhighlight %}

we are going to modify this line and add the following lines.

{% highlight bash %}
quota_warning = storage=100%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning2 = storage=99%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning3 = storage=98%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning4 = storage=97%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning5 = storage=96%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning6 = storage=95%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning7 = storage=94%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning8 = storage=93%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning9 = storage=92%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning10 = storage=91%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning11 = storage=90%% /usr/libexec/dovecot/quota-exceeded.sh
  quota_warning12 = storage=87%% /usr/libexec/dovecot/quota-warning.sh
  quota_warning13 = storage=85%% /usr/libexec/dovecot/quota-warning.sh
  quota_warning14 = storage=80%% /usr/libexec/dovecot/quota-warning.sh
  quota_warning15 = storage=75%% /usr/libexec/dovecot/quota-warning.sh{% endhighlight %}

What we are saying here is that we are going to send out an email every time someone is over their limit. Here the limit is 75% and every 5% they go over they will get another warning until they get to 90% then the warnings become more frequent one every 1%. Not only that but there are two different messages the quota-warning and the quota-exceeded.

#### 4. We are going to create a new quota-warning.sh file

{% highlight bash %}
cd /usr/libexec/dovecot
sudo pico quota-warning.sh{% endhighlight %}

This is the current default Apple script that triggers the default email created in Server Admin.

{% highlight bash %}
#!/bin/sh

_quota_txt=/etc/mail/quota_warning.txt

if [ -e $_quota_txt ]; then
  cat $_quota_txt | /usr/libexec/dovecot/deliver -d $USER
fi{% endhighlight %}

We are going to modify this script to send out an email of our choice and to do so to another recipient so we have a record of users getting notifications.Here is the script that I wrote that does just that.

{% highlight bash %}
#!/bin/bash

PERCENT=$1
FROM_SMTP="support@somedomain.com"
FROM="FWW Support <support@somedomain.com>"
TO="FWW Support <mail-server-admini@somedomain.com>"
qwf="/tmp/quota.warning.$$"

echo "From: $FROM
To: $USER
Subject: Quota Notification
Content-Type: text/plain; charset="UTF-8"

Hello-
This is a warning email that was automatically sent. You are nearing your quota limit. The current quota is 1 GB of storage space per user. However you can store more offline.
Q: What can I do now?
A: Start backing up your emails and storing them in a folder under the On My Mac heading, this will ensure that your emails will still be stored and it will free up space on your online account.

If you need more assistance please contact Jon Brown at 
support@somedomain.com.
Thank you for your cooperation!
-- Some Organization Mail Server" > $qwf

cat $qwf | /usr/sbin/sendmail -f $FROM_SMTP "$USER"
rm -f $qwf

echo "From: $USER
To: support@somedomain.com
Subject: Quota Notification
Content-Type: text/plain; charset="UTF-8"

Hello  -

$USER Is nearing their quota. Please follow these steps.
1. Call the user and make sure they understand how to archive their email.
2. Explain to the user that they can sort their email by largest size, tell them to discard or remove the largest emails first.
3. Ensure that the quota has been reduced in Server Admin, do not increase the quota unless it is an emergency.
-- Some Organization Mail Server" > $qwf

cat $qwf | /usr/sbin/sendmail -f $FROM_SMTP "support@somedomain.com"
rm -f $qwf
exit 0
{% endhighlight %}

You must replace the above script with the old script entirely. This will negate the ability to use the text file that Server Admin uses for email notifications but allows you to send the notification to multiple people.

#### 4. We are going to create a new quota-exceeded.sh file

{% highlight bash %}
cd /usr/libexec/dovecot
sudo pico quota-warning.sh{% endhighlight %}

This is the current default Apple script that triggers the default email created in Server Admin.

{% highlight bash %}
#!/bin/sh
_quota_txt=/etc/mail/quota_exceeded.txt
if [ -e $_quota_txt ]; then
  cat $_quota_txt | /usr/libexec/dovecot/deliver -d $USER
fi{% endhighlight %}

We are going to re-write this script and use the following to do similar to the above but at a more aggressive rate.

{% highlight bash %}
#!/bin/bash
PERCENT=$1
FROM_SMTP="support@somedomain.com"
FROM="FWW Support <support@somedomain.com>"
TO="FWW Support <mail-server-admin@somedomain.com>"
qwf="/tmp/quota.warning.$$"
echo "From: $FROM
To: $USER
Subject: FWW ***You're Over Your Quota***
Content-Type: text/plain; charset="UTF-8"
Hello-
This is a warning email that was automatically sent. You are nearing your quota limit. The current quota is 1 GB of storage space per user. However you can store more offline.
Q: What can I do now?
A: Start backing up your emails and storing them in a folder under the On My Mac heading, this will ensure that your emails will still be stored and it will free up space on your online account.
If you need more assistance please contact Jon Brown at support@somedomain.com.
Thank you for your cooperation!
-- Mac Server" > $qwf

cat $qwf | /usr/sbin/sendmail -f $FROM_SMTP "$USER"
rm -f $qwf

echo "From: $USER
To: support@somedomain.com
Subject: FWW ***You're Over Your Quota***
Content-Type: text/plain; charset="UTF-8"

Hello  -
$USER Is nearing their quota. Please follow these steps.
1. Call the user and make sure they understand how to archive their email.
2. Explain to the user that they can sort their email by largest size, tell them to discard or remove the largest emails first.
3. Ensure that the quota has been reduced in Server Admin, do not increase the quota unless it is an emergency.
4. Explain to the user that their email will stop working if they reach 99% capacity.
-- Mac Server" > $qwf
cat $qwf | /usr/sbin/sendmail -f $FROM_SMTP "support@somedomain.com"
rm -f $qwf
exit 0{% endhighlight %}

That is it, once you are done you must restart dovecot. 

{% highlight bash %}
sudo serveradmin stop mail
sudo serveradmin start mail
{% endhighlight %}

Once done you will now be able to enjoy the fruits of your labor. Your users will now get a lot more notifications which will mean that they will be more likely to tame their unruly inboxes on their own and you will be notified as to when they are getting notifications so that you can better assist them with this task. As always I encourage your comments, suggestions and questions. I hope you all enjoyed my post and thanks for reading!

