---
title: 'Cocoa Control: iTunes Style Application'
author: Jon
excerpt: Recently I have become more and more interested with the wonderful world of Objective-C and C. For the last couple years I have been a hobbyist developer and still am today. I never really felt that my development skills had reached any level of real skill and so I have been an active member on websites like Stack overflow, Apple Developer Forums and more asking over and over the answers to what were probably very simple issues and questions that I hurdled over while learning.
layout: post
permalink: /blog/cocoa-control-itunes-style-application/
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
Recently I have become more and more interested with the wonderful world of Objective-C and C. For the last couple years I have been a hobbyist developer and still am today. I never really felt that my development skills had reached any level of real skill and so I have been an active member on websites like Stack overflow, Apple Developer Forums and more asking over and over the answers to what were probably very simple issues and questions that I hurdled over while learning.

I still do not feel that I am a very good developer but I figured that now was my chance to at least take some of the knowledge that I worked hard to learn and pass that on to help other people make great looking OSX Applications. I have created a [Cocoa Control][1] called [iTunes-Table-Header][1]. This control is a collection of three classes 2 of which are subclasses of NSTableView and NSArrayController.

The goal of this website is to help beginner to novice developers style their applications to the level of an advanced developer while teaching the fundamentals of how to automatically sort a column on wake. How to change the row selection color, and how to load sample data into an NSTableView, all things that took me years to learn. So lets begin! 

The final outcome of the project will look like the following.

**The Boring stuff? **  
The first step in the process is to subclass NSTableView to do so I am using the following code. 

iTableStyle : Subclass of NSTableView

{% highlight bash %}
#import "iTableStyle.h"

@implementation iTableStyle

- (void)highlightSelectionInClipRect:(NSRect)theClipRect
{
    // this method is asking us to draw the hightlights for
    // all of the selected rows that are visible inside theClipRect
    // 1. get the range of row indexes that are currently visible
    // 2. get a list of selected rows
    // 3. iterate over the visible rows and if their index is selected
    // 4. draw our custom highlight in the rect of that row.

    NSRange aVisibleRowIndexes = [self rowsInRect:theClipRect];
    NSIndexSet* aSelectedRowIndexes = [self selectedRowIndexes];
    long aRow = aVisibleRowIndexes.location;
    long anEndRow = aRow + aVisibleRowIndexes.length;
    NSGradient* gradient;
    NSColor* pathColor;
    
    // if the view is focused, use highlight color, otherwise use the out-of-focus highlight color
    if (self == [self window] firstResponder] &#038;&#038; [self window] isMainWindow] &#038;&#038; [self window] isKeyWindow])
    {
        gradient = [NSGradient alloc] initWithColorsAndLocations:
                     [NSColor colorWithDeviceRed:(float)128/255 green:(float)157/255 blue:(float)194/255 alpha:1.0], 0.0,
                     [NSColor colorWithDeviceRed:(float)128/255 green:(float)157/255 blue:(float)194/255 alpha:1.0], 1.0, nil] retain];

        pathColor = [NSColor colorWithDeviceRed:(float)128/255 green:(float)157/255 blue:(float)194/255 alpha:1.0] retain];
    }
    else
    {
        gradient = [NSGradient alloc] initWithColorsAndLocations:
                     [NSColor colorWithDeviceRed:(float)186/255 green:(float)192/255 blue:(float)203/255 alpha:1.0], 0.0,
                     [NSColor colorWithDeviceRed:(float)186/255 green:(float)192/255 blue:(float)203/255 alpha:1.0], 1.0, nil] retain]; //160 80
        pathColor = [NSColor colorWithDeviceRed:(float)186/255 green:(float)192/255 blue:(float)203/255 alpha:1.0] retain];
    }
    // draw highlight for the visible, selected rows
    
    for (aRow; aRow < anEndRow; aRow++) {

        if([aSelectedRowIndexes containsIndex:aRow])
        {
            NSRect aRowRect = NSInsetRect([self rectOfRow:aRow], 0, 0); //first is horizontal, second is vertical
            NSBezierPath * path = [NSBezierPath bezierPathWithRect:aRowRect]; //6.0
            [gradient drawInBezierPath:path angle:90];
        }
    }
}

