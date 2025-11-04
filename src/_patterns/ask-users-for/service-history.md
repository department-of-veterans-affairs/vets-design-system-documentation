---
layout: pattern
permalink: /patterns/ask-users-for/service-history
sub-section: ask-users-for
title: Service history
intro-text: "Follow this pattern to ask a user about their service/military history."
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988%3A28636&mode=design&t=l6EMCglfD9f8DZuv-1
github-title: pattern-service-history
research-title: Ask users for service history
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to build
  - anchor: Service under another name
  - anchor: Reserves and National Guard and Federal Orders
  - anchor: Prisoner of War (POW)
---

## Usage

### When to use this pattern

* **Service periods.** Follow this pattern whenever you need to ask for a Veteran’s periods of service in the military.  
* **Use the multiple response pattern if your form allows Veterans to add more than 1 service period.** This is an example of a complex list and loop pattern with multiple form inputs to gather additional pieces of information. Read more about the \[multiple responses pattern\]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses).  
* **Some forms only require the last branch of service.** The health care application is an example of a form where Veterans don’t need multiple entries of service periods.  
* **We can prefill service data using API data, but it may be inaccurate.** Provide a way for Veterans to review and make changes to the form. Clearly state that any changes made to service data within the form won’t change the data that VA has on file.

## Examples

* [Simple Forms Patterns: Branch of Service Pattern](https://staging.va.gov/mock-simple-forms-patterns/service-branch)
* [Application for Pension Benefits (VA Form 21P-527EZ)](https://www.va.gov/pension/application/527EZ/introduction)
* [Application for Disability Compensation and Related Compensation Benefits (VA Form 21-526EZ)](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
* [Application for Health Benefits (VA Form 10-10EZ)](https://staging.va.gov/health-care/apply/application/introduction)
* [Application for VA Education Benefits Under the National Call to Service (NCS) Program (VA Form 22-1990N)](https://www.va.gov/education/apply-for-education-benefits/application/1990N/introduction)

## How to design and build

### Service periods

#### Structure

* Heading. Use “Service periods” as the heading for this page.
* [Branch of service](https://staging.va.gov/mock-simple-forms-patterns/service-branch) combo box input. Use autocomplete to allow users to select a branch. Use “Branch of service” as the field label.
* Service start date input. Use the memorable date component. Use “Service start date” as the field label.
* Service end date input. Use the memorable date component. Use “Service end date” as the field label.

![service periods]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-periods.jpg)

### Service locations

Follow this pattern whenever you need to ask for location information about their service periods. Use hint text to clarify what type of location information we need for this field. Check with stakeholders to confirm what information we need.

#### Structure

* Heading. Use “Service locations” as the heading for this page.
* Place you started your service. Use the text input component. Use “Place you started your service” as the field label.
* Hint text. Use the hint text component to specify what information Veteran’s need to include. The content will vary based on the form.
* Place you ended your service. Use the text input component. Use “Place you ended your service” as the field label.

* ![service locations]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-locations.jpg)

### Service details

Follow this pattern whenever you need to ask for extra information about their service periods. Group fields by relationship and try not to exceed more than 3 fields at a time.

#### Structure

* Heading. Use “Service details” as the heading for this page.
* Service number. Use the text input component. Use “Service number” as the field label.
* Grade, rank, or rating when separated from service (if applicable). Use the text input component. Use “Grade, rank, or rating when service ended” as the field label.
* Character of service/discharge (if applicable). Use the text input component. Use “Character of service/discharge” as the field label.
* Type of service (if applicable). Use the text input component. Use “Type of service” as the field label.

* ![service details]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-details.jpg)

### Service under another name

Follow this pattern whenever you need to ask a Veteran if they served under another name.

Use the list and loop pattern for adding multiple names. Read more about the \[multiple responses pattern\]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses).

#### Structure

* Multi-response optional start. Use the multiple responses pattern. Use “Did you serve under another name?” as the heading for this page.

* Hint text. Include this hint text: “If you select “Yes,” you’ll need to add at least 1 other name,”  
* Name pattern. Use “Name you served under” as the heading for this page.  
* Multi-response summary. Use the multiple responses pattern. Use “Review the other names you served under” as the heading for this page.

![service under another name]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-name.jpg)

![service under another name detail]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-name-detail.png)

![service under another name detail]({{site.baseurl}}/images/patterns/ask-users-for/service-history/service-name-summary.png)

### **Reserves and National Guard and Federal Orders**

Follow this pattern whenever you need to ask for a Veteran’s Reserve or National Guard information. Persons in the Reserve or National Guard aren’t considered full-time active-duty military personnel. But they can be deployed at any time should the need arise.

#### **Structure**

* Heading. Use “Reserves and National Guard” as the heading for this page.

* Obligation start date input. Use the memorable date component. Use “Obligation start date” as the field label.

* Obligation end date input. Use the memorable date component. Use “Obligation end date” as the field label.  
* Unit name. Use the text input component. Use “Unit name” as the field label.

![reserves and national guard]({{site.baseurl}}/images/patterns/ask-users-for/service-history/reserves-nationalguard.jpg)


### Prisoner of War (POW)

Follow this pattern whenever you need to ask for a Veteran’s prisoner of war (POW) information. Former POWs are Veterans who, during active military service, were forcibly detained or interned in the line of duty by an enemy government or its agents or a hostile force.

* **Don’t ask if the form doesn’t require POW information.** You should only ask about this information when absolutely necessary.  
* **Depending on the form, use the multiple response pattern to add multiple periods of time held as a POW.** An example of adding multiple periods is in the [File for disability compensation form](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction).  
* **When asking for dates, include hint text if this date can be an estimate.** 

#### **Structure**

* Multi-response optional start. Use the multiple responses pattern. Use “Have you ever been a prisoner of war (POW)?” as the heading for this page.  
* Heading. Use “Period of time held as a POW” for this page.  
  * Hint text. Use “These dates need to be within a single service period.” If the dates can be estimates, add “You can give an estimate for these dates, if needed.”  
  * Start date input. Use the memorable date component. Use “Start date” as the field label.  
  * End date input. Use the memorable date component. Use “End date” as the field label.  
* Multi-response summary. Use “Review the periods held as a POW” as the heading for this page.

![prisoner of war status]({{site.baseurl}}/images/patterns/ask-users-for/service-history/pow-status.jpg)

![prisoner of war period]({{site.baseurl}}/images/patterns/ask-users-for/service-history/pow-period.jpg)

![prisoner of war period summary]({{site.baseurl}}/images/patterns/ask-users-for/service-history/pow-period-summary.png)
