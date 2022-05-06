---
layout: pattern
permalink: /patterns/forms/file-upload
has-parent: /patterns/forms/
title: File upload
intro-text: "Follow this pattern to help users select and upload a file."
status: use-deployed
anchors:
  - anchor: Structure
  - anchor: Loading state
  - anchor: Review state
  - anchor: Usage
  - anchor: Error message templates for file upload
---

## Structure

Here is the structure for asking a user to upload a file:

- Header 
- Instructions on what documents to upload
- Bulleted list of allowed file types and sizes
- Secondary button to upload 

**Note:** This content will vary depending on what you’re asking the user to upload. Work with your content specialist with how to ask for certain documents.

![file upload input state]({{site.baseurl}}/images/file-upload-input.png)

## Loading state

The upload button will be replaced by a gray card with a [standard progress bar component]({{ site.baseurl }}/components/progress-bar) to indicate the progress of the document upload. The user will see the name of the file, as well as, have the option to cancel the upload. 

![file upload loading state]({{site.baseurl}}/images/file-upload-loading.png)

## Review state 

When a document has successfully uploaded, the card will have the uploaded file name bolded and there will be an option to delete the file. Depending on the type of form, there can be a dropdown of selecting document types. Underneath the card there will be a secondary button to give the user the option of adding more document uploads. 

![file upload review state]({{site.baseurl}}/images/file-upload-review.png)

## Usage

- **Don’t ask if it does not affect the delivery of a service.** You should only ask users to upload documents if absolutely necessary 
- **Avoid error states by listing out what types and sizes of files are accepted.** The types of files accepted depend on the form. Most forms accept pdf, jpg, jpeg, and png. 
- **Validate file uploads.**  A validation message for when a user skips uploading a required document: *Please upload a file.* When there needs to be at least one required document: *Please upload at least one file* 
- **Do not italicize information regarding file sizes.** Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.

## Error message templates for file upload

**When a user doesn’t upload a required document:**

Say ‘Please upload a file’’

**When there needs to be at least one required document:**

Say ‘Please upload at least one file’

**Live application examples:**

- [VA Form 21P-527EZ - Application for Pension Benefits](https://www.va.gov/pension/application/527EZ/introduction)
- [VA Form 21-526EZ - Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [VA Form 10-10EZ - Application for Health Benefits](https://staging.va.gov/health-care/apply/application/introduction)
