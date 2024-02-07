---
layout: post
date: '2020-05-14 00:00 -0500'
author: Jon Brown
permalink: /blog/use-the-mac-s-built-in-screen-sharing-to-provide-remote-help/
published: true
title: Use the Macs Built-In Screen Sharing to Provide Remote Help
description: Use the Macs Built-In Screen Sharing to Provide Remote Help
blogimgpath: 20200501Us
tags:
  - MacOS
  - iOS
categories:
  - tips
  - articles
fpimage: /assets/images/covers/2020/Header-Screen-Sharing-photo-fp.jpg
image: /assets/images/covers/2020/Header-Screen-Sharing-photo.jpg
thumbnail: /assets/images/covers/2020/Header-Screen-Sharing-photo.jpg
link: /img/app-images/2020/Header-Screen-Sharing-photo.jpg
cta: 4
comments: true
---
Are you the person your friends and family members turn to for questions
about the Mac? In normal times, those questions might come over dinner
or at another in-person gathering, such that you could look directly at
their Mac to see what was going on. Now, however, with everyone staying
at home due to the coronavirus pandemic, answering those questions has
seemingly gotten harder. But it doesn't have to be that way, thanks to a
built-in feature of macOS that you may not have known about: screen
sharing.

With the Mac's built-in Screen Sharing app, you can either observe or
control another person's Mac, anywhere on the Internet. They don't even
need to enable Screen Sharing in System Preferences \> Sharing. (Don't
worry---there are multiple ways that Apple ensures that this feature
can't be used surreptitiously.)​

**Initiate the Connection**

There are multiple ways to connect to a remote Mac for screen sharing,
but two stand out as being particularly easy.

First, if you communicate in Messages with the person whose Mac you're
trying to control, make sure your conversation with them is selected,
and then choose Buddies \> Ask to Share Screen. The other person can
also initiate the connection with you by choosing Buddies \> Invite to
Share My Screen.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-Messages.png" class="img-fluid rounded m-2" width="400" />

Second, if Messages doesn't work for you (those commands are often
dimmed), or the other person doesn't use Messages, there's another
option. Press Command-Space to open Spotlight and type "Screen Sharing".
The Screen Sharing app should be the top hit---press Return to launch
it.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-Spotlight.png" class="img-fluid rounded m-2" width="800" />

Then, in the dialog that appears, enter the person's Apple ID, which is
likely their email address, and click Connect.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-Apple-ID.png" class="img-fluid rounded m-2" width="400" />


**Accept the Connection**

Needless to say, macOS doesn't allow anyone to connect to a Mac like
this without permission. The other person needs to accept the connection
request, which they do by clicking Accept in the notification that
appears, likely in the upper-right corner of the screen. Obviously,
clicking Decline immediately terminates the connection.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-permission.png" class="img-fluid rounded m-2" width="400" />

After clicking Accept, the other person gets yet another permission
request, this time with additional options. They can once again choose
to Accept or Decline, and choose between allowing you to control the
screen or just observe them using it. And, of course, if you ever get a
screen sharing request from someone you don't know, you can always click
Block This User to ensure it doesn't happen again.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-Control-Observe.png" class="img-fluid rounded m-2" width="400" />

Next, a little popover appears to alert the other person to the new icon
on the menu bar. The blue menu bar icon constantly flashes while the
connection is active so there's no question that screen sharing is
taking place.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-popover.png" class="img-fluid rounded m-2" width="400" />

So what's in that menu? Commands for switching between controlling and
observing (choose "Allow *Name* to control my screen" to toggle), mute
the microphone (more on that shortly), pause screen sharing, and end the
session.
​
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-menu.png" class="img-fluid rounded m-2" width="400" />

**Use the Connection**

The Mute Microphone command in the remote Mac's Screen Sharing menu is a
hint---when you're sharing the screen, the connection also provides full
audio communication. This seems helpful, but in many cases, you're
already talking on the phone, at which point it's helpful to mute the
microphone on both sides. Or hang up the phone and stick with Screen
Sharing's audio.

For the most part, once you're controlling someone's Mac remotely, it's
just like using the Mac while sitting in front of it. You can move the
pointer around, select icons and menus, open apps and documents, and so
on. You may notice a slight lag or jitter as the screen draws, since
updating it over an Internet connection is much, much slower than in
person.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-remote-view.jpg" class="img-fluid rounded m-2" width="800" />

You do have a few special capabilities based largely on the buttons in
the toolbar, however:

-   **Toggle Control/Observe:** When you're
    controlling the remote Mac, you may find yourself competing for the
    pointer and keyboard with the other person. To let them "drive,"
    click the binoculars icon in the toolbar to switch to Observe mode.
    Click the arrow pointer to return to Control mode.

-   **Resize the window:** If you're on a 13-inch
    MacBook Pro and trying to control a 27-inch iMac screen, it simply
    won't fit. Luckily, Screen Sharing lets you resize the window so it
    does, although some interface elements may become too small to use
    easily. If that's a problem, you can disable scaling by clicking the
    left-most Scaling button, after which everything on the remote
    screen will appear at normal size. You'll have to scroll the window
    to see parts of the screen that are out of view.
-   **Share Clipboard:** By default, you're sharing
    the Clipboard, so anything you cut or copy on your Mac will be
    transferred to the other Mac's Clipboard, and vice versa. If that's
    awkward, you can disable it and then use the commands in the
    Clipboard menu to get or send the Clipboard contents manually.
-   **Take a screenshot:** Normal screenshot
    controls don't work for taking a screenshot of the remote screen, or
    rather, they'll work on the remote Mac. To take a screenshot of what
    you see and keep it on your Mac, click the Screenshot button.
-   **Transfer files:** It's not obvious, but you
	can move files back and forth between the two Macs merely by
    dragging them to and from the remote Mac's window. You sometimes
    have to pause slightly for Screen Sharing to realize your pointer
    has left the remote Mac and is on your Mac, but as soon as you let
    up on the mouse button, the file copies. A File Transfers window
    shows progress and history.
    
<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200501Us/Screen-Sharing-File-Transfers.png" class="img-fluid rounded m-2" width="400" />

When you're done with your screen sharing session, you can shut it down
by choosing End Screen Sharing from the remote Mac's Screen Sharing menu
or just close the window or quit the Screen Sharing app on your Mac.
Remember that as soon as you do that, the audio connection will drop as
well, so make sure you've said goodbye first!