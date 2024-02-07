---
title: Backup your website data securely to Amazon S3
author: Jon
excerpt: "Your websites and your systems are only as good as the backup strategy that you have for them. While managing Mac's you may think that having a strategy for website data backup is not relevant or important. Until you realize all of the technologies that you use on a daily basis that are actually moving to the web platform or cloud. For example OSX Wiki Server and Profile Manager 2 are all 100% web based technologies. If you use a web based ticketing system like Web Help Desk or Spiceworks again you need a strategy. Hitting more to home if you use Munki with MunkiWebAdmin or Casper then you need some kind of web based backup strategy."
layout: post
permalink: /blog/backup-your-website-to-amazon-s3/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bash-scripts
  - casper-munki
  - Web-Server
tags:
  - backup
  - bash
  - casper
  - munki
  - mysql
  - postgres
  - web
---
Your websites and your systems are only as good as the backup strategy that you have for them. While managing Mac&#8217;s you may think that having a strategy for website data backup is not relevant or important. Until you realize all of the technologies that you use on a daily basis that are actually moving to the web platform or cloud. For example OSX Wiki Server and Profile Manager 2 are all 100% web based technologies. If you use a web based ticketing system like Web Help Desk or Spiceworks again you need a strategy. Hitting more to home if you use Munki with MunkiWebAdmin or Casper then you need some kind of web based backup strategy.

Why should web based backups be treated separately or looked at with a different kind of strategy? Why cant I just use Time Machine or Crashplan? Well simply put you have many moving pieces, pieces that can be quickly backed up and recovered separately instead of performing lengthy system backups and restores. Do not get me wrong I am a huge proponent of system wide server backups but if MYSQL crashes or PHP has a corrupt configuration file a long restore may or may not get you back on track while a more targeted backup approach can have you back up and running in a shorter amount of time.

Mysql and Postgres for example can be dumped to a file on an hourly, daily or monthly basis and restored without impacting the other systems running on your server. In this article we will go over how to backup your MYSQL, Apache, PHP files into an offsite Amazon S3 bucket. Why S3? Its a cheap cost effective place to store backups as long as you cycle through them which is what I will be teaching you how to do.

In the end I came up with the a reasonably cute idea, and that is to keep between 28 and 31 backups: ie, all the data that I&#8217;m backup up is pushed into a folder named after the day-of-the-month in an S3 bucket, so today (7th June 2013) all my backups are going into a folder named something like s3://mybackups/07

In a month&#8217;s time (7th July 2013) this backup will be overwritten by the July 7th backup. That&#8217;s not a bad solution really. If you want longer backups you can hack the below script and have two scripts &#8211; one for a one-backup-per-day strategy and also another copy of the script that stores by month name which essentially rotates by month. That would give you daily backups for the past month, and monthly backups for the past year. Useful.

For this walkthrough we will be using the command line tool s3cmd it allows you to connect to your Amazon S3 bucket and securely transmits your data to a folder in the bucket you specify. If you are not familiar with S3 I suggest you stop now and read up on Amazon S3 and see how it can work for you and your organization.

In terms of your standard webserver you want to backup your /var/www (or wherever you keep your htdocs), along with any config info, so I also backup /etc/apache2 /etc/php5 /etc/mysql /etc/cron.daily. Of course on top of that you&#8217;ll need a backup of your database which you can get by calling mysqldump. Then compress the lot and chuck it up to s3. You&#8217;ll want to use s3cmd for this.

**Step 1: Install Home Brew**  
I am a huge fan of HomeBrew its a great command line tool helper that allows you to install these awesome utilities on your Mac through your terminal. The easiest way to install various Unix tools and open source software onto OS X is via a package manager or repository, unfortunately OS X doesn&#8217;t come with one, but fortunately there are some good folks that care.They come in the form of [Homebrew][1]. Homebrew isn&#8217;t the only option, also available is MacPorts and Fink but Homebrew is the newest and easiest of the trio. Its fully Compatible in OSX 10.8 Mountain Lion.

**Get Xcode**  
Get Xcode from the Apple app store, free download version, then install it and launch it from the /Applications folder. Go to Xcode preferences and then look in the &#8216;Downloads&#8217; button. Install the command line tools from the preferences of Xcode.  

**Install Homebrew**  
To download install Homebrew run the install script on the command line as below and let the script do its thing

{% highlight bash %}
ruby <(curl -fsSkL raw.github.com/mxcl/homebrew/go)

{% endhighlight %}

Download and install XQuartz brew will moan as it is no longer installed as part of 10.8 and Xcode. After installing and as suggested in the command line, to check for any issues with the install run.

{% highlight bash %}
brew doctor

{% endhighlight %}

If upgrading from a previous OSX version, update Xcode location

{% highlight bash %}
sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer

{% endhighlight %}

**Step #2 Install s3cmd and gpg (needed for encrypted transfers.)**

{% highlight bash %}
brew install s3cmd

brew install gpg

{% endhighlight %}

**Step #3 Configure s3cmd**

{% highlight bash %}
s3cmd --configure 

