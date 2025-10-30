---
layout: component
title:  Search Sort
permalink: /components/search-sort/
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
web-component: va-search-sort
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

Sort can be used to arrange information alphabetically, chronologically, numerically, or by any other specified criteria. This allows data to be organized in a way that makes it easier to analyze or interpret. 

### When to use search sort

* **Use sort when it can help users fulfill a task more quickly.** For example, sort can be used in these scenarios: 
    - To find medication history alphabetically
    - 
    
    - within a form
    - on a search results page
    - within a form AND viewing search results
    - within a knowledge base such as Resources and support
    - in a table

**Note:** User research is recommended to determine if Sort would be helpful or what criteria would be helpful in specific contexts.
- 
<!--* **In this task.** Sort can be used to reorder information in the following:
    - Medications
    - Appointments
    - Secure messages
    - Claims
    - History -->

### When to consider something else

* **When order is not relevant.** If the order of data does not impact the results or interpretation, sorting may be unnecessary.
* **When order is not meaningful or natural (Non-comparable data)** When the data attributes do not have a natural or meaningful order, sorting may not provide any additional value.

<!--Explain which scenarios or user context where this component is not, or should not, be used.
* **Not for these tasks.** Explain the user tasks where this component is not, or should not, be used.
* **Use this instead.** Explain when another component should be used instead.-->

### How this component works
Upon selecting a sorting option, the information is rearranged respectively--the focus will go to ...?

<!--Details the design decisions inherent to the component.-->

Allow users to sort the content by the factors that are most important to them. Results should be sorted by the option relevant to the content. Ie. Global search should be sorted by relevance to the searched term or phrase. Where as a News listing would be sorted by date order.


## Behavior

### Web

Describe the key interactions for this component.

* **Trigger.** What does the user do to start the interaction with this component. 
* **Rules.** Do not take users to a new page or screen in order to Sort.
* **Feedback.** What the user sees, hears, and feels that help them understand the rules.
* **Loops and modes.** Meta rules that govern the interaction.

#### Choosing between web variations

Help the designer and developer understand when to choose between any variations of this component.

### Mobile app

Describe the key interactions for this component.

#### Choosing between mobile variations

Help the designer and developer understand when to choose between any mobile app variations of this component.

### Placement

Where the component appears visually, and if necessary to clarify, where it may appear in the source code. Can also comment on where the component is not to be placed.

### Design principles

* List of design or UX principles that this component is an example or or adheres to.

### Instances of this component in production

Images with captions that describe different instances of this component being used in production.

<!-- include component-example.html alt="Explain what is in the image." file="/images/components/component-name/filename.png" caption="Describe what this example image is depicting." --> 

This is the Code Usage section. Note that the header is inside this include.
<!-- include component-docs.html component_name=page.web-component  -->

## Content considerations

* Bulleted list of content related instructions to the designer.
* May be an include is shared with the Content style guide section.

## Accessibility considerations

* Bulleted list of a11y related instructions to the designer and developer.

## Related

* Links to related components.

This is the Component checklist section. Note that the header is inside this include.
<!-- include _component-checklist.html component_name=page.web-component -->