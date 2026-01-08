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
    <span><b>You may have trouble signing in with [ID.me, Login.gov]</b></span>
    <span>We’re sorry. We’re working to fix some problems with our [<b>ID.me</b>, <b>Login.gov</b>] sign-in process. If you’d like to sign in to VA.gov with this account, check back later.</span>
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
    <span>We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we’re finished. Thank you for your patience. <br><b>Date:</b> Month Day, Year <br><b>Start/End time:</b> 0:00 a.m. to 0:00 a.m. ET</span>
    <span><a href="{{ site.baseurl }}/components/banner#during-maintenance">Maintenance banner</a></span>
    <span>During maintenance</span>
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
    <span><b>We're working on [name]</b></span>
    <span>We’re making some updates to this [application, claim, form, tool]. We’re sorry it’s not working right now. Check back later.</span>
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
    <span><b>You may have trouble signing in with [ID.me, Login.gov]</b></span>
    <span>We’re sorry. We’re working to fix some problems with our [<b>ID.me</b>, <b>Login.gov</b>] sign-in process. If you’d like to sign in to VA.gov with this account, check back later.</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
  </va-table-row>
</va-table>

## Updates to user data (system-initiated)

**Note:** We wrote some messages to reflect the example. We'll add other variations to the expanded dictionary section.

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
    <span>Status update (ex. claim closed)</span>
    <span><b>Your [claim type] claim update</b></span>
    <span>Our records show that we closed your claim on [Month Day, Year].</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
    <span>Informational</span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Action required (ex. claim evidence request)</span>
    <span><b>We need your help to finish reviewing your claim</b></span>
    <span>Provide more evidence (supporting documents) so we can finish reviewing your claim.</span>
    <span>Review details</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>Before affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Save your work in progress (unauthenticated), sign in not required</span>
    <span><b>Sign in with a verified account</b></span>
    <span>Here’s how signing in with an identify-verified account helps you:<br>- We can fill in some of your information for you to save you time.<br>- You can save your work in progress. You’ll have 60 days from when you start or make changes to submit your [application, claim, form].<br><b>Don’t yet have a verified account?</b> Create an <b>ID.me</b> or <b>Login.gov</b> account. We’ll help you verify your identity for your account now.<br><b>Not sure if your account is verified?</b> Sign in here. If you still need to verify your identity, we’ll help you do that now.<br><b>Note:</b> You can sign in after you start filling out your [application, claim, form]. But you’ll lose any information you already filled in.</span>
    <span>Sign in or create an account (primary button); Start your [application, claim, form] without signing in (link)</span>
    <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
    <span>Informational</span>
    <span>After h1 on <a href="/templates/forms/introduction">form introduction page</a></span>
  </va-table-row>
  <va-table-row>
    <span>Save your work in progress (unauthenticated), sign in required</span>
    <span><b>Sign in with a verified account</b></span>
    <span>You’ll need to sign in with an identity-verified account through 1 of our account providers. Identity verification helps us protect all Veterans’ information and prevent scammers from stealing your benefits.<br><b>Don’t yet have a verified account?</b> Create an <b>ID.me</b> or <b>Login.gov</b> account. We’ll help you verify your identity for your account now.<br><b>Not sure if your account is verified?</b> Sign in here. If you still need to verify your identity, we’ll help you do that now.</span>
    <span>Sign in or create an account (primary button); Learn about creating an account (link)</span>
    <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
    <span>Informational</span>
    <span>After h1 on <a href="/templates/forms/introduction">form introduction page</a></span>
  </va-table-row>
  <va-table-row>
    <span>Optional sign in without prefill</span>
    <span><b>Sign in with a verified account</b></span>
    <span>When you sign in with an identity-verified account, you can save your work in progress. You’ll have 60 days from when you start or make changes to submit your [application, claim, form].<br><b>Don’t yet have a verified account?</b> Create an <b>ID.me</b> or <b>Login.gov</b> account. We’ll help you verify your identity for your account now.<br><b>Not sure if your account is verified?</b> Sign in here. If you still need to verify your identity, we’ll help you do that now.<br><b>Note:</b> You can sign in after you start filling out your [application, claim, form]. But you’ll lose any information you already filled in.</span>
    <span>Sign in or create an account (primary button); Start your [application, claim, form] without signing in (link)</span>
    <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
    <span>Informational</span>
    <span>After h1 on <a href="/templates/forms/introduction">form introduction page</a></span>
  </va-table-row>
  <va-table-row>
    <span>Prefill: Intro variation (authenticated)</span>
    <span><b>We prefilled some of your information</b></span>
    <span>Since you’re signed in, we prefilled part of your [application, claim, form] based on your VA profile. You can also save your [application, claim, form] in progress and come back later to finish filling it out.<br><b>Note:</b> You’ll have 60 days from when you start or make updates to your [application, claim, form] to come back and finish it.</span>
    <span>N/A</span>
    <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
    <span>Informational</span>
    <span>After h1 on <a href="/templates/forms/introduction">form introduction page</a></span>
  </va-table-row>
  <va-table-row>
    <span>Verify your identity with <b>ID.me</b> or <b>Login.gov</b></span>
    <span><b>Verify your identity</b></span>
    <span>We need you to verify your identity for your [<b>ID.me</b>, <b>Login.gov</b>] account. This step helps us protect all Veterans’ information and prevent scammers from stealing your benefits.<br>This one-time process often takes about 10 minutes. You’ll need to provide certain personal information and identification.</span>
    <span>Verify with [<b>ID.me</b>, <b>Login.gov</b>] (brand asset button)</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>After h1 on <a href="/templates/forms/introduction">form introduction page</a></span>
  </va-table-row>
  <va-table-row>
    <span>Sign in with a different account</span>
    <span><b>You need to sign in with a different account</b></span>
    <span>We need you to sign in with an identity-verified account. This helps us protect all Veterans’ information and prevent scammers from stealing your benefits. You have 2 options: a verified <b>ID.me</b> or a verified <b>Login.gov</b> account.<br><b>If you already have an ID.me or Login.gov account</b>, sign in with that account. If you still need to verify your identity for your account, we’ll help you do that now.<br><b>If you don’t have an ID.me or Login.gov account</b>, create one now. We’ll help you verify your identity.</span>
    <span>Sign in with <b>ID.me</b> (brand asset button 1); Sign in with <b>Login.gov</b> (brand asset button 2); Learn about creating an account (link)</span>
    <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
    <span>Warning</span>
    <span>After h1 on <a href="/templates/forms/introduction">form introduction page</a></span>
  </va-table-row>
</va-table>
