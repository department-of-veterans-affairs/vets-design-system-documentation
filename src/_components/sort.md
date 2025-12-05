---
layout: component
title: Sort
permalink: /components/sort/
# contributors: Command separated list of contributor names with (org name) following, if applicable
draft: true
web: true
mobile-app: false
intro-text: "The Sort component enables the user to reorder search results and lists of information in a way that is easier for them to interpret."
# github-title: va-component-name - Only use this if the component is not actually a web component and thus just needs a label that matches that format.
# research-title: Use this to match the label in the research repo. Only use if web-component does not match the label.
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=0%3A1&mode=design&t=3RlM8TiFaDLH4OAE-1
# figma-link-mobile-app: https://www.figma.com/design/Zzt8z60hCtdEzXx2GFWghH/VA-Mobile---Component-Library?node-id=224-314
status: use-with-caution-candidate
web-component: va-sort
---

<!--## Examples

 <!--  Use tabs to consolidate examples if you have both web and mobile app examples. See the buttons component page for an example 

### Web

#### Default

{% include storybook-preview.html story="components-va-component-name--default" link_text=page.web-component %}

#### Variation 1

Add Storybook examples as necessary.

#### Variation 2

Add Storybook examples as necessary.

### Mobile app

### Variation 1

Add Storybook examples as necessary.-->

## Usage

### When to use Sort

* **When there are clear, meaningful ways to sort.** Sort options should represent different user goals. Some contexts could include:
    * Search results 
    * Medications
    * Appointments
    * Secure messages
    * Claims
    * History 

* **When there is more than one page of results or more than 10 items.**


### When to consider something else

* **When order of data does not impact the results or interpretation.** 
* **When there's only one obvious order.** This means that there should be a minimum of two ways to sort in order to use the component.
* **When the goal is to narrow results down**. Use a [Filter]({{ site.baseurl }}/components/search-filter) instead.

<!--The Sort component uses the Select component as the foundation with some design, content, and accessibility considerations locked in.-->

## Behavior

### Web

* **User clicks the dropdown to open a list of sort options.** Alternatively, a screen-reading user who does not traditionally "open" a menu can arrow up and down the menu.

