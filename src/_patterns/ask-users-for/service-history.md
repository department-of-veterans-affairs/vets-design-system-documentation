---
layout: pattern
permalink: /patterns/ask-users-for/service-history
sub-section: ask-users-for
title: Service history
intro-text: "Follow this pattern to ask a user about their service/military history."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to build
  - anchor: Usage - Service under another name
  - anchor: Usage - Reserves and National Guard and Federal Orders
  - anchor: Usage - Prisoner of War (POW)
---

## Usage

### When to use this pattern

* **Service periods.** Follow this pattern whenever you need to ask for a Veteran's periods of service in the military. 
* **Use the multiple response pattern for adding multiple service periods.** This is an example of a complex list and loop pattern with multiple form inputs to gather multiple pieces of information. Read more about the [multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) pattern.
* **Some forms will only require the last branch of service.** The healthcare application is an example of a form where they do not need the multiple entries of service periods, so we do not use the list and loop pattern there.

## Examples

- [VA Form 21P-527EZ - Application for Pension Benefits](https://www.va.gov/pension/application/527EZ/introduction)
- [VA Form 21-526EZ - Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [VA Form 10-10EZ - Application for Health Benefits](https://staging.va.gov/health-care/apply/application/introduction)
- [VA Form 22-1990N - Application for VA Education Benefits Under the National Call to Service (NCS) Program](https://www.va.gov/education/apply-for-education-benefits/application/1990N/introduction)

## How to design and build

### Service periods

#### Structure
- Heading
- Branch of service text input 
- Service start date input 
- Service end date input
- Type of service text input (if applicable)
- Character of service -- this can also be Character of discharge -- text input (if applicable) 
- ‘Add another service period’ secondary button

![pension-serviceperiods-1]({{site.baseurl}}/images/patterns/ask-users-for/service-history/list-and-loop.png)

![pension-serviceperiods-2]({{site.baseurl}}/images/patterns/ask-users-for/service-history/list-and-loop3.png)

## Usage - Service under another name

Follow this pattern whenever you need to ask a user if they served under another name. 

- **The name template fields are conditional fields that are revealed when a user selects “yes.”**  Conditional fields are used in forms to reveal form elements that become relevant based on a user's response to a question. The blue border should be used to create a visual relationship between the parent question and conditional fields it reveals, and should overlap the top and bottom of parent and children.  
- **Use the list and loop pattern for adding multiple names.** The user will be able to add multiple names they’ve served under. Read more about the [multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) pattern.

### Structure

- ‘Did you serve under another name’ radio buttons
(If user selects yes)
  - Name form template
  - ‘Add another name’ secondary button
- ‘Place of last or anticipated separation from service’ text input

![service under another name]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-name.png)

## Usage - Reserves and National Guard and Federal Orders

Follow this pattern whenever you need to ask for a user’s Reserve or National Guard information. Persons in the Reserve or National Guard are not full-time active duty military personnel, although they can be deployed at any time should the need arise. 

### Structure - Reserves and National Guard Disability
- Obligation start date input
- Obligation end date input
- Unit name text input

![reserves and national guard disability form structure]({{site.baseurl}}/images/patterns/ask-users-for/service-history/reserves-disability.png)

### Structure - Reserves and National Guard Pension

- ‘Are you currently on federal active duty in the National Guard?’ radio buttons
(If user selects yes)
  - ‘Name of reserve/National guard unit’ text input
  - Unit address form template (if applicable)
  - Unit phone number (if applicable)
  - Service start date input

![reserves and national guard pension form structure]({{site.baseurl}}/images/patterns/ask-users-for/service-history/reserve-pension.png)

### Structure - Federal Orders Disability

- ‘Are you currently activated on federal orders?’ radio buttons
(If user selects yes)
  - Activation start date input
  - Expected separation date input (This could also be Anticipated separation date)

![federal orders]({{site.baseurl}}/images/patterns/ask-users-for/service-history/federal-orders.png)

## Usage - Prisoner of War (POW)

Follow this pattern whenever you need to ask for a user’s POW information. Former prisoners of war (POW) are Veterans who, during active military service, were forcibly detained or interned in the line of duty by an enemy government or its agents or a hostile force.

- **Don’t ask if it does not benefit the user experience.** You should only ask users about POW information when absolutely necessary. 
- **Depending on the form, use the List and Loop pattern to add multiple confinement periods.** An example of adding multiple confinement periods is in the [File for disability compensation form](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction). 

### Structure - POW Status and Severance Pay

- ‘Are you a former POW?’ radio buttons
(If user selects yes)
  - Start of confinement date input
  - End of confinement date input
- ‘Add another  period’ secondary button (if applicable)
- ’Have you received any type of severance or separation pay?’ radio buttons
(If user selects yes)
  - ‘Pay type’ radio buttons
  - ‘Amount’ number input

![prisoner of war and severance pay]({{site.baseurl}}/images/patterns/ask-users-for/service-history/pow-status.png)

