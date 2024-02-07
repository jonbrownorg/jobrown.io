---
title: Roll your own DNS monitoring with DIG, Bash & CRON
author: Jon Brown
layout: post
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: "Roll your own DNS monitoring with DIG, Bash & CRON"
permalink: /blog/monitor-dns-bash-script/
categories:
  - bash-scripts
  - osx-system-administration
tags:
  - tutorials
  - mac
  - bash-scripts
  - linux
---
If your like me your always looking for ways to be notified of things changing in your IT Environment. There are many tools that you can use to help do this. [StatusCake][3] is a great free online tool for monitoring website and IP level uptime and downtime with baked in email notifications. [Zeonoss][1] and [NAGIOS][2] are great tools that can offer the same with SNMP Monitoring baked in as well. 

But what about DNS monitoring. You heard me, what if you want to monitor or be notified on DNS record change. I know what your thinking likely DNS changes are cleared by tons of red tape, requiring access to the domain registrar in most cases and when a change is made its typically planned, right? Not always. If your part of a large web team perhaps you want the added peace of mind knowing that you have a monitoring system to notify you if a DNS record changes. 

Thats where this little GEM that I wrote today, comes into play. DIG is a little known tool on Linux and OSX servers that allows you to check a DNS record. You can then use Bash to search for a word in the record to ensure that it hasn't been changed. In this example what I am doing is monitoring a _dmarc record for the word reject. DMARC is a great email DNS tool that forces any email provider to pass SPF and DKIM checks before an email is accepted from their system in an attempt to stop spoofing. 

On our team sometimes we change this record to P=NONE while testing and sometimes we forget to put it back to P=REJECT which has caused our fair share of problems. This little script comes in handy to notify us when this is forgotten. 

## Monitoring Script
---
{% highlight bash %}
#!/bin/bash
#
# What should we monitor
#
DNS=TXT
DOMAIN=_dmarc.jonbrown.org
KEYWORD=reject
NS=cash.cloudflare.net
OUTPUT=$(dig ${DNS} ${DOMAIN} @${NS} +short 2>&1)
#
# EMAIL variables
#
SENDGRIDAPI='G.-_Y5LgAUSkOaLapD6ze1OA.OAAKRv6aLZGuevnqgm0CKwqJ8kvNllRpGqFTazD8' # Your SendGrid API Key
TO=jon@jonbrown.org 
FROM=jon@jonbrown.org
CC=someemail@testdomain.com
SUBJECT='Please check this DNS Monitor ${DOMAIN}'
MESSAGE='The DNS Monitor for ${DOMAIN} is having issues based on the keyword ${KEYWORD} you set.'
#
# Enable this for testing if needed
# echo ${OUTPUT}
#
# Do Not Edit Below this line
#
if [ $OUTPUT =~ .*${KEYWORD}.* ]];
then
echo "match"
else 
curl --request POST \
  --url https:#api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer ${SENDGRIDAPI}' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "${TO}"}],"cc": [{"email":"${CC}"}]}], "from": {"email": "${FROM}"},"subject":"${SUBJECT}", "content": [{"type": "text/plain", "value": "${MESSAGE}"}]}'

echo "fail"
fi
{% endhighlight %}

As you can see the code is pretty self explanatory and well commented.  I will just note, this script uses [SendGrid][4] a great tool for adding email notifications to your bash scripts. I highly recommend setting up a free account, you will likely never need to pay for it if its used for daily monitoring. Now lets talk about installation and scheduling.
  

## Installation & Scheduling
---
To install this simply copy the script to a file on your server. My favorite method for doing this is using touch. 

{% highlight bash %}
bash-3.2$ touch /location/of/where/you/want/the/script/myscript.sh
{% endhighlight %}

Once done, change the permissions on the file to allow it to execute.

{% highlight bash %}
bash-3.2$ chmod 777 /location/of/where/you/want/the/script/myscript.sh
{% endhighlight %}

To schedule this setup a CRON JOB on your server by running these commands

{% highlight bash %}
bash-3.2$ crontab -e
bash-3.2$ 0 * * * * /bin/bash /location/of/where/you/want/the/script/myscript.sh
{% endhighlight %}


## Conclusion
---
Thats it. I hope you find my script useful. Please post suggestions for improvements and questions in the comments below. If you like it you can check the script out directly at my [GIT Repo][5] and like and follow me there!



 [1]: https://www.nagios.org
 [2]: https://www.zenoss.com
 [3]: https://www.statuscake.com
 [4]: https://sendgrid.com
 [5]: https://github.com/jonbrown21/Bash-DNS-Monitoring/blob/master/DNS.sh
