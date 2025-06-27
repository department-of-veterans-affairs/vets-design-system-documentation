---
layout: component
permalink: /components/button/button-segmented
has-parent: /components/button/
title: Button - Segmented
aka: Segmented button, Segmented control
figma-link: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=28629-138&t=3efQOtruhM1IdGDg-1
research-link: Buttons
intro-text: The button segmented component presents a set of 2-4 closely related options or filters in a compact, horizontal container. It allows users to switch between different views or sort/filter a single set of content. One option is always active.
web-component: va-button-segmented
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
  - anchor: Related
---

## Examples

### Web

#### Default

{% include storybook-preview.html story="segmented-control--2-segments" link_text="va-button-segmented--default" %}

#### Selected item

{% include storybook-preview.html story="segmented-control--2-segments" link_text="va-button-segmented--selected-item" %}

### App

#### 2 segments

{% include storybook-preview.html story="segmented-control--2-segments" link_text="va-mobile_segmented-control--2-segments" is_mobile=true %}

#### 3 segments

{% include storybook-preview.html story="segmented-control--3-segments" link_text="va-mobile_segmented-control--3-segments" is_mobile=true %}

#### 4 segments

{% include storybook-preview.html story="segmented-control--4-segments" link_text="va-mobile_segmented-control--4-segments" is_mobile=true %}

## Usage

<va-link-action
href="https://designsystem.digital.gov/components/button-group/#segmented-button-group-guidance"
text="Refer to the U.S. Web Design System for usage guidance for the Segmented button group"
type="secondary"
> </va-link-action>

### Additional guidance for VA

#### When to use a Button - Segmented

Use a Segmented Button for filtering, sorting, or switching views of a single set of data. The options modify the content on the current page without navigating away. It functions like a set of radio buttons where selecting one option automatically deselects the previous one.

* **Best for:** 2-4 mutually exclusive choices.
* **Example:** Filtering a list of appointments by "Upcoming" and "Past."
* **Example:** Switching a view from a "List" to a "Grid."

#### When to consider something else

* If you need to group content that is dissimilar.
* If you need to enable actions — such as adding, removing, or editing content.
* If it is used in the top navigation bar alongside other controls or a title.

Use [Tabs]({{ site.baseurl }}/components/tabs) for navigation between distinct, related pages or content sections. Each tab typically corresponds to a unique URL.
* **Example:** Navigating between "Inbox," "Sent," and "Archived" folders.

### Behavior

A segmented control consists of a horizontal set of 2-4 segments, each of which functions as a button. One option is always selected. The component does not scroll horizontally.

### Placement

#### Web

A Segmented Button is typically placed directly above the content it controls and modifies that content using client-side logic without a page reload.

#### App

The component is often integrated into the top navigation bar (or just below it) and should not be placed in a bottom toolbar. It is static and does not scroll horizontally.

### Instances of this component in production

#### Correct Use

* **Appointments:** Using an "Upcoming/Past" control to filter a list of appointments.
* **Claims:** Using an "Active/Closed" control to filter a list of claims.

#### Incorrect Use

* **Claims:** Using a control to switch between "Status" and "Details." This groups dissimilar content and should be handled with a different component, like [Tabs]({{ site.baseurl }}/components/tabs).

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **Keep labels concise.** Aim for single-word labels (e.g., "List," "Grid," "Upcoming," "Past"). If you need more than one word, it may indicate that the options are not closely related enough, and a different component might be more suitable.
* **Avoid dissimilar content.** Do not use a Segmented Button to group unrelated items. The purpose is to filter or change the view of a single data set.
* **Provide context.** Ensure the labels on the segments clearly differentiate the content that will be displayed below.

## Accessibility considerations

Ensuring the component is accessible is critical on all platforms.

### Web

* **Name:** The purpose of each button must be clear and match its visible label.
* **Role:** Buttons should identify as “toggle buttons” to the screen reader (e.g., VoiceOver) and announce the appropriate action (e.g., Apple’s Voiceover’s “to select press Control-Option-Space”).
* **State:** The component must clearly announce its state, such as "Selected" for the active button.
* **Navigation:** When you navigate to the first button and use the tab key to move forward and shift+tab to move back between the second or subsequent buttons. Use the tab key to exit the group and into other interactive elements.
* **Consider target size.** We follow the WCAG 2.2 Target Size - Level AAA criteria which states: “The size of the target for pointer inputs is at least 44 by 44 CSS pixels.”

### App

For native mobile apps, the component must correctly report its properties to the operating system's accessibility services.

* **Name:** The purpose of each button must be clear and match its visible label.
* **Role:** It should identify as a "button" to the screen reader (e.g., iOS VoiceOver) and announce the appropriate action (e.g., Android TalkBack's "double tap to activate").
* **State:** The component must clearly announce its state, such as "Selected," for the active button.
* **Font Scaling:** In some native implementations, e.g., Apple's, this component may intentionally ignore the user's font scaling settings to maintain a consistent layout in the navigation bar. This is a design trade-off where component integrity is prioritized over text resizing.

Reference [Segmented Control / Tab - Native app accessibility checklist - MagentaA11y](https://www.magentaa11y.com/checklist-native/segmented-control/)

## Related

* [Tabs]({{ site.baseurl }}/components/tabs)

{% include _component-checklist.html component_name=page.web-component %}
