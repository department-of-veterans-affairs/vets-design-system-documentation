---
layout: documentation
title: Accessibility annotations for VA.gov applications
permalink: /about/accessibility/accessibility-annotations
has-parent: /about/accessibility/
intro-text: Accessibility annotations (called “annotations” in this document) are notes we add to our mockups to communicate meaning, behaviors, and interactions in the design or application.
anchors:
  - anchor: Who it is for
  - anchor: When to add annotations
  - anchor: Library
  - anchor: How to use the library
  - anchor: Types of annotations available in the library
  - anchor: What you should annotate in applications
  - anchor: Examples of how to use the annotation components
  - anchor: Deep dive into why verbose annotations are often most useful
  - anchor: Make annotations a communication tool
  - anchor: Annotations and the Collaboration Cycle
---

For example, you can document the order of heading structure, how a screen reader user should experience the product, error states, and more.

The guidance provided here are examples, not mandates. We hope that as designers and developers working on VA.gov applications, you are inspired to learn more about annotations and how to make your products more accessible. If you’d like to learn more or have questions, join us in #annotation-help in the Office of the CTO @ VA Slack.

## Who it is for

Annotations help communicate accessibility decisions to other designers, developers, and the Platform Governance team. Annotations push designers to incorporate accessibility as part of the design work rather than an afterthought. Annotations also help to reduce developer decision-making (and guesswork) by providing clear guidance for semantic HTML and UI interactions.

However, the real benefit of annotations is for the end user. Thinking about structures and accessibility before engineering work begins ensures we build our products from the beginning with accessibility in mind. Ultimately, annotations can help ensure that users with disabilities and people who use assistive technologies like screen readers have a smooth experience when using VA properties.

## When to add annotations

Designers should add annotations before the design/developer hand-off.  The Collaboration Cycle strongly recommends you go to midpoint review with annotations in your mockup files.

## Library

