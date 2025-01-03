---
layout: post
date: '2025-01-02'
author: Jon Brown
permalink: /blog/using-multiple-ssh-keys-and-multiple-github-repsitories/
published: true
title: "Developer Strategies: How to commit to multiple git repositories with multiple unique SSH keys"
description: "Developer Strategies: How to commit to multiple git repositories with multiple unique SSH keys"
blogimgpath: 2024080347Up
tags:
categories:
  - git
  - scripts
image: /assets/images/covers/2025/reposandkeys.png
thumbnail: /assets/images/covers/2025/reposandkeys.png
cta: 2
comments: true
---

## Challenges with Git & GitHub

One of the key challenges with git and GitHub is wanting to commit code when you have multiple repositories on your local desktop. There are lots of ways to accomplish the task of committing code with git to GitHub, the strategy that I want to discuss in this tutorial is the process of using deploy-keys defined at the repo level and a configuration file defined to call the right key depending on which repository you happen to be working in. 

This approach makes it easier to manage your keys. Faster to switch between committing code while in the terminal and negates the need to use third party tooling. For this you will need:

1. A terminal on your local machine (I am on macOS)
2. A GitHub account
3. At least two established GitHub Repos

## Step #1: Generate the SSH Key

If you are new to deploying code to GitHub, the first step is to generate an SSH key that you can use to push code to your repository without the need to authenticate. 

To setup a key open Terminal on your Mac and follow these simple steps. The following snippit is taken from the [GitHub Docs Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

1. Open Terminal.

2. Paste the text below, replacing the email used in the example with your GitHub email address.

{% highlight bash %}
ssh-keygen -t ed25519 -C "your_email@example.com"{% endhighlight %} 

{:start="3"}
3. This creates a new SSH key, using the provided email as a label.

{% highlight bash %}
Generating public/private ALGORITHM key pair.{% endhighlight %} 

{:start="4"}
4. When you're prompted to "Enter a file in which to save the key", you can press Enter to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ALGORITHM with your custom key name.

{% highlight bash %}
Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]{% endhighlight %}

{:start="5"}
5. At the prompt, type a secure passphrase. For more information, see Working with SSH key pass-phrases.

{% highlight bash %}
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]{% endhighlight %} 

Now that you have an SSH key you need to setup a deploy-key in your Github Repo. Now keep in mind that we are talking about multiple repos, multiple keys so feel free to add multiple ssh keys here one for each repo that you hope to link them to. 

## Step #2: Add your keys to your Github repos

Now that you have your SSH keys you need to add the public key of each key you created to your github repos. You will need to remember which keys you created and which one you want to use with each repo. For example I created 

{% highlight bash %}
~/.ssh/id_rsa_githubrepo1
~/.ssh/id_rsa_githubrepo2{% endhighlight %} 

I will know that the first key goes to my Github Repo #1 and the second key will be associated with my Github Repo #2 repository. There are some pros to using Deploy keys those are: 

- Anyone with access to the key and the repo can deploy the project
- Users don't have to change their local SSH settings
- Deploy keys are "Read only by default" but you can give them write access

The cons of deploy keys are primarily

- Deploy keys are usually not protected by a passphrase, making the key easily accessible if the server is compromised.
- Deploy keys are credentials that don't have an expiry date.
- Deploy keys aren't linked directly to organization membership. If the user who created the deploy key is removed from the repository, the deploy key will still be active as it isn't tied to the specific user, but rather to the repository.

