---
layout: post
date: '2018-03-09 13:42 -0500'
author: Jon Brown
permalink: /blog/repairing-keychain-in-high-sierra/
published: true
type: BlogPosting
title: Repairing the keychain in High Sierra
image: /assets/images/covers/2018/createnewkeychain.jpg
thumbnail: /assets/images/covers/2018/createnewkeychain.jpg
link: /assets/app-images/2018/createnewkeychain.jpg
tagline: Repairing the keychain in High Sierra
tags:
  - tutorials
  - mac
categories:
  - news
  - tips
cta: 4
custom_js:
- js/validate
- js/contactform
- js/alertify
- js/custom
comments: true
---
Since macOS 10.11.2 (macOS Sierra) the keychain app has been updated for better security and the keychain repair utility has been removed to stop malware hijacking the repair utility and accessing your passwords.

So, what can you do if for example you have a constant nag from macOS to enter your keychain password after logging in.

The answer is you have to repair it yourself, it’s not as difficult as you might first imagine although more time consuming than pressing a button to repair the keychain.

If your only problem is a slow keychain it’s easy enough to delete the items you no longer need, however first make a backup. This can be done in the usual way using Time Machine, however it is wise to also copy your existing keychain to another location and use this as a backup.
You can find the keychain in ~/Library/Keychains/login.keychain-db

Where (~) is your home directory.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image4.png" class="img-fluid rounded m-2" width="700" />

After you have your backup of login.keychain-db stored on your desktop (don’t leave it in ~/Library/Keychains/)  open the Keychain Access App from > Applications/Utilities.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image6.png" class="img-fluid rounded m-2" width="700" />

Just as a cautionary note it is a bad idea to change the “System” or “System Roots” Keychains.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image5.png" class="img-fluid rounded m-2" width="700" />

Moving on if you have a large Keychain, this one is only 1,500 items you can remove older items that you no longer use, however make sure you have made the backup first.

Carefully check that you are not going to need the item first before deleting and then either highlight the item and press delete (backspace) or right click on the item and choose delete, Keychain Access will ask you to confirm deletion of the item.

Keychain on your Mac can handle 1,000’s of items so even on this Mac with over 1,500 it is not particularly necessary just good housekeeping.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image8.png" class="img-fluid rounded m-2" width="700" />

If you delete an item by mistake and can’t retrieve the information make a copy of the backup keychain you created earlier and change the file name, then copy this file to ~/Library/Keychains.
Double clicking the backup keychain in the finder will open it in the Keychain Access app and you can then copy the item back into your login keychain.

In my case I renamed the backup keychain file “bckupLOGINkeychain”.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image7.png" class="img-fluid rounded m-2" width="700" />

In the keychain list on the left hand side of the Keychain Access app you will see your backup list with the same name you have given to the file, don’t remove the .keychain-db extension!

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image2.png" class="img-fluid rounded m-2" width="700" />

So that should be a slow Keychain fixed and you now have the basics for using the Keychain Access app.

Occasionally you can have a problem with your keychain that after logging into your Mac you are constantly asked to enter your Keychain password and this Keychain password is different from your login password, this usually occurs after changing your login password and the keychain doesn’t get updated.

It’s very easy to fix, open > Applications/Utilities/Keychain Access, from the list on the left open the default keychain which is usually called login.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image1.png" class="img-fluid rounded m-2" width="700" />

Now in Keychain Access choose the edit menu and then “Change password for keychain “login””.

It is also possible to have 2 user keychains, simply merge both keychains into the “login” keychain.

Select the additional keychain from the list on the left hand side, then either Edit > Select All or Press <kbd>⌘</kbd> <kbd>a</kbd>.

Now drag those items from the additional keychain into the “login” keychain.

<img src="{{ site.site_cdn }}/assets/images/blog/2018/keychain/image3.png" class="img-fluid rounded m-2" width="700" />

As noted at the beginning you always need to make a backup before carrying out any of these steps.