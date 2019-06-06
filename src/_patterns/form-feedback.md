---
layout: default
title: Form feedback
anchors:
  - anchor: Error messages
---

# Form Feedback

<div class="va-introtext" markdown="1">
Error messages let users know when they have made a mistake on a form field.
</div>

## Error messages

<div class="va-introtext" markdown="1">
Error messages let users know when they have made a mistake on a form field.
</div>

In all cases, only show error validation messages or stylings after a user has interacted with a particular field.

### Errors on text inputs

For all text inputs, the error message is placed between the label and the input.

<div class="site-showcase">
{% include_relative html/error-text-inputs.html %}
</div>

{% include snippet.html content='html/error-text-inputs.html' %}

#### Guidance

In general, when there is an error on a form, a few things must happen.

* The form field and its corresponding `<label>` are wrapped in a container with a class name of `usa-input-error`. This will provide a thick border and padding to visual indicate an error message to users who might have difficulty perceiving contrast. It also changes the border of the input to red as a secondary indicator.
* An error message is placed between the label and the form field.
* The form field receives an `aria-describedby` attribute that references the `id` of the error message.
* Prepending `<span class="sr-only">Error</span>` to error messages alerts screen screen readers clearly that an error exists.

The HTML for a typical error is:

```html
<span class="usa-input-error-message undefined" role="alert" id="file-input-149-error-message">
  <span class="sr-only">Error</span>
  Error message
</span>
```

### Error on select boxes

Select boxes a pattern similar to text inputs. The guidance is similar as well.

<div class="site-showcase">
{% include_relative html/error-select-box.html %}
</div>

{% include snippet.html content='html/error-select-box.html' %}

#### Guidance

Error messages are generally the same. The error message is slightly different in that it does not include the screen reader-only "Error" text.

```html
<span class="usa-input-error-message" id="select-159-error-message" role="alert">This is the error message</span>
```

### Errors on radio buttons

<div class="site-showcase">
{% include_relative html/error-radio-buttons.html %}
</div>

{% include snippet.html content='html/error-radio-buttons.html' %}

#### Guidance

* Radio buttons typically appear inside of `<fieldset>`s. The class name of `usa-input-error` may be placed on the `<fieldset>` that contains all of the radio buttons.
* The error message is placed just below the `<legend>`


### Errors on checkboxes

Unlike other form elements, error messages for checkboxes appear below

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

* Checkbox groups typically appear inside of `<fieldset>`s. The class name of `usa-input-error` may be placed on the `<fieldset>` that contains all of the checkboxes.
* The error message is placed just below the `<legend>`

### Error message on file input

<div class="site-showcase">
{% include_relative html/error-file-input.html %}
</div>

{% include snippet.html content='html/error-file-input.html' %}

#### Guidance

The guidance for file inputs is the same as the text inputs.
