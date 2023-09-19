---
layout: pattern
permalink: /patterns/ask-users-for/dates
sub-section: ask-users-for
title: Dates
intro-text: "Use this pattern to collect dates from a person."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/datePatterns.jsx
example-link: https://staging.va.gov/mock-form-patterns/name-and-date-of-birth
github-title: pattern-dates
research-title: Ask users for dates
sketch-link: https://www.sketch.com/s/dc844743-277e-41d4-81ba-a48fd0743952/p/303BA3DA-853A-471B-9A2E-53C72F08368D/canvas
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern 

Follow this pattern whenever you need a person to provide a date on a form.

Dates you may need people to provide include:
- Dates a person knows, like a date of birth or marriage anniversary.
- Dates a person can approximate, like February 2021.
- Date ranges, like service history dates.

### Dates a person knows

Use the [Memorable date]({{ site.baseurl }}/components/form/memorable-date) component for dates a person is likely to have memorized such as a date of birth or marriage anniversary. 

#### Date of birth

{% include component-example.html alt="Shows the form fields used to obtain date of birth." file="/images/patterns/ask-users-for/dates/form-dob.png" caption="Example of asking for a date of birth." class="x2" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>


#### Date and place of birth

Follow this pattern whenever you need to ask for a user’s date and place of birth. 

{% include component-example.html alt="Shows the form fields used to obtain date and place of birth." file="/images/patterns/ask-users-for/dates/birth-info.png" caption="Example of asking for a date and place of birth. NOTE: This screenshot shows an outdated date component. Use Memorable Date for collecting date of birth." class="x2" %}

### Dates a user can approximate

Use the [month/year date]({{ site.baseurl }}/components/form/date-input#monthyear) component variation for dates that a user may struggle to remember. For example: *When did you receive your high school diploma or equivalency certificate?* 

{% include component-example.html alt="Shows the date input for collecting approximate dates." file="/images/patterns/ask-users-for/dates/date-input-month-year.png" caption="Example of using the month and year date component for collecting a date a user can approximate." class="x2" %}

### Date ranges

Refer to the [Service history pattern]({{ site.baseurl }}/patterns/ask-users-for/service-history) for an example of collecting service date ranges.

## How to design and build 

### How this pattern works

- **Write clear form labels for date ranges** Do not use “From” and “To” to when labeling form labels for date ranges. Make it clear what dates you’re asking for. Example: “Obligation start date” and “Obligation end date” 
- **Spell out full month names in the selected state** The month select box should have the full month’s name. Example: January 
- **Validate date inputs.** You should validate date inputs so you can let users know if they have entered one incorrectly. A general validation message for an incorrect date: *Please enter a valid date*
- **Use the date input field for date of birth.** Writing out the label for each birth date string and separating them into three fields instead of one eliminates potential format confusion.
- **Use one text input for Place of birth.** This format is easier to fill out for both Veterans born outside the United States and for Veterans who were born United States citizens.
 
## Content considerations

### Error message templates for dates

**If nothing is entered**
Say 'Please enter a date'

**If the date entered can’t be correct**
Say ‘Please provide a valid date'

**If the date entered is in a month year format and  can’t be correct**
Say 'Please enter a valid month and year'

**If the year needed to be within a specific range**
Say 'Please enter a year between [minimum year] and [maximum year]'

**For a date range, if the date must be after another date**
Say 'To date must be after From date'

**If the date is in the past when it needs to be today or in the future**
Say 'Please provide a valid current or future date'

**If the date is in the future when it needs to be past date or current date**
Say  'Please enter a valid current or past date'