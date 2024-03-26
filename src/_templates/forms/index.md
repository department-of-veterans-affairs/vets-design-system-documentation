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

### Cross-Page Topics

#### Legalese vs. Plain Language

(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200](https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200))

In general, our online forms should not be framed as a 1:1 mapping of the paper form - in other words, what we are building are data collection mechanisms for the forms themselves, and therefore do not need approval in the same way the forms themselves do. Therefore, the language does not need to map 1:1 to the paper forms. In general, voice and tone strategy on our online pages should use plain language.

A [legal memo](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf) addresses this situation:

> “As long as the underlying, approved form is not altered and the interactive materials essentially collect the same information, then OIRA considers these applications a nonsubstantive change to an already approved collection, and would encourage their development.”

For legal or regulatory content, however, we need to use judgment and be careful. Sometimes this might mean providing a plain language summary and the legal language in parentheses for reference. We’ve sometimes used this approach on the public website unauthenticated pages. For tools and authenticated experiences, you can use things like the “learn more” dropdown or modals to have plain language versions alongside legal definitions.

You may need to get PRA approval or other kinds of approval if you are tweaking the form itself and/or adding fields. 

<!--
## The Form Design Process

There are a few documents that have been written to help PMs and their teams structure how and when they do things when embarking on a form project for VA.gov: 

* [VA.gov form design process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-resources/form-design-process.md)
* [Content process for modernizing VA.gov forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-content-process.md)

This document will not attempt to rewrite those documents, however, we will provide a few tips per practice area:

### Product Managers
* Make sure you understand the full picture before your team gets in too deep
   * What are the business needs?
   * What are the stakeholder needs?
   * What fields are actually required? What is optional? Based on user research, are there any fields we can drop?
   * Do we already know of any potentially triggering / invasive / confusing questions that are required? Do we really need to have those fields? If so, what kind of things can we say to explain why they are there? 
   * Start discussions on security & privacy with the platform security team (POC effective 12/2022: Mike Chelen)
   * Document these answers in a Product Outline.
* If you'd like to think about analytics for your form, Platform Analytics also has [documentation for adding analytics for forms](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/google-analytics-data-dictionary)

### Designers
* User research discovery
   * What other tools / sources are participants using to perform the task(s)? E.g. VSOs, phone calls, etc.
   * What VA and non-VA resources are participants using to learn about these things? E.g. social media groups, etc.
   * What does the user want to get out of this form?
* Competitive Analysis
   * What are others doing in a similar space that we should be looking to for inspiration?
* If there is an already existing form of some kind:
   * How are users currently using the form and process? What can we learn from that?
   * Take all the fields on the form and think about them as individual components. Then group them together logically to start determine how your chapters and pages are going to be laid out
   * Some folks have found it helpful to create a text-based outline of the form fields - to do some of the high level grouping and organization before getting into Sketch -- something like this: [21P-527EZ Pension Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/pension-outline.md)
      * An excel spreadsheet could also be helpful for this
   * Build a wireflow or flow diagrams to show at a high level how things are going to work
   * Create your final wireframes
* Incorporate accessibility considerations
   * Focus management
   * Hierarchy/labelling

### Developers
* Make sure you read up on and understand form builder:
   *  Fill out a few forms on staging.va.gov to get a feel for the capabilities of the forms system.
   *  [Watch the zoom video of a quick demo Chris Valarida gave to the design team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/va-forms-informal-for-designers.mp4) in Feb. 2020. He goes over an example JSON object used by react-jsonschema-form (RJSF), and toggles between it and the rendered UI, so developers may find it useful.
   *  The forms documentation is not perfect. Read through VSA's informal notes at https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/engineering/forms-system. The documents there will be written from the perspective of developers consuming the library, so it may contain tips, gotcha's, and known issues. 
   *  If you have determined that you need to implement custom behavior or appearance that the existing components do not support out-of-the-box, FIRST confirm with your design team that the feature is needed and cannot be implemented an alternate way that fits within the limitations of the existing forms framework. The va<span/>.gov Forms System (VAFS) is built on top of the VA's fork of react-jsonschema-form (RJSF), so if customization is required (or if you need a deeper understanding that goes beyond the tutorial), then you will need to dig one level deeper:
      *  Read the overview [Creating custom fields and widgets](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Forms-Library---How-to-create-custom-fields-and-widgets.2115567784.html), THEN
      *  Consult the lower-level RJSF documentation on the [GitHub Repository for the VA fork of RJSF](https://github.com/department-of-veterans-affairs/react-jsonschema-form). Although you may run into other web sites that cover RJSF, stick with the documentation used specifically by the VA fork.

* Make sure you start early when investigating data flows. Where will your data be coming from? Where will it be going?
   * Note: enlist your PM to help you find answers to this 
* Read up on and understand all APIs and associated data models. Think about and capture in your discovery tickets:
   * Performance considerations of the APIs
   * The data fields that are available and what “real data” we are actually getting
* Security considerations
   * Make sure you understand if any of your data needs special security measures
* When starting to build your form, the generally accepted practice on VA.gov is outlined below:
   * Use the form system to build the initial structure / scaffolding of your form (e.g. introduction page, middle pages, confirmation page) and merge that scaffolding to master
   * Insert all needed data fields on the front-end to have them there. The designer will later help guide the developer on how the fields will be “chunked”, styled, etc.
   * Make sure to merge often so you can get frequent reviews and code isn’t hoarded and the all reviewed at once
   * If possible, start with pages or flows that may be difficult
      * Some things aren’t possible using the forms system; it’s best to find out if your form has any of those as soon as possible so the design can be reconsidered if needed
   * While your form’s schema is in heavy development, keep it in vets-website to avoid updating the vets-json-schema dependency on every branch; once it’s settled down, move it to vets-json-schema
   * Make sure to be regularly communicating with your designer(s) to ensure you understand requirements, and collaborate with them on coming up with tweaks to the designs if necessary
* **For QA**, there exist some [e2e test helpers for testing forms](https://depo-platform-documentation.scrollhelp.site/developer-docs/end-to-end-testing-with-cypress). The code is fairly nicely commented though but there isn't a lot of documentation about how to use them as far as we know. 
* **For Accessibility**, you will need to build comprehensive e2e tests for these form views, and that includes axe checks for every page. Ideally, these happen just before navigating away from a page, not immediately after loading the page. That way we get a good feel for all the content, and hidden content like progressive questions are surfaced. [More guidance can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md).
-->