---
papersize: a4
title: Privacy and security project
subtitle: Z-INF
author: Tim Hårek Andreassen
date: 2021-04-20

geometry: margin=3cm
numbersections: true
toc: true
---

\newpage
# Introduction
<!-- TODO -->
The goal of this project is to educate everyday folks about online privacy and security, by securing their accounts and removing unnecessary data, and inform about which information is being collected.

# Website
<!-- TODO -->
<!-- Screenshot of frontpage -->
The website starts off by giving the user the ability to select which services they use, where the user are then taken to a separate page with a total overview of all the services the user selected. On this separate page, the user are then presented with steps to secure their account, steps to retake their privacy and an overview of what information each service collect. The services also display who owns each service, which has been added to make the user aware who actually owns the data the user provides them.

If there has recently been a breach or leak, there will be a notification alert under the navigation header letting the user know which service is affected and the date of when the news broke.

## Technologies & tools
<!-- TODO -->
The website is built with a static-site generator, Jekyll[^1], using HTML, SASS and JavaScript. There is no back-end, nothing is rendered from the server, everything the user sees is already generated and is only displayed by their browser. The data provided by the user is stored in `localStorage` in their browser and never sent to a server. Jekyll uses a template engine called Liquid[^3], which makes it possible to populate HTML and Markdown from data-files
instead of manually having to update values for each HTML or Markdown file.

SASS is a CSS post-processor[^2], that supports partials, nesting and much more. I chose to use this as it allows for more readability and sorting, since you are able to split up the CSS into different files, called partials, while it is only required to reference one main-stylesheet in HTML.

Jekyll has the ability to populate HTML and Markdown with data-files, stored as `JSON`, `YAML`, `CSV` or `TSV`. I chose to use `YAML` for the added benefit that it can often be easier to read and understand, as the syntax is based on colons, hyphens and indentations. All the different information about each service is stored in `_data/service/`, where each service has their own `YAML` file, this file is then being used to auto-generate a HTML-page from a layout-template. This
auto-generation is not built into Jekyll by default, and is provided by a plugin, `jekyll-datapage_gen`[^4].

There are three pages that are using data-files; the front page, the "My services" page and the overview of all services that the website has data on.

<!-- Add screenshot of mobile layout, maybe in a mockup -->
The website has been made to look good on both desktop and mobile, which is made possible with media-queries[^5] in CSS. The website scales dynamically based on the viewport of the user, making it more accessible for everyone to use. The information provided is identical, as the HTML-markup is not changed, only some properties of the CSS is changed to accommodate the viewport of the user.


## Why I chose the technologies & tools
The reason behind choosing these technologies and tools are simple: for a project of this scale and with a purpose like this, there is no reason to use any technology other than a static-site generator (you could also create everything manually with plain HTML). It could also be looked upon as contradicting to have a back-end handling all the data the user provides, as this would add the need to have a privacy policy stating how the information provided will/can be used.

As everything is stored in the browser, the user has the ability to remove their information whenever they want and they are the ones that are in control of their own data instead of a third-party. A added benefit of a static-site generator, is that the size of the website quite small (=>100kB), which makes it very fast and does not have to rely on having a fast hosting provider.


# Platforms/services 
<!-- TODO -->
I chose to use the most common and popular services, as these are well known and they can often be overlooked in terms of security and privacy, specifically Facebook products (Facebook, Messenger, Instagram and WhatsApp), Snapchat, LinkedIn and Signal. Some of them are social networks and some focus primarily on messaging.

<!-- Explain what each service is -->
Facebook products is owned and developed by Facebook Inc., which is a technology company that offers services in their social network ecosystem, i.e. Facebook, Instagram, WhatsApp and Oculus. This report will go into detail for Facebook products, specifically Facebook, Instagram and Messenger, as all of these share the same policy.
Snapchat is a social messaging application owned and developed by Snap Inc., which is camera company, they provide fast and fun ways to express yourself, live in the moment, learn about the world and have fun together. 
LinkedIn is a professional networking social network owned and developed by Microsoft Corporation.
Signal is a encrypted messaging services developed and owned by the non-profit organization Signal Foundation.


## Privacy policies
<!-- TODO -->
The purpose of a privacy policy is to disclose all of the different ways a company uses, discloses and manages a customer or client's data[^6]. Here I will go into what each of the policies say they collect and why they collect what they collect. 

<!-- sub-sectionize each service -->

### Snapchat (Snap Inc.)
Snapchat presents their policy in two ways, one that is easy to read, like a summary, and one more technical and detailed. Both of them cover the same material, but the technical version lets you know what they collect, why they collect it and who they share that information with. I will cover the more technical one, as it contains more information. The policy[^7] is divided into different sections, see \ref{appendix:snapchat_toc}.


#### Why they collect the data

As you can tell from the project-website, they collect a lot of different details about you. According to their policy, these details are collected in order provide you with a better service and to serve you targeted advertisements. They share their details with other users; business partners, third parties and the general public. Who they end up sharing the information with, depends on how you use the service. The Snapchat app is "constantly collecting and
updating information about the things you might like and dislike", so that they can provide you with more relevant content and advertisements. They mention that they are not responsible for how third parties collect and/or use your information. They delete the content whenever it is necessary, it depends on how you use the app, if you are under investigation or if you have save messages and/or photos in the app.


#### Who is in control of the data

They give you a quick rundown that you are the one in control over your information, you can request to download your own data, but the request can be denied if the request "risks the privacy of other users or is unlawful". You can limit the permission their app has, but this will also limit the app experience. You can modify your advertising preferences, but as mention earlier, they are "constantly collecting and updating information about the things you might like and dislike", so
updating your advertising preference will update itself later according to how you interact with the service. You can limit who can contact you, view your "Stories" etc. If you want to remove any other information, you have to request to delete your account.

It is explicitly mentioned that "Snap Inc. is the controller of your personal information". Depending on where you live you have varying rights of your own personal information. They justify this since their service is free, they can use some of your information to "try and show you ads you'll find interesting", and mention that this does not outweigh your right to privacy, they only use data that does not "significantly impact your privacy".


### Facebook products
<!-- TODO -->
Facebook presents their policy with a Data policy, where they disclose what information they collect. It is presented in a technical way, long paragraphs and detail heavy sentences. The policy[^8] is divided into multiple sections with more sub-sections, see \ref{appendix:fb_toc}.


#### Why they collect the data

As you may be able to tell, both from the project-website and the overview above, it is a lot of data. Same as Snapchat, according to their policy, these details are collected in order to provide you with a better service and to serve you target advertisements. Facebook connects your information across Facebook Products and devices, they use the information they have ("including your activity off our Products, such as the websites you visit and ads you see"). 
They also use the information they have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences. This is done in order to maintain their integrity, promote safety and security on and off their products. Information provided is use for research and innovation, for a social good, i.e. general social welfare, technological advancement, public interest, health and well-being.

#### How they share data

The section about "How is this information shared?" indicates that you are control of who you share your information with, if you want to disclose it to the following; `Public`, `Friends of friends`, `Friends only` and `Only me`. This is also true for what others might share about you, that is already available on Facebook Products.
If you chose to use/enable third-party integrations, such as apps and websites, they receive information about what you post and share.
If Facebook were to be acquired, they may transfer all your information to the new owner.
Facebook works with third-party partners, they help Facebook provide and improve their products, and Facebook helps the partners grow their business, which "makes it possible to operate our companies and provide free services to people around the world". In the same paragraph, they say "We don't sell any of information to anyone, and we never will". A contradicting statement when they explain in the subsection below that they provide their partners and advertisers with statistics and reports about user engagement. They do not share personally identifiable information, unless you have given them permission.


The Facebook companies/products share the same infrastructure, systems and technology. This means that they all share data between them, so that they can "provide an innovative, relevant, consistent and safe experience..." across all the products.

Reasoning behind all the collection and sharing mentioned earlier, is because; they need to fulfill their terms of service, comply with their legal obligations, protect your vital interest, or those of others, as necessary in the public interest and "as necessary for our legitimate interest, including our interest in providing an innovative, personalized, safe, and profitable service to our users and partners...".


#### Who is in control of the data

