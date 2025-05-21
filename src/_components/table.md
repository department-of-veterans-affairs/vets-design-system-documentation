---
layout: component
title: Table
intro-text: "The table component organizes data into columns and rows."
research-title: Table
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1879%3A677&mode=design&t=B9iLKTUu5y9dFqd4-1
uswds-v3: default
web-component: va-table
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Borderless table (default)

{% include storybook-preview.html height="350px" story="uswds-va-table--default" link_text="va-table v3 default"  %}

### Borderless with custom markup

{% include storybook-preview.html height="650px" story="uswds-va-table--with-custom-markup" link_text="va-table with custom markup" %}

### Borderless with missing data

{% include storybook-preview.html height="225px" story="uswds-va-table--with-missing-data" link_text="va-table with missing data" %}

### Borderless with pagination

{% include storybook-preview.html height="410px" story="uswds-va-table--with-pagination" link_text="va-table with pagination" %}

### Sortable

{% include storybook-preview.html height="410px" story="uswds-va-table--sortable" link_text="Sortable va-table" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/table/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

#### Using the standard table

* **Wrap instead of truncate content.** This reduces confusion in case headers start with the same word.

#### Using responsive stacked tables

* **Arrange data in order of importance** Because the leftmost columns are what users see first in a smaller screen, work with a content specialist and determine what order of columns is going to tell the best story with that data. Which columns are most critical to understanding what the meaning of the table is? Ask users what the most important data is to them and have that be the first column.
* **Left align header and value in list view** When using list view, the header and value are stacked vertically with the bolded header on one line and the value on the line below. Make sure both header and value are left aligned. 
* **Limit characters in headings** Column headings shouldn’t exceed 60 characters. Follow content guidelines on [how to abbreviate dates and time]({{ site.baseurl }}/content-style-guide/dates-and-numbers), as well as, other [abbreviations and acronyms]({{ site.baseurl }}/content-style-guide/abbreviations-and-acronyms)
* **Tables should have a maximum of 5 columns** Very large tables with lots of columns are difficult to use. This problem only gets exacerbated on smaller screens. Show only what users really need.  

* **Use the responsive list view table when you need to present a list of information in an itemized way.** A responsive stacked table collapses at narrow widths for better readability on small screens.
* **Use the standard table when users have to compare rows and columns** as the table layout remains the same on smaller screens.
  * For comparison tables, avoid horizontal scrolling and limit the number of columns to 3 or fewer. All column heading labels should total no more than 60 characters.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* The `table-title`, which the component will place in a `<caption>` element, should succinctly describe the table in a meaningful way.

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/table/#accessibility-accordion"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

- Tables should be used to display tabular data, which is structured data made up of rows and columns. A table allows the information to be easily interpreted by visually associating row and column headers.
- _Do not_ use tables for layout purposes. Tables should only be used for data that has inherent relationships, not for design purposes.
