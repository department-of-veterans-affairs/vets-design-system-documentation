---
layout: content-style-guide
title: Messaging dictionary
draft: true
---

## System messaging

Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Scheduled downtime notice scenarios

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Notice of upcoming scheduled downtime (sitewide)</span>
    <span>VA.gov will be down for maintenance soon</span>
    <span>We’ll be doing some work on VA.gov on [DATE] between [TIME] and [TIME]. If you have trouble using the site during that time, please check back soon.</span>
    <span><va-link href="/components/modal" text="Modal"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>N/A</span>
  </va-table-row>
  <va-table-row>
    <span>Notice of upcoming scheduled downtime (application)</span>
    <span>[APPLICATION NAME] will be down for maintenance soon</span>
    <span>We'll be doing some work on [APPLICATION NAME] on [DATE] between [TIME] and [TIME]. If you have trouble using this tool during that time, please check back soon.</span>
    <span><va-link href="/components/modal" text="Modal"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>N/A</span>
  </va-table-row>
  <va-table-row>
    <span>Notice of upcoming scheduled downtime (authentication provider)</span>
    <span>[ID.ME/DS LOGON/MYHEALTHEVET] will be down for maintenance soon</span>
    <span>[ID.ME/DS LOGON/MYHEALTHEVET] will be down for maintenance on [DATE] between [TIME] and [TIME]. If you have trouble signing in to your Vets.gov account during that time, please check back soon.</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Below sign in overlay title</span>
  </va-table-row>
</va-table>

### Updates to user data (system-initiated)

*Some messages written to reflect the example; other variations will be added to expanded dictionary section.*

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Status update (e.g. claim closed)</span>
    <span><strong>Your [CLAIM TYPE] claim update</strong></span>
    <span>Our records show that your claim was closed on [DATE].</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Action required (e.g. claim evidence request)</span>
    <span><strong>We need your help to finish reviewing your claim</strong></span>
    <span>Please provide more evidence (supporting documents) so we can finish reviewing your claim.</span>
    <span>See Details</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Form prefill notice</span>
    <span><strong>We've started your form for you</strong></span>
    <span>We've filled in some of this form based on information you've given us in the past. Please double-check the information and update it as needed.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Change in application feature, neutral/positive impact (e.g. SiP now available)</span>
    <span><strong>You can now save your in-progress applications</strong></span>
    <span>Sign in to VA.gov to save your application so you can come back later to complete it. All you'll need to sign in is an email and password.</span>
    <span>Sign in to VA.gov</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
</va-table>

## Engagement messaging

Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Prompt to complete a task or enter data

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Continue a saved benefit application</span>
    <span><strong>Still want to apply for [BENEFIT NAME]?</strong></span>
    <span>The application you started for [BENEFIT NAME] will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or you can start a new application any time.</span>
    <span>[BUTTON 1] Continue your application [BUTTON 2] Start over</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row> 
  <va-table-row>
    <span>Set up 2-factor authentication</span>
    <span><strong>Want to make your VA.gov account more secure?</strong></span>
    <span>You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if someone gets your password.</span>
    <span>[BUTTON 1] Set up 2FA [BUTTON 2] Learn more</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row> 
</va-table>

## Access messaging

Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### System downtime

Variations in messaging will be contingent on:

