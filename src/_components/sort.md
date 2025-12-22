---
layout: component
title: Sort
permalink: /components/sort/
# contributors: Command separated list of contributor names with (org name) following, if applicable
draft: false
web: true
mobile-app: false
intro-text: "The Sort component enables users to reorder search results and lists of information in a way that is easier to analyze."
# github-title: va-component-name - Only use this if the component is not actually a web component and thus just needs a label that matches that format.
# research-title: Use this to match the label in the research repo. Only use if web-component does not match the label.
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/ZCvzpF0EbyeCbO4fL9u8r0/VADS-Component-Library?m=auto&node-id=40936-5762&t=JVGxloXD7xd6RgeE-1
# figma-link-mobile-app: https://www.figma.com/design/Zzt8z60hCtdEzXx2GFWghH/VA-Mobile---Component-Library?node-id=224-314
status: use-with-caution-candidate
# web-component: va-sort
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Privacy guidance
  - anchor: Related
---

## Examples

### Medications
{% include component-example.html alt="Example of the medications on the Medications page sorted by newest to oldest last fill date." file="/images/components/sort/medications_sort.png" caption="Sorting medications by last fill date." width="50%" %}

### Find a Form
{% include component-example.html alt="Example of forms sorted by last update (newest to oldest) on VA.gov's form finder" file="/images/components/sort/find_a_form_sort.png" caption="Sorting forms on VA.gov's form finder." width="50%" %}

### Secure Messaging
{% include component-example.html alt="Example of messages sorted by send date (newest to oldest) in the MyHealtheVet Inbox" file="/images/components/sort/inbox_sort.png" caption="Sorting messages by last updated (newest to oldest) in the MyHealtheVet Inbox." width="50%" %}


## Usage

### When to use Sort

* **When there are clear, meaningful ways to sort.** Sort options should provide utility to the user by representing user goals. Some contexts could include:
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


## Behavior

### Web

* **User clicks the dropdown to open a list of sort options.** Alternatively, a screen-reading user may arrow up and down the list without opening the menu. These behaviors are identical to the [Select]({{ site.baseurl }}/components/form/select) component's because Select is used as the foundation.