- (id)_highlightColorForCell:(NSCell *)cell
{
    // we need to override this to return nil
    // or we'll see the default selection rectangle when the app is running
    // in any OS before leopard
    // you can also return a color if you simply want to change the table's default selection color
    return nil;
}

@end
{% endhighlight %}

The above code does the following. It allows us to override the color of the selected cell and it draws the select color of the row. This tutorial and this control mimics the same color selection found in iTunes 11.1.2 for OSX Mavericks. The below row select color is the final result here.

<img src="{{ site.site_cdn }}/assets/images/blog/2013/11/Screen-Shot-2013-11-03-at-12.37.35-AM.png" alt="Screen Shot 2013-11-03 at 12.37.35 AM" width="452" height="135" class="aligncenter size-full wp-image-910" />

The next step in the process is to create the subclass of NSTableHeaderCell. Below are the class files but you can not directly link these files in the XIB to this class as an object because we do not have any outlets but rather just an array. This is intentional below we will talk about the appropriate way to link these together for now here is the code.

iHeaderStyle.h : Subclass of NSTableHeaderCell

{% highlight bash %}
#import <Cocoa/Cocoa.h>

@interface iHeaderStyle : NSTableHeaderCell {
    NSMutableDictionary *attrs;
}
@end
{% endhighlight %}

and  
iHeaderStyle.m : Subclass of NSTableHeaderCell

{% highlight bash %}
#import "iHeaderStyle.h"

@implementation iHeaderStyle

- (id)initTextCell:(NSString *)text
{
    if (self = [super initTextCell:text]) {
        if (text == nil || [text isEqualToString:@""]) {
            [self setTitle:@"Title"];
        }

        attrs = [NSMutableDictionary dictionaryWithDictionary:
                  [self attributedStringValue]
                   attributesAtIndex:0
                   effectiveRange:NULL]]
                 mutableCopy];
        return self;
    }
    return nil;
}

- (void)drawWithFrame:(CGRect)cellFrame
          highlighted:(BOOL)isHighlighted
               inView:(NSView *)view
{

    CGRect fillRect, borderRect;
    CGRectDivide(cellFrame, &#038;borderRect, &#038;fillRect, 1.0, CGRectMaxYEdge);

    NSGradient *gradient = [NSGradient alloc]
                            initWithStartingColor:[NSColor whiteColor]
                            endingColor:[NSColor colorWithDeviceWhite:0.9 alpha:1.0]];
    [gradient drawInRect:fillRect angle:90.0];
    [gradient release];

    if (isHighlighted) {
        [NSColor colorWithDeviceWhite:0.0 alpha:0.1] set];
        NSRectFillUsingOperation(fillRect, NSCompositeSourceOver);
    }

    [NSColor colorWithDeviceWhite:0.8 alpha:1.0] set];
    NSRectFill(borderRect);

    [self drawInteriorWithFrame:CGRectInset(fillRect, 0.0, 1.0) inView:view];

    // Draw the column divider.
    [NSColor lightGrayColor] set];
    NSRect	_dividerRect = NSMakeRect(cellFrame.origin.x + cellFrame.size.width - -1, 0, 1,cellFrame.size.height);
    NSRectFill(_dividerRect);
}

- (void)drawWithFrame:(CGRect)cellFrame inView:(NSView *)view
{
    [self drawWithFrame:cellFrame highlighted:NO inView:view];
}

- (void)highlight:(BOOL)isHighlighted
        withFrame:(NSRect)cellFrame
           inView:(NSView *)view
{
    [self drawWithFrame:cellFrame highlighted:isHighlighted inView:view];
}

@end
{% endhighlight %}

So what do the above classes do? They are responsible for changing the look and feel of the NSTableHeader row, making sure the toggle disclosure triangle image is still drawn and adds column separators in the header. 

We now have to link it all up this is where it gets a little tricky. You can not directly subclass this object in Xcode using the interface builder tool. You must link all the components with your controlling class object or what I did was to use my AppDelegate class object to reference all the parts of the interface properly.

