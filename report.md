---
papersize: a4
title: Privacy and security project
subtitle: Z-INF
author: Tim Hårek Andreassen
date: 2021-04-20

numbersections: true
---
# Introduction
<!-- TODO -->
The goal of this project is to educate everyday folks about online privacy and security, by securing their accounts and removing unnecessary data, and show what information is being collected.

# Website
<!-- TODO -->
<!-- Screenshot of frontpage -->
The website starts off by giving the user the ability to select which services they use, where the user are then taken to a separate page with a total overview of all the services the user selected. On this separate page, the user are then presented with steps to secure their account, steps to retake their privacy and what information each service collect. The services also display who owns each service, which has been added to make the user aware who actually owns the data the user provides them.

If there has recently been a breach or leak, there will be a notification alert under the navigation header letting the user know which service is affected and the date of when the news broke.

## Technologies & tools
<!-- TODO -->
The website is built with a static-site generator, Jekyll[^1], using HTML, SASS and JavaScript. There is no back-end, nothing is rendered from the server, everything the user sees is already generated and is only displayed by their browser. The data provided by the user is stored in `localStorage` in their browser and never sent to a server. Jekyll uses a template engine called Liquid[^3], which makes it possible to populate HTML and Markdown from data-files
instead of manually having to update values for each HTML or Markdown file.

SASS[^2] is a CSS post-processor, that supports partials, nesting and much more. I chose to use this as it allows for more readability and sorting, since you can now split up the CSS into different files, called partials, while it is only required to reference one main-stylesheet in HTML.

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
I chose to use the most common and popular services, as these are well known and they can often be overlooked in terms of security and privacy, specifically Facebook products and Snapchat, or even more specifically Facebook Inc. and Snap Inc. They are all social networks, and function in different ways.

<!-- Explain what each service is -->
Snap Inc. is camera company, they provide fast and fun ways to express yourself, live in the moment, learn about the world and have fun together. 
Facebook Inc. is a technology company that offers services in their social network ecosystem, i.e. Facebook, Instagram, WhatsApp and Oculus. This report will go into detail for Facebook products, specifically Facebook, Instagram and Messenger, as all of these share the same policy.

Disclaimer: The project-website has more than these services, they are more a proof of concept in order to show what the website would look like with information from all of the services.

## Privacy policies
<!-- TODO -->
The purpose of a privacy policy is to disclose all of the different ways a company uses, discloses and manages a customer or client's data[^6]. Here I will go into what each of the policies say they collect and why they collect what they collect. 

<!-- sub-sectionize each service -->

### Snapchat (Snap Inc.)
Snapchat presents their policy in two ways, one that is easy to read, like a summary, and one more technical and detailed. Both of them cover the same material, but the technical version lets you know what they collect, why they collect it and who they share that information with. I will cover the more technical one, as it contains more information.

The policy is divided into different sections;


- "Information We Collect", 
- "How We Use Information", 
- "How We Share Information", 
- "Third-Party Content and Integrations", 
- "How Long We Keep Your Information", 
- "Control Over Your Information"
- And users in different parts of the world, EU, Brazil, Mexico and California



As you can tell from the project-website, they collect a lot of different details about you. According to their policy, these details are collected in order provide you with a better service and to serve you targeted advertisements. They share their details with other users; business partners, third parties and the general public. Who they end up sharing the information with, depends on how you use the service. The Snapchat app is "constantly collecting and
updating information about the things you might like and dislike", so that they can provide you with more relevant content and advertisements. They mention that they are not responsible for how third parties collect and/or use your information. They delete the content whenever it is necessary, it depends on how you use the app, if you are under investigation or if you have save messages and/or photos in the app.