Facebook stores data "until it is no longer necessary to provide our services and Facebook products, or until your account is deleted - whichever comes first". <!-- Contradicting statement -->
You are able to delete data at any time, for example if you were to search something, you are able to delete that query at any time, but the log will be deleted automatically after 6 months. 
If you decide to delete your account, Facebook deletes "things" you have posted, such as photos and status updates. But information others have shared about you will not be deleted, like photos, address books with your details etc.

You are able to exercise your rights provided under the GDPR, which includes; right to access, rectify, port and erase your data. They provide simple instruction to simple view the settings for the different products, and also a link to a form where you can object to how their managing your data.


### WhatsApp

<!-- How they present their policy -->
WhatsApp presents their privacy policy[^14] in a straight forward way, everything is laid out with a natural language, but some parts may seem a bit technical when they mention how they share information with other Facebook products. Their policy is divided into multiple sections, see \ref{appendix:whatsapp_toc}.


#### Why they collect the data

As with both Snapchat and the other Facebook products mentioned earlier, they collect a bunch of different data from their users, as you are also able to see on the project website. But what is making WhatsApp stand out, is that the content in the messages, the primary way of using the application, is encrypted and the content is not readable by Facebook. 
WhatsApp collects data in order to "operate, improve, understand, customize, support and market..." their service. The types of data they collect may depend on the way you use their services. But if you choose not to provide the information required, you will be unable to access their services. They also collect data in order to connect your data with Facebook products that you may or may not use. 
As with other Facebook products, they also collect data in order to combat harmful conduct and protect users.


#### How they share data

They share data based on metadata from your messages, location, summaries keywords from the message, who you are communicating with, timestamps and other telemetry data like device information, like battery level etc. They share your interactions you have made with WhatsApp Businesses, it is not explicitly mentioned what kind of data businesses can and cannot share, but it is mentioned that it is supposed to be in accordance with applicable laws.

As with the other Facebook products, WhatsApp is no different when it comes to sharing among themselves, WhatsApp shares all the data they collect across all Facebook products. There is a whole separate section dedicated to how and why they share data among the Facebook products.

It is not explicitly mentioned how they share information with third-parties, but they mentioned multiple times that this is something that they do, and that they required them to do so in accordance with their instructions and terms.


#### Who is in control of the data

The word "*control*" is only mentioned twice in the whole privacy policy, the first being that you are in control of who you communicate with and the second being in the event of a merger, acquisition etc. of WhatsApp, the new successors/owners are entitled to your data. I assume this means that WhatsApp (or Facebook Inc.) is the one in control of your data as long as you decide to have an account.

When you delete your account, all account info, undelivered messages and message history is deleted from their servers.



### LinkedIn

<!-- How they present their policy -->
LinkedIn introduces us to the policy in different way than the others, they start of by showing an embedded YouTube video where they explain the privacy policy[^15] in a rather simple manner. The rest of the policy is presented in multiple section with detailed explanations for each section, see \ref{appendix:linkedin_toc}.


#### Why they collect data

As this is not mentioned or presented directly in the policy, it is insinuated multiple times that they collect data in order to provide you with a service where you can connect with colleagues, friends and other professionals in your field of work. Data is also collected in order to prevent security breaches, based on how they monitor the data and to give you relevant advertisements to grow their service.


#### How they share data

Most of your interactions on the service is shared among other members of the service, like posts, likes, follows, comments and messages. If your employer uses LinkedIn's enterprise service, your employer may be able to gather and share your data with your permission, which they can later monetize.

Other members and/or their employers can, for legal or professional reasons, archive their communications with you.

Other services that you have connected to your account may look up your profile and collect your personal and public data, this is possible to opt out of. But as you connect your account to other services, their own privacy policy apply in terms of how your data may be used.

Your personal data will be shared with LinkedIn's affiliates, they combine data internally across different services in order to be more relevant and useful to you and others.


#### Who is in control of the data

According to their policy, this will be dependent on where you are, if you are outside the "*Designated Countries*", LinkedIn Corporation will be the controller of your personal data. *Designated Countries* include the EU, EEA and Switzerland. If you live within the *Designated Countries*, LinkedIn Ireland Unlimited Company will be the controller of your personal data.

