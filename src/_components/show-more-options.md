---
layout: pattern
title: Show more options
contributor: Peter Russo (VAOS)
draft: true
intro-text: Allows users to progressively display the available options in a long list as needed. This helps the user process a long list in smaller chunks. 
research-title: va-show-more
sketch-link: https://sketch.com/s/f9772b47-772c-4a66-bfcf-1f677230d9f4
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to build
  - anchor: Accessibility considerations
---

Product/application/form: The VAOS scheduling flow on the facility and provider selection page<br/>
Date: June 7, 2022 <br/>

## Usage

### When to use this pattern

* **Progressively reveal more options.** When you need to focus the user's attention on the top of a long list of options. Hiding all but the most relevant or top/first options can help the user focus on evaluating a shorter list.
* **Most relevant results.** This pattern is intended to be used when the first results are expected to be the most relevant. Thus it's best paired with a default sort, or other tool to show that the results have been personalized.

## Examples

![Show more pattern - overview](https://user-images.githubusercontent.com/2536801/172415478-1da11d3c-c6ce-4372-a10f-7264bece57cb.png)

1. **Default state**. A mobile screen of a page in a VA.gov form flow. The form question consists of a list with ten total options. 5 options are displayed. A link underneath reads "+ show 5 more options"
2. **Default state - sorter**. A dropdown labeled "Sort these options".
3. **Default state - radio options**. Five generic radio buttons.
4. **Default state - show more link**. Show more link exists between the options nad the navigation buttons.
5. **State when all options are showing**. A mobile screen of a page in a VA.gov form flow. Same as the first except 10 radio buttons are showing, and the link is not.
6.  **State when there are only 5 total options**. A mobile screen of a page in a VA.gov form flow. Same as the first except there is no link to show more options.

### How this pattern works

* Given a long list of options, only the first 5 display. 
    * A link below the list reads "+ [#] more [name of option]."
* Clicking the link displays more options, 5 at a time. 
* Once all options are displayed, the link disappears.
* There is no state to show fewer options.

## Behavior 

* Link shows at end of list.
* Link does not show when there are 5 options displayed.
* Clicking link displays 5 more options.
* When all options are displayed, link no longer shows.

### Page templates available for this pattern

* This pattern exists in VAOS on the facility and provider sections of the "Start scheduling" flow.
* [Sketch file](https://sketch.com/s/f9772b47-772c-4a66-bfcf-1f677230d9f4) detailing interaction.

## Accessibility considerations

None.
