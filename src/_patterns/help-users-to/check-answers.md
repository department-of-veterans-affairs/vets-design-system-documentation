---
layout: pattern
permalink: /patterns/help-users-to/check-answers
sub-section: help-users-to
title: Check answers
intro-text: "Follow this pattern to help users check their answers before submitting a form."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to design and build
---

## Usage

### When to use this pattern

* **At the end of a form flow.** Allowing users to check their answers before submitting their form allows them an opportunity to catch any mistakes they have made and allows for them to reconsider their answers.

## How to design and build 

### How this pattern works

- Each chapter should be its own accordion.
- List chapters in chronological order.
- ‘File upload’ and ‘Add another’ sections should be in the gray card style.
- ‘Add another’ primary button should be placed at the bottom left on cards that allow users to add information.
- ‘Delete file’ secondary button should be placed at the bottom left on cards that allow users to upload files

### Layout details

- Show the [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) along with the chapter title: Review application.
- Use bordered, multi-selectable [accordions]({{ site.baseurl }}/components/accordion).
- When an accordion is open, each section within a chapter should have a secondary “Edit” button in the top right.
- Underneath the accordions include the note:
> Note: According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or for providing incorrect information (See 18 U.S.C. 1001).
- Following the note also include the Privacy agreement.
- [Button pair]({{ site.baseurl }}/components/button/button-pair): Secondary button labeled “Back” and Default blue button labeled “Submit application”
- Last saved application date and time in green background color only alert style
- Finish this application later default link 

**Note:** This content will vary depending on your form. Work with your content specialist or check out the form labels. 

### Components used in this pattern

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Button pair]({{ site.baseurl }}/components/button/button-pair)
* [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented)