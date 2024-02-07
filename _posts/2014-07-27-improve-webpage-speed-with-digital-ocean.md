---
title: Improve webpage speed with Digital Ocean
author: Jon
layout: post
permalink: /blog/improve-webpage-speed-with-digital-ocean/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: Improve webpage speed with Digital Ocean
categories:
  - product-reviews
  - Web-Server
tags:
  - Apache
  - digital-ocean
  - hosting
  - http
  - ngix
  - varnish
  - popular
comments: true
---
We don&#8217;t often talk much about web development or web optimization but recently we started investigating alternative methods / means to our web hosting environment. Currently we are using JustHost&#8217;s shared web hosting for jonbrown.org/blog. We are using their lowest shared hosting tier at which costs us $6 per month. We recently did quite a bit to optimize our site and I figured I would share our secret recipe for success that helped us improve our overall web speed rank by almost 90%. Having a website that is faster obviously is better.

While investigating methods to improve our web hosting I stumbled upon Digital Ocean, these guys are awesome! Digital Ocean boasts a virtual private server environment running various flavors of Linux with amazing CPU and Memory options. Ironically the third tier server with Digital Ocean costing $20 per month together with our website code optimizations put us over the top.

I started my career in the web development field and moved into IT specializing in the Mac environment. Becoming an overall expert and feeling more at home in the Unix core gave me the confidence that I think most people lack. This lack of familiarity in this environment can be a huge hurdle when moving to a VPS server. Digital Ocean with its amazing array of tutorials and amazing customer service makes it easy for the entry level user to feel comfortable spinning up and configuring a very powerful web server.

# Website Optimization

The first thing that we did to help improve our website speed was to remove un-needed CSS code from our website. We removed all drop shadow CSS3 effects, just by doing this we improved the overall speed of our site by 4% this was huge. The result was a more modern flat UI design that loaded faster and looked better. We then removed all references to the Google Font library which we were using throughout the site for a standard thin web font. This removed those lengthy calls to Google and improved our speed by an additional 8%. Once done we minified all CSS and Javascript code. Here are some of the tools we used.

**CSS Minification**

[ ProCSSor. Beautiful CSS for beautiful websites. ][1] 

**JS Minification**

[ Smaller Batch minify HTML, PHP, CSS and JavaScript on the Mac. ][2] 

# Image Optimization

Image optimization was the second step. We had many images that we had already uploaded into our WordPress instance and many in our theme images folder that were much larger than they needed to be. We used a great compressor app to compress the images, by doing so we made our website much smaller. A smaller site, loads faster, makes sense right? Well I had no idea just how much it would improve things. We reduced the overall size of the site by 70% just by compressing our images. Here are some of the tools we used to compress the images on our site. This improved site load time by 10%

**PNG Crusher**

