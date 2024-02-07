---
title: Missing a file? Scrub that hard drive
author: Jon
layout: post
permalink: /blog/missing-a-file-scrub-that-hard-drive/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/disk.png
categories:
  - data-recovery
tags:
  - files
  - missing
  - server
---
Today one of the most dreaded things happened to me, the phrase that makes every IT professional shudder. I can not find my file. Ok, after running through all of the basic questions and making sure that they saved it and that it was not accidentally deleted I decided to search their hard drive. 

After many un-sucessfull attempts at using the search functionality (Spotlight), I decided to do some research on other methods for searching for files on the OSX platform. I came across the &#8220;locate&#8221; command for the Terminal.

I had never used this command before so I did some reading and I ran 

{% highlight bash %}
sudo /usr/libexec/locate.updatedb{% endhighlight %}

this ran the initial database rebuild which added many new entries into its database. I then ran 

{% highlight bash %}
locate 'File Name here.txt'{% endhighlight %}

and came up with a nice list of files on the users computer, however the problem was that all of the files we found were older revisions of the file that he had lost. I decided that the only way we were going to find his file was to use a much more aggressive approach. 

I decided to use the &#8220;find&#8221; command, this works similar to the &#8220;locate&#8221; command but it searches the folder, directory or 

entire volume that you want. It allows you to be as specific or as vague as you want as well. For example 

{% highlight bash %}
find / -name 'filename.txt'{% endhighlight %}

will search the entire volume for a file with the name filename.txt. You can also search for wildcards as well 

{% highlight bash %}
find . -name '*.txt'{% endhighlight %}

which will generate a list of all of the text files on the computer. Notice I used a period here instead of a slash, these are where you can customize the location of the search.

So I let this run, the &#8220;find&#8221; command is considerably slower than the &#8220;locate&#8221; command because it does not use a database rather it searches live through the hard drive on the system that you are using. After about 20 minutes letting it scan the entire hard drive, every user account and every directory we came up with a few more results but again nothing that had his new content. I was really hoping that at this point he had accidentally deleted it or something.

I decided to ask him for a phrase located in the text file that could be used as a search term. To search for a phrase in a text document in the terminal run 

{% highlight bash %}
find . -name '*.xlsx' -exec grep -li 'ethiopia' {} ;{% endhighlight %}

this will find any reference to the word ethiopia located in a Excel file. I let this run and again slow but effective it revealed more results but nothing. I explained to the gentleman that I could try looking at the tape backups but it would take me some time. He asked me if I could do that. 

It was a long walk back upstairs, I loaded the first tape into the drive and got ready. I began the search. Not 10 minutes later did I get a phone call back saying, that he had found the file on a thumb drive that he had. Go figure, turns out that no matter how many cool ways there are to search a hard drive none of them will index a thumb drive in someones pocket.

