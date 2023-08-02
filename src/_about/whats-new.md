---
layout: default
title: What’s new?
---

# What’s new?

<div class="va-introtext">
  The latest news and updates on the Design System, Forms library and the Content style guide.
</div>

## Summer 2023

The team continues to focus on building out new variations of our components based on USWDS v3. 

### New and updated components

* [va-back-to-top]({{ site.baseurl }}/components/back-to-top) changed from a button to a link by @jamigibbs in #746
* [va-button](https://design.va.gov/storybook/?path=/docs/components-va-button--primary-alternate): Add alternate (green) version to primary button by @powellkerry in #771
* Added [va-maintenance-banner]({{ site.baseurl }}/components/banner/maintenance) web component by @powellkerry in #713
* Added [va-notification]({{ site.baseurl }}/components/notification) web component by @allisonlu in #702

### USWDS v3-based components

* Added va-accordion USWDS v3 variation by @powellkerry in #728
* Added Additional info v3 by @harshil1793 in #703
* Added va-breadcrumbs: Add USWDS variation by @harshil1793 in #711
* [va-icon](https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default): Add new web component @it-harrison in #772
* Added va-process-list: Add USWDS variation by @ataker in #770

#### Bug fixes

A long list of bug fixes can be found in our [component release notes](https://github.com/department-of-veterans-affairs/component-library/releases).

### Content style guide updates

* Added guidance on [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).

### Deprecated React components

* Table 
* CheckboxGroup


## Spring 2023

The team has mainly focused on building out new variations of our form components based on USWDS v3. However, we've also made the changes below.

### New and updated components

* Updated [va-table to support pagination]({{ site.baseurl }}/components/table#with-pagination).
* Alert - Background-color-only with no icon is now deprecated in favor of the with icon variation. That variation is now known as [Alert - Slim]({{ site.baseurl }}/components/alert#examples---slim-alert), to align with the US Web Design System.
* Added va-card to [Card]({{ site.baseurl }}/components/card) in addition to new examples
* Added width variations to [Text input]({{ site.baseurl }}/components/form/text-input#widths) and [Number input]({{ site.baseurl }}/components/form/number-input#widths)
* Added fieldsets to [radio buttons]({{ site.baseurl }}/components/form/radio-button) and [checkboxes]({{ site.baseurl }}/components/form/checkbox#examples---group)
* Added [Form - Autosave]({{ site.baseurl }}/components/form/autosave)
* Added [Form - Need help?]({{ site.baseurl }}/components/form/need-help)
* Added [Form - Penalty notice]({{ site.baseurl }}/components/form/penalty-notice)
* Added [Form - Prefill]({{ site.baseurl }}/components/form/prefill)
* Added icon support to [va-accordion-item]({{ site.baseurl }}/components/accordion#icon-in-header)
* Added Tile variation to [va-checkbox]({{ site.baseurl }}/components/form/checkbox#tile)
* Added option for currency to [va-number-input]({{ site.baseurl }}/components/form/number-input#currency)
* Added extra hint text to [va-memorable-date]({{ site.baseurl }}/components/form/memorable-date#extra-hint-text)

See the [component-library release notes](https://github.com/department-of-veterans-affairs/component-library/releases) for more detailed issues on component fixes.

### Content style guide updates

* Added a [Specific topics and programs section]({{ site.baseurl }}/content-style-guide/specific-topics-and-programs/) with a [Payments and debts entry]({{ site.baseurl }}/content-style-guide/specific-topics-and-programs/payments-and-debts/).
* Revised our [Bulleted lists]({{ site.baseurl }}/content-style-guide/bulleted-lists) section. We now recommend always introducing bulleted lists with a full sentence. This helps with our efforts to translate content.
* Revised the [en dash entry]({{ site.baseurl }}/content-style-guide/punctuation#em-and-en-dashes-hyphens) in our [Punctuation section]({{ site.baseurl }}/content-style-guide/punctuation/). We now recommend avoiding en dashes for accessibility reasons. Screen readers don’t consistently announce them.
* Revised our [plain language section]({{ site.baseurl }}/content-style-guide/plain-language/).

### New entries in [Word list]({{ site.baseurl }}/content-style-guide/word-list/)

* Defense Department
* Department of Defense
* Edith Nourse Rogers STEM Scholarship
* PACT Act
* Service-connected disability rating

### Deprecated React components

* DropdownPanel
* ProgressButton
* RadioButtons
* SystemDownView

### Sketch Library updates

* Added the aforementioned new Form components (Autosave, Need help?, Penalty notice, Prefill)
* Templates library now uses the correct header and footer throughout.
* Reorganized patterns to match new naming and nav structure.
* Added sidenav mobile menu.
 

### Documentation updates

* Added Form templates for [How to apply]({{ site.baseurl }}/templates/forms/how-to-apply), [Introduction]({{ site.baseurl }}/templates/forms/introduction), [Review]({{ site.baseurl }}/templates/forms/review).
* Added variations to checkbox, number input, and memorable date.


## Winter 2022-2023

### New and updated components

* Updated the Link - Collection component to add an example of a Section collection.
* Added SMS option to va-telephone component
* Added autocomplete prop to va-text-input
* Tagalog translation added to va-text-input 
* Tagalog translation added to va-accordion
* Added calendar variation to va-link

### Deprecated React components

* AcceptTerms
* HelpMenu
* IconHelp
* PrivacyAgreement

### Sketch Library updates

* Accordion - Two-line header variation
* Alert - Action link variation for sign-in/tool prompt alert
* Link - Calendar variation
* USWDS upgrade - New symbols for four USWDS components: Radio button, Text input, Memorable date, and US Banner

### Documentation updates

* Updated [icons]({{ site.baseurl }}/foundation/icons/) to more accurately reflect the icons in use across VA.gov.
* Added [Help users to know how their information is updated]({{ site.baseurl }}/patterns/help-users-to/know-how-their-information-is-updated)
* Added [Help users to keep a record of submitted information]({{ site.baseurl }}/patterns/help-users-to/keep-a-record-of-submitted-information)
* Updated [Ask users for Multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses)
* Updated [Ask users for addresses]({{ site.baseurl }}/patterns/ask-users-for/addresses)
* Updated [Ask users for email address]({{ site.baseurl }}/patterns/ask-users-for/email-address)
* Updated [Ask users for files]({{ site.baseurl }}/patterns/ask-users-for/files)
* Updated [Ask users for signature]({{ site.baseurl }}/patterns/ask-users-for/signature)
* Updated [Help users to complete a sub-task]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task)