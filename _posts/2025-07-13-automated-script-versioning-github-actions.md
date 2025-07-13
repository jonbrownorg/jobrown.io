---
layout: post
date: '2025-07-13'
author: Jon Brown
permalink: /blog/automated-script-versioning-github-actions/
published: true
title: "Automating Script Versioning, Releases, and ChatGPT Integration with GitHub Actions"
description: "Automating Script Versioning, Releases, and ChatGPT Integration with GitHub Actions"
blogimgpath: 202408034Up
tags:
categories:
  - github-actions
  - automation
  - macos
  - jamf
  - ci-cd
  - chatgpt
image: /assets/images/covers/2025/actions2025.png
thumbnail: /assets/images/covers/2025/actions2025.png
cta: 2
comments: true
---

# Automating Script Versioning, Releases, and ChatGPT Integration with GitHub Actions

Managing and maintaining a growing collection of scripts in a GitHub repository can quickly become cumbersome without automation. Whether you're writing bash scripts for JAMF deployments, maintenance tasks, or DevOps workflows, it's critical to keep things well-documented, consistently versioned, and easy to track over time.

As my collection of macOS automation and JAMF-related scripts grew, I began to encounter common pain points:

- Forgetting to update version numbers or authorship information before commits
    
- Manually creating GitHub releases for every meaningful script update
    
- Writing or updating comments to describe changes or explain logic became tedious
    

To address these challenges and streamline the development and publishing process, I built a set of **automated GitHub Actions workflows** that handle all of this for me — end-to-end.

These workflows are designed to:

- ✅ **Automatically detect changes** in script files and inject or update a standardized header that includes the author name, version number, and last modified date.
    
- 🏷️ **Create GitHub releases** whenever a new version is detected in a script, tagging it and making it available to others in a structured format.
    
- 🤖 **Use ChatGPT** to review the script content and auto-generate helpful comments and summaries directly in the code, improving documentation without requiring extra manual effort.
    

What started as a time-saver for personal use has evolved into a scalable solution that others can integrate into their own scripting workflows. This post walks through the full development process, how the automation works behind the scenes, and how you can set it up in your own repository to take advantage of these same benefits.

---

## Motivation

In any scripting-heavy environment — especially in macOS administration or JAMF-based deployments — keeping your scripts properly versioned and documented isn't just a best practice; it's essential for scale, collaboration, and maintainability.

However, **manual versioning and release management quickly become a bottleneck** as your script library grows. It’s easy to forget to update version numbers, neglect to tag a release, or skip writing meaningful inline comments — especially when you’re in the middle of solving a real technical issue.

These small omissions add up over time and create friction:

- You can’t tell which version of a script was deployed last.
    
- Colleagues or team members hesitate to use or modify your scripts because the documentation is thin.
    
- Releasing updates requires tedious GitHub steps that interrupt your focus.
    

To solve these pain points, I built an automated workflow that allows me to **focus on writing and refining my scripts**, while the surrounding infrastructure takes care of the supporting tasks.

Here’s how automation helps:

- ✅ **Always-Up-to-Date Metadata**  
    Each time a script is modified, a GitHub Action automatically updates its header to include the current author, version, and timestamp. This removes any guesswork about script provenance or when it was last changed.
    
- 🏷️ **Structured, Repeatable Releases**  
    Version bumps in scripts are detected and used to trigger GitHub Releases. This means I get clean, timestamped release tags without needing to manually create them through the GitHub UI — a huge time-saver that also improves auditability.
    
- 🤖 **AI-Powered Comments and Enhancements**  
    By integrating ChatGPT into the workflow, I can automatically generate descriptive inline comments and header summaries that explain what the script does — even if I haven’t documented it myself yet. This helps improve readability, onboard others faster, and ensure that even hastily written scripts have helpful context.
    

By offloading these repetitive but important tasks to automation, I’ve reclaimed time and mental bandwidth for what actually matters — writing clean, functional, and well-tested code.

---

### 📁 **Repository Structure: Why It Matters**

