---
layout: default
permalink: /foundation/utilities/font-family
has-parent: /foundation/utilities/
title: Font family
---

# Font family

<div class="va-introtext" markdown="1">
Change the font-family.
</div>

VA.gov uses two typefaces: Bitter for serif and Source Sans as a sans-serif.

<div class="site-showcase">
{%
  include _showcase-header.html
  heading_level=2
  header="Font family"
  responsive=false
  css_property="font-family"
%}
  <div class="vads-grid-row vads-u-flex-direction--column">
    <div class="vads-grid-col site-showcase__col vads-u-display--flex tablet:vads-u-align-items--center vads-u-flex-direction--column tablet:vads-u-flex-direction--row" style="border-top:none;">
      <div><code class="code">.vads-u-font-family--sans</code></div>
      <div class="tablet:vads-u-margin-left--auto">
        <span class="vads-u-font-family--sans vads-u-font-size--2xl">Source Sans Pro</span>
      </div>
    </div>
    <div class="vads-grid-col site-showcase__col vads-u-display--flex tablet:vads-u-align-items--center vads-u-flex-direction--column tablet:vads-u-flex-direction--row">
      <div><code class="code">.vads-u-font-family--serif</code></div>
      <div class="tablet:vads-u-margin-left--auto">
        <span class="vads-u-font-family--serif vads-u-font-size--2xl">Bitter</span>
      </div>
    </div>
  </div>
</div>
