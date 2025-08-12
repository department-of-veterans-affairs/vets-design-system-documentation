---
layout: component
title: "Loading indicator"
intro-text: "A loading indicator provides a clue to ongoing activity when the site needs to load additional content."
research-title: "Loading indicators"
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=35%3A161&mode=design&t=vNilCSI60pQBiKkM-1
status: use-deployed
web-component: va-loading-indicator
web: true
mobile-app: true
---

## Example

### Web

{% include storybook-preview.html height="150px" story="components-va-loading-indicator--default" link_text="va-loading-indicator" %}

### Mobile app

{% include storybook-preview.html height="150px" story="loading-indicator--with-text" link_text="va_mobile__loading-indicator--with-text" is_mobile=true %}

## Usage

### When to use the Loading indicator

* When the wait time for a process, such as loading a page, is unknown. 

### When to consider something else

* Use the [Standard progress bar]({{ site.baseurl }}/components/progress-bar) for file uploads where the wait time is determinate.
* Use the [Segmented progress bar]({{ site.baseurl }}/components/progress-bar) in forms to communicate the number of steps required to complete the form.

## Content considerations

- **Keep messages clear and concise:** We follow a simple content pattern for loading indicators, which consists of the following elements in this order:

  1. A present participle verb of the action that is happening
  2. An object that is being acted upon
  3. An ellipsis

- **Use present participle verbs (ending with "-ing"):** Start each loading indicator with the verb of the action that is happening. Consider what the system is actually doing. Remember that the loading indicator is supposed to inform the user what is happening while they’re waiting. The system isn’t always loading something. Sometimes it's sending something. Other times it's saving something.

- **Describe the object being acted upon:** Follow the verb with the object that is being acted upon. For example, if the system is saving something, describe (in 1 or 2 words) what is being saved. If applicable, make the object personal to the user by using a possessive pronoun (your) instead of an article (a, the).

- **End with an ellipsis:** End each loading indicator with an ellipsis (3 periods). Do not use unnecessary words, such as "please" or "wait".

Examples of loading indicator messages:

* Saving your draft...
* Loading your application...
* Submitting your file...

## Accessibility considerations

* On the web, the loading indicator component is used to notify user’s that the page content is loading. W3C WAI-ARIA `aria-live="polite"`, `aria-label` and `aria-valuetext` are used to ensure screen reader users are also provided the same information.
* In the mobile app, use the equivalent accessibility hints and labels in React Native.

{% include component-docs.html component_name=page.web-component %}