They give you a quick rundown that you are the one in control over your information, you can request to download your own data, but the request can be denied if the request "risks the privacy of other users or is unlawful". You can limit the permission their app has, but this will also limit the app experience. You can modify your advertising preferences, but as mention earlier, they are "constantly collecting and updating information about the things you might like and dislike", so
updating your advertising preference will update itself later according to how you interact with the service. You can limit who can contact you, view your "Stories" etc. If you want to remove any other information, you have to request to delete your account.

It is explicitly mentioned that "Snap Inc. is the controller of your personal information". Depending on where you live you have varying rights of your own personal information. They justify since their service is free, they can use some of your information to "try and show you ads you'll find interesting", and mention that this does not outweigh your right to privacy, they only use data that does not "significantly impact your privacy".

### Facebook products
<!-- TODO -->
Facebook presents their policy with a Data policy, where they disclose what information they collect. It is presented in a technical way, long paragraphs and detail heavy sentences.

The policy is divided into different sections with more sub-sections;


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



As you may be able to tell, both from the project-website and the overview above, it is a lot of data. Same as Snapchat, according to their policy, these details are collected in order to provide you with a better service and to serve you target advertisements. Facebook connects your information across Facebook Products and devices, they use the information they have ("including your activity off our Products, such as the websites you visit and ads you see"). 
They also use the information they have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences. This is done in order to maintain their integrity, promote safety and security on and off their products. Information provided is use for research and innovation, for a social good, i.e. general social welfare, technological advancement, public interest, health and well-being.


The section about "How is this information shared?" indicates that you are control of who you share your information with, if you want to disclose it to the following; `Public`, `Friends of friends`, `Friends only` and `Only me`. This is also true for what others might share about you, that is already available on Facebook Products.
If you chose to use/enable third-party integrations, such as apps and websites, they receive information about what you post and share.
If Facebook were to be acquired, they may transfer all your information to the new owner.
Facebook works with third-party partners, they help Facebook provide and improve their products, and Facebook helps the partners grow their business, which "makes it possible to operate our companies and provide free services to people around the world". In the same paragraph, they say "We don't sell any of information to anyone, and we never will". A contradicting statement when they explain in the subsection below that they provide their partners and advertisers with statistics and reports about user engagement. They do not share personally identifiable information, unless you have given them permission.


The Facebook companies/products share the same infrastructure, systems and technology. This means that they all share data between them, so that they can "provide an innovative, relevant, consistent and safe experience..." across all the products.

Reasoning behind all the collection and sharing mentioned above, is because; they need to fulfill their terms of service, comply with their legal obligations, protect your vital interest, or those of others, as necessary in the public interest and "as necessary for our legitimate interest, including our interest in providing an innovative, personalized, safe, and profitable service to our users and partners...".


You are able to exercise your rights provided under the GDPR, which includes; right to access, rectify, port and erase your data. They provide simple instruction to simple view the settings for the different products, and also a link to a form where you can object to how their managing your data.


Facebook stores data "until it is no longer necessary to provide our services and Facebook products, or until your account is deleted - whichever comes first". <!-- Contradicting statement -->
You are able to delete data at any time, for example if you were to search something, you are able to delete that query at any time, but the log will be deleted automatically after 6 months. 
If you decide to delete your account, Facebook deletes "things" you have posted, such as photos and status updates. But information others have shared about you will not be deleted.

## Security and privacy settings
<!-- TODO -->

# Breach/leaked data
<!-- TODO -->

## Potential attacks
<!-- TODO -->

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

# Appendix
<!-- Include full TOC for services to give an understanding of how much data is collected -->


[^1]: Jekyll: https://jekyllrb.com/
[^2]: SASS: https://sass-lang.com/
[^3]: Liquid: https://github.com/Shopify/liquid/wiki
[^4]: `jekyll-datapage_gen`: https://github.com/avillafiorita/jekyll-datapage_gen
[^5]: CSS Media queries: https://www.w3schools.com/Css/css3_mediaqueries_ex.asp
[^6]: Privacy policy: https://en.wikipedia.org/wiki/Privacy_policy