With the transition to Figma, we have added an open-source [accessibility annotation kit from CVS](https://www.figma.com/community/file/1311421011482282592) to the VADS Figma Library collection. At the time of this writing, the kit is located on the VA.gov Platform, in the VA Design System folder, titled “VADS Web Annotation Kit.” Soon, it will be automatically added to all files created with VA.gov Platform accounts.
  
{% include component-example.html alt="Figma interface for adding a library." file="/images/about/accessibility/annotations/add-library.png" caption="In the Figma interface, navigate to the assets panel and click the 'book' icon. You’ll see the existing libraries. Select the 'VADS Annotation Kit' and click 'Add to file'." %}

## How to use the library

Most annotations have three symbols: details card, lasso stamp, and pin stamp.

### Pin

[Figma for pin examples](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=143-6703&mode=design&t=pdKr4Lf6bYrmyu0S-11)

{% include component-example.html alt="Examples of the various pin stamps with the label above, below, to the left or right of the pin." file="/images/about/accessibility/annotations/pin.png" caption="Pin stamps point to parts of a design above, below, left, right, or center (no pin). Designers can set the orientation using the “Stamp position” component property." class="x2" %}

### Lasso

[Figma for lasso examples](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=143-6702&mode=design&t=pdKr4Lf6bYrmyu0S-11)

{% include component-example.html alt="Example of lasso symbols. The label position can be changed." file="/images/about/accessibility/annotations/lasso.png" caption="Lasso stamps highlight an area of the design. The lasso helps outline landmarks or components such as linked cards. You can change the lasso label position, like pin stamps, to reduce the risk of overlapping other stamps or essential parts of a design." class="x2" %}

### Details card

[Figma for details card examples](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=109-1308&mode=design&t=pdKr4Lf6bYrmyu0S-11)

{% include component-example.html alt="Examples of an error and link detail card." file="/images/about/accessibility/annotations/details-card.png" caption="Detail cards are numbered notes around a design corresponding to numbers used by pin or Lasso Stamps. The content of these stamps can include interface behavior, URLs, error messages, code semantics, ARIA, notes to engineers, and so on." class="x2" %}

Some detail cards have underlined elements. For example, on the “Input” details card, “type,” “required,” “autocomplete,” and “inputmode” are all underlined. Selecting the underlined element will navigate you to the MDN Web docs page to learn more about that element.

[Figma for details card - input type example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=163-2506&mode=design&t=41IQkF71aGIsWmZe-11)
  
{% include component-example.html alt="Example of an input details card." file="/images/about/accessibility/annotations/details-card-input-type.png" caption="Using the input details card, you can identify the various parts of this particular text input, including the type of input, its input mode, and whether it is required or not." class="x2" %}

Different detail cards will have different information you can toggle or fill in. Check the right-hand panel of Figma to see what you can edit for each annotation symbol.

{% include component-example.html alt="Example of an input details panel." file="/images/about/accessibility/annotations/input-details.png" caption="The panel for input details reveals many more details you can add to the details card, including advanced features, code samples, autocomplete, and input mode types." class="x2" %}

## Types of annotations available in the library

Included in the library are multiple formats of annotation components. Keep in mind that not all of these annotations are required for every application all of the time. This is just what’s available to you in the library. You’ll use your own experience and discretion as to what to use, and we’ll provide some guidance further below.

* Buttons - Interactive elements that perform an action, such as submitting a form or opening a dialog.
* DS - Allows you to provide more details about components or patterns that are part of the VA design system.
* Feedback - Identifies error messages, warning messages, and other communications to the user.
* Focus order - A sequential order of focusable components that preserves meaning and operability.
* Headings - Semantic levels within a page’s section hierarchy.
* Images - Describe informative with alt text or mark decorative images.
* Inputs - Fields and controls for forms to accept data from users.
* Landmarks - Regions of a page that a user might want quick access to.
* Links - Interactive elements that navigate to web pages, files, or anything that changes a URL.
* Lists - Ordered or unordered lists of similar components.
* Notes - Any details that don’t fit into the other annotation categories. For example, if you’re uncertain how an interaction may work (eg. for assistive technology users) and want to call attention to that unknown.
* Reading order - The sequential order in which assistive technology will read content.
* Utilities - Several references to aid in the developer experience.
For more detailed information about the annotation symbols, refer to the [CVS Wiki](https://github.com/cvs-health/annotations/wiki/Web-Accessibility-Annotation-Kit).

## What you should annotate in applications

Annotations are most valuable for anything not visible or explicit in the design. Another way to think about it is when an engineer needs to make decisions about something that’s not baked into a component or forms library code; the design should be annotated.

For example, engineers have to make decisions about:

* Heading levels
* Aria labels & accessible names
* Where to place the fieldset/legend
* Error messages
* Focus management

Annotating these things ensures a more thoughtful handoff from UX to engineering.

You should also annotate instances where you're using custom code that looks like a VA Design System component but isn't. Then, in the annotation, you can provide an explanation of what behavior needs to be implemented that's not available in the existing VADS component. You can use the "note details card" to do this.

You can use the component details card to call out specific VADS components that you are using in your design. Use the “DS Details” annotation to add notes about your particular use of the component.

Form annotations should cover elements below the breadcrumb and above the need help component at the bottom of the page.

We recommend that designers chat with engineers to find out what would be most helpful for them - everyone has a different level of expertise. When in doubt, it’s probably best to over-annotate than under-annotate.

## Examples of how to use the annotation components

### Heading levels

[Figma for heading levels example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Screenshots-for-annotations?type=design&node-id=55-95415&mode=design&t=02tF81lTwPMdBv3r-11)
  
{% include component-example.html alt="An example of annotating heading levels." file="/images/about/accessibility/annotations/heading-levels.png" caption="Annotations showing heading levels h1, h2, h3 using the pen stamp. The h2 heading level has an additional annotation, telling the engineer to style the h2 like an h4." class="x2" %}

### Accessible names

[Figma for accessible name example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Screenshots-for-annotations?type=design&node-id=55-1409&mode=design&t=02tF81lTwPMdBv3r-11)
  
{% include component-example.html alt="An example of annotating accessible names." file="/images/about/accessibility/annotations/accessible-names.png" caption="Annotations point to the text Northwestern Hospital and indicate that it is an h4 in this design. Another annotation highlights the details of the edit button using a details card. This page has multiple edit buttons, so each button must have a unique accessible name. In this case, the accessible name is “edit Northwestern Hospital.” If you feel comfortable, you may want to indicate what ARIA label should be used to achieve the accessible name." %}

{% include component-example.html alt="An example of accessible name annotations in the statement of truth component." file="/images/about/accessibility/annotations/statement-of-truth.png" caption="This example is meant to highlight how to use multiple annotations and aria annotations. Annotations on the statement of truth components provide the URL for the link to the privacy policy, and aria-describedby connects more legalese text to the Your full name text input. Aria-describedby allows the confirmation text to be read aloud by screen readers when a user tabs to the Your full name text input." %}

### Fieldsets & Legends

[Figma for fieldsets & legends example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Screenshots-for-annotations?type=design&node-id=55-98038&mode=design&t=02tF81lTwPMdBv3r-11)
  
{% include component-example.html alt="An example of fieldset and legend annotations." file="/images/about/accessibility/annotations/relationship-to-veteran.png" caption="The legend and fieldsets are circled using the lasso stamp. This annotation helps show engineers how the field inputs and controls should be grouped." class="x2" %}

### Focus order

[Figma for focus order example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=146-3422&mode=design)
  
{% include component-example.html alt="A focus order example." file="/images/about/accessibility/annotations/focus-order.png" caption="Most forms send focus to the stepper h2. This is the first item that should receive focus when the page loads (after the user clicks continue on the previous page). The annotation helps engineers understand where to send focus from page to page." %}

{% include component-example.html alt="An additional example of focus order annotation." file="/images/about/accessibility/annotations/focus-order-2.png" caption="Other times, you may want to send focus to something else on the page, for example, you may send focus to the h3 on the form page.  The annotation helps communicate this decision to the engineers." %}

### Error messages

[Figma for error messages example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=146-13136&mode=design)

{% include component-example.html alt="" file="/images/about/accessibility/annotations/error-messages.png" caption="Adding error messages, especially for any unique error messages in your forms, is helpful for content review, engineers, and anyone writing test plans." class="x2" %}

### Annotations on static pages

[Figma for static pages example](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=152-3041&mode=design)

{% include component-example.html alt="" file="/images/about/accessibility/annotations/static-pages.png" caption="Annotations aren’t just for forms. This example is from the facilities locator. The annotation kit lets you annotate and add notes to many items on a page. You can stack or nest annotations and use the detail card for each one to provide more details." %}

The DS details card also allows you to identify the VA Design system component you want to use. The card then links directly to the storybook guidance. Designers may leave notes in the details card calling out particular props or attributes the component may need. 

## Deep dive into why verbose annotations are often most useful

When annotating, it’s important to consider a few things:

* The level of accessibility expertise of the engineers who will be building the experience
* The level of familiarity engineers have with the VA design system
* If you have any custom components or patterns

In our experience, it’s better to over-annotate than under-annotate for a few reasons:

* It encourages communication between designers and engineers
* The annotating designer is forced to think through the experience more deeply and may catch issues that can be fixed with a simple design change
* It takes some guesswork out for engineers

### Example 1

[View example 1 in Figma](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/WIP---Documentation---Screenshots-for-annotations?type=design&node-id=152-5771&mode=design)

In Example 1, the first two parts of the screen were annotated with the “Additional files are required” alert and the “Review and sign” accordions.

{% include component-example.html alt="The first annotations example." file="/images/about/accessibility/annotations/example-1.png" class="x2" %}
  
In theory, the alert could have been handled with just the DS annotation with the component type selected. To create the DS annotation, draw the border around the area with the DS Lasso stamp and then add the details card. Select the details card, and you will see “type.” For components, select components for patterns. select Patterns.  You can choose the appropriate component at the bottom of the DS Details section.
  
{% include component-example.html alt="A DS details Alert annotations example." file="/images/about/accessibility/annotations/example-1-alert.png" class="x2" %}

In this case, the designer also chose to annotate the image in the component as decorative and the heading level as an H3 to eliminate confusion for the engineer. Heading levels can be difficult for engineers to determine without understanding the intended experience, especially if the visual styling doesn’t match the information architecture.
  
{% include component-example.html alt="An example of an image and heading stamp." file="/images/about/accessibility/annotations/image-and-heading-stamp.png" class="x2" %}

The second part of the screen the designer chose to annotate was the “Statement of Truth” component. Again, this could have been handled with the DS pattern stamp, but there is enough nuance here that the designer chose to annotate further. 

{% include component-example.html alt="An example of statement of truth component annotations." file="/images/about/accessibility/annotations/example-1-sot.png" class="x2" %}

First, though the heading visually looks like an H1, in the page's information architecture, it functions as an H3. The designer also wanted to communicate that the link target would open in a new window while marking the icon appended to the link as decorative.
The designer also wanted to communicate further details about the inputs with the engineers. For example, the details card for inputs allows you to choose the input type, whether or not the field is required, autocomplete details, and the input mode.

#### Input details card

{% include component-example.html alt="An example of an input details card." file="/images/about/accessibility/annotations/input-details-card.png" class="x2" %}

#### Input Details menu

{% include component-example.html alt="An example of an input details menu." file="/images/about/accessibility/annotations/input-details-menu.png" class="x2" %}
  
#### Autocomplete options

{% include component-example.html alt="An example of autocomplete options." file="/images/about/accessibility/annotations/autocomplete-options.png" class="x2" %}
  
#### Input mode options

{% include component-example.html alt="An example of input mode options." file="/images/about/accessibility/annotations/example-1-input-mode-options.png" class="x2" %}
  
### Example 2

[View example 2 in Figma](https://www.figma.com/file/IJarxte9ZHN8SbhLV9nM9T/Documentation---Screenshots-for-annotations?type=design&node-id=152-7142&mode=design&t=SsY2TB4soUkkjskG-11)

{% include component-example.html alt="An example of a form's intro text and alert." file="/images/about/accessibility/annotations/example-2.png" %}

In Example 2, the first part of the page that was annotated was the form’s intro text (Note 9) and the “Resources available” info alert.
  
Note 9 demonstrates how annotations can create conversations between designers and developers. The designer knew the intro text needed to be programmatically associated with the form so that assistive technologies operating in forms mode wouldn’t miss the crucial information. The designer suggested `<aria-describedby>` and noted that the text should be programmatically associated, but also left room for the engineer to figure out the best way to make those associations and perhaps use a different ARIA label if there was a better fit. This annotation led to discussions between the designer and engineer about the best way to create a smooth user experience.

The designer also annotated the alert component more in-depth for a few reasons. First, it contained an H4 styled like an H2; second, it contained links that do not come standard in that component.

The second part of Example 2 that the designer annotated was the address input area.

{% include component-example.html alt="An example of a form's address input." file="/images/about/accessibility/annotations/example-2-address-input.png" %}

In theory, since the whole address input is a pattern in the design system, it could have been handled with the “Pattern” annotation component and details card.

However, since this was the first time the designer was collaborating with their developers, they wanted to provide extra details. The designer decided to annotate the “Learn more about…” using the Additional info component, as well as the individual address inputs to provide additional information on proper elements and autocomplete features.

## Make annotations a communication tool

Annotations help designers and engineers think about accessibility throughout the design and development process. Designers can use annotations to make sure they’ve thought through the experience of assistive technology users, keyboard users, and others. And engineers can use annotations to know how to make those designs accessible through code.

Each team may utilize the annotation kit differently, but you’ll only know what works best for your team through constant communication between designers and engineers.

As teams mature, the way you annotate today may be different than how you annotate in the future.

Here are some examples of form annotations from various teams:

* [VA Form 21-4142](https://www.figma.com/file/fpTOySlsCCaVeltWloY7PF/Prod---21-4142-%26-21-4142a-Release-non-VA-medical-records?type=design&node-id=35%3A90536&mode=design&t=APt5PKWQEf7RfrP8-1)
* [VA Form 20-10206](https://www.figma.com/file/ZfkeFX8ZnXYxIPetj28adt/Prod---20-10206---Request-personal-records?type=design&node-id=0%3A255&mode=design&t=d22NbapUDCGYPafL-1)
* [VA Form 10-10d](https://www.figma.com/file/LWfLUckNkxEz3fxXsxde93/10-10d---%5BDoc-Uploads%5D-Updates?type=design&node-id=149-143638&mode=design&t=qMukrnkmhdaQkfF1-4)

## Annotations and the Collaboration Cycle

Platform Governance team recommends that you provide annotations with your finalized prototypes at [midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/midpoint-review). This gives the Governance team accessibility specialist insight into the decisions you’ve made up to that point and is an opportunity for them to suggest changes prior to your engineer hand-off. If you have any open accessibility questions, your annotated prototype is a good opportunity to surface them with the Governance team.

## Resources

[CVS Web Accessibility Annotation Kit (Wiki)](https://github.com/cvs-health/annotations/wiki/Web-Accessibility-Annotation-Kit)