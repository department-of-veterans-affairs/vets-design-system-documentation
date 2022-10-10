---
layout: pattern
title: Files
permalink: /patterns/ask-users-for/files
redirect_from:
  - /patterns/forms/file-upload
aka: File upload
sub-section: ask-users-for
intro-text: "Follow this pattern to help users select and upload a file."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Required documentation.** When a user must upload a file in order to provide required documentation.

### When not to use this pattern

* **Don’t ask if it does not affect the delivery of a service.** You should only ask users to upload documents if absolutely necessary.

## How to design and build

### Layout details

Here is the content structure for asking a user to upload a file:

- Header 
- Instructions on what document(s) to upload
- Bulleted list of allowed file types and sizes
- Secondary button to upload 

**Note:** This content will vary depending on what you’re asking the user to upload. Work with a content specialist on how to ask for certain documents.

![file upload input state]({{site.baseurl}}/images/patterns/ask-users-for/files/file-upload-input.png)

### How this pattern works

- **Avoid error states by listing out what types and sizes of files are accepted.** The types of files accepted depend on the form. Most forms accept pdf, jpg, jpeg, and png. 
- **Validate file uploads.**  See example error messages under Content considerations.
- **Do not italicize information regarding file sizes.** Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.

#### Loading state

The upload button will be replaced by a gray card with a [standard progress bar component]({{ site.baseurl }}/components/progress-bar) to indicate the progress of the document upload. The user will see the name of the file as well as the option to cancel the upload. 

![file upload loading state]({{site.baseurl}}/images/patterns/ask-users-for/files/file-upload-loading.png)

#### Review state 

When a document has successfully uploaded, a card will show the uploaded file name in bold with an option to delete the file. Depending on the type of form, there may be a dropdown to select a document type for the uploaded file. Underneath the card there will be a secondary button to give the user the option of uploading additional files. 

![file upload review state]({{site.baseurl}}/images/patterns/ask-users-for/files/file-upload-review.png)

## Content considerations

### Error message templates for file upload

**When a user doesn’t upload a required document:**

Say ‘Please upload a file.’

**When there needs to be at least one required document:**

Say ‘Please upload at least one file.’

**Live application examples:**

- [VA Form 21P-527EZ - Application for Pension Benefits](https://www.va.gov/pension/application/527EZ/introduction)
- [VA Form 21-526EZ - Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [VA Form 10-10EZ - Application for Health Benefits](https://staging.va.gov/health-care/apply/application/introduction)
