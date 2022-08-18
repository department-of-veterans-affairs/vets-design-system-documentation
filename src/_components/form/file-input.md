---
layout: component
permalink: /components/form/file-input
has-parent: /components/form/
title: File input
intro-text: "File input allows a single file to be uploaded."
research-title: Form controls
sketch-link: https://www.sketch.com/s/1cb56b0b-df7c-456b-a8e4-f08a3553a5d3/p/DA9643BD-6386-4CCD-9811-A654B306BBC6
status: use-with-caution-candidate
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-file-input
---

## Examples

### Default

{% include storybook-preview.html height="100px" story="components-va-file-input--default" link_text="va-file-input" %}

### Required

{% include storybook-preview.html height="100px" story="components-va-file-input--required" link_text="va-file-input" %}

### Error Message

{% include storybook-preview.html height="100px" story="components-va-file-input--error-message" link_text="va-file-input" %}

## Usage

### When to use va-file-input

* **Uploading documents.** The file input component allows a user to provide a required document.

### When to consider something else

* **Documents are optional.** Avoid asking users to provide documents if you don’t require them.

* **Asynchronous upload.** The file input component doesn’t support asynchronous uploading. Files are POSTed only on form submission.

* **Asking for large files.** Be mindful that some users might have limited connectivity or data plans.

### How to use

The file input button triggers a micro-interaction that causes the Operating System (OS) to present a dialog that prompts the user to select a file to upload. Once the file is uploaded, the browser presents a dialog to inform the user of the success or failure of the upload.

* **Pair with a label.** Be sure to provide label text with the file input component.
* **Prefer one file per input.** The file input component only supports one file upload at a time. Some users might not know how to select multiple files in a file browser. Additionally, iOS does not allow multiple-file selection using the Files app.
* **Highlight input restrictions.** Use hint-text to be clear about any file restrictions, such as document types or file size.

### Errors

* The error message is placed above the file input button.
* To display a custom error message, pass text into the `error` property.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

{% include storybook-preview.html height="100px" story="components-va-file-input--error-message" link_text="va-file-input" %}

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* **Use proper labels and attributes.** When a label is supplied to the `label` property of the component, it will be associated with the ```<input>``` element that has a matching id attribute automatically.
