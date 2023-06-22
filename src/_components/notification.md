---
layout: component
title: Notification
contributor: Angela Agosto, Allison Lu
intro-text: Provides a visual distinct card in order to surface time-sensitive updates and action items.
sketch-link: 
status: use-with-caution-available
web-component: va-notification
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-notification--default" link_text=page.web-component %}

### Action required

{% include storybook-preview.html story="components-va-notification--action-required" link_text=page.web-component %}

### Update

{% include storybook-preview.html story="components-va-notification--update" link_text=page.web-component %}

### With Close Icon button

{% include storybook-preview.html story="components-va-notification--with-close-text" link_text=page.web-component %}

### Header level change

{% include storybook-preview.html story="components-va-notification--header-level-change" link_text=page.web-component %}

### Not dismissible

{% include storybook-preview.html story="components-va-notification--not-dismissable" link_text=page.web-component %}

### No border

{% include storybook-preview.html story="components-va-notification--no-border" link_text=page.web-component %}

### Multiple with border

{% include storybook-preview.html story="components-va-notification--multiple-with-border" link_text=page.web-component %}

### Multiple with no border

{% include storybook-preview.html story="components-va-notification--multiple-with-no-border" link_text=page.web-component %}

## Usage

### When to use Component name

* **Time-sensitive information.** Provides a visual distinct card in order to surface time-sensitive updates and action items.
* **Highlight most important information.** Visually stands out from other cards and content on the page so the user knows it is the most important thing to pay attention to.

### When to consider something else

* **Alerts in response to user action.**: Use an [Alert]({{ site.baseurl }}/components/alert) for messages that occur in response to a user action.
* **Card collections**: Use a standard [Card]({{ site.baseurl }}/components/card) for a collection of information.

### How this component works


### Choosing between variations

* **Drop the border when there are more than 3 notifications in a set.** In order to avoid visual noise and distraction use the no border variation when there are more than 3-5 notifications in a list.
* **Avoid making the notification non-dismissible.**

### Placement

Where the component appears visually, and if necessary to clarify, where it may appear in the source code. Can also comment on where the component is not to be placed.

### Design principles

* List of design or UX principles that this component is an example or or adheres to.

### Instances of this component in production

Images with captions that describe different instances of this component being used in production.

<!-- include component-example.html alt="Explain what is in the image." file="/images/components/component-name/filename.png" caption="Describe what this example image is depicting." --> 


This is the Code Usage section. Note that the header is inside this include.
<!-- include component-docs.html component_name=page.web-component  -->

## Content considerations

* Bulleted list of content related instructions to the designer.
* May be an include is shared with the Content style guide section.

## Accessibility considerations

* Bulleted list of a11y related instructions to the designer and developer.

## Related

* Links to related components.


This is the Component checklist section. Note that the header is inside this include.
<!-- include _component-checklist.html component_name=page.web-component -->