[ WP Smush.it &#8211; WordPress Plugin ][3] 

**Image Optimizer**

[ ImageOptim optimizes images ][4] 

# Cloudflare & MaxCDN

Now that the code, fonts and images are all in place, time to setup a solid plan for proper website caching and image serving. A CDN is a great method that I have employed at many places that I have worked, I have to admit I have seen how a CDN can improve website speed but I had never configured one for my own website. I decided to go with MaxCDN for the ease of configuration with WordPress and the low point of entry as far as cost, I believe I am currently only paying $10 a month. I also recently started taking advantage of Cloudflare a free service if you host with JustHost. Cloudflare will improve the traffic (DNS) requests going to your site and filter out any malicious attacks it also caches the site and helps provide an overall better / faster website loading experience. 

I use both of these services in tandem with each other and the only thing you need to know if your going to do so is that you will need to know that Cloudflare adds a cookie to all domain calls, including CDN domain calls. This can cause the site to appear slower due to the lack of a cookie less domain. You can&#8217;t turn off cookies for any domain that goes through Cloudflare, period. To use MaxCDN and Cloudflare you need to enable the setting to strip all cookies. The two without this setting can cause a conflict.

> [Source][5] &#8212; When these cookies and headers are sent to our CDN Network, it causes a conflict that prevents us from properly caching your static assets. That results in a very low cache hit percentage, along with an increased number of requests being sent to CloudFlare, which will negatively affect the load speed of your website. 

Here are the resources that I used to setup Max CDN and Cloudflare. 

[ WordPress CDN Implementation ][6] [ Using CloudFlare and WordPress ][7] 

Dong this improved the site speed by another 15%. So with all of the above we have improved the site load time by 37%. Not bad, to many this will be a huge improvement. For others like myself I was seeing a huge bounce rate still and an overall page load time of 3 seconds. My goal is to try to get the site to load under 1 second.

# Speed Tests

I used four website tests to benchmark my overall website speed. The 4 sites that I used were.

  1. Google Page Analyzer &#8211; <https://developers.google.com/speed/pagespeed/insights/> 
  2. GTMetrix &#8211; <https://gtmetrix.com/reports/jonbrown.org/blog/Q1SeDaVe> 
  3. Webpagetest &#8211; <https://www.webpagetest.org> 
  4. Pingdom &#8211; <https://tools.pingdom.com/fpt/> 


These sites are not only the standard for webpage speed benchmarking but they also all have different tools that will tell you what you should be focusing on. Things like GZIP&#8217;ing all items, Putting all JS calls in the footer, CSS calls in the header. Reducing inline CSS, and combining JS files and CSS files into single call resources and using image sprites rather than using separate images for small icons. Still I was seeing a huge initial page hit rate that was not optimal. At this point I started looking at VPS offerings.

# VPS, Digital Ocean Wins!

I looked into JustHosts VPS offering and I found that it was overpriced and overcomplicated. I knew that having a server that was running something like CPANEL would be convenient but would peg my servers CPU and reduce my overall website load speed. The cheapest VPS that they had was $75 a months. 

Then I heard about Linode and Digital Ocean. I tried both and they were both very comparable. I found that sites on Digital Ocean loaded just a tad faster and with their SSD based VPS and easy to use web interface it was a clear winner in my book. The thing that really tipped the scales for me was the fact that there was so many amazing tutorials that easily showed how to setup and migrate a website to their service. Here are the ones that I used. 

[ Build Faster WordPress Sites with Nginx – In 3 Lines! ][8] 

[ How To Install WordPress, Nginx, PHP, and Varnish on Ubuntu 12.04 ][9] 

[ How To Set Up nginx Virtual Hosts ][10] 

I setup Varnish, Memcached, and NGIX. Between these three amazing technologies this boosted my page speed rank by another 40%, this is HUGE. I never knew how much faster NGIX on Ubuntu could be. Im paying only $20 per month for this server and the reality is that I can run any number of sites that I need which is a huge value that I did not have with JustHost. 

# WordPress Plugin Combos

So now heres the secret sauce, its well known that having too many plugins on a WordPress site can severely impact the overall page load speed of the website. Here are the plugins that I am using. 

**[Head JS Loader][11]**  
It strips out all your old javascript declarations and puts them into head.js calls so that they are loaded in parallel (see the Head JS website for more details).


**[Speed Booster Pack][12]**  
Speed Booster Pack allows you to improve your page loading speed and get a higher score on the major speed testing services such as GTmetrix, Google PageSpeed, YSlow, Pingdom, Webpagetest or other speed testing tools.


**[W3 Total Cache][13]**  
The only WordPress Performance Optimization (WPO) framework; designed to improve user experience and page speed.

1. Page Cache &#8211; Disk Enhanced  
2. Database Cache &#8211; Memcache  
3. Object Cache &#8211; Memcache  
4. Browser Cache &#8211; Disabled  
5. CDN &#8211; Max CDN

# Results

Finally here are the results that you just can&#8217;t deny. Impressively awesome page load speeds. I have applied these principles to all of my hosted sites and here are the results of just a few. For much less than hosting with a WordPress hosting service like WPEngine and cheap shared hosting services like JustHost. 

Webpagetest &#8211; <https://www.webpagetest.org>

Google Page Analyzer &#8211; <https://developers.google.com/speed/pagespeed/insights/>

Pingdom &#8211; <https://tools.pingdom.com/fpt/>

GTMetrix &#8211; <https://gtmetrix.com/reports/jonbrown.org/blog/Q1SeDaVe>

These are a few of the scores that I was able to achieve for a new site of mine hosted on Digital Ocean&#8217;s platform. I hope that this article helps someone who is obsessed with getting high page load scores on a budget. Obviously as well all the technologies at work here will help any website scale as well. Memcached allows the scaling to a network of memcached servers. Varnish can do this as well and with the CDN and Cloudflare you will have multiple levels of cache redundancy that will ensure that your site never appears offline. 

Overall load on my server is less than 10% CPU, less than 1GB memory usage and very low bandwidth throughout due to the overwhelming level of caching implemented here.



 [1]: https://procssorapp.com
 [2]: https://smallerapp.com
 [3]: https://wordpress.org/plugins/wp-smushit/
 [4]: https://imageoptim.com/
 [5]: https://support.maxcdn.com/howto/use-cdn-with-cloudflare/
 [6]: https://www.maxcdn.com/solutions/cms/wordpress-cdn/
 [7]: https://support.cloudflare.com/hc/en-us/articles/201717894-Using-CloudFlare-and-WordPress-Five-Easy-First-Steps
 [8]: https://gplclub.org/build-faster-wordpress-sites-nginx-3-lines/
 [9]: https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-nginx-php-and-varnish-on-ubuntu-12-04
 [10]: https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-virtual-hosts-server-blocks-on-ubuntu-12-04-lts--3
 [11]: https://wordpress.org/plugins/headjs-loader/
 [12]: https://wordpress.org/plugins/speed-booster-pack/
 [13]: https://wordpress.org/plugins/w3-total-cache/
