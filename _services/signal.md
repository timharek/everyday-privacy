---
name: Signal
slug: signal
logo: /assets/img/services/signal.svg
owner: Signal Technology Foundation
recent_breach:
tags:
  - Open Source
  - Free
  - Messaging
desc: >-
  Cross-platform centralized encrypted messaging service, developed by a non-profit organization.

headlines:
  - name: Signal brings painless encrypted calling to iOS
    url: https://www.theverge.com/2014/7/29/5945547/signal-brings-painless-encrypted-calling-whisper-systems-moxie-marlinspike
    date: 2014-07-29
  - name: The Difficulty Of Private Contact Discovery
    url: https://signal.org/blog/contact-discovery/
    date: 2014-01-03
  - name: "No, Cellebrite cannot 'break Signal encryption.'"
    url: https://www.signal.org/blog/cellebrite-and-clickbait/
    date: 2020-12-23

policy: https://signal.org/legal/
collect: # What they collect
  - what: Your phone number
    how: When registering, you are unable to sign up for Signal without a phone number.
  - what: Your contacts (optional)
    how: If you share your address book you will be able to see who in your address book is on Signal. This data is transmitted cryptographically to their servers.

security:
  - desc: Add/change PIN
    device:
      - name: app-only
        steps:
          - Tap on your profile in the top left
          - Go to <b>Account</b>
          - Select <b>Change PIN</b>
  - desc: Verify Linked Devices
    device:
      - name: app-only
        steps:
          - Tap on your profile in the top left
          - Go to <b>Linked Devices</b>
          - Verify that you know these devices, delete those you do not know or need anymore

privacy:
  - desc: Revoke access to address book (contacts)
    device:
      - name: app-only
        steps:
          - Go to your device settings and look for Signal
          - Un-toggle Signal's access to your <b>Contacts</b>

last_update: 2021-05-16
---
