---
layout: content-style-guide
title: Email and text notifications
intro-text: All email and text notifications we send to Veterans should be trustworthy, actionable, and easy to understand. 
anchors:
  - anchor: General guidance for notifications
  - anchor: Email notifications
---

## General guidance for email and text notifications

**Note:** This notifications guidance applies to emails and texts we send to Veterans related to interactions they have with VA—like reminders or updates related to their submitted online forms, disability claims, and health appointments. We'll be adding more guidance for text notifications soon. This guidance does not apply to outreach emails and texts that VA communications teams send for awareness and education about VA benefits and services.

### Follow our content style guide and existing patterns
* Email and text notifications should use plain language and follow our VA style guide wherever possible. This includes addressing the recipient as “you” and using “we” to refer to VA. [Review our top 10 plain language standards](https://design.va.gov/content-style-guide/plain-language/#top-10-va-plain-language-standards)
* For some types of emails, VA Notify has sample templates with plain language content that's ready to use. You'll just need to fill in any manual variables and adjust other content as needed. This includes the emails in the form submission status pattern. [Review the form submission status pattern](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status) 

### Protect Veterans' personal information
* Always get approval for new or updated notifications from a VA privacy officer. 
[Find your product's privacy officer (link only works on VA network)](https://dvagov.sharepoint.com/sites/OITPrivacyHub/SitePages/Privacy-Officer-Locator-Resources.aspx)
* Email and text notifications are not secure, so we can’t include Veterans’ personally identifiable information (PII) or protected health information (PHI).
* Privacy officers may allow exceptions to the PII/PHI rule when a Veteran opts in to receive PII/PHI in their notifications. But you must work closely with the privacy office and get specific approval for any notifications that include PII/PHI.

## Email notifications

### Subject line 

* Aim for no more than 9 words and 60 characters in subject lines
* If the goal of the email is to prompt the Veteran to take an action, make the subject line a CTA starting with an action verb
    * Like this: Review your dependent information for VA benefits
* If it's a reminder or confirmation email, make the subject line a short phrase or statement
    * Like this: VA appointment reminder 
    * Like this: We've received your VA form 
* If it's a post-submission failure notification (part of the zero silent failures initiative), start the subject line with "Action needed"
    * Like this: Action needed: We couldn't process your VA form

### Salutation and closing

* Personalize the email with the Veteran's first name in the salutation as “Dear ((first_name)),"—but never include both first and last name, because this counts as PII
* Don't include a closing or sign the email as "VA.gov" or "VA"

**Note:** Don't say "Thank you for your service" in the closing or anywhere else in the email. Research has found that some Veterans may have negative feelings about this phrase.

### Heading levels 

* Heading level 1 should start off the email and should be either exactly the same wording as the subject line, or a slightly more detailed version of the subject line (for example, using “We received your VA form” in subject line and “We received your authorization to release medical information” in H1, to keep subject line in character limits)
* Heading levels 2, 3, and 4 are also supported to chunk content, making it more accessible and easier to scan

### Action Link
* Action Links are an extension of a regular link that serve as the primary way for a user to complete a call to actions or find need-to-know information--they should exist as their own line
* Begin the Action Link with a verb and always include the purpose and destination—if the destination leads to the VA website, add "on VA.gov" as the destination
  * Try to use a brief, clear Action Link like "Submit your disability claim on VA.gov" or "Check COVID-19 symptoms on the CDC website"
* Don't include more than 3 Action Links total--it is strongly encouraged to only use one
* It is not necessary to use an Action Link for informational emails where there is no action for the reader to perform (e.g. a contact info update)
* Avoid using “Click here,” since not all people are physically clicking Action Links
* Avoid using generic text like “Learn more” and “Read more” by themselves
  * **Like this:** Learn how to pay your copay bill on VA.gov
* If necessary, Action Links can be used within a Blockquote
* Where relevant, [follow general VA style guidance for links](https://design.va.gov/content-style-guide/links)

If you're using VA Notify, use the analytics link generator for UTM tracking

### Links 

* Links should NOT be used for primary call-to-actions--instead they should be used for secondary things like additional resources
  * **Like this:** To learn more about monthly enrollment verification, visit our [Frequently Asked Questions (FAQ)](https://www.va.gov/resources/gi-bill-enrollment-verification-faqs/)
* Put each link on a separate line
* Aim to use no more than 3 links in each email
* For additional guidance, [follow general VA style guidance for links](https://design.va.gov/content-style-guide/links)

If you're using VA Notify, use the analytics link generator for UTM tracking 

### Bulleted lists

* Bulleted lists are supported to break up paragraph content. The style follows the VA design system bullet styling

### Bolded text

* Bolded text is used to emphasize important information as needed
* It should NOT be used to establish hierarchy. Headings are used to establish hierarchy

### Divider

* This is a horizontal line used to create visual separation between two sections--it signifies a change in topic
* Avoid using dividers between short, individual items that are close in proximity
* Dividers precede the Contact section and the Footer

### Blockquote (formerly known as the Feature Card)

* Use the Blockquote component to display important details, like confirmation numbers or the date of an upcoming appointment
* Use only one Blockquote in each email
* If the feature card displays information from an online form confirmation screen, make sure the data field labels (like "Date submitted") match between the feature card and the confirmation screen
* Avoid using bolded text as headings--the recommended heading for blockquotes is Heading level 4
* Action Links are supported within a blockquote
* Nested blockquotes are also supported within Blockquotes--this should be used rarely, only when secondary information needs to be quoted or referenced inside a primary callout (for example, showing an exact error message or policy excerpt inside highlighted instructions)

### Contact section

* Include a contact section so users can reach out if they have questions
* By default, “Have questions?” heads the contact section with a Heading level 3, uses “Visit [https://va.gov](https://va.gov) or call [800-827-1000](tel:800-827-1000) (TTY: [711](tel:711)). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.” as the content, and is preceded by a divider
* Contact details can be adjusted as needed
* If the user is required or recommended to reach out to the VA in the body content, the contact section can be removed to reduce redundancy.

### Footer 

* Use the footer to explain why we sent this email and tell people not to reply:
    * **Like this:** You’re receiving this email because you submitted a form on VA.gov. Don’t reply to this email.

