---
layout: pattern
title: Multiple responses
permalink: /patterns/ask-users-for/multiple-responses
redirect_from:
  - /patterns/forms/list-and-loop
aka: List & Loop
sub-section: ask-users-for
intro-text: "Choose the most appropriate implementation of this pattern in forms when we need to collect more than one response from a user." 
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build - Single page
  - anchor: How to design and build - Multi-page
  - anchor: How to design and build - Add item
  - anchor: How to design and build - Contact information
  - anchor: Code considerations
  - anchor: Accessibility considerations
---

## Usage 

### When to use this pattern

* **Collecting the same data in a series of questions.** Forms will often collect the same information about 1 or more items. For example, personal information about a Veteran's dependents. The paper form equivalent would be a table where each row is an item and the columns are the questions.
* **Collecting between 1 and many possible responses.** Some questions in forms only have one answer, such as "What is the city and state of your birth?". Other questions can have an unknown amount of answers, such as "list all the cities and states you've lived within." This pattern appears in forms when we don't know how many responses to a question a user will provide, but we need to collect a number between 1 and "n," where "n" is all possible responses. This pattern appears in both simple and complex ways.

### When not to use this pattern

* **Inconsistent questions being asked for each item.** If the same data isn't being collected for each item then this pattern does not lend itself well as a solution as it is meant to capture the same set of information multiple times.

## How to design and build - Single page

The Single page implementation variation of this pattern exposes an initial set of fields to collect a set of information with an option to add additional sets of information, one at a time. 

### Collection

{% include component-example.html alt="Form example requesting service history from a Veteran." file="/images/patterns/ask-users-for/multiple-responses/editing-service-period.png" caption="Form collecting service history information from a Veteran using the single page implementation of this pattern." class="x2" %}

* The fields are presented with an option to "Save" the initial entry and to "Add another". Selecting "Add another" before filing in the required fields and clicking "Save" [results in errors associated with each missing field]({{ site.baseurl }}/images/patterns/ask-users-for/multiple-responses/editing-service-period-errors.png).

### Review for edit and remove

{% include component-example.html alt="Form showing service history collected from a Veteran." file="/images/patterns/ask-users-for/multiple-responses/adding-service-period.png" caption="Form displaying service history collected from a Veteran and allowing the user to edit or remove the information collected." class="x2" %}

* Once an initial item is saved it collapses down into a [Card]({{ site.baseurl }}/components/card) with, at minimum, an "Edit" button, and often, a "Remove" button. 
* The "Add another" button stays visible so that additional entries can be made.

### When to use this variation

This variation was the first to be created and thus is considered the default and is the most widely in use. 

* **Short data sets.** When the set of information being collected is short and simple to explain to the user then this default variation is still the preferred option. If the set of information being collected is long it can create a long and potentially daunting page of information for the user to fill out and thus the Multi-page option should be used instead.

#### What to watch out for 

* The "Add another..." secondary button is always visible allowing the user to add additional sets of fields before filling out and saving the first set. This can get the user into an error condition that may be confusing.

### Code considerations

[Single page](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-using-form-widgets-and-fields#VAFormsLibrary-UsingFormWidgetsandFields-Arrayfield) is available in the VA Forms Library as an Array field.

## How to design and build - Multi-page

This method is also recommended as the user first identifies the items in a list and then returns to each item in the list on a distinct page, adding details to that item.

{% include component-example.html alt="Form example allowing user to build a list of items and then adding details to each item in the list." file="/images/patterns/ask-users-for/multiple-responses/array-data.png" caption="Form sub-steps that allow a Veteran to build a list of items and then add details to each item in the list." class="x2" %}

This pattern is carried out in several steps within a single form step:

1. The Veteran is prompted to add items to a list. In this case, conditions that impact their health.
2. Once an item is saved it collapses down into a [Card]({{ site.baseurl }}/components/card) with an "Edit" button to reopen the Card. A [Button - Secondary]({{ site.baseurl }}/components/button/#secondary-button) is provided to "Add another" item.
3. One the Veteran selects "Continue" they are moved onto a new screen with the message: "Now we're going to ask you some follow-up questions about each of your [items]. We'll go through them one by one."
4. Selecting "Continue" presents the next screen where the first item in the list is presented with a series of child questions. In this example, two additional answers are attached to each item in the list. Selecting "Continue" saves this item and presents the next in the list.

### When to use this variation

* **Many or complex details are being collected.** This variation works by collecting a key identifier for each item in the set, for example a name, and then collects the details for each of those items. This provides more flexibility when the details being collected are many or complex.  

* **Most of the information being requested is NOT already available.** If we do have most of the information being requested already then the "Add item" variation is preferred. If the information we have on file is contact information coming from VA.gov Profile then the "Contact information" variation is preferred.

### Code considerations

[How to work with Array Data (aka List Loops)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-array-data-aka-l) details how to implement this variation.

## How to design and build - Add item

This method shows all items on one page in a list with an "Add a new [item]" [Link - Action (primary)]({{ site.baseurl }}/components/link/action#primary) at the bottom of the list that navigates the user to a new page to add the item. 

{% include component-example.html alt="Form example allowing user to select issues from a list." file="/images/patterns/ask-users-for/multiple-responses/add-item.png" caption="Form allowing a Veteran to select health issues for review in a claim." class="x2" %}

* Items are displayed in a list with checkboxes for selecting items.
* The "Add a new [item]" is display using the [Link - Action (primary)]({{ site.baseurl }}/components/link/action#primary) component.
* The "Add a new [item]" link directs the user to a new page with the form elements for adding an item. 
* Upon completion, a "add" or "update" button returns the user to the original page with the new item added. A "Cancel" button returns the user to the original page without any changes. 

### Code considerations

[How to use "Add item" link in Array Data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-add-item-link-in-array) details how to implement this variation.

### When to use this variation

* **Most of the information being requested is already available.** If most of the information being requested is already on file then this variation works well because it presents to the user what we have on file and allows them to add items that are missing.
* **Information on file is not contact information coming from VA.gov Profile.** If the information on file is not coming from VA.gov Profile then this variation presents the data clearly and is preferred. If the information on file IS coming from VA.gov Profile then the "Contact information" variation is preferred.

## How to design and build - Contact information 

The Contact information variation of this pattern is captured in the [Help users to know how their information is updated]({{ site.baseurl }}/patterns/help-users-to/know-how-their-information-is-updated) pattern. 

{% include component-example.html alt="Veteran details from the Request a Board Appeal application." file="/images/patterns/ask-users-for/multiple-responses/board-appeal-contact-information.png" caption="The user is shown contact information that is on file and will be used as part of the application process with the option to edit." class="x2" %}

### When to use this variation

* **Information on file is contact information coming from VA.gov Profile.** This variation allows the user to see the details of the information we have on file, edit it if necessary, returning them to this screen to confirm the changes have been made and allowing them to continue with their intended goal of completing the application.

### Code considerations

[How to create the contact info Array Data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar) details how to add a contact info page via the VA Forms Library that shows the Veteran's contact info and allows updating the changes to their profile directly. 
