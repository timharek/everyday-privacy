---
name: Snapchat
slug: snapchat
logo: /assets/img/services/snapchat/logo.svg
owner: Snap, Inc.
recent_breach: 2014-01-01
tags:
  - Proprietary
  - Free
  - Social Media
desc: >-
  A multimedia messaging app, where you mainly send photos as messages.
security:
  - desc: Activate Two-Factor Authentication (2FA)
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Then choose <b>Two-Factor Authentication</b>
          - Chose 2FA method, recommended to use an <b>Authentication App</b> instead of <b>Text message</b>.
          - Depending on the choice you make here, you will need to follow the instructions with the method you choose.
  - desc: Choose a strong password
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Select <b>Password</b>
          - Use a unique password with at least 16 characters with lower- and uppercase characters, numbers and special symbols. (preferably from a <a href="/password-manager">password manager</a>)

privacy:
  - desc: Adjust who can interact with you
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Under the section <b>Who can...</b>, you can specify different parts of your account
  - desc: Advertisement preferences
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Under <b>Additional services</b> select <b>Manage</b>
          - Go to <b>Advert Preferences</b>
          - Here you can toggle off all the different settings you want to opt-out of. This is how you can limit/control how Snapchat and third-parties use information about you.
  - desc: Lifestyle & Interests
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Under <b>Additional services</b> select <b>Manage</b>
          - Go to <b>Lifestyle & Interests</b>
          - Here you can toggle off all the different settings you want to opt-out of. This is how you can limit/control how Snapchat and third-parties use information about you.
  - desc: Remove imported Contacts data
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Under <b>Additional services</b> select <b>Manage</b>
          - Select <b>Contacts</b>
          - Toggle off <b>Sync Contacts</b>
          - Lastly, press <b>Delete All Contacts data</b>
  - desc: Limit App Permissions (Clipboard & iOS Shortcuts)
    device:
      - name: app-only
        steps:
          - Go to <b>Settings</b>
          - Under <b>Additional services</b> select <b>Manage</b>
          - Select <b>Permissions</b>
          - Here you are able to disable Clipboard & iOS Shortcuts
  - desc: Download your data
    device:
      - name: browser-only
        steps:
          - Log into your account on <a href="https://accounts.snapchat.com">accounts.snapchat.com</a>
          - Click <b>My Data</b>
          - Click <b>Submit Request</b> at the bottom of the page
          - If you have verified an email address with Snapchat, they will send you an email with a link once your data is ready to download.
          - Follow the link in your email to download your data
          - Click the link to download your data
  - desc: Delete your account
    device:
      - name: browser-only
        steps:
          - Log into your account on <a href="http://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fdelete_account">accounts.snapchat.com/delete_account</a>
          - Follow the steps on screen

breaches:
  - name: 4.6 million usernames and phone numbers exposed
    url: https://www.troyhunt.com/searching-snapchat-data-breach-with/
    date: 2014-01-01

headlines:
  - name: Snapchat’s newest feature is also its biggest privacy threat
    url: https://www.theverge.com/2017/6/23/15864552/snapchat-snap-map-privacy-threat
    date: 2017-07-23
  - name: Snapchat Employees Abused Data Access to Spy on Users
    url: https://www.vice.com/en/article/xwnva7/snapchat-employees-abused-data-access-spy-on-users-snaplion
    date: 2019-05-23

collect: # What they collect
  - what: Account details
    how: When you sign up, you are required to provide your real name, email, phone number & date of birth.
  - what: Debit or credit card number
    how: If you purchase any of their paid services they store your debit or credit card number.
  - what: Snaps and messages (chat)
    how: >-
      Whenever you send a message via chat and/or message. This is deleted from their servers when the snap or message is opened or expired IF it's not saved by the recipeient in chat or snap memories.
  - what: Your usage
    how: >-
      Which filters you view and/or apply to snaps, which stories you watch on Discover, whether you use Spectacles and your search queries.
  - what: Your communications
    how: Timestamp, number of messages, which friends, message interactions, via your message and photo exchanges.
  - what: Device information
    how: Hardware model, operating system, device memory, advertising identifiers, apps installed, unique device identifiers, browser type, language, battery level and time zone.
  - what: Details from device sensors
    how: How fast your device is moving, via the accelerometers, rotation via gyroscopes, direction via compass, sound via microphones and if you have headphones connected.
  - what: Wireless and mobile network connections
    how: Via your phone number, service provider (ISP), IP address and signal strength.
  - what: Address book
    how: If you allow the Snapchat mobile app access to your address book.
  - what: Device photos
    how: In order to send or upload from your camera roll, Snapchat needs access to your camera and/or photos.
  - what: Location information
    how: With permission, they can collect precise location using GPS, wireless netoworks, cell towers, Wi-Fi access points, bluetooth, gyroscopes, accelerometers and compasses.

last_update: 2021-05-09
---
