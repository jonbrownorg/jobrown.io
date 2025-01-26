---
layout: post
date: '2025-01-22'
author: Jon Brown
permalink: /blog/byo-with-me-in-2025-for-mac-ios-andriod-and-windows/
published: true
title: "BYO with me in 2025: iOS with User Enrollment in JAMF Pro"
description: "BYO with me in 2025: iOS with User Enrollment"
blogimgpath: 202408034Up
tags:
categories:
  - cybersecurity
  - tips
  - jamf
  - tutorials
image: /assets/images/covers/2025/byo_with_me.png
thumbnail: /assets/images/covers/2025/byo_with_me.png
cta: 2
comments: true
---
# BYOD Is for Mobile Devices only right?

It really depends on your companies needs. For example many companies need to hire 1099 contractors and in such a case they come with their own devices but not the correct security settings or enforcements. Remember BYOD is a security construct. The idea here is that you should be securing the companies sensitive data in all forms. 

You need to ensure its integrity, confidentiality and availability. Yes, the triad. You will see this come up again and again as a common theme. Securing against data leakage, accidental or intentional data deletion events and ensuring that the accuracy of the data is in tact. BYOD handles this by enforcing set security controls on the devices that store, process and transmit this sensitive data. 

In many cases when you are architecting your program you really need to look at this as not just iOS and Andriod programs which in many cases they are. You need to consider what and how will you manage Windows, and macOS devices as well owned by contractors, employees, or staff members. 

This is the first part in the series where I outline how I configured JAMF Pro to setup User Enrollment based BYOD program and all the settings that go along with it. In the next post I will outline how I configured JAMF Pro for macOS User Enrolled BYOD for scenerios where we have 1099 contractors who use their own macOS device. I will then cover our approach to Android and Windows management ia Microsoft Intune. 

---

## Part 1: Account Driven Enrollment with JAMF for iOS Devices

Implementing BYOD (Bring Your Own Device) for iOS devices using User Enrollment ensures a secure and seamless experience for both end users and IT administrators. This section outlines the specific steps required to set up BYOD for iOS User Enrollment, with a focus on the often-overlooked requirement of hosting a configuration file in the `/.well-known/` path on a web host.

### Prerequisites

Before proceeding, ensure the following requirements are met:

1. **Managed Apple IDs:**
   - Users need Managed Apple IDs to enable User Enrollment.
   - These can be created and assigned in Apple School Manager or Apple Business Manager.

2. **Apple Push Notification Service (APNs) Certificate:**
   - Obtain and upload an APNs certificate to your Mobile Device Management (MDM) solution.

3. **User Enrollment JSON File:**
   - Host a service discovery file on a public web server at the path: `/.well-known/`.
   - This file enables account-driven enrollment and allows iOS devices to discover the MDM server automatically.

4. **MDM Configuration:**
   - Ensure your MDM supports User Enrollment and is configured to support BYOD.
   
5. **Test the process:**
   - Ensure you test the process of user based enrollment with BYOD.
   
In this article we will be talking about the steps taken with JAMF Pro. Your mileage may vary but these core concepts are pretty universal when it comes to BYOD management and end user enrollment into BYOD. 


---

### Steps for Managed Apple IDs

#### 1. Configure Managed Apple IDs

