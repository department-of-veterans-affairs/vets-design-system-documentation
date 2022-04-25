---
layout: pattern
permalink: /patterns/forms/all-or-none-of-the-above
has-parent: /patterns/forms/
title: All or none of the above
intro-text: "In some questions, either none of the options or all of them may apply to the user. Here is how to design responses for that instance."
status: use-deployed
anchors:
  - anchor: Checkboxes
  - anchor: Radio options
  - anchor: Select box
---

## Checkboxes

In the case where the response uses checkboxes, below the question, specify that the user may “select all that apply.”

<img src="{{site.baseurl}}/images/more-than-one-checkbox.png" alt="set of checkboxes" style="max-width: 376px">

We recommend that you **do not** include checkbox options for “all of these” or “none of these” since the user may already select as many or as few boxes as necessary; as stated by the text “select all that apply." Introducing these options could add unnecessary complexity to interaction design, the codebase, and even to the data model if not correctly handled on the backend.

Sometimes, due to specific requirements from the VA, may have no choice but to include all or none of the above. To avoid creating a scenario where the user would be presented with an all or none checkbox, consider the following options:

- Think about reframing the question
  - You can break the question into two separate questions, for example, start with a response using radio buttons. Then, you can present a set of checkboxes as a conditional follow-up question.
- Be explicit that the user is not required to make a selection


## Radio options
In the case of radio options, you may include options for “all of these” or “none of these” after all other options are listed.

When using an “all of these” option, ensure that under no circumstance would a partial set of options apply to the user.

## Select box
Before choosing a select box, follow the [guidance]({{site.baseurl}}/components/form-controls#usability-1) to determine if you should be using radio buttons instead.

In the case of radio options, you may include options for “all of these” or “none of these” after all other options are listed.

When using an “all of these” option, ensure that under no circumstance would a partial set of options apply to the user.
