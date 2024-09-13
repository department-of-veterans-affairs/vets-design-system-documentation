---
layout: pattern
permalink: /templates/forms/confirmation
has-parent: /templates/forms/
title: Confirmation
status: use-deployed
intro-text: "The form confirmation page gives users information about what they can expect after they submit an online application. This page also provides users with a summary of the benefit they applied for, a confirmation number, and the date they submitted their claim."
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=2988-66786&t=1fh2gr46l2FEHw8n-1
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
---

## About

Our current confirmation pages vary in format and content. Below are some of the default components used in our current confirmation pages. Teams should tailor the layout and content as needed based on the benefit type and/or stakeholder feedback.

## Example

![form confirmation template]({{site.baseurl}}/images/templates/forms/confirmation/mini-template.png)

The form confirmation page consists of:

1. [Page title](#page-title)
2. [Success alert](#success-alert)
3. [Help users to keep a record of submitted information pattern](#help-users-to-keep-a-record-of-submitted-information-pattern)
4. [Other content elements](#other-content-elements)
5. [Back to VA.gov link](#back-to-vagov-link)  
6. [Need help](#need-help)

### Instances of this template in production

{% include component-example.html alt="An example of a confirmation page." file="/images/templates/forms/confirmation/health-care-confirmation.png" caption="Example of the Apply for health care confirmation page." width="50%" %}

## Structure

### Page title

The H1 for this page should carry over from H1 for the online form. File for [benefit] or Apply for [benefit] and the VA paper form equivalency appears next to or below the H1.

Example:  
File for disability compensation (Form 21-526EZ)

### Success alert

![success alert]({{ site.baseurl }}/images/templates/forms/confirmation/success-alert.png)

After the H1 there should be a line of content letting users know that they successfully submitted their application. Use a [success alert]({{ site.baseurl }}/components/alert#success-alert) to let your user know that they’ve successfully submitted their form. Content for the success alert will depend on the form.

Example messages of success alerts on form confirmation pages:

>**You’ve successfully submitted your application.** <br>
Once we’ve reviewed your application, a Caregiver Support Coordinator will contact you to discuss next steps.

>We've received your application.

### Help users to keep a record of submitted information pattern

Follow the [Help users to keep a record of submitted information]({{ site.baseurl }}/patterns/help-users-to/keep-a-record-of-submitted-information) pattern to allow users to keep a printable record of their form submission.

This pattern employs the [Summary box component]({{ site.baseurl }}/components/summary-box), content, and a “Print this page” [Button - Primary]({{ site.baseurl }}/components/button).

The Featured content component should contain:

- Applicant name
- Benefit they’ve applied for
- Confirmation number (if applicable)
- The date that claim or application was submitted
- Other important information about their claim, such as disability conditions, they’re claiming. (if applicable)
- “Print this page” default blue button

### Other content elements

Content to include on the confirmation page will depend on the type of benefit. Some benefit confirmation pages might need more information than others.

Content writers and designers should work together to determine the best format and content for the confirmation page, based on the type of benefit and stakeholder input. The [Process list (subway map) component]({{ site.baseurl }}/components/process-list) can be a good solution for presenting next steps or processes where the user may need to track progress over an extended period of time.

Some examples of other questions we might want to include on a form's confirmation page are:

- What happens after I apply?
- How long will it take VA to process the application?
- What can the applicant do while they wait?
- Are there any actions the applicant needs to take while they wait?
- What can the applicant do if they have additional questions after they apply?

Some examples of other content we might want to include on a form's confirmation page are:

Letting the applicant know that VA might contact them for more information or documents.

Example message:

>We may contact you if we need more information or documents.

### Back to VA.gov link

![confirmation page action link]({{site.baseurl}}/images/templates/forms/confirmation/action-link.png)

 Include a link that allows users to navigate back to VA.gov. The [Link - Action]({{ site.baseurl }}/components/link/action) guides the user back to the VA.gov homepage.

### Need help

The Need help component is a footer that appears on the bottom of every page of the form. This content lets users know how to get additional help with the form or the benefits. The content is customized depending on the form and usually points the user to a number they can call if they need help with their form.  

{% include component-example.html alt="An example of a need help footer for forms pages." file="/images/templates/forms/confirmation/need-help.png" caption="An example of a Need help component used on all forms pages." class="x2" %}