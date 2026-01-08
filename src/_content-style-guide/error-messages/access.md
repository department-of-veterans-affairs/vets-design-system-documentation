---
layout: content-style-guide
permalink: /content-style-guide/error-messages/access
has-parent: /content-style-guide/error-messages/
title: Access messages
intro-text: Access messages appear when the person tries to access an item that’s not available to them. For example, an access message may appear when a record has been deleted or the person doesn’t have access to a piece of information.
anchors:
  - anchor: System downtime
  - anchor: Network connection loss
  - anchor: Authorization
  - anchor: Empty state
---

**Note:** The Help users to recover from errors pattern has guidance on when to consider instructing the person to call the VA.gov help desk and when to add other "next-step" calls to action.

[Learn more in the Help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action)

## System downtime

Variations in messaging depend on these factors:

- Whether the downtime is scheduled/expected
- If scheduled, when the application/claim/form will be available again (precise timestamp if known, or a general estimate if not)
- If unexpected, a general estimate of when the application/claim/form will be available again

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
    <span>Entire site isn't accessible (site-wide scheduled downtime)</span>
    <span><b>Site maintenance</b></span>
    <span>We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we’re finished. Thank you for your patience.<br/><b>Date:</b> Month Day, Year<br><b>Start/End time:</b> 0:00 a.m. to 0:00 a.m. ET</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site isn't accessible (expected)</span>
    <span><b>VA.gov isn't working right now</b></span>
    <span>We're sorry. Something went wrong on our end. Refresh this page or try again later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Application, claim, form, or tool isn't accessible</span>
    <span><b>We're working on [name]</b></span>
    <span>We're making some updates to this [application, claim, form, tool]. We're sorry it's not working right now. Check back later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace page after title</span>
  </va-table-row>
  <va-table-row>
    <span>Application, claim, form, tool, or page is accessible (general message; we'll add specific iterations later)</span>
    <span><b>Some parts of [name] may not be working</b></span>
    <span>You can still use [name], but some parts of it may not work for you. If you're having trouble, check back later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>After page title</span>
  </va-table-row>
  <va-table-row>
    <span>Component isn't accessible (general message; we'll add specific iterations later)</span>
    <span><b>[Component name] isn't working right now</b></span>
    <span>We're sorry. Something went wrong in our system. Refresh this page or try again later.</span>
    <span>Go back to previous page</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Component is accessible (general message; learn more in <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/Access%20Messaging.md">application/component-specific messages</a>)</span>
    <span><b>Some information may not be up to date</b></span>
    <span>You can still use [component name], but it may not have all your updated information yet. If you're having trouble, check back later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>Before affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (ex. save application in progress)</span>
    <span><b>We couldn't save your [application, claim, form]</b></span>
    <span>We're sorry. Something went wrong when we tried to save your [application, claim, form]. Try saving it again later. If you're on a public computer, you can continue to fill out your [application, claim, form]. But your information won't save automatically.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
    <span>Error</span>
    <span>After affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a task the person initiated, can't proceed</span>
    <span><b>There was a problem</b></span>
    <span>We're sorry. Something went wrong. Try again later.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
    <span>Error</span>
    <span>After page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a task the person initiated, can still proceed</span>
    <span><b>There was a problem</b></span>
    <span>We're sorry. Something went wrong. You can try again now or move on to the next step. You can come back later to complete this step.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>After page title</span>
  </va-table-row>
</va-table>

## Network connection loss

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
    <span>Application, claim, form, tool, page, or component isn't accessible due to the person's connection loss</span>
    <span><b>We can't load [name]</b></span>
    <span>Refresh this page or try again later.</span>
    <span>Try again</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>After page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (ex., save application in progress) due to the person's connection loss</span>
    <span><b>We can't save your [application, claim, form] right now</b></span>
    <span>Make sure you're connected to the internet and then try saving your [application, claim, form] again.</span>
    <span>Try again</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>After affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a task the person initiated due to their connection loss</span>
    <span><b>There was a problem</b></span>
    <span>Make sure you're connected to the internet and try again.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
    <span>Error</span>
    <span>After page title</span>
  </va-table-row>
</va-table>

## Authorization

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
    <span>(Application or page) Person's records aren't found</span>
    <span><b>We can't match your records</b></span>
    <span>We're sorry. We can't match your information to our records. If you think your information should be here, try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content after page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Component) Person's records aren't found</span>
    <span><b>We can't match your records</b></span>
    <span>We're sorry. We can't match your information to our records. If you think your information should be here, try again later or call us at 800-698-2411 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) Person isn't eligible for a benefit because they aren't a Veteran/dependent/spouse</span>
    <span><b>You're not eligible for this benefit</b></span>
    <span>Based on the information you gave us, you're not eligible for this benefit. Check your eligibility again.</span>
    <span>Check your eligibility</span>
    
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content after page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) Person isn't currently enrolled in a benefit (ex. not enrolled in Post-9/11 GI Bill benefits)</span>
    <span><b>You're not enrolled in this benefit</b></span>
    <span>Our records show that you're not signed up for this benefit. If you think you're eligible for this benefit, you can apply now.</span>
    <span>Check your eligibility (button 1); Apply now (button 2)</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content after page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Application) Person isn't a VA patient</span>
    <span><b>We can't give you access to this tool</b></span>
    <span>We're sorry. Only people who've received care at a VA health facility can use VA.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, call that facility to find out if you're in their records.</span>
    <span>Find your VA facility</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>N/A</span>
    <span>Replace content after page title</span>
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
    <span>(Application or page) No data tied to the person or scenario</span>
    <span><b>We don't have any [data type (ex. prescription refills or health records)] for you in our system</b></span>
    <span>&nbsp;</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>Replace content after page title</span>
  </va-table-row>
  <va-table-row>
    <span>(Component) No data tied to the person or scenario</span>
    <span><b>We don't have any [data type] for you in our system</b></span>
    <span>&nbsp;</span>
    <span><a href="{{ site.baseurl }}/foundation/typography">Plain text</a></span>
    <span>Replace affected component</span>
  </va-table-row>
</va-table>
