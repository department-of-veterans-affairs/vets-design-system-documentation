---
layout: pattern
permalink: /patterns/help-users-to/navigate-multiple-related-forms
sub-section: help-users-to
title: Navigate multiple related forms
intro-text: "Use this pattern to help Veterans understand which forms come next, which are optional, and how to move through multiple forms without confusion."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

Some VA.gov form flows require Veterans to complete additional forms to accomplish their goals. This pattern helps teams design consistent experiences when a Veteran needs to complete more than one form by providing clear guidance on next steps, priorities, and expectations.

## Usage

### When to use this pattern

#### When a Veteran's primary form submission leads to follow-up forms

Use this pattern to guide Veterans through multi-form processes by:

* Clearly identifying which additional forms are required vs. optional
* Providing logical ordering when sequence matters
* Offering consistent linking strategies (online tools vs. PDFs)
* Setting clear expectations about timing and next steps

#### When a Veteran's primary form submission leads to follow-up actions

Some form submissions require Veterans to provide additional evidence to be submitted with their form. Use this pattern to guide Veterans on how to submit that evidence by:

* Listing additional evidence or documentation that the Veteran needs to submit to VA on the introduction page
* Providing ways within the form for the user to submit digital copies of this evidence
* Not preventing the user from submitting the form if they don't have the documents available—allow them to submit what they have and provide clear guidance on how to submit remaining documents later
* Reminding users on the confirmation page of any additional information that needs to be submitted and how it can be submitted to VA


### When not to use this pattern

**For unrelated forms.** Don't group forms together that serve different purposes or benefits, even if they might apply to the same Veteran.

**When follow-up timing is unclear.** If your team doesn't have clear information about when or if additional forms will be needed, focus on what you do know rather than speculating about future requirements.

## Examples

### Introduction page preparation

{% include component-example.html alt="VA Form 21-0966 Intro page mentioning related forms" file="/images/patterns/help-users-to/navigate-multiple-related-forms/intro-page.png" caption="VA Form 21-0966 example of mentioning related forms on an intro page to help Veterans plan ahead." class="x2" %}

### Mid-form flow
{% include component-example.html alt="Midform flow telling user that they need to submit additional forms." file="/images/patterns/help-users-to/navigate-multiple-related-forms/mid-form.png" caption="VA Form 21P-0969 instructs a user to download a now required form. If they have already filled it out, they are also able to upload it in the middle of this form process." class="x2" %}

### Confirmation page with required follow-up

{% include component-example.html alt="Confirmation page showing required follow-up form" file="/images/patterns/help-users-to/navigate-multiple-related-forms/confirmation-example-1.png" caption="VA Form 21-0972 Example of a confirmation page directing Veterans to the next forms they should submit." class="x2" %}

### Confirmation page with optional forms

{% include component-example.html alt="Confirmation page showing optional related forms" file="/images/patterns/help-users-to/navigate-multiple-related-forms/confirmation-example-2.png" caption="Example showing optional forms that a Veteran may now complete after completing this form." class="x2" %}
  
## How to design and build

**Clearly distinguish required forms from optional forms.** Use explicit language like "You must also complete..." for required forms and "You may also want to submit..." for optional forms. Don't rely on visual cues alone.

**Prioritize online experiences over PDFs.** When both online and PDF versions exist, default to linking to the online experience. Links to PDFs can also be included as a secondary option to the online experience.

**Set realistic expectations about timing.** Tell Veterans when they should complete additional forms and what happens if they don't. Be specific about deadlines when possible.

**Link to the right tools.** Direct Veterans to the most appropriate version of each form:
* Link to about pages for forms. These about pages will provide the most options available for Veterans to fill out a form, including:
  * Filling out the form online in their browser
  * Downloading the PDF
  * Uploading a PDF
* Link to authenticated experiences (like My VA) when relevant
* Provide direct PDF downloads only when necessary or requested

**Group related forms logically.** When multiple forms are needed, group them in a way that helps users understand priority and context — and clearly label that grouping. Teams should choose one logical approach based on the importance of the forms and what matters most for user decision-making:

