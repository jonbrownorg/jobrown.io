---
layout: post
date: '2020-03-10 00:00 -0500'
author: Jon Brown
permalink: /blog/what-to-do-if-you-run-low-on-icloud-storage-space/
published: true
title: What to Do If You Run Low on iCloud Storage Space
description: What to Do If You Run Low on iCloud Storage Space
blogimgpath: 20200305Wh
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2020/Header-iCloud-storage-photo.jpg
thumbnail: /assets/images/covers/2020/Header-iCloud-storage-photo.jpg
link: /img/app-images/2020/Header-iCloud-storage-photo.jpg
cta: 3
comments: true
---
By default, Apple gives every iCloud user 5 GB of storage space. That
disappears quickly, given how it's shared between iCloud Mail, iCloud
Drive, iCloud Photos, Messages, and iCloud-enabled apps.

Apple will, of course, sell you more iCloud space. \$0.99 per month gets
you 50 GB, \$2.99 per month provides 200 GB, and for \$9.99 per month,
you can use a whopping 2 TB. The latter two plans can even be shared
with others in your Family Sharing group.

As we've noted elsewhere, using iCloud Photos almost certainly requires
you to pay for extra storage. But if you're paying \$2.99 per month and
nudge up against the 200 GB limit, you may not be enthused about
increasing your payment to \$9.99 per month when you're unlikely to need
anywhere near 2 TB.

That said, you don't want to run out of storage space. Email to your
iCloud email address will be rejected, photos won't upload from your
iPhone, and app data will fail to sync. Happily, Apple alerts you when
you're running low on space, before things get bad.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Wh/Apple-warning.png" class="img-fluid rounded m-2" width="800" />

It's often easy to recover space that's not being used in a helpful way.
First, check how much space you have and how much you're using. In macOS
10.14 Mojave, look at the graph at the bottom of System Preferences \>
iCloud. In 10.15 Catalina, the graph is in System Preferences \> Apple
ID \> iCloud. In iOS, you'll find a similar graph at Settings \> *Your
Name* \> iCloud.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Wh/Clean-Messages.jpg" class="img-fluid rounded m-2" width="800" />

Then, to clear space, work through these five approaches.​

**1. Remove Unnecessary iCloud Device Backups**

The biggest win comes from deleting iCloud device backups for devices
you no longer use. It's common for these to stick around, so if you
recently upgraded from an iPhone X to an iPhone 11 Pro, the iPhone X
backup is probably still consuming gigabytes.

Navigate to Settings \> *Your Name* \> iCloud \> Manage Storage \>
Backups to see what you have. If you find backups for a previous iPhone
or iPad, tap it and then tap Delete Backup.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Wh/Delete-old-backups.jpg" class="img-fluid rounded m-2" width="800" />

**2. Delete Unnecessary Data from iOS Apps**

While you're in the iCloud Storage screen (the leftmost screenshot
above), look through the other apps at the top of the list. The Photos
app will likely be using the most storage, but all you can do to
minimize its space usage is delete unnecessary screenshots, duplicate
photos, and accidental videos from Photos. That will likely require lots
of manual effort.

However, some other apps---think about third-party camera or video
apps---may be using space unnecessarily. Investigate any apps reporting
a lot of usage in the iCloud Storage screen, and if possible, clear out
the unnecessary data.

Finally, consider Messages. If you regularly trade photos and videos in
chats, it could be another place you can save significant space. In the
iCloud Storage screen, tap Messages \> Top Conversations to see which
conversations are the largest. Tap one to switch to Messages, tap the
person's avatar at the top of the conversation, tap the Info button,
scroll down to see the photos, and tap See All Photos. Tap Select, tap
photos you have no desire to keep within that Messages conversation, and
then tap Delete at the bottom-right of the screen.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Wh/iCloud-storage.jpg" class="img-fluid rounded m-2" width="800" />

**3. Avoid Backing Up Apps with Massive iCloud Data Stores**

If one of your apps is storing a lot of data that you don't want to
delete, but that you don't care if it were to be lost, you can prevent
it from being backed up by iCloud Backup and reduce the size of your
backups.

To find such apps, navigate to Settings \> Your Name \> iCloud \> Manage
Storage \> Backups and tap the name of the device you're on. That screen
shows which apps consume the most space in your backup. Tap the toggle
switch next to an app to stop backing it up and delete its data from
your backup.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Wh/Prevent-apps-from-backing-up.jpg" class="img-fluid rounded m-2" width="800" />

**4. Scan for and Delete Large Files in iCloud Drive**

It's hard to know if you're likely to be using lots of space in iCloud
Drive---it all depends on what iCloud-savvy apps you use and if you
store other files in iCloud Drive via the Mac's Finder or the Files app
in iOS.

There's no need to guess, however, thanks to free Mac apps that help you
identify especially large files and folders. Our favorites are
[GrandPerspective](http://grandperspectiv.sourceforge.net/){:rel="nofollow"} and
[OmniDiskSweeper](https://www.omnigroup.com/more){:rel="nofollow"}.
GrandPerspective uses a graphical view so you can see at a glance where
your space is going, whereas OmniDiskSweeper opts for a classic
text-based approach that gives you hard numbers. In GrandPerspective,
choose File \> Scan Folder and select iCloud Drive in the sidebar of the
Open dialog. For OmniDiskSweeper, choose File \> Size Folder.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Wh/Scanning-disks.jpg" class="img-fluid rounded m-2" width="800" />

Whichever app you use, it's easy to select large files or folders and
click Delete (GrandPerspective) or Trash (OmniDiskSweeper). You may have
to set an option in GrandPerspective \> Preferences to enable deletions
if its Delete button is disabled.​

**5. Delete Old Email from iCloud Mail**

All the email you store at iCloud counts against your free space, so it
can be worth clearing out unwanted old messages (and their large
attachments). To delete individual messages using Apple's Mail, just
select them and click the Trash button in the toolbar. Some messages are
much bigger than others, however, and to find them, choose View \> Sort
By \> Size. That puts the largest messages at the
top.

Of course, deleting messages normally just moves them to the Trash
mailbox; to reclaim the space they occupy on iCloud, choose Mailbox \>
Erase Deleted Items \> *AccountName*. Once you do that, the messages are
gone for good.

If you want to remove an entire mailbox and its contents, select it in
the sidebar and choose Mailbox \> Delete Mailbox. That deletes all of
its messages immediately and can't be undone.

When you put all these space-clearing techniques together, you'll likely
be able to clear enough cruft that you won't have to pay Apple for more
iCloud storage space. But if you're uncomfortable deleting such data,
there's no shame in upgrading to a larger iCloud storage plan.