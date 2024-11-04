---
layout: component
title: Alert - Expandable
permalink: /components/alert/alert-expandable/
has-parent: /components/alert/
github-title: va-alert-expandable
intro-text: A minimized alert style that can be used to alert a user to relevant information on the page that is not prompted by their own action. This component combines the Additional Info component with the Background-Color only Alert variation color schemes.
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=35%3A146&mode=design&t=J32RmU6Fjbjuh9bD-1
status: use-with-caution-candidate
contributors: Leyda Hughes (VSA Facilities Team)
web-component: va-alert-expandable
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Research
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default (Informational)

{% include storybook-preview.html story="components-va-alert-expandable--default" link_text="va-alert-expandable" %}

### Warning alert

{% include storybook-preview.html story="components-va-alert-expandable--warning" link_text="va-alert-expandable" %}

### Success alert

{% include storybook-preview.html story="components-va-alert-expandable--success" link_text="va-alert-expandable" %}

## Usage

### When to use Alert - Expandable

* **Unprompted alerts.** - A standard [Alert]({{ site.baseurl }}/components/alert) should only appear when prompted by a user action. By contrast, Alert - Expandable is only to be used when a user action has NOT prompted the alert. In other words, the Alert - Expandable is already present when the user loads the page.
* **In-page alerts.** - A standard [Alert]({{ site.baseurl }}/components/alert) should only be placed at the top of the page. By contrast, Alert - Expandable is only to be used within the contents of a page, not as a page-level alert. Thus it should be used sparingly to drive a user's attention to important information related to the section it appears within. For example, this component has been used to highlight copay charges that are due.
* **Provide more information without leaving the page.** The more minimal style of the collapsed Alert - Expandable is intended to be less visually prominent than a standard Alert in order to not conflict with an Alert should it appear on the same page. It allows for providing more important information once expanded that can inform the user of an important situation.

### When to consider something else

* **User feedback.** Use the [Alert]({{ site.baseurl }}/components/alert) component when responding to an action taken by a user such as submitting a form.
* **Clarifying background information.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component when clarifying outcomes for an input or a form question as well as providing background information. Keep in mind that Alert - Expandable should warrant an alert and be used sparingly. The value of any type of alert is diminished if the page is littered with alerts of equal weight.

### Behavior

### Choosing between variations

* **Warning.**  Just like the standard Alert, the Warning variation is used to warn a user, such as when there are negative consequences, or when something has gone wrong.
* **Informational.** Just like the standard Alert, the Informational default variation is used to provide helpful information or something that warrants a user’s attention. It is not used for negative consequences.
* **Success.** Just like the standard Alert, the Success variation is used to provide helpful information that is beneficial for the user.

### Placement

* Alert - Expandable must only appear within a section of a page, not at the top so as not to compete with the standard Alert placement.

### Instances of this component in production

#### Facility status for COVID-19 in Location finder
{% include component-example.html alt="Alert - Expandable in a mobile viewport." file="/images/components/alert-expandable/info-facility-status-location-finder.png" caption="Alert - Expandable, default variation, collapsed in the Location finder results list." width="50%" %}

#### Facility status for COVID-19 in Facility page
{% include component-example.html alt="Alert - Expandable in a desktop viewport." file="/images/components/alert-expandable/info-desktop.png" caption="Alert - Expandable, default variation, expanded in a Facility page in a wide viewport." width="50%" %}


{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

{% include a11y/alerts.md %}

## Research

### Medical copay enhancement tool usability - July 2021

The alert was tested as part of a usability study with 9 participants. The alert was used to display copay charges referred to the Department of Treasury that needed to be resolved ASAP, so it was pertinent that the alert was immediately noticeable by Veterans.

[View the component in the prototype here.](https://preview.uxpin.com/361636c369f65453b4880d1445911c4d9b869349#/pages/140005948/simulate/no-panels?mode=i)

#### Findings
- The alert was often the first thing Veterans noticed when arriving on the page
- Some clicked on the alert to read more about the referred charge while others moved on to looking at other sections of the prototype
- Veterans generally understood that they could interact with the alert. However, one asked themselves, "Can I click on this?" before clicking on it. That may have been because they were interacting with a prototype where not every element was interactive rather than because they were unsure that the alert was clickable in general.

## Related

* [Additional info]({{ site.baseurl }}/components/additional-info)
* [Alert]({{ site.baseurl}}/components/alert/alert)

{% include _component-checklist.html component_name=page.web-component %}