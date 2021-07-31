---
name: Facebook
slug: facebook
logo: /assets/img/services/facebook/logo.svg
owner: Facebook, Inc.
recent_breach: 2021-04-03
tags:
  - Proprietary
  - Free
  - Social Media
brief_desc: >-
  "Free" online social media and network service connecting people with friends, family, classmates and more.
desc: >-
  As the largest social network, Facebook is the one platform you should be very careful with, because of how much data you provide them with can have big consequences for you in the future.

security:
  - desc: Activate Two-Factor Authentication (2FA)
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Then go to <b>Security and Login</b>
          - Find the section, called <b>Two-Factor Authentication</b>
          - At <b>Use two-factor authentication</b>, press the <b>Add</b>-button
          - You will be asked for your account password
          - Now you can setup with the method of your choice, it is recommended to use an <b>Authentication App</b> instead of <b>Text Message (SMS)</b>
          - Depending on the choice you make here, you will need to follow the instructions with the method you choose.
  - desc: Verify where you are logged in
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Then go to <b>Security and Login</b>
          - Verify your devices
          - If there are some you do not recognize, or you are not sure, it is recommended to use <b>Log out of all sessions</b>-button.
  - desc: Choose a strong password
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Then go to <b>Security and Login</b>
          - Under <b>Login</b>, select <b>Edit</b> for <b>Change password</b>
          - Use a unique password with at least 16 characters with lower- and uppercase characters, numbers and special symbols. (preferably from a <a href="/password-manager">password manager</a>)

privacy:
  - desc: Privacy Checkup
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Privacy Checkup</b>
          - Go through each topic, and select the options that suits you the most
  - desc: Turn off Location History
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Then go to <b>Account Settings</b>
          - From here, select <b>Location</b>
          - Press <b>Edit</b> and chose the option <b>Off</b>
  - desc: Delete Location History
    device:
      - name: app-only
        steps:
          - Go to the hamburger-menu in bottom right corner
          - Expand <b>Settings & Privacy</b>
          - Tap <b>Privacy Shortcuts</b>
          - Tap <b>Manage your location settings.</b>
          - Tap <b>View your Location History</b>
          - Tap the <i>three dots</i> in the top right
          - Tap <b>Delete all location history</b>
  - desc: Turn off Face recognition
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Then go to <b>Privacy</b>
          - From here, select <b>Face Recognition</b>
          - Press <b>Edit</b> and choose the option <b>Off</b>
  - desc: Disable data sharing with advertisers
    device:
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Select <b>Ads</b> on the left side
          - Choose <b>Ad Setting</b> on the left side
          - Click on each of the different categories and disable everything
  - desc: Download Your Information
    device:
      - name: browser
        steps:
          - Go to <a href="https://www.facebook.com/dyi" target="_blank">facebook.com/dyi</a>
          - Select the data range <b>All of my data</b> with the format of your choosing (HTML is easy to understand, it can be opened in the browser)
          - Press <b>Create File</b>-button
          - And wait, you will either get an email or a notification letting you know when you can download the data.
  - desc: Delete Your account
    device:
      - name: app
        steps:
          - Go to the hamburger-menu in bottom right corner
          - Expand <b>Settings & Privacy</b>
          - Tap <b>Settings</b>
          - Tap <b>Profile Access and Control</b>
          - Select <Deactivation and Deletion</b>
          - Choose <b>Delete account</b> and read the consequences
          - Tap <b>Continue to Account Deletion</b> and proceed with the in-app instructions
      - name: browser
        steps:
          - Go to <b>Settings & Privacy</b> -> <b>Settings</b>
          - Then go to <b>Privacy</b>
          - From here, select <b>Your Facebook Information</b> on the left side
          - Click <b>View</b> on <b>Deactivate and Deletion</b>
          - Choose <b>Delete account</b> and read read the consequences
          - Click <b>Continue to Account Deletion</b> and proceed with the instructions

breaches:
  - name: 533 million Facebook users' phone numbers and personal data have been leaked online
    url: https://www.businessinsider.com/stolen-data-of-533-million-facebook-users-leaked-online-2021-4
    date: 2021-04-03
  - name: Facebook admits year-long data breach exposed 6 million users
    date: 2013-06-22
    url: https://www.reuters.com/article/net-us-facebook-security/facebook-admits-year-long-data-breach-exposed-6-million-users-idUSBRE95K18Y20130621
  - name: Facebook Bug Made Up to 14 Million Users Posts Public for Days
    date: 2018-07-06
    url: https://www.wired.com/story/facebook-bug-14-million-users-posts-public/
  - name: Facebook–Cambridge Analytica data scandal
    date: 2018-01-01 #TODO: need to verify this
    url: https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal

headlines:
  - name: Facebook Says It’s Your Fault That Hackers Got Half a Billion User Phone Numbers
    url: https://www.vice.com/en/article/88awzp/facebook-says-its-your-fault-that-hackers-got-half-a-billion-user-phone-numbers
    date: 2021-04-07
  - name: "Facebook's privacy problems: a roundup"
    url: https://www.theguardian.com/technology/2018/dec/14/facebook-privacy-problems-roundup
    date: 2018-12-15

policy: https://www.facebook.com/policy/
collect: # What they collect
  - what: Information in camera viewport
    how: Using the camera in the app, everything is analyzed in order to provide filters, masks and tips for using the camera.
  - what: Communications (Content, location data, who and when)
    how: Through posts, photos and messages.
  - what: Network and connections
    how: Who you are in contact with, people, pages, groups, hashtags.
  - what: Your usage
    how: How you interact with all of their products, engagement, who you share with, duration of interaction.
  - what: What others share and say about you
    how: What others say about you, shares with and about you. How people interacts with your profile, and imports from address books.
  - what: Debit or credit card number
    how: If you make any purchases using Facebook, these details will be saved and collected for 7 years.
  - what: Device information
    how: Via computers, phones, connected TVs and other web-connected device. Operating system, hardware and software versions, battery level, signal strength, available storage space, browser type, app and file names, types and plugins (browsers).
  - what: Device operations
    how: Operations and behaviors performed on the device, such as whether a window is foregrounded or backgrounded, mouse movements.
  - what: Identifiers
    how: Device IDs from your devices, ad identifiers from Facebook and other services, family device IDs.
  - what: Information from partners (even without an account)
    how: >-
      Your interactions with apps, ads using Facebook's Analytics tools. These partners provide information about your activities off Facebook - including information about your device, websites you visit, purchases you make, the ads yu see, and how you use their services, whether or not you have a Facebook account or are logged into Facebook.
  - what: Activities from other Facebook products
    how: They connect information about your activities on different Facebook products and devices.
  - what: Location information
    how: Current location, where you live, places you liked to visit, businesses and people near you to see what you enjoy and might enjoy.

last_update: 2021-05-09
---
