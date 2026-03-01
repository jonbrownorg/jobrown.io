---
layout: post
date: '2026-03-06'
author: Jon Brown
permalink: /blog/abm-warranty-0-4-1-walkthrough-managed-preferences/
published: false
title: "ABM Warranty 0.4.1 Walkthrough: Managed Preferences"
description: "A walkthrough of managed preferences in ABM Warranty 0.4.1 covering how I package managed credentials, deploy them through MDM, import them into the app, and keep the credential workflow secure."
blogimgpath: 202408034Up
tags:
categories:
  - macadmins
  - apps
  - video
  - abm-warranty
image: /assets/images/covers/2026/ABM_prefs.png
thumbnail: /assets/images/covers/2026/ABM_prefs.png
cta: 2
comments: true
series: abmwarranty041walkthrough
---

{% include series.html id="abmwarranty041walkthrough" %}

In this part of the ABM Warranty 0.4.1 walkthrough series, I’m focusing on managed preferences and the credential packaging workflow. In the last video, I covered multiple credentials inside the app itself. In this one, I’m showing how to package those credentials so they can be deployed securely through MDM.

The goal here is not just to show that managed preferences exist. I want to show how the full workflow works: how I format the credential data, how the packaging script outputs the deployment files, how the credentials are encrypted, what the user sees when the app detects them, and how ABM Warranty behaves once those managed credentials are imported.

## What Managed Preferences Are Doing Here

Managed preferences are the way I can push ABM Warranty configuration down to a Mac through MDM instead of configuring everything manually on the endpoint. In this case, that means pushing managed credential data in a format the app can detect and import.

There are two practical output paths in this workflow:

- a mobileconfig file, which works with MDM platforms that can deploy configuration profiles
- a plist, which works where raw plist preference deployment is supported

That is what makes this feature flexible. I am not tied to only one management tool. If the MDM can push a mobileconfig, this workflow can fit. If the tool can deploy raw plist data, that works too.

## Why I Start With Security

Whenever I am building a deployment workflow that involves credentials, I want to be explicit about how the credential data is handled. In this model, I am not pushing raw credential values around casually and I am not treating the managed-preferences payload like a plain-text dump of sensitive information.

The starting point is the CSV file. That file contains the structured credential data the packager needs: the friendly name, the scope, the client ID, the key ID, and the path to the certificate or PEM file tied to that credential set. If I am packaging more than one credential, each one gets its own row.

When I run the packager, it does not just reformat that CSV into a deployment file. It prompts me for a passphrase, then uses that passphrase as part of the protection model for the output. The resulting payload is salted and encrypted before it is written out as a plist or mobileconfig.

That means the receiving Mac is not just handed a readable set of ABM or ASM credentials in plain text. The managed-preferences payload contains protected data, and ABM Warranty has to decrypt that data during the import process using the same passphrase that was used when the payload was created.

That is the actual point of the packager from a security perspective. It gives me a way to prepare deployable managed credentials without reducing the workflow to copying plain-text credential data into an MDM payload and hoping for the best.

## The Tools Behind the Workflow

This managed-preferences flow depends on the ABM Warranty managed credential packager and the supporting documentation that explains how to use it.

### Resources and sources

