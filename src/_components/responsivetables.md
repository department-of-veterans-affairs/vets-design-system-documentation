---
layout: default
sub_section: tables
title: Tables
draft: true
anchors:
  - anchor: Tables
  - anchor: Responsive List Tables 
---

# Tables

<p class="va-introtext">Tables show tabular data in columns and rows.</p>

<div class="site-showcase">
{% include_relative html/tables.html %}
</div>

{% include snippet.html content='html/tables.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/sortabletable/' %}


## Accessibility
* Simple tables can have two levels of headers. Each header cell should have `scope="col"` or `scope="row"`.
* Complex tables are tables with more than two levels of headers. Each header should be given a unique id and each data cell should have a headers attribute with each related header cell’s id listed.
* When adding a title to a table, include it in a `<caption>` tag inside of the `<table>` element.

## Guidance
* Tables are great at displaying tabular data. Minimal visual styling helps surface this information more easily.

### When to use
* When you need tabular information, such as statistical data.

### When to consider something else
* Depending on the type of content, consider using other presentation formats such as definition lists or hierarchical lists.

### Usability guidance: how to use it
**Align data according to the content** 
- Always top align all data in rows
- Numerical data is right-aligned
- Textual data is left-aligned
- Headers are aligned with their data
- Do not center align

**Wrap instead of truncate content.** This reduces confusion in case headers start with the same word



# Responsive List Tables 

<p class="va-introtext">List view tables transition into a list view when on smaller screens. A responsive list view works best on tables where veterans are looking up a piece of information. 
</p>

![responsive-list-table]({{site.baseurl}}/images/responsive-list-table.png)

 
## Accessibility
- **Test it as soon as possible, especially on mobile devices.** Reach out to A11y specialists to help test how tables read on mobile screen readers 
- **Examples of roles used to make sure the responsive table is accessible:** `table`,`row`, `columnheader`, `rowheader`, and `cell`.
- **Examples of scope values:** `col`, `row`, `colgroup`, `rowgroup`
- **For the table, it would be helpful to include a `<tfoot>`,**  for footnotes or other content related to the table that is not in a table cell.  It may be a single column that spans the number of columns of the table, for example.

## Guidance

### When to use the responsive list view 
Use list view table when you need to present a list of information in an itemized way.  

### When to consider something else
- When users have to compare rows and columns, consider using a comparison table layout in which the table layout remains the same on smaller screens 
- For comparison tables, avoid horizontal scrolling and limit the number of columns to 3 or fewer. All column heading labels should total no more than 60 characters. 

### Usability guidance: how to use it
**Arrange data in order of importance** Because the left most columns are what users see first in a smaller screen, work with a content specialist and determine what order of columns is going to tell the best story with that data. Which columns are most critical to understanding what the meaning of the table is? Ask users what the most important data is to them and have that be the first column. 

**Left align header and value in list view** When using list view, the header and value are stacked vertically with the bolded header on one line and the value on the line below. Make sure both header and value are left aligned. 

**Limit characters in headings** Column headings shouldn’t exceed 60 characters. Follow content guidelines on [how to abbreviate dates and time](https://design.va.gov/content-style-guide/dates-and-numbers), as well as, other [abbreviations and acronyms](https://design.va.gov/content-style-guide/abbreviations-and-acronyms)

**Tables should have a maximum of 5 columns** Very large tables with lots of columns are difficult to use. This problem only gets exacerbated on smaller screens. Show only what users really need.  
