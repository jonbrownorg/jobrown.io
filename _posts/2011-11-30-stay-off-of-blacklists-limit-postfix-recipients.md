---
title: 'Stay off of blacklists: Limit postfix recipients'
author: Jon
layout: post
permalink: /blog/stay-off-of-blacklists-limit-postfix-recipients/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/network.png
categories:
  - mail-server
  - osx-system-administration
tags:
  - mail
  - postfix
  - server
  - spam
---
I have heard this story it seems over and over again, I also have been the topic of many email horror stories. They usually go like this

> &#8220;I just setup a new server and within days we were on a corporate email blacklist, I contacted the company in question and asked why are we on your blacklist, why won&#8217;t you deliver our email. They shared with me an email log of thousands of emails being sent from my mail server through several legitimate email accounts. I ensured that my server was not an open relay so I asked these users, if they had indeed sent this many emails in one shot without any kind of unsubscribe link in the footer of their email. They had! I was so shocked, now what do I do?&#8221;

This is an uncomfortable and very perilous position. You want to allow your users to send email to get their job done however you as a systems administrator need to comply with the &#8220;Can Spam Act&#8221; passed by the FCC to ensure that email continues to flow. You also have companies out there who will block you for violating this act as a precaution on their part. All the while your users can not be bothered to learn about proper email procedures. 

In my experience the only thing you can do at this point is to limit how many emails are allowed to be sent at any given time. If you are using OSX Server for Mail or Postfix for Sendmail then this walkthrough will talk about how to limit email recipients and stay off those dreaded blacklists.

Here are the basics that you should know, the following are all settings that can be added to the /etc/postfix/main.cf file of your postfix setup.

**smtpd\_recipient\_limit (default 1000)** parameter controls how many recipients the SMTP server will take per message delivery request. You can&#8217;t restrict this to a to/cc/bcc field &#8211; **it&#8217;s for all recipients**. For that you&#8217;d have to use a regular expression in header_checks to arbitrarily limit the length of each header to something reasonable.

**smtpd\_recipient\_overshoot_limit (default 1000)** The number of recipients that a remote SMTP client can send in excess of the hard limit specified with smtpd\_recipient\_limit, before the Postfix SMTP server increments the per-session error count for each excess recipient.

**smtpd\_hard\_error_limit (default 20)** parameter to know at what number of errors it will disconnect. 

So you technically need to consider the 3 values here which affect both inbound & outbound mail. Then there&#8217;s the throttling tools.

**smtpd\_client\_recipient\_rate\_limit (default: 0 no limit)** The maximum number of recipient addresses that an SMTP client may specify in the time interval specified via anvil\_rate\_time_unit (default: 60s -careful adjusting this affects other things)&#8221; and note that this is &#8220;regardless of whether or not Postfix actually accepts those recipients&#8221; Those over will receive a 450 4.7.1 Error: too many recipients from [the.client.ip.address] It&#8217;s up to the client to deliver those recipients at some later time.

**smtpd\_client\_connection\_rate\_limit (default: 0)** The maximal number of connection attempts any client is allowed to make to this service per time unit. The time unit is specified with the anvil\_rate\_time_unit configuration parameter.

**smtpd\_client\_message\_rate\_limit (default: 0)** The maximal number of message delivery requests that any client is allowed to make to this service per time unit, regardless of whether or not Postfix actually accepts those messages. The time unit is specified with the anvil\_rate\_time_unit configuration parameter.

The purpose of these features are to limit abuse, as opposed to regulating legitimate mail traffic, but I use them that way in order to mitigate spam blacklisting. In my organization we limit the recipients from one email to 25 you can see the code from my sample /etc/postfix/main.cf. If your file does not have these values you can add them to the bottom of the file.

{% highlight bash %}
smtpd_recipient_limit = 50
smtpd_recipient_overshoot_limit = 51
smtpd_hard_error_limit = 20
smtpd_client_recipient_rate_limit = 50
smtpd_client_connection_rate_limit = 10
smtpd_client_message_rate_limit = 25
default_extra_recipient_limit = 50
duplicate_filter_limit = 50
default_destination_recipient_limit = 50
smtp_destination_recipient_limit = $default_destination_recipient_limit{% endhighlight %}

Once done you need to restart postfix

{% highlight bash %}
sudo postfix reload{% endhighlight %}

I hope that you all found this article and walkthrough educational, as always please feel free to interact with me by posting questions and comments and I will answer them as best as I can. If you feel like any of this is wrong or could be improved upon also please leave a comment below, thanks!

