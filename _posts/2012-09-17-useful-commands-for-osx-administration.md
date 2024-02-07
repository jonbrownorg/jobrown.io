---
title: Useful Commands for OSX Administration
author: Jon
excerpt: Over the years I have stored a file that has many of the day to day commands that I use to administer the computers at my workplace. After 4 years of saving these commands I am giving back and creating the ultimate post to aid all new sys admins out there.
layout: post
permalink: /blog/useful-commands-for-osx-administration/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - bash-scripts
  - osx-system-administration
tags:
  - cheat-sheet
  - osx-administration
  - useful-commands
---
Over the years I have stored a file that has many of the day to day commands that I use to administer the computers at my workplace. After 4 years of saving these commands I am giving back and creating the ultimate post to aid all new sys admins out there.

**The Adaptive Firewall**  
The most basic task you can do with the firewall is to disable all of the existing rules. To do so, simply run afctl (all afctl options require sudo) with a -d option:

{% highlight bash %}
afctl -d
{% endhighlight %}

When run, the adaptive firewall’s rules are disabled. To re-enable them, use the -e option:

{% highlight bash %}
afctl -e{% endhighlight %}

To remove a specific IP address that has been blacklisted, use the -r option followed by the IP address (rules are enforced by IP)

{% highlight bash %}
sudo /usr/libexec/afctl -r ###.###.###.0/24{% endhighlight %}

To add an IP to the blacklist, use the -a option, also followed by the IP

{% highlight bash %}
sudo /usr/libexec/afctl -a ###.###.###.0/24{% endhighlight %}

To permanently add a machine to the whitelist, use -w with the IP

{% highlight bash %}
sudo /usr/libexec/afctl -w ###.###.###.0/24{% endhighlight %}

**Recover a corrupt open directory**  
10.5, 10.6, and 10.7 have a recover tool that will help you recover a damaged or corrupt ldap directory.

{% highlight bash %}
sudo db_recover -h /var/db/openldap/openldap-data/{% endhighlight %}

**Reset a corrupt open directory**  
Note, this should only be done in the event that there is no possible way to recover or restore the OD. This will completely destroy your servers open directory.

{% highlight bash %}
sudo slapconfig -destroyldapserver{% endhighlight %}

{% highlight bash %}
mkpassdb -dump{% endhighlight %}

**Change computer name**  
Change the computer name over ARD or SSH.

{% highlight bash %}
networksetup -setcomputername <name>{% endhighlight %}

**Cleanup files from users computers**  
We do not allow .torrent files on users computers, so I run this via ARD every morning on the entire network. I later adapted these commands to a script that runs on login.

