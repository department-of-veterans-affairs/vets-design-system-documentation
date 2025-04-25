---
layout: pattern
title: Files
permalink: /patterns/ask-users-for/files
redirect_from:
  - /patterns/forms/file-upload
aka: File upload
sub-section: ask-users-for
intro-text: "Follow this pattern to help users upload a file."
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988%3A63596&mode=design&t=ocBby0ApctnJJSel-1
github-title: pattern-files
research-title: Ask users for files
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Usage

### When to use this pattern

* **Required documentation.** When a user must upload a file in order to provide required documentation.

### When not to use this pattern

* **Don’t ask if it does not affect the delivery of a service.** You should only ask users to upload documents if absolutely necessary.

## Examples

### Default

{% include component-example.html alt="The default state of file upload." file="/images/patterns/ask-users-for/files/form-upload-default.png" caption="File upload in the default state before a user has interacted with the file input component." class="x2" %}

### Review

{% include component-example.html alt="The review state of file upload." file="/images/patterns/ask-users-for/files/form-upload-review.png" caption="The review state of file upload includes a card with the file name and options to change or delete the file." class="x2" %}

### Delete

{% include component-example.html alt="The delete state of file upload." file="/images/patterns/ask-users-for/files/form-upload-delete.png" caption="A modal is displayed confirming the destructive action of deleting the uploaded file." class="x2" %}

## How to design and build

### Layout details

Use the [File input]({{ site.baseurl }}/components/form/file-input) component along with the following content placed above it:

* Header
* Instructions on what file(s) to upload
* Bullet list of allowed file types and sizes

Avoid allowing batch file uploads. Batch uploads are not mobile-friendly and can invite user and/or technical errors.

### How this pattern works

We've updated the [File input]({{ site.baseurl }}/components/form/file-input) component to encapsulate this pattern. Upgrade to the latest file input component to get the current functionality.

* **List allowed file types and sizes above the File input component.** This helps prevent errors. Most forms accept pdf, jpg, jpeg, and png files.
* **Validate file uploads and provide clear error messages.** Review [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) in the Messages dictionary for file upload success and error messages.

## Content considerations

{% include content/file-upload.md %}

* **Consider the mobile experience.** Avoid using words like "scan" or "convert" in the file upload instructions.

## Accessibility considerations

* **Do not italicize file type and size help text.** Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.
* **Ask for confirmation when deleting files.** Destructive actions like deleting files should require two steps by users --- the initial button click, and then a confirmation. This helps prevent users from accidentally deleting a file with an unintentional click, and provides an extra prompt for screen reader users and screen magnification users who might not see the visual change when a file is removed.
