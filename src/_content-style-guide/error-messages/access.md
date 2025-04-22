---
layout: content-style-guide
permalink: /content-style-guide/error-messages/access
has-parent: /content-style-guide/error-messages/
title: Access messages
intro-text: Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc.
anchors:
  - anchor: System downtime
  - anchor: Network connection loss
  - anchor: Authorization
  - anchor: Empty state
---

***Note:** See the [help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

## System downtime

Variations in messaging will be contingent on:

- Whether or not the downtime is scheduled/expected
- If scheduled, when the application will be back up (precise time stamp if known, general estimate if not)
- If not expected, general estimate of when the application will be back up

<va-table>
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
    <span>Entire site is not accessible (site-wide scheduled downtime)</span>
    <span><b>Site maintenance</b></span>
    <span>We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we’re finished. Thank you for your patience.<br/><b>Date:</b> Day, Date, Year <b>Start/End time:</b> 0:00 a.m. to 0:00 a.m. ET</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is not accessible (expected)</span>
    <span><b>VA.gov isn't working right now</b></span>
    <span>We're sorry. Something went wrong on our end. Please refresh this page or try again later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Application or tool is not accessible</span>
    <span><b>[APPLICATION NAME] is down for maintenance</b></span>
    <span>We're making some updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back soon.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace page below title</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is accessible (general message; specific iterations to be added later)</span>
    <span><b>Some parts of this may not be working</b></span>
    <span>You can still use [APPLICATION/PAGE NAME], but some parts of it may not work for you. If you're having trouble, please try again later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Warning alert</a></span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Component is not accessible (general message; specific iterations to be added later)</span>
    <span><b>[COMPONENT NAME] isn't working right now</b></span>
    <span>We're sorry. Something went wrong on our end. Please refresh this page or try again later.</span>
    <span>Go back to previous page</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Warning alert</a></span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Component is accessible (general message; <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/Access%20Messaging.md">see application/component specific messages</a>)</span>
    <span><b>Some information may not be up to date</b></span>
    <span>You can still use [COMPONENT NAME], but you may not be able to see all your updated information. If you're having trouble, please try again later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Warning alert</a></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (e.g. save application in progress)</span>
    <span><b>We couldn't save your form</b></span>
    <span>We're sorry. Something went wrong when we tried to save your form. Try saving it again in a few minutes. If you're on a public computer, you can continue to fill out your form, but your information won't automatically be saved.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task, can't proceed</span>
    <span><b>We've run into a problem</b></span>
    <span>We're sorry. Something went wrong on our end. Please try again.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task, can still proceed</span>
    <span><b>We've run into a problem</b></span>
    <span>We're sorry. Something went wrong on our end. You can try again now, or move on to the next step and come back later to complete this.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Warning alert</a></span>
    <span>Above page title</span>
  </va-table-row>
</va-table>


## Network connection loss

<va-table>
  <va-table-row>
    <span>Scenario</span>
    <span>Message Title</span>
    <span>Message Count</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Application/page/component is not accessible due to user connection loss</span>
    <span><b>We can't load [APPLICATION/PAGE/COMPONENT NAME]</b></span>
    <span>Please refresh this page or try again later.</span>
    <span>Try again</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (e.g. save application in progress) due to user connection loss</span>
    <span><b>We can't save your form right now</b></span>
    <span>Please make sure you're connected to the Internet, and then try saving your form again.</span>
    <span>Try again</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task due to user connection loss</span>
    <span><b>We've run into a problem</b></span>
    <span>Please check to make sure you're connected to the Internet, and try again.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
    <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
    <span>Above page title</span>
  </va-table-row>

</va-table>

## Authorization

<va-table>
  <va-table-row>
    <span>Scenario</span>
    <span>Message Title</span>
    <span>Message Content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user's records are not found</span>
    <span><b>We don't seem to have your records</b></span>
    <span>We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Page) user's records are not found</span>
    <span><b>We don't seem to have your records</b></span>
    <span>We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Component) user's records are not found</span>
    <span><b>We don't seem to have your records</b></span>
    <span>We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user is not eligible for a benefit because they aren't a Veteran/dependent/spouse</span>
    <span><b>You're not eligible for this benefit</b></span>
    <span>It looks like you're not eligible for this benefit based on the information you've given us. Please check your eligibility again.</span>
    <span>Check your eligibility</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user is not currently enrolled in a benefit (e.g. not enrolled in Post-9/11 GI Bill benefits)</span>
    <span><b>You're not enrolled in this benefit right now</b></span>
    <span>Our records show that you're not signed up for this benefit. If you think you're eligible for this benefit, you can apply now.</span>
    <span>(1) Check your eligibility (2) Apply now</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) user is not a VA patient</span>
    <span><b>We can't give you access to this tool right now</b></span>
    <span>We're sorry. Only patients who've received care at a VA facility can use VA.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, please call that facility to find out if you're in their records.</span>
    <span>Find your VA facility</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content below page title</span>
  </va-table-row>
</va-table>

## Empty state

<va-table>
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Component</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) No data tied to the user or scenario</span>
    <span><b>We don't have any [DATA TYPE (ie, prescription refills or health records)] for you in our system</b></span>
    <span>&nbsp;</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Page) no data tied to the user or scenario</span>
    <span><b>We don't have any [DATA TYPE] for you in our system</b></span>
    <span>&nbsp;</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>Replace content below page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Component) no data tied to the user or scenario</span>
    <span><b>We don't have any [DATA TYPE] for you in our system</b></span>
    <span>&nbsp;</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>Replace affected component</span>
  </va-table-row>

</va-table>