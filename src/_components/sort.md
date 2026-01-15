---
layout: component
title: Sort
permalink: /components/sort/
# contributors: Comma separated list of contributor names with (org name) following, if applicable
draft: false
web: true
mobile-app: false
intro-text: "The Sort component allows users to reorder search results and lists of information to make information easier to analyze."
# github-title: va-component-name - Only use this if the component is not actually a web component and thus just needs a label that matches that format.
# research-title: Use this to match the label in the research repo. Only use if web-component does not match the label.
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=40936-5762&t=RJz70e6yAZDcvGY3-1

status: use-with-caution-candidate
# web-component: va-sort

anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

## Examples

### Medications

#### Mobile
{% include component-example.html alt="Mobile example of medications on the My HealtheVet Medications page placed below the Filter and above the search results." file="/images/components/sort/medications_sort_mobile.png" caption="Mobile example of My HealtheVet medications sorted by last fill date (newest to oldest) alongside the Search Filter component." width="25%" %}

#### Desktop
{% include component-example.html alt="Desktop example of medications on the My HealtheVet Medications page placed below the Filter and above the search results" file="/images/components/sort/medications_sort.png" caption="Desktop example of My HealtheVet medications sorted by last fill date (newest to oldest) alongside the Search Filter component." width="50%" %}

### Questions
{% include component-example.html alt="Desktop example of Sort placed below the Search Input component, separated by a divider with the Search Filter in a column to the left." file="/images/components/sort/askva_sort_search_input_filter.png" caption="Desktop example of AskVA questions sorted by last updated (newest to oldest) alongside the Search Input and Search Filter components." width="50%" %}

### Find a Form
{% include component-example.html alt="Screenshot of the VA Find a Form search results page showing a Sort by dropdown set to the default option above a list of form results." file="/images/components/sort/find_a_form_sort.png" caption="Desktop example of VA forms sorted by relevance on VA Find a Form." width="50%" %}

### Secure Messaging
{% include component-example.html alt="Example of messages sorted by send date (newest to oldest) in the My HealtheVet Inbox" file="/images/components/sort/inbox_sort.png" caption="Desktop example of messages sorted by last updated (newest to oldest) in the My HealtheVet Inbox." width="50%" %}


## Usage

### When to use Sort

* **When there are clear, meaningful ways to sort.** Sort options should help users achieve their goals. Common contexts include:
    * Search results 
    * Medications
    * Appointments
    * Secure messages
    * Claims
    * History 

* **When there is more than one page of results or more than 10 items.**


### When to consider something else

* **When the order of data doesn't affect the results or how users understand them.**
* **When there's only one obvious order.** You need at least two sort options to use this component.
* **When you want to narrow results down.** Use a [Filter]({{ site.baseurl }}/components/search-filter) instead.
    * For example, don't use Sort to filter by date ranges. <img src="{{ site.baseurl }}/images/components/sort/sort_nonexample.png" alt="Nonexample where Sort is being used to filter by a date range" style="width:50%;"/>
* **When sorting within a table**, use the sort columns baked into the `va-table` component.

## Behavior

### Web

* **User clicks the dropdown to open a list of sort options.** Alternatively, a screen-reader user may arrow up and down the list without opening the menu. The Sort component uses the [Select]({{ site.baseurl }}/components/form/select) as the foundation and shares similar behavior.

