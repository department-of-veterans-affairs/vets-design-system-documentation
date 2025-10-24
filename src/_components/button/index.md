---
layout: component
permalink: /components/button/
title: Button
intro-text: A button draws attention to important actions with a large selectable surface.
research-link: Buttons
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=35%3A152&mode=design&t=jMcVWkPlFhZu3RTh-1
figma-link-mobile-app: https://www.figma.com/design/Zzt8z60hCtdEzXx2GFWghH/VA-Mobile---Component-Library?node-id=224-314
status: use-deployed
sub-pages:
  - sub-page: Button group
  - sub-page: Button - Segmented
  - sub-page: Button - Icon
uswds-v3: primary
web-component: va-button
web: true
mobile-app: true
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Privacy guidance
  - anchor: Component checklist
---

{% include _site-in-this-section.html %}

## Examples

{% capture web_content %}
### Web

#### Default - Primary

{% include storybook-preview.html height="60px" story="uswds-va-button--primary" link_text="va-button--primary" %}

#### Default - Secondary

{% include storybook-preview.html height="60px" story="uswds-va-button--secondary" link_text="va-button--secondary" %}

#### Default - Big

{% include storybook-preview.html height="80px" story="uswds-va-button--big" link_text="va-button--big" %}

#### Continue

{% include storybook-preview.html height="60px" story="uswds-va-button--continue" link_text="va-button--continue" %}

#### Back

{% include storybook-preview.html height="60px" story="uswds-va-button--back" link_text="va-button--back" %}


#### Loading

{% include storybook-preview.html height="60px" story="uswds-va-button--loading" link_text="va-button--loading" %}
{% endcapture %}

{% capture mobile_content %}

### Mobile app

#### Base - Primary

{% include storybook-preview.html height="100px" story="button--base" link_text="va-mobile__button--base" is_mobile=true %}

#### Base - Secondary

{% include storybook-preview.html height="100px" story="button--base-secondary" link_text="va-mobile__button--base-secondary" is_mobile=true %}

#### Destructive

{% include storybook-preview.html height="100px" story="button--destructive" link_text="va-mobile__button--destructive" is_mobile=true %}
{% endcapture %}

<va-tabs initially-selected="0" label="Web and Mobile app examples">
  <va-tab-item button-text="Web" target-id="panel-1"></va-tab-item>
  <va-tab-panel panel-id="panel-1">
    {{ web_content | markdownify }}
  </va-tab-panel>
  <va-tab-item button-text="Mobile app" target-id="panel-2"></va-tab-item>
  <va-tab-panel panel-id="panel-2">
    {{ mobile_content | markdownify }}
  </va-tab-panel>
</va-tabs>

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/button/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

#### When to use a button