Most of your personal data is kept as long as your account is active, in order to provide you with the service. You have the right to access and control you personal data, as you are able to delete, change/correct, object to and right to access your data.
<!-- I like that they are very clear about this -->



### Signal

<!-- How they present their policy -->
Signal's privacy policy[^16] is something different than the others, as it is the shortest and gets straight to the point. The policy, as with the others, are divided into sections, see \ref{appendix:signal_toc}


#### Why they collect data

In order to use Signal, as with WhatsApp, you need to provide your phone number to create an account, the service will not work without it. They may collect you address book, with your permission, in order to tell you which ones of your contacts are on Signal, however, this information is encrypted and is not accessible by Signal themselves.


#### How they share data

The policy states that they "may" share information with third parties, like the ones who send verification codes when setting up your account, and third parties like YouTube, Spotify and Giphy if you share anything from these services within the application. Signal may also share data in order to accommodate legalities.


#### Who is in control of the data

You are the sole controller of your data, all your data is encrypted on Signal's servers, and this only includes your phone number, optionally a profile picture and status message, which is not accessible by Signal.



## Security and privacy settings

For both Snapchat and Facebook the steps needed in order to increase your accounts security and maintain you privacy are similar, but there are some difference.

In order to change any setting on Snapchat, it is required that you use the mobile application, you are not able to do so in a browser. For Facebook's products, Facebook, Messenger and Instagram, you are able to almost everything from the browser, but some settings are limited to the mobile applications. 
One example for this would be deleting all Location History data from Facebook, you are unable to delete this while accessing Facebook from the browser, even their Help-page explicitly say the option is only available on iOS and Android[^9].

### Security

A notable difference for which security options you have on Facebook that is not offered from Snapchat, is to verify where you are logged in. This could be beneficial if you were to borrow your someone's phone to check your Snapchat account and forgot to logout.

<!-- TODO add more -->


### Privacy

On both Facebook and Snapchat you are able to configure your advertisement settings. 
On Snapchat the settings are presented as how their partners can use information about you, both on and off Snapchat, they also have a separate setting where you are able to toggle different interests, so that Snapchat can serve you more personalised content and advertisements.
On Facebook's products , the settings are presented with _"common questions"_ as the introduction, which resolves about **"Does Facebook sell my data?"**, other than that you are able to manage how your data is being used for advertisements.
For Instagram, the settings are nearly identical to the ones on Facebook, but you are not given the option to limit advertisements off Instagram based on your data, which you are able to do on Facebook.

For all services, you are able to request your data to be downloaded in a human-readable format, like HTML.

#### Deleting your account

In order to delete your accounts, the steps for each service varies. For Snapchat and Instagram you cannot delete you account from the apps, but for Snapchat you can find the instructions via the app, which will take you to the correct web-page. But on Instagram's app there is no mention of the step, you either have to look it up online or login on via their website. For Facebook, you are able to delete your account via the browser or mobile app. Unexpectedly, both Facebook's and Instagram's guides suggest you download your data before deleting your
account, which Snapchat does not mention at all.
Also, it is not possible to delete your Messenger account without deleting your Facebook account. However, it is possible to deactivate your Facebook profile and still use Messenger, but it is not possible to have a Messenger account without an associated Facebook account.


# Breach/leaked data

Breach data, can both be an intentional or unintentional release of secure or private information to an untrusted environment[^10].
In the context of this report, we will focus on the potential dangers of having personal data exposed online, and with personal data, this includes; name, date of birth, address, phone number(s), friends and family, political views, religion etc.

Both Facebook's products and Snapchat has both been victims to having data about their users released online, unintentionally. Facebook has had much more of a spotlight in this regard, because of their extremely large user base, with 2.8 billion monthly active users[^11]. Also because of how mainstream media picked up the story about the Cambridge Analytica data scandal, where 50 million peoples data was harvested[^12].
For Snapchat, they have not had a lot of data breaches except for December 2013 when 4.6 million Snapchat usernames and phone numbers were made publically available on snapchatdb.info[^13].


## Potential attacks
<!-- TODO -->

