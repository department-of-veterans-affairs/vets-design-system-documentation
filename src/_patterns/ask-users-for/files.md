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
  - anchor: Code Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Usage

### When to use this pattern

* **Required documentation.** When a user must upload a file in order to provide required documentation.

### When not to use this pattern

* **Don’t ask for a file if does not affect the delivery of a service.** You should only ask users to upload documents if absolutely necessary.

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

* **Header** that clearly describes what file to upload
* **Instructions** explaining what file(s) to upload and why they're needed
* **Bullet list** of allowed file types and maximum file sizes

**Important:** Avoid allowing batch file uploads. Batch uploads are not mobile-friendly and can create user experience and technical issues. Instead, use multiple individual file input components when you need users to upload several files.

### How this pattern works

We've updated the [File input]({{ site.baseurl }}/components/form/file-input) component to encapsulate this pattern. Upgrade to the latest file input component to get the current functionality.

* **List allowed file types and sizes above the File input component.** This helps prevent errors. Most VA forms accept PDF, JPG, JPEG, and PNG files.
* **Provide clear instructions.** Tell users exactly what document to upload and why it's needed for their application.
* **Validate file uploads and provide clear error messages.** Review [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) in the Messages dictionary for file upload success and error messages.

## Code usage

<p>
<va-link-action
  href="https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/fileInputMultiplePattern.jsx"
  text="Multifile input pattern in forms library"
  type="secondary"
></va-link-action>
</p>

<p>
<va-link-action
  href="https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/fileInputPattern.jsx"
  text="Single File input pattern in forms library"
  type="secondary"
></va-link-action>
</p>

### Forms library validation

The forms-system validates every file before upload for:

* **Mime-type and file extension match** (e.g., prevents my-pdf.png)
* **UTF encoding** to ensure proper file handling
* **PDF encryption** - The forms library detects if a PDF is encrypted and, if so, prompts the user for a password. The password is required to send the file to the backend for decryption before form submission.

**Note:** If validation fails, an error message is sent to the component and displayed to the user.

### File submission

The pattern handles the submission to the endpoint and returns a response if there is an error.

## Content considerations

{% include content/file-upload.md %}

* **Consider the mobile experience.** Avoid using words like "scan" or "convert" in the file upload instructions.

If your team needs help customizing the content of the component to address upload problems and user errors, contact the Content and IA centralized team for support.


## Accessibility considerations

* **Do not italicize file type and size help text.** Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.
* **Ask for confirmation when deleting files.** Destructive actions like deleting files should require two steps by users — the initial button click, and then a confirmation. This helps prevent users from accidentally deleting a file with an unintentional click, and provides an extra prompt for screen reader users and screen magnification users who might not see the visual change when a file is removed.
* **Provide clear error messages.** When file uploads fail, ensure error messages clearly explain what went wrong and how to fix the issue.
