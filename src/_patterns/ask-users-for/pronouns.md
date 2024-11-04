---
layout: pattern
permalink: /patterns/ask-users-for/pronouns
sub-section: ask-users-for
title: Pronouns
intro-text: Follow this pattern to ask Veterans for their pronouns. 
github-title: pattern-pronouns
research-title: Ask users for pronouns
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Accessibility considerations
---

## Usage

### When to use this pattern

**When you need to collect a person's pronouns in order to address them appropriately.** A pronoun is a word that can be used to refer to a person you are addressing (i.e. "you") or being talked about in the third person (i.e. "she/her," "he/him," and "they/them"). Some pronouns are gendered (i.e. "she/her" and "he/him") and thus we are intentional about the way we use pronouns in order to be respectful and inclusive. A pronoun can be indicative of how a person identifies or prefers to be addressed. Allowing users to choose their pronouns and using those pronouns, when not addressing a person by their name, creates a more comfortable interaction.

Pronouns, as well as other personal information in a user profile, will be used when Veterans visit VA facilities and speak to VA representatives, for example. Previously there wasn't a way for users to convey a preference ahead of time, which was creating discomfort for both Veterans and VA staff.

## Examples

{% include component-example.html alt="Asking for pronouns in the VA.gov Profile." file="/images/patterns/ask-users-for/pronouns/pronouns-profile.jpg" caption="Asking for pronouns in the VA.gov Profile, personal information section." width="75%" %}

## How to design and build 

### How this pattern works

* **Give Veterans the option of picking more than one pronoun they could identify with.** Use checkboxes so that Veterans can identify with multiple descriptions.
* **Provide a way to opt-out of answering.** A checkbox labeled "Use my preferred name" should be provided.
* **Provide a way to give an answer not in the list.** Allow for users to provide their own answer with an open-ended text field. The additional text field allows the user to see that there is an option to provide their own answer, which is particularly useful in cases where the list of options is unlikely to ever be exhaustive. It may also be more expedient in that the user does not have to make a selection before entering text into the field. However, this should only be used with a single input and not multiple inputs.

## Accessibility considerations

**Use a single text field to capture options not found in a list.** While it is typically encouraged to hide unnecessary fields until a user makes a selection that makes them relevant (sometimes referred to as a form of Progressive disclosure), it is also desirable to signal to the user that they may provide their own answer. This makes the interaction more accessible as it allows a screen reader user to navigate through the field and know that is an option without having to trigger a reveal of that field. For example, having to select "Provide my own answer" which would then reveal a text field. 