* **Results automatically update upon selecting a sort option.** This is known as implicit submission. 
    * **Why implicit submission?**
    This seems to be the most common and expected behavior. The alternative was to allow a user to explicitly confirm their sort option with a button (which has fewer accessibility concerns). However, a [VA.gov Medications Round 3 study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2024-05-medications-usability-testing-round3-AT/research-findings.md#:~:text=6%20of%2011%20participants%20missed%20the%20%E2%80%98Sort%E2%80%99%20button%20after%20selecting%20the%20sort%20option.%20Vision%20did%20not%20seem%20to%20play%20a%20role%20in%20who%20missed%20the%20button%20as%204%20of%20the%206%20were%20sighted.%20One%20screen%20reader%20dependent%20user%20did%20mention%20missing%20things%20because%20of%20his%20speed.) found that...
> "6 of 11 participants missed the `Sort` button after selecting the sort option. Vision did not seem to play a role in who missed the button as 4 of the 6 were sighted. One screen reeader dependent user did mention missing things because of his speed".

    In order to prevent a screen-reading user from prematurely making a sort selection, a debounce or delay should be implemented.

* **The sort should re-sort the entire data set, not just the data available in a paginated view.** This means the sort resets the results to page 1.

* **The focus must remain stable and visible after sorting.**

* **A sort action should not unexpectedly disappear.** When navigating through paginated results or refreshing the page, the sort criteria must persist.

<!--* **(TBD) The component is responsive and full-width on mobile resolutions.** On desktop, the maximum width of the component is 347px, which can fit approximately 34 characters before getting cut off. It is recommended to use a size that does not cut off sort options. -->

* **Sizing and alignment differ on mobile and desktop.**
    * On desktop resolutions, the width is pre-defined and fixed. The *Sort by* label is in-line with the dropdown.
        * Choose either the Medium or Large size, whichever avoids truncating the longest sort option. The Extra Large size is available but not recommended due to mobile truncation concerns.
    * On mobile resolutions, the component is responsive and full-width. The *Sort by* label is stacked on top of the dropdown.

<!--recommended choosing a pre-defined size that fits the longest sort option to avoid truncation.-->




<!--* **(TBD) A text description of the results should update with how many results are being shown.** The implementation should follow this format:
> Showing 1-10 of results.-->



### Placement

* **Sort should be placed above and aligned with the content that it affects.** It serves as a visual indicator of the current order.



### Mobile app

* **The VA mobile app does not currently rely on this component.** It uses it's own combined Filter & Sort button that opens a modal to select and submit sort and filter options.
    * The naming of sort options must still remain consistent across mobile and desktop experiences.

<!--*Only the web version of this component is available as the VA Mobile app does not currently have a use case for a standalone Sort component. However, sort options that exist in the mobile app experiences should still align with the sort options in their desktop counterparts.
* The VA Mobile app does use a combined Filter and Sort button that opens a modal that allows users to select and submit filters/sort options. --> 



<!--## Code Usage
This is the Code Usage section. Note that the header is inside this include.-->
<!-- include component-docs.html component_name=page.web-component  -->

## Content considerations

### Must
* **A default sort option must always be provided.** It should be the one that users would expect the most. In Search contexts, *Relevance* is often the default. 
    * The default *- Select-* option that is native to the Select component should not be available to the user, even within the menu.

<!--
Alpha sort would be "[Data label] (A to Z)" - i.e. Form name (A to Z)
Date sort would be "[Data label] (newest)- i.e. Revision date (newest first)
Numeric sort would be "[Data label] (high to low) - i.e. Form number (high to low)
A relevancy sort could be something like "Most relevant" or "Recommended" - those are different in meaning and logic.-->

* **Name sort options consistently.** Sort options (aside from the option to sort by Relevance or another algorithmic method) must follow this convention:`[Sort attribute](sort method)`. For example:
    - *Date entered (newest to oldest)*
    - *Medication name (A to Z)*
    - *Refills remaining (least to most)*
    
    While the `[Sort attribute]` can vary greatly, `[sort methods]` should be consistent. Deviations are permissible depending on the context, but teams should aim to align with the following list:
    - **Alphabetical**
        - A to Z      
    - **Chronological**
        - Newest to oldest
    - **Numerical**
        - Least to most
        - Closest to furthest
        - Smallest to largest
        - Lowest to highest
        - Shortest to longest


* **Sort option labels must be aligned across mobile and desktop experiences.** If the mobile experience for Prescriptions uses *Date filled (newest to oldest)*, then the desktop experience should use the same as opposed to using something like *Fill date (newest to oldest)*.

* **If there is no visible label for the sort attribute, create one for the sort option.** A standalone `Sort method` (aside from Relevance or another algorithmic method) is not recommended.

<!--OPTION 2:
* **Follow general sort option naming conventions.** Here are some common ways to sort information. This list has been provided below as a guideline but can be modified in whatever way makes the most sense according to the context.
    - **Alphabetically**
        - A to Z      
    - **Chronologically**
        - Newest to oldest
    - **Numerically (depends on context)**
        - Least to most
        - Smallest to largest
        - Lowest to highest
        - Shortest to longest
    - **Algorithmically**
        - Relevance

**Note:** If a sort attribute is available, follow this naming convention:
    - [Sort attribute name] (general sort method)
        - For example, *Date entered (newest to oldest)*. 
    - Avoid shortening the general sort.
        -  For example *Date entered (newest to oldest)* should not be shortened to *Date entered (newest)*.-->
### Should

* **Users should be able to sort data in both directions.** For example, a user should be able to sort medication names from A to Z and Z to A.
    * Sorting in the opposite direction is not necessary if it doesn't reasonably represent a user goal. For example, it may not make sense to allow a user to sort VA locations from furthest to closest.

* **Only include a sort option if it is relevant to the user.** Just because information can be sorted does not mean it should. Use best judgement to determine whether a user would reasonably need a sort option. 

* **When sorting accompanies filtering or other results, a description of the sort event should be added to the [results description](https://design.va.gov/templates/search-results#results-description:~:text=the%20sorting%20options.-,Results%20description,-Text%20describing%20how).** For example, “Showing 1–10 of 999 results for "2020" with 5 filters applied, sorted by `[Sort attribute](sort method)`.” 


## Accessibility considerations

<!--* **Navigating sort options as a keyboard user.** To prevent keyboard users from prematurely making a selection while navigating sort options, implement a delay or debounce.
* **Keyboard Focus.** Upon selection, the focus stays on the sort component with the menu closed.
* **Announcing changes with a aria-live region.** After the user makes a selection, an aria-live region should announce that the results have been updated in addition to how those results are sorted by.-->

### Must

* The sort control must use a native `<select>` element for predictable keyboard and AT behavior.  
* Changing a sort value must not cause unexpected navigation; only the relevant results region updates.  
* Live region must announce sorting changes with dataset and page context.  
<!--Defined in behavior* The sort must re-sort the entire data set, not just the data available in a paginated view.-->
<!--* When navigating through paginated results, the sort criteria must be maintained.-->
* Following [Loading state rules]({{ site.baseurl }}/components/loading-indicator) for sorting that may take awhile.
<!-- Defined in Behavior * Focus stay on sort component after a selection is made-->
<!-- Defined in Behavior and combined with maintaining sort criteria for navigating paginated results * When sorting paginated results, the dataset resets the user to page 1.-->

### Should
* Announce loading states using `aria-busy`.
<!--* Reset sort and filtered views when the browser is refreshed-->
<!-- Defined in Behavior * When a page is refreshed by the user, the sort selection should persist-->
* Should not support `<optgroup>`.


<!--### Consider-->
<!-- Source: Search filter

Follow these accessibility guidelines when sorting your search results:
 
* **Move focus to results.** After selecting a sort criteria, move focus to the results heading or summary. This orients users and helps them find updated content quickly.

* **Announce updates after sorting.** Use an ARIA live region to announce the [results description](https://design.va.gov/templates/search-results#results-description:~:text=the%20sorting%20options.-,Results%20description,-Text%20describing%20how) when results have updated, including the number of results found. This helps screen readers users know their action was successful.  (Should we include the sorting method?)

* **Preserve the sorted state.** Make sure selected sort method remains visible and accessible after results update, so users always know what sort method is active. 

* **Announce loading states.** If results take time to update, use an ARIA live region to let users know results are loading.

* **Provide clear error messages.** If there's an error applying a sort, show a clear message and announce it for screen reader users. Use simple, direct language. 


<!-- ## Related

* Links to related components.

This is the Component checklist section. Note that the header is inside this include.
<!-- include _component-checklist.html component_name=page.web-component -->


