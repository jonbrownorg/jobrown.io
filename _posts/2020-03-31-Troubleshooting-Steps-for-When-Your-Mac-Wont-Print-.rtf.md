---
layout: post
date: '2020-03-31 00:00 -0500'
author: Jon Brown
permalink: /blog/troubleshooting-steps-for-when-your-mac-wont-print/
published: true
title: Troubleshooting Steps for When Your Mac Wont Print
description: Troubleshooting Steps for When Your Mac Wont Print
blogimgpath: 20200305Tr
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2020/Header-Printer-innards-photo.jpg
thumbnail: /assets/images/covers/2020/Header-Printer-innards-photo.jpg
link: /img/app-images/2020/Header-Printer-innards-photo.jpg
cta: 3
comments: true
---
There's little more frustrating than being unable to print a document
when you need it. You choose File \> Print, and nothing happens. Or,
worse, macOS looks like it's printing, so you focus on some other task,
only to realize 20 minutes later that nothing has come out of the
printer. Now what? Try these troubleshooting steps.​

**Check the Printer's Print Queue App**

Whenever you print, the printer's Print Queue app appears in your Dock,
named for the printer. (If it doesn't, open System Preferences \>
Printers & Scanners, select the desired printer and click Open Print
Queue.)

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Tr/Print-Queue-paused.png" class="img-fluid rounded m-2" width="800" />

In the Print Queue app, look at the status of the printer and the print
job. First off, if you print to multiple printers, does the app
correspond with the correct printer? If not, cancel the job by clicking
the X button to its right, quit the Print Queue app, print again, and
choose the correct printer from the Printer pop-up menu in the Print
dialog.

The Print Queue app may also display a useful error message that tells
you what's wrong, such as the printer being offline or not connected.
You may also see old print jobs stuck in the queue that are blocking the
current job---delete them by clicking the X next to their
names.

If something has caused the printer to be paused, click the green Resume
button. That won't work if the printer has paused itself due to a paper
jam or low supplies---in such a case, resolve the problem first.​

**Check the Printer and Its Connection**

Error messages may have given you a hint about problems with the printer
itself, but they're not always helpful. Verify the following:

-   **Is the printer turned on?** Doh! If
    necessary, turn it on. Also, try turning it off and back on---this
    resolves a surprising number of printing problems.
-   **Is the printer connected?** It should be
    connected via either USB or your Wi-Fi or Ethernet network---make
    sure the cables are plugged in and it's on the same network as your
    Mac. Consider restarting your router if there seem to be
    communication issues.
-   **Does the printer have paper in it?** No
    paper, no printout.
-   **Is there a paper jam?** Printers usually
    squawk about paper jams. Clear it before trying again.
-   **Are any ink or toner cartridges empty?** Some
    printers are notorious for refusing to print if even one ink
    cartridge is empty, or even low. That can be true even if you're
    printing only in black and a color cartridge is
    empty.

There's one final check of the printer you can perform: printing a test
page directly from the printer (check your printer's manual for
instructions). If that fails, the printer may need servicing.​

**Check Your Mac's Printing Setup**

The final place to look for a solution to printing problems is in your
Mac's printing subsystem. Problems here can be specific to your document
or to its app, or they can be related to the printer
driver.

For your first test, try opening your document in Preview as a PDF (in
the document's Print dialog, choose PDF \> Open in Preview) and printing
it from Preview.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Tr/Print-to-PDF.png" class="img-fluid rounded m-2" width="800" />

If that works, you know that your Mac can print, so the problem has to
do with either the document or the app. To isolate the problem to the
document or the app, print another simple document from the app. If that
does print, you know the problem is with your document, but since you've
already gotten a PDF to print of that document, your immediate problem
may be already solved. If the problem is with the app, you'll eventually
need to solve it, of course. But most of the time, the problem actually
lies with your printer driver.

It's uncommon for driver updates to come outside of macOS updates these
days, but check System Preferences \> Software Update just to make sure.
You can also check the printer manufacturer's Web site for updates;
Google on "*printerNameAndModel* Mac driver" to find what's available.
Compare that against what you see when you select the printer in System
Preferences \> Printers & Scanners and click the Options & Supplies
button. If there's a newer version, download and install it.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Tr/Canon-Pixma-drivers.png" class="img-fluid rounded m-2" width="800" />

If installing a new version doesn't work, try deleting the printer from
Printers & Scanners and re-adding it. Select the printer in the list and
click the -- button at the bottom to delete it. Then click the + button
and add it back.

No luck? Try deleting the driver and adding it again, but choose a
different option from the Use pop-up menu at the bottom. Start with the
name of the printer itself instead of Secure AirPrint to ensure you're
using the manufacturer's driver instead of Apple's. If that doesn't make
a difference, try again with Generic PostScript Printer or Generic PCL
Printer---beware that they may not provide full functionality beyond
basic printing. For the ultimate in trying something different, if it
supports your printer, try installing an independent driver from [the
open-source Gutenprint
project](http://gimp-print.sourceforge.net/MacOSX.php){:rel="nofollow"}.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Tr/Alternative-drivers.png" class="img-fluid rounded m-2" width="800" />

One note: if possible, avoid using the Printer Sharing feature that's
been in macOS for years. It works, but it requires that the Mac doing
the sharing be turned on and awake whenever anyone using the shared
printer wants to print.

If you're still stuck, go nuclear. Go back to the Printers & Scanners
preferences, Control-click any printer, and choose Reset Printing
System. As the warning dialog tells you, doing so will delete all your
existing printers, scanners, and faxes, and any pending print jobs.
You're basically resetting your printing system to factory defaults,
after which you'll have to add printers back
again.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2020/20200305Tr/Reset-printing-system.png" class="img-fluid rounded m-2" width="800" />

One of these solutions will almost certainly solve your problem, but if
not, give us a call!