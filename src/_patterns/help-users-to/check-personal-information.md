---
layout: pattern
title: Check personal information
permalink: /patterns/help-users-to/check-personal-information
redirect_from:
  - /patterns/authenticated-info-list
aka: Authenticated info list
sub-section: help-users-to
intro-text: "This pattern helps users quickly see a list of items related to their own personal information, as well as quickly navigate to answers to the questions they might have."
status: use-with-caution-available
contributors: Shawna Hein, Kevin Stachura
anchors:
  - anchor: Purpose
  - anchor: Example
  - anchor: Layout
  - anchor: Usage
  - anchor: Accessibility considerations
  - anchor: Research
---

## Purpose

The purpose of this pattern is:

1. To create an easily scannable list / group of a user's related items
2. To consolidate the page layout and remove the sidebar, so as to reduce page scanning
3. To maintain consistency with mobile layout patterns
4. To give the user a quick way to 'jump' to desired content

## Example

![image]({{site.baseurl}}/images/patterns/help-users-to/check-personal-information/auth-list-tool.jpeg)


1. **'On this page' component.** This section should link to the associated content on the page. It should 'jump' to that section when the user clicks it.
2. **User's list of items.** A group of related (and relevant) content items for the user to review.
3. **Additional information.** Relevant but potentially tertiary information for the user. Not part of the user's list of items. The 'on this page' component will link to these items. 

## Layout

### Desktop 

#### Typical layout

![image]({{site.baseurl}}/images/patterns/help-users-to/check-personal-information/apple-tool.jpeg)

#### Layout with consolidated additional information (FAQs section)

![image]({{site.baseurl}}/images/patterns/help-users-to/check-personal-information/apple-tool-consolidated-faq-3.jpeg)

### Mobile

![image]({{site.baseurl}}/images/patterns/help-users-to/check-personal-information/apple-tool-mobile-3.jpeg)

### Usage

You should use this pattern if you're designing an experience where a Veteran is viewing a list of items relevant to them. For example, a list of the claims they have in process, a list of their disability ratings, or a list of the medical devices they have ordered.

### Additional notes

#### When to consider something else
- If you're designing a list of things embedded in a form, this may not be the best pattern. 
- If you're designing a list with complex filtering and sorting needs, this pattern is probably too simple and you may want to go with patterns more similar to other search tools on our site.


#### The 'on this page' component and headings
The on this page component should start with a link to the list itself, and then list frequently asked questions or other important content topic areas. If there are more than 4 top questions or content topics, you can collapse the questions down to a single H2 "FAQ" in the "on this page component", as seen in the second design mockup with "FAQ about apple trees."

#### Integrating contextual questions in the cards
Overall questions should be in a content area accessed by the "on this page" component, but more contextual questions can be "additional info" components on the cards themselves. Example provided.

![image]({{site.baseurl}}/images/patterns/help-users-to/check-personal-information/additional-info.png)

#### Items on the card and optional card elements 
Make sure to not overload elements on the cards. If you're finding you need to let the user know about a fair amount of information about a single card, link to a details page with more detail.

Try to stick to only a single item (or less) of each element type - e.g. one status, one additional info component (with the exception of name:value pairs).

And of course, not all the elements you see in this design are necessary, for example, if you don't have detail pages for your items, you can leave out the action link and still use this pattern.

## Accessibility considerations

Always be sure to include an a11y specialist in any authenticated info list pattern you're developing.

#### Action links
The designs provided above leverage action links as an example for the list cards. Consider whether an action link or a default link is more appropriate for your use case. Please follow the guidance provided on the [action link page]({{ site.baseurl }}/components/link/action) of the design system. 

Still not sure which is best for your use case? Our accessibility team held a [presentation on Buttons vs. Links](https://docs.google.com/presentation/d/1hv7kENiPuXGcZDwQSM5hItnbyXezu4nY9lFksMQpSK4/edit#slide=id.ge8045de9aa_0_0), which is a great reference to help you decide.


## Research

Research for this layout was conducted via the [Debt Letters MVP Usability Test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/research/usability-july20/usability-readout.md) and proved favorable among veterans. 
