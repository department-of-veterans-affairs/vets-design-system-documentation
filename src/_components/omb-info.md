---
layout: component
title: "OMB info"
status: use-deployed
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/v/eMln5p/a/ZOZ9J47/r/nZme2g
intro-text: "Provides text required by the Office of Management and Budget (OMB) to be present on all forms."
web-component: va-omb-info
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-omb-info--default" link_text="va-omb-info" %}

### Without OMB Number

{% include storybook-preview.html story="components-va-omb-info--without-omb-number" link_text="va-omb-info" %}

### Without Respondent Burden

{% include storybook-preview.html story="components-va-omb-info--without-response-burden" link_text="va-omb-info" %}

### With Custom Respondent Burden Benefit Type

{% include storybook-preview.html story="components-va-omb-info--with-custom-respondent-burden-benefit-type" link_text="va-omb-info" %}

### With Children
{% include storybook-preview.html story="components-va-omb-info--children" link_text="va-omb-info" %}

## Usage

### When to use OMB info

All Veteran-facing forms are required to display an OMB info control number at the bottom of the [form introduction page]({{ site.baseurl }}/templates/forms/#introduction-page). The specifics of what is required can be found in the [Paperwork Reduction Act (5 CFR 1320.5(b))](https://www.ecfr.gov/current/title-5/chapter-III/subchapter-B/part-1320#p-1320.5(b)(1)):

> ...an agency shall not conduct or sponsor a collection of information unless:
> (1) The collection of information displays a currently valid OMB control number; and
> (2)
>   (i) The agency informs the potential persons who are to respond to the collection of information that such persons are not required to respond to the collection of information unless it displays a currently valid OMB control number.

The Paperwork Reduction Act also specifies the placement of this information: 

> (B) In the case of forms, questionnaires, instructions, and other written collections of information sent or made available to potential respondents in an electronic format, the information described in paragraph (b)(2)(i) of this section is provided “in a manner that is reasonably calculated to inform the public” if the agency places the currently valid OMB control number in the instructions, near the title of the electronic collection instrument, or, for on-line applications, on the first screen viewed by the respondent.

In addition, the [Privacy Act (5 U.S.C. 552a(e)(3))](https://www.law.cornell.edu/uscode/text/5/552a) provides that "Each agency that maintains a system of records shall—":

> (3) inform each individual whom it asks to supply information, on the form which it uses to collect the information or on a separate form that can be retained by the individual—

The Privacy Act also requires that the user be told whether the information being collected:

* Is mandatory or voluntary 
* The principal purpose or purposes for which the information is intended to be used
* The effect on the user of not providing all or any part of the requested information

#### Exceptions

There are some times when an agency is permitted to start using a form before it is approved by OMB and thus the OMB info would not be displayed. For example, if an agency receives an emergency waiver pending approval. In such cases, a placeholder is used, for example "OMB Control No. 2900-XXXX" or "2900-0NEW.". 

This is covered in [Paperwork Reduction Act (5 CFR 1320.3(f)(4))](https://www.ecfr.gov/current/title-5/chapter-III/subchapter-B/part-1320#p-1320.3(f)(4)):

> (4) In other cases, and where OMB determines in advance in writing that special circumstances exist, to use other means to inform potential respondents of the OMB control number.

### When to consider something else

It is not permissible under the law to fail to show this information. 


### How this component works

OMB Info should appear at the bottom of a form introduction page and show:

- Respondent burden
- OMB control number
- Expiration date 
- Privacy act (link)

### Behavior

The "View Privacy Act Statement" is a button that triggers a modal window which displays the statement.

### Choosing between variations

Use the default variation unless explicitly instructed by a Product Owner to use a different variation due to an exception.

#### Respondent burden

The respondent burden estimate should be included when available, however it is not required. An agency is required to make the burden estimate and include it in supporting documents when requesting OMB approval. The request document becomes public once approved. Agencies also need to include the estimate in their public notice in the Federal Register. However, it is not strictly required on the form itself. Despite this when the burden estimate is available the default variation should be used.

### Placement

As mentioned above, the Paperwork Reduction Act is very specific about the placement of this information thus it must appear on the [form introduction page]({{ site.baseurl }}/templates/forms/#introduction-page).

## Content considerations

The content of this component should not be altered. Additional information may be provided the "With Custom Respondent Burden Benefit Type" and "With Children" variations of this component under specific circumstances.

## Accessibility considerations

* There are no specific accessibility considerations to take into account with this component.
* Note that the "#" in "OMB Control #" is correctly read by screen readers as "number". 
* This component was reviewed in September and October of 2022.

## Related

* [Privacy agreement]({{ site.baseurl }}/components/privacy-agreement)
* [Ask users for Social security or VA file number]({{ site.baseurl }}/patterns/ask-users-for/social-security-number)

{% include _component-checklist.html component_name=page.web-component %}