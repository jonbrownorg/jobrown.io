---
layout: post
date: '2021-09-02'
author: Jon Brown
permalink: /blog/frequently-asked-questions-surrounding-apples-expanded-protections-for-children/
published: true
title: "Frequently Asked Questions Surrounding Apple's Expanded Protections for Children"
description: "Frequently Asked Questions Surrounding Apple's Expanded Protections for Children"
blogimgpath: 20210901Fr
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2021/Header-ChildSafety.jpg
thumbnail: /assets/images/covers/2021/Header-ChildSafety.jpg
cta: 4
comments: true
---
Apple's recent announcement that it would soon be releasing [two new
technologies aimed at protecting
children](https://www.apple.com/child-safety/) has generated a firestorm
of media coverage and questions from customers. Unfortunately, much of
the media coverage has been based on misconceptions about how the
technology works, abetted by uncharacteristically bungled communications
from Apple. It's not inconceivable that Apple will modify or even drop
these technologies in the official release of iOS 15, iPadOS 15, and
macOS 12 Monterey, but in the meantime, we can provide answers to the
common questions we've been hearing.​

### What exactly did Apple announce?

Two unrelated technologies:

-   Messages will gain features that warn children and their parents
    when sexually explicit photos are received or sent. Such content
    will be blurred, the child will be warned and given the option to
    avoid viewing the image, and parents may be alerted (depending on
    the age of the child and settings).

-   Photos uploaded by US users to iCloud Photos will be matched---using
    a complex, privacy-protecting method that Apple has
    developed---against known illegal photos considered Child Sexual
    Abuse Material, or CSAM. If a sufficient number of images match,
    they're verified by a human reviewer at Apple to be CSAM and then
    reported to the [National Center for Missing and Exploited
    Children](https://www.missingkids.org/HOME) (NCMEC), which works
    with law enforcement in the US.​

### Does this mean Apple is scanning all my iPhone photos?

Yes and no. Messages will use machine learning to identify sexually
explicit content in received and sent images. That scanning takes place
entirely on the iPhone---Apple knows nothing about it, and no data is
ever transmitted to or from Apple as a result. It's much like the kind
of scanning that Photos does to identify images that contain cats so you
can find them with a search. So scanning is taking place with this
Messages feature, but Apple isn't doing it.

The CSAM detection feature operates only on images uploaded to iCloud
Photos. (People who don't use iCloud Photos aren't affected by the
system at all.) On the device, an algorithm called NeuralHash creates a
*hash* and matches it against an on-device database of hashes for known
illegal CSAM. (A hash is a one-way numeric representation that
identifies an image---it's much like how a person's fingerprint
identifies them but can't be used to re-create that person.) NeuralHash
knows nothing about the content of any image---it's just trying to match
one hash against another. In this case, it's matching against existing
image hashes, not scanning for a type of content, and Apple is notified
only after enough image hashes match.

It's also important to note that this is different from how companies
like Facebook, Google, and Microsoft scan your photos now. [They use
machine learning to scan all uploaded photos for
CSAM](https://prostasia.org/blog/csam-filtering-options-compared/), and
if they detect it, they're legally required to report it to the [NCMEC's
CyberTipline](https://www.missingkids.org/cybertipline), which received
21.7 million CSAM reports from tech companies in 2020, over 20 million
from Facebook alone. Because Apple does not scan iCloud Photos in the US
like other companies scan their photo services, it made only 265 reports
in 2020.​

### What happens if the CSAM detection feature makes a mistake?

This is called a false positive, and while vanishingly improbable, it's
not mathematically impossible. Apple tested 100,000,000 images against
NeuralHash and its CSAM hash database and found 3 false positives. In
another test using 500,000 adult pornography images, NeuralHash found no
false positives.

Even if NeuralHash does match an image hash with one in the known CSAM
hash database, nothing happens. And nothing continues to happen until
NeuralHash has matched 30 images. Apple says that the chances of there
being 30 false positives for the same account are 1 in 1 trillion.​

### I have terrible luck. What if that happens with my account?

Once at least 30 images have matched, the system enables Apple to
decrypt the low-resolution previews of those images so a human can
review them to see if they are CSAM. Assuming they are all false
positives---remember that possession of [CSAM is illegal in the
US](https://www.justice.gov/criminal-ceos/citizens-guide-us-federal-law-child-pornography)---the
reviewer sends them to Apple engineers to improve the NeuralHash
algorithm.​

### Could non-CSAM images end up in Apple's CSAM hash database?

It's extremely unlikely. Apple is constructing its database with NCMEC
and other child-safety organizations in other countries. Apple's
database contains image hashes (not the actual images; it's illegal for
Apple to possess them) for known illegal CSAM images that exist both in
the NCMEC database and at least one other similar database. So multiple
international organizations would have to be subverted for such image
hashes to end up in Apple's database. Each source database will have its
own hash, and Apple said it would provide ways for users and independent
auditors to verify that Apple's database wasn't tampered with after
creation.

Plus, even if a non-CSAM image hash were somehow added to Apple's
database and matched by NeuralHash, nothing would happen until there
were 30 such images from the same account. And if those images weren't
CSAM, Apple's human reviewers would do nothing other than pass the
images to engineering for evaluation, which would likely enable Apple to
determine how the database was tampered with.​

### Couldn't a government require Apple to modify the system to spy on users?

This is where much of the criticism of Apple's CSAM detection system
originates, even though Apple says the system will be active only in the
US. On the one hand, Apple has said it would resist any such requests
from governments, as it did when the FBI asked Apple to create a version
of iOS that would enable it to break into the San Bernardino shooter's
iPhone. On the other hand, Apple has to obey local laws wherever it does
business. In China, that already means that iCloud is run by a Chinese
company that presumably has the right to scan iCloud Photos uploaded by
Chinese users.

It's conceivable that some country could legally require Apple to add
non-CSAM images to a database, instruct its human reviewers to look for
images the country finds objectionable, and report them to law
enforcement in that country. But if a country could successfully require
that of Apple, it could presumably force Apple to do much more, which
hasn't happened so far. Plus, the CSAM detection system identifies only
known images---it's not useful for identifying unknown images.​

### Is Apple heading down a slippery slope?

There's no way to know. Apple believes this CSAM detection system
protects the privacy of its users more than scanning iCloud Photos in
the cloud would, as other companies do. But it's highly unusual for a
technology that runs on consumer-level devices to have the capacity to
detect criminal activity.