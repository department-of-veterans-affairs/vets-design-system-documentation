---
layout: pattern
title: Forms
inner-title: Accessibility guidelines
permalink: /templates/forms/accessibility-guidelines
redirect_from:
  - /templates/forms/accessibility
intro-text: "Detailed accessibility requirements and implementation guidance for VA.gov forms"
status: use-deployed
anchors:
  - anchor: Focus management implementation
  - anchor: Form labeling and structure
  - anchor: Input validation and error handling
  - anchor: Cognitive accessibility
  - anchor: Comprehensive accessibility testing
  - anchor: VA accessibility requirements and processes
  - anchor: WCAG requirements
  - anchor: Related resources
---

## Why form accessibility matters

Forms are often the primary way Veterans interact with VA services—from applying for benefits to updating personal information to accessing healthcare. When forms aren't accessible, they create barriers that can prevent Veterans from getting the benefits and services they've earned.

### Our commitment to inclusion

VA is committed to providing equal access to all Veterans, including the millions of Veterans with disabilities. This includes:

- **1 in 4 Veterans** who live with a service-connected disability
- Veterans who use screen readers, voice recognition software, or other assistive technologies
- Veterans with cognitive disabilities, traumatic brain injuries, or conditions that affect memory and concentration
- Veterans with temporary impairments from injuries or medical treatments

### The impact of inaccessible forms

When forms aren't properly designed for accessibility, they can:

- **Prevent Veterans from applying for benefits** they need and deserve
- **Create frustration and abandonment** when users can't complete necessary tasks
- **Increase call center volume** as users seek alternative ways to complete forms
- **Violate federal accessibility requirements** under Section 508 and the Americans with Disabilities Act

### Our approach to accessible forms

These guidelines ensure that VA.gov forms work for everyone by addressing:

- **Technical accessibility**: Proper markup, keyboard navigation, and screen reader support
- **Cognitive accessibility**: Clear language, logical flow, and memory aids like automatic saving
- **Usability for all**: Designs that benefit everyone, not just users with disabilities

Every form interaction should be straightforward, regardless of how a Veteran accesses our services. Following these guidelines helps create forms that are not only compliant with accessibility standards, but truly usable by all Veterans.

## Focus management implementation

### Technical requirements

VA.gov forms are single-page applications (SPAs). When a user advances to a new page (route change) in a form, the app **must set focus programmatically** on the page's **top-most unique item** so screen reader and keyboard users immediately land at the correct context.

#### Why focus management matters

- **Announces context**: Users hear the new step name or page name right away (screen readers announce focused element text)
- **Preserves reading order**: Focus starts at the beginning of the step's content, not mid-page  
- **Meets WCAG intent**: Supports focus order and visibility (WCAG 2.2: [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html), [2.4.7 Focus Not Obscured](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) (AA)) and reduces unexpected context changes ([3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html))

#### How it works

On each *successful* page load (not an error validation event):

1. **If the page has a unique page heading (`<h3>` for the step content)**: Focus that `<h3>` (preferred when present and unique to the page)
2. **If the page does not have a unique page heading, focus the stepper header (`<h2>`)**

#### Exceptions and special cases

* **Validation errors on submit**: 
  * Move focus to the first field in error
  * After the user fixes errors and submits successfully, return to the standard rule above
* **When users navigate back to a form page**: Treat it like a fresh page load and move focus to the top-most unique heading. Only in deliberate return flows (like closing a modal or dismissing an overlay) should you return focus to the specific control they left
* **Skip links**: Keep the skip link, but your script should still set focus to the heading after route change
* **Hidden/obscured focus**: Ensure focused headings are scrolled into view and not covered by sticky headers (meets [2.4.11 AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html))



### Code examples

### Legacy forms

Older forms can continue to rely on focus management that is built into the forms library on line 38 of `vets-website/src/platform/forms-system/src/js/containers/FormPage.jsx`. `defaultFocusSelector` is defined as the segmented progress bar in `vets-website/src/platform/utilities/ui/focus.js`.

Because the `h1` in a default form flow is the name of the form on every page of the form, the top level unique thing on a form page was the step indicator.

### Modern forms with unique headings