{% highlight bash %}
rm -vrf ~/Downloads/*.torrent
rm -vrf ~/Desktop/*.torrent
rm -vrf ~/Documents/*.torrent
{% endhighlight %}


**Establish Jailed SSH**  
This command will allow you to establish a secure connection over ssh with an encrypted key pair.

{% highlight bash %}
cat ~/.ssh/id_dsa.pub | ssh root@xx.xx.xx.xx 'cat - >> ~/.ssh/authorized_keys'{% endhighlight %}

**Unison**  
Unison is an amazing utility that runs as a service on OSX that will do two way file syncing over ssh or locally. When setting up Unison you must copy it to /usr/bin/ and then create this directory for it to run.

{% highlight bash %}
mkdir ~/.unison{% endhighlight %}

For more information on Unison you should check out this [site][1].

**Running A Unison Batch**  
You can run this command with Unison to start a file syncronization.

{% highlight bash %}
unison -batch "/SRC/Dest/" ssh://someuser@xx.xx.xx.xx/Dest/Folder/{% endhighlight %}

**Check a user record**  
Often times its easier to lookup an account and see its attributes in the terminal rather than using Workroup Manager.

{% highlight bash %}
dscl -u diradmin -P <diradmin passwd> /LDAPv3/fully.qualified.domain -read /Users/username{% endhighlight %}

**Sync MYSQL between servers**  
If you need to do a backup from one MYSQL database to another you can use this command to do so. You can also use this as a way to dump a database to a different server.

{% highlight bash %}
mysqldump --user=<username> --password=<passwd> <dbname> | ssh <username>@xx.xx.xx.xx -p8286 mysql --user=<username> --password=<passwd> <dbname>{% endhighlight %}

**RSYNC to remote server**  
Sometimes you need to backup files across a network to a different computer this method allows you to do that over a secure ssh connection.

{% highlight bash %}
rsync -av -e ssh /SRC/Folder/ --rsh='ssh -p8286' <username>@xx.xx.xx.xx:/DEST/Folder/{% endhighlight %}

**Force remove a broken OD replica**  
OD Replicas can be tricky, over time they can fail and sometimes when a replica fails, and you decommission it, it does not get fully removed on the OD Master. Here is how to update the Master to remove that stubborn old replica record.

{% highlight bash %}
/var/db/authserver
mkpassdb -dump
slapconfig -removereplica xx.xx.xx.xx
{% endhighlight %}

**Fix broken Mobile Account run on the local machine**  
Mobile accounts sometimes need to be removed from the local computer locally. Here is a simple terminal command to remove a mobile account from a local machine.

{% highlight bash %}
dscl . -delete /Users/userName{% endhighlight %}

**Change local password with ARD**  
This is the easiest way to change user passwords on remote computers with ARD. You can also use secure SSH but ARD is much easier.

{% highlight bash %}
dscl . -passwd /Users/userName newpass newpass{% endhighlight %}

**Enable ARD remotely**  
How can you enable ARD on a computer system that you have SSH access to? Hers how!

{% highlight bash %}
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -on -restart -agent -privs -all{% endhighlight %}

**Fix SSL on servers**  
Sometimes SSL on an OSX Server can break, here is how to get it back up and running for your server and all of the ssl sites.

1. Put the bundle package &#8220;gd_bundle.crt&#8221; in the /etc/apache2/ directory

{% highlight bash %}
sudo pico /etc/apache2/httpd.conf{% endhighlight %}

3. Enter this line in the SSL block

{% highlight bash %}
SSLCertificateChainFile "/etc/apache2/gd_bundle.crt"{% endhighlight %}

**Fix Apple SUS**  
This sometimes happens, where the symlinks on the server will break, instead of changing all the clients to point to the other catalog that you mentioned, I changed the symbolic link at the server to point to it instead. In Teminal at the server:

{% highlight bash %}
cd /var/db/swupd/html{% endhighlight %}

{% highlight bash %}
sudo rm index.sucatalog{% endhighlight %}

{% highlight bash %}
sudo -u _softwareupdate ln -s /var/db/swupd/html/content/catalogs/others/index-leopard-snowleopard.merged-1.sucatalog index.sucatalog{% endhighlight %}

**Enable Screen Share (VNC) from Terminal**

{% highlight bash %}
cd /Library/Preferences
echo -n enabled > com.apple.ScreenSharing.launchd
{% endhighlight %}

**Remotely Set Volume level on a computer**

{% highlight bash %}
sudo osascript -e "set Volume 10"{% endhighlight %}

**Manually Set SUS in OSX**

{% highlight bash %}
sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate CatalogURL https://fully.qualified.domain:8088/index-mountainlion-lion-snowleopard-leopard.merged-1.sucatalog{% endhighlight %}

**Remove Microsoft License**  
If your not fortunate enough to be using a site license for Microsoft Office then you can remove or revoke a license in the terminal like this.

{% highlight bash %}
sudo rm ~/Library/Preferences/Microsoft/Office 2008/Microsoft Office 2008 Settings.plist 
sudo rm /Applications/Microsoft Office 2008/Office/OfficePID.plist
{% endhighlight %}

**Search and replace in SQL**

{% highlight bash %}
UPDATE wp_posts SET post_content = replace(post_content,"coolstuff.com","lancelhoff.com"){% endhighlight %}

**Change Mailman Password**  
How to quickly change the mailman password on an OSX Server installation.

{% highlight bash %}
cd /usr/share/mailman/bin/{% endhighlight %}

{% highlight bash %}
./mmsitepass{% endhighlight %}

3. Change password

**Export Mailman Lists**  
How to export Mailman Lists to text files on an OSX Server installation.

{% highlight bash %}
cd /usr/share/mailman/bin/{% endhighlight %}

{% highlight bash %}
./list_lists{% endhighlight %}

{% highlight bash %}
./list_members FWW-Internal > ~/Desktop/somefile.txt{% endhighlight %}

**Reset the localKDC**  
This is important to do, if you do not do this, you will not be able to bind your computer after an ASR restore to an OSX Directory. Tools like Deploy Studio Server and Casper run these commands for you.

1. Delete all 3 com.apple.kerberos.kdc in the login keychain

{% highlight bash %}
sudo rm -fr /var/db/krb5kdc{% endhighlight %}

{% highlight bash %}
sudo /usr/libexec/configureLocalKDC{% endhighlight %}

**Restart the Wiki Service**

{% highlight bash %}
sudo serveradmin stop teams
sudo serveradmin start teams
{% endhighlight %}

**List out the size of folders on the file system**

{% highlight bash %}
sudo du -d 1 -h -x /Volumes/HDName/{% endhighlight %}

**Change the way the dock behaves**  
Use Suck instead of Scale

{% highlight bash %}
defaults write com.apple.dock mineffect -string suck
killall Finder
{% endhighlight %}

**Report on all activity from a specific user**  
Good for seeing exactly what users are doing on the server or on their computers.

{% highlight bash %}
ps aux | grep "root" | more >> ~/rootreport.txt{% endhighlight %}

**Export a list of contacts from MailMan OSX Server**

{% highlight bash %}
/usr/share/mailman/bin/list_members list_name > saved_subscribers{% endhighlight %}

**Restart the Mail Service Remotely**

{% highlight bash %}
sudo serveradmin stop mail &#038;&#038; sudo serveradmin start mail{% endhighlight %}

**Start the SSH service on a server remotely**

{% highlight bash %}
echo "AdminsPassHere" | sudo service ssh start{% endhighlight %}

**Enable universal access remotely**

{% highlight bash %}
osascript -e 'tell application "System Events"' -e 'tell application processes' -e 'key code 28 using {command down, option down, control down}' -e 'end tell' -e 'end tell'
{% endhighlight %}

**Change email from html to plain text only**

{% highlight bash %}
defaults write com.apple.mail PreferPlainText -bool TRUE{% endhighlight %}

**Change the scrollbars in OSX**  
This will change how the scrollbar works there will be an up and down arrow, this only works in 10.5, 10.6.

{% highlight bash %}
defaults write "Apple Global Domain" AppleScrollBarVariant DoubleBoth{% endhighlight %}

**Show hidden files in OSX**

{% highlight bash %}
defaults write com.apple.finder AppleShowAllFiles TRUE{% endhighlight %}

**Eject a stubborn or stuck disk remotely**

{% highlight bash %}
disktool -e disk#{% endhighlight %}

**Change the text in the login window**

{% highlight bash %}
sudo defaults write /Library/Preferences/com.apple.loginwindow LoginwindowText "Hi, I have missed you!"{% endhighlight %}

**Change the dock size**

{% highlight bash %}
defaults write com.apple.dock largesize -int 512
killall Finder
{% endhighlight %}

**Change the icon size**

{% highlight bash %}
defaults write com.apple.finder DesktopViewOptions -dict IconSize -integer 512
killall Finder

{% endhighlight %}

**Change the desktop tile size**

{% highlight bash %}
defaults write com.apple.dock tilesize -int 256{% endhighlight %}

**Remove Spotlight from OSX**  
This will destroy spotlight until you run repair permissions.

{% highlight bash %}
sudo chmod 0 /System/Library/CoreServices/Spotlight.app
killall Spotlight
{% endhighlight %}

**Restart the ethernet port**

{% highlight bash %}
sudo ifconfig en0 down{% endhighlight %}

**Copy a file remotely**

{% highlight bash %}
scp test.zip adminname@fully.qualified.domain:~/Desktop
{% endhighlight %}

**See the Serial Number of your 10.6 Server**  
You can obtain the Mac OS X Server serial number (for Snow Leopard) via the command line. At the Terminal on the server itself (or via ssh if you wish), type:

{% highlight bash %}
more /etc/systemserialnumbers/xsvr{% endhighlight %}



 [1]: https://www.cis.upenn.edu/~bcpierce/unison/