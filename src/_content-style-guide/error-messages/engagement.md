---
layout: content-style-guide
permalink: /content-style-guide/error-messages/engagement
has-parent: /content-style-guide/error-messages/
title: Engagement messages
intro-text: Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.
---

***Note:** See [Error Messages](/patterns/help-users-to/recover-from-errors#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

## Prompt to complete a task or enter data

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Continue a saved benefit application | **Still want to apply for [BENEFIT NAME]?** | Your application will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or you can start a new application any time. | [BUTTON 1] Continue your application [BUTTON 2] Start over | [Alert box]({{ site.baseurl }}/components/alert) | [Informational]({{ site.baseurl }}/components/alert#informational-alert) | Replace affected component |
| Set up 2-factor authentication       | **Want to make your VA.gov account more secure?** | You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if someone gets your password. | Secure your account | [Alert box]({{ site.baseurl }}/components/alert) | [Informational]({{ site.baseurl }}/components/alert#informational-alert) | Replace affected component |
| Save your work in progress | **Save time—and save your work in progress—by signing in before starting your application** | When you’re signed in to your VA.gov account: * We can prefill part of your application based on your account details. * You can save your application in progress, and come back later to finish filling it out. You’ll have 60 days from the date you start or update your application to submit it. After 60 days, we’ll delete the form and you’ll need to start over. **Note:** If you sign in after you’ve started your application, you won’t be able to save the information you’ve already filled in | Sign in to start your application (primary button); Start your application without signing in (link) | [Alert box]({{ site.baseurl }}/components/alert) | [Informational]({{ site.baseurl }}/components/alert#informational-alert) | After h1 on [Form Introduction page]({{ site.baseurl }}/templates/forms/introduction) |