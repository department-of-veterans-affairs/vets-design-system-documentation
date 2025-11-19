---
layout: component
title: Sort
permalink: /components/sort/
# contributors: Command separated list of contributor names with (org name) following, if applicable
draft: true
web: true
mobile-app: true
intro-text: "This component reorders information so that users can find relevant information quickly and easily. "
# github-title: va-component-name - Only use this if the component is not actually a web component and thus just needs a label that matches that format.
# research-title: Use this to match the label in the research repo. Only use if web-component does not match the label.
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=0%3A1&mode=design&t=3RlM8TiFaDLH4OAE-1
# figma-link-mobile-app: https://www.figma.com/design/Zzt8z60hCtdEzXx2GFWghH/VA-Mobile---Component-Library?node-id=224-314
status: use-with-caution-candidate
web-component: va-sort
---

## Examples

 <!--  Use tabs to consolidate examples if you have both web and mobile app examples. See the buttons component page for an example -->

### Web

#### Default

{% include storybook-preview.html story="components-va-component-name--default" link_text=page.web-component %}

#### Variation 1

Add Storybook examples as necessary.

#### Variation 2

Add Storybook examples as necessary.

### Mobile app

### Variation 1

Add Storybook examples as necessary.

## Usage

The Sort component can be used to reorder information alphabetically, chronologically, numerically, or by any other specified criteria. This allows information to be organized in a way that makes it easier to analyze or interpret for the user. 

### When to use search sort

* **When users benefit from seeing information in a different order.** As a guideline, use Sort when there is more than one page of results or more than 10 items.
    - Common contexts include the following:
        - Medications
        - Appointments
        - Secure messages
        - Claims
        - History

* **When there are clear, meaningful ways to sort.** Sort options should represent different user goals. Some common ways include sorting alphabetically, chronologically, or numerically.

<!--* **Use sort when there exist ways to sort by and when there is more than 3 results.** For example, sort can be used in these scenarios: 
    - To find medication history alphabetically
    - **Note:** User research is recommended to determine if Sort would be helpful or what criteria would be helpful in specific
* **Sorting can be useful when there are lists of the following:**  
    - Medications
    - Appointments
    - Secure messages
    - Claims
    - History 
    
    within a form
    - on a search results page
    - within a form AND viewing search results
    - within a knowledge base such as Resources and support
    - in a table
-->

### When to consider something else

* **When filtering would be more appropriate.** Sorting changes result order whereas Filters narrow down results. 
* **When order is not relevant.** If the order of data does not impact the results or interpretation, sorting is not necessary.
* **When there's only one obvious order**. If there's only one meaningful or possible way to sort, leave this component out.

<!--Explain which scenarios or user context where this component is not, or should not, be used.
* **Not for these tasks.** Explain the user tasks where this component is not, or should not, be used.
* **Use this instead.** Explain when another component should be used instead.-->

### How this component works
The Sort component uses the Select component as the foundation.
 

<!--Details the design decisions inherent to the component.-->


## Behavior

### Web

* **Trigger.** User clicks the dropdown menu to open a list of sort options.
* **Feedback.** Upon selection, the menu closes and the results automatically update (implicit submission). 
* **Keyboard Focus** Upon selection, the focus stays on the sort component with the menu closed.

### Mobile

The VA Health & Benefits app currently does not use this Sort component. It instead uses a combined Filter and Sort button that opens a modal that allows users to select and submit filters/sort options. 

<!--## Web and Mobile Parity

Web 

Mobile 

-->

<!-- #### Choosing between web variations

Help the designer and developer understand when to choose between any variations of this component.
### Mobile app

Describe the key interactions for this component.

#### Choosing between mobile variations

Help the designer and developer understand when to choose between any mobile app variations of this component. -->

### Placement

Sort should be placed above and aligned with the content that it affects.

<!--
Where the component appears visually, and if necessary to clarify, where it may appear in the source code. Can also comment on where the component is not to be placed -->

<!-- ### Design principles

* List of design or UX principles that this component is an example or or adheres to.

### Instances of this component in production

Images with captions that describe different instances of this component being used in production.
-->

<!-- include component-example.html alt="Explain what is in the image." file="/images/components/component-name/filename.png" caption="Describe what this example image is depicting." --> 

