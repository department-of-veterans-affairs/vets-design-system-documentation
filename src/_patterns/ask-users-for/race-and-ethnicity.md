---
layout: pattern
permalink: /patterns/ask-users-for/race-and-ethnicity
redirect_from:
  - /patterns/ask-users-for/race-ethnicity-or-origin
sub-section: ask-users-for
title: Race and ethnicity
intro-text: Follow this pattern whenever you need to ask Veterans for their race and ethnicity.
github-title: pattern-race-ethnicity
research-title: Ask users for race and ethnicity
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
---

<va-alert
  close-btn-aria-label="Close notification"
  status="warning"
  visible
>
  <h2 slot="headline">
    The current version of this pattern will be deprecated in future
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      Teams should consult with the Design System team before adding or updating this pattern in any form or application.
    </p>
  </div>
</va-alert>

## Usage

### When to use this pattern

* **Don’t ask a user to provide information that VA already has.** You should only ask users for race or ethnicity, sexual orientation, or gender identity when VA does not already have the user's information or when VA's last validation date pre-dates the most recent approved pattern.
* **Only ask a user to provide information if it benefits the user experience.** You should only ask a user for their race or ethnicity, sexual orientation, or gender identity if you can clearly explain how providing this information will benefit the user (not the VA) and the question is related to the larger action they are trying to perform.
* **Only collect data when you can reinforce trust, transparency, and user choice.** You must clarify their information will not be used for their medical treatment or benefits determinations and demonstrate how a user can change their race or ethnicity, sexual orientation, or gender identity and related privacy preferences in the VA.gov profile. If a user does not have and is not eligible to create a VA.gov profile, such as an unauthenticated users, then the data is not collected.

## Examples

![applicant information race template]({{site.baseurl}}/images/patterns/ask-users-for/race-and-ethnicity/race-and-ethnicity.png) 

## How to design and build 

### How this pattern works

* **Ethnicity is currently a distinct question that precedes race and is limited to one response.** Ethnicity is currently separate (this may change in future) and must only accept one response.
* **Give users the option of picking more than one race.** Always use checkboxes so that users can identify with multiple races. 
* **Provide a way to opt-out of answering.** An option labeled "Prefer not to answer" should be provided to both questions.
* **These questions are optional.** Clearly communicate that the information being collected is not required.
* **When "Prefer not to answer" is selected, other options are negated.** If a user indicates that they prefer not to answer then all other checkboxes should be unchecked and/or ignored upon submission.
