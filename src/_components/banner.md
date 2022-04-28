---
layout: component
title: Banner
status: use-deployed
intro-text: "Banners are fixed content at the top of the page used for dismissible announcements such as new tools, news, etc."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-banner
---

## Examples

### Default

{% include storybook-preview.html story="components-va-banner--default" height="80px" %}

### Closeable

{% include storybook-preview.html story="components-va-banner--closeable" height="80px" %}

## Usage

### When to use va-banner

- When there is very important information that should exist on the top of the webpage that should be visible to all users.

### When to consider something else

- If the information is important but can exist within the context of the webpage and could be satisfied with using a `va-alert` web component instead.

### How to use va-banner

- Add a headline, type, and visible prop to have the component display on the page.
- If the banner should not be visible, have a button to be dismissible, or be dismissed to sessionStorage instead of localStorage additional props can be added to accommodate.

### Technical Documentation on va-banner

Props Available:
- headline 
    - This prop takes in a string and is used as the headline text of the `va-banner` component.
- show-close	
    - This prop is a boolean and is optional. When it is set to true it enables the close functionality via a close button. When clicked the banner will be closed until storage is cleared.
- disable-analytics
    - This prop is a boolean and is optional. When it is set to true the component-library-analytics event that is set to track usage on Vets Website via Google Tag Manager will be disabled.
- type
    - This prop takes in a string of 'info', 'error', 'success', 'continue', or 'warning'. This affects both the icon of the child `va-alert` component and the top border color.
- visible
    - This prop is a boolean. When false the banner will not visibly render on the page.
- window-session
    - This prop is a boolean and is optional. When enabled sessionStorage for the `va-banner` will be used otherwise, the component when show close is enabled, will default to localStorage.

Events Available:
- component-library-analytics
    - This event is used to track usage of the component in Vets Website via Google Tag Manager and is emitted when clicking on an anchor link. **Note: This event is read only and cannot be customized**

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Aria `role` of `banner` will be added to the child `va-alert` component to notify users that a banner is to be utilized as the `region`. 