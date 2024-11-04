
Using the [Telephone component]({{ site.baseurl }}/components/telephone) will apply the following formatting and accessibility guidance.

### Formatting 

* Use hyphens between numbers, and don't use parentheses to set off the area code: 212-123-1234.
* Use +1 only when the information is specifically addressing Veterans or people who are living outside the U.S.: +1-201-123-1234.
* For phone numbers with an extension, use ext. at the end: 202-123-1234, ext. 9.
* Always include days and hours of operation when listing a phone number.
* Use "select" to indicate the menu option after dialing a phone number. Example: Call 988 and select 1.
* Use a verb ahead of the number. Use "call" or "call us at..." for phone numbers and "text" or "text us at" for text numbers.
* When a phone number has (TTY: 711) included, it should be formatted in parenthesis directly following the phone number. Example: 866-440-1238 (TTY: 711) or 866-440-1238, ext. 4 (TTY: 711)

### Links and aria
* Hyperlink all phone numbers, including (TTY: 711). Include "TTY:" in the link. Don't link the "call" or "text" verb that precedes the number.  
Example: `<a href="tel:2021231234"> 202-123-1234 </a> (<a href="tel:711">TTY: 711</a>)`
* **New guidance as of August 2024:** You no longer need to use aria labels on phone numbers or TTY. This shift came out of evolving accessibility guidance for people who use assistive technology. Teams should stop adding aria labels to phone numbers and TTY in new content, but the shift will take time to implement on existing content. If you have questions, contact the Sitewide Content, Accessibility, and Information Architecture (CAIA) team. 

**Note:** If for some reason you cannot use the Telephone component, you are responsible for meeting the same formatting and accessibility guidance when creating links to phone numbers. 

### Don't use vanity phone numbers in body copy
We don’t use vanity phone numbers in body copy, as it adds visual noise and is not helpful to screen readers. We use and hyperlink only the numeric phone number in body copy.

- **Exception:** In marketing or promotional messaging, such as the right rail promo component, we discourage but make an exception for vanity phone numbers. In marketing or promotional components, use the format: 877-222-VETS (8387) and hyperlink the complete number including the parenthetical.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
  
Call us toll free at <a href="tel:+18008271000" aria-label="8 0 0. 8 2 7. 1 0 0 0.">800-827-1000</a> (<a href="tel:711" aria-label="TTY. 7 1 1.">TTY: 711</a>). We're here Monday through Friday,
8:00 a.m. to 9:00 p.m. ET.

</div>
</div>
</div>
