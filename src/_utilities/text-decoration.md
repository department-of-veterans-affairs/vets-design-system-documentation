---
layout: default
sub_section: text-decoration
title: Text decoration
---

<div class="usa-alert usa-alert-error vads-u-margin-top--0 vads-u-margin-bottom--5" role="alert">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Do not use. This is a proposal</h3>
    <p>This utility is a proposal and this page exists only for demonstration purposes. Once this utility is accepted into the code base, this message will no longer appear.</p>
  </div>
</div>

# Text decoration

<div class="va-introtext" markdown="1">
Change the text-decoration.
</div>

<div class="site-c-showcase">
  <div class="vads-l-row vads-u-flex-direction--column">
    <div class="site-c-showcase__col vads-l-row vads-u-align-items--flex-start">
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
          <code class="code">.vads-u-text-decoration--none</code>
      </div>
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
        <a href="javascript:void();" class="vads-u-text-decoration--none">Link with no underline</a>
      </div>
    </div>
    <div class="site-c-showcase__col vads-l-row vads-u-align-items--flex-start">
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
          <code class="code">.vads-u-text-decoration--underline</code>
      </div>
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
        <span class="vads-u-text-decoration--underline">Non-link with underline</span>
      </div>
    </div>
    <div class="site-c-showcase__col vads-l-row vads-u-align-items--flex-start">
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
          <code class="code">.vads-u-text-decoration--line-through</code>
      </div>
      <div class="vads-l-col--12 medium-screen:vads-l-col--6">
        <span class="vads-u-text-decoration--line-through">strikethrough text</span>
      </div>
    </div>
  </div>
</div>

## Guidance

- Underlines are an important link affordance for users who may experience difficulties perceiving contrast. Remove the underline from links only when the context implies there is interaction.
- Do not use underlines for emphasis. Underlines imply interaction. Use bold text instead.
