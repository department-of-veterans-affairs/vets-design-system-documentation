---
layout: pattern
permalink: /templates/forms/confirmation
has-parent: /templates/forms/
title: Confirmation
status: use-deployed
intro-text: "The form confirmation page gives users information about what they can expect after they submit an online application. This page also provides users with a summary of the benefit they applied for, a confirmation number, and the date they submitted their claim."
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=2601-126236&t=trebutugV9jwUgJ1-1
research-title: "Help users to stay informed of app status"
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
  - anchor: Research
---

## About

Our current confirmation pages vary in format and content. Below are some of the default components used in our current confirmation pages. Teams should tailor the layout and content as needed based on the benefit type and/or stakeholder feedback.

## Example

{% include component-example.html alt="Anatomy of Form Confirmation" file="/images/templates/forms/confirmation/mini-template.png" caption="Anatomy of Form Confirmation" class="x2" %}

The form confirmation page consists of:

1. [Page title](#page-title)
2. [Help users to keep a record of submitted information pattern](#help-users-to-keep-a-record-of-submitted-information-pattern)
3. [Success Alert](#success-alert)
4. [Download Link]({{ site.baseurl }}/components/link/#download)
5. [Accordion]({{ site.baseurl }}/components/accordion) of data submitted
6. [Primary Button]({{ site.baseurl }}/components/button/) to print confirmation
7. [Other content elements](#other-content-elements)
8. [Back to VA.gov link](#back-to-vagov-link)
9. [Need help](#need-help)

### Production example

{% include component-example.html alt="An example of a confirmation page." file="/images/templates/forms/confirmation/personal-records-confirmation.png" caption="Example of the request for personal records confirmation page." width="50%" %}

### Instances of this template in production

* [Request for personal records](https://www.va.gov/records/request-personal-records-form-20-10206/)
* [Authorize the release of non-VA medical information to VA](https://www.va.gov/supporting-forms-for-claims/release-information-to-va-form-21-4142/)
* [Submit a lay or witness statement to support a VA claim](https://www.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210/)

## Structure

### Page title

The page title (`H1`) for this page should carry over from the online form.

### Success alert

Use a [Success Alert]({{ site.baseurl }}/components/alert#success-alert) to let your user know that they’ve successfully submitted their form placed after the page title. Content for the success alert will depend on the form.

An example message of a success alert on form confirmation page:

> **Form submission started on [date]**  
Your submission is in progress.  
It can take up to 30 days for us to receive your form. Your confirmation number is XXX.  
[Action Link] Check the status of your form on My VA

### Help users to keep a record of submitted information pattern

Follow the [Help users to keep a record of submitted information]({{ site.baseurl }}/patterns/help-users-to/keep-a-record-of-submitted-information) pattern to allow users to keep a printable record of their form submission.

### Other content elements

Content to include on the confirmation page will depend on the type of benefit. Some benefit confirmation pages might need more information than others.

Content writers and designers should work together to determine the best format and content for the confirmation page, based on the type of benefit and stakeholder input. A [Process List]({{ site.baseurl }}/components/process-list) can be a good solution for presenting next steps or processes where the user may need to track progress over an extended period of time.

Some examples of other questions we might want to include on a form's confirmation page are:

- What happens after I apply?
- How long will it take VA to process the application?
- What can the applicant do while they wait?
- Are there any actions the applicant needs to take while they wait?
- What can the applicant do if they have additional questions after they apply?

An example of other content we might want to include on a form's confirmation page is letting the applicant know that VA might contact them for more information or documents.

Example message:

>We may contact you if we need more information or documents.

**When additional forms are required:** If the user needs to complete additional forms as part of their process, provide clear guidance on next steps in the "What to expect next" section. Follow the [Help users to navigate multiple related forms]({{ site.baseurl }}/patterns/help-users-to/navigate-multiple-related-forms) pattern.

### Back to VA.gov link

![confirmation page action link]({{site.baseurl}}/images/templates/forms/confirmation/secondary-action-link.png)

 Include a [Link - Action (secondary)]({{ site.baseurl }}/components/link/action) that allows users to navigate back to the VA.gov homepage. 

### Need help

The [Need help]({{site.baseurl}}/components/form/need-help) component is a footer that appears on the bottom of every page of the form. This content lets users know how to get additional help with the form or the benefits. The content is customized depending on the form and usually points the user to a number they can call if they need help with their form.

## Research findings

In [2024, VFF/MY VA Form Status Research](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Research/Research%20Findings%20for%202024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research%20Study.md) found that a majority of Veterans indicated they would download a copy of their form submission.

The following items have received the most clicks on the confirmation page
- 30.55% of clicks - Print this page for your records (which also prints a copy of their submitted data in an open accordion)
- 27.35% of clicks - Download a copy of your VA Form XX-XXXX
- 27.03% of clicks - Check the status of your from on My VA

The data continues to support our research findings that "The majority of participants expressed a desire to download a copy of their form submission (10 of 12), and 5 of 12 participants also indicated they would want to print a copy of their form submission."

## Print Styling

When the confirmation page is printed out, ensure that the breadcrumbs are removed and that the content fills 100% of the print width.
