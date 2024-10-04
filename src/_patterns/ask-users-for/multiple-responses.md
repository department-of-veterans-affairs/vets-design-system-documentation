---
layout: pattern
title: Multiple responses
permalink: /patterns/ask-users-for/multiple-responses
redirect_from:
  - /patterns/forms/list-and-loop
aka: List & Loop
contributors: Jeana Clark (Ad Hoc), Robert Hasselle (Oddball), Robin Garrison (Ad Hoc)
sub-section: ask-users-for
intro-text: "Choose the most appropriate implementation of this pattern in forms when we need to collect multiple responses from a user." 
example-link-multi-page-required: https://staging.va.gov/mock-form-patterns/treatment-records
example-link-multi-page-optional: https://staging.va.gov/mock-form-patterns/employers
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988%3A63598&mode=design&t=ocBby0ApctnJJSel-1
github-title: pattern-multiple-responses
research-title: Ask users for multiple responses
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to design and build - Multi-page
  - anchor: How to design and build - Add item
  - anchor: About single page usage
---

## Usage

### When to use this pattern

* **Collecting the same data in a series of questions.** Forms will often collect the same information about 1 or more items. For example, personal information about a Veteran's dependents. The paper form equivalent would be a table where each row is an item and the columns are the questions.
* **Collecting many possible responses.** Some questions can have an unknown amount of answers, such as "list all the cities and states you've lived within." This pattern appears in forms when we don't know how many responses to a question a user will provide, but we need to collect a number between 1 and "n," where "n" is all possible responses. This pattern appears in both simple and complex ways.

### When not to use this pattern

* **Collecting a single, or limited, response.** For questions in a form that only have one answer, such as "What is the city and state of your birth?", use the [Ask users for a single response]({{ site.baseurl }}/patterns/ask-users-for/a-single-response) pattern.
* **Inconsistent questions being asked for each item.** If the same data isn't being collected for each item then this pattern does not lend itself well as a solution as it is meant to capture the same set of information multiple times.

## How to design and build - Multi-page

Use this pattern when users need to add similar information multiple times, such as information about dependents. This method allows more table-like data to be collected following the [One thing per page principle]({{ site.baseurl }}/patterns/ask-users-for/a-single-response).

### When to use the multi-page variation

* **This is the default and preferred variation for multiple responses.** This method is the most flexible of the variations of obtaining multiple responses because it can collect just one or multiple pieces of information across multiple pages. Thus it can collect a very limited set of data or complex details.

### When to not use multi-page

* **Most of the information being requested is already available.** If we have most of the information being requested already then the "Add item" variation is preferred. If the information we have on file is contact information coming from VA.gov Profile then the "Contact information" variation is preferred.

### Required vs Optional multi-page patterns

