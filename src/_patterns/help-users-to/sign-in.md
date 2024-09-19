---
layout: pattern
permalink: /patterns/help-users-to/sign-in
sub-section: help-users-to
title: Sign-in
intro-text: "This pattern provides the user with a printable record of their submission."
status: use-deployed
research-title: Help users to sign-in
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

**When you are collecting information from users on a long form.** The pattern provides the user with a printable record of their submission. A printed record provides a reference for future use and helps to confirm a successful form submission.

## Examples

### Confirmation page summary

{% include component-example.html alt="An example confirmation page containing a component that allows users to print the confirmation page." file="/images/patterns/help-users-to/keep-a-record-of-submitted-information/confirmation-page.png" caption="The 'Your application information' component provides a clear call-to-action for the user to 'Print this page'." width="75%" %}

### Print preview of confirmation page summary

![print preview of confirmation page summary]({{ site.baseurl }}/images/patterns/help-users-to/keep-a-record-of-submitted-information/print-view-page1.png)
![print preview of confirmation page summary]({{ site.baseurl }}/images/patterns/help-users-to/keep-a-record-of-submitted-information/print-view-page2.png)

## How to design and build

### How this pattern works

* **Create a summary of submitted information.** Include a title for the summary page. An example message is: *Your application information*
* **Include a recap of submitted information.** Include the applicant's name and date of application.
* **Inform users to print the confirmation for their records.** Notify users that they can print or download their application information. An example message is: *You can print this confirmation page for your records. You can also download your completed application as a PDF.*
* **Include a "Print this page" primary button.** A printed record provides a reference for future use. The "Print this page" button appears at the bottom of the summary page.
* **Include a link to download the completed application in PDF format.** The download link appears below the "Print this page" button.

### Placement

The component that contains the prompt to print the confirmation page should appear under the Alert - Success component.  

### Components used in this pattern

* [Summary box]({{ site.baseurl }}/components/summary-box)
* [Button - Primary]({{ site.baseurl }}/components/button)
* [Link - Download]({{ site.baseurl }}/components/link/#download)

## Content considerations

Review the USWDS [Keep a record pattern](https://designsystem.digital.gov/patterns/complete-a-complex-form/keep-a-record/) for content considerations. The print styling differs between the VA and USWDS systems, but their high-level guidance is still relevant. 

## Accessibility considerations

Review the USWDS [Keep a record pattern](https://designsystem.digital.gov/patterns/complete-a-complex-form/keep-a-record/#section_9) for accessibility considerations.
