---
title: 'Solr, WordPress &#038; OSX Server'
author: Jon
layout: post
permalink: /blog/solr-wordpress-osx-server/
thumbnail: /assets/img/covers/cover-16.jpg
related_posts:
  - 'a:3:{i:0;s:3:"182";i:1;s:3:"216";i:2;s:3:"191";}'
img:
  - /blog/flyout/xserve.png
categories:
  
tags:
  - Apache
  - scripts
  - solr
  - solution
  - Wordpress
---
I have long been a fan of WordPress and not so much a fan of the search engine functionality that comes boxed with it. As an Apple Systems Admin I have several WordPress websites running on several OSX Servers. One of the sites that I administer finally got to the size to where the search capabilities of WordPress fell short of the clients desire and I was forced to look into other avenues for searching. I came across, solar. Solr is an open source enterprise search server based on the Lucene Java search library, with XML/HTTP and JSON APIs, hit highlighting, faceted search, caching, replication, and a web administration interface. This looked extremely promising however getting all of the information that I needed in order to get this running on my servers proved to be a cumbersome process, so I am now writing this to consolidate all of the steps and information that I learned while installing and getting Solr to run on our servers.

The first step is to download all of the needed files, download the most recent version of [Solr][1], and the [Solr for WordPress plugin][2]. The first part of the documentation here will be on how to install and get Solr running and then the second portion will focus on configuring the Solr for WordPress plugin. For this walkthrough I will be using the example application that comes with Solr. ** Before we proceed you need to open the port 8983 in your servers firewall and or hardware firewall appliance for public access.

1. Expand the Solr archive into a folder in the Applications folder called Solr (/Applications/Solr)

2. For testing and development we can use the example application coming with Solr. This application is found at /Applications/Solr/example.

3. Move the schema.xml that comes with the Solr for WordPress in the folder\* /Applications/Solr/example/solr/conf/\* (add &#8220;.backup&#8221; to the original file).

Now start the solr application by opening the Terminal and executing the command:

{% highlight bash %}
cd /Applications/Solr/example/

java -jar start.jar{% endhighlight %}

Test that your solr server is now available by visiting https://localhost:8983/solr/admin/

now that you have Solr running on your osx server, you need to make sure that it will run in the background even when you logout of the computer. At the moment it is running through Java and when you logout it will stop running. In order to accomplish this you need to create a LaunchD item, this item needs to be placed in the /Library/LaunchDaemons/ folder.

1. Create a new text file name it org.apache.solr.plist

2. Enter the following information into the file 

{% highlight bash %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC -//Apple Computer//DTD PLIST 1.0//EN https://www.apple.com/DTDs/PropertyList-1.0.dtd >
<plist version="1.0">
   <dict>
      <key>Label</key>
      <string>org.apache.solr</string>
      <key>WorkingDirectory</key>
      <string>/Applications/Solr/example</string>
      <key>ProgramArguments</key>
      <array>
         <string>/usr/bin/java</string>
         <string>-Dezfind</string>
         <string>-jar</string>
         <string>/Applications/Solr/example/start.jar</string>
      </array>
      <key>RunAtLoad</key>
      <true />
   </dict>
</plist>
{% endhighlight %}

Once done, place this file in the /Library/LaunchDaemons/ folder and then run this command in terminal

sudo launchctl load /Library/LaunchDaemons/org.apache.solr.plist

this will load the Launch Daemon when the computer restarts, the next step is to restart your server and then make sure that Solr is running by going to the Solr admin URL https://localhost:8983/solr/admin/ or https://server.domain.name:8983/solr/admin/

Now that you have Solr running on the server, and the schema file loaded then you need to make sure that the Solr for WordPress plugin is installed. Note: Solr, does not need to run on the same server as your wordpress install, we have a dedicated Mac Mini server running Solr and it works great. To install Solr for WordPress follow these steps.

1. Upload the solr-for-wordpress folder to the /wp-content/plugins/ directory

2. Activate the plugin through the &#8216;Plugins&#8217; menu in WordPress

3. Configure the plugin with the hostname, port, and URI path to your Solr installation.

4. Load all your posts and/or pages via the &#8220;Load All Posts&#8221; button in the settings page

Note that this plugin requires you to have an instance of Solr using a schema with the following fields: id, permalink, title, content, numcomments, categories, categoriessrch, tags, tagssrch, author, type, and text. The facet fields (categories, tags, author, and type) should be string fields. You can make tagssrch and categoriessrch of any type you want as they are used for general searching. The plugin is distributed with a Solr schema you can use at solr-for-wordpress/schema.xml.

Now that the plugin is installed and active, login to the administrative area of your WordPress website and go to the &#8220;Settings &#8211;> Solr Options&#8221; area. Once here enter the IP address or Fully Qualified Domain that is running solar. Enter the Port, which in this document is 8983 and enter /solr for the path. Once done, press &#8220;Save Changes&#8221; it will test the connection to the server and will let you know if it can connect or not.

Once you have gotten the plugin to connect you can &#8220;Load All Pages&#8221; and &#8220;Load All Posts&#8221; to build your initial Solr database. Your almost complete now you need to integrate the search results that you get from the Solr server into your WordPress website.

Custom Theme Integration

1. Create a new theme file called &#8220;s4w_search.php&#8221;.

2. Insert your markup, use template methods s4w\_search\_form() and s4w\_search\_results() to insert the search box and results respectively.

3. Add result styling to your theme css file, see solr-for-wordpress/template/search.css for an example.

4. You can use the search widget in your sidebar for search, or use a custom search box that submits the query in the parameter &#8220;s&#8221;.

For more information about integrating Solr into your WordPress website you can go to https://wordpress.org/extend/plugins/solr-for-wordpress/

I certainly welcome your feedback so if you have an questions or comments feel free to post them below.



 [1]: https://drupal.org/project/apachesolr
 [2]: https://wordpress.org/extend/plugins/solr-for-wordpress/