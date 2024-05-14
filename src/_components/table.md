---
layout: component
title: Table
intro-text: "The table component organizes data into columns and rows."
research-title: Table
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1879%3A677&mode=design&t=B9iLKTUu5y9dFqd4-1
status: use-best-practice
uswds-v3: default
web-component: va-table
anchors:
  - anchor: Examples - v3
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples - v3

### Borderless table (default)

{% include storybook-preview.html height="300px" story="uswds-va-table--default" link_text="va-table v3 default"  %}

### Borderless with custom markup

{% include storybook-preview.html height="225px" story="uswds-va-table--with-custom-markup" link_text="va-table with custom markup" %}

### Borderless with missing data

{% include storybook-preview.html height="225px" story="uswds-va-table--with-missing-data" link_text="va-table with missing data" %}

### Borderless with pagination

{% include storybook-preview.html height="225px" story="uswds-va-table--with-pagination" link_text="va-table with pagination" %}

## Examples - v1

### Responsive stacked table (v1 Default)

{% include storybook-preview.html height="300px" story="components-va-table--default" link_text="va-table v1 along with additional variations"  %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/table/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### Using the standard table

* **Align data according to the content.**
  * Always top align all data in rows.
  * Numerical data is right-aligned.
  * Textual data is left-aligned.
  * Headers are aligned with their data.
  * Do not center align.
* **Wrap instead of truncate content.** This reduces confusion in case headers start with the same word.
* **Be selective about using column sort.**
  * Sort should only be included in a table if it can assist the user in completing a task.

#### Using responsive stacked tables

* **Arrange data in order of importance** Because the leftmost columns are what users see first in a smaller screen, work with a content specialist and determine what order of columns is going to tell the best story with that data. Which columns are most critical to understanding what the meaning of the table is? Ask users what the most important data is to them and have that be the first column.
* **Left align header and value in list view** When using list view, the header and value are stacked vertically with the bolded header on one line and the value on the line below. Make sure both header and value are left aligned. 
* **Limit characters in headings** Column headings shouldn’t exceed 60 characters. Follow content guidelines on [how to abbreviate dates and time]({{ site.baseurl }}/content-style-guide/dates-and-numbers), as well as, other [abbreviations and acronyms]({{ site.baseurl }}/content-style-guide/abbreviations-and-acronyms)
* **Tables should have a maximum of 5 columns** Very large tables with lots of columns are difficult to use. This problem only gets exacerbated on smaller screens. Show only what users really need.  

#### Choosing between variations

The v3 default table is a standard table and does not offer the responsive stacked variation. Also, the v3 table does not yet offer a sortable option. Thus if the data in your table requires the responsive stacked table at mobile viewport widths, or if your table currently is sortable, you may stick with the v1 version of this component until we reach feature parity.

* **Use the responsive list view table when you need to present a list of information in an itemized way.** A responsive stacked table collapses at narrow widths for better readability on small screens.
* **Use the standard table when users have to compare rows and columns** as the table layout remains the same on smaller screens.
  * For comparison tables, avoid horizontal scrolling and limit the number of columns to 3 or fewer. All column heading labels should total no more than 60 characters.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* The `table-title`, which the component will place in a `<caption>` element, should succinctly describe the table in a meaningful way.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/table/#accessibility-accordion">Refer to the U.S. Web Design System for accessibility guidance</a>