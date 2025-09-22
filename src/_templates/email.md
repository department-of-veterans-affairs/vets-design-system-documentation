---
layout: pattern
permalink: /templates/email
title: Email
status: use-deployed
intro-text: "The email template is used to communicate with Veterans through email."
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2607%3A31365&mode=design&t=0y4ua4v9DIeIvkhX-1
anchors:
  - anchor: About
  - anchor: Guidance
  - anchor: Example
  - anchor: Structure
---
<!-- include VA Notify link -->
<!-- include Email Content & Style Guide link -->

## About
Emails are primarily used for transactional emails such as submission confirmations, status changes, and account changes. They may also be used for informational messages.

This page documents the supported visual styles for email notifications along with guidelines on how to best use them within the template.

Because of limited support by email clients for custom typefaces, typography within emails uses system fonts and may differ from the types styles defined in the design system. The text styles are the same on mobile. 

## Guidance

### When to use
This email template is a supplementary tool that can be used to mockup emails in Figma before creating them in VA Notify. 

### Content guidance
For guidance on how content should be written, use the [Email Content and Style Guide](https://design.va.gov/content-style-guide/email-and-text-notifications)

### Implementation guidance

Emails that are sent from the VA are written and launched via VA Notify, a centralized email and SMS creation and
management portal.

VA Notify supports a Self Service Portal where users can draft and preview emails using markdown. This Figma template serves as an additional tool to mockup emails.

Learn more about how emails are done at the VA by visiting [notifications.va.gov](https://notifications.va.gov/) and  [VA Notify Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify).

## Example
<!-- Add styling -->

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <p><strong>Mobile</strong></p>
    <a href="{{site.baseurl}}/images/templates/email/email-template-mobile.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-template-mobile.jpg" alt="email template for mobile" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 tablet:vads-u-padding-x--2">
    <p><strong>Desktop</strong></p>
    <a href="{{site.baseurl}}/images/templates/email/email-template-desktop.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-template-desktop.jpg" alt="email template for desktop" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>


## Structure
<!-- TBD -->

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/header.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/header.jpg" alt="va logo email header" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <p><strong>Heading</strong></p>
    <ul>
    <li>The use of a Heading 1 as a heading is required to convey the purpose of the email and should repeat the subject line exactly or use a slightly more detailed version of the subject line.</li>
    <li>Use only one Heading 1 per email.</li>
    <li> For additional content guidance on Headings, use the Email Content and Style Guide.</li>
</ul>
  </div>
</div>


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/email-header.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-header.jpg" alt="va logo email header" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <p><strong>Header</strong></p>
    <ul>
    <li>The header includes the VA logo with appropriate alt text.</li>
    <li>No changes should be made to the header to ensure consistency across emails sent by VA.</li>
    <li> The header is responsive and has a breakpoint at 600px. Widths 600px and below have the VA seal centered in the header whereas at widths above 600px, the VA seal is left-aligned. Visit the Figma template to learn more.</li>
</ul>
  </div>
</div>