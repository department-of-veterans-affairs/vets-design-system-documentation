---
layout: component
permalink: /components/form/file-input
has-parent: /components/form/
title: File input
intro-text: "File input allows one or more files to be uploaded."
research-title: Form controls
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Accessibility considerations
---

## Examples

### Default

{% include storybook-preview.html story="components-fileinput--default" link_text="FileInput" %}

## Usage

### When to use file input 

* **Uploading documents.** The file input component allows a user to provide required documents.

### When to consider something else

* **Asynchronous upload.** The file input component doesn’t support asynchronous uploading. Files are POSTed only on form submission.

## How to use

The file input button triggers a micro-interaction that causes the Operating System (OS) to present a dialog that prompts the user to select one or more files to upload. Once the files are uploaded the browser presents a dialog to inform the user of the success or failure of the upload.

* **Pair with a label.** Be sure to include a form label with the file input button.
* **Allow multiple file formats.** Not everyone has access to the same software. Be flexible with file types to avoid unnecessary software requirements.
* **Prefer one file per input.** Some users might not know how to select multiple files in a file browser. Additionally, iOS does not allow multiple-file selection using the Files app.
* **Highlight input restrictions.** Use hint-text to be clear about any file restrictions, such as document types or file size.

### Errors

* The error message is placed above the file input.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

<div class="site-showcase">
{% include_relative html/error-file-input.html %}
</div>

{% include snippet.html content='html/error-file-input.html' %}

## Accessibility considerations

* **Use proper labels and attributes.** Each file input should have a ```<label>```. Associate the two by matching the ```<label>```’s for attribute to the ```<input>```’s id attribute.