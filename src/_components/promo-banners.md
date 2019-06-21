---
layout: default
title: Promo banners
---

# Promo banners

<p class="va-introtext">Promo banners are fixed content used for dismissible announcements such as new tools, news, etc.</p>

{% include iframe-preview.html src="html/promo-banner-iframe.html" title="Visibility" height=400 %}

{% include snippet.html content='html/promo-banner.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/promobanner/' %}

## Guidance

- Fixed to the bottom of the viewport
- In Formation's current version, you will need to implement your own dismiss function

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
- Use for information that is safe to dismiss and can be accessed in other parts of VA.gov
- Be succinct
- Allow the user to dismiss
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
- Don't use for critical information
- Don't write content that will be more than 3 lines on a mobile device
- Don't prevent user from dismissing
- Use more than one at a time
</div>
</div>
</div>