## Code Usage
This is the Code Usage section. Note that the header is inside this include.
<!-- include component-docs.html component_name=page.web-component  -->

## Content considerations

* **Always provide a default sort option that users expect the most.** The default `- Select-` option should not be available to the user.
* **Only include a sort option if it is relevant to the user.** For example, don't sort Medication history by the alphabetical order of comments from an open text field.
* **Data should be able to be sorted both directions.** As a guideline, avoid sorting in only one direction. The opposite direction should be available to the user. This may be context-dependent.
* **The label for the sort option should align with the label of the sort attribute.** For example, if the label for the result's sort attribute is `Date filled:` *Oct 10th, 2025*, then the way the sort option should be labeled should be `Date filled (newest)` and `Date filled (oldest)`.
* **Sort option labels should be aligned across mobile and desktop experiences.** If the mobile experience for Prescriptions uses `Date filled (newest)`, then the desktop experience should use the same (as opposed to using something like `Fill date (newest)` and vice versa).
* **Follow general sort option naming conventions.** A list has been provided below as a guideline but can be modified in whatever way makes the most sense according to the context.
    - **Alphabetically**
        - Ascending (A-Z)
        - Descending (Z-A)
    - **Chronologically**
        - Newest to oldest
        - Oldest to newest
    - **Numerically**
        - Least to most
        - Most to least
        - Contextual alternatives:
            - Smallest to largest
            - Lowest to highest
            - Shortesst to longest
        <!--**Quantity**
            - Least to most
            - Most to least
        - **Size**
            - Smallest to largest
            - Largest to smallest
        - **Value**
            - Lowest to highest
            - Highest to lowest
        - **Length/duration**
            - Shortest to longest
            - Longest to shortest-->
    - **Algorithmically**
        - Relevance
    - **By sort attribute**
        - *Sort attribute* (general sort method)
            - For example, `Date entered (newest to oldest)`. This can be shortened to `Date entered (newest)` for brevity. 
    <!--Adding a sort attributes as an option can be added as way to introduce additional specificity and is permitted so long as the general sort method is included at the end in parentheses.--> 

<!--
* Ensure that the default sort option is the one that most users expect information to be sorted by.
    * For example, when a user is viewing their Vaccine history, the information should be expressed chronologically by default, meaning that the sort option should be "Date received (newest)".It may not make sense to organize Vaccine history alphabetically by default since history is usually chronological.
*  sort options to the sorting parameter name when possible.
    * For example, if the parameter that is being used to sort prescription history is "Last filled on [date]", the sort option should be "Last filled" rather than "Date last filled". This helps users maintain mental model of the sorting options.
* Allow users to sort the content by the factors that are most important to them. Results should be sorted by the option relevant to the content. 
 * For example, a global search should be sorted by relevance to the searched term or phrase. Whereas employment history would be sorted chronologically or by tenure.-->

<!--
Bulleted list of content related instructions to the designer.
* May be an include is shared with the Content style guide section.-->

## Accessibility considerations
<!-- Source: Search filter

Follow these accessibility guidelines when sorting your search results:
 
* **Move focus to results.** After selecting a sort criteria, move focus to the results heading or summary. This orients users and helps them find updated content quickly.

* **Announce updates after sorting.** Use an ARIA live region to announce the [results description](https://design.va.gov/templates/search-results#results-description:~:text=the%20sorting%20options.-,Results%20description,-Text%20describing%20how) when results have updated, including the number of results found. This helps screen readers users know their action was successful.  (Should we include the sorting method?)

* **Preserve the sorted state.** Make sure selected sort method remains visible and accessible after results update, so users always know what sort method is active. 

* **Announce loading states.** If results take time to update, use an ARIA live region to let users know results are loading.

* **Provide clear error messages.** If there's an error applying a sort, show a clear message and announce it for screen reader users. Use simple, direct language. 

* **Sort results are updated with the onChange event.** This means that when a user clicks a sort option, the search results will immediately update. This was done because [reason]. To prevent keyboard-only users from prematurely making a selection while navigating sort options...
- (From Jeana) use an Aria live region and manage what is announced to the screen reader and determine where the focus goes after the state change
- (From Jason) debounce/delay the onchange event to check for another option selection -->

<!-- ## Related

* Links to related components.

This is the Component checklist section. Note that the header is inside this include.
<!-- include _component-checklist.html component_name=page.web-component -->