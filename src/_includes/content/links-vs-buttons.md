### Choose the right element: Buttons vs. links

Many people struggle to select the right element when choosing between a button or link. Making the right choice can help make an interface easier to use, especially for people who use assistive technology. Buttons and links are the primary ways users interact with information on a web page. Links are for navigation; buttons are for action.

#### Accessibility problem being solved

In general, make links look like links and buttons look like buttons. Designing buttons as buttons and links as links improves usability and accessibility by:

* Setting honest expectations of interaction behavior
* Providing clear signifiers of affordances
* Creating experiences that are consistent with web standards

Assistive technology users rely on proper semantics to access web content. They may choose to navigate by button, or link, depending on what they’re looking for. It’s vital that our content meets users’ expectations - link items, coded as buttons, could make those links hard to find, for example.

Button and link confusion can be very frustrating for assistive technology users. A user with a screen reader may pull up a list of links and may not find a specific link because it turns out that it’s been designated as a button in the markup. It is important to use Action Links for calls to actions that link to another page rather than buttons, because screen readers always say "link" before links, and "button" before buttons.

#### Ideal state

**Buttons are:**

* Used for actions, including:
    * Submitting a form
    * Opening a modal
    * Changing the state of something (such as “Back / Continue” buttons on a form)
    * Expanding something (like an accordion)
* Created using the [Button component]({{ site.baseurl }}/components/button/) or [Button group component]({{ site.baseurl }}/components/button/button-group), or with [standard semantic HTML button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
* Styled to look like buttons and shouldn’t include link signifiers, such as underlines

**Links are:**

* Used for navigation:
    * Navigation bars
    * Skip links / jump links (such as the On this page component)
    * Links to internal web pages
    * Links to external websites (read the [Content style guide]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites) for additional information)
    * Links to PDFs, whether static or generated on the fly
        *  **Rationale:** The final product is a file, and the Veteran may not know that the PDF is generated on the fly.
        *  **Exception:** If the trigger to generate the PDF is "Generate PDF," "Create PDF," or other phrases that explicitly call out the "action" nature of the generation, use a button.
* Created using the [Link component]({{ site.baseurl }}/components/link/), the [Action link component]({{ site.baseurl }}/components/link/action) if you need extra visual emphasis, or with [standard semantic HTML link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
* Styled to look like links and shouldn’t include button signifiers, such as borders

### Implementation notes

{% include component-example.html alt="A flowchart designed to arrive at a decision between using a button or link." file="/images/components/button/button-or-link-flow-chart.png" caption="Button vs. Link flow chart." %}

#### Should this be a button or link?

* **Is the purpose of the control to navigate elsewhere?**
    * Yes
      * Examples: Going to a page; Going to a static file, like a PDF
      * **Is data submitted before navigation?**
        * Yes
          * Examples: Sending data to a server or saving client side before moving to a new page, like a form
          * _Make it a Button_
        * No
          * **Does it need to stand out from surrounding design elements?**
            * No
              * Examples: Link in body text; Link in the footer of a form; Links in a menu
              * _Make it a Link_
            * Yes
              * Examples: A link to a page which will begin a new form; A link on a page with an existing button as the primary action that’s needs more visual weight than other links
                * **Is this on web or mobile?**
                  * Mobile
                    * _Ask your friendly neighborhood accessibility expert_
                  * Web
                    * _Make it an Action Link_
    * No
      * **Is the purpose of this control to generate data for a file?**
        * Examples: Creating a PDF from a web page; Creating a PDF from data on the server
        * Yes
          * _Make it a Link_
        * No
          * _Make it a Button_

* Make sure to read both [buttons]({{ site.baseurl }}/components/button) and [Action Link]({{ site.baseurl }}/components/link/action) guidance when using either component.
* When a file download is involved, it is best to use the [download link]({{ site.baseurl }}/components/link/#download) component. This is because links are intended for navigation, and downloading a file is a navigational action to a resource.
