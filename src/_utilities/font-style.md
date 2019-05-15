---
layout: default
title: Font style
---

# Font style

<div class="va-introtext" markdown="1">
Change the font style of an element.
</div>

<div class="site-showcase">
{%
  include _showcase-header.html
  heading_level=2
  header="Font style"
  responsive=false
  css_property="font-style"
%}
  <div class="vads-l-row vads-u-flex-direction--column">
    <div class="site-showcase__col vads-l-row vads-u-align-items--flex-start vads-u-border--0">
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
          <code class="code">.vads-u-font-style--italic</code>
      </div>
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
        <span class="vads-u-font-style--italic">Italic text in &lt;span>. </span>
      </div>
    </div>
    <div class="site-showcase__col vads-l-row vads-u-align-items--flex-start">
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
          <code class="code">.vads-u-font-style--normal</code>
      </div>
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
        <em class="vads-u-font-style--normal">Normal text in &lt;em> </em>
      </div>
    </div>
  </div>
</div>