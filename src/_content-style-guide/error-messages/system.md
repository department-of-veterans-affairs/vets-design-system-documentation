---
layout: content-style-guide
permalink: /content-style-guide/error-messages/system
has-parent: /content-style-guide/error-messages/
title: System messages
intro-text: System messages alert the person of important system-related issues or statuses. System messages are initiated by the system and not by the person’s actions.
anchors:
  - anchor: Scheduled downtime notifications
  - anchor: Unscheduled downtime notifications
  - anchor: Updates to user data (system initiated)
---

**Note:** The Help users to recover from errors pattern has guidance on when to consider instructing the person to call the VA.gov help desk and when to add other "next-step" calls to action.

[Learn more in the Help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action)

## Scheduled downtime notifications

<va-table>
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Component</span>
    <span>State</span>
  </va-table-row>
  <va-table-row>
    <span><b>Site-wide</b></span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </va-table-row>
  <va-table-row>
    <span>Advance notification</span>
    <span><b>Upcoming site maintenance</b></span>
    <span>We’ll be working on VA.gov soon. The maintenance will last [x hour]. During that time, you won’t be able to sign in or use tools.<br> <b>Date:</b> Month Day, Year <br><b>Start/End time:</b> 0:00 a.m. to 0:00 a.m. ET</span>
    <span><a href="{{ site.baseurl }}/components/banner#before-maintenance">Maintenance banner</a></span>
    <span>Before maintenance</span>
  </va-table-row>
  <va-table-row>
    <span>Advance notification/24 hour</span>
    <span><b>Upcoming site maintenance</b></span>
    <span>We’ll be working on VA.gov soon. The maintenance will last 24 hours. During that time, you won’t be able to sign in or use tools. <br><b>Start:</b> Month Day, Year, at 0:00 a.m. ET <br><b>End:</b> Month Day, Year, at 0:00 a.m. ET</span>
    <span><a href="{{ site.baseurl }}/components/banner#before-maintenance">Maintenance banner</a></span>
    <span>Before maintenance</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime</span>
    <span><b>Site maintenance</b></span>
    <span>We're working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br><b>Date:</b> Month Day, Year <br><b>Start/End time:</b> 0:00 a.m. to 00:00 a.m. ET</span>
    <span><a href="{{ site.baseurl }}/components/banner#during-maintenance">Maintenance banner</a></span>
    <span>During maintenance</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime/24 hour</span>
    <span><b>Site maintenance</b></span>
    <span>We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br><b>Start:</b> Month Day, Year, at 0:00 a.m. ET <br><b>End:</b> Month Day, Year, at 0:00 a.m. ET</span>
    <span><a href="{{ site.baseurl }}/components/banner#during-maintenance">Maintenance banner</a></span>
    <span>During maintenance</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is accessible</span>
    <span><b>We're working on the site</b></span>
    <span>We’re working on VA.gov right now. You should still be able to sign in and use tools. But if you have any trouble, check back later.</span>
    <span><a href="{{ site.baseurl }}/components/banner)">Maintenance banner</a></span>
    <span>Warning</span>
  </va-table-row>
  <va-table-row>
    <span><b>In a form, claim, application, tool, etc.</b></span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime</span>
    <span><b>We're working on [name] right now</b></span>
    <span>If you have trouble using this [application, claim, form, tool], check back after [Month Day, Year] at [0:00 a.m./p.m. ET].</span>
    <span><a href="{{ site.baseurl }}/components/modal">Modal</a></span>
    <span>Warning</span>
  </va-table-row>
  <va-table-row>
    <span>Partial downtime notification</span>
    <span><b>Some tools or services aren't working right now</b></span>
    <span>You may have trouble accessing some features on VA.gov at this time. We’re working to fix this. Check back later.</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
  </va-table-row>
   <va-table-row>
    <span>General error (500)</span>
    <span><b>This [tool, application, form] isn’t working right now</b></span>
    <span>We’re sorry. There’s a problem with [name]. Refresh this page or try again later. <br>[Add instructions for who to contact or how to remedy the problem.]</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert</a></span>
  </va-table-row>
