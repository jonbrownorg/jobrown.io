---
title: Migrating a Stubborn Wiki Server 10.7 / 10.8
author: Jon
layout: post
permalink: /blog/migrating-a-stubborn-wiki-server-10-7-10-8/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - migration
  - wiki-server
tags:
  - migration
  - osx
  - wiki
---
It is true that not all migrations are equal and even truer that issues always arise during a migration that seem to be unique to our server setup that are outside of the general advice put forth by Apple in their knowledgeable articles. Moving the wiki server either to a different operating system or to a different computer is no exception. While I admire Apples attempt at making a Wiki and integrating it with their services, the product itself has been unsupported and buggy from the beginning. 

Great for small teams but the issue is that wikis inherently encourage large team collaboration and so small teams ultimately grow to larger ones, and larger teams means larger storage sets and database sizes and when that happens event the best laid plans can turn into weeks of troubleshooting and hair pulling to try to make Apples migration techniques work.

So lets say thats where you are you have a wiki system you are trying to move, you used the method outlined [here][1] and no dice. What do you do? Luckily starting in 10.7 Apple moved away from plist storage for their wiki and started using a PostgreSQL database. This is good news, because this means that its in a not easily corruptible format and is easy to extract. Not only that but its nearly tamperproof so accidentally deleting it is much harder than you think.

So how do I move my wiki, glad you asked. I recently helped out with a migration and I learned a few things in the process that surprised even me. The wiki migration steps outlined by Apple are 80% accurate. The method is to move the file storage (images, and attachments) and then export the database as a database dump. 

Here is what worked for me.

On the source OS X server, perform this command in Terminal as an administrator in order to dump the Postgres database to a file: 

{% highlight bash %}
sudo pg_dump --format=c --compress=9 --blobs --username=collab --file=/tmp/collab.pgdump collab
{% endhighlight %}

Copy /tmp/collab.pgdump from the source server to /tmp/collab.pgdump on the destination server, then copy the contents of /Library/Server/Wiki/FileData on the source server to /Library/Server/Wiki/FileData on the destination server.

Log in to the destination server as an administrator and execute the following commands in Terminal to ensure correct ownership and permissions, start the Postgres database, populate it with the data dumped from the source server, and finally start up the wiki service:

{% highlight bash %}
sudo chown -R _teamsserver:_teamsserver /Library/Server/Wiki/FileData
sudo chmod -R +a "www allow read" /Library/Server/Wiki/FileData
sudo serveradmin stop wiki
sudo serveradmin start postgres
sudo rake -f /usr/share/collabd/server/Rakefile db:drop
sudo createuser -U _postgres -d -s collab
sudo createdb -U collab collab
{% endhighlight %}

Ok so far its pretty much the same well here is where it gets interesting. The database export on Apples page does not work well with large database sets. So to compensate you can dump the contents to a .sql file instead a dump file and get better results. 

{% highlight bash %}
cd /usr/bin
./pg_dump -U _postgres collab -c -f /Library/Server/PostgreSQL/Backup/collab.sq
{% endhighlight %}

This exports the data, once done copy that sql file to the destination server or OS. To restore the sql file to another system do the following.

{% highlight bash %}
psql -U _postgres -d collab -f /Path/To/The/SQL/File/collab.sql
sudo serveradmin start wiki
{% endhighlight %}

If you follow these steps in the order I have written them in, you should be good to go. There is just one major Gotcha. Lets say your moving to a new server and you are thinking of rebuilding your Open Directory. Keep in mind that the entire wiki system hard codes each article, user account, group account, images and more off of the GUID in the OD account. 

This means that if you want your wiki to function you need to migrate over the OD in the Apple recommended way, or Export your Users and Groups to retain the GUID information. there is no way around this unfortunately. I hope this helps, alternatively if you are interested in a better wiki solution I have worked with the following free alternatives.

[BuddyPress][2], [Open Atrium,][3] and [Media Wiki][4] are all good ones, for a good paid Wiki check out [Confluence][5].



 [1]: https://support.apple.com/kb/ht5082 "https://support.apple.com/kb/ht5082"
 [2]: https://buddypress.org "https://buddypress.org"
 [3]: https://openatrium.com "https://openatrium.com"
 [4]: https://www.mediawiki.org/wiki/MediaWiki "https://www.mediawiki.org/wiki/MediaWiki"
 [5]: https://www.atlassian.com/software/confluence/overview/team-collaboration-software "https://www.atlassian.com/software/confluence/overview/team-collaboration-software"