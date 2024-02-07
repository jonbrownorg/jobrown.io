---
title: 'Cocoa Control: Print View'
author: Jon
excerpt: 'Apple has changed decades ago by introducing to the world single window applications. Ever since we have seen tremendous applications all taking advantage of this form. Functionality that compliments that form are things like window sheets, those cool pop-under windows that slide up and down from the top of the application top bar. Sheets magically show us controls when we need them and then whoosh them away when we don’t. '
layout: post
permalink: /blog/print-view/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
categories:
  - cocoa-code
tags:
  - cocoa
  - code
  - nstableview
  - tutorials
---
Apple has changed decades ago by introducing to the world single window applications. Ever since we have seen tremendous applications all taking advantage of this form. Functionality that compliments that form are things like window sheets, those cool pop-under windows that slide up and down from the top of the application top bar. Sheets magically show us controls when we need them and then whoosh them away when we don’t. 

Not surprisingly Apple has built in controls for system level windows to use this wonderful technology. However its not very commonly known how to do so with common system windows like Print Dialogue boxes and page layout windows. I recently started working on a Cocoa project where the goal was to keep everything contained in the single window concept.

It took me a while to figure out how to use the delegates that Apple built into these two windows in order to have them display by default as a sheet. I hope that this article helps others struggling with the same problem.

<img src="{{ site.site_cdn }}/assets/images/blog/2013/12/printview.png" alt="printview" width="716" height="616" class="aligncenter size-full wp-image-1038" />

First create a custom class in my case I created a subclass of NSObject called Print_View.m/h.

Print_View.h : Subclass of NSObject

{% highlight bash %}
#import <Foundation/Foundation.h>

@interface Print_View : NSObject
{
    IBOutlet id PrintView;
    IBOutlet id window;
    IBOutlet id MainWindow;
}

- (IBAction)pagesetup:(id)sender;
- (IBAction)print:(id)sender;

@end
{% endhighlight %}

  
Notice here that I created 3 outlets and 2 senders. The PrintView outlet should be connected to the view, or text element in the NSWindow that you want to print. This is important, the delegate will not work until you declare the thing that the application will be printing.

the window and MainWindow outlets need to be connected to the main window in your XIB file. Finally the senders need to be connected to the File > Print, and File > Page Setup menu items respectively.

<img src="{{ site.site_cdn }}/assets/images/blog/2013/12/Screen-Shot-2013-11-09-at-10.31.25-PM.png" alt="Screen Shot 2013-11-09 at 10.31.25 PM" width="1514" height="934" class="aligncenter size-full wp-image-1039" />

<img src="{{ site.site_cdn }}/assets/images/blog/2013/12/Screen-Shot-2013-11-09-at-10.32.36-PM.png" alt="Screen Shot 2013-11-09 at 10.32.36 PM" width="1514" height="934" class="aligncenter size-full wp-image-1040" />

Print_View.m : Subclass of NSObject

{% highlight bash %}
#import "Print_View.h"
@implementation Print_View
- (IBAction)print:(id)sender {
    NSPrintOperation* printOperation = [NSPrintOperation printOperationWithView:PrintView];
    [printOperation setCanSpawnSeparateThread:YES];
    [printOperation runOperationModalForWindow:window delegate:window didRunSelector:nil contextInfo:nil];
}

- (IBAction)pagesetup:(id)sender {
    NSPrintInfo *printInfo = [NSPrintInfo sharedPrintInfo];
    NSPageLayout *pageLayout = [NSPageLayout pageLayout];
    [pageLayout beginSheetWithPrintInfo:printInfo modalForWindow:window delegate:MainWindow didEndSelector:@selector(pageLayoutDidEnd:returnCode:contextInfo:) contextInfo:nil];
}

- (void)pageLayoutDidEnd:(NSPageLayout *)pageLayout returnCode:(int)returnCode contextInfo:(void *)contextInfo
{
    if (returnCode == NSOKButton)
    {
    }
}
@end
{% endhighlight %}

As you can see the above code triggers the system dialogue boxes and treats them as sheets to the window with a delegate of MainWindow. You will also notice that the page setup has a function called pageLayoutDidEnd this is a place where you can enable custom functionality after the OK button is pressed, if you do not wish any other functionality then the window exits and the page prints.