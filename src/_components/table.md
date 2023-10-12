---
layout: component
title: Table
intro-text: "The table component organizes data into columns and rows."
research-title: Table
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/D9AD4361-D6AC-4BB8-845A-7D90B5A3400D
status: use-best-practice
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
web-component: va-table
---

## Example

### Default

{% include storybook-preview.html height="300px" story="components-va-table--default" %}

### Missing data

{% include storybook-preview.html height="225px" story="components-va-table--missing-data" %}

### Sortable

{% include storybook-preview.html height="400px" story="components-va-table--sortable" %}

### With pagination

{% include storybook-preview.html height="400px" story="components-va-table--with-pagination" %}

## Usage

* A table can be a good solution when the user needs to analyze or compare data at-a-glance. Minimal visual styling helps improve the ability to scan tabular data.

### When to use a table
* When presenting data that can be compared across multiple categories.
* When organizing precise numerical data, such as statistical data.

### When to consider something else
* Use tables sparingly. When content can be organized as a [description list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) (e.g. 2-column term and description), a description list should be used. Lists will generally be more accessible on mobile screens since they will not require a horizontal scroll or create narrow, unreadable columns.
* Avoid layout tables (tables that contain no data and are used solely for text formatting purposes).

### How to use tables
- **Align data according to the content** 
  - Always top align all data in rows.
  - Numerical data is right-aligned.
  - Textual data is left-aligned.
  - Headers are aligned with their data.
  - Do not center align.
- **Wrap instead of truncate content.** This reduces confusion in case headers start with the same word.
- **Be selective about using column sort.**
  - **Note:** column sort does not work in IE11
  - Sort should only be included in a table if it can assist the user in completing a task.
  - Only one column per table should be sortable, keep it simple.
  - A default sort order (ascending or descending) must be defined.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations
* Table headers must be designated with `<th>`.
* Header labels must accurately describe the corresponding group of cells.
* Each header cell should have `scope="col"` or `scope="row"`.
* Complex tables with more than two levels of headers should use `id` and `headers` attributes so that data cells and header associations are explicit.
* Nested tables should be avoided.
* When adding a title to a table, include it in a `<caption>` tag inside of the `<table>` element. The title can be an affordance to screen reader users especially if there are multiple tables on one page.
* The caption should succinctly describe the table in a meaningful way.

# Responsive list table 

<p class="va-introtext">Responsive list tables transition into a list view on smaller screens. A responsive list table is a good solution when veterans need to look up a piece of information. 
</p>

{% include storybook-preview.html height="950px" width="400px" story="components-va-table--default" %}

## Usage

### When to use the responsive list view table
Use a list view table when you need to present a list of information in an itemized way.  

### When to consider something else
- When users have to compare rows and columns, consider using a comparison table layout in which the table layout remains the same on smaller screens. 
- For comparison tables, avoid horizontal scrolling and limit the number of columns to 3 or fewer. All column heading labels should total no more than 60 characters. 

### How to use responsive view tables
- **Arrange data in order of importance** Because the leftmost columns are what users see first in a smaller screen, work with a content specialist and determine what order of columns is going to tell the best story with that data. Which columns are most critical to understanding what the meaning of the table is? Ask users what the most important data is to them and have that be the first column. 
- **Left align header and value in list view** When using list view, the header and value are stacked vertically with the bolded header on one line and the value on the line below. Make sure both header and value are left aligned. 
- **Limit characters in headings** Column headings shouldn’t exceed 60 characters. Follow content guidelines on [how to abbreviate dates and time]({{ site.baseurl }}/content-style-guide/dates-and-numbers), as well as, other [abbreviations and acronyms]({{ site.baseurl }}/content-style-guide/abbreviations-and-acronyms)
- **Tables should have a maximum of 5 columns** Very large tables with lots of columns are difficult to use. This problem only gets exacerbated on smaller screens. Show only what users really need.  

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations
- **Test it as soon as possible, especially on mobile devices.** Reach out to A11y specialists to help test how tables read on mobile screen readers 
- **Examples of roles used to make sure the responsive table is accessible:** `table`,`row`, `columnheader`, `rowheader`, and `cell`.
- **Examples of scope values:** `col`, `row`, `colgroup`, `rowgroup`
- **For the table, it would be helpful to include a `<tfoot>`,**  for footnotes or other content related to the table that is not in a table cell.  It may be a single column that spans the number of columns of the table, for example.
