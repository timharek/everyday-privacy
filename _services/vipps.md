---
name: Vipps
slug: vipps
logo: /assets/img/services/vipps/vipps.svg
owner: Vipps AS
tags:
  - Proprietary
  - Free
  - Banking
brief_desc: >-
  Vipps is a Norwegian mobile payment application. It's used by 75% of the
  Norwegian population.
desc: >-
  Vipps is a Norwegian mobile payment application. It's used by 75% of the
  Norwegian population.

security:
  - desc: Disable biometric login
    device:
      - name: app
        steps:
          - Go to <b>Profile</b> -> <b>Settings</b>
          - Tap "Code and Face ID (Touch ID etc.)"
          - Disable option for biometrics like Face ID, Touch ID or whatever
            biometric your phone provides.

privacy:
  - desc: Disable ads
    device:
      - name: app
        steps:
          - Go to <b>Profile</b> -> <b>Settings</b>
          - Disable both <b>Suggestions and offers from Vipps</b> and
            <b>Relevant ads through third party</b>.
  - desc: Hide bank balance
    device:
      - name: app
        steps:
          - Go to <b>Profile</b> -> <b>Account and cards</b>
          - Disable <b>Show account balance</b> for all  your cards.
  - desc: Revoke companies access to your information
    device:
      - name: app
        steps:
          - Go to <b>Profile</b> -> <b>Personal information</b>
          - Go to <b>Companies with access</b>
          - Remove those who are relevant
          - "Bonus: You can do the same for browsers"
  - desc: Delete your account
    device:
      - name: app
        steps:
          - Go to <b>Profile</b> -> <b>Personal information</b>
          - Scroll down
          - Tap "Delete your profile" and follow the steps

# breaches:
#   - name:
#       533 million Facebook users' phone numbers and personal data have been
#       leaked online
#     url: https://www.businessinsider.com/stolen-data-of-533-million-facebook-users-leaked-online-2021-4
#     date: 2021-04-03

headlines:
  - name: Vipps should allow usernames
    url: https://timharek.no/blog/vipps-should-allow-usernames/
    date: 2022-05-30

policy: https://www.vipps.no/vilkar/cookie-og-personvern/
collect: # What they collect
  - what: Personal information
    how:
      This is gathered when you create your account. You need to log in with
      your Norwegian national ID via BankID and provide a valid phone number
      that is assosiated with your national ID.
  - what: Your usage
    how:
      Whenever you use the app, to send and receive money and communicate with
      others. This is to prevent money laundering, financing terrorism and
      fraud.
  - what: Debit and/or credit card
    how:
      In order to send and receive money you must provide valid banking details
      assosiated with your card(s).
  - what: User behavior
    how:
      For customer relations (you), statistics, marketing, testing, improvement,
      security and preventing fraud and other punishable behaviour.
  - what: Your location
    how: To give you relevant stores etc. nearby.
  - what: Your contacts
    how: To easier look up your contacts (instead of typing their number).
  - what: Your photos and camera
    how:
      To take a profile picture, scan payment info like invoices, save invoices
      or add pictures to groups. Vipps saves all the photos you upload.
  - what: All transactions
    how:
      In order to make each transaction they store them indefiently and give
      them to your bank assosiated with the card that was used in the
      transaction.
last_update: 2022-06-04
---
