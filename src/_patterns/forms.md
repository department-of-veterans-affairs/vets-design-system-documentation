---
layout: default
title: Forms
draft: true
anchors:
  - anchor: All or none of the above
  - anchor: Error messages
  - anchor: Templates
---

# Forms

<div class="va-introtext" markdown="1">
Patterns used in form design on VA.gov.
</div>

---

## All or none of the above

In some questions, either none of the options or all of them may apply to the user. Here is how to design responses for that instance.

### Checkboxes

In the case where the response uses checkboxes, below the question, specify that the user may “select all that apply.”

<img src="{{site.baseurl}}/images/more-than-one-checkbox.png" alt="set of checkboxes" style="max-width: 376px">

We recommend that you **do not** include checkbox options for “all of these” or “none of these” since the user may already select as many or as few boxes as necessary; implied by the text: “select all that apply.” Introducing these options could add unnecessary complexity to interaction design, the codebase, and even to the data model if not correctly handled on the backend.

Sometimes, due to specific requirements from the VA, you may have no choice. But to avoid creating a scenario where the user would be presented with an all or none checkbox, consider the following options:

- Think about reframing the question
  - You can break the question into two separate questions, for example, start with a response using radio buttons. Then, you can present a set of checkboxes as a conditional follow-up question.
- Be explicit that the user is not required to make a selection


### Radio options
In the case of radio options, you may include options for “all of these” or “none of these” after all other options are listed.

When using an “all of these” option, ensure that under no circumstance would a partial set of options apply to the user.

### Select box
Before choosing a select box, follow the [guidance]({{site.baseurl}}/components/form-controls#usability-1) to determine if you should be using radio buttons instead.

In the case of radio options, you may include options for “all of these” or “none of these” after all other options are listed.

When using an “all of these” option, ensure that under no circumstance would a partial set of options apply to the user.

---

## Error messages

<div class="va-introtext" markdown="1">
Error messages let users know when they have made a mistake on a form field.
</div>

In all cases, only show error validation messages or stylings after a user has interacted with a particular field.

### Errors on text inputs

For all text inputs, place the error message between the label and the input.

<div class="site-showcase">
{% include_relative html/error-text-inputs.html %}
</div>

{% include snippet.html content='html/error-text-inputs.html' %}

#### Guidance

In general, when there is an error on a form, a few things must happen.

* The form field and its corresponding `<label>` are wrapped in a container with a class name of `usa-input-error`. This container will provide a thick border and padding to visual indicate an error message to users who might have difficulty perceiving contrast. It also changes the input’s border-color to red as a secondary indicator.
* An error message is placed between the label and the form field.
* The form field receives an `aria-describedby` attribute that references the `id` of the error message.
* Prepending `<span class="sr-only">Error</span>` to error messages clearly alerts screen readers there is an error.

The HTML for a typical error is:

```html
<span class="usa-input-error-message undefined" role="alert" id="file-input-149-error-message">
  <span class="sr-only">Error</span>
  Error message
</span>
```

### Error on select boxes

Select box errors are similar to text inputs.

<div class="site-showcase">
{% include_relative html/error-select-box.html %}
</div>

{% include snippet.html content='html/error-select-box.html' %}

#### Guidance

Error messages are generally the same. The error message is slightly different in that it does not include the screen reader-only “Error” text.

```html
<span class="usa-input-error-message" id="select-159-error-message" role="alert">This is the error message</span>
```

### Errors on radio buttons

<div class="site-showcase">
{% include_relative html/error-radio-buttons.html %}
</div>

{% include snippet.html content='html/error-radio-buttons.html' %}

#### Guidance

* Radio buttons typically appear inside of `<fieldset>’s. You may set the class name `usa-input-error` on the `<fieldset>` containing all of the radio buttons.
* The error message is placed just below the `<legend>`


### Errors on checkboxes

Unlike other form elements, error messages for checkboxes appear below.

#### Error message above checkbox

<div class="site-showcase">
{% include_relative html/error-checkbox.html %}
</div>

{% include snippet.html content='html/error-checkbox.html' %}

#### Error message with a checkbox group

<div class="site-showcase">
{% include_relative html/error-checkbox-group.html %}
</div>

{% include snippet.html content='html/error-checkbox-group.html' %}

##### Guidance

* Checkbox groups typically appear inside of `<fieldset>’s. You may set the class name `usa-input-error` on the `<fieldset>` containing all of the checkboxes.
* The error message is placed just below the `<legend>`

### Error message on file input

<div class="site-showcase">
{% include_relative html/error-file-input.html %}
</div>

{% include snippet.html content='html/error-file-input.html' %}

#### Guidance

The guidance for file inputs is the same as the text inputs.


---

## Templates

Common form structures and designs used on VA.gov.

### Address form

<div class="site-showcase">
{% include_relative html/address-form.html %}
</div>

{% include snippet.html content='html/address-form.html' %}

### Name form

<div class="site-showcase">
{% include_relative html/name-form.html %}
</div>

{% include snippet.html content='html/name-form.html' %}
