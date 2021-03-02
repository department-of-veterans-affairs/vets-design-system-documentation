---
layout: default
sub_section: form-controls
title: Form controls
draft: true
anchors:
  - anchor: Text inputs
  - anchor: Select box
  - anchor: Checkboxes
  - anchor: Radio buttons
  - anchor: Date input
---

# Form controls

<p class="va-introtext">
Form controls allow users to enter information.
</p>

### Guidance  

- Group each set of thematically related controls in a `fieldset` element. Use the `legend` element as a heading within each one. The `fieldset` and `legend` elements make it easier for screen reader users to navigate the form.
- Use a single legend for fieldset (this is required). One example of a common use of `fieldset` and `legend` is a question with radio button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being inside the `legend` tag.
- Embed multiple fieldsets and legends for more complex forms if the form is not broken in separate chapters.
- Keep your form inputs and labels arranged vertically along the same Y axis. This approach is ideal, from an accessibility standpoint, because of limited vision that makes it hard to scan from right to left.

## Text inputs

Text inputs allow people to enter any type of text unless otherwise restricted.

<div class="site-showcase">
{% include_relative html/text-inputs.html %}
</div>

{% include snippet.html content='html/text-inputs.html' %}

### Accessibility

- Avoid `placeholder` text for accessibility reasons. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.

### Usability

#### When to use

- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
- When users want to be able to paste in a response.

#### When to consider something else

- When users are choosing from a specific set of options.

#### Guidance

- The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.
- Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users. Consider using specific `pattern` attributes or `type="tel"` or `type="number"` to trigger specific mobile keyboards.
- Only show error validation messages or stylings after a user has interacted with a particular field.
- Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

## Select box

A select box allows users to select one option from a list.

<div class="site-showcase">
{% include_relative html/select-box.html %}
</div>

{% include snippet.html content='html/select-box.html' %}

### Accessibility

- Make sure your select box has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).
- Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

### Usability

#### When to use

- Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

#### When to consider something else

- If the list of options is very short. Use radio buttons instead.
- If the list of options is very long. Let users type the same information into a text input that suggests possible options instead.
- If you need to allow users to select more than one option at once. Users often don’t understand how to select multiple items from select boxes. Use checkboxes instead.
- If you are intending to provide navigation. To help users navigate to a section on the same page or another page in the site, use a [text link](/design/typography#links) or the [Sidenav component](/components/sidenav).

#### Guidance

- Test select boxes thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.
- On mobile devices, select boxes use a scroll wheel rather than a dropdown, which some users find difficult to use.
- Avoid making options in one select box menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.
- When most users will (or should) pick a particular option, make it the default: `<option selected="selected">Default</option>`
- Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.

## Checkboxes

Allows users to select one or more items from a visible list.

<div class="site-showcase">
{% include_relative html/checkboxes.html %}
</div>

{% include snippet.html content='html/checkboxes.html' %}

### Accessibility
- Surround a related set of checkboxes with a `<fieldset>`. The` <legend>` provides context for the grouping. Do not use fieldset and legend for a single check.
- The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with `margin-left: -2rem; opacity: 0; position: absolute; left: auto;`.
- Each input should have a semantic `id` attribute, and its corresponding `label` should have the same value in it’s `for` attribute.
- The `title` attribute can replace `<label>`.

### Usability

#### When to use
- When a user can select any number of choices from a set list.
- When a user needs to choose “yes” or “no” on only one option (use a stand-alone checkbox). For example, to toggle a setting on or off.
- When users need to see all the available options at a glance.

#### When to consider something else
- If there are too many options to display on a mobile screen.
- If a user can only select one option from a list (use radio buttons instead).

#### Guidance
- Users should be able to tap on or click on either the text label or the checkbox to select or deselect an option.
- List options vertically if possible; horizontal listings can make it difficult to tell which label pertains to which checkbox.
- Avoid using negative language in labels as they can be counterintuitive. For example, “I want to receive a promotional email” instead of “I don’t want to receive promotional email.”
- If you customize, make sure selections are adequately spaced for touch screens.

## Radio buttons

Radio buttons allow users to see all available choices at once and select exactly one option.

<div class="site-showcase">
{% include_relative html/radio-buttons.html %}
</div>

{% include snippet.html content='html/radio-buttons.html' %}

### Accessibility

- Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.
- The `title` attribute can replace `<label>`.

### Usability

#### When to use
- When users need to select only one option out of a set of mutually exclusive choices.
- When the number of available options can fit onto a mobile screen.

#### When to consider something else
- Consider checkboxes if users need to select more than one option or if there is only one item to select.
- Consider a dropdown if you don’t have enough space to list out all available options.
- If users should be able to select zero of the options.

#### Guidance
- Users should be able to tap on or click on either the text "label" or the radio button to select or deselect an option.
- Options that are listed vertically are easier to read than those that are listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which radio button.
- If you customize, make sure selections are adequately spaced for touch screens.
- Use caution if you decide to set a default value. Setting a default value can discourage users from making conscious decisions, seem pushy, or alienate users who don’t fit into your assumptions. If you are unsure, leave nothing selected by default.

## Date input

Use the date input component to help users enter a date they would know or a date they can approximate.

<div class="site-showcase">
{% include_relative html/date.html %}
</div>

{% include snippet.html content='html/date.html' react_component='https://design.va.gov/storybook/?path=/docs/components-date--default' %}

### Accessibility
Follow text input and select box guidance. The component consists of two select boxes for month and day inputs and a text input for year input. [LINK] Accessibility guidance for text inputs. Accessibility guidance for select boxes.[LINK]

### Usability

#### When to use
Use a month, day, year date input component for a date a user knows, like a date of birth or marriage.  (Example: July 21, 1992). 
Use a month year date input component for a date a user can approximate, like a date they graduated from high school or a GED equivalent. (Example: May 2010) 

#### When to consider something else
-If users are trying to schedule something, consider using a calendar picker
Note: We do not have a calendar picker as part of the design system yet. This is still an experimental component. For reference, visit the VA online scheduling tool. 

#### Guidance
- The component consists of two select boxes for month and day inputs and a text input for year input. For those components please check the usability guidance for select boxes and text inputs
- For the month select box, provide the user unabbreviated months to choose from. Example: January

