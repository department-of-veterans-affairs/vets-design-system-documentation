**When Personally Identifiable Information (PII) or Protected Health Information (PHI) is an option in a selection list, selections can’t be tracked in analytics or passed into other page elements that may be tracked.**

- Analytics tracking for this component must remain off if the options contain PII or PHI.
- Selections can’t be utilized in elements on follow-on or related pages, such as a parameter or title tag.

**Example:** A form application asks the user to select a health condition from a dropdown list. Details about a person’s health conditions are considered PHI. The option selected can be stored in our data systems, but the selection can’t be tracked in analytics or utilized as part of the title tag in the next page.

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)