There are potential attacks that are possible with just a few bits of data associated to a name, here we will go through some of the more common attacks that are possible and that you should be aware of and how you could prevent it.

### SMS Two-Factor Authentication

By using SMS as a two-factor authentication method, you are vulnerable to social engineering and identity theft attacks. If your phone number and password were leaked alongside your username for a given service, they could potentially contact you via phone, email or social media impersonating the given service to try to get your two-factor authentication code. But, a scary scenario, would be that they try to try impersonate you while contacting your phone number's carrier in order
to get a new SIM-card they could control in your name. Then they would be able to get the same two-factor code as you and login.

### Phishing attacks

Your email provider is most likely able to detect some of the more common phishing attacks methods, but your phone number is not. Like the previous example, if your phone number were leaked alongside your username for a given service, they could try to get you to provide them with credentials for the given and/or other services while they impersonate someone they are not.

An example for this could be an older person, where their phone number were leaked along with their age, confirming for the attacker that this is an older person, which may not be tech savvy. Then the attacker could send this person an survey where they ask them which services they use, and if the victim answers this survey of the more common phishing attacks methods, but your phone number is not. Like the previous example, if your phone number were leaked alongside your username for a
given service, they could try to get you to provide them with credentials for the given and/or other services while they impersonate someone they are not.

An example for this could be an older person, where their phone number were leaked along with their age, confirming for the attacker that this is an older person, which may not be tech savvy. Then the attacker could send this person an survey where they ask them which services they use. If the victim answers this survey, the attacker could call them an impersonate for example their bank in order to try to get their banking details.


# Discussions
<!-- Brief overview of what I'm going to discuss -->

## Privacy policies
<!-- TODO -->

## Security and privacy settings
<!-- TODO -->

## Why data leaks matters <!-- TODO -->
<!-- TODO -->

# Conclusion
<!-- TODO -->

# Future work
<!-- TODO -->

\newpage
\appendix
# Appendix

## Snapchat's privacy policy \label{appendix:snapchat_toc}

- Information We Collect 
    - Information You Provide
    - Information we get when you use our services
    - Information we get from third parties
- How We Use Information 
- How We Share Information 
- Third-Party Content and Integrations
- How Long We Keep Your Information"
- Control Over Your Information
- Users in the European Union
- Users in Brazil
- Users in Mexico
- California Residents
- Children
- Revisions to the Privacy Policy

## Facebook data policy table of contents \label{appendix:fb_toc}

- Things you and others do and provide
    - Information and content you provide
    - Networks and connections
    - Your usage
    - Information about transactions made on our Products
    - Things others do and information they provide about you
- Device information
    - Device attributes
    - Device operations
    - Identifiers
    - Device signals
    - Cookie data
- Information from partners
- How do we use this information?
    - Provide, personalize and improve our Products
        - Information across Facebook Products and devices
        - Location-related information
        - Product research and development
        - Face recognition
        - Ads and other sponsored content
    - Provide measurement, analytics, and other business services
    - Promote safety, integrity and security
    - Communicate with you
    - Research and innovate for social good
- How is this information shared?
    - Sharing on Facebook Products
        - People and accounts you share and communicate with
        - Public information
        - Content others share or reshare about you
        - Information about your active status or presence on our Products
        - Apps, websites, and third-party integrations on or using our Products
        - New owner
    - Sharing with Third-Party partners
        - Partners who use our analytics services
        - Advertisers
        - Measurement partners
        - Partners offering goods and services in our Products
        - Vendors and service providers
        - Researchers and academics
        - Law enforcement or legal requests
- How do the Facebook Companies work together?
- What is our legal basis for processing data?
- How can you exercise your rights provided under the GDPR?
- Data retention, account deactivation and deletion
- How do we respond to legal requests or prevent harm?
- How do we operate and transfer data as part of our global services?
- How will we notify you of changes to this policy?
- How to contact Facebook with questions


## WhatsApp's Privacy Policy table of contents \label{appendix:whatsapp_toc}

- WhatsApp Legal Info
- Information We Collect
    - Information You Provide
        - Your account information
        - Your messages
        - Your connections
        - Status information
        - Transactions and payments data
        - Customer support and other communications
    - Automatically Collected Information
        - Usage and log information
        - Device and connection information
        - Location information
        - Cookies
