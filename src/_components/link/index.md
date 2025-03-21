---
layout: component
permalink: /components/link/
title: Link
intro-text: "A link is a navigation element that can appear alone, inline (embedded), or in a group with other links. A link can trigger a download, but in general links go to internal or external pages when clicked."
research-title: Links
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1312%3A10138&mode=design&t=nYOotVcwdpiMCL5C-1
status: use-deployed
web-component: va-link
sub-pages:
  - sub-page: Action
  - sub-page: Collection
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

{% include _site-in-this-section.html %}

## Examples

### Web

#### Default

{% include storybook-preview.html story="components-va-link--default" link_text="va-link" height="75px" %}

#### Back

{% include storybook-preview.html story="components-va-link--back" link_text="back va-link" height="50px" %}

#### Active

{% include storybook-preview.html story="components-va-link--active" link_text="active va-link" height="50px" %}

#### Calendar

{% include storybook-preview.html story="components-va-link--calendar" link_text="calendar va-link" height="50px" %}

#### Channel

{% include storybook-preview.html story="components-va-link--channel" link_text="channel va-link" height="50px" %}

#### Download

{% include storybook-preview.html story="components-va-link--download" link_text="download va-link" height="50px" %}

#### External

{% include storybook-preview.html story="components-va-link--external" link_text="external va-link" height="50px" %}

#### Video

{% include storybook-preview.html story="components-va-link--video" link_text="video va-link" height="50px" %}

### Mobile

### Default

{% include storybook-preview.html height="70px" story="link--default" link_text="va-mobile__link--default" is_mobile=true %}

### Attachment

{% include storybook-preview.html height="70px" story="link--attachment" link_text="va-mobile__link--attachment" is_mobile=true %}

### Calendar

{% include storybook-preview.html height="70px" story="link--calendar" link_text="va-mobile__link--calendar" is_mobile=true %}

### Directions

{% include storybook-preview.html height="70px" story="link--directions" link_text="va-mobile__link--directions" is_mobile=true %}

### External link

{% include storybook-preview.html height="70px" story="link--external" link_text="va-mobile__link--external" is_mobile=true %}

### Phone

{% include storybook-preview.html height="70px" story="link--phone" link_text="va-mobile__link--phone" is_mobile=true %}

### Phone TTY

{% include storybook-preview.html height="70px" story="link--phone-tty" link_text="va-mobile__link--phone-tty" is_mobile=true %}

### Text (SMS)

{% include storybook-preview.html height="70px" story="link--text" link_text="va-mobile__link--text" is_mobile=true %}

## Usage

### When to use a default link

* **Navigation between pages.** Navigating to another page (internal or external).
* **Navigation within a page.** Anchor, or jump, to a specific header and section on a page.
* **Trigger an appropriate supporting application.** Make email addresses and phone numbers open the relevant app by clicking or tapping them.

### When to use an Active link