1. Log in to Apple School Manager or Apple Business Manager.
2. Create Managed Apple IDs for your users. The easiest way to do this and the way that I did this is to enable directory sync with federation. This approach allows you to let users login to Apple with their IDP configuration. This [page](https://support.apple.com/guide/apple-business-manager/federated-authentication-identity-provider-axmfcab66783/web) provides he steps you need to federate and sync your directory with Apple Business Manager. 

Here is a video that was helpful for me in the process. 

{% include videos/video.html id="3HdLFjFcjqM" header="/images/covers/2025/byo_with_me.png" %}

* NOTE when you federate you will run into issues where some users, who have setup Apple Accounts with their work email address will be asked to convert those non sanctioned accounts to allow Apple to reissue their work email address to their Apple Business Manager work sanctioned account. 

{% include videos/video.html id="mYZyjxSjNmY" header="/images/covers/2025/byo_with_me.png" %}

{:start="3"}

3. Communicate the Managed Apple IDs and their associated credentials to users.

Now that everyone has a managed Apple ID that allows them to login with their work email credentials user enrollment for iOS BYOD will be much more seamless. 


---



### Steps for Apple Push Notifications

#### 2. Apple Push Notification Service (APNs) Certificate

The Apple Push Notification Service (APNs) Certificate is essential for enabling communication between Jamf Pro and Apple devices. Without a valid APNs certificate, Jamf Pro cannot push configurations, enforce policies, or manage devices effectively.

### Why is the APNs Certificate Important in Jamf Pro?

1. **Device Management:** APNs facilitates the connection between Jamf Pro and managed devices, enabling key features like app deployment, configuration profiles, and restrictions.
2. **User Enrollment:** User Enrollment for BYOD relies on APNs for initiating and maintaining the MDM relationship.
3. **Secure Communication:** It ensures secure and reliable interactions between Jamf Pro and Apple devices via Apple servers.

### How to Upload or Renew the APNs Certificate in Jamf Pro

Follow these steps to configure or renew the APNs certificate in Jamf Pro:

1. **Generate a Certificate Signing Request (CSR):**
   - Log in to your Jamf Pro instance as an administrator.
   - Navigate to **Settings** (gear icon) > **Global Management** > **Push Certificates**.
   - Click **Download Certificate Signing Request** and save the CSR file to your computer.

2. **Obtain the APNs Certificate:**
   - Visit the [Apple Push Certificates Portal](https://identity.apple.com/pushcert/).
   - Log in with the same Apple ID used for your existing certificate. (This is crucial for renewing certificates.)
   - Upload the CSR file you downloaded from Jamf Pro.
   - Download the resulting APNs certificate (`.pem` file) to your computer.

3. **Upload the APNs Certificate to Jamf Pro:**
   - Return to **Settings** > **Global Management** > **Push Certificates** in Jamf Pro.
   - Click **Upload** and select the `.pem` file you downloaded from the Apple Push Certificates Portal.
   - Verify the expiration date displayed in Jamf Pro after uploading the certificate.

4. **Verify Device Management:**
   - Test push notifications to ensure the new certificate is functioning correctly.
   - For example, try deploying a configuration profile or sending a remote command to a test device.

### Key Considerations

- **Annual Renewal:** APNs certificates expire annually. Use the same Apple ID for renewals to avoid device re-enrollment.
- **Notification for Expiry:** Jamf Pro will notify you about upcoming certificate expirations. Ensure your team acts promptly to renew.
- **Source Consistency:** If the Apple ID used for the initial certificate is unavailable, you must re-enroll all managed devices.

### Troubleshooting Tips

- **Upload Issues:** If you encounter errors during the upload, ensure the `.pem` file corresponds to the CSR generated by Jamf Pro.
- **Device Connectivity Problems:** Verify that the APNs certificate is active by testing communication with a managed device.



---




### Steps for User Enrollment Configuration

#### 3. User Enrollment JSON File

The remote management file is a simple JSON file that helps iOS devices locate the MDM server. Create a file named `com.apple.remotemanagement.json` with the following content:

{% highlight bash %}
{
"Servers": [
{
"Version":"mdm-byod",
"BaseURL":"https://JAMF_PRO_URL.com/servicediscoveryenrollment/v1/userenroll"
}
]
}
{% endhighlight %} 

- Replace `https://JAMF_PRO_URL.com/servicediscoveryenrollment/v1/userenroll` with your actual MDM server enrollment URL. Again I am using JAMF Pro here so I am following the instructions laid out in this well documented article [by JAMF](https://learn.jamf.com/en-US/bundle/technical-articles/page/Prepare_for_Account-Driven_Enrollment_with_Managed_Apple_IDs_and_Service_Discovery.html). 




#### Host the File on the Web Server

1. Place the `com.apple.remotemanagement.json` file in the `/.well-known/` directory of your web server. The full path should be: https://your-domain.com/.well-known/com.apple.remotemanagement

2. Ensure the web server is publicly accessible and uses HTTPS.

3. Verify the file is accessible by navigating to the URL in a browser. 

I am providing a video that was helpful for me as I was navigating this process. Your process will vary based on the kind of hosting your company chooses to host its website. You also need to take into consideration caching which may slow down the propogation process. Remember the User enrolls on their device and the base domain from their work email is used as the website that will be used to look for this json file. So if the user enrolls and the file is not present then the enrollment will fail. If you have uploaded the file and its been a few days and you are still having issues you may need to purge the website cache for the file to be exposed. For me we used Cloudflare so that was the engine that was used for caching and once cleared the process connected and users were able to login. 

{% include videos/video.html id="9GkDnxviIR8" header="/images/covers/2025/byo_with_me.png" %}

This process also heavily leverages federated Apple ID's. If your users are not using Federated Apple IDs then their experience will be to login once to the company domain (assuming thats connected to your MDM as an identity provider), then they are prompted to sign into Apple which will redirect them to their identity provider. For me thats Azure and they login again. If you are not using federation then they will need to know their manual username and password in Apple Business Manager to complete enrollment. I highly recommend setting up federation as this will streamline the entire BYOD user enrollment process. 



---


#### 4. Steps for MDM Configuration

## Account-driven User Enrollment

For personally owned mobile devices is enabled via Jamf Pro's user-initiated enrollment settings. Source: [Enabling User Enrollment in JAMF](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Enabling_User_Enrollment_for_Mobile_Devices.html)

<style>
    blockquote ul li:first-child { margin-bottom: -30px !important; }
    blockquote ul li:nth-of-type(2) { margin-bottom: -30px !important; }
    blockquote ul li:last-child { margin-top: -30px !important; }

    blockquote ol li:first-child { margin-bottom: -60px !important; }
    blockquote ol li:nth-of-type(2) { margin-bottom: -60px !important; }
    blockquote ol li:nth-of-type(3) { margin-bottom: -40px !important; }
    blockquote ol li:nth-of-type(6) { margin-bottom: -60px !important; }
    blockquote ol li:nth-of-type(7) { margin-bottom: -40px !important; }
    blockquote ol li:last-child { margin-top: -40px !important; }
</style>


> - In Jamf Pro, click Settings icon <svg class="image cmdimage" data-fancy="noexpand" style="display:inline; width: 20px; height: auto;" viewBox="0 0 24 24" width="20"><path d="M11.146 2.284c-.608.089-1.211.572-1.424 1.14a6.035 6.035 0 00-.181.779c-.054.306-.116.591-.139.633-.101.189-.404.323-.612.27-.049-.013-.297-.17-.55-.349-.547-.389-.789-.504-1.165-.558a1.886 1.886 0 00-1.074.168c-.216.102-.368.23-.885.748-.523.523-.647.67-.76.903-.123.254-.137.318-.15.708-.022.652.002.711.767 1.828.166.241.185.392.077.603-.115.225-.225.275-.836.382-.672.118-.946.213-1.209.421-.41.324-.653.733-.723 1.221-.052.359-.052 1.279 0 1.639.095.663.581 1.262 1.2 1.481.098.034.43.107.738.161.605.106.716.157.83.381.105.206.088.362-.063.583L4.595 16c-.342.502-.408.718-.389 1.274.013.39.027.454.15.708.113.233.237.38.76.903.517.518.669.646.885.748.345.162.71.219 1.074.168.376-.054.618-.169 1.165-.558.253-.179.501-.336.55-.349.208-.053.511.081.612.27.023.042.085.327.139.633.116.661.212.936.419 1.198.324.41.733.653 1.221.723.357.052 1.277.052 1.639.001.655-.093 1.264-.587 1.481-1.201.034-.098.108-.439.162-.758.095-.551.107-.586.235-.708.14-.131.354-.198.512-.158.049.013.297.17.55.349.547.389.789.504 1.165.558.364.051.729-.006 1.074-.168.216-.102.368-.231.886-.748.526-.527.646-.669.76-.905.132-.274.135-.291.135-.8 0-.487-.007-.534-.111-.745a7.107 7.107 0 00-.431-.68c-.177-.25-.331-.496-.344-.545-.04-.158.027-.372.158-.512.122-.128.157-.14.708-.235.319-.054.66-.128.758-.162.428-.151.827-.517 1.041-.954.146-.298.199-.653.199-1.347s-.053-1.049-.199-1.347c-.214-.437-.613-.803-1.041-.954a7.22 7.22 0 00-.738-.161c-.605-.106-.716-.157-.83-.381-.108-.211-.089-.362.077-.603.766-1.12.792-1.181.765-1.828-.016-.379-.032-.457-.15-.706-.113-.239-.224-.372-.757-.905-.518-.517-.67-.646-.886-.748a1.886 1.886 0 00-1.074-.168c-.376.054-.618.169-1.165.558-.253.179-.501.336-.55.349-.158.04-.372-.027-.512-.158-.128-.122-.14-.157-.235-.708a7.184 7.184 0 00-.162-.758c-.219-.619-.818-1.105-1.481-1.2-.332-.048-1.342-.047-1.674.002m1.65 1.586c.093.094.12.175.18.55.145.906.258 1.181.641 1.564.402.403.916.616 1.48.616.563-.001.78-.088 1.499-.597.637-.452.607-.456 1.232.169s.621.595.169 1.232c-.509.719-.596.936-.597 1.499 0 .564.213 1.078.616 1.48.383.383.658.496 1.564.641.375.06.456.087.55.18l.11.11v1.372l-.11.11c-.094.093-.175.12-.55.18-.906.145-1.181.258-1.564.641a2.054 2.054 0 00-.616 1.48c.001.563.088.78.597 1.499.452.637.456.607-.169 1.232s-.595.621-1.232.169c-.719-.509-.936-.596-1.499-.597-.564 0-1.078.213-1.48.616-.383.383-.496.658-.641 1.564-.06.375-.087.456-.18.55l-.11.11h-1.372l-.109-.11c-.095-.096-.121-.179-.196-.63-.112-.673-.175-.874-.361-1.163a2.074 2.074 0 00-1.745-.937c-.563.001-.78.088-1.499.597-.637.452-.607.456-1.232-.169-.63-.629-.625-.585-.133-1.286.197-.282.398-.613.446-.737.122-.313.149-.908.056-1.227-.155-.532-.456-.953-.878-1.226-.289-.186-.49-.249-1.163-.361-.451-.075-.534-.101-.63-.196l-.11-.109v-1.372l.11-.109c.096-.095.179-.121.63-.196.673-.112.874-.175 1.163-.361.422-.273.723-.694.878-1.226.093-.319.066-.914-.056-1.227-.048-.124-.249-.455-.446-.737-.492-.701-.497-.657.133-1.286.625-.625.595-.621 1.232-.169.719.509.936.596 1.499.597a2.074 2.074 0 001.745-.937c.186-.289.249-.49.361-1.163.075-.451.101-.534.196-.63l.109-.11h1.372l.11.11m-1.201 4.412a3.765 3.765 0 00-2.564 1.437c-.238.313-.563.968-.649 1.306a4.254 4.254 0 000 1.95c.086.338.411.993.649 1.306.366.482.817.837 1.421 1.119a3.648 3.648 0 001.913.317 3.277 3.277 0 001.183-.317c.855-.399 1.406-.94 1.813-1.78a3.21 3.21 0 00.356-1.255 3.648 3.648 0 00-.317-1.913c-.44-.942-1.128-1.585-2.107-1.967-.441-.173-1.171-.26-1.698-.203m.979 1.541c.376.097.697.287 1.006.597.456.456.66.944.66 1.58 0 .636-.204 1.124-.66 1.58-.456.456-.944.66-1.58.66-.636 0-1.124-.204-1.58-.66-.456-.456-.66-.944-.66-1.58 0-.636.204-1.124.66-1.58.459-.458.916-.652 1.554-.657.203-.002.46.024.6.06" fill="currentColor" fill-rule="evenodd" stroke="none"></path></svg> in the sidebar.
> - In the Global section, click User-initiated enrollment <img src=" https://learn-be.jamf.com/bundle/jamf-pro-documentation-current/page/images/Icon_Pro_User-Initiated_Enrollment.png?_LANG=enus" style="display:inline; width: auto; height: 20px;" >.
> - Click the Edit icon <svg class="image cmdimage" data-fancy="noexpand" style="display:inline; width: 24px; height: auto;" viewBox="0 0 24 24" width="20"><path d="M19.165 1.602c-.652.17-.306-.151-6.418 5.953-3.218 3.214-5.691 5.715-5.824 5.89-.274.361-.511.78-.675 1.195-.102.257-.912 2.932-.984 3.25-.043.186.054.468.217.631.202.202.455.263.759.183.691-.182 2.949-.879 3.226-.996a5.546 5.546 0 001.194-.71c.132-.106 2.744-2.7 5.805-5.765 6.1-6.108 5.764-5.746 5.935-6.413.097-.378.105-.967.02-1.33-.213-.905-1.005-1.697-1.91-1.91-.354-.083-.982-.073-1.345.022m1.175 1.499c.205.099.461.355.556.556.116.245.128.601.029.863-.072.188-.18.316-.755.89l-.671.67-.789-.79-.79-.791.671-.67c.768-.767.884-.838 1.329-.817.152.007.327.044.42.089M4.872 5.281a2.996 2.996 0 00-2.541 2.277c-.066.282-.071.684-.071 5.942s.005 5.66.071 5.942a3.03 3.03 0 002.227 2.227c.282.066.684.071 5.942.071s5.66-.005 5.942-.071a3.03 3.03 0 002.227-2.227c.064-.273.071-.555.071-2.942 0-1.452-.013-2.688-.03-2.747-.04-.144-.212-.341-.365-.421-.151-.078-.525-.086-.665-.014a.89.89 0 00-.354.342c-.059.107-.068.405-.086 2.8l-.02 2.68-.108.229a1.7 1.7 0 01-.743.743l-.229.108H4.86l-.229-.108a1.7 1.7 0 01-.743-.743l-.108-.229V7.86l.108-.229a1.7 1.7 0 01.743-.743l.229-.108 2.68-.02c2.916-.022 2.792-.012 3.005-.246.142-.157.188-.283.188-.514a.713.713 0 00-.393-.674c-.108-.059-.378-.067-2.66-.071-1.397-.003-2.66.008-2.808.026m9.258 6.171c-4.601 4.604-4.623 4.625-5.267 4.882-.273.109-1.71.553-1.729.533a6.727 6.727 0 01.149-.548c.334-1.134.426-1.365.728-1.819.101-.153 1.728-1.811 4.504-4.59l4.344-4.35.791.79.79.79-4.31 4.312" fill="currentColor" fill-rule="evenodd" stroke="none"></path></svg>.
> - Click the Devices tab.
> - Select the checkbox to enable account-driven User Enrollment for the type of personally owned devices you want to enroll.	
> - Click the Messaging tab and use the Language dialog to customize the way you want the Login page to display to users.
> - Click the Save icon <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Save.png" style="display:inline; width: 20px;" >.

## Automatically Registering Managed Apple IDs with Volume Purchasing

This is an important step in the process of MDM configuration with JAMF. Check out [this article](https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/Distributing_Content_to_Personally_Owned_Devices.html) as a resource. 

> Users with Managed Apple IDs can be automatically registered with volume purchasing without any end user interaction.
> 
> Requirements
> 
> The Automatically register with volume purchasing if users have Managed Apple IDs checkbox must be selected for the volume location used to invite and assign content to users with Managed Apple IDs. For more information, see [Volume Purchasing Integration](https://docs.jamf.com/jamf-pro/documentation/Volume_Purchasing_Integration.html).
> 1. In Jamf Pro, click Users <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Users.png" style="display:inline; width: 25px; height: auto;" > at the top of the sidebar.
> 2. Click Smart User Groups <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Smart_Device_Groups.png" style="display:inline; width: 25px; height: auto;" > in the sidebar.
> 3. Click New <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Button_Pro_New.png" style="display:inline; width: 50px; height: auto;" >.
> 4. In the General pane, enter a Display Name, such as Managed Apple IDs.
> 5. In the Criteria pane, add the following device criteria that includes all Managed Apple IDs in the smart group:
>  <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/screen_Pro_SmartGroup_AppleIDs.png">
> 6. Click Save <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Save.png" style="display:inline; width: 20px;" >.
> 7. In Jamf Pro, click Users <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Users.png" style="display:inline; width: 25px;" > at the top of the sidebar.
> 8. Click Invitations.
> 9. In the General pane, enter a Display Name, such as Invitation for Managed Apple IDs.
> 10. Choose Automatically register only users with Managed Apple IDs and skip invitation from the Distribution Method pop-up menu.
> 11. In the Scope pane, add your smart group that contains Managed Apple IDs as a target for the invitation.
> 12. Click Save <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Save.png" style="display:inline; width: 20px;" >.
> 
> Users with Managed Apple IDs are automatically registered with volume purchasing in Jamf Pro.

## Creating a Volume Assignment

Create a volume assignment that assigns content to users.

{:start="1"} 
> 1. In Jamf Pro, click Users <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Users.png" style="display:inline; width: 25px; height: auto;" > at the top of the sidebar.
> 2. Click Volume Assignments <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Mobile_Device_Apps.png" style="display:inline; width: 25px; height: auto;" > in the sidebar.
> 3. Click New <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Button_Pro_New.png" style="display:inline; width: 50px; height: auto;" >.
> 4. Use the General payload to configure basic settings for the volume assignment, including the location.
>     
>     **Note:** The assignment is automatically added to the site that the location belongs to.
> 
> 5. Use the Apps and eBooks payloads to select the checkbox for each app and book you want to assign.
>     
>     If a recently purchased app or book is not displayed in the list, follow the steps in the [Recently Purchased Volume Content is not Displayed in Jamf Pro](https://docs.jamf.com/technical-articles/Recently_Purchased_Volume_Content_is_not_Displayed_in_Jamf_Pro.html) article to add that app or book to the list.
>     
> 6. Click the Scope tab and configure the scope of the assignment.   
>     Best Practice:
>     
>     To assign volume content to personally owned devices that have a Managed Apple ID, use a smart group that contains devices with Managed Apple IDs and add it to the scope of your volume assignment.
>     
>     <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/screen_Pro_SmartGroup_AppleIDs.png">
>     
> 7. Click Save <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Save.png" style="display:inline; width: 20px;" >.


## Creating a Smart Group for Personally Owned Devices

> To help you distribute content to personally owned devices, create a mobile device smart group that includes all personally owned devices.
> You can then configure the scope of distributed content in the following scenarios:
> Use the smart group to target personally owned devices for user-assigned content.    
> Use the smart group to exclude personally owned devices from device-assigned content.
>     
> - In Jamf Pro, click Devices <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Devices.png" style="display:inline; width: 25px; height: auto;" > at the top of the sidebar.
> - Click Smart Device Groups <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Smart_Device_Groups.png" style="display:inline; width: 25px; height: auto;" > in the sidebar.
> - Click New <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Button_Pro_New.png" style="display:inline; width: 50px; height: auto;" >.
> - In the General pane, enter a Display Name.
> - In the Criteria pane, add the the Device Ownership Type criteria:  <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/screen_Pro_BYO_SmartGroup.png">   
> - Click Save <img src="https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/images/Icon_Pro_Save.png" style="display:inline; width: 20px;" >.


## Distributing Content to Personally Owned Devices

Apps that are assigned to users via volume assignment in Jamf Pro can be distributed to the user's personal device.
Keep the following in mind when you distribute apps and books to personally owned devices:

- Make sure the Make app managed if currently installed as unmanaged checkbox is deselected.
- Jamf recommends distributing content with Jamf Self Service for iOS to devices enrolled via User Enrollment. To do this, make sure Make Available in Self Service is chosen from the Distribution Method pop-up menu. If you choose Install Automatically/Prompt Users to Install and the user ignores the prompt, Jamf Pro prompts users every four hours or during the next inventory update.
- If you distribute an app to both institutionally owned and personally owned devices in your environment, add two separate instances of the app in Jamf Pro: one for each distribution type. You can then use a smart group that includes personally owned devices to do the following:
    - Use the smart group to target personally owned devices for user-assigned content.
    - Use the smart group to exclude personally owned devices from device-assigned content.
    
**App: Self Service:** [Follow the steps here](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Jamf_Self_Service_for_iOS.html) to deploy the JAMF Self Service App for iOS

**App Config:**
{% highlight bash %}
<dict>
	<key>INVITATION_STRING</key>
	<string>$MOBILEDEVICEAPPINVITE</string>
	<key>JSS_ID</key>
	<string>$JSSID</string>
	<key>SERIAL_NUMBER</key>
	<string>$SERIALNUMBER</string>
	<key>DEVICE_NAME</key>
	<string>$DEVICENAME</string>
	<key>MAC_ADDRESS</key>
	<string>$MACADDRESS</string>
	<key>MANAGEMENT_ID</key>
	<string>$MANAGEMENTID</string>
	<key>JSS_URL</key>      
	<string>$JPS_URL</string>
</dict>
{% endhighlight %}


---

#### 5. Test the Enrollment Process

1. On an iOS device, navigate to **Settings > General > VPN & Device Management**.
2. Select **Enroll in Device Management** and sign in with your Company Email and a Managed Apple ID.
3. The device will automatically locate the MDM server using the service discovery file and complete the enrollment process. You can see a great example of how we BYO at JAMF that shows the enrollment process. 

{% include videos/video.html id="vohNJkr52U8" header="/images/covers/2025/byo_with_me.png" %}


### Sources

- [Prepare for Account-Driven Enrollment with Managed Apple IDs and Service Discovery](https://learn.jamf.com/en-US/bundle/technical-articles/page/Prepare_for_Account-Driven_Enrollment_with_Managed_Apple_IDs_and_Service_Discovery.html)
- [Overview of BYOD](https://learn.jamf.com/en-US/bundle/technical-paper-byod-current/page/Overview_BYOD.html)
- [Jamf Documentation: Push Certificate Setup](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Configuring_APNs_for_Jamf_Pro.html)
- [Apple Push Certificates Portal](https://identity.apple.com/pushcert/)
- [Federation with Apple Business Manager](https://support.apple.com/guide/apple-business-manager/federated-authentication-identity-provider-axmfcab66783/web)
- [Enabling User Enrollment in JAMF](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Enabling_User_Enrollment_for_Mobile_Devices.html)
- [Deploy the Self Service App for iOS](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Jamf_Self_Service_for_iOS.html)
- [Content Distribution to Personally Owned Devices](https://docs.jamf.com/technical-papers/jamf-pro/byod/10.17.0/Distributing_Content_to_Personally_Owned_Devices.html)