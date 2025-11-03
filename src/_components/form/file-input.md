---
layout: component
permalink: /components/form/file-input
redirect_from:
  - /components/form/file-input-multiple
has-parent: /components/form/
title: File input
intro-text: "File input lets you attach files to upload. Use the single file variation for one file at a time, or the multiple file variation to upload several files in sequence."
research-title: Form controls
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1360%3A85508&mode=design&t=TiJHClaf3VQ6wU6B-1
github-discussion-url: https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4609
status: use-with-caution-available
uswds-v3: default
web-component: va-file-input
web: true
mobile-app: false
anchors:
  - anchor: Overview
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Overview

The file input component gives users a way to select and upload files. You have two options:

* **Single file input** – Use when users need to upload one file at a time
* **Multiple file input** – Use when users need to upload several files in sequence

**Note:** Storybook examples do not show uploaded file states. You will need to manually upload files in Storybook to see those variations, or refer to the screenshots below.

## Examples

### Basic usage

#### Single file upload

{% include storybook-preview.html height="270px" story="uswds-va-file-input--default" link_text="va-file-input" %}

#### Single file with uploaded state

{% include storybook-preview.html story="uswds-va-file-input--file-uploaded" link_text="uswds-va-file-input--file-uploaded" %}

#### Multiple files uploaded

{% include storybook-preview.html story="uswds-va-file-input-multiple--files-uploaded" link_text="uswds-va-file-input-multiple--files-uploaded" %}

### Component variations

#### Required field

{% include storybook-preview.html height="270px" story="uswds-va-file-input--required" link_text="va-file-input when required" %}

#### File type restrictions

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-only-specific-file-types" link_text="va-file-input that accepts only specific file types" reverse="true" %}

#### Image files only

{% include storybook-preview.html height="270px" story="uswds-va-file-input--accepts-any-kind-of-image" link_text="va-file-input that accepts any kind of image" reverse="true" %}

#### Maximum file size

{% include storybook-preview.html height="270px" story="uswds-va-file-input--with-max-file-size" link_text="va-file-input with max file size" reverse="true" %}

#### Read-only state

{% include storybook-preview.html height="270px" story="uswds-va-file-input--read-only" link_text="va-file-input in read only state" reverse="true" %}

#### Read-only with additional field

{% include storybook-preview.html height="270px" story="uswds-va-file-input--read-only-with-additional-inputs" link_text="va-file-input in read only state with additional inputs" reverse="true" %}

#### Header label variations

Change the label to any `h1` through `h6` header size.

{% include storybook-preview.html height="100px" story="uswds-va-file-input--header-label" link_text="va-file-input header label" %}

### Upload states

#### File uploading with progress

<va-alert slim status="warning">An API must populate `percentUploaded` with a value to display the progress bar.</va-alert>

{% include component-example.html alt="File input component showing a progress bar at 50% while uploading a document" file="/images/components/file-input/file-input-uploading.png" caption="File input showing upload progress." class="x2" reverse="true" %}

### Error states

#### Missing required file

{% include component-example.html alt="Missing required file error" file="/images/components/file-input/file-input-initial-error.png" caption="Error message shown when a required file is not uploaded" class="x2" reverse="true" %}

#### File-related error

{% include component-example.html alt="Wrong file format" file="/images/components/file-input/file-input-file-error.png" caption="Error message shown when the file doesn't meet requirements (wrong format, too large, etc.)" class="x2" reverse="true" %}

#### Field-related error

{% include component-example.html alt="File form field error" file="/images/components/file-input/file-input-field-error.png" caption="Error message shown for general form field validation issues" class="x2" reverse="true" %}

### Advanced scenarios

#### File with an additional form input

{% include component-example.html alt="Additional form inputs" file="/images/components/file-input/additionalForm.png" caption="File input used with additional form field to complete the upload process" class="x2" reverse="true" %}

#### Password-protected PDF prompt

<va-alert slim="true" status="info">Logic for detecting and decrypting PDF files is handled in a shared Platform utility. See: <a href="https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted">Checking if an uploaded PDF is encrypted</a>.</va-alert>

{% include component-example.html alt="File input password prompt" file="/images/components/file-input/file-input-password-prompt.png" caption="User prompted to enter password for encrypted PDF file" class="x2" reverse="true" %}

#### Password error

{% include component-example.html alt="File input field error" file="/images/components/file-input/file-input-password-error.png" caption="Error message shown when password is incorrect" class="x2" reverse="true" %}

#### Password success

{% include component-example.html alt="File input field error" file="/images/components/file-input/file-input-password-success.png" caption="Confirmation shown when password-protected PDF is successfully decrypted" class="x2" reverse="true" %}


## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/file-input/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### When to use this component

* Users need to attach or upload one or more files
* The upload is a required part of the form submission
* You need to restrict file types or size for validation

### How file inputs work at VA

**Upload one file at a time.** The file input component uploads a single file per interaction. People cannot select multiple files at once because:
* Not everyone knows how to select multiple files in their OS file browser
* Some mobile devices, such as those running iOS, do not support selecting multiple files at once
* This approach works better on mobile devices overall

**For multiple file uploads**, follow the [files pattern guidance]({{ site.baseurl }}/patterns/ask-users-for/files) and use the [Multiple responses / List & Loop pattern]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) to break up the file upload requests. This reduces cognitive load and improves the user experience.

### Implementation best practices

**Always pair with a clear label.** The label should describe what file users need to upload (e.g., "Upload your discharge papers" not just "Upload file").

**Use hint text for restrictions.** Clearly communicate any file requirements using hint text:
* Allowed file types: "PDF, JPG, or PNG only"
* File size limits: "Maximum file size: 10 MB"
* Any other requirements: "Must be in color and clearly legible"

**Show upload progress when files upload to the server immediately.** Display the [Progress bar - Activity component]({{ site.baseurl }}/components/progress-bar/) if the upload happens automatically. Progress indication is not needed if the file uploads when the form is submitted.

<va-link-action
  href="{{ site.baseurl }}/components/form/#error-handling"
  text="View additional form error handling guidance"
  type="secondary"
></va-link-action>

{% include component-docs.html component_name=page.web-component %}

## Content considerations

{% include content/file-upload.md %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/file-input#accessibility-checkbox"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

{% include _component-checklist.html component_name=page.web-component %}
