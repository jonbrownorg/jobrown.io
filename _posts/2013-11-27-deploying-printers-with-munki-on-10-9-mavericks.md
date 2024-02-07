---
title: Deploying Printers with Munki on 10.9 Mavericks
author: Jon
layout: post
permalink: /blog/deploying-printers-with-munki-on-10-9-mavericks/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - casper-munki
  - osx-system-administration
tags:
  - deploy-printers
  - munki
  - officejet
  - ppd
---
It is possible to add, remove and manage printers using Munki.

You might be asking: Why add and remove printers using Munki? Why not just use Profile Manager?

You can use Profile Manager to manage printer lists but the functionality is limited. One major issue with managing printer lists with Profile Manager is if you add a printer to an Profile Manager client&#8217;s printer list, and the driver file for that the printer isn&#8217;t installed on the client system, the printer will be added using the Generic Printer Driver. Even if the printer driver file is installed later the printer continues to use the Generic Printer Driver.

So for my setup I always deploy all printer drivers for all the printers that I have as mandatory silent installers that either get loaded on the machine on image or are loaded on the machine with Munki post image while the machine is in the wild. 

I also make them optional installs that way users can opt to install the driver in the event that their installation of the driver becomes corrupt or unusable.

> [ Source ][1] &#8211; Taken from the Munki Wiki. I added the bit about using Iceberg to create the package as I believe its much easier for the entry level Mac Administrator to use and deploy printers using MUNKI. 

**Create the Package**

Note: I am using Iceberg to build the packages to install the printers. You can use whatever packager you prefer, but I think using Iceberg makes things easier and cleaner.

What we are going to do is create a payload free package with a post flight script that is going to setup the printer on the users system.

To build, set up a new Iceberg project. Since we’ll need to run this installer with root privileges, I recommend setting the project type to Darwin: Package.

That will open the project with the installation privileges automatically set to root. In this case, I’m naming the project HP Officejet 4620.  
Once the Iceberg project opens, check the Settings section. You’ll want to make sure that the your information is filled in here (if you don’t know what to put in, check the Help menu for the Iceberg User Guide. The information you need is in Chapter 6 – Customizing component settings.)
  
You’ll also need to check the Options section, to make sure that Authorization: is set to Root Authorization.

Next, you’ll want to click on the Scripts section. In Scripts, scroll down as needed until you see the postflight section.

Create a postflight script for a package that will be installed using Munki. This is the simple shell script I made that you can use or modify if you deem it necessary

{% highlight bash %}
#!/bin/sh
# (c) 2010 Walter Meyer SUNY Purchase College
# Script to install and setup printers on a Mac OS X system in a "Munki-Friendly" way.
# Make sure to install the required drivers first!
# Variables. Edit these.

printername="SOME_PRINTER_NAME"
location="SOME LOCATION"
gui_display_name="HP Color LaserJet 9500N Example"
address="lpd://printserver.yourcompany.org/SOME_PRINTER_NAME"
driver_ppd="/Library/Printers/PPDs/Contents/Resources/HP Officejet 4620 series.ppd.gz"
# Populate these options if you want to set specific options for the printer. E.g. duplexing installed, etc.
option_1=""
option_2=""
option_3=""
### Printer Install ###
# In case we are making changes to a printer we need to remove an existing queue if it exists.
/usr/bin/lpstat -p $printername
if [ $? -eq 0 ]; then
        /usr/sbin/lpadmin -x $printername
fi
# Now we can install the printer.
/usr/sbin/lpadmin \
        -p "$printername" \
        -L "$location" \
        -D "$gui_display_name" \
        -v "$address" \
        -P "$driver_ppd" \
        -o "$option_1" \
        -o "$option_2" \
        -o "$option_3" \
        -o printer-is-shared=false \
        -E
