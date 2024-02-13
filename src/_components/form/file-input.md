---
layout: component
permalink: /components/form/file-input
has-parent: /components/form/
title: File input
intro-text: "File input allows a single file to be uploaded."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1360%3A85508&mode=design&t=TiJHClaf3VQ6wU6B-1
status: use-with-caution-candidate
web-component: va-file-input
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
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

* **Uploading files.** The file input component allows a user to provide required files, one at a time.

### When to consider something else

* **Documentation is optional.** Avoid asking users to provide documents if you don’t require them.
* **Asynchronous upload.** The file input component doesn’t support asynchronous uploading. Files are POSTed only on form submission.
* **Asking for large files.** Be mindful that some users might have limited connectivity or data plans.

### How this component works

* **Pair with a label.** Be sure to provide label text with the file input component.
* **Prefer one file per input.** The file input component only supports one file upload at a time. Some users might not know how to select multiple files in a file browser. Additionally, iOS does not allow multiple-file selection using the Files app.
* **Highlight input restrictions.** Use hint-text to be clear about any file restrictions, such as file types or maximum size.

### Behavior

* **Trigger**: The file input button triggers a micro-interaction that causes the Operating System (OS) to present a dialog that prompts the user to select a file to upload. 
* **Rules**: Once the file is uploaded, the browser presents a dialog to inform the user of the success or failure of the upload. The uploaded file can then be removed by the user, if necessary. Additional files can be uploaded, one by one.
* **Feedback**: The [Progress bar - Activity]({{ site.baseurl }}/components/progress-bar/) component should be used to provide feedback to the user while the file is uploading.


### Errors

* The [error message is placed above the file input button](#error-message).
* To display a custom error message, pass text into the `error` property.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.


{% include component-docs.html component_name=page.web-component %}

## Content considerations

{% include content/file-upload.md %}

## Accessibility considerations

* **Use proper labels and attributes.** When a label is supplied to the `label` property of the component, it will be associated with the ```<input>``` element that has a matching id attribute automatically.

{% include _component-checklist.html component_name=page.web-component %}