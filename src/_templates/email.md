---
layout: pattern
permalink: /templates/email
title: Email
status: use-deployed
intro-text: "The email template is used to communicate with Veterans through email."
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2607%3A31365&mode=design&t=0y4ua4v9DIeIvkhX-1
link: VA Notify
anchors:
  - anchor: Example
  - anchor: Guidance
---

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

<img width="100%" src="{{site.baseurl}}/images/templates/email/email-template.png" alt="email template">

## Structure


### Header
The header includes the VA logo with appropriate alt text. No changes should be made to the header to ensure consistency across emails sent by VA.

### Heading
An H1 heading is used to convey the purpose of the email. Use only one heading per email.
Heading level 2 is also supported.

### Paragraph text
Paragraph text is used for the body content of the email. Bold, italics, and bulleted lists are also supported. 

### Bulleted lists
Bulleted lists are supported to break up paragraph content. The style follows the [VA design system bullet styling]({{ site.baseurl }}/foundation/typography#lists).

### Links
Links are supported and follow the style of design system links. When links are critical for the user to visit, the full URL should be displayed to set expectations and allow for copying and pasting. 

### Card
Cards are used to call out important pieces of information included in the email. Examples of this include confirmation numbers, important dates, etc.

### Footer
The footer is used to communicate supplemental information about the communication such as an explanation of why the email was sent, how to unsubscribe, or how to get additional support.
The footer is noted with the use of a horizontal line.

### Typography
Because of limited support by email clients for custom typefaces, typography within emails uses system fonts and may differ from the types styles defined in the design system.

### Smaller screen design styles
The text styles are the same on mobile. For email on smaller screens, the VA logo is centered on the header. 


