---
layout: default
sub_section: buttons
title: Buttons
---

# Buttons

<p class="va-introtext">Use buttons to signal actions.</p>

## Default buttons

The default buttons are the most commonly-used button on the site.

<div class="site-c-showcase">
{% include_relative html/buttons-default.html %}
</div>

{% include snippet.html content='html/buttons-default.html' %}

## Primary buttons

Use the **primary** button for the primary action on any given page.

<div class="site-c-showcase">
{% include_relative html/buttons-primary.html %}
</div>

{% include snippet.html content='html/buttons-primary.html' %}

## Secondary button

Use **secondary** buttons for any actions that need to be _downplayed_ against other actions.

<div class="site-c-showcase">
{% include_relative html/buttons-secondary.html %}
</div>

{% include snippet.html content='html/buttons-secondary.html' %}

## Big buttons

Any button can be made bigger by adding a class name of `usa-button-big` to the button.

<div class="site-c-showcase">
{% include_relative html/buttons-big.html %}
</div>

{% include snippet.html content='html/buttons-big.html' %}

## Disabled buttons

Only `<button>` elements can be disabled with a `disabled` attribute. To make a `<a>` element disabled, you must use `.usa-button.usa-button-disabled` on the element.

<div class="site-c-showcase">
{% include_relative html/buttons-disabled.html %}
</div>

{% include snippet.html content='html/buttons-disabled.html' %}

## Guidance

* Buttons can be applied to `<button>`, which are used for actions,  or `<a>`, which is used for hyperlinks to destinations. Read more about usage under [accessibility](#accessibility).
* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons should look clickable—use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Use sentence case for button labels.
* Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”).
* Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc).

### When to use

* Use buttons for the most important actions you want users to take on your site, such as "download," "sign up," or "log out."

### When to consider something else

* If you want to lead users between pages of a website. Use links instead.
* Less popular or less important actions may be visually styled as links.

### Accessibility

* When using the `<button>` element, always specify a `type`.
* When using the `<a>` element, you may want to consider using `role="button"`.
* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.


