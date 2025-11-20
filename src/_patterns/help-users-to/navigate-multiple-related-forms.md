---
layout: pattern
permalink: /patterns/help-users-to/navigate-multiple-related-forms
sub-section: help-users-to
title: Navigate multiple related forms
intro-text: "Use this pattern to help Veterans understand which forms come next, which are optional, and how to move through multiple forms without confusion."
status: use-deployed
research-title: 
figma-link: 
code-link: 
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

**When a Veteran's primary form submission leads to follow-up forms or actions.** Use this pattern to guide Veterans through multi-form processes by:

* Clearly identifying which additional forms are required vs. optional
* Providing logical ordering when sequence matters
* Offering consistent linking strategies (online tools vs. PDFs)
* Setting clear expectations about timing and next steps

**When and where to point to other forms:**
* **On confirmation pages** for forms that become relevant after the primary submission
* **On intro pages** for forms that Veterans should know about before starting (preparation)
* **In "What to expect next" sections** for immediate next steps
* **In help text or additional info components** for context-specific guidance during form completion

**On confirmation pages.** Use this pattern primarily on confirmation pages as part of the "What to expect next" section for:
* Forms that become available after the primary form is processed
* Required follow-up forms with specific deadlines
* Optional supplemental forms that can enhance the application

**On intro pages when helpful.** Mention related forms upfront when:
* Veterans need to gather additional documents or information before starting
* Multiple forms are part of a single application process
* Understanding the full scope helps Veterans decide whether to proceed
* The additional forms significantly impact the time or effort required

### When not to use this pattern

**For unrelated forms.** Don't group forms together that serve different purposes or benefits, even if they might apply to the same Veteran.

**When follow-up timing is unclear.** If your team doesn't have clear information about when or if additional forms will be needed, focus on what you do know rather than speculating about future requirements.

## Examples

### Confirmation page with required follow-up

{% include component-example.html alt="Confirmation page showing required follow-up form" file="/images/patterns/help-users-to/navigate-multiple-related-forms/confirmation-required.png" caption="Example of a confirmation page directing Veterans to a required supplemental form with clear timing expectations." class="x2" %}

In this example, the Veteran must complete an additional form to finalize their application. The guidance:
* Uses clear, direct language about the requirement
* Provides a timeline for when to complete it
* Links to the online version of the form
* Explains what happens if they don't complete it

### Confirmation page with optional forms

{% include component-example.html alt="Confirmation page showing optional related forms" file="/images/patterns/help-users-to/navigate-multiple-related-forms/confirmation-optional.png" caption="Example showing how to present optional forms that may enhance or expedite the Veteran's application." class="x2" %}

This example shows how to present optional forms by:
* Clearly labeling them as optional
* Explaining the benefit of completing them
* Using consistent formatting for multiple options
* Providing both online and PDF options when appropriate

### Intro page preparation

{% include component-example.html alt="Intro page mentioning related forms" file="/images/patterns/help-users-to/navigate-multiple-related-forms/intro-page.png" caption="Example of mentioning related forms on an intro page to help Veterans prepare." class="x2" %}

## How to design and build

### How this pattern works

**Distinguish required from optional forms clearly.** Use explicit language like "You must also complete..." for required forms and "You may also want to submit..." for optional forms. Don't rely on visual cues alone.

**Prioritize online experiences over PDFs.** When both online and PDF versions exist, default to linking to the online experience. Provide PDF links as secondary options or for users who specifically need them.

**Provide clear sequencing when order matters.** If forms must be completed in a specific order, use numbered lists or process lists to make the sequence clear. If order is flexible, use bullet points and explain that flexibility.

**Set realistic expectations about timing.** Tell Veterans when they should complete additional forms and what happens if they don't. Be specific about deadlines when possible.

**Link to the right tools.** Direct Veterans to the most appropriate version of each form:
* Link to online applications when available
* Link to authenticated experiences (like My VA) when relevant
* Provide PDF downloads only when necessary or requested

**Group related forms logically.** When multiple forms are needed, group them by:
* Priority (required vs. optional)
* Timing (immediate vs. later)
* Purpose (related to the same benefit or process)

### Placement

**Decision framework for where to mention related forms:**

**Use confirmation pages when:**
* The additional form becomes relevant only after the primary form is submitted
* You need to provide specific deadlines or next-step timing
* The form is optional and Veterans can decide later whether they need it

**Use intro pages when:**
* Veterans need to prepare documents for multiple forms before starting
* Multiple forms are part of one comprehensive application process
* Not knowing about additional forms would significantly impact the Veteran's decision to start
* The additional forms must be completed in a specific sequence

**Implementation by location:**

**On confirmation pages:** Include this guidance in the "What to expect next" section, after the primary confirmation message and before general next steps.

**On intro pages:** When mentioning related forms upfront, include this information in a clearly labeled section like "Other forms you may need" or "Additional requirements."

**In help text:** For complex multi-form processes, consider adding brief mentions in form help text to prepare Veterans.

### Components used in this pattern

* [Process list]({{ site.baseurl }}/components/process-list) - For sequential steps or ordered forms
* [Link]({{ site.baseurl }}/components/link) - For linking to online forms and PDFs
* [Button]({{ site.baseurl }}/components/button) - For primary calls-to-action to start the next form
* [Additional info]({{ site.baseurl }}/components/additional-info) - For optional details about form purposes

## Content considerations

### Writing clear form relationships

**Use parallel structure.** When listing multiple forms, use consistent sentence structure and formatting:

**Good:**
* Complete Form 21-526EZ for disability compensation
* Complete Form 21-4140 for increased evaluation
* Complete Form 21-8940 for individual unemployability

**Avoid:**
* Form 21-526EZ (disability compensation)
* You might want to fill out Form 21-4140 to request increased evaluation  
* Individual unemployability requires 21-8940

**Be specific about requirements.** Don't use vague language about whether forms are needed:

**Good:** "You must also complete Form 10-10EZ to enroll in VA health care."

**Avoid:** "You might need to fill out other forms depending on your situation."

### Linking guidelines

**Default to online experiences:** "Complete your Application for Health Care Benefits" (linking to online form)

**Provide PDF alternatives clearly:** "If you can't complete the form online, you can download and mail VA Form 10-10EZ (PDF)."

**Use descriptive link text:** Link text should clearly describe what the user will find, not generic phrases like "click here" or "this form."

### Setting expectations

**Be clear about timing:** "Complete this form within 30 days of your appointment" rather than "Complete this form soon."

**Explain consequences:** "If you don't submit this form by the deadline, we may not be able to process your application."

**Provide context:** "This additional form helps us determine the full extent of your benefits."

## Accessibility considerations

**Ensure proper heading structure.** Use hierarchical headings (H3, H4) to organize sections of related forms information.

**Use clear link text.** Screen reader users should understand form relationships and requirements from link text alone.

**Structure lists properly.** Use proper HTML list markup for groups of related forms to ensure screen readers announce the relationships correctly.

**Test with assistive technology.** Ensure that the relationship between forms, their priorities, and their deadlines is clear when using screen readers or voice control.