<va-table-row>
    <span>General error (500)</span>
    <span><b>Sorry, we couldn’t complete your request</b></span>
    <span>[Name] isn’t working as expected. [Add instructions to remedy the problem or when to come back and try again.] </span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert</a></span>
  </va-table-row>
<va-table-row>
    <span>General error (500)</span>
    <span><b>We can’t access your [type of information] right now</b></span>
    <span>We’re sorry. There’s a problem with our system. Check back later. <br>[Add instructions to remedy the problem or when to come back and try again.]</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert">Alert</a></span>
  </va-table-row>
  <va-table-row>
    <span><b>Sign-in page</b></span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime</span>
    <span><b>You may have trouble signing in with [DS Logon, ID.me, login.gov]</b></span>
    <span>We’re sorry. We’re working to fix some problems with our [DS Logon, ID.me, login.gov] sign in process. If you’d like to sign in to VA.gov with this account, please check back later.</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
  </va-table-row>
</va-table>

## Unscheduled downtime notifications

<va-table>
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Component</span>
    <span>State</span>
  </va-table-row>
  <va-table-row>
    <span><b>Site-wide</b></span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime</span>
    <span><b>Site maintenance</b></span>
    <span>We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br><b>Date:</b> Day, Date, Year <br><b>Start/End time:</b> 0:00 a.m. to 00:00 a.m. ET</span>
    <span><a href="{{ site.baseurl }}/components/banner#during-maintenance">Maintenance banner</a></span>
    <span>During maintenance</span>
  </va-table-row>
  <va-table-row>
    <span><b>In-app</b></span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime</span>
    <span><b>This application is down for maintenance</b></span>
    <span>We’re making some updates to this tool. We’re sorry it’s not working right now. Please check back soon.</span>
    <span><a href="{{ site.baseurl }}/components/modal">Modal</a></span>
    <span>Informational</span>
  </va-table-row>
  <va-table-row>
    <span><b>Sign-in page</b></span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </va-table-row>
  <va-table-row>
    <span>During downtime</span>
    <span><b>You may have trouble signing in with [DS Logon, ID.me, login.gov</b></span>
    <span>We’re sorry. We’re working to fix some problems with our [DS Logon, ID.me, login.gov] sign in process. If you’d like to sign in to VA.gov with this account, please check back later.</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
  </va-table-row>
</va-table>

## Updates to user data (system-initiated)

*Some messages written to reflect the example; other variations will be added to expanded dictionary section.*

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
    <span>Status update (e.g. claim closed)</span>
    <span><b>Your [CLAIM TYPE] claim update</b></span>
    <span>Our records show that your claim was closed on [DATE].</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
    <span>Informational</span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Action required (e.g. claim evidence request)</span>
    <span><b>We need your help to finish reviewing your claim</b></span>
    <span>Please provide more evidence (supporting documents) so we can finish reviewing your claim.</span>
    <span>See Details</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Save your work in progress (for unauthenticated users)</span>
    <span>Sign in now to save time and save your work in progress</span>
    <span>Here’s how signing in now helps you: * We can fill in some of your information for you to save you time. * You can save your work in progress. You’ll have 60 days from when you start or make updates to your application to come back and finish it. <b>Note:</b> You can sign in after you start your application. But you’ll lose any information you already filled in.</span>
    <span>Sign in to start your application (primary button); Start your application without signing in (link)</span>
    <span><a href="/components/alert">Alert box</a></span>
    <span><a href="/components/alert/#examples---standard">Informational</a></span>
    <span>After h1 on <a href="/templates/forms/introduction">Form Introduction page</a></span>
  </va-table-row>
  <va-table-row>
    <span>Prefill - Intro variation (for authenticated users)</span>
    <span>We’ve prefilled some of your  information</span>
    <span>Since you’re signed in, we’ve prefilled part of your application based on your profile details. You can also save your application in progress and come back later to finish filling it out.</span>
    <span>None</span>
    <span><a href="/components/alert">Alert box</a></span>
    <span><a href="/components/alert/#examples---standard">Informational</a></span>
    <span>After h1 on <a href="/templates/forms/introduction">Form Introduction page</a></span>
  </va-table-row>
</va-table>