- Whether or not the downtime is scheduled/expected
- If scheduled, when the application will be back up (precise time stamp if known, general estimate if not)
- If not expected, general estimate of when the application will be back up

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is not accessible (scheduled downtime)</span>
    <span><strong>VA.gov is down for maintenance right now</strong></span>
    <span>We're sorry. VA.gov isn't ready for you right now. We're doing some work to help make this site even better for Veterans, service members, and family members like you. We hope to finish our work by [DATE/TIME]. Please check back then.</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is not accessible (expected)</span>
    <span><strong>VA.gov isn't working right now</strong></span>
    <span>We're sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")).</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is accessible</span>
    <span><strong>We're working on the site</strong></span>
    <span>We’re doing some work on VA.gov right now. You should still be able to use the applications and tools. But if you have any trouble, please check back soon.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Banner</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is not accessible</span>
    <span><strong>[APPLICATION NAME] is down for maintenance</strong></span>
    <span>We’re making some updates to [APPLICATION NAME]. We’re sorry it’s not working right now, and we hope to be finished by [DATE], [TIME]. Please check back soon.</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page below title</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is not accessible, no timeframe</span>
    <span><strong>[APPLICATION NAME] is down for maintenance</strong></span>
    <span>We're making some updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back soon.</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page below title</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is accessible (general message; specific iterations to be added later)</span>
    <span><strong>Some parts of this may not be working</strong></span>
    <span>You can still use [APPLICATION/PAGE NAME], but some parts of it may not work for you. If you're having trouble, please try again later.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Component is not accessible (general message; specific iterations to be added later)</span>
    <span><strong>[COMPONENT NAME] isn't working right now</strong></span>
    <span>We're sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")].</span>
    <span>Go back to previous page</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Component is accessible (general message; <va-link href="see application/component specific messages" text="see application/component specific messages"></va-link>)</span>
    <span><strong>Some information may not be up to date</strong></span>
    <span>We're sorry. Something's not working quite right. You can still use [COMPONENT NAME], but you may not be able to see all your updated information. If you're having trouble, please try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")].</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (e.g. save application in progress)</span>
    <span><strong>We couldn't save your form</strong></span>
    <span>We're sorry. Something went wrong when we tried to save your form. If you're on a secure and private computer, you can leave this page open and try saving your form again in a few minutes. If you're on a public computer, you can continue to fill out your form, but it won't automatically save as you fill it out.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task, can't proceed</span>
    <span><strong>We've run into a problem</strong></span>
    <span>We're sorry. Something went wrong on our end. Please try again.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task, can still proceed</span>
    <span><strong>We've run into a problem</strong></span>
    <span>We're sorry. Something went wrong on our end. You can try again now, or move on to the next step and come back later to complete this.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
</va-table>

### Network connection loss

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Application/page/component is not accessible due to user connection loss</span>
    <span><strong>We can't load [APPLICATION/PAGE/COMPONENT NAME]</strong></span>
    <span>Please make sure you're connected to the Internet, and refresh this page to try again.</span>
    <span>Try again</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (e.g. save application in progress) due to user connection loss</span>
    <span><strong>We can't save your form right now</strong></span>
    <span>Please make sure you're connected to the Internet, and then try saving your form again.</span>
    <span>Try again</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task due to user connection loss</span>
    <span><strong>We've run into a problem</strong></span>
    <span>Please check to make sure you're connected to the Internet, and try again.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
</va-table>

### Authorization

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user's records are not found</span>
    <span><strong>We don't seem to have your records</strong></span>
    <span>We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET.</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Page) user's records are not found</span>
    <span><strong>We don't seem to have your records</strong></span>
    <span>We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET.</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Component) user's records are not found</span>
    <span><strong>We don't seem to have your records</strong></span>
    <span>We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET.</span>
    <span>N/A</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user is not eligible for a benefit because they aren't a Veteran/dependent/spouse</span>
    <span><strong>You're not eligible for this benefit</strong></span>
    <span>It looks like you're not eligible for this benefit based on the information you've given us. Please check your eligibility again.</span>
    <span>Check your eligibility</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user is not currently enrolled in a benefit (e.g. not enrolled in Post-9/11 GI Bill benefits)</span>
    <span><strong>You're not enrolled in this benefit right now</strong></span>
    <span>It looks like you're not signed up for this benefit. If you think you're eligible, you can apply now.</span>
    <span>(1) Check your eligibility (2) Apply now</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user is not a VA patient</span>
    <span><strong>We can't give you access to this tool right now</strong></span>
    <span>We're sorry. Only patients who've received care at a VA facility can use VA.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, please call that facility to find out if you're in their records.</span>
    <span>Find your VA facility</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
</va-table>

