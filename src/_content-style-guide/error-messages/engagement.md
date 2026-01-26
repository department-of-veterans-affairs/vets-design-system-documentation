---
layout: content-style-guide
permalink: /content-style-guide/error-messages/engagement
has-parent: /content-style-guide/error-messages/
title: Engagement messages
intro-text: Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.
---

***Note:** See [Error Messages]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

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
        <span>Continue a saved benefit application</span>
        <span><b>Still want to apply for [BENEFIT NAME]?</b></span>
        <span>Your application will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or you can start a new application any time.</span>
        <span>[BUTTON 1] Continue your application [BUTTON 2] Start over</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert-aka-default">Informational</a></span>
        <span>Replace affected component</span>
    </va-table-row>
     <va-table-row>
        <span>Set up 2-factor authentication</span>
        <span><b>Want to make your VA.gov account more secure?</b></span>
        <span>You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if someone gets your password.</span>
        <span>Secure your account</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert-aka-default">Informational</a></span>
        <span>Replace affected component</span>
    </va-table-row>
     <va-table-row>
        <span>Save your work in progress (for unauthenticated users)</span>
        <span><b>Sign in now to save time and save your work in progress</b></span>
        <span>Here’s how signing in now helps you: * We can fill in some of your information for you to save you time. * You can save your work in progress. You’ll have 60 days from when you start or make updates to your application to come back and finish it. <b>Note:</b> You can sign in after you start your application. But you'll lose any information you already filled in.</span>
        <span>Sign in to start your application (primary button); Start your application without signing in (link)</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert-aka-default">Informational</a></span>
        <span>After h1 on <a href="{{ site.baseurl }}/templates/forms/introduction">Form Introduction page</a></span>
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
     <va-table-row>
        <span>Prefill - Step variation (for authenticated users) - If saving to form and Profile</span>
        <span>None</span>
        <span>Any changes you make will also be reflected on your VA.gov profile.</span>
        <span>None</span>
        <span><a href="/components/alert">Alert box</a></span>
        <span><a href="/components/alert/#examples---standard">Informational</a></span>
        <span>After <a href="/components/form/progress-bar-segmented">Progress bar - Segmented</a> on a <a href="/templates/forms/">Form Step page</a>(form-step)</span>
    </va-table-row>
     <va-table-row>
        <span>Autosave (for authenticated users)</span>
        <span>None</span>
        <span>We've saved your request. We saved it on [MONTH] [DAY], [YEAR] at [TIME] [TIMEZONE]. Your request ID number is [ID NUMBER].</span>
        <span>None</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert - Background-only with icon</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#slim-alert">Success</a></span>
        <span>After Button pair on a form step page.</span>
    </va-table-row>
</va-table>