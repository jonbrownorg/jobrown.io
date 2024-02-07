---
layout: post
date: '2022-11-08'
author: Jon Brown
permalink: /blog/what-your-organization-needs-to-know-about-email-blocklists/
published: true
title: What Your Organization Needs to Know About Email Blocklists
description: What Your Organization Needs to Know About Email Blocklists
blogimgpath: 20221107Wh
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2022/Header-EmailBlockList.jpg
thumbnail: /assets/images/covers/2022/Header-EmailBlockList.jpg
cta: 4
comments: true
---
Spam remains one of the scourges of the Internet, although spam filters
do a pretty good job of keeping most of it out of email inboxes.
However, those spam filters can cause deliverability problems for
organizations that send email for marketing or customer outreach. One
way that happens is if the IP address---the unique numeric address of
every computer on the Internet---of the server that sends your
organization's email lands on a blocklist.​

### Understanding Blocklists

Blocklist services are conceptually simple. They maintain lists of IP
addresses that have been identified as sending spam. Receiving email
servers subscribe to those blocklists, and for every connection that's
made, the server checks the blocklist in real-time to see if the
incoming message originates from a blocked IP address. If it does, the
receiving server rejects the connection, preventing the message from
being delivered.

How do sending email servers end up on blocklists? There are several
basic ways:

-   **Traps:** If you've purchased or scraped lists of email addresses
    (don't do that!), you may have ended up with dormant addresses or
    addresses that the blocklists surreptitiously seeded to spammers. If
    those addresses receive email from you, the blocklist knows you're
    not sending just to people who have opted into your mailings.
    Similarly, if there are many typos in the email addresses on your
    list, that can raise a flag.

-   **Triggers:** [Certain
    words](https://www.benchmarkemail.com/blog/emails-going-spam-folder/)
    and links in your message can increase the likelihood that a spam
    filter will catch your message, and some spam filters report back to
    blocklists. If a draft message sounds spammy or overly promotional
    when you read it to yourself, that's a hint that it might trigger a
    spam filter.

-   **Reports:** If too many people mark your messages as spam, that can
    put you on a blocklist. Sadly, some people use the Junk button
    instead of unsubscribing from mailings they've subscribed to.

-   **Takeover:** Although this problem is less common now than it was
    when more organizations ran their own mail servers, if a hacker
    compromises your server or account and uses it to send actual spam,
    that's almost guaranteed to land you on one or more blocklists.

To avoid ending up on a blocklist, make sure you're being fastidious
about your mailing list. Only add people to it if they have legitimately
signed up, make it easy for them to remove themselves with an
Unsubscribe link at the end of every message, delete bouncing addresses
right away, and avoid spammy language in your messages. It's not
hard---just be a good Internet citizen. And, of course, if you control
your own mail server, pay special attention to its security to keep
hackers out

### Is Your Organization Already on a Blocklist?

Let's say your IP address has ended up on a blocklist even though you've
been good. How would you know? You might hear that people who should
have received your mailings didn't or that your messages were marked as
spam. Or you might see your deliverability numbers falling in your
sending tool. Neither of those is reliable, though, so we recommend you
use [MXToolbox's Blacklist
Check](https://mxtoolbox.com/blacklists.aspx), where you can type in
your hostname or IP address to see if it's on any of over 100
blocklists.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221107Wh/image2.png" class="img-fluid rounded m-2" width="700" />

You can use MXToolbox for quick checks against 100+ blocklists whenever
you want, but if you [sign up for a free
account](https://mxtoolbox.com/Public/UpgradeV2.aspx), you can set up a
monitor that checks your email server's hostname or IP address against
30 common blocklists every week and emails you the results. (MXToolbox
offers lots of other email and Internet-related tests that can help you
monitor and troubleshoot your Internet presence.)​

### Getting off a Blocklist

Once your IP address is on a blocklist, your goal is to remove it as
quickly as possible. Many blocklists automatically remove entries after
a certain amount of time, but clicking the Detail button in the
MXToolbox blocklist listing will tell you more about the blocklist and
potentially how to request a manual delisting.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221107Wh/image3.png" class="img-fluid rounded m-2" width="700" />


The precise steps will vary by blocklist, but the most important thing
is that you resolve whatever issue caused your server to be added in the
first place. Once that's done, you'll probably need to provide the IP
address of the server and an explanation of what happened, either in a
Web form or in an email to the blocklist admins.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2022/20221107Wh/image4.png" class="img-fluid rounded m-2" width="700" />


We won't lie---ending up on a blocklist can be stressful, particularly
if your organization relies on sending customer-focused email. But if
you keep your list clean and avoid sending spam-like messages, the
occasional blocklist listing should be only a temporary blip in your
operations.