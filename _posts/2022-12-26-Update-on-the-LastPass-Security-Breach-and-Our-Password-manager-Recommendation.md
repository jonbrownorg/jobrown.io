---
layout: post
date: '2022-12-25'
author: Jon Brown
permalink: /blog/update-on-the-lastpass-security-breach-and-our-password-manager-recommendation/
published: true
title: "Update on the LastPass Security Breach and Our Password manager Recommendation"
description: "Update on the LastPass Security Breach and Our Password manager Recommendation"
blogimgpath: 20221203Me
tags:
  - MacOS
  - iOS
categories:
  - tips
image: /assets/images/covers/2022/Header-LastPass.jpg
thumbnail: /assets/images/covers/2022/Header-LastPass.jpg
cta: 1
comments: true
---

<style>
.blog-post ol {
    list-style: block !important;
    margin-left: 25px !important;
    margin-bottom: 10px !important;
    padding: 5 !important;
}
.blog-post ul {
  list-style: block !important;
  list-style-type: square !important;
  list-style-position: outside !important;
  list-style-image: none !important;
  margin-left: 25px !important;
  margin-bottom: 10px !important;
}
.blog-post h3 {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>




We are writing this blog to educate you around the latest LastPass security breach event that we feel is important enough to share with all our clients not only clients specifically using LastPass. LastPass is a trusted password manager but as we are learning no technology is immune from security issues. The latest security issues are outlined by LastPass [here](https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/).

LastPass disclosed that "some source code and technical information were stolen from our development environment and used to target another employee, obtaining credentials and keys which were used to access and decrypt some storage volumes within the cloud-based storage service." The reason why this is so critical and important to understand here is that using this technique the following information was accessed by the threat actor

### Data Breach:

* The threat actor copied information from backup that contained basic customer account information and related metadata including company names, end-user names, billing addresses, email addresses, telephone numbers, and the IP addresses from which customers were accessing the LastPass service.
* The threat actor was also able to copy a backup of customer vault data from the encrypted storage container which is stored in a proprietary binary format that contains both unencrypted data, such as website URLs, as well as fully-encrypted sensitive fields such as website usernames and passwords, secure notes, and form-filled data.
<br><br>

Key things to remember:

<ul>
<li> Secure Notes, are encrypted fields which remain secure with 256-bit AES encryption and can only be decrypted with a unique encryption key derived from each user’s master password using our Zero Knowledge architecture.</li>
<li> Your master password is never known to LastPass and is not stored or maintained by LastPass.</li>
<li> There is no evidence that any unencrypted credit card data was accessed. LastPass does not store complete credit card numbers and credit card information is not archived in this cloud storage environment.</li>
</ul>


### Our Concerns:

<ol>
<li> Sensitive info in the Notes field of password entries (this is different from a Secure Note entry, which is a different type of entry in LastPass). This field is not encrypted.</li>
<li> Accounts set up before 2018 (defaults were not as strong as now).</li>
<li> Instances where your Master Password was a reused password or followed a previously used password pattern -- for example, if you used “Rivers123” as a password somewhere else, and then you made your LastPass Master Password the same or something similar, like “Rivers1234” or “Rivers123!”</li>
</ol>



For #1 above, the corresponding sensitive data should be changed as soon as possible. For example, if you had a personal questions and answers in the Notes field of a password entry, you should change the personal questions and answers for that site (or just use MFA instead).

For #’s 2 and 3 above (but especially for #3), all password entries in your LastPass Vault should be changed as soon as possible.

### What Should LastPass Customers Do?

As a reminder, LastPass’ default master password settings and best practices include the following:

<ul>
<li> Since 2018, we have required a twelve-character minimum for master passwords. This greatly minimizes the ability for successful brute force password guessing.</li>
<li> To further increase the security of your master password, LastPass utilizes a stronger-than-typical implementation of 100,100 iterations of the Password-Based Key Derivation Function (PBKDF2), a password-strengthening algorithm that makes it difficult to guess your master password. You can check the current number of PBKDF2 iterations for your LastPass account here.</li>
<li> We also recommend that you never reuse your master password on other websites. If you reuse your master password and that password was ever compromised, a threat actor may use dumps of compromised credentials that are already available on the Internet to attempt to access your account (this is referred to as a “credential stuffing” attack).</li>
</ul>

### Is 1Password A Safe Alternative to LastPass?

Yes, 1Password is safe. It uses high-level AES 256-bit encryption to keep your data secure. Plus, each 1Password account is protected with a Secret Key – a 38-digit security code stored on your device and your device only, that's used as an additional layer of security for all of your operations. By keeping it written down in a physical location, or stored separately on external storage, you can make sure that no one gets unauthorized access to your data. This is going above and beyond – it's not a common feature on most password managers.

1Password's zero-knowledge policy leaves this and other sensitive information unknown even to the company itself, and Secure Remote Password (SRP) protocol prevents hackers from intercepting Master Password, Secret Key, and other transmitted data.

1Password is SOC 2 Type 2-certified by AICPA, indicating secure data management. The most current SOC 2 report is available on request. The company also maintains a private bug bounty program from Bugcrowd, with 387 unique researchers looking for bugs.

1Password password manager maintains recent penetration tests by ISE and security audits by Onica, with past pentests and security assessments completed by AppSec Consulting, nVisium, and CloudNative.

Overall, 1Password designed every feature to make sure only you have access to the passwords, financial, and other personal information kept in your account. You get full control of your security and multiple security levels protect it from hacker’s attacks – chances of stealing the data at rest and in transit are next to zero. To conclude, 1Password is a really safe and good password manager, especially for advanced users.

### What do we recommend?

1Password is not immune to Password Breaches and has had its fair share of breaches but nothing compared to what we have seen with LastPass. Read more [here](https://password-managers.bestreviews.net/faq/which-password-managers-have-been-hacked/), where you can see that LastPass has had a security event almost every year since 2014. Wheras 1Password has only had vulnerabilities that have been fixed not actual security breaches. 

1Password is what we recommend to our clients because of the seriousness and lack of security events that come with the platform. 

### Why do we recommend 1Password? It has never been hacked!

It bears repeating: 1Password has never been hacked. But even if its infrastructure were to be breached in the future, you can rest assured your data wouldn’t be at risk.

Every decision we make at 1Password begins and ends with the safety and privacy of your information. We know how important your data is, and it’s on us to make sure it stays completely safe from prying eyes. [https://blog.1password.com/what-if-1password-gets-hacked/](https://blog.1password.com/what-if-1password-gets-hacked/)