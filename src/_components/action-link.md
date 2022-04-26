---
layout: component
title: Action link 
github-title: va-action-link
intro-text: "Action links guide users to a new page to take an action or to start an online tool or digital service."
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
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
- Don’t use Action Links link to go to another page or site that isn’t taking users to start an action. See the “Other link styles” section below for other link options. 

### How to use Action Links

- Keep Action Link content short. Start with a verb. For example: “*Apply for health care benefits*” or “*Register for care*”
- The icon on the left of the Action Link can be slightly out of the grid to grab the user’s attention.
- Primary (green) and secondary (blue) Action Links can exist on the same page, but we don’t recommend placing them side by side. 

### Other link styles

#### Active links 

- For links that have less hierarchy than an Action Link, we recommend using an Active Link. Active Links can be accompanied by a right-facing chevron icon for more emphasis. 
- Active text link style: Source Sans Pro (Bold),  underlined, 16px, #004795

For example:

![active link style]({{site.baseurl}}/images/active-link-style-big.png) 

#### Default links 

- For links that need even less hierarchy than an Action Link or Active Link, we recommend using a Default Link.
- Default text link style: Source Sans Pro (Regular),  underlined, 16px, #004795)

For example:

![default link style]({{site.baseurl}}/images/default-link-style-big.png) 
- All text links should be underlined. This is especially important for low-vision users. (Exception: [side nav]({{ site.baseurl }}/components/sidenav) shouldn’t be underlined.)

## Accessibility considerations

- Action Links must have an `href` attribute. 
- Action links should only use an anchor tag `<a>`. The `<a>` element, or anchor element, is used to create a hyperlink to another webpage or another location within the same webpage. 
- For external links or links that open up to a new tab, make sure to add an aria label to let the user know what sort of link they’re clicking on.
- It is important to use Action Links for calls to actions that link to another page rather than buttons, because screen readers always say “link” before links, and “button” before buttons. 
- Button and link confusion can be very frustrating for assistive technology users. A user with a screen reader may pull up a list of links and may not find a specific link because it turns out that it’s been designated as a button in the markup.
- Using links and buttons intentionally results in a more inclusive experience for assistive technology users. Make sure to read both [buttons]({{ site.baseurl }}/components/button) and Action Link guidance to determine when you should use each component.
- Links that point to localized content in another language should have an `hreflang` attribute and a `lang` attribute in the following format:

```
<a
  className="vads-c-action-link--blue"  
  href="#"
  hreflang="es"
  lang="es"
>En Español</a>
```
