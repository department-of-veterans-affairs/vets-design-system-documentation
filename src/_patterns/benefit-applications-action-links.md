---
layout: default
title: Benefit applications
draft: true
anchors:
  - anchor: Eligibility
  - anchor: How to apply
  - anchor: Apply now
  - anchor: After you apply
---

# Benefit applications

<p class="va-introtext">Benefit applications are where users can go to apply for benefits in any of the benefit hubs on VA.gov. The policies and regulations around these benefits are very complex, and users often have difficulty determining if they are eligible, what they need to provide, and what to expect after they've submitted their application. For this reason, benefit applications, as a pattern, are divided into four distinct "epics" that help users navigate the process from start to finish.</p>

The four epics typically found within each benefit application are:

1. [Eligibility](#eligibility)
2. [How to apply](#how-to-apply)
3. [Apply now](#application-introduction-apply-page)
4. [After you apply](#after-you-apply)

Structuring benefit applications in this way has, through rigorous usability testing, demonstrably improved how to educate users about the benefits and how to set expectations about the application process. For the Department of Veterans Affairs, this means that applications are more accurate and complete, so the Department to better serves its constituents.

## Eligibility

For Veterans, determining whether or not they (or their beneficiaries) are eligible for a specific benefit is a difficult process. The policies governing those benefits can be complex, fraught with dependencies and variations that can be overwhelming.

The associated pattern of content and functionality designed to help users of the website understand their eligibility, therefore, needs to accomplish a few things which can seem at odds with one another. Manifested as a single page, it should:
* Provide a simple introduction to eligibility rules that covers the most common scenarios.
* Scale (expand) to represent variations in complexity.
* Prevent users from going to the wrong form.
* Provide the ability to announce changes in the law or availability of benefits that may impact their eligibility.
* Provide space to connect users to benefits that are likely to be related to their question about the benefit they are viewing.
* Guide users to the next logical step in determining their eligibility, ultimately concluding getting them to the proper benefit application.

### Eligibility hierarchy
The hierarchy of the eligibility pattern allows it to be flexible enough to cover simple or complex benefit eligibility information while still feeling straightforward and easy to follow. Generally, the eligibility pattern manifests itself as a single web page. It sits within a benefits hub based upon the following rules:

* For benefits hubs with a single benefit (such as [Health care](https://www.va.gov/health-care)), we link to a separate [Eligibility](https://www.va.gov/health-care/eligibility/) page as well as [How to apply](https://www.va.gov/health-care/how-to-apply) page from the hub landing page.
* For benefits hubs with multiple benefits (like [Life insurance](https://www.va.gov/life-insurance/)), we link to the [main options/Eligibility](https://www.va.gov/life-insurance/options-eligibility/) page from the hub landing page. From this page, the user can choose the option for which they want to explore their eligibility.
* For a benefits hub where there is only a single benefit available, such as [Veteran's Pension](https://www.va.gov/pension/), we link directly to the [Eligibility](https://www.va.gov/pension/eligibility/) and page for that benefit from the hub landing page. We also link to pages for other, related benefits (Aid and Attendance, and Survivors Pension) from the hub.

The eligibility page consists of the following elements:

![eligibility_page_heirarchy](/images/eligibility_page_heirarchy.png)

#### A. Title and statement of intent
The title should be “Eligibility for (Most Commonly Used Benefit Name).” The statement of intent should state the job the page will do for the user, by stating something like “Find out if you are eligible for (most commonly requested benefits, described in plain language). This allows a user to quickly assess if they are in the right place, and it helps search engines highly rank these pages for appropriate searches.

#### B. Critically important information (most common scenario)

The featured content component is used to present the user with the most commonly sought benefit eligibility scenario. Some benefits are complex and contain several optional paths to confirmation. It is not acceptable to repeat this element on the page; instead use the Additional eligibility information &amp; scenarios element for other variations. Note: please do not use this pattern more than one time on the page as it decreases its effectiveness at drawing the eye to the most likely sought content.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
  <p>Use a single featured component for the most common scenario.</p>
![eligibility_page_heirarchy](/images/featured-content-do.png) 
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
<p>Use two or more featured components for multiple scenarios, because there can't be more than one that is the most common. Use other page elements for this purpose.</p>
![eligibility_page_heirarchy](/images/featured-content-dont.png) 
</div>
</div>
</div>

[View the featured content component](https://design.va.gov/components/featured-content).

#### C. Additional eligibility information &amp; scenarios

Benefit eligibility or requirements information that is more nuanced than the summary placed inside the Common scenario overview (featured content component), including different requirements for sub-audiences, application assistance, etc.  Group prerequisites logically by benefit type, and order benefit types from most common to less common.

![eligibility_prerequisites](https://user-images.githubusercontent.com/50150810/58469821-3a6ec380-8138-11e9-85bf-0bd2f6292aec.png)

#### D. Optional: Eligibility change announcement

When time sensitive content about a benefit — such as a new benefit being made available or a significant change in the laws around eligibility for a particular benefit — you can place an informational alert box on this page. Follow the recommendations governing alert box usage, including
* Use informational alerts to announce upcoming benefits
* Use informational alert boxes with expandable content to hide detail that may not apply to everyone visiting the page

[View the alert box component](https://design.va.gov/components/alertboxes).

#### E. How to apply heading and primary call-to-action button or action link

A brief heading should precede and call attention to the primary call to action button or action link. This heading can be followed by an optional single sentence of text or phrase if necessary.

If your page has a wizard, use a primary green button. We reserve primary green buttons for those actions that trigger on the page, in this case a wizard mini-form interface allowing the user to self-select into (or out of) the appropriate benefit form.

If the page does not have a wizard and you want to direct your user to the application flow. Use a primary green action link. This action link is a visually prominent link that will bring the user to another page. 

Having a single green button or action link on the page helps the user follow the most logical path. Note: never put more than one green button or action link on the page. If you have a page that requires multiple benefit form links, use the wizard mini-form interface to create branching logic to get the correct benefit application (or prevent a user from applying to the wrong benefit).

The button or action link can be followed by item 6, Additional Benefit-Eligibility-Specific Relevant Content, if necessary.

[View the button component](https://design.va.gov/components/buttons).

[View the action link component](https://design.va.gov/components/action-links).


##### F.Optional: Wizard pattern for branching eligibility choices

In the case where there are multiple benefit options, the [Wizard pattern](https://design.va.gov/patterns/wizards) allows a user to branch into the appropriate benefit application from the eligibility page.

The text on the primary green button should represent the job the wizard is performing, such as “Find your education benefits form.”

#### G. Optional: Additional benefit-eligibility-specific relevant content

Any additional content necessary that is connected to the primary benefit eligibility use case for the page can be added here.

#### H. Optional: Benefit eligibility frequently asked questions

Use the accordion component to present questions that are common about eligibility for a benefit.

[View the accordion component](https://design.va.gov/components/accordions).

#### I. Optional: Related benefits content

Any additional benefits (e.g. vocational benefits eligibility that is related to education benefit eligibility) can be added to the bottom of the page using the RELATED PAGES component.

## How to apply

This is a high-level description of the “How to apply” page for benefit applications. The content recommended for the “How to apply” page may overlap with the “Eligibility” or “Apply now” sections.

### Page title
The page title should be “How to apply for (Most Commonly Used Benefit Name).”

### Introduction
The introduction describes what the page is about. For the “How to apply” page, the introduction text includes the following:
* The benefit(s) the application is for
* The type(s) of users the application is aimed at (Veteran, service member, qualified family member)
* A link back to the Eligiblity page to send users to the Eligibility page to ensure they're eligible for benefit
* SEO keywords (See [Writing for SEO](https://design.va.gov/content-style-guide/seo).)

### Preparing to apply (informational callout)
On the “How to apply” page, use the [informational callout](https://design.va.gov/patterns/content-presentation) box to present chunked, scannable snippets of critical information needed by the majority of applicants. For example,

* Describe what a user needs to do before they begin the application
* List items needed to complete the application (SSN, military history, etc.). Required items should be called out.

Note: The blue [informational callout](https://design.va.gov/patterns/content-presentation) box should only be used for the most important information on the page. Since it includes critical information, the callout should appear near the top of the page.

### How do I apply?
The “How do I apply" section lists possible application methods. It should emphasize the optimal path for Veterans, (which may be how to get help from a human instead of online help.) Some common application methods are:
* Online
   * Green CTA button
   The button will lead the user/applicant to one of two places: either the application flow for the benefit or a wizard mini-form interface allowing the user to self-select into (or out of) the appropriate benefit form.

**Note:** never put more than one green button on the page. If you have a page that requires multiple benefit form links, use the wizard mini-form interface to create branching logic to get the correct benefit application (or prevent a user from applying to the wrong benefit).   
   
* By mail
   * Link to the printable application form
   * Instructions for mailing the completed, printed form
* In person
   * Link to find nearest VA regional office
* With the help of a trained professional
   * Link to get help

### What happens after I apply?
The “What happens after I apply” section sets the user’s expectations about what will happen next in the application process. This section may include:

* Concise content or a link to a page describing what the user can expect after they apply
* A call to action (primary blue button) that allows the user to track the status of their application
* A card that sets the user’s expectation for how long it takes to receive a response

### Optional: More information
Include the “More information section” if there is helpful supporting information about applying for the benefit.
* For many short content items, consider using the accordion component to reduce the content on the page.
* For longer content items, consider linking to a separate page.

### Live page examples
* [How to apply for VA health care](https://www.va.gov/health-care/how-to-apply/)
* [How to file a VA disability claim](https://www.va.gov/disability/how-to-file-claim/)
* [How to apply for the GI Bill and other education benefits](https://www.va.gov/education/how-to-apply/)
* [How to apply for a VA pension as a Veteran](https://www.va.gov/pension/how-to-apply/)

## Apply now

The "Apply" page is the start of the react app and indicates the beginning of the form. It isn't a static page. 
This page is separate from the static "How to apply" page, and repeats some eligiblity and how to apply information in case users navigate to this page from somewhere outside of VA.gov. 

### Page title
The page title should be: "Apply for [benefit type]". For Disability, the page header should be "File for disability compensation" 

Under the page header is the VA paper form equivalency. This shows the equivalent VA paper form that the online application corresponds to. <br>
For example: *Equal to VA Form 21-526EZ (Application for Disability Compensation and Related Compensation Benefits).*

### Sign-in message
At the top of the introduction page, is a sign in message. There are two different messages depending if a user is signed in or if the user isn't signed in to their account. 

**Message when a user isn't signed in:**
- Lets applicants know that by signing in some information from their profile account could be prefilled into the application and that they can save their work as they go.  
- Gives time on how long the application will be saved for
- Blue CTA button *Sign in to start your application*
- Link to fill out the application without signing in. (For all online applications except for Disability Compensation)

![how-to-apply_unauth-message](/images/benefit-apps-unauth-message.png)

**Message when a user is signed in:**
- Lets applicant know they are signed in and can save their work as they go
- Primary (green) action link 

![how-to-apply_unauth-message](/images/benefit-apps-action-link.png)

### Subway map
[Subway or process map](https://design.va.gov/components/process-list) shows the steps the users needs to take to apply for a benefit. The headings are action words, short and concise, and consistent across forms.

**Prepare**
- Gives the applicant the information they’ll need to fill out the form, such as if they need to submit any documentation or provide their SSN, bank information, military history, spouse information, etc.
- Items that are optional are called out.

**Apply**

We use the same language for this step across all forms:

*Complete this [benefits] form. After submitting the form, you’ll get a confirmation message. You can print this page for your records.*

*What if I need help filling out my application? An accredited representative, like a Veterans Service Officer (VSO), can help you fill out your claim.* <br>
[Get help filing your claim]

**VA review**

The step tells applicants how much time it takes VA to review the application. The content under this heading depends on what type of benefit they're applying for. For example:

- For Health Care form, the message is: *We process health care claims within a week.* <br>
- For Education forms, the message is: *We usually process claims within 30 days. We’ll let you know by mail if we need more information.* <br>
- For Disability Comp form, the message is: *We process applications in the order we receive them. We may contact you if we have questions or need more information.  The amount of time it takes to review your claim depends on:*

  * xxxyxlxlx
  * xxxyxlxlx
  *

**VA decision**

This step sets the user’s expectation for when they will receive a response. It tells applicants how and when they will be informed of the status of their application (if denied or approved).

### OMB information
This appears at the bottom of the Apply page and shows:
- Respondent burden
- OMB control number
- Privacy act link

### Need help?
This footer appears on the bottom of every page of the form. It includes phone numbers if an applicant needs more support or has questions about filling out the form.

### Optional: Other components on the Apply page
Depending on the type of benefit, an [alert box](https://design.va.gov/components/alertboxes) is sometimes included with specific inforomation or detail about that benefit.

This is an optional component and should only be used if there is an important benefit or application process to call out to the applicant.  

![apply-now-alert-box](/images/apply-now-alert-box.png)

### Live page examples
[File for disability compensation introduction page](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)<br>
[Apply for education benefits introduction page](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction)<br>
[Apply for Pre-need eligiblity introduction page](https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction) <br>
[Apply for Veterans pension introduction page](https://www.va.gov/pension/application/527EZ/introduction)


## After you apply
This is a high-level description of the “After you apply” page for benefit application.

### Page title
The page title should be: "After you apply for (Most Commonly Used Benefit Name)."

### Introduction
The introduction describes what will happen next in the application process after an applicant submits an application. This section may include:
* What an applicant needs to do after they submit their application.
* SEO keywords (See [Writing for SEO](https://design.va.gov/content-style-guide/seo).)

### When will I hear back about my application?
This section appears as card or [gray alert box](https://design.va.gov/components/alertboxes) that sets the user’s expectation for how long it takes to receive a response, and includes:
* Content or a link to a page describing what the user can expect after they apply
* Time frame for how long it takes to receive a response

**Health care:** 

![after-you-apply-health-care](/images/after-you-apply-health-care-decision.png)

**Education:** 

![after-you-apply-edu](/images/after-you-apply-edu-decision.png)

**Disability compensation:** 

![after-you-apply-disability](/images/after-you-apply-disability-decision.png)


### Optional: Other components on the "After you apply" page

Below is a list of optional components that appear on the "After you apply" page. 

### Subway process map

[View the subway map component](https://design.va.gov/components/process-list).

**Health care:**
![after-you-apply-subway-map](/images/after-you-apply-subway-map.png)

### Accordions

[View the accordion component](https://design.va.gov/components/accordions).

**Health care:**

![after-you-apply-accordions](/images/after-you-apply-accordions.png)

### Call-to-action button

[View the button component](https://design.va.gov/components/buttons).

**Disability compensation:**

![after-you-apply-cta-button](/images/after-you-apply-cta-button.png)
