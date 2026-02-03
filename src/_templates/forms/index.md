---
layout: pattern
title: Forms
inner-title: Overview
permalink: /templates/forms/
redirect_from:
  - /patterns/forms/
contributors: "Shawna Hein, Jonathan Nelson, Liz Lantz, Christian Valla, Becca Walsh, Chris Valarida, Peggy Gannon"
status: use-deployed
intro-text: "Templates and patterns for creating accessible, Veteran-centered forms on VA.gov"
anchors:
  - anchor: When to use forms
  - anchor: The structure of a form
  - anchor: How to design and build
  - anchor: Content considerations
  - anchor: Accessibility considerations
sub-pages:
  - sub-page: How to apply
  - sub-page: Introduction
  - sub-page: Form step
  - sub-page: Form step - minimal
  - sub-page: Review
  - sub-page: Confirmation
  - sub-page: Accessibility guidelines
---

{% include _site-in-this-section.html %}

## When to use forms

Use form templates when you need to collect information from Veterans, their families, or other users. Forms are appropriate for:

- **Benefit applications** where users need to provide personal information, documentation, or make eligibility determinations
- **Multi-step processes** that require saving progress and allowing users to return later
- **Data collection** that requires validation, error handling, and confirmation
- **Authenticated experiences** where users need to review or update their information

### When not to use forms

- For simple feedback or contact requests (use [Ask users for feedback]({{ site.baseurl }}/patterns/ask-users-for/feedback) pattern instead)
- For one-time actions like downloads or quick selections (use buttons or simple interactions)
- For search or filtering interfaces (use [Search]({{ site.baseurl }}/components/search-input) components)

## The structure of a form

{% include component-example.html alt="Representative pages of a form flow for VA.gov." file="/images/templates/forms/flow.png" caption="The anatomy of a form flow." %}

1. **[How to apply (aka Landing) page]({{ site.baseurl }}/templates/forms/how-to-apply).** A page built in Drupal that outlines eligibility requirements, provides details on how to apply, and what happens after an application is submitted.
1. **[Introduction page]({{ site.baseurl }}/templates/forms/introduction).** The form introduction page gives users information about what they can expect before they submit an online application. This page also provides users with steps on how to apply.
1. **[Step form pages](#patterns).** The majority of a form, these pages follow one of the form patterns designed in the system.
1. **[Review page]({{ site.baseurl }}/templates/forms/review).** Allows the user to review information and make edits if necessary.
1. **[Confirmation page]({{ site.baseurl }}/templates/forms/confirmation).** Gives users information about what they can expect after they submit an online application.

## Patterns

All of the patterns in the "[Ask users for...]({{ site.baseurl }}/patterns/)" section are form patterns for collecting information from users. The following patterns are especially useful for form design:

### Essential form patterns
* [Ask users for a single response]({{ site.baseurl }}/patterns/ask-users-for/a-single-response) - One question per page approach
* [Ask users for multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) - How to collect multiple responses to the same set of questions
* [Help users to check answers]({{ site.baseurl }}/patterns/help-users-to/check-answers) - Review page guidance
* [Help users to keep a record of submitted information]({{ site.baseurl }}/patterns/help-users-to/keep-a-record-of-submitted-information) - Confirmation page guidance

### Supporting patterns
* [Help users to complete a sub-task]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task) - Breaking down complex processes
* [Help users to know when their information is prefilled]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) - Managing prefilled data

## How to design and build

