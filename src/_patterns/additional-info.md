---
layout: default
title: Additional info
draft: true
---
# Additional info

<p class="va-introtext">Sometimes, an input or information is so nuanced that it has labels or requirements that some users don't fully understand.</p>

## What is Additional info
The additional info pattern is a context specific interaction where we provide users with relevant information that helps gain about the decision they are about to make. This information is hidden beneath a quasi-accordion-like interaction because it isn’t necessary for the majority of users and would impede the primary action on the page.

## Example

The following example depicts how to use additional info to describe a medical condition if the user is unsure what to call it.

![image](/images/additional-info-closed.png)
_Closed state (default)_

![image](/images/additional-info-open.png)
_Open state_

## Where to place Additional info
Whenever there is a chance to enhance the understanding a user has about a particular choice, the additional info interaction can be used! —for instance:
A user might need to list conditions they have in a disabilities form. We ask them:
Search the name of your condition
And the additional info interaction would be:
“What if I don’t know the name of my condition? >”
When the user clicks, they see an explanation of what to search for, and an example search to further illustrate the explanation.

## Pattern specifics
The [current component of the Additional info](https://design.va.gov/components/additional-info) interaction has a dotted line underneath it, along with a down-carat to indicate interactivity

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Help users by providing contextual, relevant information that brings clarity to content they are taking action.
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
Don’t use this pattern to house information that is critical to the form or content
</div>
</div>
</div>

## Why not use an Accordion component?

Accordions, due to their visual presentation, can be disruptive to the way that users navigate through a form or read dense content on the page. Think of using the [additional info component]({{site.baseurl}}/components/additional-info) to provide a speed bump whereas an accordion would provide a stop sign.