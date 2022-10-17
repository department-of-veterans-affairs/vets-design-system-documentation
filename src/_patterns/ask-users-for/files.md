---
layout: pattern
title: Files
permalink: /patterns/ask-users-for/files
redirect_from:
  - /patterns/forms/file-upload
aka: File upload
sub-section: ask-users-for
intro-text: "Follow this pattern to help users upload a file."
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

### Default state

{% include component-example.html alt="The default state of file upload." file="/images/patterns/ask-users-for/files/file-upload-input.png" caption="File upload in the default state before a user has interacted with the upload button." %}

### Loading state

{% include component-example.html alt="The loading state of file upload." file="/images/patterns/ask-users-for/files/file-upload-loading.png" caption="The loading state of file upload uses the Progress bar - Activity component to give feedback to the user that the system is uploading their file." width="50%" %}

### Review state

{% include component-example.html alt="The review state of file upload." file="/images/patterns/ask-users-for/files/file-upload-review.png" caption="The review state of file upload includes a card with the file name and an option to delete the file." width="50%" %}

## How to design and build

### Layout details

Use the [File input](https://design.va.gov/components/form/file-input) component along with the following content placed above it:

- Header 
- Instructions on what file(s) to upload
- Bullet list of allowed file types and sizes

Avoid allowing batch file uploads. Batch uploads are not mobile-friendly and can invite user and/or technical errors.

### How this pattern works

#### Default state

The File input component default state uses a secondary button and label placed in close proximity beneath the document upload instructions. When the user clicks the upload button a browser window will open to allow them to navigate to and select their file.

#### Loading state

The upload button will be replaced by a gray card with the [Progress bar - Activity](https://design.va.gov/components/progress-bar/) component to indicate the progress of the document upload. The user will see the name of the file and have the option to cancel the upload.

#### Review state

When a document has successfully uploaded, the card will display the uploaded file name in bold with an option to delete the file. Depending on the form, there may be a dropdown in the card to select the document type. If multiple files are allowed, the upload button will move beneath the card to give the user the option of adding more files one-by-one.

#### Error state

{% include storybook-preview.html story="components-va-file-input--error-message#error-message" link_text="va-file-input--error-message" %}

- **Help prevent error states by listing the types and sizes of files allowed _above_ the File input component.** The allowed file types depend on the form, though most forms accept pdf, jpg, jpeg, and png. 
- **Validate file uploads and provide actionable error messages.** Visit <a class="vads-c-action-link--blue" href="{{ site.baseurl }}/content-style-guide/error-messages/feedback">Feedback messages</a> in the Content styleguide for file upload success and error messages.

## Content considerations

{% include content/file-upload.md %}
* **Consider the mobile experience.** Avoid using words like "scan" or "convert" in the file upload instructions.

## Accessibility considerations

- Do not italicize file type and size help text. Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.