- Third-Party Information
    - Information Other provide about you
    - User reports
    - Businesses on WhatsApp
    - Third-Party Service Providers
    - Third-Party services
- How We Use Information
    - Our services
    - Safety, security and integrity
    - Communication about our services and the Facebook Companies
    - No third-party banner ads
    - Business interactions
- Information You and We Share
- How We Work With other Facebook Companies
- Assignment, Change of control, and transfer
- Managing and Retaining Your Information
- Law, Our Rights, and Protection
- Our Global Operations
- Updates to Our Policy
- California Consumer Privacy Act
- Brazilian General Data Protection Law
- Contact Us

## LinkedIn's Privacy Policy table of contents \label{appendix:linkedin_toc}

- Introduction
    - Services
    - Data Controllers and Contracting Parties
    - Change
- Data We Collect
    - Data You Provide To Us
        - Registration
        - Profile
        - Posting and Uploading
    - Data From Others
        - Content and News
        - Contact and Calendar Information
        - Partners
        - Related Companies and Other Services
    - Service Use
    - Cookies and Similar Technologies
    - Your Device and Location
    - Messages
    - Workplace and School Provided Information
    - Sites and Services of Others
    - Other
- How We Use Your Data
    - Services
        - Stay connected
        - Stay informed
        - Career
        - Productivity
    - Premium Services
    - Communications
    - Advertising
        - Ad Choices
        - Info to Ad Providers
    - Marketing
    - Developing Services and Research
        - Service Development
        - Other Research
        - Surveys
    - Customer Support
    - Insights That Do Not Identify You
    - Security and Investigations
- How We Share Information
    - Our Services
        - Profile
        - Posts, Likes, Follows, Comments, Messages
        - Enterprise Accounts
    - Communication Archival
    - Other' Services
    - Related Services
    - Service Providers
    - Legal Disclosures
    - Change in Control or Sale
- Your Choices & Obligations
    - Data Retention
    - Rights to Access and Control Your Personal Data
    - Account Closure
- Other Important Information
    - Security
    - Cross-Border Data Transfers
    - Lawful Bases for Processing
    - Direct Marketing and Do Not Track Signals
    - Contact Information

## Signal's Privacy policy table of contents \label{appendix:signal_toc}

- Information you provide
    - Account information
    - Messages
    - Contacts
    - User support
    - Managing your information
- Information we may share
    - Third Parties
    - Other instances where Signal may need to share your data
- Updates
- Terms
- Contact Us


[^1]: Jekyll: https://jekyllrb.com/
[^2]: SASS: https://sass-lang.com/
[^3]: Liquid: https://github.com/Shopify/liquid/wiki
[^4]: `jekyll-datapage_gen`: https://github.com/avillafiorita/jekyll-datapage_gen
[^5]: CSS Media queries: https://www.w3schools.com/Css/css3_mediaqueries_ex.asp
[^6]: Privacy policy: https://en.wikipedia.org/wiki/Privacy_policy
[^7]: Snapchat's privacy policy: https://snap.com/en-US/privacy/privacy-policy
[^8]: Facebook's data policy: https://www.facebook.com/about/privacy/ 
[^9]: Facebook Help - Manage Location History: https://www.facebook.com/help/340945230067368
[^10]: Data breach - Wikipedia: https://en.wikipedia.org/wiki/Data_breach
[^11]: Facebook - Inverstors report: https://investor.fb.com/investor-news/press-release-details/2021/Facebook-Reports-Fourth-Quarter-and-Full-Year-2020-Results/default.aspx
[^12]: Facebook's privacy problems: a roundup: https://www.theguardian.com/technology/2018/dec/14/facebook-privacy-problems-roundup
[^13]: Searching the Snapchat data breach: https://www.troyhunt.com/searching-snapchat-data-breach-with/
[^14]: WhatsApp privacy policy: https://www.whatsapp.com/legal/updates/privacy-policy/
[^15]: LinkedIn privacy policy: https://www.linkedin.com/legal/privacy-policy
[^16]: Signal privacy policy: https://signal.org/legal/
