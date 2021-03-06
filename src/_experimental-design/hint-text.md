---
layout: default
sub_section: Hint text
title: Hint text
---
Suggested by: Shawna Hein + Becca Walsh, VSA

# Hint text guidance

When a detailed form input label is not enough to convey the meaning or purpose of the input, we have three options for including additional information:

## Inline with the label
This should be used in the case where the needed clarification is very short.
### Example:

<div class="site-showcase">
  <form class="usa-form">
    <label class="vads-u-margin-top--0" for="input-type-text">Street address (20 characters maximum)</label>
    <input class="usa-input" id="input-type-text" name="input-type-text" type="text">
  </form>
</div>

## As subtext beneath the label
This should be used in the case where the needed clarification is a little longer, but less than two sentences. These should likely not wrap more than twice for a total of three lines.
### Example:

<div class="site-showcase">
  <form class="usa-form">
    <label class="vads-u-margin-top--0" for="input-type-text">
      Case or docket number
      <span class="vads-u-color--gray-medium vads-u-display--block">
        You'll find this number on your case documents
      </span>
    </label>
    <input class="usa-input" name="input-type-text" type="text">
  </form>
</div>

## Within an Additional Info component
This should be used in cases where the needed clarification is long or complex, requiring more than two sentences, multiple paragraphs, or special formatting, such as bullet points or links. 

Note that in general we want to avoid this pattern - if a field needs a lot of explanation, it should ideally be moved to its own page with explanation on the page itself.
### Example

<div class="site-showcase">
  <form class="usa-form">
    <label class="vads-u-margin-top--0" for="input-type-text">
      Veteran’s Social Security number

    </label>
    <div id="AdditionalInfoDemo-HintText" class="vads-u-margin-bottom--1"></div>
    <input class="usa-input" name="input-type-text" type="text">
  </form>
</div>
