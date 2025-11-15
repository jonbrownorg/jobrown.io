---
layout: post
date: '2025-11-14'
author: Jon Brown
permalink: /blog/abm-api-playground/
published: true
title: "Exploring the Apple Business Manager API: A Hands-On Playground for Modern MacAdmins"
description: "A friendly, upbeat walkthrough of my Apple Business Manager API Test repo, showing how to generate client assertions, exchange them for tokens, and call Apple’s Device Management API."
blogimgpath: 202408034Up
tags:
categories:
  - macadmins
  - articles
  - scripts
image: /assets/images/covers/2025/ABM_API.png
thumbnail: /assets/images/covers/2025/ABM_API.png
cta: 2
comments: true
---
If you’ve ever tried to talk directly to the **Apple Business Manager (ABM) API**, you already know the journey can feel a *little* like deciphering a secret Apple handshake. Between private keys, encrypted certificates, ES256 signatures, and OAuth2 flows… there’s a lot going on under the hood.

But good news — I built a repo to make this whole process clearer, friendlier, and way more fun.

Say hello to:  
**[Apple Business Manager API Test](https://github.com/jonbrown21/Apple-Business-Manager-API-Test)**

This repo is a fully documented, beginner-friendly **playground** designed to teach you exactly how ABM authentication works — step-by-step — so you can build your own automations, CLI tools, or macOS apps that communicate directly with the ABM Device Management API.

Let’s break down what the repo teaches, how the scripts work, and what you need to get started.

---

## 🚀 Why This Repo Exists

Apple’s Business Manager API is powerful—yet the process of actually talking to it is surprisingly under-explained. To make a single API call, you’re expected to download a key bundle from Apple, decrypt and convert the private key, construct a JSON Web Token by hand, understand the OAuth2 `client_credentials` grant type, sign everything correctly using ES256, exchange the signed assertion for an access token, and only then are you allowed to access the ABM Device Management API. It’s a lot of moving parts for something as straightforward as “give me my device list.”

This repo demystifies that entire chain of events. The goal is simple: **teach MacAdmins how to authenticate with ABM the right way using real, runnable scripts.** Everything inside is built to be readable, approachable, and genuinely educational so you can learn the workflow—not just copy and paste it.

---

# 🧩 Repo Overview

Inside the repo you’ll find two main scripts:

### **1. `make_assertion.py`**  
Builds and prints the ES256-signed JWT (client assertion) you need to authenticate with Apple.

### **2. `abm_verify.py`**  
Takes that assertion, exchanges it for an OAuth token, and calls the `/v1/orgDevices` endpoint — a full round-trip test.

Both scripts lean on environment variables to keep your credentials safe and your workspace clean.

You can explore it all here:  
👉 **[github.com/jonbrown21/Apple-Business-Manager-API-Test](https://github.com/jonbrown21/Apple-Business-Manager-API-Test)**

---

## 🔐 Understanding Apple’s Key & Certificate Workflow

One of the first hurdles you run into when working with the Apple Business Manager API is the private key itself. When you download your API key from ABM, Apple doesn’t hand you a ready-to-use PEM file. Instead, you typically receive a `.p12` bundle or some other wrapped, encrypted key material. At first glance it looks fine—after all, it’s still a real private key—but it turns out that the way Apple ships it simply *cannot* be used directly with Python’s `cryptography` library or PyJWT.

We learned this the hard way.

When we initially attempted to load Apple’s encrypted key as-is, Python threw repeated errors like “Could not deserialize key data” or “Unsupported key format,” even when the file looked correct. The problem is that these libraries expect a very specific format: an **unencrypted PKCS#8 EC P-256 private key**. Anything else—PKCS#12, password-protected PEMs, wrapped keys, or even a `.p8` that still contains encrypted payload—causes the load operation to fail before the script can even build the JWT assertion.

This is why decrypting and converting the key is absolutely required. Until the private key is exported into an unencrypted PKCS#8 PEM file, Python simply cannot read it, cannot sign the ES256 JWT, and therefore cannot authenticate with Apple’s OAuth endpoint. Once we decrypted the file and converted it properly using OpenSSL, everything immediately fell into place: the key loaded, the JWT signed, and the ABM token exchange worked exactly as expected.

So while the conversion step might feel like an extra chore, it’s actually one of the most important parts of the entire process. Without it, nothing downstream—token requests, API calls, device inventory lookups—can function. The good news is that once the key is in the correct format, the workflow becomes smooth, predictable, and remarkably reliable.

Here’s one of the conversion flows featured in the blog and README:

### Extract a private key from a `.p12` and convert it:

~~~~~
openssl pkcs12 -in abm_client.p12 -nocerts -nodes -out abm_key.pem
openssl pkcs8 -topk8 -inform PEM -outform PEM \
  -in abm_key.pem \
  -out abm_key_unencrypted.pem \
  -nocrypt
~~~~~

Once you have that final `abm_key_unencrypted.pem`, you’re ready.

---

# ⚙️ Setting Up Your Environment

You’ll need a few Python packages:

~~~~~
pip install PyJWT cryptography requests
~~~~~

Then export the environment variables the scripts rely on:

~~~~~
export ABM_CLIENT_ID="BUSINESSAPI.…"
export ABM_KEY_ID="your-key-id"
export ABM_KEY_PATH="/path/to/abm_key_unencrypted.pem"
~~~~~

This keeps your workspace clean and avoids the classic “hard-coding keys” mistake that we’ve all made at least once.

---

# 🛠 Running the Scripts

## 🔸 Generate a JWT Assertion  
This step confirms your key loads correctly and your variables are wired properly.

~~~~~
python make_assertion.py
~~~~~

You’ll get a long `eyJhbGci…` string — that’s your signed ES256 token.

Paste it into jwt.io if you want to inspect the contents!

---

## 🔸 Perform a Full ABM API Authentication Round-Trip

~~~~~
python abm_verify.py
~~~~~

This script:

1. Builds your assertion  
2. Requests your OAuth token  
3. Calls `/v1/orgDevices`  
4. Prints out the response bodies along the way  

On success, you'll see a valid JSON payload with device information.

---

# 🧯 Troubleshooting Tips (From Real-World Experience)

### **❗ Key can’t be deserialized**
Your key is:

- still encrypted,  
- not PKCS#8, or  
- not an EC P-256 key.

Re-run the OpenSSL conversion with `-nocrypt`.

---

### **❗ 400 or 401 during token exchange**
Common issues:

- Wrong `aud` claim  
- Wrong `client_id` or `key_id`  
- System clock skew  
- Expired or malformed JWT  

Double-check your variables and ensure your machine clock is synced.

---

### **❗ 403 on `/v1/orgDevices`**
Your ABM account may not have the necessary permissions, or the API client wasn’t granted "business.api" scope.

Easy fix: regenerate the API key, making sure all permissions are checked.

---

## 🌟 Why This Matters for MacAdmins

As MacAdmins, we’re constantly juggling tools, APIs, dashboards, and scripts just to keep our fleets running smoothly. Apple Business Manager sits at the center of a lot of that work, yet actually interacting with its API has always felt like stepping behind a curtain you’re not supposed to touch. That’s why this project matters: once you understand how ABM authentication works—how the keys are structured, how assertions are built, how tokens flow—you suddenly unlock an entirely new level of automation. Whether you're building a warranty checker, an inventory aggregator, or a custom integration for your MDM, having reliable access to ABM means you can replace guesswork with real data, streamline your workflows, and create tools that genuinely make your day-to-day easier. This repo isn’t just about showing you the mechanics; it’s about empowering you to build smarter, faster, and with confidence, knowing exactly what’s happening under the hood.

This repo gives you the foundation.

And it’s free, open, and ready to experiment with.

👉 **Try the repo today:**  
**[Apple Business Manager API Test](https://github.com/jonbrown21/Apple-Business-Manager-API-Test)**

---

# 📚 Resources

### **Official Documentation**
- [Apple Business Manager User Guide](https://support.apple.com/guide/apple-business-manager/welcome/web)  
- [Apple Platform Deployment](https://support.apple.com/guide/deployment/welcome/web)  

### **Helpful Tools**
- [jwt.io](https://jwt.io) — Decode & inspect your JWTs  
- [OpenSSL](https://www.openssl.org/) — Required for key conversion  

### **Related GitHub Repo**
- [Apple Business Manager API Test](https://github.com/jonbrown21/Apple-Business-Manager-API-Test)


## Ready to take your Apple IT skills and consulting career to the next level?
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**
