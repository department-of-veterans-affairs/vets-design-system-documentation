---
layout: default
title: What’s new?
---

# What’s new?

<div class="va-introtext">
  The latest news and updates on the Design System, Forms library and the Content style guide.
</div>

## Spring 2023

The team has mainly focused on building out new variations of our form components based on USWDS v3. However, we've also made the changes below.

### New and updated components

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

* CheckboxGroup
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


## September 2022

### New and updated components

* [Privacy agreement]({{ site.baseurl }}/components/privacy-agreement)
* **Translation indicator.** Components that have Spanish translation now have a label next to their maturity level at the top of the page (e.g. [Accordion]({{ site.baseurl }}/components/accordion)).
* A [number of fixes](https://github.com/department-of-veterans-affairs/component-library/releases?q=created%3A2022-09-01..2022-09-30+prerelease%3Afalse&expanded=true) including:
  * Fixed va-checkbox label alignment
  * Added label prop value to va-button in the va-file-input component 
  * Fixed month validation utility 
  * Aligned web component labels, descriptions, and error message font weights
  * Adjust va-checkbox margin from error-message to label
  * Fixed alert expandable component calc-max-height

### Sketch Library updates

* We created our first ["Shared library" for Search components](https://www.sketch.com/s/ab0f611b-c15c-42c4-ab71-1158ff6e01c6). Shared libraries extend the core library with additional components that are organized by functionality. Read more about [shared libraries]({{ site.baseurl }}/about/designers/design-libraries#shared-libraries).
 
### Documentation updates

 * We also updated documentation on all of our [design libraries]({{ site.baseurl }}/about/designers/design-libraries).
 * Added a new pattern: [Ask users for pronouns]({{ site.baseurl }}/patterns/ask-users-for/pronouns). This pattern also covers how to provide a way to give an answer not in the list of options. 
 * Revised the pattern detailing how to [Ask users for gender]({{ site.baseurl }}/patterns/ask-users-for/gender)

## August 2022

### New and updated components

#### Use with caution

* [File input]({{ site.baseurl }}/components/form/file-input)
* [Memorable date]({{ site.baseurl }}/components/form/memorable-date)
* [Month/year]({{ site.baseurl }}/components/form/date-input#monthyear)

### Sketch Library updates

* Added the [Privacy agreement component](https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/symbols?g=Privacy%2520agreement).
* Organized text and layer styles, deleted duplicates.

### Documentation updates

* [Alert]({{ site.baseurl }}/components/alert), [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable), [Additional information]({{ site.baseurl }}/components/additional-info), [Banner]({{ site.baseurl }}/components/banner), [Banner - Maintenance]({{ site.baseurl }}/components/banner/maintenance), and [Banner - Promo]({{ site.baseurl }}/components/banner/promo) all received guidance clarifications on their uses and how to choose between them.

### Pattern updates

* [Patterns]({{ site.baseurl }}/patterns/) reorganization. We’ve reorganized the Patterns section around user tasks: Asking a user for information and helping users to accomplish a task. We’ve put in redirects as well so that you can find where your favorite pattern has gone.

## July 2022

### New and updated components
#### Use: Deployed
* [Link]({{site.baseurl}}/components/link)
* [Textarea]({{site.baseurl}}/components/form/textarea)

#### Use with caution

- [Button]({{ site.baseurl }}/components/button)
- [Button pair]({{ site.baseurl }}/components/button/button-pair)
- [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable)
- [Memorable date]({{ site.baseurl }}/components/form/memorable-date)

### Sketch Library updates

New component symbols:
* Promo banner
* Button Pair
* OMB Info 
* Active link variation 
* File Input
* Table
* Alert - expandable (Info and Warning variations)
* Telephone 
* Decreased form control error state margins to align with USWDS
* Increased width of error state borders from 2px to 4px for Date input, Memorable date, Number input, Select, Text input, Text area to align with USWDS
* New layer styles for default, disabled, focus, error, and success borders on form controls

### Documentation updates

* [Button pair]({{ site.baseurl }}/components/button/button-pair)
* Consolidation of [error message related content]({{ site.baseurl }}/content-style-guide/error-messages/)
* [Link]({{site.baseurl}}/components/link)

### Pattern updates

* [Help users to navigate a long list]({{ site.baseurl }}/patterns/help-users-to/navigate-a-long-list) (aka Show more options) - documentation and Sketch library.

## June 2022

- [Textarea web component]({{ site.baseurl }}/components/form/textarea)
- The va-button-primary utility class has been deprecated. Please visit the [Button component page]({{ site.baseurl }}/components/button/) for guidance on buttons.

## May 2022

- [Documentation on native events in form controls]({{ site.baseurl }}/components/form/)
- [Search input web component]({{ site.baseurl }}/components/search-input)
- [Modal web component]({{ site.baseurl }}/components/modal)
- [Date web component]({{ site.baseurl }}/components/form/date-input)
- [Number input web component]({{ site.baseurl }}/components/form/number-input)