There are two types of multiple page patterns with slightly different user flows:
* **[Required Multi-page Pattern](#required-multi-page-pattern)**<br>
  Use when **at least one item** for this step must be added. 
* **[Optional Multi-page Pattern](#optional-multi-page-pattern)**<br>
  Use when the step is **completely optional** and users may or may not add items.

{% assign intro_required = "The introduction page provides users with information about the next few screens. If there's a limit to the maximum number of items, see the [code & content considerations](#code--content-considerations) to customize the language." %}

{% assign intro_optional = "The introduction page provides users with information about the next few screens and provides a **Yes/No** choice to provide additional information. If the user selects **Yes** they will proceed into the questions flow. If the user selects **No**, they proceed to the next step."%}

{% assign questions_flow = "The user proceeds into the questions flow. We recommend following the [One thing per page](/patterns/ask-users-for/a-single-response#what-is-one-thing-per-page) pattern." %}

{% assign cancel_flow = "At any time in the questions flow a user can exit by clicking the **Cancel adding this [thing]** button. A modal appears to confirm their choice. If they confirm, any data they have entered is removed, and the user is returned to the Introduction page."%}

{% assign summary = "A summary page allows users to review what they've entered formatted as summary cards. If the user chooses to add another item, they return to the first question page to add the new item."%}

{% assign edit_flow = "Clicking **Edit** puts the user into the “edit flow” and returns the user to the first question page. When entering the edit flow, the `H3` of the pages are updated to include “Edit [previous h3 title]”. The fields should pre-populated with their previously supplied information. (Note: There is no **Cancel** button on this page during the editing process.) After editing items, the user returns to the summary page and an [informational alert](/components/alert/#informational-alert-aka-default) is shown confirming their item has been updated."%}

{% assign delete_flow_required = "A user may choose to delete any of the summary cards. When clicking **Delete**, a modal appears asking them to confirm their choice. If they confirm, that card is removed from the page. If all cards are removed from the summary page, the user will then redirect to the Introduction page with a [warning alert](/components/alert/#warning-alert) reminding the user at least one item is required."%}

{% assign delete_flow_optional = "A user may choose to delete any of the summary cards. When clicking **Delete**, a modal appears asking them to confirm their choice. If they confirm, that card is removed from the page. If all cards are removed from the summary page, the user is redirected to the Introduction page."%}

### Required Multi-page Pattern

<div class="vads-l-grid-container--full">
  <div class="vads-l-row">
    <div class="large-screen:vads-l-col">
      <h4>Flow Diagram</h4>
      <img src="/images/patterns/ask-users-for/multiple-responses/required-multipage-flow.png" alt="A required multi-page multiple response flow diagram."/>
    </div>
    <div class="large-screen:vads-l-col">
      <h4>Steps To Build</h4>
      <va-process-list>
        <va-process-list-item header="Introduction">
          {{ intro_required | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Questions Flow">
          {{ questions_flow | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Cancel Item">
          {{ cancel_flow | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Summary">
          {{ summary | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Edit Flow">
          {{ edit_flow | markdownify }}
        </va-process-list-item> 
        <va-process-list-item header="Delete Flow">
          {{ delete_flow_required | markdownify }}
        </va-process-list-item>
      </va-process-list>
      <div class="vads-u-padding-left--3">
        <a class="vads-c-action-link--blue" href="{{ page.example-link-multi-page-required }}">
          View a mock form example of a <em>required</em> multi-page pattern
        </a>  
      </div>
    </div>
  </div>
</div>

### Optional Multi-page Pattern

<div class="vads-l-grid-container--full">
  <div class="vads-l-row">
    <div class="large-screen:vads-l-col">
      <h4>Flow Diagram</h4>
      <img src="/images/patterns/ask-users-for/multiple-responses/optional-multipage-flow.png" alt="A optional multi-page multiple response flow diagram."/>
    </div>
    <div class="large-screen:vads-l-col">
      <h4>Steps To Build</h4>
        <va-process-list>
        <va-process-list-item header="Introduction">
          {{ intro_optional | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Questions Flow">
          {{ questions_flow | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Cancel Item">
          {{ cancel_flow | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Summary">
          {{ summary | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Edit Flow">
          {{ edit_flow | markdownify }}
        </va-process-list-item>
        <va-process-list-item header="Delete Flow">
          {{ delete_flow_optional | markdownify }}
        </va-process-list-item>
      </va-process-list>
      <div class="vads-u-padding-left--3">
        <a class="vads-c-action-link--blue" href="{{ page.example-link-multi-page-optional }}">
          View a mock form example of an <em>optional</em> multi-page pattern
        </a>  
      </div>
    </div>
  </div>
</div>

### Code & content considerations

* **Use the built in error and validation messages**.
  * Successful editing of an item
  * Successful removal of an item
  * When the maximum number of items have been added
  * When all items in a required loop have been removed
  * When a user wants to cancel adding an item mid-flow
* **Use the built in functionality for using the same word for adding an item on question pages, summary cards, and edit pages.** For example:
  * Do you want to add another [dependent]?
  * Review your [dependents]
  * Remove a [dependent]
  * You have added the maximum number of [dependents]
* **If at least one item is required, use hint text to let users know.** The pattern must indicate to users that at least one item is required. If all items are removed, return users to the first page of the loop to gather information.
* **If there are a maximum number of items, make this clear to the user.** You can use hint text to do this. Also, after the user has entered the maximum number allowed the pattern removes the "add another" question, and displays a warning instructing the user that they have entered the maximum allowed and they can either edit, or remove a card if they need to add more information.

### Accessibility considerations

On the summary page, ensure that the edit links and delete buttons have accessible text so that screen reader users understand what is being edited or deleted.

### Examples in Production
{% include component-example.html alt="A summary page for the multiple response multi-page pattern variation." file="/images/patterns/ask-users-for/multiple-responses/multiple-response-summary.png" caption="An example of the summary page for a multi-page multiple response pattern. This summary page reflects the data collected thus far and allows the user to act on that data or add more." class="x2" %}

## How to design and build - Add item

This method shows all items on one page in a list with an "Add a new [item]" [Link - Action (primary)]({{ site.baseurl }}/components/link/action#primary) at the bottom of the list that navigates the user to a new page to add the item.

{% include component-example.html alt="Form example allowing user to select issues from a list." file="/images/patterns/ask-users-for/multiple-responses/add-item.png" caption="Form allowing a Veteran to select health issues for review in a claim." class="x2" %}

* Items are displayed in a list with checkboxes for selecting items.
* The "Add a new [item]" is displayed using the [Link - Action (primary)]({{ site.baseurl }}/components/link/action#primary) component.
* The "Add a new [item]" link directs the user to a new page with the form elements for adding an item.
* Upon completion, a "add" or "update" button returns the user to the original page with the new item added. A "Cancel" button returns the user to the original page without any changes.

### Code considerations

[How to use "Add item" link in Array Data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-add-item-link-in-array) details how to implement this variation.

### When to use the add item variation

* **Most of the information being requested is already available.** If most of the information being requested is already on file then this variation works well because it presents to the user what we have on file and allows them to add items that are missing.
* **Information on file is not contact information coming from VA.gov Profile.** If the information on file is not coming from VA.gov Profile then this variation presents the data clearly and is preferred. If the information on file IS coming from VA.gov Profile then the "Contact information" variation is preferred.

## About single page usage
While the single-page variation is currently used on VA.gov, it is no longer the preferred variation for this pattern. The <a href="#how-to-design-and-build---multi-page">multi-page pattern</a> is recommended for new designs.
