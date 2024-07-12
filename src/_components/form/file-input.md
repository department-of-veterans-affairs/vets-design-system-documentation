---
layout: component
permalink: /components/form/file-input
has-parent: /components/form/
title: File input
intro-text: "File input allows a single file to be uploaded."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1360%3A85508&mode=design&t=TiJHClaf3VQ6wU6B-1
status: use-with-caution-available
uswds-v3: default
web-component: va-file-input
anchors:
  - anchor: Examples - v3
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples - v3

### Default

{% include storybook-preview.html height="270px" story="uswds-va-file-input--default" link_text="va-file-input" %}

### Required

{% include storybook-preview.html height="270px" story="uswds-va-file-input--required" link_text="va-file-input when required" %}

### Accepts only specific file types

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-only-specific-file-types" link_text="va-file-input that accepts only specific file types" %}

### Accepts any kind of image

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-any-kind-of-image" link_text="va-file-input that accepts any kind of image" %}

### Error Message

#### Single file error

{% include component-example.html alt="Single file input error" file="/images/components/file-input/singleFileError.png" caption="File input when an error occcurs for a single file" class="x2" %}

#### Multiple file error

{% include component-example.html alt="Multiple file input error" file="/images/components/file-input/multipleFileError.png" caption="File input when an error occcurs when uploading multiple files" class="x2" %}

### Header label
Change the label to any H1 through H6 header size.  

{% include storybook-preview.html height="100px" story="uswds-va-file-input--header-label" link_text="va-file-input header label" %}

### Additional form inputs

{% include component-example.html alt="Additional form inputs" file="/images/components/file-input/additionalFormInput.png" caption="File input when an additional form is needed to complete the file upload" class="x2" %}

### Multiple files

{% include component-example.html alt="Multiple files" file="/images/components/file-input/multipleFiles.png" caption="File input when multiple files are uploaded" class="x2" %}

## Examples - v1

### Default

{% include storybook-preview.html height="100px" story="components-va-file-input--default" link_text="va-file-input" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/file-input/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

* **One file per input.** The file input supports uploading a single file multiple times but does not support selecting multiple files at a single time. This component only supports one file upload at a time. The reason for this is some users might not know how to select multiple files in a file browser. Additionally, iOS does not allow multiple-file selection using the Files app. Thus, the VA implementation of this component does not deviate from our [current pattern]({{ site.baseurl }}/patterns/ask-users-for/files#review) for handling multiple file uploads by prompting for each file with a new file input component. We will evaluate if we will change the behavior of this component at a later date.
* **Files pattern guidance.** Follow the <a class="vads-c-action-link--blue" href="https://design.va.gov/patterns/ask-users-for/files">files pattern guidance</a> for how to include the file input in a form. 

### How this component works

* **Pair with a label.** Be sure to provide label text with the file input component.
* **Highlight input restrictions.** Use hint-text to be clear about any file restrictions, such as file types or maximum size.

### Behavior

* **Trigger**: The file input button triggers a micro-interaction that causes the Operating System (OS) to present a dialog that prompts the user to select a file to upload.
* **Rules**: Once the file is uploaded, the browser presents a dialog to inform the user of the success or failure of the upload. The uploaded file can then be removed by the user, if necessary. Additional files can be uploaded, one by one.
* **Feedback**: The [Progress bar - Activity]({{ site.baseurl }}/components/progress-bar/) component should be used to provide feedback to the user while the file is uploading. This is currently not a feature of the file upload and will be added at a later date. 

### Errors

* When using a single file input the [error message is placed above the file input area](#error-message). If the file input supports multiple files then the error message is placed within the file input card.
* To display a custom error message, pass text into the `error` property.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/#error-handling">
  View form error handling for additional guidance
</a>

{% include component-docs.html component_name=page.web-component %}

## Content considerations

{% include content/file-upload.md %}

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/file-input#accessibility-checkbox">Refer to the U.S. Web Design System for accessibility guidance</a>

{% include _component-checklist.html component_name=page.web-component %}
