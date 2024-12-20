---
layout: content-style-guide
permalink: /content-style-guide/error-messages/engagement
has-parent: /content-style-guide/error-messages/
title: Engagement messages
intro-text: Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.
---

***Note:** See [Error Messages]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

## Prompt to complete a task or enter data

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Continue a saved benefit application | **Still want to apply for [BENEFIT NAME]?** | Your application will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or you can start a new application any time. | [BUTTON 1] Continue your application [BUTTON 2] Start over | [Alert box]({{ site.baseurl }}/components/alert) | [Informational]({{ site.baseurl }}/components/alert#informational-alert) | Replace affected component |
| Set up 2-factor authentication       | **Want to make your VA.gov account more secure?** | You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if someone gets your password. | Secure your account | [Alert box]({{ site.baseurl }}/components/alert) | [Informational]({{ site.baseurl }}/components/alert#informational-alert) | Replace affected component |
| Save your work in progress (for unauthenticated users) | **Sign in now to save time and save your work in progress** | Here’s how signing in now helps you: * We can fill in some of your information for you to save you time. * You can save your work in progress. You’ll have 60 days from when you start or make updates to your application to come back and finish it. **Note:** You can sign in after you start your application. But you'll lose any information you already filled in. | Sign in to start your application (primary button); Start your application without signing in (link) | [Alert box]({{ site.baseurl }}/components/alert) | [Informational]({{ site.baseurl }}/components/alert#informational-alert) | After h1 on [Form Introduction page]({{ site.baseurl }}/templates/forms/introduction) |
| Prefill - Intro variation (for authenticated users) | We’ve prefilled some of your  information | Since you’re signed in, we’ve prefilled part of your application based on your profile details. You can also save your application in progress and come back later to finish filling it out. | None | [Alert box](/components/alert) | [Informational](/components/alert/#examples---standard) | After h1 on [Form Introduction page](/templates/forms/introduction) |
| Prefill - Step variation (for authenticated users) - If saving to form and Profile | None | Any changes you make will also be reflected on your VA.gov profile. | None | [Alert box](/components/alert) | [Informational](/components/alert/#examples---standard) | After [Progress bar - Segmented](/components/form/progress-bar-segmented) on a [Form Step page](/templates/forms/form-step) |
| Autosave (for authenticated users) | None | We've saved your request. We saved it on [MONTH] [DAY], [YEAR] at [TIME] [TIMEZONE]. Your request ID number is [ID NUMBER].  | None | [Alert - Background-only with icon]({{ site.baseurl }}/components/alert) | [Success]({{ site.baseurl }}/components/alert#background-color-only-alert-with-icon) | After Button pair on a form step page.) |