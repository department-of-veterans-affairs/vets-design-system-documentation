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
  * When a file download is involved, it is best to use the [download link]({{ site.baseurl }}/components/link/#download) component. This is because links are intended for navigation, and downloading a file is a navigational action to a resource.
* Styled to look like links and shouldn’t include button signifiers, such as borders

### Implementation notes

<div class="mermaid-width mermaid-comparison">
  <h4 class="mermaid-comparison__title">Should this be a button or link?</h4>
  <div class="sr-only">
    If you use a screen reader: Skip the visual flowchart below and jump to the <a href="#button-link-decision-list">text-based decision list</a> for the same information in a more accessible format.
  </div>
  {% include mermaid-chart.html 
     id="button-link-decision-flowchart" 
     caption="Decision flowchart to help determine whether to use a button or link element."
     chart="
flowchart TD
    Start[\"<b>Should this be a button or a link?</b>\"]:::node-start --> Q1{\"<b>Is the purpose of<br/>this control to<br/>navigate elsewhere?</b>\"}:::node-question
    
    %% Navigation Path (YES)
    Q1 --> NavYes([\"<b>YES</b><br/>Examples:<br/> Going to a page or<br/> a static file like a PDF\"]):::node-answer-primary
    NavYes --> Q2{\"<b>Is data submitted<br/>before navigation?</b>\"}:::node-question
    
    Q2 --> DataYes([\"<b>YES</b><br/>Examples:<br/> Sending data to server or<br/> saving client-side before<br/>moving to a new page\"]):::node-answer-primary
    DataYes --> ResultBtn1([\"Make it a <b>BUTTON</b>\"]):::node-result-button
    
    Q2 --> DataNo([\"<b>NO</b>\"]):::node-answer-secondary
    DataNo --> Q3{\"<b>Does it need to<br/>stand out from surrounding<br/>design elements?</b>\"}:::node-question
    
    Q3 --> EmphNo([\"<b>NO</b><br/>Examples:<br/> Link in a body of text,<br/>footer of a form,<br/>or in a menu\"]):::node-answer-secondary
    EmphNo --> ResultLink1([\"Make it a <b>LINK</b>\"]):::node-result-link
    
    Q3 --> EmphYes([\"<b>YES</b><br/>Examples:<br/> Link to a page which <br/>will begin a new form or<br/> needs more visual weight<br/>than other links\"]):::node-answer-primary
    EmphYes --> Q4{\"<b>Is this on web<br/>or mobile app?</b>\"}:::node-question
    
    Q4 --> PlatWeb([\"Web\"]):::node-context
    PlatWeb --> ResultAction([\"Make it an <b>ACTION LINK</b>\"]):::node-result-action
    Q4 --> PlatMobile([\"Mobile App\"]):::node-context
    PlatMobile --> AskExpert[\"<b>Ask your friendly neighborhood<br/> accessibility expert</b>\"]:::node-special
    
    %% Action Path (NO)
    Q1 --> ActionNo([\"<b>NO</b><br/>Examples:<br/> Taking an action<br/>or opening a modal\"]):::node-answer-secondary
    ActionNo --> Q5{\"<b>Is the purpose of this<br/>control to generate<br/>data for a file?</b>\"}:::node-question
    
    Q5 --> FileYes([\"<b>YES</b><br/>Examples:<br/> Create a PDF<br/>from a web page or<br/>data on the server\"]):::node-answer-primary
    FileYes --> ResultLink2([\"Make it a <b>LINK</b>\"]):::node-result-link
    
    Q5 --> FileNo([\"<b>NO</b>\"]):::node-answer-secondary
    FileNo --> ResultBtn2([\"Make it a <b>BUTTON</b>\"]):::node-result-button
" %}
</div>



<va-additional-info trigger="View text-based decision list for buttons vs. links" id="button-link-decision-list">

<h4>Should this be a button or link?</h4>

<ul>
<li><strong>Is the purpose of the control to navigate elsewhere?</strong>
    <ul>
    <li>Yes
      <ul>
      <li>Examples: Going to a page or a static file like a PDF</li>
      <li><strong>Is data submitted before navigation?</strong>
        <ul>
        <li>Yes
          <ul>
          <li>Examples: Sending data to server or saving client-side before moving to a new page</li>
          <li><em>Make it a Button</em></li>
          </ul>
        </li>
        <li>No
          <ul>
          <li><strong>Does it need to stand out from surrounding design elements?</strong>
            <ul>
            <li>No
              <ul>
              <li>Examples: Link in a body of text, footer of a form, or in a menu</li>
              <li><em>Make it a Link</em></li>
              </ul>
            </li>
            <li>Yes
              <ul>
              <li>Examples: Link to a page which will begin a new form or needs more visual weight than other links</li>
              <li><strong>Is this on web or mobile app?</strong>
                <ul>
                <li>Mobile App
                  <ul>
                  <li><em>Ask your friendly neighborhood accessibility expert</em></li>
                  </ul>
                </li>
                <li>Web
                  <ul>
                  <li><em>Make it an Action Link</em></li>
                  </ul>
                </li>
                </ul>
              </li>
              </ul>
            </li>
            </ul>
          </li>
          </ul>
        </li>
        </ul>
      </li>
      </ul>
    </li>
    <li>No
      <ul>
      <li>Examples: Taking an action or opening a modal</li>
      <li><strong>Is the purpose of this control to generate data for a file?</strong>
        <ul>
        <li>Examples: Create a PDF from a web page or data on the server</li>
        <li>Yes
          <ul>
          <li><em>Make it a Link</em></li>
          </ul>
        </li>
        <li>No
          <ul>
          <li><em>Make it a Button</em></li>
          </ul>
        </li>
        </ul>
      </li>
      </ul>
    </li>
    </ul>
</li>
</ul>

</va-additional-info>

