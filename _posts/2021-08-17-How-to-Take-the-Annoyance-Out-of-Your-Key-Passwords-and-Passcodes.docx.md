---
layout: post
date: '2021-08-17'
author: Jon Brown
permalink: /blog/how-to-take-the-annoyance-out-of-your-key-passwords-and-passcodes/
published: true
title: "How to Take the Annoyance Out of Your Key Passwords and Passcodes"
description: "How to Take the Annoyance Out of Your Key Passwords and Passcodes"
blogimgpath: 20210802Ho
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2021/Header-Passwords.jpg
thumbnail: /assets/images/covers/2021/Header-Passwords.jpg
cta: 3
comments: true
---
We constantly say, "Use a password manager!" for good reason. Password
managers make it easy to generate, store, and enter strong passwords.
You don't have to decide whether or not your password is strong or weak,
remember it, and type it accurately every time you log in to a website.
Seriously, just get [1Password](https://1password.com/) or
[LastPass](https://www.lastpass.com/), or you could use Apple's [iCloud
Keychain](https://support.apple.com/en-us/HT204085).

But what about those passwords you have to enter regularly, like your
Mac's login password, your Apple ID password, and the master password
for your password manager? And the passcodes for your iPhone, iPad, and
Apple Watch? Plus, it may also be helpful to be able to remember and
type passwords for a few services that require you to enter the password
into an app instead of a Web browser. (Of course, you can copy and paste
the password from your password manager, but that's fussy if you have to
do it frequently.)

For such passcodes and passwords, you'll want to come up with options
that are strong, memorable, and easily entered. Here's what we recommend
for most people. (If you're a target of a nation-state or regularly deal
in highly confidential government or corporate information, you'll need
an even higher level of security.)​

### Passcodes

It's essential that your iPhone, iPad, and Apple Watch have a passcode
that can't easily be guessed. Once someone can get into an iPhone or
iPad, they could read all your email, look at all your photos, make
purchases via Apple Pay, and impersonate you in conversations with
others. And yet, many people use worthless passcodes like 111111 or
123456. Don't do that! Also, don't worry about making a passcode that's
easy to type---with Touch ID, Face ID, and Apple Watch unlocking, you
don't have to type your passcode all that frequently.

Since we're talking about physical objects that can't be accessed
remotely and are most likely to be compromised by someone who knows you
personally, the key is to think about what six digits you can remember
but that even people who know you well couldn't guess.

For instance, you might think of using **081995** if you were born in
August 1995, but your birthdate is both widely known and easily
discovered. A better pattern would be the dates of the month associated
with the birthdays of your best friend from high school, your favorite
cousin, and your late grandmother---**132408** if they were born on May
13th, July 24th, and November 8th. No one will ever guess that.

You get the idea. Think of dates associated with people or events
important to you but that even close friends or family members wouldn't
necessarily know. Then combine those days, months, or years in a way
that makes sense to you. You'll end up with a strong passcode that
you'll never forget.

One last point. Given the level to which data syncs between your iPhone,
iPad, and Apple Watch, we don't see any significant benefit in creating
different passcodes for each. Come up with a secure passcode and use it
on all three.​

### Mac Login Passwords

Much like an iPhone's passcode, the primary vulnerability for your Mac's
login password is someone who has physical access. You don't have to
worry about remote brute force attacks (as long as you don't have remote
access enabled in System Preferences > Sharing) or password files being
stolen, suggesting that the password doesn't need to be insanely strong
and equivalently hard to type.

That's especially true for an M1-based Mac or [Intel-based Mac with a T2
security chip](https://support.apple.com/en-us/HT208862), and even more
so if you have [enabled
FileVault](https://support.apple.com/en-ca/guide/mac-help/mh11785/mac)
(which we recommend). But if it's an older Intel-based Mac without a T2
chip, it's conceivable that a thief could image the drive and use brute
force attacks to find the password. A stronger password might make sense
for such an older Mac.

Considering all this, we recommend coming up with a password that's easy
to type, memorable, and difficult to guess for even those who know you
well. It doesn't have to be strong enough to protect against serious
cracking software unless you live in a Spy-vs.-Spy world. Consider
taking a few words from a song lyric or movie quote you'll never forget
and jamming them together, such as "ettubrute" or "goestoeleven."

If you unlock your Mac and apps using an Apple Watch or Touch ID most of
the time, you can make the login password a bit stronger without the
annoyance of having to type it so frequently.​

### Apple ID and Password Manager Passwords

When it comes to your Apple ID password, the master password for your
password manager, and other passwords to online services you need to
type, attacks will take place either remotely or be directed against a
stolen password file. Plus, your Apple ID password and master password
to your password manager literally hold the keys to your kingdom, so
they must be extremely strong and resistant to automated cracking. It's
also essential that you won't forget them and that you be able to enter
them---on both a Mac keyboard and an iPhone keyboard---reasonably
easily. What to do?

One possible solution is to create a long passphrase of random but
easily remembered words, as suggested in the [classic xkcd
cartoon](https://xkcd.com/936/). Current advice suggests that a
passphrase of five words---with at least 32 characters---is now
necessary to resist modern cracking methods.

Passphrases are highly secure, but they can be tedious to type and may
not work well for an Apple ID password. [Apple requires that Apple ID
passwords](https://support.apple.com/en-us/HT201303) have upper and
lowercase letters and include at least one number. But don't make it
longer than 32 characters; some have reported problems with longer
passwords.

For a compromise approach, consider a password built using the following
rules:

-   It starts with an uppercase letter. That satisfies Apple's
    requirement and means you don't have to switch between upper and
    lowercase keyboards on an iPhone more than once.

-   That letter and subsequent lowercase letters come from the initials
    of unrelated people, movie titles, the first few letters of a saying
    or product name, or something similar that you'll have no trouble
    remembering.

-   It includes several punctuation characters accessible from the
    iPhone's numeric keyboard that don't require the use of the Shift
    key on the Mac keyboard.

-   It ends with digits developed along the lines of the passcode
    above---this keeps you on the iPhone's numeric keyboard. (You could
    also swap the order of the punctuation and digits.)

-   Overall, it has at least 13 characters, preferably more.

(As an aside, does having two-factor authentication (2FA) turned on for
any account where you're creating a memorable password let you make a
weaker password? Yes, in the sense that your overall security is much
higher with 2FA because someone would have to hack your password *and*
compromise the 2FA system in some way. But no, if your password is so
weak that it's trivially crackable, such that 2FA becomes the only
protection. Don't overthink it---stick with strong passwords.)

As an example, consider this possibility for a LastPass master password:
**Tpmbialas/.19851955**. It's not entirely random, but it's close and
doesn't use obvious patterns that cracking software could exploit. Let's
break it down:

-   **Tpmbialas** comes from the first letter of the words in the movie
    *The Phantom Menace* and the Dire Straits album *Brothers in Arms,*
    plus the first three letters of LastPass

-   **.** plays on the name of the tech news site Slashdot to be
    memorable, and the characters are easily typed on both the iPhone
    and Mac keyboards.

-   **19851955** will be easily remembered by fans of the movie *Back to
    the Future,* whose characters travel in time from 1985 back to 1955.

It's highly secure---the [How Secure Is My
Password?](https://www.security.org/how-secure-is-my-password/) site
says it would take 1 quintillion years to crack, and there's no way that
even someone who knew your taste in movies and music could guess it (as
long as you don't tell them about your pattern).

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2021/20210802Ho/image2.png" class="img-fluid rounded m-2" width="700" />

One last thing to consider: is your password fun to type? Some key
combinations probably roll off your fingers, whereas others will be
prone to typos. Test your proposed password on both a Mac keyboard and
your iPhone. If you hate typing it, tweak the characters until it's
better.

When you're developing your own unique passwords that you must be able
to remember and type, a strategy along these lines should serve you
well. Just make sure to avoid dictionary words, repeated characters, and
any password under 13 characters in length, all of which make passwords
easier for cracking software to guess.