---
layout: post
date: '2019-07-10 00:00 -0500'
author: Jon Brown
permalink: /blog/penn-state-munki-customization-and-branding/
published: true
title: Munki Customization & Branding
description: Munki Customization & Branding
blogimgpath: 20190703Di
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2019/laptopcode.jpg
thumbnail: /assets/images/covers/2019/laptopcode.jpg
link: /img/app-images/2019/laptopcode.jpg
cta: 3
comments: true
---
Today we're going to explore branding and customization of a few popular open source Mac management tools Munki and Munki Report. Before we dive into the specifics and get into the weeds it’s important to first recap and review the importance of branding and its role in the IT admin space. Why is branding so key when it comes to our ability to support our users?

When you look at some of the brands on this screen you get a sense, a feeling and it sparks an emotional tone. Branding inherently has a power. A power to pass along these feelings. 

Branding at its very core is a system where we foster an environment of trust. 

There are a lot of things that go into the psychology of trust, elements like safety, security and stability are all things that are portrayed in a good and positive brand. 

You all have employers or are yourselves employers and so you want your brand to pass along, your core values and your beliefs. It's critical to fostering that environment of trust. 

This is something that Apple has done very well as a brand, and inherently expects it's developers and administrators to embody and personify its core values while they with their products. 

Your school, university or creative agency wants its users to be productive and the best environment for that is a safe and trusted one 

and so that brand and the IT teams ability to personify that brand is key when it comes to building trust and confidence between yourselves and your users. 

Software management, patch management and preference management whether done via a MDM, (branded or not) is a sensitive process that has undertones of mistrust threaded through it. What we have learned is that engaging the end user rather than hiding things from them is the best method in garnering overall user acceptance and trust. 

However when your in a position where you need to us a Free tool or an Open Sourced system, it can convey some unintended messages that can hurt your ability to ensure overall adoption and that’s really what we're talking about. Trustworthiness equals acceptance and adoption. 

Munki and MunkiReport are 2 of the best tools made for software and patch management for the Mac platform. Its well supported. They’re free and it’s easy to manage. Branding these tools brings them to the next level. Suddenly you can refer to them by other names. “Penn State University’s Managed App Update System” for example conveys a certain element of professionalism, welcomes in the values personified by the university and brings an added level of comfort to the users. 

Now they know this is a sanctioned tool, it’s a trusted tool and they should be following directives within the tool. 

Now that we have covered branding, let’s talk about how to brand these great tools. Each tool has branding or theming undertones. Some are robust. Others not so much. Let’s start with Munki. Lets walk through the process of creating a MacOS App Icon. 

