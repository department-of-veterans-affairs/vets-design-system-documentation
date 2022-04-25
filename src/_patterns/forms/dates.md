---
layout: pattern
permalink: /patterns/forms/dates
has-parent: /patterns/forms/
title: Dates
intro-text: "The current implementation for collecting dates on VA.gov forms."
status: use-deployed
anchors:
  - anchor: When to use this pattern
  - anchor: Usage
  - anchor: Error message templates for dates
---

## When to use this pattern 

Follow this pattern whenever you need users to provide a date on a form.

Dates you may need users to provide include:
- Dates a user knows, like a date of birth or marriage
- Dates a user can approximate , like February 2021
- Date ranges, like service history dates 

### Dates a user knows

Use the month/day/year date input component for most dates, particularly memorized dates. 

![date input for memorized dates: month day and year]({{site.baseurl}}/images/date-input.png) 

### Dates a user can approximate

Use the month/year date input component for dates that a user may struggle to remember. For example: *When did you receive your high school diploma or equivalency certificate?* 

![date input for approximate dates: month and year]({{site.baseurl}}/images/date-input-month-year.png) 
 
### Date ranges

Use  month/day/year inputs or month/year inputs depending on the question being asked. For example: Service history dates

![date ranges: service start date and service end date]({{site.baseurl}}/images/date-ranges.png) 

## Usage

- **Write clear form labels for date ranges** Do not use “From” and “To” to when labeling form labels for date ranges. Make it clear what dates you’re asking for. Example: “Obligation start date” and “Obligation end date” 
- **Spell out full month names in the selected state** The month select box should have the full month’s name. Example: January 
- **Validate date inputs.** You should validate date inputs so you can let users know if they have entered one incorrectly. A general validation message for an incorrect date: *Please enter a valid date*
 
## Error message templates for dates

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