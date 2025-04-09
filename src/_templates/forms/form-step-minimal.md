---
layout: pattern
permalink: /templates/forms/form-step-minimal
has-parent: /templates/forms/
title: Form Step - Minimal
status: use-with-caution-available
intro-text: Use the form step - minimal template to create all pages of a minimal form flow except for the introduction, review, and confirmation pages.
figma-link: https://www.figma.com/design/WzqnYSC2B42aFaSCu7L3Dk/Minimal-Form-Flow-Template?node-id=1-114658&p=f&t=yvI1hQv6TghandYK-11
anchors:
  - anchor: About
  - anchor: Usage
  - anchor: Structure
  - anchor: Research findings
  - anchor: Code considerations
---

## About

This template is for all internal pages of a digitized form that asks Veterans to enter information, select an option, or upload supporting documents. 
The form page template uses the minimal header and footer components in a form flow. The header and footer are simpler and don’t show navigation elements. This frees up space on the page and allows the form submitter to focus on the task

We display the [plain language form name](https://design.va.gov/templates/forms/introduction#title-subtitle-and-intro) in the minimal header without any heading structure. The plain language form name should match what is on the introduction page.

Use the H1 of the question page to describe the information needed or ask the specific question on the form page.

### Examples
There are two versions of the form page template: 
- Authenticated
- Unauthenticated

#### Example - Authenticated

{% include component-example.html alt="An example of a form step page for authenticated users." file="/images/templates/forms/minimal-form-step/1-example-auth.png" caption="Anatomy of the form step template for authenticated users." class="x2" %}


The authenticated form page template consists of:
1. [Minimal header](https://design.va.gov/components/header/header-minimal) with form title & subtitle
2. [Back link](https://design.va.gov/components/link/#when-to-use-a-back-link)
3. [Progress bar - segmented with step label](https://design.va.gov/components/form/progress-bar-segmented)
4. Autosave message
5. Page header
6. Form question content (may include page header)
7. Finish later link
8. Button (Continue)
9.  [Autosave alert](https://design.va.gov/components/form/autosave)
10. [Need help? component](https://design.va.gov/components/form/need-help)
11. [Feedback pattern](https://design.va.gov/patterns/ask-users-for/feedback)
12. [Minimal footer](https://design.va.gov/components/footer/footer-minimal)

##### Instances of this template in production
[Request personal records (VA Form 20-10206)](https://staging.va.gov/records/request-personal-records-form-20-10206/introduction)

#### Example - Unauthenticated

{% include component-example.html alt="An example of a form step page for unauthenticated users." file="/images/templates/forms/minimal-form-step/2-example-unauth.png" caption="Anatomy of the form step template for unauthenticated users." class="x2" %}


The unauthenticated question page has these items:
1. [Minimal header](https://design.va.gov/components/header/header-minimal) with form title & subtitle
2. [Back link](https://design.va.gov/components/link/#when-to-use-a-back-link)
3. [Progress bar - segmented with step label](https://design.va.gov/components/form/progress-bar-segmented)
4. Page header
5. Form question content (may include page header)
6. Button (Continue)
7. [Need help? component](https://design.va.gov/components/form/need-help)
8. [Feedback pattern](https://design.va.gov/patterns/ask-users-for/feedback)
9. [Minimal footer](https://design.va.gov/components/footer/footer-minimal)

## Usage

### When to use this template

**All new forms should use this template.** The templates in figma and in code provides good starting points for new form development. Your forms will have unique `<H1>`'s and be more accessible for users.

### When to consider something else

Teams who want to migrate existing forms to this new template will gain advantages by having unique `<H1>`'s for every form page. However, it can be quite a considerable time investment because nearly every page in a form flow would need to be edited. If forms have already included `<h3>`'s on every form page, the lift will not be as large. 

## Structure

### 1. Minimal header with form title and subtitle
The form step template and the review page template uses the [minimal header component](https://design.va.gov/components/header/header-minimal). 

Use the same plain language form title and subtitle as the form introduction and confirmation pages. 

[Review the form introduction template for guidance and examples of a form title and subtitle.](https://design.va.gov/templates/forms/introduction#structure)

The form title and subtitle are in the minimal header without any semantic heading structure.


### 2. Back link

Instead of a breadcrumb, we add a back link below the minimal header in this template. The back link will remain static across all question pages for a single form. The link text should read “Back to previous page”.

[Learn more about the expected behavior for the back link](https://design.va.gov/components/link/#when-to-use-a-back-link). 

We use the back link to reassure users that they can go back and change previous answers.

The back link should not break the browser back button. And it should take users to the previous page they were on, in the state they last saw it. 

Exception: If the form submitter completes an action that they can do only once, like submit the form, the browser back button should still navigate the user to the previous page, but the user should not be able to submit the form again.


### 3. Progress bar - segmented with step label

The [segmented progress bar component](https://design.va.gov/templates/forms/introduction#structure) updates users on their progress through a multistep process.

To help determine the number and labels of steps it is important to group fields and form questions logically. This may require you to figure out the form questions before determining the number and labels of form steps. Use the [one thing per page design principle](https://design.va.gov/patterns/ask-users-for/a-single-response#design-principles) to determine how much form content to fit onto a single form page.

Each step within the progress bar is named with the “step label.” A step within a form could include multiple pages. However, because of the progress bar UI limitations, forms should be no more than 13 steps.

If there’s more than one question page in the step, the step label should be unique and distinct from the page header. The step label describes the general type of information you're collecting (like “Your personal information”) and the page header will be specific (like “Your name and date of birth”). If there’s only one question page in the step, the step label and page header may be the same.

In the example below, we show that step one has three pages, step two has one page, step three has two pages, and step four has one page. The additional review page, makes this a five step form.


{% include component-example.html alt="A simplified wireframe showing a 5 step form with 7 pages." file="/images/templates/forms/minimal-form-step/3-form-step-wireframe.png" caption="A wireframe flow of form steps and pages" class="x2" %}


### 4. Autosave message

This text notifies authenticated users that we save their form automatically and provides an application ID number. This only appears on the first question page of a form.

### 5-6. Form page content

#### Organizing form questions

Keep in mind these 3 key guidelines for ordering and organizing form questions:

1. The form itself may need a particular piece of information to determine other questions and flows later in the form. So make sure you ask for this information before you need it. For example, some forms use the date of birth component early in the form to determine whether or not to ask about age-related eligibility requirements later on. 
2. Front-load the form with questions that are easy for the form submitter to answer to help them get comfortable with the form experience and reduce the likelihood of abandonment.
3. Users generally understand forms when the information is logically grouped.  For example, if your form asks for information about dependents, group these questions together in the same step.

[Learn more about the “One thing per page” design principle](https://design.va.gov/patterns/ask-users-for/a-single-response#design-principles) to determine how to organize your form questions. Following this principle helps users focus on a specific task without being overwhelmed.

Asking a question on a page does not mean using only one form field. We may add multiple fields on a question page to gather similar data we need. Don’t mistake the “one thing per page” principle as “one form field per page.”  There may be times where it makes sense to group a number of related questions on the same page.

The VA Design system has a number of [components](https://design.va.gov/components/) and [patterns](https://design.va.gov/patterns/) available to teams that help you formulate good questions. These patterns are standardized to help give Veterans a unified experience throughout all of our forms. 

* [Ask users for… addresses](https://design.va.gov/patterns/ask-users-for/addresses)
* [Ask users for… dates](https://design.va.gov/patterns/ask-users-for/dates)
* [Ask users for… email address](https://design.va.gov/patterns/ask-users-for/email-address)
* [Ask users for… names](https://design.va.gov/patterns/ask-users-for/names)
* [Ask users for… phone numbers](https://design.va.gov/patterns/ask-users-for/phone-numbers)
* [Ask users for… relationship to Veteran](https://design.va.gov/patterns/ask-users-for/relationship)
* [Ask users for… signature](https://design.va.gov/patterns/ask-users-for/signature)
* [Ask users for ssn](https://design.va.gov/patterns/ask-users-for/social-security-number)

If you need a new component or pattern, you will need to follow the [experimental design process.](https://design.va.gov/about/contributing-to-the-design-system/experimental-components-and-patterns)


#### Page headers

Page headers can be questions or statements. 
 
Each question page in the form needs a unique `H1` page header that tells the user what kind of  information we’re asking for on that page. 

Any of these can be the page header: 

* The label on a text input or text area
* The legend of a group of fields
* The legend of a radio or checkbox group
* Standalone text coded as an `H1`

For simple questions, the page header may be the only other text the user needs to answer the question. In those cases, the label or legend will usually be the page header. 

For complex questions, you may need to use one of these options to provide additional explanation:

* A standalone `H1` page header that gives general context before one or more specific labels or legends on the form inputs
* Body text after the H1 page header (which can also serve as hint text for all fields on the page, and may include examples or bulleted lists) 
* [An additional info component](https://design.va.gov/components/additional-info)

You can set the contents of a `<legend>` on the page as the page header (`<H1>`).  But, you may not always need the h1 to be inside the legend.  


#### Fieldsets & legends

A good approach for programmatically associating helper text is to put it into the legend and then styling it to look however you want it to look. For example, this screen shot shows a form question with a header (`H1`) and helper text inside of a legend. Then it shows additional text that a screen reader won’t read. Then, it displays the text input label, hint text, and field. This level of design and annotation ensures the most important things are available to screen readers and sighted users alike. 

{% include component-example.html alt="An example of an h1 in the legend, with hint text, helper text, a text input and the associated label" file="/images/templates/forms/minimal-form-step/4-example-legends-fieldsets.png" caption="An example of a fieldset legend setup" class="x2" %}

[Learn more about fieldsets, legends, and labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/accessibility-cookbook.md#fieldsets-legends-labels)


##### More examples

{% include component-example.html alt="An example with a heading in a legend with 2 text inputs" file="/images/templates/forms/minimal-form-step/5-example-fieldset-2-inputs.png" caption="An example of a fieldset legend for text inputs" class="x2" %}

{% include component-example.html alt="An example with a heading in a legend with radio group" file="/images/templates/forms/minimal-form-step/6-example-fieldsets-legend-radio.png" caption="An example of a fieldset legend for a radio group" class="x2" %}

{% include component-example.html alt="An example with a heading outside of legend with radio group" file="/images/templates/forms/minimal-form-step/7-example-heading-outside-fieldset.png" caption="An example of an h1 outside of a legend for a radio group" class="x2" %}

#### Hint text

Use hint text to show information that helps a majority of users answer the question. Information could include how their answer will be used or how they could find the answer.

[VADS hint text guidance](https://design.va.gov/components/form/#hint-text).

Try to keep each hint text to a single short sentence without any line breaks. If you need to give a long detailed explanation, don’t use hint text. Screen readers will read the entire hint text aloud when users interact with the form field. This could frustrate users if the text is long.

Don’t use links in hint text.


#### Additional information

Use the additional information component if there’s relevant information that may be important for some people, but it’s not critical information for everyone filling out the form. 

[Review guidelines for using the additional information component](https://design.va.gov/components/additional-info).


### 7. Finish later link

This link allows the user to exit the process with their progress saved.


### 8. Continue button 

On form pages, the button users select to proceed is labeled “Continue.” 


### 9. Autosave component

In an authenticated experience, forms can be enabled to autosave on every `on blur` event. An `on blur` event is when a user interacts or moves away from a field. The Autosave component appears on the page after the first `on blur` event and displays the last saved date and time.

[Learn more about the autosave component](https://design.va.gov/components/form/autosave).


### 10. Need help?

The Need help? component appears on the bottom of every page of the form. This content tells users how to get additional help with the form or contact VA about their related benefits. You can customize the content for the specific form. 

[Learn more about the need help component](https://design.va.gov/components/form/need-help).


### 11. Feedback pattern

The feedback pattern allows VA.gov to collect feedback from users via Medallia.

[Learn more about the feedback pattern](https://design.va.gov/patterns/ask-users-for/feedback).


### 12. Minimal footer

The minimal footer component strips out all of the navigation found in  the full footer that is found on other VA.gov pages. This helps users stay focused on the task at hand. The VA Seal is a link to VA.gov.

[Learn more about the minimal footer component](https://design.va.gov/components/footer/footer-minimal).


## Research findings

This form page layout aims to address pain-points related to the amount of redundant or unnecessary content that is on each form. In recent studies, we've observed that:

* Some sighted Veterans are confused by repetitive content in forms as the `H1` and step heading may repeat for several pages in a row, and take up a lot of visual space on the page.
* Screen reader users are disorientated by repetitive `H1`s as the `H1` is meant to be a unique description of the current page (not a summary of an overall flow e.g. a form title) 
* For Veterans with low vision who use magnification on mobile devices, questions can be hidden below “the fold” completely

## Code considerations
[Minimal header (minimal form flow) pattern documentation](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/patterns/minimal-header/README.md) details how to implement this variation.
