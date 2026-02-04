---
layout: content-style-guide
permalink: /content-style-guide/error-messages/engagement
has-parent: /content-style-guide/error-messages/
title: Engagement messages
intro-text: Engagement messages recommend that the person enter or update data in the system. Engagement messages can be initiated by either the system or another person.
---

**Note:** The Help users to recover from errors pattern has guidance on when to consider instructing the person to call for VA.gov technical support and when to add other "next-step" calls to action.

[Learn more in the Help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action)

## Prompt to complete a task or enter data

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
        <span>Continue a saved application, claim, form, etc.</span>
        <span><b>Continue your [application, claim, form] for [benefit name]</b></span>
        <span>Your [application, claim, form] will expire on <b>[Month Day, Year]</b>. If you'd still like to submit it, you'll need to do so by this date. Or you can start a new [application, claim, form] any time.</span>
        <span>Continue your [application, claim, form] (primary button); Start over (secondary button)</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>Replace affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Save your work in progress (unauthenticated), sign in not required</span>
        <span><b>Sign in with a verified account</b></span>
        <span>Here’s how signing in with an identity-verified account helps you:<br><br>
            • We can fill in some of your information for you to save you time.<br>
            • You can save your work in progress. You’ll have 60 days from when you start or make changes to submit your [application, claim, form].<br><br>
            <b>Don’t yet have a verified account?</b> Create an <b>ID.me</b> or <b>Login.gov</b> account. We’ll help you verify your identity for your account now.<br><br>
            <b>Not sure if your account is verified?</b> Sign in here. If you still need to verify your identity, we’ll help you do that now.<br><br>
            <b>Note:</b> You can sign in after you start filling out your [application, claim, form]. But you’ll lose any information you already filled in.</span>
        <span>Sign in or create an account (primary button); Start your [application, claim, form] without signing in (link)</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>After h1 on [form introduction page](https://design.va.gov/templates/forms/introduction)</span>
    </va-table-row>
    <va-table-row>
        <span>Save your work in progress (unauthenticated), sign in required</span>
        <span><b>Sign in with a verified account</b></span>
        <span>You’ll need to sign in with an identity-verified account through 1 of our account providers. Identity verification helps us protect all Veterans’ information and prevent scammers from stealing your benefits.<br><br>
            <b>Don’t yet have a verified account?</b> Create an <b>ID.me</b> or <b>Login.gov</b> account. We’ll help you verify your identity for your account now.<br><br>
            <b>Not sure if your account is verified?</b> Sign in here. If you still need to verify your identity, we’ll help you do that now.</span>
        <span>Sign in or create an account (primary button); Learn about creating an account (link)</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>After h1 on [form introduction page](https://design.va.gov/templates/forms/introduction)</span>
    </va-table-row>
    <va-table-row>
        <span>Optional sign in without prefill</span>
        <span><b>Sign in with a verified account</b></span>
        <span>When you sign in with an identity-verified account, you can save your work in progress. You’ll have 60 days from when you start or make changes to submit your [application, claim, form].<br><br>
            <b>Don’t yet have a verified account?</b> Create an <b>ID.me</b> or <b>Login.gov</b> account. We’ll help you verify your identity for your account now.<br><br>
            <b>Not sure if your account is verified?</b> Sign in here. If you still need to verify your identity, we’ll help you do that now.<br><br>
            <b>Note:</b> You can sign in after you start filling out your [application, claim, form]. But you’ll lose any information you already filled in.</span>
        <span>Sign in or create an account (primary button); Start your [application, claim, form] without signing in (link)</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>After h1 on [form introduction page](https://design.va.gov/templates/forms/introduction)</span>
    </va-table-row>
    <va-table-row>
        <span>Prefill: Intro variation (authenticated)</span>
        <span><b>We prefilled some of your information</b></span>
        <span>Since you’re signed in, we prefilled part of your [application, claim, form] based on your VA profile. You can also save your [application, claim, form] in progress and come back later to finish filling it out.<br><br>
            <b>Note:</b> You’ll have 60 days from when you start or make updates to your [application, claim, form] to come back and finish it.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>After h1 on [form Introduction page](https://design.va.gov/templates/forms/introduction)</span>
    </va-table-row>
    <va-table-row>
        <span>Prefill: Step variation (authenticated), if saving to form and profile</span>
        <span>N/A</span>
        <span>If you make any changes here, your VA profile will reflect those changes.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>After [Progress bar - Segmented](https://design.va.gov/components/form/progress-bar-segmented) on a [Form Step page](https://design.va.gov/templates/forms/)</span>
    </va-table-row>
    <va-table-row>
        <span>Autosave (authenticated)</span>
        <span>N/A</span>
        <span>We saved your request on [Month Day, Year] at [timestamp with time zone]. Your request ID number is [ID number].</span>
        <span>N/A</span>
        <span><a href="https://design.va.gov/components/alert#background-color-only-alert-with-icon">Alert - Background-only with icon</a></span>
        <span>Success</span>
        <span>After [Button group](https://design.va.gov/components/button/button-group) on a [Form Step page](https://design.va.gov/templates/forms/)</span>
    </va-table-row>
    <va-table-row>
        <span>Verify your identity with <b>ID.me</b> or <b>Login.gov</b></span>
        <span><b>Verify your identity</b></span>
        <span>We need you to verify your identity for your [<b>ID.me</b>, <b>Login.gov</b>] account. This step helps us protect all Veterans’ information and prevent scammers from stealing your benefits.<br><br>
            This one-time process often takes about 10 minutes. You’ll need to provide certain personal information and identification.</span>
        <span>Verify with [<b>ID.me</b>, <b>Login.gov</b>] (brand asset button)</span>
        <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
        <span>Warning</span>
        <span>After h1 on [form Introduction page](https://design.va.gov/templates/forms/introduction)</span>
    </va-table-row>
    <va-table-row>
        <span>Sign in with a different account</span>
        <span><b>You need to sign in with a different account</b></span>
        <span>We need you to sign in with an identity-verified account. This helps us protect all Veterans’ information and prevent scammers from stealing your benefits. You have 2 options: a verified <b>ID.me</b> or a verified <b>Login.gov</b> account.<br><br>
            <b>If you already have an ID.me or Login.gov account</b>, sign in with that account. If you still need to verify your identity for your account, we’ll help you do that now.<br><br>
            <b>If you don’t have an ID.me or Login.gov account</b>, create one now. We’ll help you verify your identity.</span>
        <span>Sign in with <b>ID.me</b> (brand asset button 1); Sign in with <b>Login.gov</b> (brand asset button 2); Learn about creating an account (link)</span>
        <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
        <span>Warning</span>
        <span>After h1 on [form Introduction page](https://design.va.gov/templates/forms/introduction)</span>
    </va-table-row>
    <va-table-row>
        <span>Verify a U.S. address (failure)</span>
        <span><b>We can’t confirm the address you entered with the U.S. Postal Service</b></span>
        <span>Tell us which address you’d like to use.</span>
        <span>N/A (address options appear after the alert box)</span>
        <span><a href="{{ site.baseurl }}/components/alert#warning-alert">Alert</a></span>
        <span>Warning</span>
        <span>After <b>Check your mailing address</b> heading</span>
    </va-table-row>
</va-table>
