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

{% include component-example.html alt="The default state of file upload." file="/images/patterns/ask-users-for/files/0955-default.png" caption="File upload in the default state before a user has interacted with the upload button." class="x2" %}

### Loading

{% include component-example.html alt="The loading state of file upload." file="/images/patterns/ask-users-for/files/file-upload-loading.png" caption="The loading state of file upload uses the Progress bar - Activity component to give feedback to the user that the system is uploading their file." width="50%" %}

### Review

{% include component-example.html alt="The review state of file upload." file="/images/patterns/ask-users-for/files/0955-review.png" caption="The review state of file upload includes a card with the file name and an option to delete the file." class="x2" %}

#### Review with PDF password option

{% include component-example.html alt="The review state of file upload with an option of providing a password to a file." file="/images/patterns/ask-users-for/files/0955-pdf-password-added.png" caption="The review state of file upload can allow a user to provide a password to a password-protected file." class="x2" reverse="true" %}

### Delete

{% include component-example.html alt="The delete state of file upload." file="/images/patterns/ask-users-for/files/0955-modal-detail.png" caption="The review state of file upload includes a card with the file name and an option to delete the file." class="x2" %}

### Examples in production

{% include component-example.html alt="File upload in the 10182 form." file="/images/patterns/ask-users-for/files/10182-file-upload.png" caption="The process to request a board appeal includes the ability to upload files." class="x2" %}

{% include component-example.html alt="File upload review in the 10-10CG form." file="/images/patterns/ask-users-for/files/10-10cg-review.png" caption="The application for the program of comprehensive assistance for family caregivers, form 10-10CG, features an Alert - warning with additional explanation." class="x2" %}

## How to design and build

### Layout details

Use the [File input](https://design.va.gov/components/form/file-input) component along with the following content placed above it:

* Header
* Instructions on what file(s) to upload
* Bullet list of allowed file types and sizes

Avoid allowing batch file uploads. Batch uploads are not mobile-friendly and can invite user and/or technical errors.

### How this pattern works

#### Default

The File input component default state uses a secondary button and label placed in close proximity beneath the document upload instructions. When the user clicks the upload button a browser window will open to allow them to navigate to and select their file.

#### Loading

The upload button will be replaced by a [gray card]({{ site.baseurl }}/components/card) with the [Progress bar - Activity]({{ site.baseurl }}/components/progress-bar) component to indicate the progress of the document upload. The user will see the name of the file and have the option to cancel the upload.

#### Review

When a document has successfully uploaded, the card will display the uploaded file name in bold with an option to delete the file. Depending on the form, there may be a dropdown in the card to select the document type. If multiple files are allowed, the upload button will move beneath the card to give the user the option of adding more files one-by-one.

#### Delete

When a user triggers an action to remove or delete an upload file a modal confirming their action is presented. Within the modal the user can confirm and continue or cancel their action. This prevents accidental removal of the file which is an action that cannot otherwise be easily undone (the user would have to repeat the uplaod process).

#### Error

{% include storybook-preview.html story="components-va-file-input--error-message#error-message" link_text="va-file-input--error-message" %}

* **Help prevent error states by listing the types and sizes of files allowed _above_ the File input component.** The allowed file types depend on the form, though most forms accept pdf, jpg, jpeg, and png.
* **Validate file uploads and provide actionable error messages.** Review [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) in the Messages dictionary for file upload success and error messages.

## Content considerations

{% include content/file-upload.md %}

* **Consider the mobile experience.** Avoid using words like "scan" or "convert" in the file upload instructions.

## Accessibility considerations

* **Do not italicize file type and size help text.** Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.
* **Ask for confirmation when deleting files.** Destructive actions like deleting files should require two steps by users --- the initial button click, and then a confirmation. This helps prevent users from accidentally deleting a file with an unintentional click, and provides an extra prompt for screen reader users and screen magnification users who might not see the visual change when a file is removed.
