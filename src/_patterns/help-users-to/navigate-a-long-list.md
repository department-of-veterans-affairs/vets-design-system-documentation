---
layout: pattern
permalink: /patterns/help-users-to/navigate-a-long-list
sub-section: help-users-to
title: Navigate a long list
aka: Show more options
contributors: Peter Russo (VAOS)
added: 7/5/2022
intro-text: Allows users to navigate and process a long list of items by progressively displaying additional items as needed.
research-title: Show more options
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/AC70760E-54B7-41E1-982A-26E3B29049DF
status: use-with-caution-candidate
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Usage

### When to use this pattern

* **Progressively reveal more options.** When you need to focus the user's attention on the top of a long list of options. Hiding all but the most relevant or top/first options can help the user focus on evaluating a shorter list thereby reducing cognitive load.
* **Most relevant results.** This pattern is intended to be used when the first results are expected to be the most relevant. Thus it's best paired with a default sort, or other tool to show that the results have been personalized.

### When not to use this pattern

* **Additional content.** Do not use this pattern to disclose additional static content unrelated to the list or when you need to allow the user to show and hide information. If you need to reveal additional information, use the [additional information component]({{ site.baseurl }}/components/additional-info).

## Examples

{% include component-example.html alt="Show more options screen example from the VA Online Scheduling application." file="/images/patterns/show-more-options/vaos-choose-location.png" caption="The VA Online Scheduling application uses the Show more options pattern for choosing VA facility locations." width="50%" %}

## How to design and build 

### Anatomy or layout details

{% include component-example.html alt="Show more options mock-up screen examples." file="/images/patterns/show-more-options/interactions.png" caption="The anatomy of the Show more options pattern." %}

1. **Default state**. A mobile screen of a page in a VA.gov form flow. The form question consists of a list with ten total options. 5 options are displayed. A link underneath reads "+ show 5 more options"
2. **Default state - sorter**. A dropdown labeled "Sort these options".
3. **Default state - radio options**. Five generic radio buttons.
4. **Default state - show more link**. Show more link exists between the options nad the navigation buttons.
5. **State when all options are showing**. A mobile screen of a page in a VA.gov form flow. Same as the first except 10 radio buttons are showing, and the link is not.
6.  **State when there are only 5 total options**. A mobile screen of a page in a VA.gov form flow. Same as the first except there is no link to show more options.

### How this pattern works

* Given a long list of options, only the first 5 options are displayed. 
* A link below the options acts as a trigger for revealing additional options.
  * This link does not appear if there are 5 or less options.
* Clicking the link displays more options, 5 at a time.
* Once all options are displayed, the link disappears.
* Once the additional options are revealed, there is no need and thus no mechanism to hide them.

### Components used in this pattern

* [Link]({{ site.baseurl }}/components/link)

### Page templates available for this pattern

* This pattern exists in VA Online Scheduling (VAOS) on the facility and provider sections of the "Start scheduling" flow.

## Content considerations

The text of the trigger link should be in the following format:

> "+ show [#] more [name of option]" 

For example, "+ 5 more locations"

## Accessibility considerations

* Use aria-controls and aria-expanded attributes to convey the expand functionality to assistive technologies.
* The link element that acts as the trigger to reveal more options has a role of heading so it can be found in the page. Setting an aria-level is recommended.