Source: [GitHub Docs Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

What does this mean? It means, be careful with deploy keys. You should add extra steps to ensure that your keys are backed up, encrypted, and only shared with users that you trust. You should revoke keys and re-establish keys when people leave your organization and you should follow the least privilige construct where only users that need to pull or push code to a specific repository are added. 

The steps to add your public key to the Github repo is pretty straight forward and this is taken from the [Github Docs Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys): 

1. On GitHub, navigate to the main page of the repository.

2. Under your repository name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

3. Click Add deploy key.

4. In the "Title" field, provide a title.

5. In the "Key" field, paste your public key.

If you are unsure of how to get the public key on your computer run this command to view the public key information, you can then copy and paste the key information. 

{% highlight bash %}
cat ~/.ssh/id_rsa_githubrepo1.pub{% endhighlight %} 

{:start="6"}
6. Select Allow write access if you want this key to have write access to the repository. A deploy key with write access lets a deployment push to the repository. In this case, this is what we want.

7. Click Add key.

Rinse and repeat this step for each of your repositories pasting the public key for each unique key into the deploy key area of the repository settings. 


## Step #3: Create a configuration file

In this step we will be following the scripted steps outlined in [this Github repository](https://gist.github.com/jexchan/2351996) that outlines the steps needed to build out the configuration file. 

{% highlight bash %}
cd ~/.ssh/
touch config
sudo nano config{% endhighlight %} 

This code puts you into the .ssh directory. Then it creates a simple and blank configuration file. Then you edit the file and it enters you into the NANO editor. 

Paste in the following text where you will want to edit the lines that are highlighted with an arrow

{% highlight bash %}
#github_repo1 <------
Host repo1 <------
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_githubrepo1 <------

#github_repo2 <------
Host repo2 <------
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_githubrepo2 <------
{% endhighlight %} 

Notice that the commented title helps you remember which repository you are working with. The host a unique identifier that we will use in the next step to tell GitHub which key to use. Finally the last item is the key path itself. Notice that the Host Name and User are the same for each entry that you add. For each repository and key that you have make sure you have a unique and correct corresponding entry. 

Save the file by pressing the <kbd>control</kbd>+<kbd>X</kbd> command.

## Step #4: Clone your repository

If you have not yet cloned your repository to your computer you will want to do so now. To do this simply run the following. These steps are taken from the [Github Docs Documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

1. On GitHub, navigate to the main page of the repository.

2. Above the list of files, click Code.

3. To clone the repository using HTTPS, under "HTTPS", click the copy button.

4. Open Terminal.

5. Change the current working directory to the location where you want the cloned directory.

6. Type git clone, and then paste the URL you copied earlier.

{% highlight bash %}git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY{% endhighlight %}

{:start="7"}
7. Press Enter to create your local clone.

{% highlight bash %}
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Cloning into `Spoon-Knife`...
remote: Counting objects: 10, done.
remote: Compressing objects: 100% (8/8), done.
remove: Total 10 (delta 1), reused 10 (delta 1)
Unpacking objects: 100% (10/10), done.
{% endhighlight %}

Now that you have a cloned repository you are ready for the next step. If you already have your repository cloned you can move to the next step. 

## Step #5: Modify your remote URL

The next step is not obvious and is mentioned in the comments of [this Github repository](https://gist.github.com/jexchan/2351996) and not in the main body so do not miss this step. We must modify that URL of the repository by running these commands within the repo itself in terminal. 

First, view the existing remotes to verify which URL is currently set:

{% highlight bash %}git remote -v{% endhighlight %}

Then, you can set it with:

{% highlight bash %}git remote set-url origin repo1:githubusername/repo1.git{% endhighlight %}

lets break this down

the git remote set-url origin command sets the URL and the URL is broken down into these sections

{shortcut name of the key set as HOST in the config file}:githubusername/repositoryname.git

So for my URL and configuration that would be 
 
{% highlight bash %}git remote set-url origin repo1:githubusername/repo1.git{% endhighlight %}

where repo1 reflects this setting

{% highlight bash %}
#github_repo1 <------
Host repo1 <------
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_githubrepo1 <------
{% endhighlight %}

and repo1.git reflects the name of my repository in Github

## Final Step

Now you can simply run the standard git commands to commit your code

{% highlight bash %}
git add .
git commit -m "your comments"
git push
{% endhighlight %}

This works because when you commit now it references the key in the URL and maps it to the Config file and performs your SSH key authentication. Now you can commit code from repo to repo without having to manually target a new key each time. 

I hope you enjoyed this blog where I outlined one of my favorite git workflows. If you found it useful [Follow me](https://www.linkedin.com/in/jonbrown2/) on LinkedIn and comment with questions, or feedback. As always here are the sources I referenced throughout this blog post. 

### Sources
- [Adding SSH Key - Github Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [jexchan -  multiple_ssh_setting Github](https://gist.github.com/jexchan/2351996)
- [Cloning a Repo in Github](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
