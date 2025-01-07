---
layout: post
date: '2025-01-07'
author: Jon Brown
permalink: /blog/using-github-to-contribute-and-pull-request-changes/
published: true
title: "Using Git and GitHub to contribute changes to Repositories with Pull Requests"
description: "Using Git and GitHub to contribute changes to Repositories with Pull Requests"
blogimgpath: 202408034Up
tags:
categories:
  - git
  - tutorials
image: /assets/images/covers/2025/GithubPullRequest.png
thumbnail: /assets/images/covers/2025/GithubPullRequest.png
cta: 2
comments: true
---
## Introduction

Contributing to open-source projects on platforms like GitHub can significantly enhance your skills and expand your network. This article focuses on how to contribute to a GitHub repository, using the "Awesome Mac Admin Tools" repo as an example. Whether you're a seasoned developer or new to coding, you'll learn how to fork a repository, make modifications, and submit pull requests.

## Understanding Git and GitHub

Git is a version control system that allows multiple developers to collaborate on projects efficiently. GitHub is a cloud-based platform that hosts Git repositories and provides a user-friendly interface for managing projects. Here’s what you will learn in this guide:

- **Forking a Repository**: Creating a personal copy to make changes.
- **Making Modifications**: How to edit files and add new content.
- **Submitting Pull Requests**: The process of requesting your changes be merged into the main repository.

## Steps to Contribute to a GitHub Repo

### 1. Fork the Repository

To start contributing, the first step is to **fork** the repository you want to contribute to. This creates a personal copy under your GitHub account.

- Ensure you have a GitHub account and are signed in.
- Navigate to the repository and click on the "Fork" button.

### 2. Clone the Repository

Once you have a fork, the next step is to **clone** the repository to your local development environment:

- Copy the URL of the forked repository.
- Open your terminal and run:

  ```bash
  git clone [URL]
  ```

### 3. Modify the Code

After cloning the repo to your local machine, you can edit the files directly. For instance, to add a new text editor called Code Runner to the Awesome Mac Admin Tools list:

- Open the `README.md` file in your preferred text editor.
- Add the entry for Code Runner, including a brief description and any relevant links.

### 4. Save and Commit Changes

Once your changes are made, you need to **commit** them:

1. Check the status of your changes:

   ```bash
   git status
   ```
2. Stage your changes:

   ```bash
   git add .
   ```
3. Commit those changes with a message:

   ```bash
   git commit -m "Added Code Runner"
   ```

### 5. Push Changes and Create a Pull Request

Now that your changes are ready, you'll want to push them back to your fork on GitHub and create a pull request:

1. Push your changes:

   ```bash
   git push origin main
   ```
2. Navigate to the original repository and click on "Pull Requests" tab.
3. Click on "New Pull Request" and fill in the required details.

### 6. Review by the Repository Owner

Once your pull request is submitted, the repository owner will review your changes. If everything looks good, they may merge your contribution into the original repository.

## Key Takeaways

- **Forking** allows you to safely make changes without affecting the original repository.
- **Modifying** files can enhance the project and make it more useful to others.
- **Pull requests** are a formal way to propose your changes for review and integration.

This guide illustrates that contributing to GitHub repositories, especially for Mac admins, can be a rewarding experience. Not only does it enhance your skills, but it also fosters collaboration within the community. Start contributing today and make your mark in the open-source world!

I hope you enjoyed this blog where I outlined one of my favorite git workflows. If you found it useful [Follow me](https://www.linkedin.com/in/jonbrown2/) on LinkedIn and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post. 

{% include videos/video.html id="8iQCuiTN9IQ" header="/images/covers/2025/GithubPullRequest.png" %}