More recent forms have defined a unique `h3` for each page of the form. Forms that have these unique `h3`s should send focus to the `h3` and this can be done by overriding the default focus in forms by editing your `config/form.js`:

```javascript
// In your form configuration
{
  useCustomScrollAndFocus: true,
  scrollAndFocusTarget: focusH3, // custom function to scroll and focus
}
```

### Implementation resources

* [VA Forms Library - Form Config documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-form-config-options)
* [Live example](https://github.com/department-of-veterans-affairs/vets-website/blob/cd6abe02fc9df6dea2254fa4cc9e9867deb3ce6c/src/applications/appeals/10182/config/form.js#L107-L108)

### Testing checklist

#### Focus management testing

- After clicking **Continue/Next**, does focus land on the unique `<h3>` (or the stepper `<h2>` if no `<h3>`)?
- Is the focused element scrolled into view and **not** hidden under sticky headers?
- With a screen reader, do you immediately hear the step's or page unique name?
- On validation errors, does focus land on the first error field instead of the heading?
- Can you Tab forward/backward naturally from the heading? (No stuck `tabindex="-1"`)




## Form labeling and structure

Proper form structure is essential for multi-step form flows where users navigate between different questions and sections.

### Fieldsets and legends in form flows

For complete technical guidance on fieldsets and legends, see [Fieldsets, legends, and labels]({{ site.baseurl }}/components/form/#fieldsets-legends-and-labels).

#### Form-flow-specific considerations

* **Consistent grouping patterns**: Use the same fieldset/legend approach across all steps in your form
* **Progress context**: When fieldsets span multiple pages, ensure users understand the relationship between steps
* **Navigation impact**: Consider how fieldsets affect focus management when moving between form steps

### Multi-step form structure

* **Page-level headings**: Each form step should have a unique H3 that describes the current step
* **Progress indication**: Use [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) to show form completion status
* **Consistent navigation**: Maintain the same button placement and wording across form steps

### Hint text and help content

* Keep essential instructions visible rather than hidden in expandable sections
* Use [Additional info]({{ site.baseurl }}/components/additional-info) components sparingly to avoid cognitive overload
* Consider how hint text affects the overall form flow and completion time

For technical implementation of hint text, see [Hint text guidelines]({{ site.baseurl }}/components/form/#hint-text).

## Input validation and error handling

Multi-step forms require special consideration for error handling to maintain user context and prevent data loss.

### Form-flow error patterns

For technical implementation of individual field errors, see [Error handling]({{ site.baseurl }}/components/form/#error-handling).

#### Error timing in form flows

* **Step-level validation**: Validate required fields when users attempt to continue to the next step
* **Final validation**: Perform comprehensive validation on the review page before submission

#### Focus management with errors

* **Single error**: Move focus to the field with the error
* **Multiple errors**: Move focus to the first field with an error or to an error summary
* **After error correction**: When users fix errors and continue, resume normal focus management for the next step

#### Error recovery in multi-step forms

* **Preserve progress**: Never lose user data when validation errors occur
* **Clear next steps**: Always tell users exactly what they need to do to continue
* **Context preservation**: Help users understand which step the error occurred on

### Error message content standards

Follow VA standards for error messaging:

* **Be specific**: "Enter a valid 9-digit Social Security number" not "Invalid input"
* **Be helpful**: Explain what the user should do to fix the error
* **Use plain language**: Avoid technical jargon
* **Stay positive**: "Enter your phone number" instead of "Don't leave this field blank"

For comprehensive error message guidance, see [Error messages]({{ site.baseurl }}/content-style-guide/error-messages/).

## Cognitive accessibility

Forms must support users with cognitive disabilities, memory issues, and attention challenges.

### Memory and comprehension support

* **One question per page**: Reduce cognitive load by focusing on single tasks
* **Clear progress indication**: Help users understand where they are in the process
* **Consistent language**: Use the same terms throughout the form (follow [VA.gov word list]({{ site.baseurl }}/content-style-guide/word-list))
* **Context preservation**: Remind users of key information when relevant

### Error prevention

* **Clear instructions**: Explain what information is needed before asking for it
* **Format examples**: Show expected formats for phone numbers, dates, etc.
* **Confirmation steps**: Include review pages for important submissions
* **Recovery guidance**: Provide clear next steps when errors occur




## Comprehensive accessibility testing

- **Keyboard navigation**: Navigate through the entire form using only the keyboard
- **Screen reader testing**: Test with NVDA, JAWS, or VoiceOver to ensure all information is announced clearly
- **Error handling**: Verify that error messages are clearly associated with the relevant form fields
- **Form labels**: Confirm all form fields have proper labels and instructions
- **Color contrast**: Ensure sufficient contrast ratios for all text and interface elements

### Form structure testing

- **Multi-step navigation**: Verify screen readers announce step changes and progress through the form
- **Consistent structure**: Test that fieldset and legend patterns work consistently across all form steps
- **Progress indication**: Confirm progress bar updates are announced to screen readers

### Error handling testing

- **Error recovery**: Test that focus moves appropriately after users fix validation errors  
- **Form persistence**: Verify that fixing errors doesn't cause loss of data in other form sections
- **Error announcements**: Confirm error messages are announced in the context of the current form step

### Cognitive accessibility testing

- **Save progress verification**: Confirm forms save automatically and users receive appropriate feedback
- **Session persistence**: Test that authenticated users can leave and return to forms without losing progress
- **Clear navigation**: Verify users can understand their progress through multi-step forms

## VA accessibility requirements and processes

### Foundational accessibility testing

Before launching any form on VA.gov, teams must complete foundational accessibility testing as part of the collaboration cycle. This testing is required for staging review and includes:

- Color and color contrast evaluation
- Automated testing with aXe DevTools
- Content zoom and reflow testing  
- Keyboard navigation testing

[Learn more about foundational accessibility testing requirements](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review) and how to prepare for your staging review.

### Working with the ADE team

The Accessibility Digital Experience (ADE) team provides early accessibility guidance to help teams build accessible forms from the start. Reach out to the ADE team during your planning phase rather than waiting until staging review.

## WCAG requirements

### Relevant WCAG 2.2 success criteria

* **2.4.3 Focus Order (AA)**: Focus moves in a logical sequence that preserves meaning and operability
* **2.4.7 Focus Visible (AA)**: Keyboard focus indicator is visible when components receive keyboard focus  
* **2.4.11 Focus Not Obscured (Minimum) (AA)**: When a component receives keyboard focus, it is not entirely hidden due to author-created content
* **3.2.3 Consistent Navigation (AA)**: Navigational mechanisms that are repeated on multiple pages occur in the same relative order each time they are repeated

### Form-specific requirements

* **1.3.1 Info and Relationships (AA)**: Form labels, instructions, and error messages must be programmatically associated with form fields
* **2.1.1 Keyboard (AA)**: All form functionality must be available from a keyboard
* **3.3.2 Labels or Instructions (AA)**: Labels or instructions are provided when content requires user input
* **3.3.3 Error Suggestion (AA)**: If an input error is automatically detected, suggestions for correction are provided
* **3.3.4 Error Prevention (AA)**: For forms that cause legal commitments or financial transactions, submissions are reversible, verified, or confirmed
* **4.1.3 Status Messages (AA)**: Status messages (like form validation) can be programmatically determined

### Additional cognitive accessibility requirements

* **2.2.1 Timing Adjustable (AA)**: Time limits can be extended or disabled
* **3.2.2 On Input (AA)**: Changing form controls doesn't cause unexpected context changes
* **3.3.1 Error Identification (AA)**: If input errors are detected, the items in error are identified and described to users in text


## Related resources

* [Focus management overview]({{ site.baseurl }}/accessibility/focus-management)
* [Form components accessibility]({{ site.baseurl }}/components/form/#accessibility-considerations-for-all-form-elements)
* [Fieldsets, legends, and labels]({{ site.baseurl }}/components/form/#fieldsets-legends-and-labels)
* [Error message guidelines]({{ site.baseurl }}/content-style-guide/error-messages)
* [VA Forms Library documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-form-config-options)
* [Form labels content guidance]({{ site.baseurl }}/content-style-guide/form-labels)
* [Hint text guidelines]({{ site.baseurl }}/components/form/#hint-text)
