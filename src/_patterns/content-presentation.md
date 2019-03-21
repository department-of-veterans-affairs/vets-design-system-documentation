---
layout: default
title: Content presentation
anchors:
  - anchor: Information callouts
  - anchor: Expandable content
---

# Content presentation

---

## Information callouts

Information callouts are light blue boxes that call attention to important information.

<div class="site-c-showcase">
{% include_relative html/information-callout.html %}
</div>

{% include snippet.html content='html/information-callout.html' %}

---

## Expandable content

### Accordions

Use [accordions](../components/accordions.html) to hold chunks of sibling content. They can be used in forms in review screens, but for additional context, please use [AdditionalInfo](#additionalinfo).

### AdditionalInfo

Use additional info components in forms to provide additional context. The lighter design prevents breaking up the visual progression as the user navigates the form. These can also serve as alternative to where accordions feel too heavy.

### How to Choose?

- **Is this content closely tied to a particular message or input on this screen?** Use AdditionalInfo
- **Is it more tangentially related?** Use accordions