{% endhighlight %}

When prompted paste in your Access key, Secret key and encryption password, the encyption password has to be made by you. The path to gpg is

{% highlight bash %}
/usr/local/bin/gpg

{% endhighlight %}

This is important: Do NOT configure s3cmd with your root AWS credentials - yes it will work, but would you store your root server password in a plaintext file? No, and your AWS credentials give the holder access to unlimited resources, your billing details, your machine images, everything. <a href="https://www.youtube.com/watch?v=ySl1gdH_7bY" target="_blank">Just watch this 2-minute you-tube video on creating AWS users & groups with restricted access, create a new user/group that only has access to S3 and use those credentials to configure s3</a>. It's not hard, it'll take you just a few minutes to do. Then wait a couple more minutes for these new credentials to propagate through amazon's systems and you're ready to carry on.

**Step #4 Automate the backup**

Modify the following script to suit your purposes:

  1. Specify the names of your mysql databases in that you need backing up in DATABASES
  2. Add mysql login details for each DB in the format: databasename\_USER and databasename\_PW
  3. Specify which directories to backup in DIRECTORIES - for me that is config stuff and my /var/www
  4. Specify the name of the s3 bucket you're going to backup into in the S3\_BUCKET\_URL

The script also assumes you have tar and gzip installed, but I'll assume you can figure that bit out for yourself.

{% highlight bash %}
## Specify data base schemas to backup and credentials

 DATABASES="wp myotherdb"

 

 ## Syntax databasename as per above _USER and _PW

 wp_USER=username

 wp_PW=password

 myotherdb_USER=username

 myotherdb_PW=password

 

 ## Specify directories to backup (it's clever to use relaive paths)

 DIRECTORIES="/var/www root etc/cron.daily etc/cron.monthly etc/apache2 etc/mysql etc/php5" 

 

 ## Initialize some variables

 DATE=$(date +%d)

 BACKUP_DIRECTORY=/tmp/backups

 S3_CMD="s3cmd"

 

 ## Specify where the backups should be placed

 S3_BUCKET_URL=s3://mybackupbucket/$DATE/

 

 ## The script

 cd /

 mkdir -p $BACKUP_DIRECTORY

 rm -rf $BACKUP_DIRECTORY/*

 

 ## Backup MySQL:s

 for DB in $DATABASES

 do

 BACKUP_FILE=$BACKUP_DIRECTORY/${DB}.sql

 USER=$(eval echo \$${DB}_USER)

 PASSWORD=$(eval echo \$${DB}_PW)

 /usr/bin/mysqldump -v -u $USER --password=$PASSWORD -h localhost -r $BACKUP_FILE $DB 2>&#038;1

 gzip $BACKUP_FILE 2>&#038;1

 $S3_CMD put ${BACKUP_FILE}.gz $S3_BUCKET_URL 2>&#038;1

 done

 

 ## Backup of config directories

 for DIR in $DIRECTORIES

 do

 BACKUP_FILE=$BACKUP_DIRECTORY/$(echo $DIR | sed 's/\//-/g').tgz

 tar zcvf ${BACKUP_FILE} $DIR 2>&#038;1

 $S3_CMD put ${BACKUP_FILE} $S3_BUCKET_URL 2>&#038;1

 done

{% endhighlight %}

Then, assuming you've called it something like backupToS3.sh, make it executable and test it

{% highlight bash %}
chmod +x backupToS3.sh

sudo ./backupToS3.sh

{% endhighlight %}

Once you've ironed out any issues simply copy it over to /etc/cron.daily so that it runs daily

{% highlight bash %}
sudo cp backupToS3.sh /etc/cron.daily

{% endhighlight %}

Now, the above script does daily backups, but if you want to do monthly backups you simply need to make a copy of the file (since you'll likely want a daily and monthly backup rotation) and edit the DATE variable to use months rather than day-of-the-month. If you use the month number you'll probably want to either prefix the month number with the word "month", or pop them into a subdirectory called "monthly", alternatively you could use the month name, for instance:

{% highlight bash %}
DATE=$(date +%m)        // month number

DATE=$(date +%b)        // 3-letter month name

DATE=$(date +%B)        // full month name

DATE=$(date +%m-%B)     // month number, dash, full month name

{% endhighlight %}

Then make it executable and test it as you did the previous script, and then copy it into cron.monthly

{% highlight bash %}
sudo cp monthlyBackupToS3.sh /etc/cron.monthly

{% endhighlight %}

Presumably this will then fire on the first of the month (I haven't checked), but you could always put it in cron.daily so that monthly backup is from the last day of its month (for previous months, the present month would be up to date).

**Why you should care about backups**  
You never want to be the one responsible for saving the day and you have no plan or ability to execute. After a file is deleted is a terrible time to come up with a backup strategy. Create one, write it down, document it, schedule it and then train people how to manage it in the event of an emergency. It really is something you need to take seriously and I strongly believe that the more planning you do today makes for a much less stressful tomorrow!



 [1]: https://mxcl.github.com/homebrew/