### Empty state

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Component</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) No data tied to the user or scenario</span>
    <span><strong>No [DATA TYPE (ie, prescription refills or health records)] to show</strong></span>
    <span>We don't have any [DATA TYPE] in our system to show here.</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Page) No data tied to the user or scenario</span>
    <span><strong>No [DATA TYPE] to show</strong></span>
    <span>We don't have any [DATA TYPE] in our system to show here.</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Component) No data tied to the user or scenario</span>
    <span><strong>No [DATA TYPE] to show</strong></span>
    <span>We don't have any [DATA TYPE] for you in our system.</span>
    <span><va-link href="/foundation/typography" text="Plain text"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row>
</va-table>

## Feedback messaging

The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Task completion success/failure

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>(Form) Save in progress success (inline)</span>
    <span><strong>Saved</strong></span>
    <span>We saved the information you've entered so far.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>(Form) Save in progress success (exit page)</span>
    <span><strong>Saved</strong></span>
    <span>We saved your in-progress form. Remember, you need to finish the form and click "Submit" to apply for this benefit. Continue applying now, or come back later to finish your application.</span>
    <span>Continue your application</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Form) Save in progress failure (inline)</span>
    <span><strong>Your form didn't save</strong></span>
    <span>We're sorry. We couldn't save your form. Please try again.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Form general error</span>
    <span><strong>We need you to start over with this application</strong></span>
    <span>Something's not working quite right. We're sorry to make extra work for you, but please try applying again in a few minutes.</span>
    <span>Start over</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Form submission success</span>
    <span><strong>Submitted</strong></span>
    <span>We received your form. Thank you.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Form submission failure, can save in progress</span>
    <span><strong>Please save this application and try again</strong></span>
    <span>We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow.</span>
    <span>Save your application</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Form submission failure, unable to save in progress</span>
    <span><strong>Please start over with this application</strong></span>
    <span>We're sorry. Your application didn't go through, and you'll need to start over. We suggest you wait a day while we fix this problem.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Required form field is empty</span>
    <span>N/A</span>
    <span>Please fill in this required information.</span>
    <span>N/A</span>
    <span>Inline</span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>N/A</span>
  </va-table-row>
  <va-table-row>
    <span>Form field entry is not valid</span>
    <span>N/A</span>
    <span>Please fill in a valid [address/email address/phone number].</span>
    <span>N/A</span>
    <span>Inline</span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>N/A</span>
  </va-table-row>
  <va-table-row>
    <span>File upload success</span>
    <span><strong>Uploaded</strong></span>
    <span>We uploaded your file. Thank you.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>File upload failure</span>
    <span><strong>We couldn't upload your file</strong></span>
    <span>We're sorry. We weren't able to upload your file. Please try again.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>File download success</span>
    <span><strong>Downloaded</strong></span>
    <span>We downloaded your file.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>File download failure</span>
    <span><strong>We couldn't download your file</strong></span>
    <span>We're sorry. We weren't able to download your file. Please try again.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Message sent</span>
    <span><strong>Message sent</strong></span>
    <span>We sent your message. Thank you.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Message failed to send</span>
    <span><strong>Your message didn't go through</strong></span>
    <span>We're sorry. We couldn't send your message. Please try again.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Creation success</span>
    <span><strong>File created</strong></span>
    <span>We created your file. Thank you.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Creation failure</span>
    <span><strong>We couldn't create your file</strong></span>
    <span>We're sorry. We couldn't create your file. Please try again.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Deletion success</span>
    <span><strong>File deleted</strong></span>
    <span>We deleted your file. Thank you.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Deletion failure</span>
    <span><strong>We couldn't delete your file</strong></span>
    <span>We're sorry. We couldn't delete your file. Please try again.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Update success</span>
    <span><strong>File updated</strong></span>
    <span>We updated your file. Thank you.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#success-alert" text="Success alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Update failure</span>
    <span><strong>We couldn't update your file</strong></span>
    <span>We're sorry. We couldn't update your file. Please try again.</span>
    <span>Dismissible</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
</va-table>

_Categories adapted from [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/guidelines/messaging/types)_
