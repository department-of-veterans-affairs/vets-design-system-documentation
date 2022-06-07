---
layout: default
sub_section: Show more options
title: Show more options
draft: true
---
Suggested by: Peter Russo <br/>
Team/contract: VA Online Scheduling (VAOS) <br />
Product/application/form: The VAOS scheduling flow on the facility and provider selection page<br/>
Date: June 7, 2022 <br/>

# Show more items in a list

* Given a long list of options, only the first 5 display. 
    * A link below the list reads "+ [#] more [name of option]."
* Clicking the link displays more options, 5 at a time. 
* Once all options are displayed, the link disappears.
* There is no state to show fewer options.

## Purpose

This pattern lets users progressively display the available options in a long list as needed. This helps the user process a long list in smaller chunks. 

 It's intended to be used when we expect the first results to be the most relevant. Given that, it's best paired with a default sort, or other tool to show that the results have been personalized.

## Example

![Show more pattern - overview](https://user-images.githubusercontent.com/2536801/172415478-1da11d3c-c6ce-4372-a10f-7264bece57cb.png)

1. **Default state**. A mobile screen of a page in a VA.gov form flow. The form question consists of a list with ten total options. 5 options are displayed. A link underneath reads "+ show 5 more options"
2. **Default state - sorter**. A dropdown labeled "Sort these options".
3. **Default state - radio options**. Five generic radio buttons.
4. **Default state - show more link**. Show more link exists between the options nad the navigation buttons.
5. **State when all options are showing**. A mobile screen of a page in a VA.gov form flow. Same as the first except 10 radio buttons are showing, and the link is not.
6.  **State when there are only 5 total options**. A mobile screen of a page in a VA.gov form flow. Same as the first except there is no link to show more options.

## UX behavior 

* Link shows at end of list.
* Link does not show when there are 5 options displayed.
* Clicking link displays 5 more options.
* When all options are displayed, link no longer shows.

## Design mockups

* This pattern exists in VAOS on the facility and provider sections of the "Start scheduling" flow.
* [Sketch file](https://sketch.com/s/f9772b47-772c-4a66-bfcf-1f677230d9f4) detailing interaction.

## Accessibility notes

None.

## Research

None.
