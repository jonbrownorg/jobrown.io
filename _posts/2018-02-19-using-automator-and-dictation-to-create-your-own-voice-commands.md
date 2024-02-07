---
layout: post
date: '2018-02-19 22:58 -0500'
author: Jon Brown
permalink: /blog/use-automator-to-create-voice-commands/
published: true
type: BlogPosting
title: Using Automator to create your own voice commands
image: /assets/images/covers/2018/automator-hero-740x400.jpg
thumbnail: /assets/images/covers/2018/automator-hero-740x400.jpg
link: /assets/app-images/2018/automator-hero-740x400.jpg
tagline: Using Automator to create your own voice commands
tags:
  - tutorials
  - mac
categories:
  - tips
---
Your Mac comes with a fantastic App which allows you to easily create your own mini Apps that can complete all kinds of actions automatically so if you regularly do things such as set the volume to 40% exactly you can create an automator workflow to do it for you.

You can also easily link this with the dictation service that is built into osX to create something that really does save time and is really cool to boot.

Today I will show you how to create a simple workflow with automator that will open a specific website when I say a command.

Firstly, you need to enable Dictation and Dictation Commands.

Go to:
System Preferences > Keyboard > and choose the Dictation Tab.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image5.png" class="img-fluid rounded m-2" width="750">

Make sure Dictation is on and check the box for “Use Enhanced Dictation”.

A download will start if you haven’t used Dictation in the past it is 400MB or so and will take a minute or two depending on the speed of your connection.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image7.png" class="img-fluid rounded m-2" width="750">

Next open the Accessibility preference pane.

Go To:
System Preferences > Accessibility

Scroll down to Dictation and check the box for “Enable the dictation keyword phrase:”

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image6.png" class="img-fluid rounded m-2" width="750">

You can set a different phrase other than Computer but it may be wise to keep it simple for now.

I also enabled the “Play sound when command is recognized” option.

You can quickly look through the entire list of built in commands by clicking on the “Dictation Commands” button.

Now open the Automator App which you will find in the Applications folder.

Choose New from the File menu in Automator, and then select Dictation Command (doing this will add the command to Dictation automatically).

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image9.png" class="img-fluid rounded m-2" width="750">

1. Firstly, name your command, this is the command you will say to run the Automator workflow we are about to create.

2. Then press the “Record” button to create a Watch Me Do Item:

If you end up with extra items in the watch me do simply highlight the step and delete with the backspace key.

In this case I am going to open Safari in the Dock and type in the URL and hit return
Once this is done press the Run button to test and Save your new workflow (App).

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image8.png" class="img-fluid rounded m-2" width="750">

You may be asked to provide permissions to Automator and your new App which is done through System Preferences > Privacy

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image2.png" class="img-fluid rounded m-2" width="750">

Now that is all done simply say the “Enable the dictation keyword phrase:” AND the “Dictation Command:” you have set.

In this case it’s “Computer launch Grove Technologies”, and hey presto you will see the mouse move to Safari in the Dock and type in the URL and hit return.

Fantastic isn’t it! But wait it’s a bit inefficient, well luckily Automator has some built in Library Items that can do the same as this without needing to write AppleScript code and without having to record your mouse and keyboard inputs.

In Automator create a new Dictation Command workflow by choosing New from the File Menu and selectin Dictation Command as before.

Now this time:
1. name your command.
2. open the Library Draw.
3. Select Text.
4. Get Specified Text.

And enter the URL you are going to visit in this case [{{ site.site_cdn }}/blog/]({{ site.site_cdn }}/blog/).

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image1.png" class="img-fluid rounded m-2" width="750">

Next:
1. Library draw.
2. Internet.
3. Display Webpages.

You can see how the workflow joins the first and second items, meaning the second item “Display Webpages” won’t run without the first “Get Specified Text”.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image4.png" class="img-fluid rounded m-2" width="750">

Now when we say “Computer quick launch Grove Technologies” it very quickly if not instantaneously launches Safari and visits [{{ site.site_cdn }}/blog/]({{ site.site_cdn }}/blog/) or whichever URL you specified.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/dictate/image3.png" class="img-fluid rounded m-2" width="750">

Hopefully this very easy introduction to Automator inspires you to do some more complicated workflows.
