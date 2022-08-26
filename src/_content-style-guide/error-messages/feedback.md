---
layout: content-style-guide
permalink: /content-style-guide/error-messages/feedback
has-parent: /content-style-guide/error-messages/
title: Feedback messages
intro-text: The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.
---

***Note:** See the [help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

## Task completion success/failure

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Form save in progress success (inline)   | **We've saved the information you've entered so far** | | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Below affected component |
| Form save in progress success (exit page) | **We've saved your in-progress application**  | You'll need to finish the application and click "Submit" to apply for this benefit. Continue applying now, or come back later to finish. | Continue your application | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Below page title |
| Form save in progress success (inline)   | **We’re saving your new mobile phone number** |  We’ll show it here once it’s saved. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Below affected component |
| Form save in progress failure (inline)   | **Your form didn't save** |  Please try again.   | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Below affected component |
| Form general error | **We need you to start over with this application** | Something's not working quite right. We're sorry to make extra work for you, but please try applying again in a few minutes. | Start over | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Replace content below page title |
| Form submission success                  | **We've received your application** | | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Below page title |
| Form submission failure, can save in progress | **Please save this application and try again** | We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow. | Save your application | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Form submission failure, unable to save in progress | **Please start over with this application** | We're sorry. Your application didn't go through, and you'll need to start over. We suggest you wait a day while we fix this problem. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Required form field is empty  | N/A | Please enter your [required information]. | N/A | Inline | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | N/A |
| Form field entry is not valid | N/A | Please enter a valid [address/email address/phone number/city/state]. | N/A | Inline | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | N/A |
| File upload success | **Your file has been uploaded** |  | Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Above page title |
| File upload failure | **We couldn't upload your file** | Please try again. |  Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| File download success | **We downloaded your file**  |  | Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Above page title |
| File download failure | **We couldn't download your file** |  Please try again. | Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Message sent | **We sent your message** |  | Dismissible | Alert | Success | Above page title |
| Message failed to send | **Your message didn't go through** | Please try again.|  Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Creation success | **We created your file** | | Dismissible | Alert | Success | Above page title |
| Creation failure | **We couldn't create your file** | Please try again.  |  Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Deletion success                         | **We've deleted your file** | | Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Above page title |
| Deletion failure | **We couldn't delete your file** | Please try again.  |  Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Update success | **We updated your file** |  | Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Success alert]({{ site.baseurl }}/components/alert#success-alert) | Above page title |
| Update failure | **We couldn't update your file** | Please try again.  |  Dismissible | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
