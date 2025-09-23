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

VA Notify supports a Self Service Portal where users can draft and preview emails using markdown. This [Figma template](https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=2607-31365&t=95Gd3PqenVQEJIQx-1) serves as an additional tool to mockup emails.

Learn more about how emails are done at the VA by visiting [notifications.va.gov](https://notifications.va.gov/) and  [VA Notify Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify).

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
    <a href="{{site.baseurl}}/images/templates/email/email-header.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/email-header.jpg" alt="va logo email header" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Header</h4>
    <ul>
    <li>The header includes the VA logo with appropriate alt text.</li>
    <li>No changes should be made to the header to ensure consistency across emails sent by VA.</li>
    <li>The header is responsive and has a breakpoint at 600px. Widths 600px and below have the VA seal centered in the header whereas at widths above 600px, the VA seal is left-aligned. <br>
    <a href="https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=2607-31365&t=95Gd3PqenVQEJIQx-1">Visit the Figma template to learn more</a></li>
</ul>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/heading.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/heading.jpg" alt="email heading" style="width: auto; height: auto; max-width: 100%;"></a>
  </div>
  <div class="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-margin-bottom--2 tablet:vads-u-padding-x--2">
    <h4>Heading</h4>
    <ul>
    <li>The use of a Heading 1 as a heading is required to convey the purpose of the email and should repeat the subject line exactly or use a slightly more detailed version of the subject line.</li>
    <li>Use only one Heading 1 per email.</li>
    <li>For additional content guidance on Headings, use the Email Content and Style Guide.</li>
</ul>
  </div>
</div>

<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/salutation.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/salutation.jpg" alt="email salutation" style="width: auto; height: auto; max-width: 100%;"></a>
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
    <a href="{{site.baseurl}}/images/templates/email/body-content.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/body-content.jpg" alt="email body content" style="width: auto; height: auto; max-width: 100%;"></a>
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
    <li>Visit the Email Content and Style Guide for further usage guidance.</li>
</ul>
  </div>
</div>


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


<div class="vads-grid-row tablet:vads-u-margin-x--neg2">
  <div class="vads-grid-col-8 tablet:vads-grid-col-4 vads-u-margin-top--4 tablet:vads-u-padding-x--2">
    <a href="{{site.baseurl}}/images/templates/email/contact-section.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/contact-section.jpg" alt="email contact section" style="width: auto; height: auto; max-width: 100%;"></a>
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
    <a href="{{site.baseurl}}/images/templates/email/footer.jpg"><img width="100%" src="{{site.baseurl}}/images/templates/email/footer.jpg" alt="email footer" style="width: auto; height: auto; max-width: 100%;"></a>
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

## Formatting Key

In VA Notify, emails are created by writing text content and stylizing them with markdown. Below is the formatting key that you can preview to understand how it works.


  <table>
    <thead>
      <tr>
        <th>Syntax</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td># Heading 1</td>
        <td>Row 1 Col 2</td>
      </tr>
      <tr>
        <td>## Heading 2</td>
        <td>Row 2 Col 2</td>
      </tr>
      <tr>
        <td>### Heading 3</td>
        <td>Row 3 Col 2</td>
      </tr>
            <tr>
        <td>**Bold**</td>
        <td>Row 3 Col 2</td>
      </tr>
            <tr>
        <td>Body
        <ul>
        <li>Bulleted</li>
        <li>List</li>
        </td>
        </ul>
        <td>Row 3 Col 2</td>
      </tr>
      <tr>
        <td>{{Personalization}}</td>
        <td>Row 3 Col 2</td>
      </tr>
      <tr>
        <td>[Hyperlink](URL)</td>
        <td>Row 3 Col 2</td>
      </tr>
      <tr>
        <td>>>[Action link](url)</td>
        <td>Row 3 Col 2</td>
      </tr>
      <tr>
        <td>Horizontal Line
        ***[3 asterisks]
        Horizontal Line</td>
        <td>Row 3 Col 2</td>
      </tr>
            <tr>
        <td>Horizontal Line
        ***[3 asterisks]
        Horizontal Line</td>
        <td>Row 3 Col 2</td>
      </tr>
      <tr>
        <td>> Blockquote</td>
        <td>Row 3 Col 2</td>
      </tr>
      <td>>> Nested blockquote</td>
        <td>Row 3 Col 2</td>
      </tr>
    </tbody>
  </table>

  <!--
{% assign spacing_semantic = site.data.tokens.vads-spacing-semantic %}
{% include spacing-tokens.html 
    spacing=spacing_semantic 
    type="semantic"
%}
-->
<aside id="email-formatting-key">
  <div class="table__caption vads-u-font-weight--bold vads-u-font-size--h4">Formatting key</div>
  <div class="table__wrapper">
    <p id="email-format-key-summary" class="sr-only">
      A table displaying email formatting guidance.
      Column one has the formatting syntax and column
      two shows the result of that syntax.
    </p>
    <div class="va-table__va-table-wrapper" data-controller="va-table" data-va-table-rows-value="[[&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p class=\&quot;__h1\&quot; aria-hidden=\&quot;true\&quot;&gt;# Heading 1&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Pound symbol followed by Heading 1&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p class=\&quot;__h1\&quot; aria-hidden=\&quot;true\&quot;&gt;Heading 1&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as Heading 1, a large heading.&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p class=\&quot;__h2\&quot; aria-hidden=\&quot;true\&quot;&gt;## Heading 2&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Two pound symbols followed by Heading 2&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p class=\&quot;__h2\&quot; aria-hidden=\&quot;true\&quot;&gt;Heading 2&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as Heading 2, a medium-sized heading&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p class=\&quot;__h3\&quot; aria-hidden=\&quot;true\&quot;&gt;### Heading 3&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Three pound symbols followed by Heading 3&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p class=\&quot;__h3\&quot; aria-hidden=\&quot;true\&quot;&gt;Heading 3&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as Heading 3, a smaller heading&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;**Bold**&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Two asterisks around Bold&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p class=\&quot;__bold\&quot; aria-hidden=\&quot;true\&quot;&gt;Bold&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as bold text&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;- Bulleted&lt;br&gt;- List&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Dash followed by text&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot;&gt;&lt;ul&gt;&lt;li&gt;Bulleted&lt;/li&gt;&lt;li&gt;List&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as a bulleted list&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;((Personalization))&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Double parentheses around Personalization&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;&lt;mark&gt;Personalization&lt;/mark&gt;&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as Personalization text in a yellow box&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;[Hyperlink](URL)&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Left bracket, Hyperlink, right bracket, left parenthesis, URL, right parenthesis&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;&lt;a href='http://URL' data-action='global#preventAction' tabindex='-1'&gt;Hyperlink&lt;/a&gt;&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as a hyperlink, linked to the specified URL&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;&amp;gt;&amp;gt;[Action link](URL)&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Two greater than signs, left bracket, action link, right bracket, left parenthesis, URL, right parenthesis&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;p aria-hidden=\&quot;true\&quot;&gt;&lt;i class='fa-chevron-circle-right vads-u-color--arrow-down vads-u-margin-right--1' aria-hidden='true'&gt;&lt;/i&gt;&lt;a href='http://URL' data-action='global#preventAction' class='vads-u-font-weight--bold' aria-hidden='true' tabindex='-1'&gt;Action Link&lt;/a&gt;&lt;/p&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as an action link, clickable to the specified URL&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot;&gt;&lt;div class='__context'&gt;Horizontal Line&lt;/div&gt;&lt;br&gt;***&lt;div class='__hint'&gt; [3 asterisks]&lt;/div&gt;&lt;br&gt;&lt;div class='__context'&gt;Horizontal Line&lt;/div&gt;&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Line break required before and after this line: three asterisks, no spaces (***)&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot;&gt;&lt;p class='__hr'&gt;Horizontal Line&lt;/p&gt;&lt;hr&gt;&lt;p class='__hr'&gt;Horizontal Line&lt;/p&gt;&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as a horizontal line&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot;&gt;&amp;gt; Blockquote&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Greater than symbol followed by text&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot; class=\&quot;__blockquote\&quot;&gt;Blockquote&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as blockquote&lt;/div&gt;&lt;/div&gt;&quot;], [&quot;&lt;div class=\&quot;syntax\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot;&gt;&amp;gt; &amp;gt; Nested line&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Two greater than symbols followed by text&lt;/div&gt;&lt;/div&gt;&quot;, &quot;&lt;div class=\&quot;result\&quot;&gt;&lt;div aria-hidden=\&quot;true\&quot; class=\&quot;__blockquote\&quot;&gt;&lt;div class=\&quot;nested\&quot;&gt;Nested line&lt;/div&gt;&lt;/div&gt;&lt;div class=\&quot;vads-u-visibility--screen-reader\&quot;&gt;Rendered as nested line within blockquote&lt;/div&gt;&lt;/div&gt;&quot;]]" data-va-table-page-size-value="15">
  <va-table data-va-table-target="table" full-width="" stacked="true" table-type="borderless" aria-describedby="email-format-key-summary" aria-hidden="false" class="hydrated">
    <va-table-row data-va-table-target="header" class="hydrated">
        <span slot="va-table-slot-0">Syntax</span>
        <span slot="va-table-slot-1">Result</span>
    </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-2"><div class="syntax"><p class="__h1" aria-hidden="true"># Heading 1</p><div class="vads-u-visibility--screen-reader">Pound symbol followed by Heading 1</div></div></span>
            <span slot="va-table-slot-3"><div class="result"><p class="__h1" aria-hidden="true">Heading 1</p><div class="vads-u-visibility--screen-reader">Rendered as Heading 1, a large heading.</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-4"><div class="syntax"><p class="__h2" aria-hidden="true">## Heading 2</p><div class="vads-u-visibility--screen-reader">Two pound symbols followed by Heading 2</div></div></span>
            <span slot="va-table-slot-5"><div class="result"><p class="__h2" aria-hidden="true">Heading 2</p><div class="vads-u-visibility--screen-reader">Rendered as Heading 2, a medium-sized heading</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-6"><div class="syntax"><p class="__h3" aria-hidden="true">### Heading 3</p><div class="vads-u-visibility--screen-reader">Three pound symbols followed by Heading 3</div></div></span>
            <span slot="va-table-slot-7"><div class="result"><p class="__h3" aria-hidden="true">Heading 3</p><div class="vads-u-visibility--screen-reader">Rendered as Heading 3, a smaller heading</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-8"><div class="syntax"><p aria-hidden="true">**Bold**</p><div class="vads-u-visibility--screen-reader">Two asterisks around Bold</div></div></span>
            <span slot="va-table-slot-9"><div class="result"><p class="__bold" aria-hidden="true">Bold</p><div class="vads-u-visibility--screen-reader">Rendered as bold text</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-10"><div class="syntax"><p aria-hidden="true">- Bulleted<br>- List</p><div class="vads-u-visibility--screen-reader">Dash followed by text</div></div></span>
            <span slot="va-table-slot-11"><div class="result"><div aria-hidden="true"><ul><li>Bulleted</li><li>List</li></ul></div><div class="vads-u-visibility--screen-reader">Rendered as a bulleted list</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-12"><div class="syntax"><p aria-hidden="true">((Personalization))</p><div class="vads-u-visibility--screen-reader">Double parentheses around Personalization</div></div></span>
            <span slot="va-table-slot-13"><div class="result"><p aria-hidden="true"><mark>Personalization</mark></p><div class="vads-u-visibility--screen-reader">Rendered as Personalization text in a yellow box</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-14"><div class="syntax"><p aria-hidden="true">[Hyperlink](URL)</p><div class="vads-u-visibility--screen-reader">Left bracket, Hyperlink, right bracket, left parenthesis, URL, right parenthesis</div></div></span>
            <span slot="va-table-slot-15"><div class="result"><p aria-hidden="true"><a href="http://URL" data-action="global#preventAction" tabindex="-1">Hyperlink</a></p><div class="vads-u-visibility--screen-reader">Rendered as a hyperlink, linked to the specified URL</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-16"><div class="syntax"><p aria-hidden="true">&gt;&gt;[Action link](URL)</p><div class="vads-u-visibility--screen-reader">Two greater than signs, left bracket, action link, right bracket, left parenthesis, URL, right parenthesis</div></div></span>
            <span slot="va-table-slot-17"><div class="result"><p aria-hidden="true"><i class="fa-chevron-circle-right vads-u-color--arrow-down vads-u-margin-right--1" aria-hidden="true"></i><a href="http://URL" data-action="global#preventAction" class="vads-u-font-weight--bold" aria-hidden="true" tabindex="-1">Action Link</a></p><div class="vads-u-visibility--screen-reader">Rendered as an action link, clickable to the specified URL</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-18"><div class="syntax"><div aria-hidden="true"><div class="__context">Horizontal Line</div><br>***<div class="__hint"> [3 asterisks]</div><br><div class="__context">Horizontal Line</div></div><div class="vads-u-visibility--screen-reader">Line break required before and after this line: three asterisks, no spaces (***)</div></div></span>
            <span slot="va-table-slot-19"><div class="result"><div aria-hidden="true"><p class="__hr">Horizontal Line</p><hr><p class="__hr">Horizontal Line</p></div><div class="vads-u-visibility--screen-reader">Rendered as a horizontal line</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-20"><div class="syntax"><div aria-hidden="true">&gt; Blockquote</div><div class="vads-u-visibility--screen-reader">Greater than symbol followed by text</div></div></span>
            <span slot="va-table-slot-21"><div class="result"><div aria-hidden="true" class="__blockquote">Blockquote</div><div class="vads-u-visibility--screen-reader">Rendered as blockquote</div></div></span>
      </va-table-row>
      <va-table-row data-va-table-target="rows" class="hydrated">
            <span slot="va-table-slot-22"><div class="syntax"><div aria-hidden="true">&gt; &gt; Nested line</div><div class="vads-u-visibility--screen-reader">Two greater than symbols followed by text</div></div></span>
            <span slot="va-table-slot-23"><div class="result"><div aria-hidden="true" class="__blockquote"><div class="nested">Nested line</div></div><div class="vads-u-visibility--screen-reader">Rendered as nested line within blockquote</div></div></span>
      </va-table-row>
  <va-table-inner rows="12" cols="2" stacked="true" sortable="false" scrollable="false" striped="false" table-type="borderless" full-width="true" class="hydrated"><span slot="va-table-slot-0">Syntax</span><span slot="va-table-slot-1">Result</span><span slot="va-table-slot-2"><div class="syntax"><p class="__h1" aria-hidden="true"># Heading 1</p><div class="vads-u-visibility--screen-reader">Pound symbol followed by Heading 1</div></div></span><span slot="va-table-slot-3"><div class="result"><p class="__h1" aria-hidden="true">Heading 1</p><div class="vads-u-visibility--screen-reader">Rendered as Heading 1, a large heading.</div></div></span><span slot="va-table-slot-4"><div class="syntax"><p class="__h2" aria-hidden="true">## Heading 2</p><div class="vads-u-visibility--screen-reader">Two pound symbols followed by Heading 2</div></div></span><span slot="va-table-slot-5"><div class="result"><p class="__h2" aria-hidden="true">Heading 2</p><div class="vads-u-visibility--screen-reader">Rendered as Heading 2, a medium-sized heading</div></div></span><span slot="va-table-slot-6"><div class="syntax"><p class="__h3" aria-hidden="true">### Heading 3</p><div class="vads-u-visibility--screen-reader">Three pound symbols followed by Heading 3</div></div></span><span slot="va-table-slot-7"><div class="result"><p class="__h3" aria-hidden="true">Heading 3</p><div class="vads-u-visibility--screen-reader">Rendered as Heading 3, a smaller heading</div></div></span><span slot="va-table-slot-8"><div class="syntax"><p aria-hidden="true">**Bold**</p><div class="vads-u-visibility--screen-reader">Two asterisks around Bold</div></div></span><span slot="va-table-slot-9"><div class="result"><p class="__bold" aria-hidden="true">Bold</p><div class="vads-u-visibility--screen-reader">Rendered as bold text</div></div></span><span slot="va-table-slot-10"><div class="syntax"><p aria-hidden="true">- Bulleted<br>- List</p><div class="vads-u-visibility--screen-reader">Dash followed by text</div></div></span><span slot="va-table-slot-11"><div class="result"><div aria-hidden="true"><ul><li>Bulleted</li><li>List</li></ul></div><div class="vads-u-visibility--screen-reader">Rendered as a bulleted list</div></div></span><span slot="va-table-slot-12"><div class="syntax"><p aria-hidden="true">((Personalization))</p><div class="vads-u-visibility--screen-reader">Double parentheses around Personalization</div></div></span><span slot="va-table-slot-13"><div class="result"><p aria-hidden="true"><mark>Personalization</mark></p><div class="vads-u-visibility--screen-reader">Rendered as Personalization text in a yellow box</div></div></span><span slot="va-table-slot-14"><div class="syntax"><p aria-hidden="true">[Hyperlink](URL)</p><div class="vads-u-visibility--screen-reader">Left bracket, Hyperlink, right bracket, left parenthesis, URL, right parenthesis</div></div></span><span slot="va-table-slot-15"><div class="result"><p aria-hidden="true"><a href="http://URL" data-action="global#preventAction" tabindex="-1">Hyperlink</a></p><div class="vads-u-visibility--screen-reader">Rendered as a hyperlink, linked to the specified URL</div></div></span><span slot="va-table-slot-16"><div class="syntax"><p aria-hidden="true">&gt;&gt;[Action link](URL)</p><div class="vads-u-visibility--screen-reader">Two greater than signs, left bracket, action link, right bracket, left parenthesis, URL, right parenthesis</div></div></span><span slot="va-table-slot-17"><div class="result"><p aria-hidden="true"><i class="fa-chevron-circle-right vads-u-color--arrow-down vads-u-margin-right--1" aria-hidden="true"></i><a href="http://URL" data-action="global#preventAction" class="vads-u-font-weight--bold" aria-hidden="true" tabindex="-1">Action Link</a></p><div class="vads-u-visibility--screen-reader">Rendered as an action link, clickable to the specified URL</div></div></span><span slot="va-table-slot-18"><div class="syntax"><div aria-hidden="true"><div class="__context">Horizontal Line</div><br>***<div class="__hint"> [3 asterisks]</div><br><div class="__context">Horizontal Line</div></div><div class="vads-u-visibility--screen-reader">Line break required before and after this line: three asterisks, no spaces (***)</div></div></span><span slot="va-table-slot-19"><div class="result"><div aria-hidden="true"><p class="__hr">Horizontal Line</p><hr><p class="__hr">Horizontal Line</p></div><div class="vads-u-visibility--screen-reader">Rendered as a horizontal line</div></div></span><span slot="va-table-slot-20"><div class="syntax"><div aria-hidden="true">&gt; Blockquote</div><div class="vads-u-visibility--screen-reader">Greater than symbol followed by text</div></div></span><span slot="va-table-slot-21"><div class="result"><div aria-hidden="true" class="__blockquote">Blockquote</div><div class="vads-u-visibility--screen-reader">Rendered as blockquote</div></div></span><span slot="va-table-slot-22"><div class="syntax"><div aria-hidden="true">&gt; &gt; Nested line</div><div class="vads-u-visibility--screen-reader">Two greater than symbols followed by text</div></div></span><span slot="va-table-slot-23"><div class="result"><div aria-hidden="true" class="__blockquote"><div class="nested">Nested line</div></div><div class="vads-u-visibility--screen-reader">Rendered as nested line within blockquote</div></div></span></va-table-inner></va-table>

</div>

  </div>
</aside>