The organization of files and folders in a GitHub repository has a direct impact on how GitHub Actions functions and how easily your automation scales over time. In my `macOS-JAMF-Scripts` repo, I’ve carefully structured it to take advantage of GitHub’s built-in automation hooks while keeping scripts portable and well-documented.

📂 Folder Hierarchy Breakdown

```
macOS-JAMF-Scripts/
├── .github/
│   ├── workflows/
│   │   ├── versioning.yml
│   │   ├── release.yml
│   │   └── chatgpt-comments.yml
│   ├── scripts/
│   │   ├── update-version.sh
│   │   ├── inject-metadata.sh
│   │   └── comment-with-chatgpt.py
├── scripts/
│   ├── install-automox.sh
│   ├── vpn-reminder.sh
│   └── cleanup-trash.sh
├── _posts/
├── _layouts/
├── README.md
└── ...
```

- Scripts: [macOS-JAMF-Scripts/.github/scripts](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/.github/scripts)
- Workflows: [macOS-JAMF-Scripts/.github/workflows](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/.github/workflows)

---

### 🧠 Why It’s Structured This Way

#### ✅ .github/workflows/

This is where **GitHub Actions** looks for workflow definitions. Files in this folder must be YAML-formatted and describe what actions to run and when.

Each .yml file represents a **self-contained workflow** that GitHub automatically runs when triggered by specified repository events (like pushing to main, opening a PR, or modifying a file).

In this repo:

- versioning.yml: Monitors changes to script files and updates headers with metadata like version, author, and date.
    
- release.yml: Detects version bumps and creates GitHub Releases automatically using Git tags.
    
- chatgpt-comments.yml: Sends script content to ChatGPT and commits AI-generated comments back into the script file.
    

> 🔍 **Why here?**  
> This is the **only** place GitHub Actions looks for workflows. It must be .github/workflows/. Any other folder will be ignored.

---

#### ✅ .github/scripts/

This folder contains **helper scripts** used by the workflows — shell scripts, Python scripts, etc. These are the building blocks for the automated steps defined in the `.yml` workflows.

Examples:

- inject-metadata.sh: Adds or updates version/author headers in a given script file.
    
- comment-with-chatgpt.py: Calls the OpenAI API with the script body and returns a summary or inline comments.
    

> 🔍 **Why here?**  
> Placing them in .github/scripts/ keeps all automation-related logic scoped within the .github directory — making it easy to clone this repo or copy this automation setup into another project. It also prevents cluttering the root directory with utility files that aren’t directly run by JAMF or end-users.

---

### ✅ scripts/

This folder contains the **actual operational scripts** — the ones you run on client machines, use in JAMF policies, or package for deployment. These scripts are the “products” of your workflow: cleaned, versioned, and optionally enhanced with comments via ChatGPT.

Each script includes a standardized metadata header like:

```
############################################### 

# Author : Jon Brown 

# Date   : 2025-07-13 # Version: 0.3 

###############################################
```

This header format is important because it enables the automation to detect version changes, track authorship, and ensure consistency across all scripts. Workflows in .github/workflows/ specifically look for this pattern to determine whether to update a script or create a release.

#### 🔍 Why this isn’t inside `.github/scripts/`

The .github/scripts/ folder is reserved for **internal automation tooling** — things like shell or Python scripts that power GitHub Actions workflows. Those helper scripts aren’t meant to be deployed to end-user systems or JAMF.

By contrast, the top-level scripts/ folder contains **production-ready scripts** you intend to distribute, run in live environments, or reference in JAMF policies. Keeping these at the root level:

- Makes them easier to find and reference
    
- Keeps the repo organized and semantically clear
    
- Follows GitHub’s convention of separating project code from infrastructure logic
    

This separation makes the project more maintainable, easier to onboard others, and more scalable as your library of scripts grows.

---

### 🔁 How It All Works Together

1. You **write or update a script** in the scripts/ folder.
    
2. When you **push to GitHub**, a workflow in .github/workflows/versioning.yml is triggered.
    
3. That workflow **runs inject-metadata.sh** from .github/scripts/ to add or update metadata headers.
    
4. If the version has changed, the **release.yml workflow triggers**, creating a new GitHub release.
    
