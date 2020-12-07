---
layout: default
sub_section: buttons
title: Buttons
---

# Buttons

<p class="va-introtext">Use buttons to signal actions.</p>

## Default buttons

The default buttons are the most commonly-used button on the site.

<div class="site-showcase">
{% include_relative html/buttons-default.html %}
</div>

{% include snippet.html content='html/buttons-default.html' %}

## Primary buttons

Use the **primary** button for the primary action on a page.

<div class="site-showcase">
{% include_relative html/buttons-primary.html %}
</div>

{% include snippet.html content='html/buttons-primary.html' %}

### Research insight

Our researchers learned that users were missing calls to action on some pages because the blue buttons did not stand out, so a green **primary** button was created, tested and determined to be successful.

## Secondary button

Use **secondary** buttons for any actions that need to be _downplayed_ against other actions.

<div class="site-showcase">
{% include_relative html/buttons-secondary.html %}
</div>

{% include snippet.html content='html/buttons-secondary.html' %}

## Big buttons

Any button can be made bigger by adding a class name of `usa-button-big` to the button.

<div class="site-showcase">
{% include_relative html/buttons-big.html %}
</div>

{% include snippet.html content='html/buttons-big.html' %}

## Disabled buttons

Only `<button>` elements can be disabled with a `disabled` attribute. To make a `<a>` element disabled, you must use `.usa-button.usa-button-disabled` on the element.

<div class="site-showcase">
{% include_relative html/buttons-disabled.html %}
</div>

{% include snippet.html content='html/buttons-disabled.html' %}

## Guidance

* Buttons can be applied to `<button>`, which are used for actions,  or `<a>`, which is used for hyperlinks to destinations. Read more about usage under [accessibility](#accessibility).
* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* When to use default (blue) versus primary (green) buttons: If there is only one button on the page, use a pimary (green) button. Especially if the button is surrounded by a lot of content. Primary (green) buttons are always isolated from other UI, and meant to draw attention to themselves. In most other cases, use a default (blue) button.
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons should look clickable—use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Reserve chevrons in buttons for "Back" and "Continue" buttons only
* Use sentence case for button labels.
* Keep the character limit for button labels to 35 characters. Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”). 
* Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc).
* Read more about writing for buttons in the [content style guide](https://design.va.gov/content-style-guide/button-labels)

### When to use

* Use buttons for the most important actions you want users to take on your site, such as "download," "sign up," or "sign out."

### When to consider something else

* If you want to lead users between pages of a website. Use links instead.
* Less popular or less important actions may be visually styled as links.

### Accessibility

* When using the `<button>` element, always specify a `type`.
* When using the `<a>` element, you may want to consider using `role="button"`.
* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.
* Include more contextual information in the button label for screen readers. You can use an aria label to specify form numbers or program names in the buttons for greater context. Example: A button label could say "Apply for caregiver assistance" and the button label for screen readers can say, `<button>Apply for <span class="sr only"the program of comprehensive</span> caregiver assistance</button>`

