---
layout: component
title: Card
github-title: va-card
research-title: card
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1319%3A20931&mode=design&t=nYOotVcwdpiMCL5C-1
intro-text: "A card groups short, related pieces of personalized information into a series of discrete containers, similar to physical index or playing cards. The goal of a card is to present a snapshot of information in one digestible chunk with the option to navigate to more detailed content. The user should be able to easily scan a sequence of cards and take action on the most relevant items."
contributor: Allison Lu, Angela Agosto
status: use-deployed
web-component: va-card
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Variations
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Not a Card
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

## Examples

### Default

{% include storybook-preview.html story="components-va-card--default" link_text="va-card default" %}

### With Background

{% include storybook-preview.html story="components-va-card--with-background" link_text="va-card with background" %}

### With Drop Shadow

{% include storybook-preview.html story="components-va-card--with-drop-shadow" link_text="va-card with drop shadow" %}

### With Icon

{% include storybook-preview.html story="components-va-card--with-icon" link_text="va-card with icon" height="200px" auto_resize=false %}

## Usage

### When to use Card

- **Collections.** Cards usually appear in a collection, rather than in isolation, contain identical or similar information, and are uniform in their look and feel so that users can easily scan the collection of related items and actions.
- **Framing a call to action.** Cards are often used to highlight and frame a specific call to action or decision a user needs to take.
- **Conveying status.** Cards are flexible enough to contain many types of information. However, Cards at the VA often contain time-sensitive information with a status such as appointments, a claim, or submission of a form. When showing status use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component or an icon with a text description to indicate the status.

### When to consider something else

- **Eligibility information.** When you want to show benefits or tools the user is currently enrolled in or has access to.
- **Other content highlight.** The [Summary box]({{ site.baseurl }}/components/summary-box) component, which is the only card-like element represented in Drupal, is meant to act as a content highlight for the most important information on the page. It was originally intended to highlight eligibility information. Featured content is not a Card and they should not be used interchangeably. The Summary box should be used once on the page, and not stacked in a list as the Card component or Service list item component should be.
- **Dynamic content.** Do not use a Card when inserting content into the page in response to a user action. In those cases use a variation of an [Alert]({{ site.baseurl }}/components/alert) component.
- **Forms - A Card is not a Fieldset.** A fieldset can be used to cluster related form fields into a sub-section of a form. The visual design of a fieldset should not mimic a Card.
- **Large data - A Card is not a Table row.** A collection of cards does not scale up to large data sets. If users needs to compare large amounts of data consider a [table]({{ self.baseurl }}/components/table).
- **Navigation - A Card is not a Button or a Link.** While a Card may contain a call-to-action link, and may itself be a link, it is not solely a navigation element. Do not use a Card to act as a large tap target.

### When to use caution

- **Search results.** Cards can be returned as a treatment for search results depending on the density of the data. However, the card may in fact add unnecessary visual noise when displaying a list of results. In those cases, if the data density is low consider removing the card container and having rows of results. If the data density is high consider adding pagination and the ability to search and/or filter the results.

### How this component works

#### Default

<img src="{{ site.baseurl }}/images/components/card/annotated.png" alt="Basic card" style="width:100%;"/>