* **Collections, such as Hub pages.** Active links can be seen on [Hub pages]({{ site.baseurl }}/templates/hub#example)
* **Less prominent links.** For links that need less prominence than an [Action link]({{ site.baseurl }}/components/link/action) and may appear in a [collection]({{ site.baseurl }}/components/link/collection), we recommend using an Active Link. Active Links have a hover behavior that includes a background color change and an animated right-facing chevron icon for more emphasis. 

### When to use a Back link
* **As a replacement for breadcrumb** on:
  * <strong>Conventional Multi-step Forms</strong> that also:
    * Have a [minimal header]({{ site.baseurl }}/components/header/header-minimal) and [minimal footer]({{ site.baseurl }}/components/footer/footer-minimal)
    * Follow the [one thing per page pattern]({{ site.baseurl }}/patterns/ask-users-for/a-single-response) pattern
    * Use the `H1` element to represent the headline for the current form page, rather than the step title in the step indicator
    * Include only a `Continue` button and do not have a `Back` button after the form
  * <strong>Short Forms</strong> that has a small amount of short, concise steps. For example, the [Pact Act Wizard](https://staging.va.gov/pact-act-eligibility/introduction).
  * <strong>Non-Form Pages</strong> where the current page was accessed from a related page and does not have additional navigation. For example, an appointment details page.

### When to use a Calendar link
* **Adding an event to a calendar.** Use when the link adds an event to a digital calendar.

### When to use a Channel link
* **YouTube channel.** Use when linking to a YouTube channel.

### When to use a Download link
* **Downloading files.** Use for download links including but not limited to PDFs and Excel files.

### When to use a Video link
* **YouTube Video.** Use when linking directly to a YouTube video.


### When to consider something else

* **Use buttons for actions.** Use a [Button]({{ site.baseurl }}/components/button) when you want to make a state change or submit a form. Example actions include, but are not limited to, "Add", "Close", "Cancel", or "Save". Buttons **do things**, links **go places**. Refer to guidance on [Links vs. buttons]({{ site.baseurl }}/components/link/action#links-vs-buttons)
* **Use action links for calls-to-action.** When you want to draw attention to an important call-to-action (CTA) on the page, such as a link that launches a benefit application, use an [Action link]({{ site.baseurl }}/components/link/action). Calls-to-action are not actions themselves (see the previous point). 
* **Table of contents.** When you want to make a long page of content with two or more H2s easier to navigate, use an [On this page link]({{ site.baseurl }} /components/on-this-page).
* **Triggering the generation of a PDF.** When using for a PDF, use only for linking directly to a PDF, not as a trigger for a process that generates a PDF. For [generating a PDF, use a button](#links-vs-buttons).

### How this component works

* **Use icons as defined.** [Icons]({{ site.baseurl }}/foundation/icons/) defined in the link variations above are reserved for that distinct usage. These icons should not be used for another purpose without explicit permission to do so from the Design System Council.

#### Implementation details

If for some reason you do not use a link web-component links must meet the following criteria:

- All links use Source Sans Pro (Regular), underlined, at [vads-font-size-source-sans-normalized]({{ site.baseurl }}/foundation/typography#typography-tokens).
- All links share the same color, [vads-color-link]({{ site.baseurl }}/foundation/color-palette#semantic-color-tokens) for icon, link text, and underline. On mobile, dark mode changes the link color to [vads-color-link-on-dark]({{ site.baseurl }}/foundation/color-palette#semantic-color-tokens). 
- All text links should be underlined. This is especially important for low-vision users. (Exception: [side navigation links]({{ site.baseurl }}/components/sidenav) should not be underlined.)

## Behavior

### Web

* **Open links in the same window, with exceptions.** Links on VA.gov should open in a new tab only if clicking the link will cause the user to lose progress or data. This should be avoided when possible. In all other cases, links should open in the same window. For more details, see [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites) in the content style guide.
* **Use appropriate encodings for email and phone links.** Use mailto: for email links and tel: for phone links.

### Choosing between variations

Review "[Usage](#usage)" for guidance.

### Mobile

* **Link opens within the app:**
  * In a full panel if the content is within the app.
  * In a webview if the content is not within the app and does not require a separate sign-in.
* **Link opens another app:**
  * In the [browser app](#external-link) if the user needs to sign in to access the content. Always use a native alert to warn the user before leaving the app. Once confirmed, open the default browser app.
  * If the user is performing an action such as making a phone call, getting directions, or downloading a file. Consider using a confirmation message (like a native alert or action sheet) to warn the user before leaving the app. These variants include the onPress logic for app teams, ensuring a native confirmation message is displayed when needed.
    * **[Attachment](#attachment)**: Display the attachment in the app with the ability to download to their device.
    * **[Calendar](#calendar-1)**: Display the event information to allow the user to review and confirm before adding to their calendar. Once confirmed, add to the default calendar app.
    * **[Directions](#directions)**: Display an Action Sheet to allow the user to select their preferred maps app (Apple Maps, Google Maps, etc.). Once selected, open the maps app with the destination.
    * **[Phone](#phone)**: Display an Action Sheet to allow the user to confirm the phone call. Once confirmed, open the default phone app.
    * **[Phone TTY](#phone-tty)**: Display an Action Sheet to allow user to confirm the TTY call. Once confirmed, open the default phone app.
    * **[Text (SMS)](#text-sms)**: Open the default messages app.
* **NOTE:** The Link component currently does not support inline links. A Paragraph component will be created in the future to support inline links, ensuring proper text wrapping and accessibility in React Native.

## Content considerations

Refer to the [Content Style Guide on Links]({{ site.baseurl }}/content-style-guide/links).

## Accessibility considerations

* **Material honesty.** Do not style a link to look or behave like a button ([material honesty](https://alistapart.com/article/material-honesty-on-the-web/)).
* **Keyboard navigation.** The user must be able to navigate to links using the Tab key and activate links using the Enter key.
* **Purpose and target.** Link text that doesn't indicate a clear purpose or destination makes it harder for everyone--especially screen reader users--to understand where they're getting routed off to.
* **External links must indicate that they are external.** Follow the methods detailed in [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).
  - By default, the link component's external link variation will append the text, "(opens in a new tab)", instead of using an icon. This follows [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html) advice on providing users with both a spoken and visual warning that this link opens in a new tab.

{% include content/links-vs-buttons.md %}

## Related 

* [Button]({{ site.baseurl }}/components/button)
* [On this page]({{ site.baseurl }}/components/on-this-page)
