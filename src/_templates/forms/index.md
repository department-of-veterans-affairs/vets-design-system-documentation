---
layout: pattern
title: Forms
inner-title: Overview
permalink: /templates/forms/
redirect_from:
  - /patterns/forms/
contributors: "Shawna Hein, Jonathan Nelson, Liz Lantz, Christian Valla, Becca Walsh, Chris Valarida, Peggy Gannon"
status: use-deployed
intro-text: "Common form structures and designs used on VA.gov"
sub-pages:
  - sub-page: How to apply
  - sub-page: Introduction
  - sub-page: Form step
  - sub-page: Form step - minimal
  - sub-page: Review
  - sub-page: Confirmation
---

{% include _site-in-this-section.html %}

## The structure of a form

{% include component-example.html alt="Representative pages of a form flow for VA.gov." file="/images/templates/forms/flow.png" caption="The anatomy of a form flow." %}

1. **[How to apply (aka Landing) page]({{ site.baseurl }}/templates/forms/how-to-apply).** A page built in Drupal that outlines eligibility requirements, provides details on how to apply, and what happens after an application is submitted.
1. **[Introduction page]({{ site.baseurl }}/templates/forms/introduction).** The form introduction page gives users information about what they can expect before they submit an online application. This page also provides users with steps on how to apply.
1. **[Step form pages](#patterns).** The majority of a form, these pages follow one of the form patterns designed in the system.
1. **[Review page]({{ site.baseurl }}/templates/forms/review).** Allows the user to review information and make edits if necessary.
1. **[Confirmation page]({{ site.baseurl }}/templates/forms/confirmation).** Gives users information about what they can expect after they submit an online application.

## Patterns

All of the patterns in the "[Ask users for...]({{ site.baseurl }}/patterns/)" section of our patterns are form patterns for collecting information from users. However, the following patterns for collecting information more generically may be of particular interest:

* [Ask users for a single response]({{ site.baseurl }}/patterns/ask-users-for/a-single-response)
* [Ask users for multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses)
* [Help users to check answers]({{ site.baseurl }}/patterns/help-users-to/check-answers)

## Components

* [Form elements]({{ site.baseurl }}/components/form)
* [Additional info]({{ site.baseurl }}/components/additional-info)
* [Error messages]({{ site.baseurl }}/content-style-guide/error-messages)

## Additional topics

* [Form labels]({{ site.baseurl }}/content-style-guide/form-labels)
* [Hint text]({{ site.baseurl }}/components/form/#hint-text)
* [Title tags]({{ site.baseurl }}/content-style-guide/title-tags)

### Cross-Page Topics

#### Legalese vs. Plain Language

(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200](https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200))

In general, our online forms should not be framed as a 1:1 mapping of the paper form - in other words, what we are building are data collection mechanisms for the forms themselves, and therefore do not need approval in the same way the forms themselves do. Therefore, the language does not need to map 1:1 to the paper forms. In general, voice and tone strategy on our online pages should use plain language.

A [legal memo](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf) addresses this situation:

> “As long as the underlying, approved form is not altered and the interactive materials essentially collect the same information, then OIRA considers these applications a nonsubstantive change to an already approved collection, and would encourage their development.”

For legal or regulatory content, however, we need to use judgment and be careful. Sometimes this might mean providing a plain language summary and the legal language in parentheses for reference. We’ve sometimes used this approach on the public website unauthenticated pages. For tools and authenticated experiences, you can use things like the “learn more” dropdown or modals to have plain language versions alongside legal definitions.

You may need to get PRA approval or other kinds of approval if you are tweaking the form itself and/or adding fields.