5. Simultaneously, **chatgpt-comments.yml can run**, enhancing the script with automated documentation.

---

## ⚙️ How the Automation Works

This project leverages GitHub Actions to automate three critical tasks that are typically manual, error-prone, or time-consuming: script metadata management, version-based release generation, and AI-powered documentation via ChatGPT. Together, they form a lightweight CI/CD system tailored for scripting workflows — especially in IT and macOS administration contexts.

---

### 🔧 1. Script Metadata Management

Every script in the scripts/ directory is expected to include a standardized header containing key metadata:

- **Author** — who last modified the script
    
- **Date** — when the script was updated
    
- **Version** — the current semantic version of the script 

```
###############################################
# Author : Jon Brown
# Date   : 2025-07-13
# Version: 0.3
###############################################
```

A dedicated workflow monitors changes to script files (`*.sh`, `*.zsh`, etc.). Whenever a script is **added or modified**, this workflow:

- **Parses the file**
    
- Automatically **inserts or updates** the metadata block
    
- Commits those changes back into the repository
    

This ensures **consistency across all scripts** and removes the need to manually update headers — a common oversight that leads to confusion or poor traceability over time.

---

### 🏷️ 2. Version Detection & Release Automation

Another core piece of automation handles **version control and GitHub release management**.

When the metadata header of a script contains a **new version number** (e.g., bumping from `0.2` to `0.3`), a separate workflow takes over and:

1. **Detects the version change** by comparing it to the previously committed version.
    
2. Automatically **creates a GitHub Release**, using the version number as the tag (e.g., `v0.3`).
    
3. Adds release notes (optionally generated or templated).
    
4. Attaches the script file to the release for distribution or archiving.
    

This replaces the need to manually run `git tag` commands or open the GitHub UI to create releases. It allows version history to be both **machine-readable and easily accessible** — ideal for teams, JAMF policies, or clients consuming your scripts externally.

---

### 🤖 3. ChatGPT-Powered Documentation

The final component brings in **AI-enhanced documentation** through integration with OpenAI's API (ChatGPT).

Whenever a script is modified or added, this workflow:

- Sends the script’s contents to the ChatGPT API
    
- Analyzes its logic and structure
    
- **Generates or updates inline comments**, header summaries, or descriptive block comments
    
- Commits those comments back into the file
    

This ensures that every script — even ones written quickly or during debugging — includes **helpful explanations and readable context**. It's like having an automated code reviewer or technical writer built into your CI/CD process.

Benefits of this approach include:

- Improved **onboarding for new team members**
    
- Better long-term **maintainability**
    
- Reduced cognitive load when revisiting older scripts


---

## 🚀 Setting Up the Workflows

Before you can take advantage of this automated script management system, you’ll need to prepare your environment. Below is a detailed guide to setting up the necessary credentials, secrets, and files for everything to run smoothly.

---

### ✅ Prerequisites

To get started, ensure the following are in place:

- 📁 A GitHub repository with your scripts committed (e.g., `.sh`, `.zsh`, or `.py` files inside a `scripts/` directory).
    
- ⚙️ GitHub Actions is **enabled** for your repository.
    
- 🔐 You have a valid **OpenAI API key** (for ChatGPT-powered commenting).
    
- 🔑 GitHub Action **secrets** are configured for both your OpenAI key and a personal access token (PAT) if needed for advanced actions.
    

---

## 🤖 Step 1: Get Your OpenAI API Key

