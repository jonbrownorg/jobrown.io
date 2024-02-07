---
title: Migrate Outlook 2016 Profile from one Mac to another Mac
author: Jon Brown
layout: post
permalink: /blog/migrate-2016-outlook/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: "Migrate Outlook 2016 Profile from one Mac to another Mac"
categories:
  - outlook-2016
  - migration
  - microsoft
  - osx-system-administration
tags:
  - tutorials
  - mac
  - update
  - migrate
  - popular
---
I recently had to help a client move from one Mac to another, during the process one task proved more challenging than originally anticipated. I wanted to share my info in the event that it helps someone out there. In Outlook 2016 for Mac, Microsoft in its infinite wisdom, has changed the default location of the email profile folder. The new location is not well documented, and I stumbled upon it on an obscure [forum post][1], the location is 

{% highlight bash %}
~/Library/Group Containers/UBF8T346G9.Office/Outlook/Outlook 15 Profiles/Main Profile
{% endhighlight %}

this folder needs to be copied from Mac to Mac when migrating data. Migration assistant choked on this folder twice, leaving me unable to move it via a thunderbolt to thunderbolt connection. I then mounted the drive of the old Mac onto the new Mac via the cable and copied it over manually. This method worked and worked well. For the sake of completeness, I will do a quick writeup of the other methods of migration that were recommended by Microsoft directly in the event that this method fails for whatever reason for my readers. 

### Method: Archive and Import
---
The first step in this method is to export the data from Outlook 2016 on the Mac in question. 

An archive file in Outlook 2016 for Mac is a .olm file that you can save to any location on your Mac or on a different machine for safekeeping. You can export your email, contacts, calendars, tasks, or notes to the .olm archive file. Here's how:

1. On the Tools tab, choose Export.
2. On the Tools tab, click Export.
3. In the Export to Archive File (.olm) box, check the items you want to export, and choose Continue.
4. Check the items you want to export.
5. In the Save As box, under Favorites, choose the Downloads folder, and click Save.
6. Save the archive file as an .olm.

Once your data has been exported, you'll get a notification and you'll choose Finish.

Now that your files are exported, time to import them. To import an OLM file on a Mac follow these steps

A .olm file is the data file used by Outlook for Mac to archive your email messages, contacts, calendar items, tasks, and notes. If you're moving from one Mac to another or upgrading from Outlook for Mac 2011 to Outlook 2016 for Mac, you'll want to export your email messages, contacts, calendar items, tasks, and notes to a .olm file first (How do I export to a .olm file?). Note the location where you save the .olm file because you'll need it during the import process.

Export your Outlook for Mac email messages, contacts, calendar items, tasks, and notes to a .olm file and note the location where you save that file. If moving from one Mac to another, transfer the .olm file to the new one.

1. In Outlook for Mac 2016, on the Tools tab, choose Import.
2. On the Tools tab, click Import.
3. In the Import box, select Outlook for Mac archive file (.olm) > Continue.
4. Import archive file as .olm.
5. Locate the .olm file on your Mac, and then click Import.
6. Imported items appear on the navigation panes (Mail, Calendar, People, Tasks, Notes) under On My Computer. For example, contacts are in the navigation pane on the People tab, email messages are on the navigation pane on the Mail tab, calendar items are in the navigation pane on the Calendar tab, and so on.

### Method: Migration Assistant
---
I will preface this bit by saying that this failed for me twice. After some further digging the reason that the migration failed was the fact that I had a very agressive antivirus program running on the target computer Mac that was blocking the copy due to viruses found in the mail profile folder. In order for this to work you should disable all security and antivirus software that may detect viruses during file copy. The process here is simple and for the sake of this article I will not rewrite the great instructions you can find here at Apples own website. 

[Follow the steps][5] on this page and you should be ok. If you run into issues post a comment and we will be happy to assit. 


### Method: File Copy
---
In Outlook 2011, your Identity was located in Documents > Microsoft User Data folder. Identities are now called Profiles in Office for Mac 2016 (now available in preview). Your profile is no longer stored in Documents but in your User’s Library folder.

The User’s Library folder is hidden by default. To unhide: Select the Finder in the Dock. Under Go in the Menu bar > hold down the Option key and you’ll see the Library.

In your User’s Library folder, scroll down to Group Containers. You’ll find your profile nested in this location:

{% highlight bash %}
~/Library/Group Containers/UBF8T346G9.Office/Outlook/Outlook 15 Profiles/Main Profile/Containers
{% endhighlight %}

If you can’t find this folder, most likely you are looking in the main Library folder. As recommended above visit Finding the User Library Folder to show your User’s Library.

Once you find the folder you can copy it in any number of ways, directly to the computer via Firewire or Thunderbolt cable. USB drive, or even AirDrop. Once the folder on the target Mac is replaced the email should immediately load.



 [1]: http://www.officeformachelp.com/2015/04/location-of-outlook-2016-profile-identity/
 [2]: https://support.office.com/en-us/article/Import-email-messages-contacts-and-other-items-into-Outlook-2016-for-Mac-6cc48404-a65c-4b8c-a12a-95a905249414
 [3]: https://support.office.com/en-us/article/Export-email-messages-contacts-and-other-items-from-Outlook-2016-for-Mac-58e30839-53e9-40c1-b526-d9c24c0a8af3
 [4]: http://answers.microsoft.com/en-us/msoffice/forum/msoffice_outlook-mso_mac/migrate-outlook-2016-osx-to-new-mac/b5345cd5-5914-4ab7-a9d2-9d80a4a0cda7
 [5]: https://support.apple.com/en-us/HT204350 
