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

### VA Form 21P-527EZ - Application for Pension Benefits

**Default state**

![file upload default state]({{site.baseurl}}/images/patterns/ask-users-for/files/Form_21P-527EZ_upload-button.png)

**Review state**

![file upload review state]({{site.baseurl}}/images/patterns/ask-users-for/files/Form_21P-527EZ_uploaded-file-card.png)

### VA Form 10-10CG - Application for Caregiver Benefits

**Default state**

![file upload default state]({{site.baseurl}}/images/patterns/ask-users-for/files/10-10cg-default.png)

**Loading state**

![file upload loading state]({{site.baseurl}}/images/patterns/ask-users-for/files/10-10cg-loading.png)

**Review state**

![file upload review state]({{site.baseurl}}/images/patterns/ask-users-for/files/10-10cg-review.png)

### VA Form 20-0995 - Supplemental Claims

**Default state**

![file upload default state]({{site.baseurl}}/images/patterns/ask-users-for/files/Supplemental-Claims-20-0995-default.png)

## How to design and build

### Layout details

Use the [File input component](https://design.va.gov/components/form/file-input) along with the following content placed above it:

- Header 
- Instructions on what file(s) to upload
- Bullet list of allowed file types and sizes

Avoid allowing batch file uploads. Batch uploads are not mobile-friendly and can invite user and/or technical errors.

### How this pattern works

#### Error state

{% include storybook-preview.html story="components-va-file-input--default" link_text="va-file-input--error-message" %}

- **Help prevent error states by listing the types and sizes of files allowed _above_ the File input component.** The allowed file types depend on the form, though most forms accept pdf, jpg, jpeg, and png. 
- **Validate file uploads and provide actionable error messages.** Visit <a class="vads-c-action-link--blue" href="{{ site.baseurl }}/content-style-guide/error-messages/feedback">Feedback messages</a> in the Content styleguide for file upload success and error messages.

#### Loading state

{% include storybook-preview.html story="components-va-progress-bar--default" link_text="va-progress-bar" %}

The upload button will be replaced by a gray card with the Progress bar - Activity component to indicate the progress of the document upload. The user will see the name of the file and have the option to cancel the upload.

#### Review state

When a document has successfully uploaded, the card will have the uploaded file name in bold with an option to delete the file. Depending on the form, there may be a dropdown in the card to select the document type. If multiple files are allowed, the upload button will move underneath the card to give the user the option of uploading more files one-by-one.

## Content considerations

The content preceding the File input component will vary depending on what file you are asking the user to upload. Work with a content specialist on how to ask for certain documents. Avoid using words like "scan" or "convert" that do not speak to the mobile experience.

- Go to <a class="vads-c-action-link--blue" href="{{ site.baseurl }}/content-style-guide/error-messages/feedback">Feedback messages</a> (Content styleguide) for file upload success and error message guidance.

## Accessibility considerations

- Do not italicize file type and size help text. Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.
