---
layout: default
title: Promo banners
---

# Promo banners

<p class="va-introtext">Promo banners are fixed content at the bottom of the viewport used for dismissible announcements such as new tools, news, etc.</p>

## Default

{% include storybook-preview.html width="1200px" story="components-va-promo-banner--default" %}

## Usage
### When to use va-promo-banner and when to consider something else

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
- Use for information that is safe to dismiss and can be accessed in other parts of VA.gov
- Be succinct
- Allow the user to dismiss
- Retire promo banners after 30 days from initial posting or sooner, as specified by requestor
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
- Don't use for critical information
- Don't write content that will be more than 3 lines on a mobile device
- Don't prevent user from dismissing
- Use more than one at a time
</div>
</div>
</div>

### How to use Promo banners
-  Add text, an href prop, an id, and a type prop to the component to have data displayed a the bottom of the viewport with an icon associated with the type chosen.
#### Types

- Announcement
    - Pertains to content focused on benefits: a new tool, a new online benefit application, etc.
- Email Signup
    - Points to email signups for various VA updates / alerts / communications.
- News
    - Pertains to newly received or noteworthy information about the VA.

### Technical Documentation on va-promo-banner

Props Available:
- disable-analytics 
    - This prop is a boolean and is optional. When it is set to true the component-library-analytics event that is set to track usage on Vets Website via Google Tag Manager will be disabled.
- type	
    - This prop takes in a string of 'announcement', 'news', or 'email-signup' and is used to control which icon gets displayed in the Promo Banner.
- href
    - This prop takes in a string, and is utilized to determine the web page a user should navigate to when clicking on the Promo Banner.

Events Available:
- closeEvent
    - This event is fired when the component is dismissed by clicking on the close icon.
- component-library-analytics
    - This event is used to track usage of the component in Vets Website via Google Tag Manager and is emitted when clicking on an anchor link. **Note: This event is read only and cannot be customized**

## Accessibility considerations

- By default the close button will have an `aria-label` of `Dismiss this promo banner`. 
- For all icon elements `aria-hidden="true"` will be added to the element.