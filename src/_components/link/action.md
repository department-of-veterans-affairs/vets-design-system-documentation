---
layout: component
title: Link - Action
permalink: /components/link/action
has-parent: /components/link/
github-title: va-action-link
intro-text: "Action links guide users to a new page to take an action or to start an online tool or digital service."
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/760C972F-C6EC-4F06-AA08-193B4691ECB0
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Primary

{% include storybook-preview.html height="50px" story="components-action-link--primary" %}

### Secondary

{% include storybook-preview.html height="50px" story="components-action-link--secondary" %}

### Reverse

{% include storybook-preview.html height="67px" story="components-action-link--reverse" %}

## Usage

Action Links replace green primary buttons that take users to another page. For example: *Apply for education benefits* 

### When to use an Action Link

The action link is an eye-catching link to start a digital service. An action link entices users to take action. Example: Starting a benefit application 

- Use a primary (green) Action Link for the primary call to action on a page or the start of a digital service. Use only one primary Action link per page.
- Use a secondary (blue) Action Link when there are multiple Action Links on a page or if the actions are of equal hierarchy. 
- Use a reverse (white) Action Link for a dark background.

### When to consider something else

- Don’t use an Action Link for these actions: “sign up,” “submit” or “sign out.” For these actions, use [buttons]({{ site.baseurl }}/components/button) instead. 
- Don’t use Action Links to navigate between screens of an online application or tool. Use default and secondary buttons instead.
- Don’t use Action Links link to go to another page or site that isn’t taking users to start an action. 

### Choosing between variations

- Primary (green) and secondary (blue) Action Links can exist on the same page, but we don’t recommend placing them side by side. 

### Placement

- The icon on the left of the Action Link can be slightly out of the grid to grab the user’s attention.

## Content considerations

* Keep Action Link content short. Start with a verb. For example: “*Apply for health care benefits*” or “*Register for care*”
* Refer to the content considerations for the [link]({{ site.baseurl }}{{ page.has-parent }}#content-considerations).
 
## Accessibility considerations

- Action Links must have an `href` attribute. 
- Action links should only use an anchor tag `<a>`. The `<a>` element, or anchor element, is used to create a hyperlink to another webpage or another location within the same webpage. 
- For external links or links that open up to a new tab, make sure to add an aria label to let the user know what sort of link they’re clicking on.

{% include content/links-vs-buttons.md %}

### Links to content in another language

- Links that point to localized content in another language should have an `hreflang` attribute and a `lang` attribute in the following format:

```
<a
  className="vads-c-action-link--blue"  
  href="#"
  hreflang="es"
  lang="es"
>En Español</a>
```