1. **Background color.** White or [$color-gray-lightest]({{ site.baseurl }}/foundation/color-palette#grayscale).
2. **Header.** Header that summarizes the card's content.
3. **Secondary content.** Body text. Includes next steps and bold dates/times to draw attention to the most important details on the card.
4. **Call to action.** An [action link]({{ site.baseurl }}/components/link/action) should be used for the primary call-to-action. A [link]({{ site.baseurl }}/components/link) may also be used.

#### Status via Tag

<img src="{{ site.baseurl }}/images/components/card/status.png" alt="Status card via Tag" style="width:100%;"/>

Use this variation when you have a short status which can use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component.

1. **Background color.** Currently [$color-gray-lightest]({{ site.baseurl }}/foundation/color-palette#grayscale).
2. **Status.** Status using the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component. Status should: announce "status" by screen readers, the visible status text, and the header text. See [accessibility considerations](#accessibility-considerations) for more details.
3. **Header.** Header that summarizes the card's content.
4. **Secondary content.** Body text. Includes next steps and bold dates/times to draw attention to the most important details on the card.
5. **Call to action.** An [action link]({{ site.baseurl }}/components/link/action) should be used for the primary call-to-action. A [link]({{ site.baseurl }}/components/link) may also be used.

#### Status via label with indicator

<img src="{{ site.baseurl }}/images/components/card/status-long-label.png" alt="Status card via label with indicator" style="width:100%;"/>

Use this variation when you have a longer status label.

1. **Background color.** Currently [$color-gray-lightest]({{ site.baseurl }}/foundation/color-palette#grayscale).
2. **Header.** Header that summarizes the card's content.
3. **Status.** Status with indicator. Accommodates longer status labels.
4. **Secondary content.** Body text. Includes next steps and bold dates/times to draw attention to the most important details on the card.
5. **Call to action.** An [action link]({{ site.baseurl }}/components/link/action) should be used for the primary call-to-action. A [link]({{ site.baseurl }}/components/link) may also be used.

You can see these options in use in the [variations](#variations) below.

## Variations

### Choosing between variations

Currently (06/2025), there are 4 variations to choose from:

#### 1. Default

This variation is the [default](#default). New variations of Card start with this variation as the base.

#### 2. With Background

[This variation](#with-background) was the previous default and is the Card variation most widely found across VA.gov. However, it is no longer preferred. Visually, it features a gray background (`$color-gray-lightest`) with no border or drop shadow. [Benefit payments](#benefit-payments) and [Application status](#application-status-benefit-application-drafts) are examples of this variation.

#### 3. With Drop Shadow

Use [this variation](#with-drop-shadow) for emphasis, for example at the top of a page or section, or as the primary card in a series of cards. When using in a series, use with the default white variation. Do not combine this variation with the default gray variation.

#### 4. With Icon

Use [this variation](#with-icon) to provide additional descriptive information about the contents of the Card. For example, in the context of appointments this variation features an icon that helps differentiate between cards related to [in-person](#appointment-large-with-icon) and remote appointments.

### Instances of this component in production

There are many instances of the Card component in production. This is not an exhaustive list but does serve to augment the [examples](#examples) above and highlight well defined instances of a Card.

#### Appointment, large with icon

{% include component-example.html alt="A large appointment card with an icon." file="/images/components/card/appointment-with-icon.png" caption="A large appointment card with an icon to identify the card type or category, in this case for an in-person appointment." reverse=true class="x2" %}

#### Financial Status Report

{% include component-example.html alt="A Financial Status Report card." file="/images/components/card/financial-status-report.png" caption="A Financial Status Report (VA form 5655) card showing a household expense added with a Link - Active for editing the monthly amount and a Button - Icon for deleting the entry." reverse=true class="x2" %}

#### Media

{% include component-example.html alt="A media card for the GI Bill Comparison Tool ." file="/images/components/card/media.png" caption="A media card features an image or icon and contains a call-to-action with a description." reverse=true width="50%" %}

#### Navigation

{% include component-example.html alt="A navigation card used in the MyHealtheVet landing page." file="/images/components/card/my-healthevet-mobile.png" caption="A navigation card used in the MyHealtheVet landing page which contains a category of links." reverse=true class="x2" %}

#### Number highlight

{% include component-example.html alt="A Number highlight card showing a disability rating." file="/images/components/card/disability-rating.png" caption="A Number Highlight card brings attention to a specific number or statistic." reverse=true width="75%" %}

## Behavior

### Calls to action

- **Make cards actionable.** A Card should be actionable. That can be accomplished through the use of the [action link]({{ site.baseurl }}/components/link/action) component.
- **Action links for primary CTA.** An [action link]({{ site.baseurl }}/components/link/action) should be used for the primary call-to-action.
- **Max 3 CTAs.** A card should not contain more than three calls-to-action (CTAs).
- **Secondary and tertiary actions.** Secondary and tertiary actions can use the [secondary variation of action link]({{ site.baseurl }}/components/link/action), an [active or other link variation]({{ site.baseurl }}/components/link/#variations), or a [default link]({{ site.baseurl }}/components/link).

### Using status tags in cards

Status tags are used within cards to communicate the current state or status of the information presented. Use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component to clearly indicate status, such as "In progress", "Completed", or "Needs attention". Ensure that color choices for status tags are accessible and do not rely solely on color to convey meaning.
### Communicating status

- **Status Tag for status.** Use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component to communicate status within cards.
- **Make accessible color choices.** If you are using color as a supplementary status indicator, make sure your color choices are accessible and intuitive.
- **Use color and another indicator when communicating status.** Never rely on color alone to communicate status.

### Placement

#### Dimensions

Cards use the following widths:

- [$mobile up to $medium-screen]({{ site.baseurl }}/foundation/breakpoints#names-and-values):
  - Card maximum width = 304px
  - Card minimum width = 280px
- [$medium-screen through $desktop-lg]({{ site.baseurl }}/foundation/breakpoints#names-and-values) and above:
  - Card maximum width = 752px
  - Card minimum width = 384px

#### Layout

Cards can sit inside or outside of a grid layout. Cards start with [1.5 spacing units (1.2rem/12px)]({{ site.baseurl }}/foundation/spacing-units) below each card to separate them. Then the spacing increases to [2 spacing units (1.6rem/16px)]({{ site.baseurl }}/foundation/spacing-units) of margin on all sides at the [$medium-screen and above breakpoint]({{ site.baseurl }}/foundation/breakpoints).

{% include component-docs.html component_name=page.web-component %}

## Not a Card

There are a few design elements that look like a Card but do not behave like a Card and are actually instances, or variations, of other components or are simply containers that share the same background color as a Card. These Card adjacent designs should not be thought of as a Card component and do not adhere to the guidelines defined here.

### Containers for links in the Mobile app

{% include component-example.html alt="A mobile link that looks like a Card." file="/images/components/card/not-a-card-mobile-link.png" caption="Mobile link. Not a Card." width="50%" %}

The [Mobile App](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596?platform=iphone) uses a Card-like container around an [active link]({{ site.baseurl }}/components/link/#active-link) to make the link a large tap target on mobile. This treatment should be thought of as a mobile-specific link variation rather than an instance of a Card.

### Containers for asking users for multiple responses (aka List and Loop) in forms

{% include component-example.html alt="A container for an action in a form used in the Ask users for multiple responses (aka List and Loop) pattern." file="/images/components/card/not-a-card-list-and-loop.png" caption="Container for a button and title. Not a Card." width="50%" reverse=true %}

The [pattern for asking users for multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) (aka List and Loop) uses a Card-like container to enter the loop to edit or remove an item in the list. This treatment is specific to that pattern and should not be thought of as an instance of a Card.

### Containers for radio button tiles and checkboxes

{% include component-example.html alt="A container for a checkbox and description in a form." file="/images/components/card/not-a-card-radio-button-tile.png" caption="Container for a checkbox. Not a Card." width="50%" %}

A radio button tile has a title and description within the label and a Card-like container around the radio button and label. This treatment can be seen in the [Radio button - Tile variation]({{ site.baseurl }}/components/form/radio-button#tile). It is also in use around checkboxes in parts of VA.gov. This treatment is specific to radio buttons and checkboxes and should not be thought of an an instance of a Card.

### A list of services or tools

{% include component-example.html alt="A set of information—designed to be shown within a list—that contains a header, a bright call to action, a status tag, four sets of data formatted as 'Label: Value' pairs, and a link."  file="/images/components/service-list-item/annotated-service-list-item-component.png" %}

When you want to show benefits or tools the user is currently enrolled in or has access to, use the [Service list item]({{ site.baseurl }}/components/service-list-item) component instead of the Card component.

## Content considerations

- **Concise headers and text.** Keep card content (especially [header text]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#section-titles)) short, crisp, and to-the-point: Users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link.
- **Translation proof.** Avoid using dynamic content within the middle of a sentence to future-proof the card for translation.

## Accessibility considerations

- **Use the appropriate heading level for your page.** Set the heading level based on the content of your page to make sure card headings are in the correct, logical outline order. Use CSS to style the header visually if you need a different visual representation.
- **Use unordered lists and list items.** Use a `ul` for a card group and an `li` for each card. This formatting allows screen readers to enumerate the items in the card group and allows shortcuts between list items.
- **Keyboard navigation.** The tab key should bring focus to the call(s) to action within the card. The enter key or spacebar should open a [Link]({{ site.baseurl }}/components/link) or [Link - Action]({{ site.baseurl }}/components/link/action).
- **Announce "Status" to screen readers** When adding status to a card, it's important to have the word "status" announced by screen readers before the actual status and header text of the card. For example:

```html
<h3>
  <span class="vads-u-visibility--screen-reader">Status</span>
  <span
    class="usa-label vads-u-display--inline-block vads-u-font-family--sans vads-u-font-weight--normal vads-u-margin-bottom--1"
    >In progress</span
  >
  <span class="vads-u-display--block">Claim for compensation</span>
</h3>
```

## Related

Sub-components used in this component:

- [Section titles]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#section-titles)
- [Link - Action]({{ site.baseurl }}/components/link/action)
- [Tag]({{ site.baseurl }}/components/tag)
- [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)

Also see the [Service list item]({{ site.baseurl }}/components/service-list-item) component
