---
layout: component
permalink: /components/form/file-input
redirect_from:
  - /components/form/file-input-multiple
has-parent: /components/form/
title: File input
intro-text: "File input allows users to attach files, one at a time, to be uploaded."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1360%3A85508&mode=design&t=TiJHClaf3VQ6wU6B-1
status: use-with-caution-available
uswds-v3: default
web-component: va-file-input
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

This guidance covers two web components:

* Use the [File input variation](https://design.va.gov/storybook/?path=/story/uswds-va-file-input--default) for uploads that accept a single file.
* Use the [File input multiple variation](https://design.va.gov/storybook/?path=/story/uswds-va-file-input-multiple--default) for uploads that accept multiple files.

## Examples

NOTE: Storybook does not allow for showing components in a particular state. Thus some of the examples in this component are screenshots rather than Storybook examples. You will find the Storybook examples in Storybook but will have to manually upload files in order to reproduce the appropriate variation state.

### Default - Single file

{% include storybook-preview.html height="270px" story="uswds-va-file-input--default" link_text="va-file-input" %}

### Default - Single file - Populated

{% include storybook-preview.html story="uswds-va-file-input--file-uploaded" link_text="uswds-va-file-input--file-uploaded" %}

### Default - Multiple files - Populated multiple

{% include storybook-preview.html story="uswds-va-file-input-multiple--files-uploaded" link_text="uswds-va-file-input-multiple--files-uploaded" %}

### Required

{% include storybook-preview.html height="270px" story="uswds-va-file-input--required" link_text="va-file-input when required" %}

### Accepts only specific file types

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-only-specific-file-types" link_text="va-file-input that accepts only specific file types" reverse="true" %}

### Accepts any kind of image

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-any-kind-of-image" link_text="va-file-input that accepts any kind of image" reverse="true" %}

### Accepts File Password

<va-alert slim="true" status="warning">
  This component does not check if a file is encrypted. This logic is handled in a shared Forms System utility. See this guide for more information: <a href="https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted">Checking if an uploaded PDF is encrypted</a>
</va-alert>

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-file-password" link_text="va-file-input that accepts file password" reverse="true" %}



### Max file size

{% include storybook-preview.html height="270px" story="uswds-va-file-input--with-max-file-size" link_text="va-file-input with max file size" reverse="true" %}

### Read only

{% include storybook-preview.html height="270px" story="uswds-va-file-input--read-only" link_text="va-file-input in read only state" reverse="true" %}

### Read only with additional inputs

{% include storybook-preview.html height="270px" story="uswds-va-file-input--read-only-with-additional-inputs" link_text="va-file-input in read only state with additional inputs" reverse="true" %}

### With percent uploaded

{% include storybook-preview.html height="270px" story="uswds-va-file-input--with-percent-uploaded" link_text="va-file-input showing upload progress" reverse="true" %}

### Error Message

NOTE: Storybook does not allow for showing components in a particular state. Thus some of the examples in this component are screenshots rather than Storybook examples.

#### Single file error

{% include component-example.html alt="Single file input error" file="/images/components/file-input/singleFileInputError.png" caption="File input when an error occurs for a single file" class="x2" reverse="true" %}

#### Multiple file error

{% include component-example.html alt="Multiple file input error" file="/images/components/file-input/multipleFileInputError.png" caption="File input when an error occurs when uploading multiple files" class="x2" reverse="true" %}

### Header label

Change the label to any H1 through H6 header size.  

{% include storybook-preview.html height="100px" story="uswds-va-file-input--header-label" link_text="va-file-input header label" %}

### Additional form inputs

{% include component-example.html alt="Additional form inputs" file="/images/components/file-input/additionalForm.png" caption="File input when an additional form is needed to complete the file upload" class="x2" reverse="true" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/file-input/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

* **One file per input.** The file input supports uploading a single file multiple times, but does not support selecting multiple files at a single time. This component only supports one file upload at a time. The reason for this is some users might not know how to select multiple files in a file browser. Additionally, iOS does not allow multiple-file selection using the Files app. Thus, the VA implementation of this component does not deviate from our [current pattern]({{ site.baseurl }}/patterns/ask-users-for/files#review) for handling multiple file uploads by prompting for each file with a new file input component.
* **Files pattern guidance.** Follow the [files pattern guidance]({{ site.baseurl }}/patterns/ask-users-for/files) for how to include the file input in a form.

### How this component works

* **Pair with a label.** Be sure to provide label text with the file input component.
* **Highlight input restrictions.** Use hint-text to be clear about any file restrictions, such as file types or maximum size.

### Behavior

* **Trigger**: The file input button triggers a micro-interaction that causes the Operating System (OS) to present a dialog that prompts the user to select a file to upload.
* **Rules**: Once the file is uploaded, the browser presents a dialog to inform the user of the success or failure of the upload. The uploaded file can then be removed by the user, if necessary. Additional files can be uploaded, one by one.
* **Feedback**: The [Progress bar - Activity]({{ site.baseurl }}/components/progress-bar/) component should be used to provide feedback to the user while the file is uploading if the upload is happening to the server on the current step. The Progress bar is not necessary if the upload of the file happens upon page submit or at a later point in the process. The Progress bar is currently not a feature of the file input component and will be added at a later date.

### Errors

* When using a single file input the [error message is placed above the file input area](#error-message). If the file input supports multiple files then the error message is placed within the file input card.
* To display a custom error message, pass text into the `error` property.

<va-link-action
  href="{{ site.baseurl }}/components/form/#error-handling"
  text="View form error handling for additional guidance"
  type="secondary"
></va-link-action>

{% include component-docs.html component_name=page.web-component %}

## Content considerations

{% include content/file-upload.md %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/file-input#accessibility-checkbox"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

{% include _component-checklist.html component_name=page.web-component %}
