---
layout: pattern
permalink: /patterns/help-users-to/keep-a-record-of-submitted-information
sub-section: help-users-to
title: Keep a record of submitted information
intro-text: "This pattern provides the user with a printable record of their submission."
status: use-deployed
research-title: Help users to keep a record of submitted info
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=2988-66786&t=4uWczdHlyBNGV123-1
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/components/ConfirmationView/README.md
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

**When you are collecting information from users on a long form.** The pattern provides the user with a printable record of their submission data. A printed record provides a reference for future use and helps to confirm a completed form was submitted to VA.

The pattern must display the name of the form, the date of the submission, a confirmation number, a copy of the data used in the form submission, and a task list outlining the next steps in the form submission process.


## Examples

### Confirmation page summary

{% include component-example.html alt="An example confirmation page showing a printable copy of their form status, a downloadable PDF, and s task list" file="/images/patterns/help-users-to/keep-a-record-of-submitted-information/confirmation-page-status.png" width="100%" %}

The confirmation page provides a way for the user to 'Print this page', see their submission status and download a copy of their submission PDF. There is also a task list displaying known next steps.

### Print preview of confirmation page summary

{% include component-example.html alt="An example print preview of their form confirmation details" file="/images/patterns/help-users-to/keep-a-record-of-submitted-information/print-confirmation-status.png" width="75%" %}

Note that breadcrumbs should be excluded from the print preview and final printout, and that the content takes up 100% of the print width.

## How to design and build

### How this pattern works

* **Create a summary of the action completed.** Include a success alert that accurately describes the action just completed. For example, for forms that have to travel through several systems before it gets to the system of record you can say, _Form submission started on Date_
    * The alert should give a time frame for when the user should expect the next communication from VA about their form submission.
    * The alert should also include a confirmation number.
    * The alert should also include a link where they can go to check the status of the application. This may be a link to Claim Status Tool or My VA. 
* **Include a copy of the submitted information.** Include a copy of the information submitted on the form. Be sure to mask out SSN, VA File number, and Alien Registration numbers on this copy.
  * An HTML representation of a form submission is required in addition to a PDF download in order to make form submission data more easily available to users of assistive technology.
* **Inform users to print the confirmation for their records.** Notify users that they can print this confirmation page.
* **Include a "Print this page" primary button.** A printed record provides a reference for future use. The "Print this page" button appears at the bottom of the summary page.
* **Include a "What to expect next" task list.** This task list should tell the user what VA is doing next with their form submission. 


### Placement

The pattern should load at the top of the page beneath the h1 in this order:

1. Form submission started alert
2. Download a PDF copy of the form
3. Information you submitted on this form accordion
4. Print this confirmation page
5. What to expect process list

### Components used in this pattern

* [Alert]({{ site.baseurl}}/components/alert)
* [Link]({{ site.baseurl}}/components/link) (download?)
* [Accordion]({{ site.baseurl}}/components/accordion)
* [Button-Primary]({{ site.baseurl }}/components/button)
* [ProcessList]({{ site.baseurl }}/components/process-list)

## Code usage
- [confirmationView is a web-component pattern available in the Forms library.](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/components/ConfirmationView/README.md)
- To provide PDF downloads of form submissions, [call the `fetch_presigned_url` class method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/simple_forms_api/app/services/simple_forms_api/form_remediation/docs/form_submission_pdf_backups.md#s3-pre-signed-url-retrieval)
- To add your form to My VA, [follow the 'form status on My VA' guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/adding-a-form.md)

## When to consider something else

Forms that are submitted by unauthenticated users should not display links to claim status tool or My VA on the confirmation page as those submissions will not be immediately tracked or connected to a profile account.

If a user fills out a claim or benefit form unauthenticated or on paper, once VA associates the form with their record, it will show up in the Claim Status Tool.
This could take 7-10 days.

## Content considerations

Review the USWDS [Keep a record pattern](https://designsystem.digital.gov/patterns/complete-a-complex-form/keep-a-record/) for content considerations. The print styling differs between the VA and USWDS systems, but their high-level guidance is still relevant. 

## Accessibility considerations

This pattern provides a copy of the submission in a collapsible and accessible accordion. When the page is printed, the information is also displayed even if the accordion is still closed. This helps make the page more accessible by providing a copy of the form submission outside of a PDF. A user may still save this page as a PDF, but we can't guarantee the individual accessibility methods of individual browsers and printer settings.


Review the USWDS [Keep a record pattern](https://designsystem.digital.gov/patterns/complete-a-complex-form/keep-a-record/#section_9) for accessibility considerations.

## Research findings

In [2024, VFF/MY VA Form Status Research](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Research/Research%20Findings%20for%202024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research%20Study.md) found that a majority of Veterans indicated they would download a copy of their form submission. But, they were equally confused about the expiration date next to the PDF in My VA. Some findings are relevant to this pattern despite not yet being fully implemented.
  - The majority of participants expressed a desire to download a copy of their form submission (10 of 12), and 5 of 12 participants also indicated they would want to print a copy of their form submission. With the option to download a PDF copy of the form they submitted, there was uncertainty about the significance of the date in the associated link. In My VA, the download link will only be available for 60 days due to data security concerns.