* **Results automatically update upon selecting a sort option.** This is known as implicit submission.
    * **Why implicit submission?**
        * The Design Systems Council has determined this to be the most common, expected behavior and has worked with accessibility specialists to identify important [considerations](#accessibility-considerations) that mitigate its shortcomings to the assistive technology user experience.
        * The alternative to allow a user to explicitly confirm their sort choice with a button was found to be easily missed--a 2024 [VA.gov Medications Round 3 study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2024-05-medications-usability-testing-round3-AT/research-findings.md#:~:text=6%20of%2011%20participants%20missed%20the%20%E2%80%98Sort%E2%80%99%20button%20after%20selecting%20the%20sort%20option.%20Vision%20did%20not%20seem%20to%20play%20a%20role%20in%20who%20missed%20the%20button%20as%204%20of%20the%206%20were%20sighted.%20One%20screen%20reader%20dependent%20user%20did%20mention%20missing%20things%20because%20of%20his%20speed.) found that...
    > "6 of 11 participants missed the `Sort` button after selecting the sort option. Vision did not seem to play a role in who missed the button as 4 of the 6 were sighted. One screen reader dependent user did mention missing things because of his speed".


* **The sort should apply to the entire data set, not just the data available in a paginated view.** This means the sort resets the results to page 1.

* **A sort action should not unexpectedly disappear.** When navigating through paginated results or refreshing the page, the sort criteria must persist.

* **Sizing and alignment differ on mobile and desktop.**
    * On desktop resolutions, the width is pre-defined and fixed. The *Sort by* label is in-line with the dropdown.
        * Choose either the Medium (md), Large (lg), or Extra Large (xl) size, whichever avoids truncating the longest sort option. 
    * On mobile resolutions, the component is responsive and full-width. The *Sort by* label is stacked on top of the dropdown.



### Placement

* **Sort should be placed above and aligned with the content that it affects.** It serves as a visual indicator of the current order.



### Mobile app

* **The VA mobile app does not currently use this component.** It uses its own combined Filter & Sort button that opens a modal to select and explicitly submit sort and filter options.
    * The naming of sort options must still remain consistent across mobile and desktop experiences.



## Code Usage
* **Format times and dates in a way that will ensure a correct chronological sort.** Consider storing dates as a date type or ISO-formatted string. 
    * Attempting to sort dates as strings like *2/20/2025*, *10/1/2024*, *9/5/2023* from newest to oldest, for example, could result in an A-Z sort:
        * ***1****0/1/2024*
        * ***2****/20/2025*
        * ***9****/5/2023*
    * A true chronological sort by year, month, then day would instead be:
        * *2/20/****2025***
        * *10/1/****2024***
        * *9/5/****2023***


## Content considerations

### Must
* **A default sort option must always be provided.** It should be the one that users would expect the most. In Search contexts, *Relevance* is often the default. 
    * The default *- Select-* option that is native to the Select component should not be available to the user, even within the menu.

* **Name sort options consistently.** Sort options (aside from the option to sort by *Relevance* or another algorithmic method) must follow this convention:
    * `[Sort attribute](sort method)`
        * `[Sort attribute]` represents what the results are being sorted by.
            * This could be things like medication names, entry dates, remaining refills, distance, etc.
        * `(Sort method)` represents how the results are sorted. Teams should aim to align the naming with the following list:
            * **Alphabetical**
                * A to Z      
            * **Chronological**
                * Newest to oldest
            * **Numerical**
                * Least to most
                * Closest to furthest
                * Smallest to largest
                * Lowest to highest
                * Shortest to longest
        * **Note:** `Sort method` should not be used as a standalone sort option. If a sort attribute label is not visually defined in the results, define the attribute in the sort options. 
            * For example, if a Vaccine history card only contains *Jan 22, 2025*, the sort option should be something like *Date received (newest to oldest)*.
    * Examples of sort options that follow the naming convention: 
        *  *Medication name (A to Z)*
        *  *Date entered (newest to oldest)*
        *  *Refills remaining (least to most)*
        *  *Distance (closest to furthest)*


* **Sort option labels must be aligned across mobile and desktop experiences.** If the mobile experience for Prescriptions uses *Date filled (newest to oldest)*, then the desktop experience should use the same as opposed to using something like *Fill date (newest to oldest)*.


### Should

* **Users should be able to sort data in both directions.** For example, a user should be able to sort medication names from A to Z and Z to A.
    * Sorting in the opposite direction is not necessary if it doesn't reasonably represent a user goal. For example, it may not make sense to allow a user to sort VA locations from furthest to closest.

* **Only include a sort option if it is relevant to the user.** Just because information can be sorted does not mean it should. Use best judgement to determine whether a user would reasonably need a sort option. 

* **When sorting accompanies filtering or other results, a description of the sort event should be added to the [results description](https://design.va.gov/templates/search-results#results-description:~:text=the%20sorting%20options.-,Results%20description,-Text%20describing%20how).** For example, “Showing 1–10 of 999 results for "2020" with 5 filters applied, sorted by [Sort attribute](sort method).” 

## Accessibility considerations

### Must
* Use semantic HTML `label` + `select`.
* Implement live region updates that announce sorting changes to the dataset and page context using `aria-live="polite"`. Ensure only one live region is active.
* Add `aria-busy` on the results container during asynchronous updates.
* Ensure DOM reordering reflects the visual order ([WCAG 1.3.2](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)).
* The sort control must use a native `<select>` element for predictable keyboard and AT behavior.  
* Changing a sort value must not cause unexpected navigation; only the relevant results region updates.
* The focus must remain stable and visible after sorting. This prevents disorienting users who may not expect implicit submission to change their context.
<!-- * Live region must announce sorting changes with dataset and page context.-->
<!--Defined in behavior* The sort must re-sort the entire data set, not just the data available in a paginated view.-->
<!--* When navigating through paginated results, the sort criteria must be maintained.-->
* Follow [loading state rules]({{ site.baseurl }}/components/loading-indicator) for sorting that may take awhile.
<!-- Defined in Behavior * Focus stay on sort component after a selection is made-->
<!-- Defined in Behavior and combined with maintaining sort criteria for navigating paginated results * When sorting paginated results, the dataset resets the user to page 1.-->

### Should
* Debounce network requests when multiple sorts occur in quick succession or delay the `onchange` event to check for another option selection. This prevents assistive technology users who do not open menus from prematurely making a selection while exploring sort options.
* Announce loading states using `aria-busy`.
<!--* Reset sort and filtered views when the browser is refreshed-->
<!-- Defined in Behavior * When a page is refreshed by the user, the sort selection should persist-->
* Should not support `<optgroup>`.



## Related

* [USWDS Table Component](https://designsystem.digital.gov/components/table/#guidance)

<!--{% include _component-checklist.html component_name=page.web-component %}-->