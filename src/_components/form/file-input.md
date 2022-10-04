---
layout: component
permalink: /components/form/file-input
has-parent: /components/form/
title: File input
intro-text: "File input allows a single file to be uploaded."
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/2EB04B39-CAE6-4D13-8655-4394F9A3F072/canvas
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

* **Use explicit and specific words for actions.** We prefer "upload" and "delete" as those words describe exactly what will happen when you tap or click.
  * **Upload instead of add.** Use the word "Upload" instead of "Add". For example, "Upload file" and "Upload another file". 
  * **Delete instead of remove.** Use the word "Delete" instead of "Remove". For example, "Delete file". Also, do not use "Edit" unless the uploaded file can actually be edited in place. "Edit" is not appropriate for an uploaded file if the user has to delete and re-upload the file.
* **Use file instead of document.** File is the broadest term and thus preferable to "document" as that may be too specific when images, text files, and other file types may be acceptable for upload.
* **Follow messaging guidance.** Follow the [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) in the messages dictionary for file upload success and failure.

## Accessibility considerations

* **Use proper labels and attributes.** When a label is supplied to the `label` property of the component, it will be associated with the ```<input>``` element that has a matching id attribute automatically.

{% include _component-checklist.html component_name=page.web-component %}