* **Results automatically update when you select a sort option.** This is known as implicit submission.
    * **Why implicit submission?**
        * Using a button to confirm a sort choice (explicit submission) was found to be easily missed. A 2024 [VA.gov Medications Round 3 study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2024-05-medications-usability-testing-round3-AT/research-findings.md#:~:text=6%20of%2011%20participants%20missed%20the%20%E2%80%98Sort%E2%80%99%20button%20after%20selecting%20the%20sort%20option.%20Vision%20did%20not%20seem%20to%20play%20a%20role%20in%20who%20missed%20the%20button%20as%204%20of%20the%206%20were%20sighted.%20One%20screen%20reader%20dependent%20user%20did%20mention%20missing%20things%20because%20of%20his%20speed.) mentions:
        > "6 of 11 participants missed the `Sort` button after selecting the sort option. Vision did not seem to play a role in who missed the button as 4 of the 6 were sighted. One screen reader dependent user did mention missing things because of his speed."
        * The Design Systems Council met with multiple product teams and accessibility specialists to align on implicit submission (supplemented with important [accessibility considerations](#accessibility-considerations)) as the expected behavior.

* **Sort applies to the entire data set, not just the current page.** When you sort, the paginated results reset to page 1.

* **Sort selections persist across interactions.** The sort criteria should remain when users navigate through paginated results or refresh the page.

* **Sizing and alignment differ on mobile and desktop.**
    * On desktop resolutions, the width is fixed and the *Sort by* label is in line with the dropdown.
        * Choose Medium (md), Large (lg), or Extra Large (xl) size, whichever prevents truncating the longest sort option.
    * On mobile resolutions, the component is full-width and responsive. The *Sort by* label is stacked on top of the dropdown.



### Placement

* **Place Sort above and aligned with the content that it affects.** It serves as a visual indicator of the current order.
* **If used in conjunction with the Search Filter, place Sort after the [results description](https://design.va.gov/templates/search-results#results-description:~:text=the%20sorting%20options.-,Results%20description,-Text%20describing%20how).** This prevents the situation where the keyboard focus skips the Sort component.


### Mobile app

* **The VA mobile app does not currently use this component.** It uses its own combined Filter & Sort button that opens a modal to select and explicitly submit sort and filter options.
    * <img src="{{ site.baseurl }}/images/components/sort/va_mobile_filter_sort.png" alt="A Filter and Sort button that opens a modal that allows a user to explicitly submit sort and filter options." style="width:100%;"/>

* **The naming of sort options must still remain consistent across mobile and desktop experiences.**



## Code usage
* **Relying on an API to sort and paginate data is permissible.** If sorting data on the frontend is more efficient, remember to format times and dates in a way that will ensure a correct chronological sort.
    * Store date and time as an [ISO-formatted string](https://en.wikipedia.org/wiki/ISO_8601#:~:text=Date%20and%20time%0Ain,00%20UTC%E2%88%9212%3A00) (date and time in UTC or date and time with offset).
        * Attempting to sort dates as strings like *2/20/2025*, *10/1/2024*, *9/5/2023* from newest to oldest, for example, could result in a non-chronological A-Z sort:
            * ***1****0/1/2024*
            * ***2****/20/2025*
            * ***9****/5/2023*
        * A true chronological sort by year, month, then day would instead be:
            * *2/20/****2025***
            * *10/1/****2024***
            * *9/5/****2023***


## Content considerations

### Content expectations
* **Provide a default sort option** that reflects what users expect in the given context. In search experiences, *Relevance* is often the default.
    * Don't present a placeholder option (such as *- Select -*) as a selectable sort choice.

* **Name sort options clearly and consistently** so users understand both *what* is being sorted and *how* it's ordered.
    * Use this convention: `[Sort attribute] (sort method)`
        * `[Sort attribute]` describes what the results are sorted by (for example, medication name, entry date, or distance).
        * `(Sort method)` describes the ordering. Use familiar, plain language terms such as:
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
    * **Note:** Avoid offering a sort method on its own without clearly identifying the attribute being sorted.
        * For example, if a Vaccine history card only shows a date value, use a label like *Date received (newest to oldest)* rather than *Newest to oldest*.
    * Examples of clear and consistent sort option labels include:
        * *Medication name (A to Z)*
        * *Date entered (newest to oldest)*
        * *Refills remaining (least to most)*
        * *Distance (closest to furthest)*

    * **Keep sort option labels consistent across mobile and desktop.** For example, if mobile uses *Date filled (newest to oldest)*, desktop should use the same wording—not something different like *Fill date (newest to oldest)*.


### Additional guidance
* **Consider allowing users to sort in both directions**—for example, A to Z and Z to A.
    * Offering both directions isn't necessary when the reverse order wouldn't be meaningful or useful for users' goals. For example, it may not make sense to sort VA locations from furthest to closest.
  
* **Only include sort options that provide clear value.** The ability to sort data doesn't automatically mean it will help users.

* **Sort does not need to be reflected in the [results description](https://design.va.gov/templates/search-results#results-description:~:text=the%20sorting%20options.-,Results%20description,-Text%20describing%20how) for web and mobile.** The component already acts a visual indicator of the order. However, it is required for the mobile app since the sorting state is hidden within the modal.



## Accessibility considerations
These considerations describe how sorting changes are communicated and experienced by users of assistive technologies.

### User experience expectations
* When a sort option is selected, users need to be informed that the results have updated. This is especially important for screen reader users who may not see the visual change.
* Sorted results should update in a meaningful and predictable order so all users perceive the same sequence of information ([WCAG 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)).
* Sorting updates the results in place and does not trigger page navigation or a full context change.
* Focus remains stable on the sort control during sorting so users can continue interacting without losing their place.
* If sorting takes time, inform users that an update is in progress by following the [loading indicator guidance]({{ site.baseurl }}/components/loading-indicator).

### Implementation notes
* Announce sorting changes in a non-disruptive way using `aria-live="polite"` so assistive technology users understand that results have changed without interrupting their workflow.
* Account for assistive technology interaction patterns where users may move through select options without opening the menu. Avoid triggering unnecessary updates while a user is exploring options. Engineers should debounce network requests or delay the `onchange` event to check for another option selection.
* Optgroups aren't supported in the `va-sort` component.



## Related

* [Select]({{ site.baseurl }}/components/form/select)
* [Search Input]({{ site.baseurl }}/components/search-input)
* [Search Filter]({{ site.baseurl }}/components/search-filter)
* [Search Results]({{ site.baseurl }}/templates/search-results)
* [USWDS Table Component](https://designsystem.digital.gov/components/table/#guidance)

<!--{% include _component-checklist.html component_name=page.web-component %}-->