AppDelegate.h

{% highlight bash %}
@interface AppDelegate : NSObject <NSApplicationDelegate>
{
    IBOutlet NSTableView *tableView;
}

@property (assign) IBOutlet NSWindow *window;
@end
{% endhighlight %}

as you can see in the screenshot below I have linked the Window and the Table View to the appropriate items in the XIB file.

[<img src="{{ site.site_cdn }}/assets/images/blog/2013/11/Screen-Shot-2013-11-03-at-12.46.28-AM.png" alt="Screen Shot 2013-11-03 at 12.46.28 AM" width="1514" height="1043" class="aligncenter size-full wp-image-912" />][2]

Now that those connections are made look at the AppDelegate.m file and see how the above subclass script that we used above is now referenced in the AppDelegate or other object class that your using.

AppDelegate.m

{% highlight bash %}
#import "AppDelegate.h"
#import "iHeaderStyle.h"

@implementation AppDelegate

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
    // Insert code here to initialize your application
}

-(void)awakeFromNib
{
    /* set preference defaults */
    [NSUserDefaults standardUserDefaults] registerDefaults:
     [NSDictionary dictionaryWithObject: [NSNumber numberWithBool: YES]
                                 forKey: @"NSDisabledCharacterPaletteMenuItem"]];

    NSArray *columns = [tableView tableColumns];
    NSEnumerator *cols = [columns objectEnumerator];
    NSTableColumn *col = nil;
    iHeaderStyle *iHeaderCell;
    while (col = [cols nextObject]) {
        iHeaderCell = [iHeaderStyle alloc]
                       initTextCell:[col headerCell] stringValue]];
        [col setHeaderCell:iHeaderCell];
        [iHeaderCell release];
    }
}
@end
{% endhighlight %}

You see how we are calling iHeaderStyle.h in the AppDelegate.m file, this means that we can reference the outlets that are linked to that object inside of this class. So what does this all do. Well simply put it is what is responsible for telling the program that when it loads how to draw the NSTableView.

**Colors?**  
So thats it! Now your tableview looks like the iTunes one right? Nope! There are a few other things you must do. You must set the row alternating color you do that in Xcode like so.

Look carefully at the background color and the alternating row color. These colors match the colors in iTunes for Mavericks. Background Color: RGB Values are 255, 255, 255. Grid color RGB values are 215, 220, 228.

Now we are beginning to visually look more iTunes like. But wait we can't actually test the toggle functionality until we get some data into our tables. For that we need to take our nice little set of code and turn it into a functional program. Hold onto your hats!!

**Create a simple data application.**

I am going to show you- how to perform bindings between NSTableColumn, NSArrayController and NSUserDefaultsController, so that tabular data can be stored and retrieved from NSUserDefaults without writing a single line of code 

Select MainMenu.xib, arrange buttons and table view on window as shown in below screen shot. Also add array controller to the xib. In my case I have renamed array controller as Artist Array Controller, which will be visible in next few screen shots.

Perform Content Array binding for Array Controller, as shown:

Tip : Don't forget to mark - 'Handles Content As Compound Value' as checked!

Perform Value binding for Artist - Table Column, as shown:

Bind '+' button to add action of Array Controller.

Bind '-' button to remove action of Array Controller like you just did above. Finally bind 'Save' button to save: action of Shared User Default Controller.

Run the project

Now try selecting '+' / '-' button, editing added rows, click 'Save' button then quit and re-launch the application to see the saved values.

You can check out my first contribution to the Cocoa Community here on [Cocoa Controls][3] and you can check out all my [Sample Code here][4] where you can check out the GitHub project that is dedicated to this control. I hope you all enjoyed!! This is MIT Licensed 



 [1]: https://www.cocoacontrols.com/controls/itunes-table-header
 [2]: {{ site.site_cdn }}/assets/images/blog/2013/11/Screen-Shot-2013-11-03-at-12.46.28-AM.png
 [3]: https://www.cocoacontrols.com/controls/itunes-table-header
 [4]: /sample-code/