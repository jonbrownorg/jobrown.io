---
title: 'Packaging &#038; Deploying VMWare Fusion 5.0.1 &#8211; 6.0.2'
author: Jon
excerpt: VMware has introduced with the release of VMware Fusion 6 a new method to deploy the application and to set some default settings. This method doesn’t seem to be documented by VMware just yet and was found while searching how to set the serial number for the app before deploying.
layout: post
permalink: /blog/deploying-vmware-fusion-6/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - casper-munki
  - product-reviews
tags:
  - casper
  - deploy
  - fusion
  - munki
  - vmware
---
If your like me and need to deploy VMWare in your environment and are unsure the approach to use, then you have several options. If you use Casper, JAMF has come out with a PDF outlining the best methods for packaging and deploying VMWare, its preferences and VMMachines. Since VMWare Fusion 5 however VMWare has included a nice manageable way to deploy VMWare to all your machines.

Note, I was struggling to get this to work and realized that if you do not have a mass deployment serial number or serial key that is valid for a volume license then the installation seems to fail. Thats because the steps we are about to take use a command line utility to register the software on install and then suppress the prompts to register the software. If you get software installation errors then make sure that your serial number is valid.

**Requirements**

1.  The VMware Fusion 6.x or 5.x application downloaded from the VMware Download Center. For more information, see Downloading and installing VMware Fusion (2014097)
2.  A Volume License Key for VMware Fusion 6.x or 5.x: Standard or Professional Edition.
3.  A package deployment tool, such as Apple Remote Desktop Admin.

**MetaPackage that comes with VMWare**

