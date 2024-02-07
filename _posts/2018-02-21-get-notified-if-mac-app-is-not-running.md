---
layout: post
date: '2018-02-21 21:49 -0500'
author: Jon Brown
permalink: /blog/be-notified-when-app-crashes/
published: true
type: BlogPosting
title: Get notified if Mac app is not running
image: /assets/images/covers/2018/google-drive-laptop_1020.0.jpg
thumbnail: /assets/images/covers/2018/google-drive-laptop_1020.0.jpg
link: /assets/app-images/2018/google-drive-laptop_1020.0.jpg
tagline: Get notified if Mac app is not running
tags:
  - tutorials
  - mac
categories:
  - tips
cta: 3
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
We have all had that moment where you save and save your files into your Google drive folder only to find out that days prior the Google Drive app had somehow stopped sycing your files. You need to get a file from Google Drive because your computer's battery is dead and the files are not in the cloud. 

This is a more common problem then you might think. If its not Google Drive it could be another app that you rely on. Dashlane, LastPass, and Crashplan are other great examples of programs that you would expect would stay running behind the scenes on your computer. 

Imagine being able to be notified when a program isnt running. Better yet be notified via email. You can sign up for a free SendGrid account and use that to relay mail. Here is how you do it. In the script below change the name of the app to the app you want to monitor. 

Configure the API key and other information from your SendGrid account and setup a cron task. Lets dive deeper. 

### The Monitoring Script
---
{% highlight bash %}
#!/bin/bash

if [ ! $(ps axo pid,command | grep "[G]oogle Drive.app") ]]; then
    open -a Google\ Drive.app
else
    echo "Running"
fi
{% endhighlight %}

As you can see this part of the script runs and checks if Google Drive is running. If its running it says "Running" if it doesnt then it opens the Google Drive program. This is great for those pesky apps that just seem to quit all the time. 

### Intgrating Email Notifications
---
{% highlight bash %}
SGTO="someone@somesone.com"
SGTONAME='Your Name'
SGSUBJECT='Google Drive just quit!'
SGFROM=youremail@youremail.com
SGTEXT='The Google Drive app just quit, it was relaunched. Just letting you know.'
SGUSER=<Your Sendgrid Username>
SGPASS='<Your Sendgrid Password>'
curl -d "to=${SGTO}&toname=${SGTONAME}&subject=${SGSUBJECT}&text=${SGTEXT}&from=${SGFROM}&api_user=${SGUSER}&api_key=${SGPASS}" https://api.sendgrid.com/api/mail.send.json
{% endhighlight %}
  
As you can see configuring email via a script is as easy as signing up for a free SendGrid account and configuring the above variables. The 2 that are important are the SGUSER which is your SendGrid username and your SGPASS which is yoru SendGrid password. 

You will want to install this script inside the loop like this. 

{% highlight bash %}
#!/bin/bash

if [ ! $(ps axo pid,command | grep "[G]oogle Drive.app") ]]; then
open -a Google\ Drive.app
    
SGTO="someone@somesone.com"
SGTONAME='Your Name'
SGSUBJECT='Google Drive just quit!'
SGFROM=youremail@youremail.com
SGTEXT='The Google Drive app just quit, it was relaunched. Just letting you know.'
SGUSER=<Your Sendgrid Username>
SGPASS='<Your Sendgrid Password>'

curl -d  "to=${SGTO}&toname=${SGTONAME}&subject=${SGSUBJECT}&text=${SGTEXT}&from=${SGFROM}&api_user=${SGUSER}&api_key=${SGPASS}" https://api.sendgrid.com/api/mail.send.json
  
else
    echo "Running"
fi
{% endhighlight %}

As you can see the email notifications will only trigger if the app needs to be re-launched.
 
### Schedule the task
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
{% endhighlight %}

Once you enter into the cron editor add this line and then save the file. 

{% highlight bash %}
0 * * * * /bin/bash /location/of/where/you/want/the/script/myscript.sh
{% endhighlight %}

Remember to change the path and the name of the script to match your actual script. 

### Conclusion
---
Until apps become more reliable especially the ones that we need to make sure are always running this little script makes a handy tool that you can leave running on your Mac. Whenever an app you care about crashes it will automatically re-open on the schedule that you set via cron. 
