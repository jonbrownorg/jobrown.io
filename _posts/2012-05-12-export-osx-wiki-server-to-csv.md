---
title: Export OSX Wiki Server to CSV
author: Jon
excerpt: Recently our Organization has grown to immense size and we are starting to outgrow the 10.6 Wiki server that we use primarily for our intranet. I have been looking at the 10.7 wiki server however it is not much better, our intranet has been plagued with bouts of corruption and plist issues that have caused slow load times, and extreme data loss. Its pretty clear that we need to move to a more stable information storage media. We have looked at Wordpress and Drupal for this functionality  however the biggest issue is getting the data from the Wiki Server into one of these installations. I noticed that both Drupal and Wordpress have many plugins or modules that offer the ability to import content from CSV however getting a Wiki Server content set into CSV is not as easy as it sounds.
layout: post
permalink: /blog/export-osx-wiki-server-to-csv/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bash-scripts
  - wiki-server
tags:
  - bash-script
  - wiki
  - wiki-server
---
Recently our Organization has grown to immense size and we are starting to outgrow the 10.6 Wiki server that we use primarily for our intranet. I have been looking at the 10.7 wiki server however it is not much better, our intranet has been plagued with bouts of corruption and plist issues that have caused slow load times, and extreme data loss. Its pretty clear that we need to move to a more stable information storage media. We have looked at WordPress and Drupal for this functionality  however the biggest issue is getting the data from the Wiki Server into one of these installations. I noticed that both Drupal and WordPress have many plugins or modules that offer the ability to import content from CSV however getting a Wiki Server content set into CSV is not as easy as it sounds.

I found this [script][1] which works great at extracting the information that is stored in the plist file in each of the page folders in the Wiki structure. However grabbing the content out of the page.html file stored in each .page folder was what I was looking to do. I wrote a helper script that recursively copies and runs the script with a few modifications and then exports all the data I wanted to CSV. The script then copies the CSV files to the main export folder and then deletes all the files that it created in the WIki Server structure.

**Usage**

****To use this script you must copy the folder and all three of the scripts inside it to the root level of your Server HD. Each script has a variable you must set, once you have set the initial path of your Wiki Deployment and the base URL structure you need to make the files executable. You can do this by

{% highlight bash %}
chmod 700 -R /export
{% endhighlight %}

this should make the scripts executable. Once done you need to run the run.sh script with sudo. This will trigger the export. This is no where near perfect so I have opened up a [GitHub][2] repository for the changes that I have made, and the addition to the helper script that runs these recursively. This also exports content in user blogs as well.

The one challenge I am having is running the script that exports the page.html file content and keeping the encoding at utf-8 so that I don&#8217;t get any artifacts or odd characters.

Here are the scripts

**Run.sh**

{% highlight bash %}
#!/bin/bash
##### CONFIGURE HERE ########

# put your full path to your collaboration files
fullpath=/Wiki/wiki/Collaboration
##### END CONFIGURATION #####
mkdir /export/users
mkdir /export/users/blogs
mkdir /export/groups
mkdir /export/groups/blogs
mkdir /export/groups/wikis
for i in `ls $fullpath/Groups`
do
cp /export/export-blog.sh $fullpath/Groups/$i/weblog/
cp /export/export.sh $fullpath/Groups/$i/wiki/

# Export Group Wikis
cd $fullpath/Groups/$i/wiki/
./export.sh
mkdir /export/groups/wikis/$i
cp $fullpath/Groups/$i/wiki/wikipages.csv /export/groups/wikis/$i/
rm $fullpath/Groups/$i/wiki/wikipages.csv
rm $fullpath/Groups/$i/wiki/export.sh

# Export Group Blogs
cd $fullpath/Groups/$i/weblog/
./export-blog.sh
mkdir /export/groups/blogs/$i
cp $fullpath/Groups/$i/weblog/wikipages.csv /export/groups/blogs/$i/
rm $fullpath/Groups/$i/weblog/wikipages.csv
rm $fullpath/Groups/$i/weblog/export-blog.sh
done
for i in `ls $fullpath/Users`
do

# Export User Blogs
cp /export/export-blog.sh $fullpath/Users/$i/weblog/
cd $fullpath/Users/$i/weblog/
./export-blog.sh
mkdir /export/users/blogs/$i
cp $fullpath/Users/$i/weblog/wikipages.csv /export/users/blogs/$i/
rm $fullpath/Users/$i/weblog/wikipages.csv
rm $fullpath/Users/$i/weblog/export-blog.sh
done
exit 0
{% endhighlight %}

**export.sh**

{% highlight bash %}
#!/bin/sh - 
#
# Script to extract data from an Apple WikiServer's data store by querying the
# filesystem itself. Creates a 'wikipages.csv' file that's readable by any
# spreadsheeting application, such as Numbers.app or Microsoft Excel.app.
#
# USAGE:   To use this script, change to the WikiServer's pages directory, then
#          just run this script. A file named wikipages.csv will be created in
#          your current directory. For instance:
#
#              cd /Library/Collaboration/Groups/mygroup/wiki  # dir to work in
#              wikipages2csv.sh                               # run the script
#              cp wikipages.csv ~/Desktop                     # save output
#
# WARNING: Since the WikiServer's files are only accessible as root, this script
#          must be run as root to function. Additionally, this is not extremely
#          well tested, so use at your own risk.

##### CONFIGURE HERE ########
# The prefix to append to generated links. NO SPACES!
WS_URI_PREFIX=https://my-server.example.com/groups/wiki/
##### END CONFIGURATION #####
# DO NOT EDIT PAST THIS LINE
#############################

