---
title: Keeping your Mac Cool
author: Jon Brown
layout: post
image: /assets/images/covers/2017/prohero.jpg
thumbnail: /assets/images/covers/2017/prohero.jpg
tagline: "<br>Keeping your Mac Cool"
permalink: /blog/keep-cool/
categories:
  - tips
  - product-reviews
tags:
  - tutorials
  - mac
  - popular
---
Disclaimer: Great care should be taken when altering the behavior of the cooling fans if you overheat your Mac for an extended period you will destroy it! As such do this at your own risk and if you need to consult an expert.
 
That being said this tip can really help extend the working life of your Mac.
 
One of the most common hardware failures on all computers not just Macs is continued over heating of the internal components especially the GPU (graphics card), and traditional HDD modules (hard drives with moving parts) .
 
The following shows the internal temperatures on an iMac 27 inch, Mid 2011 with two external displays connected via the Thunderbolt ports. The room temperature is 25 degrees Celsius (77 degrees Fahrenheit). The iMac has been running for about 45 minutes from cold.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image001.png" class="alignleft" width="339" />
 
To get those temps up a little faster and for all screenshots I had running the following apps Chrome with 3 YouTube videos, FireFox Web browsing, Pages writing this article, Photoshop image editing, Preview screenshots, Illustrator drawing a vector graphic, BBEdit writing code, Skype, and Photo Booth. In time those temperatures will creep up further especially the Hard Drive.
Over extended periods of time in the case of this iMac 6 years those higher temperatures can start to weaken the solder of the components amongst other things.
 
Apple in their wisdom have chosen fan speeds that strike a balance between noise and cooling, using the default settings the fans are barely audible unless the temperatures for the GPU and CPU reach the 90 degree C mark, and the Hard Drive the 60 degree C mark.
 
This is fine but if like me you want to get the best kit available at the time so as to future proof it and you want it working optimally without failures for as long as possible a little more background noise is acceptable, in fact I find it provides some grounding background noise that cancels out the other noises going on around me when i am trying to work.
 
So how do we cool our Macs I hear you ask? Well I have seen some great YouTube videos where people disassemble their Macs and Cut big holes in them for extra cooling!
 
I do not suggest you do that.
 
There is a great little utility available called Macs Fan Control [https://www.crystalidea.com/macs-fan-control/download][1].
 
Again the software developer states:
 
“This program is for advanced users who know how to use it without doing harm to their macs. The authors are not liable for data loss, damages, profit loss or any other types of losses connected with the use or misuse of the program.”
 
And I cannot emphasize this enough do this at your own risk and with great care.
 
Firstly after installing Macs Fan Control leave the fans all on Auto which is the same as the base Apple settings and monitor the temperatures that are already being achieved without any changes, you do not want to go above these, the aim is to cool the Mac and make the fans noisier not quieter.
 
Here are the base temps my iMac has:

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image001.png" class="img-fluid rounded m-2" width="339" />
 
With the Fans on auto:

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image004.png" class="img-fluid rounded m-2" width="417" />

After you have a benchmark, average temperature that the components in your Mac run at, it’s time to tweak the control.
 
Click the custom button against the Fan you wish to control

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image006.png" class="img-fluid rounded m-2" width="343" />
 
I would recommend using a sensor-based value here I am using the ODD (optical disk drive fan, the “superdrive”) to cool the GPU!
 
The temperature from which to start increasing the fan speed from wants to be quite cool, but not unrealistically cool, so for the GPU I have started at 45 degrees C, and set a maximum temperature at 75 degrees C .
 
If I was to set the start temp at a very low number such as 10 degrees C and the Maximum at 45 degrees C it would never achieve this and so the fan will run at full speed creating a lot of noise and not really achieving the desired result.

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image008.png" class="img-fluid rounded m-2" width="505" />
 
The Hard drive or HDD in this particular Mac has it’s own Fan so the best sensor to use is the one for the HDD the Samsung SSD in this Mac does not have a fan but the SSD is in quite a cool place so it doesn’t get affected as badly .
 
So for the HDD, keep in mind that these HDD drives don’t really want a constant temperature of over 50 degrees C for extended periods:

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image010.png" class="img-fluid rounded m-2" width="511" />
 
And for the CPU Fan I’m going to use the PECI (Platform Environment Control Interface) depending on your processor you may not have this interface, the CPU proximity sensor or Heatsink sensor can also be used. Again follow the guide above about the minimum and maximum temperature range you want to cool the Mac, you’re not trying to launch it into orbit.
 
<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image012.png" class="img-fluid rounded m-2" width="507" />

After about 30 minutes of the Mac running with Macs Fan Control, the temperatures of the internal components have decreased significantly:

<img src="{{ site.site_cdn }}/assets/images/blog/2017/cool/image014.png" class="img-fluid rounded m-2" width="482" />
 
Nearly 20 degrees C cooler for the CPU and 23 degrees C on the GPU proximity.
 
Most importantly for this iMac the HDD drive is now 45 degrees C and the GPU a good 20 degrees C cooler, well within their operating temperatures and should extend it’s life considerably.
 
Recap
 
1. Take great care changing the internal fan speeds of your Mac, and this is done strictly at your own risk (if in doubt consult a professional).
2. Make a benchmark: first install the Mac Fans Control app and let it run for a while and screenshot or write down the normal temperatures (you want you Mac cooler than this always).
3. Use sensor based values! If you use a fixed fan speed you should really set it to maximum! And that is going to lower the life expectancy of the fan and make a lot of noise.
4. Monitor your changes to see if the temperatures are rising or falling if they start rising very rapidly and do not start to level out you are going the wrong way.
5. Enjoy a longer lasting Mac :-)

Take great care this cannot be emphasized enough!

[1]: https://www.crystalidea.com/macs-fan-control/download
