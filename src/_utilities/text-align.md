---
layout: default
sub_section: text-align
title: Text align
---
<div class="usa-alert usa-alert-error vads-u-margin-top--0 vads-u-margin-bottom--5" role="alert">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Do not use. This is a proposal</h3>
    <p>This utility is a proposal and this page exists only for demonstration purposes. Once this utility is accepted into the code base, this message will no longer appear.</p>
  </div>
</div>

# Text align

<div class="va-introtext" markdown="1">
Change the alignment of text or elements. This utility also [responsive prefixes](#responsive-prefixes).
</div>

<div class="site-c-showcase">
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.text-align.alignments %}
      {% include text-align-example.html
        name=item.name
      %}
    {% endfor %}
  </div>
</div>

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

{% include iframe-preview.html src="html/text-align.html" title="Visibility" height=300 %}

{% include snippet.html content='html/text-align.html' %}

### Example

```html
<div class="vads-u-text-align--left large-screen:vads-u-text-align--center">
```
{% include _breakpoint-names.html %}