- [ABM Warranty Utilities](https://github.com/breelabs/ABM-Warranty-Utilities)
- [How to Use the ABM Credential Packager](https://github.com/breelabs/ABM-Warranty-Utilities/wiki/How-to-Use-the-ABM-Credential-Packager)

If you are the person building these managed credentials, that is where you should start. The workflow depends on that packager and the documented CSV format.

## The CSV Format I Use

The script expects the CSV data in a specific format. Each row represents one credential set. If I only have one credential, the file contains one row. If I have multiple credentials, the file contains multiple rows.

The important thing is that the columns stay in the expected order:

- a row identifier
- a friendly name
- a scope (`business` or `school`)
- the client ID
- the key ID
- the path to the certificate or PEM file

That structure is what lets the script package the data correctly. If the CSV is malformed, the managed-preferences output is not going to be right either.

## What I Need Before I Run the Script

Before I run the packager, I need a working Python 3 environment and the required cryptography package installed. That is part of the packaging side of the workflow, not the endpoint side.

The setup looks like this:

```bash
pip install cryptography
```

Once that is in place, I can run the script with a CSV input and choose whether I want plist output or mobileconfig output.

## Running the Packager

The script takes the CSV as input and then writes the managed-preferences output in the format I choose. If I am exporting a plist, I point the script to the CSV, define the output type, and provide a name for the output file.

A typical example looks like this:

```bash
python3 ABMManagedCredentialPackager.py --csv single.csv --out plist --name singleplist.plist
```

When I run that, the script prompts me for a passphrase. That passphrase is part of the encryption process. The script uses it to protect the credential data in the generated output.

That means the administrator packaging the credentials is not just generating a file. They are also defining the passphrase that the receiving user will need later when ABM Warranty imports and decrypts the managed credentials.

## What the Packager Gives Me

Once the script runs, I get the encrypted output file along with a test command I can use locally. That is useful because I do not have to push the preferences through MDM immediately just to see whether they work.

I can test the managed preference on my own Mac first, apply the generated plist locally, quit the app, relaunch it, and verify the exact user experience before I ever deploy the payload more broadly.

That makes the workflow much easier to validate. I can confirm the packager output is correct before I roll it into an MDM deployment.

<div class="my-12 flex justify-center">
  <a
    href="https://jonbrown.org/apps/#warranty"
    class="inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white no-underline hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
  >
   Download ABM Warranty 0.4.1
  </a>
</div>

{% include videos/video.html id="hFrprkWHg58" header="/assets/images/covers/2026/ABM_prefs.png" %}

## What the User Sees After App Relaunch

After the managed preference is applied, I need to quit and relaunch the app so ABM Warranty can detect the new managed credentials. Once the app restarts, it shows a banner telling me that managed ABM credentials were detected and are ready to import.

That is the handoff point between the admin who packaged the credentials and the person receiving them on the Mac. The receiver still needs the passphrase that was used during packaging, because the app needs that passphrase to decrypt and import the managed credentials locally.

If the passphrase is wrong, the import fails. If it is correct, the app imports the credentials and the managed credential appears in the ABM Warranty settings.

## What Makes a Credential “Managed”

Once the import completes, the credential shows up in the app as managed. That is an important distinction.

A managed credential is not the same as a manually added credential. If the credential came from managed preferences, the person using the Mac should not be able to delete it the same way they could delete a credential they created manually.

That is intentional. It preserves the management boundary. The administrator controls the deployed managed credential, while the local user can still add their own separate manual credentials if they need to.

## How Multiple Managed Credentials Work

The workflow also supports more than one managed credential in the same deployment. If I build a CSV file with multiple rows, the output can contain multiple credential sets, and the app will detect and import them together.

The important part is that each credential gets its own row in the CSV. A simple multi-credential CSV can look like this:

```csv
id,name,scope,client_id,key_id,pem_path
1,Corp ABM,business,CLIENT_ID_1,KEY_ID_1,/Users/admin/certs/corp_abm.pem
2,School ASM,school,CLIENT_ID_2,KEY_ID_2,/Users/admin/certs/school_asm.pem
```

That lets me define separate friendly names and separate scopes while still packaging them in one deployable output.

If I want to export that CSV as a plist for a platform like Jamf that can handle raw plist deployment, I run:

```bash
python3 ABMManagedCredentialPackager.py --csv combo.csv --out plist --name combo.plist
```

That is where this feature becomes especially useful. I can push more than one managed context, and ABM Warranty will present those credentials as separate managed entries once the user imports them successfully.

At the same time, the app still keeps the distinction between managed credentials and manually added credentials. I can still add a separate unmanaged credential locally, and that one behaves differently because it was not delivered through managed preferences.

## Exporting as a Mobileconfig

Not every admin can deploy a raw plist. That is why the mobileconfig output matters.

If the MDM can deploy a configuration profile, I can export the managed credentials as a mobileconfig instead of a plist and upload that profile into the MDM.

The command looks like this:

```bash
python3 ABMManagedCredentialPackager.py --csv single.csv --out mobileconfig --name single.mobileconfig
```

If I am packaging multiple credentials into one mobileconfig, I use the same idea with the multi-row CSV:

```bash
python3 ABMManagedCredentialPackager.py --csv combo.csv --out mobileconfig --name combo.mobileconfig
```

That gives me two clear deployment paths:

- plist output for tools like Jamf that can handle raw plist deployment
- mobileconfig output for MDMs that prefer configuration profile deployment

## Why This Deployment Model Matters

This managed-preferences workflow solves a very specific operational problem: I can prepare ABM Warranty credentials centrally, deploy them through MDM, protect them with an encrypted packaging flow, and still let the receiving Mac import them in a controlled way.

That is a much better workflow than walking people through manual credential entry one machine at a time, especially when I need a more repeatable deployment path.

For me, this is one of the most useful parts of 0.4.1 because it turns credential setup into something I can standardize and deploy cleanly instead of treating every endpoint like a one-off manual setup.

{% include app_support_cta.html %}
