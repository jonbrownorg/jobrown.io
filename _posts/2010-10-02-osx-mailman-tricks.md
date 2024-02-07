---
title: OSX Server Mailman Tricks
author: Jon
layout: post
permalink: /blog/osx-mailman-tricks/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/xserve.png
is_code:
  - 1
product_name:
  - Mailman auditing script
go:
  - https://github.com/jonbrown21/Mailman-Audit
code_category:
  - bash-script, Perl, Mailman
sample_code:
  - These commands can be used to export a list of users and then have that list automatically emailed to you so that you can regularly be reminded to make sure that your mailman lists are free from errors, and or people that should no longer be on the lists.
github_url:
  - https://github.com/jonbrown21/Mailman-Audit
backgrounds:
  - mailman
categories:
  - mail-server
  
tags:
  - Mailman
  - osx-server
  - server
  - upgrade
---
We have been using XServes as our primary mail servers at my organization for about two years now, we upgraded from an older Linux system and we could not be happier, since moving over to the 10.6 platform, we have enjoyed almost no email downtime, very easy to manage mail system and of course all the goodies that you would expect to run, some of which I have already mentioned ([Squirrelmail][1]) and also Mailman. Through my time configuring the server, migrating data and through other requests I have compiled a list of a few tips and tricks for working with Mailman on the OSX platform.

**1. Migrating Mailman data from one server to another.**  
I had many problems making sure that mailing lists, users, and archives were preserved when moving from our old server to our new server. Here are the following things you must do in order to ensure that the lists are preserved.

You must backup the old mailman lists these are more than likely stored in the /var/mailman directory

{% highlight bash %}
sudo cp -Rp /var/mailman /Volumes/setting-backups/{% endhighlight %}

Once your ready to restore the files to the new server run

{% highlight bash %}
sudo cp -Rp /Volumes/setting-backups/mailman /var{% endhighlight %}

the -Rp flags relate to the fact that it is a folder and that you are going to restore the permissions, once your done you will need to login through SSH or on the server itself and run 

{% highlight bash %}
cd /usr/share/mailman/bin
sudo ./genaliases{% endhighlight %}

the ./genaliases command will take the lists, and it will generate aliases for them. This plagued me for a while before I realized that when you migrate to the server, this database needs to be built.

**2. Change the hostname of of your Mailman Server**  
I have had to do this as well, normally the mailman web interface can be found at https://example.com/mailman/admin for the administrative side or https://example.com/mailman/listinfo for the list information side. If you are going to change the hostname of your server to example2.com then you will need to use the command line tools to move the lists over.

{% highlight bash %}
cd /usr/share/mailman/bin
./withlist -l -r fix_url $listname -v{% endhighlight %}

This will update the host names for $listname from the main configuration file, and -v shows you what the changes are. Remember to change $listname with the actual name of your list, you will have to do this for every list you can however run all of the lists at once by running the command multiple times like so.

{% highlight bash %}
cd /usr/share/mailman/bin
./withlist -l -r fix_url $listname -v
./withlist -l -r fix_url $listname1 -v
./withlist -l -r fix_url $listname2 -v
./withlist -l -r fix_url $listname3 -v{% endhighlight %}

**3. Retrieving a text list of users subscribed to a list**  
I have seen this question asked in almost every forum that I have visited, there are multiple ways to do this however I recently found out that Mailman has a built in tool that will automatically grant you what your looking for in the form of an email daemon. First, you must be an administrator or moderator of the list in question. Second you must know the password to the administration area for the list in question.

You can get a list of users by sending an email to the list at $listname-request@yourdomain.com where $listname is the name of your mailing list. With the the following command in the subject line and the message body.

{% highlight bash %}
who $listpassword{% endhighlight %}

where $listpassword is the password of the list in question, the list of users will be sent back to you in the form of an email.

**4. Create a Mailman auditing script**  
These commands can be used to export a list of users and then have that list automatically emailed to you so that you can regularly be reminded to make sure that your mailman lists are free from errors, and or people that should no longer be on the lists. I have created two scripts that do this.

Script #1: The list querying script

{% highlight bash %}
#!/bin/bash
cd /usr/share/mailman/bin/
./list_members -f Internal > "/scripts/lists/audit/Internal.txt"
touch "/scripts/lists/Internal.txt"
echo -e "XXX Mailing List -- For Auditing Purposes nn This is an automated email, please check your list of subscribers for accuracy, if there is a change that needs to be made please contact XXX, at XXX@XXX.XXX, thank you. nn" >> "/scripts/lists/Internal.txt"
cat "/scripts/lists/audit/Internal.txt" >> "/scripts/lists/Internal.txt"
SUBJECT="XXX Mailing List"
EMAIL="XXX@XXX.XXX"
EMAILMESSAGE="/scripts/lists/Internal.txt"
mail -s "$SUBJECT" "$EMAIL" < "$EMAILMESSAGE"
rm "/scripts/lists/Internal.txt"{% endhighlight %}

This script runs the commands and generates the list, it then adds on the email text above the list of users and then sends it out as an email. I would name this script the name of the list so for example $listname.sh and then chmod the script 700 so that it is executable. You will want to use the above template for each of your mailing lists and save this into multiple scripts.

Script #2: The the scheduled script

{% highlight bash %}
#!/bin/bash
cd "/scripts/"
./list1.sh
./list2.sh
./list3.sh
rm -R "/scripts/lists/audit"
mkdir "/scripts/lists/audit"{% endhighlight %}

You will want to schedule this script, I have mine set to once a month, what it does is, it runs all the scripts listed each script above uses the first template to query Mailman, generate the lists, append with email text and then send out to the list moderators.

There is a bit of trial and error here, first of all the user account must have sudo rights, so you may need to add the user running these scripts to the sudoers file or make them an administrator. Scheduling is a matter of setting up a crontab, I am using

{% highlight bash %}
0	0	1	*	*	/bin/bash /scripts/run.sh{% endhighlight %}

this will make sure that it runs on the first day of each month.

**5. Reset the Mailman master password**  
I do this from time to time to make sure that I and the IT Staff at our organization have access to every list on the Mailman roster, but also as a security point, the password changes once every quarter. You can do this via the command line by running.

{% highlight bash %}
sudo /usr/share/mailman/bin/mmsitepass{% endhighlight %}

It will prompt you to enter a password, and confirm. I suggest that you choose a strong password. You can also change a single list password through the command line as well.

{% highlight bash %}
sudo /usr/share/mailman/bin/withlist -l mylistnamehere
import sha
m.password = sha.new('supersecretpasswordhere').hexdigest()
m.Save()
{ctrl-D}
{% endhighlight %}

The above will change the admin lists password and encrypt it at the same time.

Well I hope you enjoyed my Mailman tips and tricks, please feel free to tell me of any other Mailman tricks that might help out the Mac community, as always comments are very welcome!



 [1]: {{ site.site_cdn }}/blog/2010/01/23/squirrelmail-ldap-sieve/