1. Go to [https://platform.openai.com/signup](https://platform.openai.com/signup) and **sign in** (or create an account).
    
2. Add a **valid credit card** to your OpenAI billing settings. This is required to access the API — even for low-volume or personal use.
    
    - Navigate to: [https://platform.openai.com/account/billing](https://platform.openai.com/account/billing)
        
3. After setting up billing, go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys).
    
4. Click **“Create new secret key”**.
    
5. Copy the generated API key (you won’t be able to see it again later!).
    

---

## 🔐 Step 2: Store the OpenAI Key in GitHub Secrets

1. In your GitHub repo, go to **Settings > Secrets and variables > Actions**.
    
2. Click the **“New repository secret”** button.
    
3. Set the **Name** to: `OPENAI_API_KEY`
    
4. Paste the API key you copied from OpenAI.
    
5. Click **Add secret**.
    

This makes the key available to GitHub Actions workflows as an environment variable, while keeping it secure.

---

## 🔑 Step 3: Configure GitHub Token (If Needed)

Most GitHub Actions already have access to a built-in `GITHUB_TOKEN` secret, which can be used to authenticate GitHub API actions like committing or creating releases.

However, if you need extended permissions (e.g., cross-repo access or granular scoping), you can create your own PAT:

1. Visit [https://github.com/settings/tokens](https://github.com/settings/tokens).
    
2. Click **“Generate new token (classic)”**.
    
3. Give it a name and set an expiration date.
    
4. Under **Scopes**, check:
    
    - `repo`
        
    - `workflow`
        
5. Click **Generate token**, and copy it.
    
6. In GitHub, go to **Settings > Secrets and variables > Actions**.
    
7. Add a new secret:
    
    - Name: `PERSONAL_GITHUB_TOKEN`
        
    - Value: the token you copied.
        

> ✅ You can use either the default `GITHUB_TOKEN` or your personal token depending on what your workflow needs.

---

## 📄 Workflow Files Overview

These GitHub Actions live in your repo under `.github/workflows/`. Each YAML file automates a specific task.

### 🧩 `versioning.yml`

- **Trigger:** On push or PR affecting `scripts/`
    
- **Purpose:** Updates metadata (author, date, version) in script headers.
    
- **Helper Script:** `.github/scripts/inject-metadata.sh`
    

### 🏷️ `release.yml`

- **Trigger:** When a version change is detected.
    
- **Purpose:** Automatically creates GitHub Releases tagged with the updated script version.
    

### 🤖 `chatgpt-comments.yml`

- **Trigger:** On push or PR to `scripts/`
    
- **Purpose:** Sends the script body to OpenAI, receives AI-generated comments, and commits those back to the script.
    
- **Helper Script:** `.github/scripts/comment-with-chatgpt.py`
    

All workflows are designed to run automatically on **push or pull request events** targeting files in the `scripts/` directory, keeping everything up-to-date without manual effort.

---

## Using the Automation in Your Projects

1. **Fork or clone** my repository to start with working templates.
2. **Store your scripts** inside a designated folder (e.g., `.github/scripts/`).
3. **Configure your secrets** in GitHub for OpenAI and PAT tokens.
4. **Modify workflow YAMLs** as needed to fit your script languages or custom versioning schemes.
5. **Push your scripts** and watch GitHub Actions automatically:
   - Update version numbers.
   - Generate helpful comments.
   - Create releases.
6. **Review pull requests or commit histories** for generated metadata and comments.

---

## Benefits & Takeaways

- **Reduced manual effort:** Automate repetitive versioning and release tasks.
- **Improved script quality:** AI-assisted comments improve clarity and maintainability.
- **Consistent releases:** Systematic tagging keeps releases clean and meaningful.
- **Extensible workflows:** Easy to adapt for different script types or AI tools.

---

## Links & Resources

- GitHub repo: [https://github.com/jonbrown21/macOS-JAMF-Scripts](https://github.com/jonbrown21/macOS-JAMF-Scripts)
- Scripts folder: [.github/scripts](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/.github/scripts)
- Workflows folder: [.github/workflows](https://github.com/jonbrown21/macOS-JAMF-Scripts/tree/main/.github/workflows)
- OpenAI API docs: [https://platform.openai.com/docs](https://platform.openai.com/docs)

---

## Final Thoughts

By combining GitHub Actions with AI-driven tools like ChatGPT, we can modernize how script development and maintenance happen — saving time and improving quality. I encourage you to explore these workflows and customize them to suit your projects.

Feel free to reach out with questions or contributions!

---

## Ready to take your Apple IT skills and consulting career to the next level?  
I’m opening up free mentorship slots to help you navigate certifications, real-world challenges, and starting your own independent consulting business.  
**Let’s connect and grow together — [Sign up here](https://jonbrown.org/contact/)**