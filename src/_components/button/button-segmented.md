---
layout: component
permalink: /components/button/button-segmented
has-parent: /components/button/
title: Button - Segmented
aka: Segmented button, Segmented control
research-link: Buttons
intro-text: The button segmented component provides secondary navigation within a page using a group of buttons in a row as a single element.
status: use-deployed
uswds-v3: default
web-component: va-mobile_segmented-control
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Web

This component has not yet been built for the web.

### Mobile

#### 2 segments

{% include storybook-preview.html story="segmented-control--2-segments" link_text="va-mobile_segmented-control--2-segments" is_mobile=true %}

#### 3 segments

{% include storybook-preview.html story="segmented-control--3-segments" link_text="va-mobile_segmented-control--2-segments" is_mobile=true %}

#### 4 segments

{% include storybook-preview.html story="segmented-control--4-segments" link_text="va-mobile_segmented-control--2-segments" is_mobile=true %}

## Usage

<va-link-action
href="https://designsystem.digital.gov/components/button-group/#segmented-button-group-guidance"
text="Refer to the U.S. Web Design System for usage guidance for the Segmented button group"
type="secondary"
> </va-link-action>

### Additional guidance for VA

#### When to use a Button - Segmented

* **Filtering a data set.** To represent the same kind of content, such as a list-view with different filters applied.
* **Views of a data set.** To provide closely related choices that affect an object, state, or view. For example, a segmented control can help people select options, switch between views, or sort elements.

{% include content/tabs-vs-button-segmented.md %}

#### When to consider something else

* If you need to group content that is dissimilar.
* If you need to enable actions — such as adding, removing, or editing content.
* If it needs to be accompanied by any other controls or a title if used in the top navigation bar.

#### Behavior

A segmented control consists of a horizontal set of 2-4 segments, each of which functions as a button. One option is always selected. The component does not scroll horizontally.

#### Placement

##### Mobile

* It appears in either the top navigation bar or below that navigation bar, near the top of the screen.
* It should not be used in the bottom toolbar because toolbar items act on the current screen — they don’t let people switch contexts.

#### Instances of this component in production

* Claims uses an Active/Closed segmented control to filter claims by status.
* Appointments uses an Upcoming/Past segmented control to filter appointments by type.
* Claims also uses a segmented control to show the Status/Details of claims. This is not an appropriate use of this component since it groups content that is dissimilar. In this case, a different component should be considered.

{% include component-docs.html component_name=page.web-component %}

#### Content considerations

* **Keep labels to 1 word.** If you need 2 (or more) words, you're likely trying to include extraneous words or group together items that are not similar enough. You may need to consider using a different component. The label text must be short enough that it doesn't wrap in the component.
* **Consider if labels are used elsewhere on the screen.** You can help differentiate different sections beneath the segmented control by not reusing the same labels.

#### Accessibility considerations

##### Mobile

* Reference [Segmented Control / Tab - Native app accessibility checklist - MagentaA11y](https://www.magentaa11y.com/checklist-native/segmented-control/)
* **Font scaling.** This component will ignore a user's settings for font scaling so the text always remains the same size. This is consistent with Apple's segmented control component.
* **Name.** Purpose is clear and matches visible label
* **Role.** Identifies as a button in iOS and "double tap to activate" in Android
* **Group.** Visible label (if any) is grouped or associated with the button in a single swipe
* **State.** Expresses its state (selected/disabled/dimmed)
