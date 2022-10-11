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
  - anchor: How to design and build
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Live application examples
---

## Usage

### When to use this pattern

- When a user must upload a file in order to complete a task, such as providing documentation.

### When not to use this pattern

- You should only ask a user to upload a file if absolutely necessary. Do not ask for files if they do not affect the delivery of a service or outcome of a task. 

## How to design and build

### File input component

{% include storybook-preview.html story="components-va-file-input--default" link_text="va-file-input" %}

Use the File input component along with the following content preceding it:

- Header 
- Instructions on what file(s) to upload
- Bullet list of allowed file types and sizes

Avoid allowing batch file uploads. Batch uploads are not mobile-friendly and can invite user and/or technical errors.

### How this pattern works

#### Error state

{% include storybook-preview.html story="components-va-file-input--default" link_text="va-file-input--error-message" %}

- Help the user prevent upload errors by listing the types and sizes of files that are accepted **above** the File input component. The accepted file types depend on the form, though most forms accept pdf, jpg, and png. 
- Validate file uploads and provide messaging that is specific to the validation error. See example error messages under Content considerations.

#### Loading state

Use the Progress bar - Activity component to give feedback to the user that a determinate background activity is happening.

{% include storybook-preview.html story="components-va-progress-bar--default" link_text="va-progress-bar" %}

## Content considerations

The content preceding the File input component will vary depending on what file you are asking the user to upload. Work with a content specialist on how to ask for certain documents. Avoid using words like "scan" or "convert" that do not speak to the mobile experience.

### Error message templates for file upload

**When a user does not upload a required file:**

Say ‘Upload a file.’

**When the uploaded file does not match one of the accepted file types:**

Say 'Upload a [list accepted file types].'

**When the uploaded file exceeds the maximum allowed size:**

Say 'Upload a file under [maximum size allowed].'

## Accessibility considerations

- Do not italicize file type and size help text. Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.

## Live application examples

- [VA Form 21P-527EZ - Application for Pension Benefits](https://www.va.gov/pension/application/527EZ/introduction)
- [VA Form 21-526EZ - Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [VA Form 10-10EZ - Application for Health Benefits](https://staging.va.gov/health-care/apply/application/introduction)
