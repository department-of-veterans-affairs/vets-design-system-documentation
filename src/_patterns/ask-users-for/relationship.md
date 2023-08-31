---
layout: pattern
permalink: /patterns/ask-users-for/relationship
sub-section: ask-users-for
title: Relationship to Veteran
intro-text: "Follow this pattern to ask a user for their relationship to the Veteran."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/relationshipToVeteranPattern.jsx
example-link: https://staging.va.gov/mock-form-patterns/relationship-to-veteran
sketch-link: https://www.sketch.com/s/dc844743-277e-41d4-81ba-a48fd0743952/p/CDC8B63A-CD03-4A68-8130-9F2A106D0961/canvas
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Asking for the relationship to the Veteran.** For example, when a caregiver is filling out a form.
 
## Examples

### Caregiver Form 10-10CG

{% include component-example.html alt="An example of asking the relationship to the Veteran in a drop down." file="/images/patterns/ask-users-for/relationship/relationship-caregiver.png" caption="Example of asking the relationship to the Veteran in a drop down." width="50%" %}

### Burial benefits Form 21P-530

{% include component-example.html alt="An example of asking the relationship to the Veteran with radio buttons." file="/images/patterns/ask-users-for/relationship/relationship-burial.png" caption="Example of asking the relationship to the Veteran with radio buttons." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
  
## How to design and build 

### How this pattern works

- **Use either a drop down or radio buttons.** Options should include spouse, child, parent, executor/administrator of estate or other.
- **Provide a way to give a ‘None of the above’ answer.** A radio button labeled “Other” should be provided.


### Error message templates for addresses

**When a user doesn’t select a relationship:**

Say "Please select your relationship to the Veteran"
