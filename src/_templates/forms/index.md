---
layout: pattern
title: Forms
inner-title: Overview
permalink: /templates/forms/
contributors: "Shawna Hein (VSA Design Lead), Jonathan Nelson, Liz Lantz, Christian Valla, Becca Walsh, Chris Valarida, Peggy Gannon"
status: use-deployed
intro-text: "Common form structures and designs used on VA.gov"
sub-pages:
  - sub-page: Confirmation
---

{% include _site-in-this-section.html %}

## The structure of a form

{% include component-example.html alt="Representative pages of a form flow for VA.gov." file="/images/templates/forms/flow.png" caption="The anatomy of a form flow." %}

1. **[Content landing page](#content-landing-page).** A page built in Drupal that outlines eligibility requirements and/or how to apply. Also, provides information about the benefit. 
1. **[Introduction page](#introduction-page).** Includes a call-to-action to login if relevant and a subway map / timeline of what the user can expect when filling out the form.
1. **[Main form pages](#main-form-pages).** The majority of a form, these pages are laid out in chapters. Each chapter may have multiple pages.
1. **[Review page]({{ site.baseurl }}/patterns/help-users-to/check-answers).** Allows the user to review information and make edits if necessary.
1. **[Confirmation page]({{ site.baseurl }}/templates/confirmation).** Gives users information about what they can expect after they submit an online application.


## Pages

### Content landing page

A page that a user can read before entering an online form where they learn about eligibility and how to apply. This page can contain several elements:

* [Help users to complete a sub-task]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task) pattern
* [Process list]({{ site.baseurl }}/components/process-list)
* [Application status widget](#application-status-widget) that links to the form

#### Examples
* [https://www.va.gov/health-care/how-to-apply/](https://www.va.gov/health-care/how-to-apply/)
* [https://www.va.gov/health-care/eligibility/](https://www.va.gov/health-care/eligibility/)
* [https://www.va.gov/disability/how-to-file-claim/](https://www.va.gov/disability/how-to-file-claim/)


#### Application status widget

This application status widget is a dynamic section within the content pages, and changes depending on whether the user is logged out/logged in and whether they have started a form or not.  

The states can be seen here [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406902821](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406902821)


### Introduction Page

[Guidelines on the content of the introduction page can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-introduction-page-template.md)

Example here: [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406500061](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406500061)

### Main Form Pages

Some examples start here (use the right arrow key to navigate through): [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903387](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903387)

### Splitting forms into chapters
(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1578005824025300](https://dsva.slack.com/archives/C0NGDDXME/p1578005824025300))

* Users are given guidance on where they are in the form using a [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented). Each segment of the bar represents a "chapter" in the form.  Note that there can be multiple "pages" within each chapter, so the bar does not always increment when the user clicks between pages.
* When deciding how fields should be laid out in the form in terms of “chunking,” forms should be sectioned into chapters, with the progress bar in a "how you would explain the steps to someone out loud" methodology. (e.g. first we'll get veteran info, then spouse info, then info about the claim)
* If the screens within the chapters end up having more than 3-5 questions, or more than one conceptual topic, as a general rule, break those screens into multiple "pages" within the section. For example, if you have a chapter on “Veteran info” you may have multiple pages within that chapter, one where you get contact information, another where you get medical information. 
   * **Note for the future:** There is general consensus that this design pattern could be improved. It’s not ideal for a user to click “continue” and not have the progress bar increment.  A small percentage of users are consistently confused by this behavior. Additionally, the number of pages may increase or decrease based on conditional questions, which adds complications to improving this pattern.
* With conditional questions, use the blue bar / expanding element as long as it's not too long / overwhelming and/or requires a call to another service.  Otherwise, use another page within the section instead.

## Patterns

* [Ask users for multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses)
* [Help users to check answers]({{ site.baseurl }}/patterns/help-users-to/check-answers)

## Components

* [Additional info]({{ site.baseurl }}/components/additional-info)
* [Error messages]({{ site.baseurl }}/content-style-guide/error-messages)
* [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented).

## Additional topics

* [Form labels]({{ site.baseurl }}/content-style-guide/form-labels)
* [Hint text]({{ site.baseurl }}/components/form/#hint-text)

### Cross-Page Topics

#### Legalese Vs Plain Language
(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200](https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200))

In general, our online forms should not be framed as a 1:1 mapping of the paper form - in other words, what we are building are data collection mechanisms for the forms themselves, and therefore do not need approval in the same way the forms themselves do.  Therefore, the language does not need to map 1:1 to the paper forms.  In general, voice and tone strategy on our online pages should use plain language.

A legal memo addresses this situation.: “As long as the underlying, approved form is not altered and the interactive materials essentially collect the same information, then OIRA considers these applications a nonsubstantive change to an already approved collection, and would encourage their development.” ([https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf)).

For legal or regulatory content, however, we need to use judgment and be careful. Sometimes this might mean providing a plain language summary and the legal language in parentheses for reference. We’ve sometimes used this approach on the public website unauthenticated pages. For tools and authenticated experiences, you can use things like the “learn more” dropdown or modals to have plain language versions alongside legal definitions.

You may need to get PRA approval or other kinds of approval if you are tweaking the form itself and/or adding fields. Contact Rachel Sauter at USDS for details. 

## The Form Design Process

There are a few documents that have been written to help PMs and their teams structure how and when they do things when embarking on a form project for VA.gov: 

* [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-resources/form-design-process.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-resources/form-design-process.md)
* [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-process-modernizing-VA-forms.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-process-modernizing-VA-forms.md)

This document will not attempt to rewrite those documents, however, we will provide a few tips per practice area:

### Product Managers
* Make sure you understand the full picture before your team gets in too deep
   * What are the business needs?
   * What are the stakeholder needs?
   * What fields are actually required? What is optional? Based on user research, are there any fields we can drop?
   * Do we already know of any potentially triggering / invasive / confusing questions that are required? Do we really need to have those fields? If so, what kind of things can we say to explain why they are there? 
   * Start discussions on security & privacy with the platform security team (POC effective 11/2021: Thomas Delrue)
   * Document these answers in a Product Outline.
* If you'd like to think about analytics for your form, Platform Analytics also has [documentation for adding analytics for forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/data-dictionary-form-events.md).

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
   * Some folks have found it helpful to create a text-based outline of the form fields - to do some of the high level grouping and organization before getting into Sketch -- something like this: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/pension-outline.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/pension-outline.md)
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
* **For QA**, there exist some [e2e test helpers for testing forms](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/form-tester). The code is fairly nicely commented though but there isn't a lot of documentation about how to use them as far as we know. 
* **For Accessibility**, you will need to build comprehensive e2e tests for these form views, and that includes axe checks for every page. Ideally, these happen just before navigating away from a page, not immediately after loading the page. That way we get a good feel for all the content, and hidden content like progressive questions are surfaced. [More guidance can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md).
