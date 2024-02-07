---
layout: post
date: '2020-06-19'
author: Jon Brown
permalink: /blog/nist-compliance-and-systems-hardening-in-an-all-mac-environment/
published: true
title: NIST Compliance and Systems Hardening in an All Mac Environment
description: NIST Compliance and Systems Hardening in an All Mac Environment
blogimgpath: 20200616NI
tags:
  - MacOS
  - iOS
categories:
  - tips
fpimage: /assets/images/covers/2020/Header-NIST-mac-fp.jpg
image: /assets/images/covers/2020/Header-NIST-mac.jpg
thumbnail: /assets/images/covers/2020/Header-NIST-Alt.jpg
link: /img/app-images/2020/Header-NIST-mac.jpg
cta: 1
comments: true
---
NIST security controls are often the most rigorous and attested
cybersecurity requirements for any organization to implement. NIST
controls, specifically 800-53, are recognized as the framework for
companies wanting to implement requirements that need cybersecurity
compliance for the federal government information systems and processing
for both cloud and on-premises systems. NIST 800-53 consists of between
~100-400 controls requirements across 17 different control families
depending on the FISMA rating (high, moderate, or low) of that system.
For companies wanting to implement NIST security controls, specifically
the technical controls including AC/AU/IA/SC as well other operational
controls such as SA/SI, the process of hardening and implementing the
control requirements can be a time consuming and technically challenging
process. If companies are not familiar with the technical inner workings
and requirements of these controls, they may face significant findings
which can generate numerous POAMs that would require remediation. Worst
still is the potential for a company, if given enough control
deficiencies, potentially not being granted an ATO (authority to
operate).

Mac OS, especially, if they were to be included as a part of a FISMA
boundary require special know how and intricate knowledge that other
OS's and technical personnel may not possess. NIST has introduced a Mac
OS Security compliance tool to address these compliance requirements for
organizations. The [Mac OS Security Compliance
Project](https://github.com/usnistgov/macos_security) was recently
released that allows organizations to automate security compliance
hardening and guidelines for Mac OS.

By downloading the tool from GitHub and running it against your Mac OS
baseline configuration, the tool will perform an assessment of the
overall compliance level for NIST 800-53 against your present
configuration. When run against your baseline configuration, the tool
will output the compliance configuration of the various components used
within the configuration against the various controls contained within
800-53.

The tool is configurable to be run against against low, medium, and high
FISMA ratings of 800-53 to be tailored to your organization's threshold
requirements. Run the tool following these simple steps.

### Installation

{% highlight bash %}
git clone https://github.com/usnistgov/macos_security.git

pip3 install -r requirements.txt
{% endhighlight %}

### Create an AsciiDoc (Guide)

To create an asciidoc guide, run the create_guide.py script. The first
argument given must be the baseline desired to create the asciidoc
guide.

{% highlight bash %}
python3 create_guide.py -h

usage: create_guide.py [-h] [-o OUTPUT] baseline

Given a baseline, create an AsciiDoc guide.

positional arguments:

baseline Baseline YAML file used to create the guide.

optional arguments:

-h, --help show this help message and exit

-o OUTPUT, --output OUTPUT
{% endhighlight %}

#### Example:
{% highlight bash %}
python3 create_guide.py ../baselines/moderate.yaml -o ../build/MyBaselineGuide.adoc
{% endhighlight %}

### Use Script Generator
The script_generator.py script will generate a compliance script that
can perform reporting, scanning and remediation base on the YAML rules
provided in the baseline. The script will be placed in the build
directory that and named after the baseline specified, i.e.
moderate_compliance.sh.

{% highlight bash %}
python3 script_generator.py -h

usage: script_generator.py [-h] baseline

Given a baseline, create a compliance script.

positional arguments:

baseline Baseline YAML file used to create the guide.

optional arguments:

-h, --help show this help message and exit
{% endhighlight %}

#### Example:
{% highlight bash %}
python3 script_generator.py ../baselines/moderate.yaml
{% endhighlight %}


### Generate Management Profiles
The profile_generator.py script will generate mobileconfig files for all YAML rules in the baseline that can be enforced by a configuration profile.

{% highlight bash %}
python3 profile_generator.py -h
usage: profile_generator.py [-h] baseline

Given a baseline, create mobileconfig files for that baseline.

positional arguments:
  baseline     Baseline YAML file used to create the guide.

optional arguments:
  -h, --help  show this help message and exit
{% endhighlight %}

#### Example:

{% highlight bash %}
python3 profile_generator.py ../baselines/moderate.yaml
{% endhighlight %}

### Export to Microsoft Excel
The yaml-to-xls.py script will generate a Microsoft Excel spreadsheet as
another form of documentation.

If run with the -o option, the script will create a guide in a custom
location. Otherwise, it will default to output the guide.xls in the
build directory.

{% highlight bash %}
python3 yaml-to-xls.py -h

usage: yaml-to-xls.py [-h] [-o OUTPUT] baseline

Given a baseline, create an Excel Spreadsheet for documentation.

positional arguments:

baseline Baseline YAML file used to create the guide.

optional arguments:

-h, --help show this help message and exit

-o OUTPUT, --output OUTPUT

{% endhighlight %}

#### Example:

{% highlight bash %}
python3 yaml-to-xls.py ../baselines/moderate.yaml -o ../build/MySheet.xls
{% endhighlight %}

### Baseline
This will identify the control on a particular baseline. Currently, it identifies low, moderate, and high baselines for FISMA, using the 800-53_baselines.yaml, found in the includes directory.

It currently has no options to pass.

#### Example:

{% highlight bash %}
python3 baseline_identify.py
{% endhighlight %}

Once the tool is run, it will generate a greppable output format that
lists your compliance level with the associated finding. The findings
for each output requirement also map to the DISA STIG and CCI/CCE for
DOD specific systems and requirements. Once the output is generated, it
can be used by your compliance and security personnel to go through and
determine what gaps exist in your baseline Mac OS configuration.

For even greater compliance and continuous monitoring purposes, the tool
can be scripted to be automatically run at pre-defined thresholds with
your preferred tool such as cron or automater whenever new builds of
your Mac OS configuration changes or need to be updated. Even if your
organization does not require the robust requirements for NIST 800-53,
it can be used to increase your cybersecurity resiliency and determine
gaps in your compliance posture. NIST 800-53 controls map to several
other cybersecurity frameworks which do not have this level of
automation such as Soc 2 Type 2, CSF, or NIST 800-171 which can be
applied if needed.

So go ahead and download the tool to determine your compliance posture
for your Mac OS configuration today!