Inside the VMWare Application in the VMWare DMG you will see a package called Deploy VMware Fusion.mpkg. Follow these easy instructions also found over at [VMWare Fusions Website](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&#038;cmd=displayKC&#038;externalId=2058680). 

1.  Right-click the downloaded VMware Fusion.app icon, and click Show Package Contents.
2.  In the Contents folder, locate the Library folder.
3.  Right-click the Deploy VMware Fusion.mpkg file and click Copy Deploy &#8220;VMware Fusion.mpkg&#8221;.
4.  Close the VMware Fusion.app package contents Finder window.
5.  Right-click on your desktop and click Paste Item. This creates a copy of the deployment package template on your desktop.
6.  Right-click the Deploy VMware Fusion.mpkg icon and click Show Package Contents.
7.  Locate the folder named 00Fusion_Deployment_Items in the Contents folder.
8.  Copy the downloaded VMware Fusion application (VMware Fusion.app) into the 00Fusion_Deployment_Items folder.
9.  To deploy virtual machines with VMware Fusion, copy one or more virtual machines into the 00Fusion_Deployment_Items folder.

**Sanitize VMWare Machine Image**

Note: Before deploying a virtual machine to multiple clients, you must first modify some user-specific virtual machine settings in a text editor. Open the virtual machine settings file in a text editor. I actually prefer using VI or PICO for this step.

Remove unique identifiers by removing the lines containing these entries

{% highlight bash %}
ethernet0.addressType =
ethernet0.generatedAddress =
ethernet0.generatedAddressOffset =
uuid.bios =
uuid.location =
{% endhighlight %}

**Modify the relative host pathname settings**

Note: When initially set up, Shared and Mirrored folders have absolute path names to the specified shared directories. To make the virtual machine suitable for mass deployment, you must change absolute paths to relative paths that will be expanded the next time the virtual machine is started.

Locate this line

{% highlight bash %}
sharedFolder1.hostPath = "/Users/your_username_here/Documents"
{% endhighlight %}

Change the username-specific part of the pathname to the tilde (~). For example:

{% highlight bash %}
sharedFolder1.hostPath = "~/Documents"
{% endhighlight %}

Save the .vmx file and exit the editor.

IMPORTANT: Do not power on this virtual machine again before mass deployment. If the virtual machine is powered on, the settings will be reset.

1.  Open the Deploy.ini file (located in the 00Fusion_Deployment_Items folder) in a text editor.	
2.  Locate the [Volume License] entry in the file.
3.  Remove the # at the start of the next line containing a dummy license key.
4.  Replace XXXX-XXXX-XXXX-XXXX-XXXX with your volume license key.
5.  Save and close the Deploy.ini file.
6.  Close the Deploy VMware Fusion.mpkg Finder windows, and give the package file a name describing its contents, according on your requirements.

The Fusion Mass Deployment Package is now ready for deployment.

**Deploy using Apple Remote Desktop**

1.  Launch Apple Remote Desktop.
2.  Select the system to deploy to from the list.
3.  Click Install.
4.  When prompted, enter the credentials for the remote system and click Add.
5.  Click + and select the created package, then click Install. Deployment starts and the status is indicated in the progress bar.
6.  The deployed virtual machine is saved in the remote system&#8217;s Macintosh HD/Users/Shared/Virtual Machines folder.

**Deploy with MUNKI**

Below is a sample workflow you can use to import the above package into MUNKI for general distribution. Ultimately importing the final mpkg is the same as importing any package. Once done you would want to make it either an optional install or a managed install in Munki.

{% highlight bash %}
bash-3.2$ /usr/local/munki/munkiimport ~/Downloads/VMWare Fusion\ 6.mpkg 
      Item name [VMWare Fusion]: 
   Display name []: VMWare Fusion
    Description []: VMWare Fusion
        Version [6.0]: 
       Catalogs [testing]: 
      Item name: VMWare Fusion
   Display name: VMWare Fusion
    Description: VMWare Fusion
        Version: 6.0
       Catalogs: testing
Import this item? [y/n] y
Upload item to subdirectory path []: apps/vmware
Path /Users/Shared/munki_repo/pkgs/apps/vmware doesn't exist. Create it? [y/n] y
Copying VMWare Fusion 6.0.dmg to /Users/Shared/munki_repo/pkgs/apps/mozilla/VMWare Fusion 6.0.dmg...
Saving pkginfo to /Users/Shared/munki_repo/pkgsinfo/apps/mozilla/VMWare Fusion 6.0...
{% endhighlight %}

**Create package with Composer**

Alternatively, you could install VMware Fusion manually, creating the installation package using a third party utility. This can be particularly helpful if you want to deploy VMware Fusion as a dmg file rather than a .pkg file or if you want to customize it in ways not previously described (some software, such as InstaDMG will use dmg files instead of packages). In this example we will cover doing so with Composer, a part of the Casper Suite by JAMF Software. 

To start, open Composer on the computer you will be installing VMware Fusion on. For this example I am using Composer 8.6.2. When it first launches you will see the option to create a snapshot. 

While the snapshot is running do not perform any other tasks. When it is complete, then you will see a prompt Install and configure your software. At this point, install VMware Fusion.

When the installation is complete, click back into Composer. You can choose to embed the license key in the installer at this point or capture a base snapshot one more time after the installation and then insert the license key and then create a package with just the files pertaining to licensing VMware Fusion. Once you are satisfied with the name for your installer, click on the Create Package Source button.

When you click this Composer will go through a second lengthy scan. At this point it will be taking a second snapshot of the operating system and will compare the two snapshots to produce a list of what the image (.dmg) or package (.pkg) will consist of. When it is complete you can click on the Verify Contents button to customize what will be a part of the installer

At this point, you will want to remove any extraneous information from the package. Keep an eye out for any items that are not specific to VMware as configuration files for the computer you are installing VMware Fusion onto can be captured here. Take extra caution to ensure that you exclude any machine-specific system configuration files that are not specific to VMware Fusion. Anything being deployed to /System, /etc or /var warrants particular consideration before inclusion into your package with the possible exception of anything that specifically references VMware or Fusion in the file name. However pushing out a file that overwrites /etc/authorization for example could cause systems to not accept logins in the future. 

Once you are satisfied that all of the items for VMware Fusion are listed, and only those items then click on the Build Package button or Build DMG. Once done you can add this item to Self Service or set it up as a managed installation that can be targeted in your JSS.