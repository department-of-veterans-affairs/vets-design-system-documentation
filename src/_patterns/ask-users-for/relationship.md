---
layout: pattern
permalink: /patterns/ask-users-for/relationship
sub-section: ask-users-for
title: Relationship to Veteran
intro-text: "Follow this pattern to ask a user for their relationship to the Veteran."
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

{% include component-example.html alt="An example of a single address form." file="/images/patterns/ask-users-for/addresses/single-address.png" caption="Example of a form collecting a single address." width="50%" %}

### Burial benefits Form 21P-530

{% include component-example.html alt="An example of a mailing address form." file="/images/patterns/ask-users-for/addresses/mailing-address.png" caption="Example of a form collecting a mailing address." width="50%" %}

## How to design and build 

### How this pattern works

- **Use either a drop down or radio buttons.** Options should include spouse, child, parent, executor/administraitor of estate or other.
- **Provide a way to give a ‘None of the above’ answer.** A radio button labeled “Other” should be provided.


### Error message templates for addresses

**When a user doesn’t select a relationship:**

Say 'Please select your relationship to the Veteran'
