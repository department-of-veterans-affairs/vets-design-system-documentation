
Using the [Telephone component]({{ site.baseurl }}/components/telephone) will apply the following formatting and accessibility guidance:

* Use hyphens between numbers, and don't use parentheses to set off the area code: 212-123-1234.
* Use +1 only when the information is specifically addressing Veterans or people who are living outside the U.S.: +1-201-123-1234.
* For phone numbers with an extension, use ext. at the end: 202-123-1234, ext. 9.
* Always include days and hours of operation when listing a phone number.
* Use "select" to indicate the menu option after dialing a phone number.
* Use a verb ahead of the number. Use "call" or "call us at..." for phone numbers and "text" or "text us at" for text numbers.
* Hyperlink all phone numbers, including TTY numbers. It is not a requirement to link the "call" or "text" verb that precedes the number. We do however include "TTY" in the link and aria-label to make it clear that it's specifically for TTY so that users who need the service see it and so those who do not do not unintentionally call a TTY number.
* Include an aria label using spaces between the digits and periods between sections in order to have screen readers read the phone number one digit at a time like a phone number, rather than as thousands or hundreds. For example:
  * `<a href="tel:+18008271000" aria-label="8 0 0. 8 2 7. 1 0 0 0.">800-827-1000</a>`
  * `<a href="tel:711" aria-label="TTY. 7 1 1.">TTY: 711</a>`. 
* If the phone number has an extension, use this format for the aria label:
  * `<a href="tel:5551231234,4" aria-label="5 5 5. 1 2 3. 1 2 3 4. extension. 4.">555-123-1234, ext. 4</a> (<a href="tel:711" aria-label="TTY. 7 1 1.">TTY: 711</a>)`

If for some reason you cannot use the Telephone component, you are responsible for meeting the same formatting and accessibility guidance when creating links to phone numbers. 

#### Don't use vanity phone numbers in body copy
We don’t use vanity phone numbers in body copy, as it adds visual noise and is not helpful to screen readers. We use and hyperlink only the numeric phone number in body copy.

- **Exception:** In marketing or promotional messaging, such as the right rail promo component, we discourage but make an exception for vanity phone numbers. In marketing or promotional components, use the format: 877-222-VETS (8387) and hyperlink the complete number including the parenthetical.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
  
Call us toll free at <a href="tel:+18008271000" aria-label="8 0 0. 8 2 7. 1 0 0 0.">800-827-1000</a>. We're here Monday through Friday,
8:00 a.m. to 9:00 p.m. ET.

</div>
</div>
</div>
