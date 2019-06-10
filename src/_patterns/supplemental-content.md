---
layout: default
title: Supplemental content
anchors:
  - anchor: Contextual help
---

# Supplemental content

<p class="va-introtext">VA.gov uses supplemental content to provide the user background information related to a form or service. This information is often nuanced and dense, but not critical, so we typically place it behind an interaction or somewhere that is not disruptive to the user's ability to complete a task.</p>

## Contextual help

In cases where a person’s input can have large or complicated impact on outcomes we use the contextual help to locate expanded guidance next to the relevant interaction.

_The following example depicts how to use contextual help to describe a medical condition if the user is unsure what to call it._

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <strong>Closed (default)</strong>
    <img src="/images/additional-info-closed.png">
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <strong>Open</strong>
    <img src="/images/additional-info-open.png">
  </div>
</div>

Most VA forms have a large amount of instructional text that tries to make VA processes, or the requirements of the application process clear. Unfortunately they are frequently several pages of tiny type that the person has to read and retain. Much of it may not even be relevant to that specific person’s situation. We use the [Additional info](https://design.va.gov/components/additional-info) component to situate plain language help at the point of the process where it is most relevant. For example, a group of three inputs that make sense in a particular order, and the middle one has some nuance to it.

The help is triggered by clicking on a uniquely styled text link with a plain language hook. The helper text is revealed with a sliding drawer type animation (like the accordion) and is typically 1-3 short paragraphs. Shorter is better, and references to static content pages is encouraged when the situation is complicated.

### Where to place contextual help
Whenever there is a chance to enhance the understanding a user has about a particular choice, the contextual help can be used! For instance:
- “What if I don’t know the name of my condition?”
- "Which evidence type should I choose?"
- "Why does this matter?"
When the user clicks, they see a short explanation of the situation and a link to more information if necessary.

### Pattern guidance

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">

- Help users by providing contextual, relevant information that brings clarity to _interactions_.
- Get help into the middle of a series of inputs
- Address questions that apply to a small set of people

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">

- Don’t use this pattern to house information that is critical to the form
- Don’t use this pattern in the page's body content (places not a form or tool), use an accordion instead

</div>
</div>
</div>

### Why not use an Accordion component?

Accordions are designed for page body content (outside forms or tools) and are disruptive when inserted in between inputs. Think of using the [additional info component]({{site.baseurl}}/components/additional-info) to provide a speed bump whereas an accordion would provide a stop sign.
