---
layout: default
sub_section: Hint text
title: Hint text
---

When a detailed form input label is not enough to convey the meaning or purpose of the input, we have three options for including additional information:

## Inline with the label 
This should be used in the case where the needed clarification is very short.
### Example:

<form class="usa-form">
  <label class="vads-u-margin-top--0" for="input-type-text">Street address (20 characters maximum)</label>
  <input class="usa-input" id="input-type-text" name="input-type-text" type="text">
</form>

## As subtext beneath the label
This should be used in the case where the needed clarification is a little longer, but less than two sentences. These should likely not wrap more than twice for a total of three lines. 
### Example:

<form class="usa-form">
  <label class="vads-u-margin-top--0" for="input-type-text">
    Case or docket number 
    <span class="vads-u-color--gray-medium vads-u-display--block">
      You'll find this number on your case documents
    </span>
  </label>
  <input class="usa-input" name="input-type-text" type="text">
</form>

## Within an Additional Info component 
This should be used in cases where the needed clarification is long or complex, requiring more than two sentences, multiple paragraphs, or special formatting, such as bullet points or links.
### Example
