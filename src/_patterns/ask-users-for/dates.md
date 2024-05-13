---
layout: pattern
permalink: /patterns/ask-users-for/dates
sub-section: ask-users-for
title: Dates
intro-text: "Use this pattern to collect dates from a person."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/datePatterns.jsx
example-link: https://staging.va.gov/mock-form-patterns/name-and-date-of-birth
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates-(Patterns-%26-Forms)?type=design&node-id=2987%3A30876&mode=design&t=bCqen0EkXhbvFg38-1
github-title: pattern-dates
research-title: Ask users for dates
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Example
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
---

## Usage

### When to use this pattern

Follow this pattern whenever you need a person to provide a date on a form.

Dates you may need people to provide include:

* Dates a person knows, like a date of birth or marriage anniversary.
* Dates a person can approximate, like February 2021.
* Date ranges, like service history dates.

### Dates a person knows

Use the [Memorable date]({{ site.baseurl }}/components/form/memorable-date) component for dates a person is likely to have memorized such as a date of birth or marriage anniversary. 

#### Date of birth and/or death

{% include component-example.html alt="Shows the form fields used to obtain date of birth and date of death." file="/images/patterns/ask-users-for/dates/date-of-birth-in-40-0247.png" caption="Example of asking for a date of birth and date of death from form 40-0247." class="x2" %}

#### Date and place of birth

Follow this pattern whenever you need to ask for a user’s date and place of birth.

{% include component-example.html alt="Shows the form fields used to obtain date and place of birth." file="/images/patterns/ask-users-for/dates/birth-info.png" caption="Example of asking for a date and place of birth. NOTE: This screenshot shows an outdated date component. Use Memorable Date for collecting date of birth." class="x2" %}

### Dates a user can approximate

Use the [month/year date]({{ site.baseurl }}/components/form/date-input#monthyear) component variation for dates that a user may struggle to remember. For example: *When did you receive your high school diploma or equivalency certificate?*

{% include component-example.html alt="Shows the date input for collecting approximate dates." file="/images/patterns/ask-users-for/dates/date-input-month-year.png" caption="Example of using the month and year date component for collecting a date a user can approximate." class="x2" %}

### Date ranges

Refer to the [Service history pattern]({{ site.baseurl }}/patterns/ask-users-for/service-history) for an example of collecting service date ranges.

## Example

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

## How to design and build

### Anatomy details

Follow the [vertical padding and accessibility annotations in Figma]({{ page.figma-link }}).

### How this pattern works

* **Write clear form labels for date ranges** Do not use “From” and “To” to when labeling form labels for date ranges. Make it clear what dates you’re asking for. Example: “Obligation start date” and “Obligation end date”.
* **Spell out full month names in the selected state** The month select box should have the full month’s name. Example: January 
* **Validate date inputs.** You should validate date inputs so you can let users know if they have entered one incorrectly. A general validation message for an incorrect date: *Please enter a valid date*
* **Use the date input field for date of birth.** Writing out the label for each birth date string and separating them into three fields instead of one eliminates potential format confusion.
* **Use one text input for Place of birth.** This format is easier to fill out for both Veterans born outside the United States and for Veterans who were born United States citizens.
* **Pair with full name.** Collection of date of birth is paired with [full name]({{ site.baseurl }}/patterns/ask-users-for/names). The two patterns typically appear on the same step/page.

### Components used in this pattern

* [Memorable date]({{ site.baseurl }}/components/form/memorable-date)
* [Date input (Month/Year)]({{ site.baseurl }}/components/form/date-input#monthyear)
* [Text input]({{ site.baseurl }}/components/form/text-input) for place of birth, when necessary

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Dates in Figma]({{ page.figma-link }}).

## Code usage

[Dates is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

### Labels, error messages, and hint text

{% include _field-labels.html labels=site.data.content.patterns.ask-users-for.dates %}