# Enable and start the printers on the system (after adding the printer initially it is paused).
/usr/sbin/cupsenable $(lpstat -p | grep -w "printer" | awk '{print$2}')
# Create an uninstall script for the printer.
uninstall_script="/private/etc/cups/printers_deployment/uninstalls/$printername.sh"
mkdir -p /private/etc/cups/printers_deployment/uninstalls
echo "#!/bin/sh" > "$uninstall_script"
echo "/usr/sbin/lpadmin -x $printername" >> "$uninstall_script"
echo "/usr/bin/srm /private/etc/cups/printers_deployment/uninstalls/$printername.sh" >> "$uninstall_script"
# Permission the directories properly.
chown -R root:_lp /private/etc/cups/printers_deployment
chmod -R 700 /private/etc/cups/printers_deployment
exit 0
{% endhighlight %}

The biggest challenge that I found was trying to accurately find the printer PPD driver name in the list of drivers located at /Library/Printers/PPDs/Contents/Resources/

The names are very cryptic you need to filter by some kind of keyword like this.

Once your sure you have the correct name of the PPD that you want to configure you need to change the script and save it. Once you’ve got the postflight script built, run the following command to make the script executable

{% highlight bash %}
sudo chmod a+x /path/to/postflight
{% endhighlight %}

Once it’s been made executable, drag the script into the Installation Scripts section in the postflight line. Next, ensure the checkbox next to postflight is checked. Last step, go ahead and build the package. (If you don’t know to build, check the Help menu for the Iceberg User Guide. The information you need is in Chapter 3 – Creating a package.) Once the package has been built, test it by taking it to a test machine that doesn’t have the printer configured on it and install. 

**Add the package to the Munki REPO**

Run makepkginfo on your printer install dmg/package located on your repo. E.g:

{% highlight bash %}
makepkginfo /Volumes/munki/repo/path_to_your_pkg.dmg > /Volumes/munki/repo/path_to_your_pkg.dmg.pkginfo
{% endhighlight %}

Next change the uninstall_method key in the pkginfo file to look like so (edit this):

{% highlight bash %}
<key>uninstall_method</key>
<string>/etc/cups/printers_deployment/uninstalls/your_printername_variable_from_the_postflight_script.sh</string>
{% endhighlight %}

Finally add a requires key to the pkginfo file and reference the required driver installation package(s) for the printer (if you haven&#8217;t added the printer driver installer(s) to your repo yet do it now).

{% highlight bash %}
<key>requires</key>
<array>
    <string>Lexmark Printer Drivers</string>
</array>
{% endhighlight %}

**How do I find out what options are available to configure the printer with (Duplex, etc.)?**

Install the printer in question on your system first.

Then in terminal:

{% highlight bash %}
lpoptions -p YOUR_CUPS_PRINTER_QUEUE_NAME -l
{% endhighlight %}

This command will output a list of configurable options for your printer. So if the output is this:

{% highlight bash %}
BRMonoColor/Color/Grayscale: *Color Mono
BRSlowDrying/Slow Drying Paper: *OFF ON
{% endhighlight %}

I could set the options variables in the script to look like this:

{% highlight bash %}
option_1="BRMonoColor=Mono"
option_2="BRSlowDrying=ON"
option_3=""
{% endhighlight %}

**Potential Problems**

There are some potential problems with using this printer installation method. If a privileged user removes the printer manually, Munki would have no way of knowing that the printer has been removed. Munki is only aware of the printer being installed based on the fact that your package was installed. You could argue this isn&#8217;t really a problem because if your user is an admin they can do anything they want anyway. It is something to be aware of though.

Remember that if you change the &#8216;printername&#8217; variable in the script with the intention of changing the CUPS name of a printer that is already installed, this will not work. A new printer will be installed if you try this. If you want to change the CUPS printer name for a printer that is already installed you have to remove the existing printer with Munki first.

Also remember that Munki determines whether a printer package is installed based on the information set in your Makefile you built the package with. If you change the TITLE or REVERSE\_DOMAIN and build a package with the intention of modifying an existing install it won&#8217;t work! Just iterate the PACKAGE\_VERSION from 1.0 to 1.1 or 1.1 to 1.2, etc.



 [1]: https://code.google.com/p/munki/wiki/ManagingPrintersWithMunki "Source"