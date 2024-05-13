---
layout: pattern
permalink: /patterns/ask-users-for/relationship
sub-section: ask-users-for
title: Relationship to Veteran
intro-text: "Follow this pattern to ask a user for their relationship to the Veteran."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/relationshipToVeteranPattern.jsx
example-link: https://staging.va.gov/mock-form-patterns/relationship-to-veteran
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988%3A17640&mode=design&t=93yXuwTXsWwWopry-1
github-title: pattern-relationship-to-veteran
research-title: Ask users for relationship to Veteran
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Asking for the relationship to the Veteran.** For example, when a caregiver is filling out a form.

## Examples

### Relationship to Veteran

{% include component-example.html alt="An example of asking the relationship to the Veteran with radio buttons." file="/images/patterns/ask-users-for/relationship/relationship-to-veteran.png" caption="Example of asking the relationship to the Veteran with radio buttons." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>
  
## How to design and build

### How this pattern works

* **Use either a drop down or radio buttons.** Options should include spouse, child, parent, executor/administrator of estate or other.
* **Provide a way to give a ‘None of the above’ answer.** A radio button labeled “Other” should be provided.

{% include content/conditionally-revealed-fields.md %}

### Components used in this pattern

* [Radio button]({{ site.baseurl }}/components/form/radio-button)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Relationship to Veteran in Figma]({{ page.figma-link }}).

## Code usage

[relationshipToVeteranPattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

### Error message templates for addresses

**When a user doesn’t select a relationship...**
: Say "Please select your relationship to the Veteran"