Before designing your form, understand the complete digitization process by reviewing the [Guide to Digitizing VA Forms](https://depo-platform-documentation.scrollhelp.site/developer-docs/a-guide-to-digitizing-va-forms). This guide covers stakeholder alignment, requirements gathering, and project planning that should happen before design work begins.

### Design principles for VA forms

When designing forms, follow these principles to create Veteran-centered experiences:

1. **One thing per page**: Focus on a single question or decision to reduce cognitive load
2. **Progressive disclosure**: Only show what users need for the current step
3. **Clear progress indication**: Help users understand where they are and what's next
4. **Save progress automatically**: Never make users lose their work
5. **Plain language**: Use words Veterans understand, not government jargon

### Design for accessibility

Forms must be accessible from the design phase. When creating form designs:

* **Add accessibility annotations**: Use [accessibility annotations]({{ site.baseurl }}/accessibility/accessibility-annotations) to communicate semantic information, heading levels, and interaction requirements to developers
* **Consider keyboard navigation**: Design clear focus states and logical tab order
* **Plan for assistive technology**: Ensure form labels, instructions, and error messages work with screen readers
* **Design for cognitive accessibility**: Use clear visual hierarchy and minimize cognitive load

For detailed implementation guidance, see [Form accessibility guidelines]({{ site.baseurl }}/templates/forms/accessibility-guidelines).

### Building forms with the Forms Library

All VA.gov forms should be built using the [VA Forms Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-form-config-options), which provides:

* **Standardized form functionality**: Built-in progress saving, validation, and navigation
* **Accessibility features**: Focus management, keyboard navigation, and screen reader support
* **Consistent user experience**: Uniform styling and behavior across all VA forms
* **Developer efficiency**: Pre-built components and patterns reduce development time

The Forms Library handles complex functionality like routing between form steps, data validation, and submission processing, allowing teams to focus on the specific questions and content for their form.

### Components used in forms

Forms combine multiple components to create complete experiences:

#### Core form elements
* [Form elements]({{ site.baseurl }}/components/form) - Input fields, dropdowns, checkboxes, and radio buttons
* [Form labels]({{ site.baseurl }}/components/form/label) - Clear, helpful labels for all form fields
* [Error messages]({{ site.baseurl }}/content-style-guide/error-messages) - Helpful guidance when things go wrong

#### Supporting components  
* [Additional info]({{ site.baseurl }}/components/additional-info) - Expandable help content
* [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) - Show progress through multi-step forms
* [Button group]({{ site.baseurl }}/components/button/button-group) - Navigation between form steps

### Page templates for forms

Each stage of a form uses specific templates designed for that purpose:

* **[How to apply page]({{ site.baseurl }}/templates/forms/how-to-apply)** - Pre-form information and eligibility
* **[Introduction page]({{ site.baseurl }}/templates/forms/introduction)** - What to expect and how to prepare
* **[Form step pages]({{ site.baseurl }}/templates/forms/form-step)** - Standard and minimal layouts for collecting information
* **[Review page]({{ site.baseurl }}/templates/forms/review)** - Let users check their answers before submitting
* **[Confirmation page]({{ site.baseurl }}/templates/forms/confirmation)** - What happens next after submission

## Content considerations

Follow all of the content guidelines listed within the VA.gov content style guide when writing for forms.

[Review the complete VA.gov content style guide]({{ site.baseurl }}/content-style-guide/)


#### Use plain language
* Use familiar words instead of government terms
* Explain unfamiliar concepts before asking questions about them

#### Be conversational
* Address users as "you"
* Use active voice: "Enter your address" not "Address should be entered"
* Ask questions the way a helpful person would ask them

#### Provide context
* Explain why you're asking for information
* Tell users what will happen with their information
* Use hint text to clarify what you're asking for

#### Be consistent
* Use the same words for the same concepts throughout the form
* Follow the [VA.gov word list]({{ site.baseurl }}/content-style-guide/word-list) for standard terms
* Match the language users see in their VA benefits and services

### Legal language vs. plain language

In general, our online forms should not be framed as a 1:1 mapping of the paper form. 

A legal memo from the Office of Management and Budget addresses this situation:

> “As long as the underlying, approved form is not altered and the interactive materials essentially collect the same information, then OIRA considers these applications a nonsubstantive change to an already approved collection, and would encourage their development.”

Source: [Office of Management and Budget [OMB] Memorandum M-16-17, 2016, p. 5, Section III (PDF)](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf)

You may need to get PRA approval or other kinds of approval if you are tweaking the form itself and/or adding fields.

While forms sometimes require legal or regulatory language, prioritize plain language whenever possible. You can:

* Provide plain language summaries with legal text in [Additional info]({{ site.baseurl }}/components/additional-info) components
* Use parenthetical explanations: "Dependents (spouse, children, or other family members you support)"
* Link to detailed legal definitions rather than including them inline

## Accessibility considerations

Forms must be accessible to all users, including those who use screen readers, keyboard navigation, or other assistive technologies.

### Why accessible forms matter for Veterans

Approximately 1 in 4 Veterans live with a service-connected disability. When forms aren't accessible, they create barriers that can prevent Veterans from accessing the benefits and services they've earned.

### Essential accessibility requirements

* **Proper form labels**: Every form field must have a clear, descriptive label
* **Keyboard navigation**: All form functionality must work with keyboard-only navigation
* **Focus management**: Users must know where they are when navigating between form steps
* **Error handling**: Error messages must be clearly associated with the relevant form fields
* **Screen reader support**: All form information must be announced clearly to assistive technology users

### Accessibility resources

* [Form accessibility guidelines]({{ site.baseurl }}/templates/forms/accessibility-guidelines) - Detailed technical requirements for building accessible forms
* [Focus management]({{ site.baseurl }}/accessibility/focus-management) - Comprehensive focus guidance
* [Accessibility annotations]({{ site.baseurl }}/accessibility/accessibility-annotations) - Tools for communicating accessibility requirements to developers


## Related resources

### Implementation guidance
* [Guide to Digitizing VA Forms](https://depo-platform-documentation.scrollhelp.site/developer-docs/a-guide-to-digitizing-va-forms) - Complete process for form digitization projects
* [Fieldsets, legends, and labels]({{ site.baseurl }}/components/form/#fieldsets-legends-and-labels) - Proper form markup
* [Content for form labels]({{ site.baseurl }}/content-style-guide/form-labels) - Writing effective labels
* [Hint text guidelines]({{ site.baseurl }}/components/form/#hint-text) - Providing helpful context