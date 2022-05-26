---
layout: component
title: Card
status: use-deployed
github-title: va-card
research-title: card
intro-text: "A card groups short, related pieces of personalized information into a series of discrete containers, similar to physical index or playing cards. The goal of a card is to present a snapshot of information in one digestible chunk with the option to navigate to more detailed content. The user should be able to easily scan a sequence of cards and take action on the most relevant items."
anchors:
  - anchor: Examples
  - anchor: Variations
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

## Examples

### Anatomy

![Basic card]({{ site.baseurl }}/images/components/card/annotated.png) 

1. **Background color.** Currently [$color-gray-lightest]({{ site.baseurl }}/foundation/color-palette#grayscale).
2. **Title.** Clearly summarizes card content. 
3. **Subheader.** Subheader or body text. Usually communicates a status.
4. **Secondary content.** Body text. Includes next steps and bold dates/times to draw attention to the most important details on the card.
5. **Call to action.** An [action link]({{ site.baseurl }}/components/link/action) should be used for the primary call-to-action.

Optional elements for cards include:

![Status card]({{ site.baseurl }}/images/components/card/status.png)

1. [Tag component]({{ site.baseurl }}/components/tag)
2. Status indicator badge

## Usage

### When to use Card

* **Collections**: Cards usually appear in a collection, rather than in isolation, contain identical or similar information, and are uniform in their look and feel so that users can easily scan the collection of related items and actions.
* **Framing a call to action**: Cards are often used to highlight and frame a specific call to action or decision a user needs to take. 
* **Conveying status**: Cards are flexible enough to contain many types of information. However, Cards at the VA often contain time-sensitive information with a status such as appointments, a claim, or submission of a form. When showing status use the [Tag component]({{ site.baseurl }}/components/tag) or an icon with a text description to indicate the status.

### When to consider something else

* **Large data sets**: A collection of cards does not scale up to large data sets. If users needs to compare large amounts of data consider a [table]({{ self.baseurl }}/components/table).
* **Eligibility information or other content highlight**: The [Featured content]({{ site.baseurl }}/components/featured-content) component, which is the only card-like element represented in Drupal, is meant to act as a content highlight for the most important information on the page. It was originally intended to highlight eligibility information. Featured content is not a Card and they should not be used interchangeably.
* **Navigation - A Card is not a Button or Link**: While a Card may contain a call-to-action link, it is not a navigation element. Do not use a Card to act as a large tap target. There is a notable exception for the [Mobile App](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596?platform=iphone) whereby a Card-like container is used around an [active link]({{ site.baseurl }}/components/link/#active-link) to make the link a large tap target on mobile. This treatment should be thought of as a mobile-specific link variation rather than an instance of a Card.
* **Forms - A Card is not a Fieldset**: A fieldset can be used to cluster related form fields into a sub-section of a form. The visual design of a fieldset should not mimic a Card. There is a notable exception for the [List and Loop pattern]({{ site.baseurl }}/patterns/forms/list-and-loop) where a Card is used to enter the loop to edit or remove an item in the list. 

### When to use caution

* **Search results**: Cards can be returned as a treatment for search results depending on the density of the data. However, the card may in fact add unnecessary visual noise when displaying a list of results.

## Variations

### Instances of this component in production

#### Appointment

{% include component-example.html alt="An appointment card in MyVA." file="/images/components/card/appointment-mobile.png" caption="An appointment card in MyVA." reverse=true width="50%" %}

#### Appointment with status

{% include component-example.html alt="An appointment card with a status of canceled." file="/images/components/card/appointment-canceled-mobile.png" caption="An appointment card for a canceled appointment." reverse=true width="50%" %}

#### Claims and appeals

{% include component-example.html alt="A Claims and Appeals card in MyVA." file="/images/components/card/claims-and-appeals-mobile.png" caption="A Claims and Appeals card showing status for a claim in MyVA at a mobile viewport width." reverse=true width="50%" %}

#### Number highlight

{% include component-example.html alt="A Number highlight card showing a disability rating." file="/images/components/card/disability-rating.png" caption="A Number Highlight card brings attention to a specific number or statistic." reverse=true width="75%" %}

#### Form status

{% include component-example.html alt="A form status card in MyVA." file="/images/components/card/form-in-progress.png" caption="A form status card showing the status of a form that a Veteran is in the process of filing out in MyVA." reverse=true width="75%" %}

#### Promo

{% include component-example.html alt="A promo card for the GI Bill Comparison Tool ." file="/images/components/card/promo.png" caption="A promo card features an image or icon and contains a call-to-action with a description." reverse=true width="50%" %}

## Behavior

### Communicating status

If you are using color as a supplementary status indicator, make sure your color choices are accessible and intuitive. Never rely on color alone to communicate status.

### Calls to action 

* An [action link]({{ site.baseurl }}/components/link/action) should be used for the primary call-to-action. 
* A card should not contain more than three calls-to-action (CTAs). 
* Secondary and tertiary actions can use the [secondary variation of action link]({{ site.baseurl }}/components/link/action), an [active or other link variation]({{ site.baseurl }}/components/link/#variations), or a [default link]({{ site.baseurl }}/components/link).

### Placement

#### Dimensions 

Cards use the following widths:
  * $xsmall-screen up to $medium-screen:
    * Card maximum width = 304px
    * Card minimum width = 280px
  * $medium-screen through $large-screen and above:
    * Card maximum width = 752px
    * Card minimum width = 384px

#### Layout

Cards can sit inside or outside of a grid layout. Cards start with [1.5 spacing units (1.2rem/12px)]({{ site.baseurl }}/foundation/spacing-units) below each card to separate them and to match the same gutter on the left and right at mobile breakpoints. Then the spacing increases to [2 spacing units (1.6rem/16px)]({{ site.baseurl }}/foundation/spacing-units) of margin on all sides at the [$medium-screen and above breakpoint]({{ site.baseurl }}/foundation/breakpoints).


{% include component-docs.html component_name=page.github-title %}

## Content considerations

* **Concise headers and text.** Keep card content (especially [header text]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#section-titles)) short, crisp, and to-the-point: Users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link.
* **Translation proof.** Avoid using dynamic content within the middle of a sentence to future-proof the card for translation.

## Accessibility considerations

* **Use the appropriate heading level for your page.** Set the heading level based on the content of your page to make sure card headings are in the correct, logical outline order. Use CSS to style the header visually if you need a different visual representation.
* **Keyboard navigation.** The tab key should bring focus to the call(s) to action within the card.  The enter key or spacebar should open a [Link]({{ site.baseurl }}/components/link) or [Link - action]({{ site.baseurl }}/components/link/action).

## Related

Sub-components used in this component:

* [Section titles]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#section-titles)
* [Link - Action]({{ site.baseurl }}/components/link/action)
* [Tag]({{ site.baseurl }}/components/tag)
