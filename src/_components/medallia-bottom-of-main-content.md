---
layout: pattern
title: Feedback
intro-text: VA asks users of VA.gov for feedback via a feedback button and form provided by Medallia.
contributor: Ian McCullough (VSP Contact Center)
draft: true
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Accessibility considerations
  - anchor: Research
---

## Usage

### When to use Feedback

* TODO: Explain when we collect feedback and when we do not. This may equate and align to when the Feedback button is currently present on the page. 

### When to consider something else

* TODO: Describe any scenarios where the Feedback button should not, or does not, appear.

## Examples

<img width="400" alt="About VA health benefits page screenshot with callouts" src="https://user-images.githubusercontent.com/73119703/169309597-e810c224-6058-4834-94a8-576fee5cecc2.png" >

1. **Main Content**. Content, including any left or right rail sections, within the main content of the page between the header and footer, but above the Back to Top/Last Updated/Feedback section.
2. **Back to Top Button**. Button that scrolls the user back to the top of the page when clicked. This button does not appear on all VA.gov pages.
3. **Date updated**. The date on which the page was most frequently updated. This text does not appear on all VA.gov pages.
4. **Medallia Feedback Button**. Button that launches a modal window that contains the Medallia feedback survey. This button does not appear on all VA.gov pages.

### Feedback form in modal

* TODO: Add example

## How to design and build 

### Layout details

The Medallia Feedback button sits at the bottom of the main content within the context of other elements. In addition to the Feedback button, the bottom of the main content can also contain:

* Date last updated
* Back to top button

These three elements are not present on every page, and multiple variations can be found. For example, the [articles search results page]([https://www.va.gov/resources/va-account-and-profile/) has the back to top and feedback buttons, but no 'date last updated' text. The [signing in to VA.gov page](https://www.va.gov/resources/signing-in-to-vagov/) has all three elements.

To better establish user expectations of location, appropriate space will be provided for an element regardless of it's presence or absence. This creates a cohesive pattern that does not shift in size or location, even if one or two of the elements are not present on a particular page. The width of the pattern is also dynamically determined by the width of the main content container.

### How this pattern works

* Users trigger the feedback interaction when clicking on the Feedback button. 
* This opens a modal window that contains a form, shown above. 
* After submitting the form the user sees a "Thank you" screen which can then be dismissed with a primary "Close" button. Focus is returned to the Feedback button.

### Components used in this pattern

* [Back to top](https://design.va.gov/components/back-to-top)
* [Button - Primary](https://design.va.gov/components/button/#primary-button) 

### This pattern in production

#### Desktop

**[Manage your VA debt – Desktop](https://www.va.gov/manage-va-debt/)**

<img width="400" alt="Manage Your VA Debt Veterans Affairs Desktop Screenshot" src="https://user-images.githubusercontent.com/73119703/169309397-d10161b3-e862-48f1-9879-49b4f766174f.png">


**[All articles in: VA account and profile – Desktop](https://www.va.gov/resources/va-account-and-profile/)**

<img width="400" alt="All Articles In VA Account And Profile Veterans Affairs Desktop Screenshot" src="https://user-images.githubusercontent.com/73119703/169309056-c6de2ad2-d4b6-4967-998e-5a1fa368d0dc.png">


#### Mobile _(400 px width)_

**Manage your VA debt – Mobile**

<img width="200" alt="Manage Your VA Debt Veterans Affairs Mobile Screenshot" src="https://user-images.githubusercontent.com/73119703/169310958-d1c1aa40-6605-419f-9756-427b2526c2a8.png">

**All articles in: VA account and profile – Mobile**

<img width="200" alt="All Articles In VA Account And Profile Veterans Affairs Screenshot" src="https://user-images.githubusercontent.com/73119703/169311294-b43d0f8c-7b89-4451-aba7-ec268cf85116.png">


## Accessibility considerations

Accessibility considerations are forthcoming.

## Research

The previous location of the Medallia Feedback button was sticky on the right side of the browser window. This button had 508 accessibility issues on all platforms, and was removed from mobile due to display issues. By moving the button to the bottom of the main content, the accessibility issues were resolved and the button was able to be added to mobile breakpoints.

### Usability Studies

In late fall 2021, [VA.gov](http://va.gov/) transitioned from utilizing Foresee to Medallia to capture user feedback. This transition was accompanied by 2 usability testing sessions to test button location and button design. In both studies, the question “You would like to submit feedback on this Find VA Locations page on the [VA.gov](http://va.gov/) website. What would be your process for submitting that feedback?” was asked.

**Study 1:**

- 1 of 7 participants found the button in the sidebar. 
- 5 of 7 participants looked in the footer.

**Study 2:**

- 6 of 11 participants found the button in the sidebar.
- 6 of 11 participants looked in the footer.

*Note, in some instances during the second study, participants would look in the footer prior to finding the button in the sidebar.*

### Feedback Submission Comparison

To track the effectiveness of moving the feedback button to the bottom of the main content area, we compared the number of submissions on a single page before and after the button move.


| **Page**                                                     | **Jan 1 - Jan 31 submissions** | **Feb 10 - Mar 12 submissions** | **% increase** |
| :----------------------------------------------------------- | :----------------------------- | :------------------------------ | :------------- |
| [Find locations](https://www.va.gov/find-locations)          | 92                             | 247                             | 168%           |
| [Schedule and manage health appointments](https://www.va.gov/health-care/schedule-view-va-appointments/) | 32                             | 74                              | 131%           |
| [**View disability rating**](https://www.va.gov/disability/view-disability-rating/rating) | 19                             | 35                              | 84%            |
| [**File for disability compensation with VA Form 21-526EZ Confirmation**](https://www.va.gov/disability/file-disability-claim-form-21-526ez/confirmation) | 10                             | 138                             | 1280%          |
| [**Check Your Post-9/11 GI Bill Benefits Status**](https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/status) | 17                             | 91                              | 435%           |

Both date ranges span 31 days, and the dates from January are submissions from the button on the sidebar. The February and March dates are submissions from the bottom of the main area (the button moved on Feb. 10).

**Mobile feedback**

In addition to the button being relocated on the desktop view, it was added to the mobile breakpoints as well. Previous 508 accessibility issues prevented the button from being displayed on the sidebar of mobile screens. From February 10 to March 12, there were 9,449 feedback submissions, 2,215 of which were mobile, or 23.4% of all submissions.


