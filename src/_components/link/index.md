---
layout: component
permalink: /components/link/
title: Link
intro-text: "A link is a navigation element that can appear alone, inline (embedded), or in a group with other links. A link can trigger a download, but in general links go to internal or external pages when clicked."
research-title: Links
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=199-1226
web-component: va-link
uses_mermaid: true
web: true
mobile-app: true
sub-pages:
  - sub-page: Action
  - sub-page: Collection
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Privacy guidance
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

#### External {#external}

{% include storybook-preview.html story="components-va-link--external" link_text="external va-link" height="50px" %}

#### Video

{% include storybook-preview.html story="components-va-link--video" link_text="video va-link" height="50px" %}

### Mobile app

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
  * **Conventional Multi-step Forms** that also:
    * Have a [minimal header]({{ site.baseurl }}/components/header/header-minimal) and [minimal footer]({{ site.baseurl }}/components/footer/footer-minimal)
    * Follow the [one thing per page pattern]({{ site.baseurl }}/patterns/ask-users-for/a-single-response) pattern
    * Use the `H1` element to represent the headline for the current form page, rather than the step title in the step indicator
    * Include only a `Continue` button and do not have a `Back` button after the form
  * **Short Forms** that has a small amount of short, concise steps. For example, the [Pact Act Wizard](https://staging.va.gov/pact-act-eligibility/introduction).
  * **Non-Form Pages** where the current page was accessed from a related page and does not have additional navigation. For example, an appointment details page.

### When to use a Calendar link

* **Adding an event to a calendar.** Use when the link adds an event to a digital calendar.

### When to use a Channel link

* **YouTube channel.** Use when linking to a YouTube channel.

### When to use a Download link

* **Downloading files.** Use for download links including but not limited to PDFs and Excel files.

### When to use a Video link

* **YouTube Video.** Use when linking directly to a YouTube video.

### When to consider something else

* **Use buttons for actions.** Use a [Button]({{ site.baseurl }}/components/button) when you want to make a state change or submit a form. Example actions include, but are not limited to, "Add", "Close", "Cancel", or "Save". Buttons **do things**, links **go places**. Refer to guidance on [Links vs. buttons]({{ site.baseurl }}/components/link/action#choose-the-right-element-buttons-vs-links)
* **Use action links for calls-to-action.** When you want to draw attention to an important call-to-action (CTA) on the page, such as a link that launches a benefit application, use an [Action link]({{ site.baseurl }}/components/link/action). Calls-to-action are not actions themselves (see the previous point). 
* **Table of contents.** When you want to make a long page of content with two or more H2s easier to navigate, use an [On this page link]({{ site.baseurl }} /components/on-this-page).
* **Triggering the generation of a PDF.** When using for a PDF, use only for linking directly to a PDF, not as a trigger for a process that generates a PDF. For [generating a PDF, use a button](#links-vs-buttons).

### How this component works

* **Use icons as defined.** [Icons]({{ site.baseurl }}/components/icon) defined in the link variations above are reserved for that distinct usage. These icons should not be used for another purpose without explicit permission to do so from the Design System Council.

#### Implementation details

If for some reason you do not use a link web-component links must meet the following criteria:

* All links use Source Sans Pro (Regular), underlined, at [vads-font-size-source-sans-normalized]({{ site.baseurl }}/foundation/typography#typography-tokens).
* All links share the same color, [vads-color-link]({{ site.baseurl }}/foundation/color-palette#semantic-color-tokens) for icon, link text, and underline. On mobile, dark mode changes the link color to [vads-color-link-on-dark]({{ site.baseurl }}/foundation/color-palette#semantic-color-tokens). 
* All text links should be underlined. This is especially important for low-vision users. (Exception: [side navigation links]({{ site.baseurl }}/components/sidenav) should not be underlined.)

## Behavior

### When and how to open links

<div class="sr-only">
  If you use a screen reader: This flowchart helps determine how links should open based on platform and content. For web: external links open in new tabs, internal links open in same window unless they cause data loss. For mobile apps: content links open in full panels or webviews within the app, while action links open relevant native apps with confirmation messages.
</div>

<div class="mermaid-width-wide">
  {% include mermaid-chart.html 
   id="link-opening-decision-flowchart" 
   caption="Decision flowchart for determining how links should open across web and mobile app platforms."
   chart="flowchart TD
    Start[<b>How should this link open?</b>]:::node-start --> Platform{<b>What platform?</b>}:::node-question
    
    %% Web Flow
    Platform --> Web[<b>Web</b>]:::node-answer-primary
    Web --> WebDest{<b>Where does the link go?</b>}:::node-question
    
    WebDest --> External[<b>External site</b><br/>Link to another website]:::node-answer-primary
    External --> NewTab1[<b>Open in NEW TAB</b><br/>Add opens in new tab text<br/>Use external link variation]:::node-result-button
    
    WebDest --> Internal[<b>Internal VA.gov</b><br/>Link to another VA.gov page]:::node-answer-secondary
    Internal --> DataLoss{<b>Will clicking cause the user to<br/>lose progress or data?</b>}:::node-question
    
    DataLoss --> LossYes[<b>YES</b><br/>Form in progress,<br/>unsaved data]:::node-answer-primary
    LossYes --> NewTab1
    
    DataLoss --> LossNo[<b>NO</b><br/>General navigation,<br/>reading content]:::node-answer-secondary
    LossNo --> SameWindow[<b>Open in SAME WINDOW</b>]:::node-result-link
    
    %% Mobile App Flow  
    Platform --> Mobile[<b>Mobile App</b>]:::node-answer-secondary
    Mobile --> MobileType{<b>What type of link?</b>}:::node-question
    
    MobileType --> ContentLink[<b>Content link</b><br/>Reading pages, viewing info]:::node-answer-primary
    ContentLink --> ContentLocation{<b>Where is the content?</b>}:::node-question
    
    ContentLocation --> InApp[<b>Within the app</b>]:::node-answer-primary
    InApp --> FullPanel[<b>Open in FULL PANEL</b><br/>Stay within app]:::node-result-link
    
    ContentLocation --> OutApp[<b>Outside the app</b>]:::node-answer-secondary
    OutApp --> SignInNeeded{<b>Requires sign-in or<br/>is third party?</b>}:::node-question
    
    SignInNeeded --> SignYes[<b>YES</b>]:::node-answer-primary
    SignYes --> Browser[<b>Open in BROWSER</b><br/>Show alert warning<br/>User leaves app]:::node-result-action
    
    SignInNeeded --> SignNo[<b>NO</b>]:::node-answer-secondary
    SignNo --> WebView[<b>Open in WEBVIEW</b><br/>Stay within app]:::node-result-link
    
    MobileType --> ActionLink[<b>Action link</b><br/>Phone call, calendar event,<br/>directions, file download]:::node-answer-secondary
    ActionLink --> ActionConfirm[<b>Show CONFIRMATION</b><br/>Then open relevant app<br/>Phone, Calendar, Maps, etc.]:::node-result-action" %}
</div>

<va-additional-info trigger="View text-based decision list for link opening behavior" id="link-opening-decision-list">

<h4>How should this link open?</h4>

<ul>
<li><strong>What platform?</strong>
    <ul>
    <li><strong>Web</strong>
      <ul>
      <li><strong>Where does the link go?</strong>
        <ul>
        <li><strong>External site</strong> (Link to another website) → <strong>Open in NEW TAB</strong>
          <ul>
          <li>Add "(opens in a new tab)" text</li>
          <li>Use external link variation</li>
          </ul>
        </li>
        <li><strong>Internal VA.gov</strong> (Link to another VA.gov page)
          <ul>
          <li><strong>Will clicking cause the user to lose progress or data?</strong>
            <ul>
            <li><strong>YES</strong> (Form in progress, unsaved data) → <strong>Open in NEW TAB</strong></li>
            <li><strong>NO</strong> (General navigation, reading content) → <strong>Open in SAME WINDOW</strong></li>
            </ul>
          </li>
          </ul>
        </li>
        </ul>
      </li>
      </ul>
    </li>
    <li><strong>Mobile App</strong>
      <ul>
      <li><strong>What type of link?</strong>
        <ul>
        <li><strong>Content link</strong> (Reading pages, viewing info)
          <ul>
          <li><strong>Where is the content?</strong>
            <ul>
            <li><strong>Within the app</strong> → <strong>Open in FULL PANEL</strong> (Stay within app)</li>
            <li><strong>Outside the app</strong>
              <ul>
              <li><strong>Requires sign-in or is third party?</strong>
                <ul>
                <li><strong>YES</strong> → <strong>Open in BROWSER</strong> (Show alert warning, User leaves app)</li>
                <li><strong>NO</strong> → <strong>Open in WEBVIEW</strong> (Stay within app)</li>
                </ul>
              </li>
              </ul>
            </li>
            </ul>
          </li>
          </ul>
        </li>
        <li><strong>Action link</strong> (Phone call, calendar event, directions, file download) → <strong>Show CONFIRMATION</strong> then open relevant app (Phone, Calendar, Maps, etc.)</li>
        </ul>
      </li>
      </ul>
    </li>
    </ul>
</li>
</ul>

</va-additional-info>

### Web

* **Open internal VA.gov links in the same window, with exceptions.** All internal links should open in the same window. Only open internal links in a new tab if clicking the link would cause the user to lose progress or unsaved data.
* **External links always open in a new tab.** All external links or links that would cause data loss must use the [external link variation](#external) and include "(opens in a new tab)" text for accessibility.
* **Always notify users when opening in a new tab.** Add "(opens in a new tab)" text to the link. Don't use the new window icon unless there are space constraints.
* **Use appropriate encodings for email and phone links.** Use mailto: for email links and tel: for phone links.

#### Choosing between variations

Review "[Usage](#usage)" for guidance.

### Mobile app

* **Link opens within the app:**
  * In a full panel if the content is within the app.
  * In a webview if the content is not within the app and does not require a separate sign-in.
* **Link opens another app:**
  * In the [browser app](#external-link) if the user needs to sign in to access the content or is being linked to a third party. Always use a native alert to warn the user before leaving the app. Once confirmed, open the default browser app.
  * If the user is performing an action such as making a phone call, getting directions, or downloading a file. Consider using a confirmation message (like a native alert or action sheet) to warn the user before leaving the app. These variants include the onPress logic for app teams, ensuring a native confirmation message is displayed when needed.
    * **[Attachment](#attachment)**: Display the attachment in the app with the ability to download to their device.
    * **[Calendar](#calendar-1)**: Display the event information to allow the user to review and confirm before adding to their calendar. Once confirmed, add to the default calendar app.
    * **[Directions](#directions)**: Display an Action Sheet to allow the user to select their preferred maps app (Apple Maps, Google Maps, etc.). Once selected, open the maps app with the destination.
    * **[Phone](#phone)**: Display an Action Sheet to allow the user to confirm the phone call. Once confirmed, open the default phone app.
    * **[Phone TTY](#phone-tty)**: Display an Action Sheet to allow user to confirm the TTY call. Once confirmed, open the default phone app.
    * **[Text (SMS)](#text-sms)**: Open the default messages app.
* **NOTE:** The Link component currently does not support inline links. A Paragraph component will be created in the future to support inline links, ensuring proper text wrapping and accessibility in React Native.

## Code usage

### Links to content in another language

Links that point to localized content in another language should have an `hreflang` attribute and a `lang` attribute in the following format:

```
<a
  href="#"
  hreflang="es"
  lang="es"
>En Español</a>
```

## Content considerations

Refer to the [Content Style Guide on Links]({{ site.baseurl }}/content-style-guide/links).

## Accessibility considerations

* **Material honesty.** Do not style a link to look or behave like a button ([material honesty](https://alistapart.com/article/material-honesty-on-the-web/)).
* **Screen magnification.** To ensure links are sized properly for screen magnification or browser zoomed-in users, wrap `<va-link>` in the appropriate semantic tag like `<p>`. `<va-link>` will not resize if it is wrapped in a `<div>`.
* **Keyboard navigation.** The user must be able to navigate to links using the Tab key and activate links using the Enter key.
* **Purpose and target.** Link text that doesn't indicate a clear purpose or destination makes it harder for everyone--especially screen reader users--to understand where they're getting routed off to.
* **External links must indicate that they are external.** Follow the methods detailed in [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).
  * By default, the link component's external link variation will append the text, "(opens in a new tab)", instead of using an icon. This follows [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html) advice on providing users with both a spoken and visual warning that this link opens in a new tab.

{% include content/links-vs-buttons.md %}

{% include content/avoid-links-in-headers.md %}

## Privacy guidance

{% include content/privacy-links.md %}

## Related

* [Button]({{ site.baseurl }}/components/button)
* [On this page]({{ site.baseurl }}/components/on-this-page)
