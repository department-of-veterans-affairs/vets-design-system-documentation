---
layout: pattern
permalink: /templates/email
title: Email
status: use-deployed
intro-text: "The email template is used to communicate with Veterans through email."
anchors:
  - anchor: Example
  - anchor: Guidance
---

## Example

![email template]({{site.baseurl}}/images/email-template.png)

## Guidance

### When to use
The email template is used to communicate with Veterans through email. This template is primarily used for transactional emails such as submission confirmations, status changes, and account changes. It may also be used for informational messages. The visual styles supported by email notifications are below along with guidelines for how to best use them within the
template. 

When incorporating e-mail notifications into a VA.gov application, we recommend using [VA Notify](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify).

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


