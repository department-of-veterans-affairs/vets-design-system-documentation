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
  - anchor: How to design and build - Single page
  - anchor: How to design and build - Add item
  - anchor: How to design and build - Contact information
  - anchor: Code considerations
  - anchor: Accessibility considerations
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

This method is also recommended as the user first identifies the items in a list and then returns to each item in the list on a distinct page, adding details to that item.

{% include component-example.html alt="A multi-page multiple response flow diagram." file="/images/patterns/ask-users-for/multiple-responses/multiple-response-flow.png" caption="A diagram explaining the parts of the multi-page pattern." %}

1. A user enters either a required or optional multiple response flow.
  * **A required item for the list and loop.** The required version has an intro page explaining that we're about to ask a series of questions about a thing, and if there's a limit, they can enter up to that limit. Teams can customize how they want this page to work.
  * **Completely optional list and loop.** For an optional list and loop, the question is asked "Do you have [a thing] to add? yes/no" Yes enters the loop.
2. The first page of the list and loop asks them to identify the thing they are adding. In this case, treatment records from a facility. Designers can choose how they want to construct the pages of the list and loop. We recommend following the one thing per page pattern as we do throughout our forms.
3. At any time in the multiple responses list and loop a user can exit the loop by clicking the "cancel adding this [thing]" button. A modal appears asking them to confirm their choice. If they answer that they want to stop adding this thing, any data they have entered is removed, and the user is returned to the first page of the list and loop pattern.
4. Summary list page allows users to review what they've entered, edit, delete items, or add another.
5. If the user chooses to add another item they return to the first question page to add the new item.

The loop can be repeated as many times as your form allows.

<a class="vads-c-action-link--blue" href="{{ page.example-link-multi-page-required }}">
  View an example of a multi-page required loop
</a>
<a class="vads-c-action-link--blue" href="{{ page.example-link-multi-page-optional }}">
  View an example of a multi-page optional loop
</a>

{% include component-example.html alt="A summary page for the multiple response multi-page pattern variation." file="/images/patterns/ask-users-for/multiple-responses/multiple-response-summary.png" caption="An example of the summary page for a multi-page multiple response pattern. This summary page reflects the data collected thus far and allows the user to act on that data or add more." class="x2" %}

After adding each item, the user is shown a summary of what they have added so far and they can:

* **Edit items.** Clicking the edit link returns the user to the first question of the loop and the user has now entered an "edit flow". After editing items, the user is returned to the summary page and alert is shown confirming their item has been updated. When entering an edit flow, the H3s of the pages are updated to include "Edit [previous h3 title]".
* **Delete items.** Clicking the delete button allows a user to confirm that they want to delete the entire loop and all of the answers they have given through the entire loop. A modal pops up asking the user to confirm their choice. After they remove a card, they are returned to the summary page where they can choose to add another. If the user has removed all items, and yet one item is required, the user is returned to the first page of the loop where a warning alert is displayed reminding the user at least one item is required.
* **Add another item.** If the user chooses to add another item they return to the first question page to add the new item.
* **Continue to the next question in the form**

These summary cards work the same on the review page of the form.

### When to use the multi-page variation

* **This is the default and preferred variation for multiple responses.** This method is the most flexible of the variations of obtaining multiple responses because it can collect just one or multiple pieces of information across multiple pages. Thus it can collect a very limited set of data or complex details. This variation can be used to collect a key identifier for each item in the set, for example a name or condition, and then collect details for each of those items.  

### When to not use multi-page

* **Most of the information being requested is already available.** If we have most of the information being requested already then the "Add item" variation is preferred. If the information we have on file is contact information coming from VA.gov Profile then the "Contact information" variation is preferred.

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

## How to design and build - Single page

The Single page implementation variation of this pattern exposes an initial set of fields to collect a set of information with an option to add additional sets of information, one at a time. Note that this variation is currently used on VA.gov but is no longer the preferred variation for this pattern.

### Collection

{% include component-example.html alt="Form example requesting service history from a Veteran." file="/images/patterns/ask-users-for/multiple-responses/editing-service-period.png" caption="Form collecting service history information from a Veteran using the single page implementation of this pattern." class="x2" %}

* The fields are presented with an option to "Save" the initial entry and to "Add another". Selecting "Add another" before filling in the required fields and clicking "Save" [results in errors associated with each missing field]({{ site.baseurl }}/images/patterns/ask-users-for/multiple-responses/editing-service-period-errors.png).

### Review for edit and remove

{% include component-example.html alt="Form showing service history collected from a Veteran." file="/images/patterns/ask-users-for/multiple-responses/adding-service-period.png" caption="Form displaying service history collected from a Veteran and allowing the user to edit or remove the information collected." class="x2" %}

* Once an initial item is saved it collapses down into a [Card]({{ site.baseurl }}/components/card) with, at minimum, an "Edit" button, and often, a "Remove" button.
* The "Add another" button stays visible so that additional entries can be made.

### When to use the single page variation

* **Short data sets.** When the set of information being collected is very short and simple to explain to the user. If the set of information being collected is longer than one or two fields then it can create a long and potentially daunting page of information for the user to fill out and therefore the [Multi-page variation](#how-to-design-and-build---multi-page) should be used instead.

#### What to watch out for

* **The "Add another..." secondary button is always visible.** This allows the user to add additional sets of fields before filling out and saving the first set which can get the user into an error condition that may be confusing. Therefore consider whether one of the alternative variations would be better suited to the collection of multiple responses.

### Code considerations

[Single page](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-using-form-widgets-and-fields#VAFormsLibrary-UsingFormWidgetsandFields-Arrayfield) is available in the VA Forms Library as an Array field.

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

## How to design and build - Contact information

The Contact information variation of this pattern is captured in the [Help users to know how their information is updated]({{ site.baseurl }}/patterns/help-users-to/know-how-their-information-is-updated) pattern.

{% include component-example.html alt="Veteran details from the Request a Board Appeal application." file="/images/patterns/ask-users-for/multiple-responses/board-appeal-contact-information.png" caption="The user is shown contact information that is on file and will be used as part of the application process with the option to edit." class="x2" %}

### When to use the contact information variation

* **Information on file is contact information coming from VA.gov Profile.** This variation allows the user to see the details of the information we have on file, edit it if necessary, returning them to this screen to confirm the changes have been made and allowing them to continue with their intended goal of completing the application.

### Code considerations

[How to create the contact info Array Data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar) details how to add a contact info page via the VA Forms Library that shows the Veteran's contact info and allows updating the changes to their profile directly.