---
title: 'Cocoa Control: Horizontal Graph View'
author: Jon
excerpt: 'Apple has changed decades ago by introducing to the world single window applications. Ever since we have seen tremendous applications all taking advantage of this form. Functionality that compliments that form are things like window sheets, those cool pop-under windows that slide up and down from the top of the application top bar. Sheets magically show us controls when we need them and then whoosh them away when we don’t. '
layout: post
permalink: /blog/cocoa-horizontal-graph-view/
image: /assets/img/covers/cover-16.jpg
thumbnail: /assets/img/covers/cover-16.jpg
tagline: 'Cocoa Control: Horizontal Graph View'
categories:
  - cocoa-code
tags:
  - cocoa
  - code
  - nstableview
  - tutorials
---
I have been struggling for years trying to get NSRect to play nicely and draw a cool looking responsive graph in a Cocoa application. I was trying to create a controller that could be used with iOS and Mac OSX and I found that the two had too many internal differences for one controller class to make sense. 

As a novice Cocoa Programmer I turned to HTML & CSS. I created the Animal Age program as a test, and included some static data and it worked. The premise is simple. Create a responsive CSS3 graph. Pass its width variable via Cocoa to a Javascript Function. Then display the graph.

After months of perfecting I finally had something that worked, that was cross platform compatible and was easy to style. Below are the steps that you need to take my GitHub project and up and running in your app quickly and easily.

First import all the HTML files into your project, these are located in the /GraphFiles directory. The index.html file is the file that is used to generate the graph. The file has inline CSS that you can alter to change the style of the graph. The CSS3 transform components make the graph animate as its called into view.

The next step is to get the Sum of each column of data, I created an Array Controller that does just that. If you look at the array controller it controls the data going into each column that is bound to the Shared User Defaults Controller and each sum field is also connected to the Graph Controller.

ArrayController.m : Subclass of NSArrayController

{% highlight bash %}

#import "iArrayController.h"
@implementation iArrayController
-(void)awakeFromNib
{
	//Sorting at startup
	NSSortDescriptor* SortDescriptor = [NSSortDescriptor alloc] initWithKey:@"artist" ascending:YES selector:@selector(compare:)] autorelease];
	[self setSortDescriptors:[NSArray arrayWithObject:SortDescriptor]];
	//need to initialize the array
	[super awakeFromNib];  
    //bind text colums to tex fields.
    [textField bind: @"value" toObject: self withKeyPath:@"arrangedObjects.@sum.rating" options:nil];
    [textField2 bind: @"value" toObject: self withKeyPath:@"arrangedObjects.@sum.time" options:nil];
    [textField3 bind: @"value" toObject: self withKeyPath:@"arrangedObjects.@sum.track" options:nil];
}
@end
{% endhighlight %}



As you can see this controller handles the sum values of the different columns in the project. These are outputted to the connected text fields in the info panel. The values are being fed into these fields and summed by their programatic binding to the arrangedObjects keyPath which is where the data is stored.


Now that we have the sum values of each column we can pass that data into our WebView or GraphController. The graph controller is a subclass of WebView so you need to change the class in the Xcode Info Panel. This is not an object the outputs for this will live right on the web view itself. We need to connect the ArrayController to the Web View. Lastly the WebView must be setup as a delegate of App Delegate.


GraphController : Subclass of WebView

{% highlight bash %}
#import "GraphController.h"

@implementation GraphController
-(void)drawGraphFromSelectedList
{
    //Convert the item1 into an Integer
    NSString *item1 = [textField stringValue];
    //Convert the item2 into an Integer
    NSString *item2 = [textField2 stringValue];
    //Convert the item3 into an Integer
    NSString *item3 = [textField3 stringValue];
    //pass that to webview with javascript
    NSString *javascriptString = [NSString stringWithFormat:@"myFunction('%@','%@','%@')", item1, item2, item3];
    [self stringByEvaluatingJavaScriptFromString:javascriptString];
}

- (void) drawRect: (NSRect) rect
{
    [ self drawGraphFromSelectedList ];
}

- (void)awakeFromNib
{
[iArrayController addObserver:self forKeyPath:@"arrangedObjects"
                        options: NSKeyValueObservingOptionNew  context:NULL];

}

- (IBAction)refreshData:(id)sender {
    [tableView reloadData];
    [ self drawGraphFromSelectedList ];
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object
                     change:(NSDictionary *)change context:(void *)context
{
    if ([keyPath isEqual:@"arrangedObjects"])

    {
        [ self setNeedsDisplay: YES ];
    }
}
@end
{% endhighlight %}

Now that you have everything hooked up when you change the data in the NSTableView and then refresh the data it will re-draw the graph. The data is sent from the GraphController through a Javascript call, this sends the sum value to the web view and to the specific javascript function that takes that value and then passes it on to set the width of the DIV item. 

Because of the CSS3 transform on the DIV the bar animates into view!
