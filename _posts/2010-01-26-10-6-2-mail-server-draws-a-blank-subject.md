---
title: 10.6.2 Mail Server draws a blank, subject?
author: Jon
layout: post
permalink: /blog/10-6-2-mail-server-draws-a-blank-subject/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/xserve.png
categories:
  - mail-server
  
tags:
  - blank
  - error
  - mail
  - servers
  - subject
---
So we upgraded from 10.5.8 Mail server to 10.6.2 and everything went very smoothly. Mailstores were migrated and the transition from Cyrus to Dovecot was great. However once all the email was moved over and all the settings were double, and triple checked. People started complaining that every once in a while their email was not getting through the server, it was getting bounced back to the sender. At first I thought that it was an internal issue with the users on our network, then I got a complaint from someone from outside the organization trying to send an email to one of our users.

Great, another strange Apple bug I thought until someone was able to forward me the bounced email to my personal email account. Further insight in the error showed that the message was getting bounced back due to a blank subject line. As you can see from the example below its due to a blank or empty subject heading. Yes, apparently Apple has added this as an actual &#8220;Feature&#8221;. You can turn this off however by commenting out the only line of code in the file /etc/postfix/custom\_header\_checks.

{% highlight bash %}
=====================================
This is the mail system at host mail.xxxxxxx.org.

I'm sorry to have to inform you that your message could not
be delivered to one or more recipients. It's attached below.

For further assistance, please send mail to postmaster.

If you do so, please include this problem report. You can
delete your own text from the attached returned message.

The mail system

<user@domain.org>: host
mail.domain.org https://xx.xxx.xxx.xxx said: 550 5.7.1 empty subject
=====================================
{% endhighlight %}

Turn off the mail service before you do this. Once the mail service is off edit the file using sudo pico. 

{% highlight bash %}
/^subject: *$/ REJECT empty subject header in /etc/

into:

#/^subject: *$/ REJECT empty subject header in /etc/
{% endhighlight %}

Start mail back up again and you will notice that the blank subject line blues are gone away.