WS_CSV_OUTFILE=wikipages.csv
WS_PAGE_IDS_FILE=`mktemp ws-ids.tmp.XXXXXX`

function extractPlistValueByKey () {
    head -n 
      $(expr 1 + `grep -n "<key>$1</key>" page.plist | cut -d ':' -f 1`) page.plist | 
        tail -n 1 | cut -d '>' -f 2 | cut -d '<' -f 1
}
function linkifyWikiServerTitle () {
    echo $1 | sed -e 's/ /_/g' -e 's/&/_/g' -e 's/>/_/g' -e 's/</_/g' -e 's/?//g'
}
function formatISO8601date () {
    echo $1 | sed -e 's/T/ /' -e 's/Z$//'
}
function csvQuote () {
    echo $1 | grep -q ',' >/dev/null
    if [ $? -eq 0 ]; then # if there are commas in the string
        echo '"'"$1"'"'   # quote the value
    else
        echo "$1"         # just output the as it was received
    fi
}
PSTALLY=`ls -l | grep -v ^l | wc -l`
if [ $PSTALLY -gt 4 ] ; then
ls -d [^w]*.page | 
  sed -e 's/^([a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]).page$/1/' > $WS_PAGE_IDS_FILE
fi

echo "Title,ID,Date Created,Last Modified,URI,Content" > $WS_CSV_OUTFILE
while read id; do
    cd $id.page
    title="$(extractPlistValueByKey title)"
    created_date="$(formatISO8601date $(extractPlistValueByKey createdDate))"
    modified_date="$(formatISO8601date $(extractPlistValueByKey modifiedDate))"
    link=$WS_URI_PREFIX"$id"/`linkifyWikiServerTitle "$title"`.html
    FILE_DATA=`echo $( /bin/cat page.html ) | tr ',' ' '`
    cd ..
    echo `csvQuote "$title"`,$id,$created_date,$modified_date,`csvQuote "$link"`,"$FILE_DATA" >> $WS_CSV_OUTFILE
done < $WS_PAGE_IDS_FILE
rm $WS_PAGE_IDS_FILE
{% endhighlight %}

**export-blog.sh**

{% highlight bash %}
#!/bin/sh -
#
# Script to extract data from an Apple WikiServer's data store by querying the
# filesystem itself. Creates a 'wikipages.csv' file that's readable by any
# spreadsheeting application, such as Numbers.app or Microsoft Excel.app.
#
# USAGE:   To use this script, change to the WikiServer's pages directory, then
#          just run this script. A file named wikipages.csv will be created in
#          your current directory. For instance:
#
#              cd /Library/Collaboration/Groups/mygroup/wiki  # dir to work in
#              wikipages2csv.sh                               # run the script
#              cp wikipages.csv ~/Desktop                     # save output
#
# WARNING: Since the WikiServer's files are only accessible as root, this script
#          must be run as root to function. Additionally, this is not extremely
#          well tested, so use at your own risk.

##### CONFIGURE HERE ########
# The prefix to append to generated links. NO SPACES!
WS_URI_PREFIX=https://my-server.example.com/groups/wiki/

##### END CONFIGURATION #####
# DO NOT EDIT PAST THIS LINE
#############################

WS_CSV_OUTFILE=wikipages.csv
WS_PAGE_IDS_FILE=`mktemp ws-ids.tmp.XXXXXX`

function extractPlistValueByKey () {
    head -n 
      $(expr 1 + `grep -n "<key>$1</key>" page.plist | cut -d ':' -f 1`) page.plist | 
        tail -n 1 | cut -d '>' -f 2 | cut -d '<' -f 1
}
function linkifyWikiServerTitle () {
    echo $1 | sed -e 's/ /_/g' -e 's/&/_/g' -e 's/>/_/g' -e 's/</_/g' -e 's/?//g'
}
function formatISO8601date () {
    echo $1 | sed -e 's/T/ /' -e 's/Z$//'
}
function csvQuote () {
    echo $1 | grep -q ',' >/dev/null
    if [ $? -eq 0 ]; then # if there are commas in the string
        echo '"'"$1"'"'   # quote the value
    else
        echo "$1"         # just output the as it was received
    fi
}
ls -d [^w]*.page | 
  sed -e 's/^([a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]).page$/1/' > $WS_PAGE_IDS_FILE
echo "Title,ID,Date Created,Last Modified,URI,Content" > $WS_CSV_OUTFILE
while read id; do
    cd $id.page
    title="$(extractPlistValueByKey title)"
    created_date="$(formatISO8601date $(extractPlistValueByKey createdDate))"
    modified_date="$(formatISO8601date $(extractPlistValueByKey modifiedDate))"
    link=$WS_URI_PREFIX"$id"/`linkifyWikiServerTitle "$title"`.html
    FILE_DATA=`echo $( /bin/cat page.html ) | tr ',' ' '`
    cd ..
    echo `csvQuote "$title"`,$id,$created_date,$modified_date,`csvQuote "$link"`,"$FILE_DATA" >> $WS_CSV_OUTFILE
done < $WS_PAGE_IDS_FILE
rm $WS_PAGE_IDS_FILE
{% endhighlight %}

 [1]: https://maymay.net/blog/2008/09/22/extract-list-of-all-apple-wikiserver-wiki-titles-into-csv-format/
 [2]: https://github.com/jonbrown21/OSX-Wiki-2-CSV