<!-- Added Download-->
* **Actions.** Use buttons for clickable actions you want users to take on a page, such as “Add”, “Close”, “Cancel”, “Save”, or "Download". Buttons **do things**, links **go places**. Refer to guidance on [Buttons vs. Links](#choose-the-right-element-buttons-vs-links).
* **Triggers.** Buttons can also trigger functionality via Javascript. For example, closing a modal window.


#### When to consider something else

* **Non-actions.** For navigation between pages of a website, default to using links. Buttons can be used for navigation between pages within a form flow but otherwise use links. Read the guidance on [Buttons vs. Links](#choose-the-right-element-buttons-vs-links).
* **Call-to-action.** For a visually prominent call to action that links to another page, use an [Action link]({{ site.baseurl }}/components/link/#choose-the-right-element-buttons-vs-links).

#### Behavior

* **Avoid using many primary buttons on a single page or section.** Pages with many primary buttons reduces their impact and make it harder for users to know what to do next.
* **Arrows are reserved.** Arrow icons should only appear for "Back" and "Continue" buttons that appear in forms.
* **Use icons only when necessary.** [Icons]({{ site.baseurl }}/foundation/icons) can be used in buttons when additional clarity is required and the icon is highly relevant to the action. Icons should not be used for decoration. Note that va-button does not support iconography, but has some variations that use an icon. Use of icons in buttons will be made on a case-by-case basis. If you feel you need an icon for a button, [follow the process for requesting a new icon]({{ site.baseurl }}/components/icon#requesting-a-new-icon) .
* **Avoid disabling buttons.** [Disabling buttons is strongly discouraged.](#do-not-disable-buttons)

### Choosing between variations

* **Use Primary for the most important action.** Use the primary button for the most important action that you want the user to take on the page, or in a section. Also, use primary buttons to take the user to the next step in a process.
* **Use Secondary for non-primary actions.** Use secondary buttons for any actions that need to be _downplayed_ against other actions on the page, or in a section. Also, use secondary buttons for actions that happen on the current page.
* **Use Big primary buttons for the only action.** Use the big variation of the primary button for the only action on the page.
* **Use Continue and Back for advancing to the next step and returning to the previous step, respectively.** Note that these buttons can be used as a pair from [button pair]({{ site.baseurl }}/components/button/button-pair). Also, note that the Back button should not be used if it is only navigating rather than taking an action (like submitting data ala the Continue button).
* **Use Loading for actions that should only be triggered once.** Use the loading variation when it is necessary to block the user from additional clicks of a button that might cause transaction issues.
* **Use Base, primary and secondary, in dark mode in mobile applications.** Use the base variations for dark mode or when primary buttons will not pass the required color contrast ratio.
* **Use destructive for actions that have serious consequences.** Use the destructive button for any action that cannot be reversed and may result in data loss. Currently used in the mobile app when canceling an appointment and when removing contact information.
  * Don't rely on the red color alone to communicate the destructive nature of the action. Always ensure the button text clearly communicates what will happen.
  * Since destructive buttons have serious consequences, always add friction before completing the action. This can be in the form of a native confirmation message (alert or action sheet) in the mobile app or a modal on web.

### Placement

* Buttons generally appear on their own line at the bottom of a form or section.
* Primary buttons usually appear first, or to the left, of a secondary button.

### Instances of this component in production

#### Primary button with a secondary link

* **Links can substitute for secondary buttons.** It is not always necessary to pair a secondary button with a primary button. In the example below a link can also suffice for a non-primary action.

{% include component-example.html alt="Example of a primary button with a secondary link." file="/images/components/button/primary-with-secondary-link.png" caption="An example of a primary button used with a secondary link." reverse=true %}

#### Secondary button as radio button

This variation substitutes the large tap target of a button where a radio button would traditionally be used. This serves a similar purpose to the [USWDS Tile variation of a Radio button](https://designsystem.digital.gov/components/radio-buttons/). 

* **Limit to Yes/No.** This variation should be limited to Yes/No questions rather than used as a substitute for radio buttons which can more readily handle 3 or more responses.
* **Reflect selections.** The response of the user must change the button from a secondary button to a ```$vads-color-primary-dark``` background in order to reflect the state of the user's response.

{% include component-example.html alt="Example of the secondary button as radio button substitution." file="/images/components/button/button-as-radio.png" caption="The COVID-19 Screener uses secondary buttons instead of radio buttons for Yes/No questions." %}

{% include component-docs.html component_name=page.web-component %}

## Content considerations

### Button labels

{% include content/button-labels.md %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/button/#accessibility-select"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

* **Button labels should never change dynamically or be used to communicate a status.**
* **Mind target size.** We follow the [WCAG 2.2 Target Size - Level AAA](https://www.w3.org/WAI/WCAG22/quickref/#target-size) criteria which states:
> "The size of the target for pointer inputs is at least 44 by 44 CSS pixels..."

That guidance agrees with [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons) which recommend that:
> "On a touchscreen, buttons need a hit target of at least 44x44 points to accommodate a fingertip. On all screens, it’s essential to include enough space around a button so that people can visually distinguish it from surrounding components and content, whether people use touch, a pointer, or a system that expands a button when it’s in focus."

* **Use at least [1 spacing unit]({{ site.baseurl }}/foundation/spacing-units) separating tappable elements.**

* **Prioritize a clear and concise button label and only use `message-aria-describedby` when it enhances understanding and accessibility.** The `message-aria-describedby` property emulates HTML's `aria-describedby` due to web component limitations. It allows adding an additional description that is visually hidden, but screen reader accessible.
  * When to use:
    * **Providing additional context or instructions.** If the button label is concise but requires further explanation.
  * When _not_ to use:
    * **Duplicating information.** If the button's label is clear and concise, adding additional information may be redundant and cumbersome for users of assistive technology.
    * **Providing essential information.** Crucial information for the button's purpose should be the button label itself, _not_ solely relying on an additional description.

{% include content/links-vs-buttons.md %}

{% include a11y/do-not-disable-buttons.md %}

## Privacy guidance

{% include content/privacy-buttons.md %}

{% include _component-checklist.html component_name=page.web-component %}
