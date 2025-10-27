---
layout: component
title: Table
intro-text: "The table component organizes data into columns and rows."
research-title: Table
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1879%3A677&mode=design&t=B9iLKTUu5y9dFqd4-1
uswds-v3: default
web-component: va-table
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
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
* **Use monospace fonts for content that requires precise alignment in tables.** This includes numerical data that can be tabulated and, in some cases, medical terminology. See [Typography]({{ site.baseurl }}/foundation/typography) for detailed guidance on when monospace fonts are appropriate. 

#### Using responsive stacked tables

* **Arrange data in order of importance** Because the leftmost columns are what users see first in a smaller screen, work with a content specialist and determine what order of columns is going to tell the best story with that data. Which columns are most critical to understanding what the meaning of the table is? Ask users what the most important data is to them and have that be the first column.
* **Left align header and value in list view** When using list view, the header and value are stacked vertically with the bolded header on one line and the value on the line below. Make sure both header and value are left aligned. 
* **Limit characters in headings** Column headings shouldn’t exceed 60 characters. Follow content guidelines on [how to abbreviate dates and time]({{ site.baseurl }}/content-style-guide/dates-and-numbers), as well as, other [abbreviations and acronyms]({{ site.baseurl }}/content-style-guide/abbreviations-and-acronyms)
* **Tables should have a maximum of 5 columns** Very large tables with lots of columns are difficult to use. This problem only gets exacerbated on smaller screens. Show only what users really need.  

* **Use the responsive list view table when you need to present a list of information in an itemized way.** A responsive stacked table collapses at narrow widths for better readability on small screens.
* **Use the standard table when users have to compare rows and columns** as the table layout remains the same on smaller screens.
  * For comparison tables, avoid horizontal scrolling and limit the number of columns to 3 or fewer. All column heading labels should total no more than 60 characters.
* **Avoid using numerical data in a responsive stacked table.** All data in a stacked table should be left aligned.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* The `table-title`, which the component will place in a `<caption>` element, should succinctly describe the table in a meaningful way.

### Handling Empty Data in Tables

Tables on VA.gov should never contain blank or missing cells. Empty cells can confuse screen reader users and make it difficult for anyone to understand whether a value is missing, unavailable, or zero. Every table cell should communicate meaning. If data is not available, include a short phrase that explains why — for example, “Data not available,” “Not provided,” or “Zero.” This ensures consistent, interpretable data for all users, including those using assistive technologies.

#### Choosing the Right Phrase for Missing Data

When a table contains missing data, choose a phrase that reflects *why* the value is missing. Use clear, consistent language so users can interpret the dataset correctly.

**Examples**

- Use **Not Applicable** when the data does not apply to that row or column. For example, a column for "Discharge date" in a table of Veterans still receiving care.
- Use **Not provided** when the data was expected but not reported. For example, a missing value in a "Total claims processed" column.
- Use **Data not available** when the data exists but cannot currently be shown. For example, when the data source is being updated, or the system is currently offline.
- Use **0** when the numeric value is intentionally zero. For example, when the number of dependents column is reported as 0.

Clear phrasing ensures that all users — including those navigating with assistive technology — can understand what each table cell represents and why a value may be missing.

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/table/#accessibility-accordion"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

- Tables should be used to display tabular data, which is structured data made up of rows and columns. A table allows the information to be easily interpreted by visually associating row and column headers.
- _Do not_ use tables for layout purposes. Tables should only be used for data that has inherent relationships, not for design purposes.

{% include _component-checklist.html component_name=page.web-component %}
