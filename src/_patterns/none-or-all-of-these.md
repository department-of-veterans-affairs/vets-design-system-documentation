---
layout: default
title: None or all of the above
anchors:
  - anchor: Checkboxes
  - anchor: Radio options
  - anchor: Select box
---

<div class="va-introtext">
In some form sections, either none of the options or all of them may apply to the user. Here is how to design responses for that instance.
</div>

There isn’t a universal phrase on VA.gov. Your usability research may inform you when to use something other than a generic statement.

When it comes to designing forms, as a general rule, simpler is usually better.

## Checkboxes

In the case where the response is a set of checkboxes, below the question, specify that the user may "check all that apply" or that they "may check more than one."

<img src="{{site.baseurl}}/images/more-than-one-checkbox.png" alt="set of checkboxes" style="max-width: 376px">

**Do not** include checkboxes for "all of these" or "none of these" since the user may already select as many or as few boxes as necessary; implied by the text: "check all that apply." Introducing these options could potentially introduce unnecessary complexity to interaction design and the codebase, and perhaps even to data models.

Our research indicates that users do not feel compelled to make a selection when none apply, and they were able to proceed with the application.

## Radio options
In the case of radio options, you may include options for "all of these" or "none of these" after all other options are listed.

When using an "all of these" option, ensure that under no circumstance would a partial set of options apply to the user.

## Select box
Before choosing a select box, follow the [guidance]({{site.baseurl}}/components/form-controls#usability-1) to determine if you should be using radio buttons instead.

In the case of radio options, you may include options for "all of these" or "none of these" after all other options are listed.

When using an "all of these" option, ensure that under no circumstance would a partial set of options apply to the user.