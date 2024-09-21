---
layout: post
date: '2024-08-03'
author: Jon Brown
permalink: /blog/xcodes-walkthrough-and-review/
published: true
title: "XCodes Walkthrough and Review"
description: "XCodes Walkthrough and Review: Xcodes is an amazing native application that you can use to switch back and forth between different versions of XCode on your Mac."
blogimgpath: 20240803yT
tags:
  - MacOS
  - iOS
categories:
  - reviews
  - video
image: /assets/images/covers/2024/Header-Xcodes.jpg
thumbnail: /assets/images/covers/2024/Header-Xcodes.jpg
cta: 2
comments: true
---
### Xcodes Walkthrough and Review

Xcodes is an amazing native application that you can use to switch back and forth between different versions of XCode on your Mac. Why would you need this? Some developers need to test beta versions of XCode and manually switching back and forth is a huge pain. You can only have one active version of XCode if your using the CLI and its hard to remember which one you left activated and which versions are actually installed. 

Thats where XCodes comes into play. 

#### Installation
v1.X - requires macOS 11 or newer v2.X - requires macOS 13

#### Install with Homebrew
Developer ID-signed and notarized release builds are available on Homebrew. These don't require Xcode to already be installed in order to use.

{% highlight bash %}
brew install --cask xcodes
{% endhighlight %}

#### Manually install
Download the latest version [here](https://github.com/XcodesOrg/XcodesApp/releases/latest) using the Xcodes.zip asset. These are Developer ID-signed and notarized release builds and don't require Xcode to already be installed in order to use.
Move the unzipped Xcodes.app to your /Applications directory

Once you have XCodes installed you'll notice that it will immediately tell you which version you have installed and offer the ability to open it and give you moer information about it. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803yT/1.png" class="img-fluid rounded m-2" width="800" />

Not only that but you can click on the Installed Platforms button to see all the installed simulators that you have installed with the ability to easily remove them to free up space. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803yT/2.png" class="img-fluid rounded m-2" width="800" />

Selecting a version of XCode will give you all the information about it and offer the ability to install other capabilities. Here you can see I do not yet have tvOS, watchOS or visionOS support installed. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803yT/3.png" class="img-fluid rounded m-2" width="800" />

Its important to sign in with your Apple ID as you still need to have an active Apple Developer Membership to download the versions of XCode that you interact with via the XCodes interface. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803yT/4.png" class="img-fluid rounded m-2" width="800" />

You can filter by releases or beta versions of XCode in the filters tab. 

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2024/20240803yT/5.png" class="img-fluid rounded m-2" width="800" />

Xcodes is a great app that allows you to manage how you install and manage Xcode on your Mac! [https://github.com/XcodesOrg/XcodesApp](https://github.com/XcodesOrg/XcodesApp) check it out here. Its been an invaluable tool in my macOS toolset and I hope it helps you out as well. 

### Support XCodes
Xcodes.app and CLI is updated, maintained with contributors like you and Matt. Even open source libraries and tools come with expenses. If you would like to support Xcodes or donate to the development and maintenance of the tool, it would be greatly appreciated. There is absolutely no obligation!

[https://opencollective.com/xcodesapp](https://opencollective.com/xcodesapp)

{% include videos/video.html id="bjDupFeq9ho" header="/images/covers/2024/Header-Xcodes.jpg" %}