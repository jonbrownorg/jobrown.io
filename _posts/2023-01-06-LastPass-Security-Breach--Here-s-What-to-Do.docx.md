---
layout: post
date: '2023-01-06'
author: Jon Brown
permalink: /blog/lastpass-security-breach--here-s-what-to-do/
published: true
title: "LastPass Security Breach. Here's What to Do"
description: "LastPass Security Breach. Here's What to Do"
blogimgpath: 20230102La
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2023/Header-LastPassArt.jpg
thumbnail: /assets/images/covers/2023/Header-LastPassArt.jpg
cta: 4
comments: true
---
Password management company LastPass has announced that [it suffered a
security
breach](https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/)
in which attackers stole both encrypted customer account data (which is
bad) and customer vaults containing encrypted usernames and passwords
(which is much, much worse). On the positive side, the data of users who
abided by LastPass's defaults and created master passwords of at least
12 characters in length will likely resist cracking attempts.

Although 1Password is the most popular password manager for Apple users,
we've mentioned LastPass as an alternative in previous articles, so
here's what happened and how LastPass users should react. For those who
don't use LastPass, we also discuss ways your organization can improve
its online security by learning from LastPass's mistakes and
misfortunes

### The Breach

According to LastPass, the breach started in August 2022 when an
attacker compromised a developer's account. The attacker then leveraged
information and credentials from that initial breach to target another
LastPass employee's account, where they were able to steal data from
cloud-based storage that LastPass used for backup.

The main lesson here is that a dedicated attacker will probe all points
of access into a company's digital infrastructure---*everyone* must be
mindful of security at all times. It also seems that LastPass may have
been paying more attention to its on-premises production systems than
its cloud-based backup storage. Any organization can learn from that
error---if backups contain sensitive data, they should be equally
protected

### What Was Stolen

LastPass says that the stolen data included unencrypted customer account
information such as names, addresses, and phone numbers, but not credit
card details. In the customer vaults, LastPass did secure usernames,
passwords, secure notes, and form-filled data using 256-bit AES
encryption, so they can be decrypted only with a unique encryption key
derived from each user's master password. However, for inexplicable
reasons, LastPass failed to encrypt website URLs associated with
password entries.

Because LastPass left this information unencrypted, it's now available
for the attacker to use (or sell for others to use) in targeted phishing
attacks. A forged password reset request from an unusual website you
regularly use has a better chance of fooling you than a generic one for
a big site that millions of people use. It's even possible that the
unencrypted website URLs could lead to extortion attempts, as in the
infamous [Ashley Madison data
breach](https://en.wikipedia.org/wiki/Ashley_Madison_data_breach).

The larger lesson is that a high-value attack target like LastPass
should never have stored customer data in unencrypted form. If your
company handles customer data along these lines, ensure that it's always
stored in encrypted form. You may not be able to prevent attackers from
accessing your network, but if all the data they can steal is encrypted,
that limits the overall damage that can ensue.​

### Potential Problems

By default, LastPass requires master passwords to be at least 12
characters in length. Plus, LastPass applies 100,100 iterations of the
PBKDF2 password-strengthening algorithm to make it harder for
brute-force attacks to crack passwords. The company says:

> If you use the default settings above, it would take millions of years
> to guess your master password using generally-available
> password-cracking technology. Your sensitive vault data, such as
> usernames and passwords, secure notes, attachments, and form-fill
> fields, remain safely encrypted based on LastPass' Zero Knowledge
> architecture. There are no recommended actions that you need to take
> at this time.

Unfortunately, LastPass increased the master password minimum length
only in 2018 and did not require users with shorter master passwords to
reset them at that time. Similarly, the [PBKDF2
setting](https://support.lastpass.com/help/how-do-i-change-my-password-iterations-for-lastpass)
now uses 100,100 iterations, but it previously used 5000, and some
long-time users report it being set to 500.

LastPass was correct to increase the default level of security for new
accounts as hardware cracking capabilities became faster. However,
allowing users to continue using insecure master passwords that were too
short and not forcing higher PBKDF2 iteration counts was a major
mistake. If your organization steps up its security policies, bite the
bullet and ensure that no accounts or users are grandfathered in with
old, insecure options.

By not recommending any actions, LastPass missed an opportunity to
encourage users to increase their security through multifactor
authentication. LastPass also downplayed the concern over phishing
attacks. That was likely a decision made by PR (and possibly Legal), but
the company could have served users better. Should your organization
ever be involved in a breach, make sure that someone involved in the
transparency discussions represents the users' best interests alongside
those of the organization. And consider requiring multifactor
authentication!

Finally, it's worth noting that other companies significantly increase
the security of their systems by mixing passwords with additional
device-based keys. Apple does this by [entangling device passcodes and
passwords](https://support.apple.com/guide/security/passcodes-and-passwords-sec20230a10d/web)
with the device's unique ID, and 1Password strengthens your passwords
with a [secret key](https://support.1password.com/secret-key-security/).
LastPass has no such additional protection.

### What LastPass Users Should Do

There are two types of LastPass users in this situation: those who had
long, secure master passwords and 100,1000 iterations of PBKDF2 and
those who didn't:

-   **Strong master password users:** Despite LastPass's claim that you
    don't need to do anything, we recommend enabling multifactor
    authentication. (For instructions, click Features & Tools and then
    Multifactor Authentication in the [LastPass support
    portal](https://support.lastpass.com/home).) You could change your
    master password too, but that won't affect the data that was already
    stolen. That horse has already left the barn, whereas enabling
    multifactor authentication would prevent even a cracked master
    password from being used in the future.

-   **Weak master password users:** Sorry, but you have work to do.
    Immediately [change your master
    password](https://support.lastpass.com/help/change-your-master-password-lp020001)
    and [increase your PBKDF2
    iterations](https://support.lastpass.com/help/how-do-i-change-my-password-iterations-for-lastpass)
    to at least 100,100. We also recommend enabling multifactor
    authentication because LastPass is such an important account. Next,
    go through all your passwords and [change at least those for
    important
    websites](https://support.lastpass.com/help/change-site-passwords-lp020003).
    Start with the critical accounts that could be used to impersonate
    you, like email, cell phone, and social media, plus those that
    contain financial data.

<img alt="Blog Photo" src="{{ site.site_cdn }}/assets/images/blog/2023/20230102La/image2.png" class="img-fluid rounded m-2" width="700" />

Regardless of the strength of your master password, be on high alert for
phishing attacks conducted through email and text messages. Because the
stolen data included both personal information and URLs to websites
where you have accounts, phishing attacks may be personalized to you,
making them harder to detect. In short, don't follow links in email or
texts to any website where you have to log in. Instead, navigate to the
website directly in your browser and log in using links on the site.
Don't trust URL previews---it's too easy to fake domain names in ways
that are nearly impossible to identify.

Should you switch from LastPass to another service, like 1Password? It
comes down to whether you believe LastPass has both a sufficiently
secure architecture despite not entangling the master password with some
device-based key and sufficiently robust security practices despite
having been breached. It would not be irrational to switch, and we would
recommend [switching to
1Password](https://support.1password.com/import-lastpass/). Other
password managers like [Bitwarden](https://bitwarden.com/) and
[Dashlane](https://www.dashlane.com/) may be fine too. If you have to
change numerous passwords and choose to switch, it may be easier to
change the passwords after switching---see how the process of updating a
password compares between LastPass and 1Password or whatever tool you
end up using.

We realize this is an extremely worrying situation for LastPass users,
particularly those with weak master passwords or too-few PBKDF2
iterations set. Only you can reset your passwords, but if you need
assistance switching to another password manager, don't hesitate to
contact us.