Before I move on the icon I created here was created with a [free MacOS icon template](https://www.deviantart.com/ddnava/art/MacOS-Icon-Template-645202875){:rel="nofollow"} that I have linked to. Having an icon is part of the rebranding or theming process we will cover next. 

{% include videos/video.html id="l3HWhcOMnoc" class="bg-img-1" header="Penn-State-Header-1.png" %}

Munki comes with its subsystem which lives in the /usr/local/munki portion of the users computer and Managed Software Center its user facing front end with all of its Munki icon glory. Munki out of the box has the ability to add banners and customize the sidebar and footer of any section. Per Munki's own documentation it says "While you can customize anything in Managed Software Center.app, the most common customizations (and the only ones officially supported) are for these template files:

showcase_template.html -- controls the banner images and any links
sidebar_template.html -- the right-side sidebar displayed in the main Software view
footer_template.html -- the page footer

While it is possible to customize any of the other template files, it's possible (or even likely) that a future release of Managed Software Center.app will include changes to the default/included versions of these template files. This could lead to unexpected/undesired behavior if you did not also update your versions of the customized files. Therefore, when you make your archive of customized files, include ONLY those files you actually customize. Do not include any other template files."

Let's talk about the code needed for the showcase.html file. 

{% highlight bash %}
<script type="text/javascript">
var currentSlide = 0, playing = 1

function slides(){
    return document.querySelectorAll('div.stage>img')
}

function showSlide(slideNumber){
    theSlides = slides()
    for (c=0; c<theSlides.length; c++) {
        theSlides[c].style.opacity="0";
    }
    theSlides[slideNumber].style.opacity="1";
}

function showNextSlide(){
    if (playing) {
        currentSlide = (currentSlide > slides().length-2) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    }
}

function stageClicked() {
    var slide = slides()[currentSlide];
    var target = slide.getAttribute('target');
    var link = slide.getAttribute('href')
    if (target == '_blank') {
        if ('AppController' in window) {
            // MSC < version 5 with WebView
            window.AppController.openExternalLink_(link);
        } else {
            // MSC version 5+ with WKWebView
            window.webkit.messageHandlers.openExternalLink.postMessage(link);
        }
    } else {
        window.location.href = link;
    }
}

window.onload=function(){
    showSlide(0);
    if (slides().length > 1) {
        setInterval(showNextSlide, 7500);
    }
}
</script>

<div class="showcase">
    <div class="stage" onClick='stageClicked();'>
        <img target="_blank" href="http://www.apple.com" alt="Apple" src="custom/resources/Apple.png" />
        <img href="munki://detail-GoogleChrome.html"  alt="Google Chrome" src="custom/resources/Chrome.png" />
        <img href="munki://developer-Google.html" alt="Google Applications" src="custom/resources/Google.png" />
    </div>
</div>
{% endhighlight %}


Here you will see the code for the sidebar.html file. This code adds a picker menu and other bookmarked elements to the sidebar. 

{% highlight bash %}
<div class="sidebar">
    <div class="chart titled-box quick-links">
        <h2>Quick Links</h2>
        <div class="content">
            <ol class="list">
                <li class="link user-link"><a href="#">Welcome</a></li>
                <li class="link user-link"><a href="#">Support</a></li>
                <li class="separator"><hr/></li>
                <li class="popup">
                    <div class="select links">
                        <label>
                            <span></span>
                            <select id="category-selector" onchange="category_select()">
                                ${category_items}
                            </select>
                        </label>
                    </div>
                </li>
                <li class="link"><a href="http://www.apple.com/osx/whats-new/">What's new in Mavericks</a></li>
                <li class="link"><a target="_blank" href="http://www.apple.com">Apple</a></li>
                <li class="link"><a target="_blank" href="http://google.com">Search Google</a></li>
                <li class="link"><a target="_blank" href="http://bing.com">Search Bing</a></li>
                <li class="separator"><hr/></li>
                <li class="link"><a target="_blank" href="http://www.apple.com/support/">Apple support</a></li>
                <li class="link"><a target="_blank" href="http://www.apple.com/support/mac/">Mac</a></li>
                <li class="link"><a target="_blank" href="http://www.apple.com/support/osx/">OS X</a></li>
                <li class="link"><a target="_blank" href="http://www.apple.com/support/mac-apps/">Mac Apps</a></li>
            </ol>
        </div>
    </div>
</div>
{% endhighlight %}

Finally here the code for the footer.html file. Note that images referenced in these files are located in a folder called resources and the templates folder includes all the html files specified in the Munki documentation. Per the documentation 

{% highlight bash %}
<div class="bottom-links">
    <ul class="list" role="presentation">
        <li><a target="_blank" href="http://www.apple.com">Apple</a></li>
        <li><a target="_blank" href="http://www.google.com">Google</a></li>
        <li><a href="updates.html">Updates</a></li>
    </ul>
</div>
{% endhighlight %}

"managedsoftwareupdate as part of its update check, attempts to download client customization resources. Typically, you can make these available from your Munki repo by creating a "client_resources" directory at the top level of the repo. If you want to make these available at a different URL, you can set Munki's ClientResourceURL to an alternate base URL. (This follows the pattern of ManifestURL, CatalogURL and PackageURL as alternate base URLs.)

If Munki's ClientResourcesFilename preference is defined, this filename will be used (appending ".zip") if needed; otherwise managedsoftwareupdate will request an archive with the same name as the primary manifest (plus ".zip"), falling back to "site_default.zip"."

{% highlight bash %}
zip -r site_default.zip resources/ templates/
{% endhighlight %}

Once you associate or deploy a specific client resource with a users computer it downloads and displays those elements. Banners can click out to outbound URLs as can the sidebar links and footer links as well. Let's demo this process. 

{% include videos/video.html id="fTb6ZtpbcC8"  class="bg-img-1" header="Penn-State-Header-2.png" %}

As you can see here may of the elements in the un-modified version of Munki are now modified. Many elements can't be modified alone with the custom html file overrides. 

That’s where [our templating script comes in](https://github.com/grovetech/munki-theme){:rel="nofollow"}. Our script can override more than just the main elements. Elements like the top menu bar icons and even the ability to list categories on non category enabled pages are now a possibility. 

While this is powerful, it still leaves many of the elements like the Name of the App and icon unchanged. Thats where Munki Rebrand comes in. An awesome script that allows you to associate a PNG file to change the custom icon of Munki as well as the name of Managed Software Center. This is handled by Munki Rebrand. 

{% highlight bash %}
#!/bin/bash

appname='The Grove'  #  Name of your App
workingdir='/Users/jon/Desktop/munki-theme' ## Where is the script located
signcert='Developer ID Installer: Jonathan Brown (2D4Z7WQ7RS)' # Name of your Developer Certificate
icon='icon_512x512@2x.png' #name of icon file

## Dont Edit

mid='/munki/code/apps/Managed Software Center/Managed Software Center' 
fullpath='/munki/code/apps/Managed Software Center/Managed Software Center/Resources/WebResources'
templatepath='/munki/code/apps/Managed Software Center/Managed Software Center/Resources/templates'
resources='/munki/code/apps/Managed Software Center/Managed Software Center/Resources/'
controllers='/munki/code/apps/Managed Software Center/Managed Software Center/Controllers'

cd $workingdir

git clone https://github.com/munki/munki

#Unlocking File
sudo chflags -R nouchg "$workingdir$fullpath/base.css"

#Making writeable
sudo chmod 777 "$workingdir$fullpath/base.css"

#Adding Custom CSS
cd  "$workingdir$fullpath"
echo "$(echo "@import 'custom.css';" | cat - base.css)" > base.css

#Copy CSS Files
sudo cp "$workingdir/Dark-Theme/custom.css" "$workingdir$fullpath"
sudo rm "$workingdir$templatepath/detail_more_items_template.html"
sudo cp "$workingdir/Dark-Theme/detail_more_items_template.html" "$workingdir$templatepath"

#Modify PY Script
sudo rm "$workingdir$mid/mschtml.swift"
sudo cp "$workingdir/Dark-Theme/mschtml.swift" "$workingdir$mid/mschtml.swift"
#perl -pi -w -e 's{func buildCategoriesPage}{func buildCategoriesPageOLD}g' "$workingdir$mid/mschtml.swift"
#cat "$workingdir/Dark-Theme/modification.py" >> "$workingdir$mid/mschtml.swift"

#Modify Window Size
perl -pi -w -e 's{<value key="minSize" type="size" width="1000" height="475"/>}{<value key="minSize" type="size" width="1331" height="475"/><value key="maxSize" type="size" width="1331" height="730"/>}g' "$workingdir$mid/Base.lproj/MainMenu.xib"

#Modify icons
perl -pi -w -e 's{updatesTemplate.pdf}{updatesTemplate.png}g' "$workingdir$controllers/MainWindowController.swift"
sudo rm -rf "$workingdir$resources/toolbarCategoriesTemplate.pdf"
sudo rm -rf "$workingdir$resources/updatesTemplate.png"
sudo rm -rf "$workingdir$resources/MyStuffTemplate.png"
sudo rm -rf "$workingdir$resources/AllItemsTemplate.png"
sudo cp "$workingdir/Dark-Theme/toolbarCategoriesTemplate.pdf" "$workingdir$resources"
sudo cp "$workingdir/Dark-Theme/AllItemsTemplate.png" "$workingdir$resources"
sudo cp "$workingdir/Dark-Theme/MyStuffTemplate.png" "$workingdir$resources"
sudo cp "$workingdir/Dark-Theme/updatesTemplate.png" "$workingdir$resources"

cd $workingdir/munki

./code/tools/make_munki_mpkg.sh

cd ..

git clone https://github.com/ox-it/munki-rebrand.git

cd munki-rebrand/

echo -n "What is the pkg name that was just built? "
read result
mid='/munki/'
full_pkg_path="$workingdir$mid$result"

sudo ./munki_rebrand.py --appname "$appname" --pkg "$full_pkg_path" --icon-file "$workingdir/$icon" --sign-package "$signcert"
{% endhighlight %}

{% include videos/video.html id="1g4-Pgde0Q4" header="Penn-State-Header-3.png" class="bg-img-1" %}

So what did this script actually do? it replaced the top menu item icons with ones more desire-able. It changed the logo and name of the app via Munki Rebrand and it added a lot of custom CSS elements like rounded buttons and it even added functionality that does not exist. Notice the sidebar in the category view. This is something that normally is null by default. 

Before taking questions I want to pivot to Munki Report with the time we have left to talk about how you can modify the look and feel of that tool as well. Obviously we will want to ask, why would we want or need to customize the branding of Munki Report? Isn’t it an admin only tool? 

We argue that even an admin tool should consistently follow the tone of its counterpart. Even as a systems administrator you will need to share and show your report view to others at some point in time and having that consistency helps enforce your core brand as well as all the things we talked about earlier. 

Munki Report has the ability to set a custom “Company Name” within its .env preferences. This is great because it changes the name pretty much everywhere. But what about logos or imagery? This can easily be done with .js and .css overrides. In the newest version of Munki Report you can enable custom CSS and JS and with Psudeo elements you can show, add or delete content from specific website elements dynamically. 

Here you can see that while we have added the logo to Munki Report’s login screen we have also modified its overall position and changed its default styling. We also removed the version number so as to harden and secure our public facing munki report install. 

{% include videos/video.html id="k0PKbBchhgI" header="Penn-State-Header-4.png" class="bg-img-1" %}

Slides available for download [here](/assets/img/section/branding-munki.pdf).

<embed src="/assets/images/section/branding-munki.pdf" width="100%" height="620px" class="d-none d-sm-block" type='application/pdf'/>
