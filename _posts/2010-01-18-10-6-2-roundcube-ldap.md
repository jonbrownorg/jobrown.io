---
title: '10.6.2 Roundcube &#038; LDAP'
author: Jon
layout: post
permalink: /blog/10-6-2-roundcube-ldap/
thumbnail: /assets/img/covers/cover-16.jpg
img:
  - /blog/flyout/add.png
categories:
  - mail-server
  
tags:
  - ldap
  - mail
  - roundcube
  - squirrelmail
  - webmail
---
So like many other organizations mine was finally fed up with Horde as a webmail system. They had used squirrel mail in the past and was unimpressed by the graphical interface but admitted that it while it lacked glamour it always did perform as they would have expected. Before I had started there their mail system was running on a Linux box using Plesk and running Horde as their primary webmail interface. Immediately I got them into an XServe running OSX mail since their entire organization consisted of Apple iMacs figured it was the way to go, and got them setup with Squirrelmail and Roundcube.

I found Roundcube to be extremely easy to setup, however sort of hard to configure and tweak for use on an OSX Server. The biggest drawback to the old mail system was that while everyone had email accounts they were local accounts meaning their was no LDAP database at work so there was no way to have an auto complete or global LDAP address book that most of the people at our organization really craved. I decided that when moving to 10.6.2 we would have to get this feature established and I am documenting this here clearly as I found there was limited documentation for and I know there are many people using 10.6.2 and Roundcube together. 

Once Roundcube is installed head over to main.inc.php in the Roundcube config directory. I wanted the user to have access to the LDAP address book and also have the ability to have their own so on this line make sure that SQL is chosen as the primarty type of address book if this is your intent.

{% highlight bash %}
$rcmail_config['address_book_type'] = 'sql';
{% endhighlight %}

in the main.inc.php file the LDAP settings are kind of tricky. It gives you an example of a functional LDAP setup below for an organization named Verisign locate these lines in the main.inc.php file

{% highlight bash %}
// In order to enable public ldap search, configure an array like the Verisign
// example further below. if you would like to test, simply uncomment the example.
$rcmail_config['ldap_public'] = array(Verisign);
{% endhighlight %}

Notice that the third line is un-commented meaning that it is an active setting. Which means that what we are about to do below will not register until we comment out this line otherwise there will be two active configurations and neither will work this really tripped me up and had me stumped for days until I realized that I had two 

{% highlight bash %}
bash-3.2$ $rcmail_config['ldap_public'] {% endhighlight %}

attributes at work at the same time so next comment this out as below. 

{% highlight bash %}
// In order to enable public ldap search, configure an array like the Verisign
// example further below. if you would like to test, simply uncomment the example.
// $rcmail_config['ldap_public'] = array(Verisign);
{% endhighlight %}

Once this is done go down to the example below and start uncommenting the LDAP configuration lines one by one and filling out the information as you go here is an example of my configuration for the Name use whatever name you want the address book to show up as in the roundcube address book area. Your host name should be the fully qualified domain name of your directory server. Your default port on an ODM is 389. Only use TLS if you are using a secure SSL connection and always use User Specific so that the user is what is causing the OD Bind during lookups rather than the Directory Admin.

{% highlight bash %}
$rcmail_config['ldap_public']['Verisign'] = array(
  'name'          => 'Company Name',
  'hosts'         => array('fullyqualified.domainofdirectoryserver.com'),
  'port'          => 389,
  'use_tls'	    => false,
  'user_specific' => true, 
{% endhighlight %}

Next you must define the Base Search DN which is always your fully qualified domain name split up using dc= so if your directory name was directory.verisign.com then your base dn would be dc=directory, dc=verisign, dc=com. Here is what is not documented in many places it took me a long time to figure out that the Bind DN must have an active user or the directory admins UID here as well as cn=users, so that it knows how to find that user. I also configured mine to be non writable because I was unsure how safe this would be with the ODM.

{% highlight bash %}
'base_dn'       => 'dc=fullyqualified,dc=domainofdirectoryserver,dc=com',
  'bind_dn'       => 'uid=DirAdmin,cn=users,dc=fullyqualified,dc=domainofdirectoryserver,dc=com',
  'bind_pass'     => 'DirAdmin_Password',
  'writable'      => false, 
{% endhighlight %}

In order to get an actual accurate listing in the address book you must tweak the settings to include the specific user settings int he ODM LDAP directory.

{% highlight bash %}
'LDAP_Object_Classes' => array("top","person","inetOrgPerson","abxldapPerson"), 
  'required_fields'     => array("givenName", "cn", "sn", "mail"),    
  'LDAP_rdn'      => 'mail', 
  'ldap_version'  => 3,      
  'search_fields' => array('givenName', 'cn', 'sn', 'mail'),  // fields to search in
  'name_field'    => 'cn',    
  'email_field'   => 'mail',  
  'surname_field' => 'sn',   
  'firstname_field' => 'givenName', 
  'sort'          => 'givenName',    
  'scope'         => 'sub',  
  'filter'        => 'givenName=*',     
  'fuzzy_search'  => true);  
{% endhighlight %}

These settings will help you establish the correct mappings to Last Name, First Name, Email Address and Full Name or Given Name. These settings were very hard to find as there was limited documentation on both Apples part and on the Roundcube forums. Once done here I set it up to auto complete from the sql address book first and then to default over to the LDAP address book.

{% highlight bash %}
// An ordered array of the ids of the addressbooks that should be searched
// when populating address autocomplete fields server-side. ex: array('sql','Verisign');
$rcmail_config['autocomplete_addressbooks'] = array('sql','Verisign');
{% endhighlight %}

In parting my only piece of advice is to use the configuration here and remove the term Verisign and replace that variable with one that makes sense for you and your organization. Lastly if this does not work make sure that you have the correct domain name of the server and also ensure that you have enabled users to access the LDAP directory in Workgroup Manager.