* **By priority:** “Required forms” vs. “Optional forms”
  Use when users must complete certain forms before others.
* **By timing:** “Complete now” vs. “Complete later”
  Use when the timing of actions matters more than type or purpose.
* **By purpose:** “Forms related to your disability benefits” vs. “Forms related to dependents”
  Use when forms serve different but related goals in the same process.

Consistency of labeling helps Veterans understand what’s essential versus optional and when to act.

### Placement

#### Use on introduction pages when
* Veterans need to prepare documents for multiple forms before starting
* Multiple forms are part of a single application process
* Understanding the full scope helps Veterans decide whether to proceed
* The additional forms significantly impact the time or effort required

When mentioning related forms up front, include this information in a clearly labeled section like "Other forms you may need" or "Additional requirements."

#### Use in the middle of a form when
* The user's answer to a question triggers the need for an additional form

When a user's response makes another form necessary:
* Allow them to open the required form in a new tab so they don't lose their progress
* Link to the online version of the form when available (rather than the PDF)
* Remind them about the additional form on the confirmation page
* If only a PDF is available, let them download it and upload the completed version later in the current form

#### Use on confirmation pages when
* Forms become available after the primary form is processed
* Veterans need to meet specific deadlines
* The additional form is optional, and Veterans can decide later if they need it

Use this pattern primarily on confirmation pages as part of the "What to expect next" section or in its own section labeled "What are my next steps?"


### Other patterns and templates used in this pattern

* [Help users keep a record of submitted information]({{ site.baseurl }}/patterns/help-users-to/keep-a-record-of-submitted-information) - Confirmation page
* [Forms - Introduction page template]({{ site.baseurl }}/templates/forms/introduction)
* [Forms - Confirmation page template]({{ site.baseurl }}/templates/forms/confirmation)

### Components used in this pattern

* [Process list]({{ site.baseurl }}/components/process-list) - For sequential steps or ordered forms
* [Link]({{ site.baseurl }}/components/link) - For linking to online forms and PDFs
* [Additional info]({{ site.baseurl }}/components/additional-info) - For optional details about form purposes
* [Alert]({{ site.baseurl }}/components/alert) - For notifying users of additional actions that need to be taken

## Content considerations
  
### Writing clear form relationships

**Use parallel structure.** When listing multiple forms, use consistent sentence structure and formatting:

**Like this:**
* Disability compensation claim (VA Form 21-526EZ)
* Pension claim (VA Form 21P-527EZ)
* Pension claim for survivors (21P-534EZ)

**Not this:**
* Form 21-526EZ (disability compensation)
* You might want to fill out Form 21-4140 to request increased evaluation  
* Individual unemployability requires 21-8940

**Be specific about requirements.** Don't use vague language about whether forms are needed:

**Like this:** "You must also complete Form 10-10EZ to enroll in VA health care."

**Not this:** "You might need to fill out other forms depending on your situation."

The content style guide contains more [examples on how to mention forms on VA.gov]({{ site.baseurl }}/content-style-guide/government-forms).

### Linking guidelines

**Default to online experiences.** "Complete your Application for Health Care Benefits" (linking to online form)

**Use descriptive link text.** Link text should clearly describe what the user will find, not generic phrases like "click here" or "this form."

### Setting expectations

**Be clear about timing.** "Complete this form within 30 days of your appointment" rather than "Complete this form soon."

**Explain consequences.** "If you don't submit this form by the deadline, we may not be able to process your application."

**Provide context.** "This additional form helps us determine the full extent of your benefits."

## Accessibility considerations

**Ensure proper heading structure.** Use hierarchical headings (H3, H4) to organize sections of related forms information.

**Use clear link text.** People using screen readers should understand form relationships and requirements from link text alone.

**Structure lists properly.** Use proper HTML list markup for groups of related forms to ensure screen readers announce the relationships correctly.

**Test with assistive technology.** Ensure that the relationship between forms, their priorities, and their deadlines is clear when using screen readers or voice control.
