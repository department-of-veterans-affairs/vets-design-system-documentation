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
This email template is a supplementary tool that can be used to mockup emails in [Figma](https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=2607-31365&t=95Gd3PqenVQEJIQx-1) before creating them in VA Notify. 

### Content guidance
For guidance on how content should be written, use the [Email Content and Style Guide](https://design.va.gov/content-style-guide/email-and-text-notifications).

### Implementation guidance

Emails that are sent from the VA are written and launched via [VA Notify](https://notifications.va.gov/), a centralized email and SMS creation and management portal. VA Notify supports a Self Service Portal where users can draft and preview emails using markdown. 

Visit the [VA Notify Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify) to get onboarded.

## Example

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-bottom--3 tablet:vads-u-padding-x--2">
    <h4>Mobile</h4>
    <a href="{{site.baseurl}}/images/templates/email/email-template-mobile.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-template-mobile.jpg" alt="email template for mobile" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 tablet:vads-u-padding-x--2">
    <h4>Desktop</h4>
    <a href="{{site.baseurl}}/images/templates/email/email-template-desktop.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-template-desktop.jpg" alt="email template for desktop" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>


## Structure

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/email-header.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-header.jpg" alt="va logo email header example" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Header</h4>
    <ul>
    <li>The header includes the VA logo with appropriate alt text.</li>
    <li>No changes should be made to the header to ensure consistency across emails sent by VA.</li>
    <li>The header is responsive and has a breakpoint at 600px. Widths 600px and below have the VA seal centered in the header whereas at widths above 600px, the VA seal is left-aligned. Visit the
    <a href="https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=2607-31365&t=95Gd3PqenVQEJIQx-1">Figma template</a>to learn more.</li>
</ul>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/heading.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/heading.jpg" alt="email heading example" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Heading</h4>
    <ul>
    <li>The use of a Heading 1 as a heading is required to convey the purpose of the email and should repeat the subject line exactly or use a slightly more detailed version of the subject line.</li>
    <li>Use only one Heading 1 per email.</li>
    <li>For additional content guidance on Headings, use the <a href="https://design.va.gov/content-style-guide/email-and-text-notifications">Email Content and Style Guide</a>.</li>
</ul>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/salutation.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/salutation.jpg" alt="email salutation example" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Salutation</h4>
    <ul>
    <li>Personalize the email with the Veteran’s first name in the salutation as “Dear ((first_name)),”—but never include both first and last name, because this counts as PII.</li>
</ul>
  </div>
</div>


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/body-content.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/body-content.jpg" alt="email body content example" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Body Content</h4>
    <ul>
    <li>The body content contains the details of your message.</li>
    <li>Within the body content, the following are supported:</li>
    <ul>
    <li>Paragraph text, bold text, italicized text, links, and bulleted lists</li>
    <li>Headings level 2, 3, and 4</li>
    <li>Blockquotes </li>
    <li>Action Links </li>
    <li>Dividers</li>
    </ul>
    <li>For additional content guidance, use the <a href="https://design.va.gov/content-style-guide/email-and-text-notifications">Email Content and Style Guide</a>.</li>
    <li>Don’t include a closing or sign the email as “VA.gov” or “VA”.</li>
    <ul><li>Don’t say “Thank you for your service” in the closing or anywhere else in the email. Research has found that some Veterans may have negative feelings about this phrase.</li></ul>
</ul>
  </div>
</div>

<!--
<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/closing.png"><img width="100%" src="{{site.baseurl}}/images/templates/email/closing.png" alt="blank closing" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Closing</h4>
    <ul>
    <li>Don’t include a closing or sign the email as “VA.gov” or “VA”.</li>
    <li>Don’t say “Thank you for your service” in the closing or anywhere else in the email. Research has found that some Veterans may have negative feelings about this phrase.</li>
</ul>
  </div>
</div>
-->


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/contact-section.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/contact-section.jpg" alt="email contact section example" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Contact Section </h4>
    <ul>
    <li>Include a contact section so users can reach out if they have questions.</li>
    <li>By default, “Have questions?” heads the contact section with a Heading level 3, uses “Visit <a href="https://va.gov">https://va.gov</a> or call <a href="tel:+18008271000">800-827-1000</a> (TTY: <a href="tel:+711">711</a>). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.” as the content, and is preceded by a divider.</li>
      <li>Contact details can be adjusted as needed.</li>
      <li>If the user is required or recommended to reach out to the VA in the body content, the contact section can be removed to reduce redundancy.</li>
</ul>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/footer.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/footer.jpg" alt="email footer example" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Footer</h4>
    <ul>
    <li>Use the footer to explain why we sent this email and tell people not to reply—modify the reason as necessary.</li>
    <li>Example: “You are receiving this email because you filed an application on VA.gov. Please do not reply to this email.”</li>
    <li>The footer is noted with the use of a divider above it.</li>
</ul>
  </div>
</div>

<!-- FLIPPED ORIENTATION
## Structure 2

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Header</h4>
    <ul>
      <li>The header includes the VA logo with appropriate alt text.</li>
      <li>No changes should be made to the header to ensure consistency across emails sent by VA.</li>
      <li>The header is responsive and has a breakpoint at 600px. Widths 600px and below have the VA seal centered in the header whereas at widths above 600px, the VA seal is left-aligned. [Visit the Figma template](https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=2607-31365&t=95Gd3PqenVQEJIQx-1) to learn more.</li>
    </ul>
  </div>
   <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/email-header.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-header.jpg" alt="va logo email header" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Heading</h4>
    <ul>
    <li>The use of a Heading 1 as a heading is required to convey the purpose of the email and should repeat the subject line exactly or use a slightly more detailed version of the subject line.</li>
    <li>Use only one Heading 1 per email.</li>
    <li>For additional content guidance on Headings, use the Email Content and Style Guide.</li>
</ul>
  </div>
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/heading.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/heading.jpg" alt="email heading" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Salutation</h4>
    <ul>
    <li>Personalize the email with the Veteran’s first name in the salutation as “Dear ((first_name)),”—but never include both first and last name, because this counts as PII.</li>
</ul>
  </div>
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/salutation.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/salutation.jpg" alt="email salutation" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Body Content</h4>
    <ul>
    <li>The body content contains the details of your message.</li>
    <li>Within the body content, the following are supported:</li>
    <ul>
    <li>Paragraph text, bold text, italicized text, links, and bulleted lists</li>
    <li>Headings level 2, 3, and 4</li>
    <li>Blockquotes </li>
    <li>Action Links </li>
    <li>Dividers</li>
    </ul>
    <li>Visit the Email Content and Style Guide for further usage guidance.</li>
</ul>
  </div>
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/body-content.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/body-content.jpg" alt="email body content" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Closing</h4>
    <ul>
    <li>Don’t include a closing or sign the email as “VA.gov” or “VA”.</li>
    <li>Don’t say “Thank you for your service” in the closing or anywhere else in the email. Research has found that some Veterans may have negative feelings about this phrase.</li>
</ul>
  </div>
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/closing.png"><img width="100%" src="{{site.baseurl}}/images/templates/email/closing.png" alt="blank closing" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Contact Section </h4>
    <ul>
    <li>Include a contact section so users can reach out if they have questions.</li>
    <li>By default, “Have questions?” heads the contact section with a Heading level 3, uses “Visit <a href="https://va.gov">https://va.gov</a> or call <a href="tel:+18008271000">800-827-1000</a> (TTY: <a href="tel:+711">711</a>). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.” as the content, and is preceded by a divider.</li>
      <li>Contact details can be adjusted as needed.</li>
      <li>If the user is required or recommended to reach out to the VA in the body content, the contact section can be removed to reduce redundancy.</li>
</ul>
  </div>
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/contact-section.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/contact-section.jpg" alt="email contact section" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Footer</h4>
    <ul>
    <li>Use the footer to explain why we sent this email and tell people not to reply—modify the reason as necessary.</li>
    <li>Example: “You are receiving this email because you filed an application on VA.gov. Please do not reply to this email.”</li>
    <li>The footer is noted with the use of a divider above it.</li>
</ul>
  </div>
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/footer.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/footer.jpg" alt="email footer" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
</div>

-->

<!--
## Formatting Key

In VA Notify, emails are created by writing text content and stylizing them with markdown. Below is the formatting key that you can preview to understand how it works.

{% assign spacing_semantic = site.data.tokens.vads-spacing-semantic %}
{% include spacing-tokens.html 
    spacing=spacing_semantic 
    type="semantic"
%}
-->