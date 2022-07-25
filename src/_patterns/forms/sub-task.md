---
layout: pattern
title: Sub-task
permalink: /patterns/forms/sub-task
has-parent: /patterns/forms/
intro-text: "Helps a user complete a shorter task within a larger process or flow." 
draft: true
research-title: sub-task
sketch-link: https://www.sketch.com/our-workspace-the-pattern-library/specific-page-for-this-pattern
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to build
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

Within our design philosophy of "[Keep it simple](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/resources/design#design-philosophy)" for users we state:

> Limit the number of decisions a Veteran needs to make in one screen. We usually try to keep the number of questions under five. Two or three is even better.

The sub-task pattern provides guidance on how to "keep it simple". This pattern replaces the deprecated Wizard pattern. 

## Usage

### When to use this pattern

* **Secondary tasks before a flow.** When we need to ask users a series of questions to determine the best path forward for them. For example, [branching eligibility choices]({{ site.baseurl }}/patterns/benefit-applications#f-optional-sub-task-pattern-for-branching-eligibility-choices). When there are multiple benefits that branch out depending upon user response the sub-task pattern can guide the user to the appropriate benefit application.
* **Short task within a larger process.** When we need the user to complete a shorter task, one that can be accomplished with a few questions, within a larger process that may span touchpoints.

#### Design principles

**[One thing per page](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)** is a design principle that is employed when structuring forms. The "thing" can be:

* One piece of information you’re telling a user
* One decision a user has to make
* One question a user has to answer

That one decision or question may require more than one input from the user as they fill out a form. However, by following this pattern you can [reduce the cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/) required to complete the form by focusing the user on a specific question and its answer.

### When not to use this pattern

* **In place of a standard form flow.** This pattern does not replace a standard form flow and layout. This pattern exists within a larger flow or process, not by itself. Thus it would be inappropriate to create a stand-alone form flow that does not have a [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented), [Button pair]({{ site.baseurl }}/components/button/button-pair), and other components found in a typical [form flow]({{ site.baseurl }}/patterns/forms/#the-structure-of-a-form).

### When to use caution

* **List and loop.** While it is possible, and encouraged, to explore a "One thing per page" principle using this pattern along with the List and loop pattern, it has not yet been validated on VA.gov. If you are interested in combining these patterns please work with the Design System Team to define a research plan.

## Examples

### Secondary task before a flow - Pre-check-in experience

{% include component-example.html alt="Check-in experience sub-task example." file="/images/patterns/forms/sub-task/Check-in-sub-task.png" caption="Pre-check-in sub-task." %}

* An example of a secondary task that helps determine if current information on file for a Veteran is correct before checking in at a facility. This example shows the success path.

### Short task within a larger process - VA Online Scheduling (VAOS) Vaccine sub-task

{% include component-example.html alt="VA Online Scheduling sub-task example." file="/images/patterns/forms/sub-task/VAOS-vaccine-sub-task.png" caption="VA Online Scheduling vaccine sub-task." %}

* An example of a short task within a larger process, the questions related to vaccination status are a sub-task that results in either the user moving forward in the process or reaching a stopping point. This is sometimes also referred to as a "screener question", in that it screens out users from continuing along the larger process. 
* Step 4 in this sub-task shows an example of an [end point](#define-clear-end-points).

### Other relevant examples

* **beta.ssa.gov** The [Check eligibility for Social Security benefits](https://beta.ssa.gov/prepare/check-eligibility-for-benefits) flow is a preparation step ahead of applying for benefits and uses the "One thing per page" principle throughout. 
* **Better form design**: There are many reasons why using this pattern with the underlying principle of "One thing per page" is preferred. Many of which are [outlined in this article from Smashing Magazine](https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/).

## How to design and build 

### Anatomy or layout details

Details any containers of components or layout concerns for how the pattern may be implemented on a page or pages.

### How this pattern works

* Use the principle of "One thing per page" where the "thing" is:
  * One piece of information you’re telling a user
  * One decision a user has to make
  * One question a user has to answer
* Create a series of simple questions or decisions, written in plain language, and place them on distinct pages (rather than progressively disclosed on the same page)
* These questions can be used to:
  * Glean a user's specific eligibility status
  * Gather background information
  * Gather information on specific needs/goals that can change the resulting form flow or experience.

#### Define clear end points
* There should be no dead ends. Users should always be given an outline of next steps that help them continue outside of the sub-task or via another touchpoint (phone, in-person, etc.) 
* It should be clear when the user has reached an end point for the sub-task where they may need to leave the sub-task and continue with a different process or touchpoint. This can be best accomplished with a simple page that may feature a [background-only alert]({{ site.baseurl }}/components/alert#examples---background-color-only).
* It should also be clear when the sub-task is complete and the user has returned or is ready to start the main task or process.

### Components used in this pattern

This pattern can be implemented with standard form elements and other optional components:

* Standard [form elements]({{ site.baseurl }}/components/form/) 
* [Accordion]({{ site.baseurl }}/components/accordion)
* [Alert]({{ site.baseurl }}/components/alert)
* [Button pair]({{ site.baseurl }}/components/button/button-pair)
* [Link - Action]({{ site.baseurl }}/components/link/action/)

## Content considerations

* Questions, decisions, and other pieces of information in the sub-task must be in [plain language]({{ site.baseurl }}/content-style-guide/content-principles/plain-language).
* Start with essential, required questions then move to optional questions if necessary.
* Don't nest multiple questions within one question. Most questions should be answerable via the [Yes/No button pair]({{ site.baseurl }}/components/button/button-pair#default-yesno)
* Group similar questions into a series of questions around a topic. For example, contact information questions could be grouped so those questions appear in series rather than sporadically. 
* Use research and card sorting to determine the best order of questions.
* Use clear and concise [button labels]({{ site.baseurl }}/content-style-guide/button-labels).


## Accessibility considerations

* This pattern replaces the deprecated Wizard pattern as it avoids the following problems with that pattern. Thus ensure that your Sub-task does not exhibit the following:
  * No clear end point.
  * Easy for users to accidentally jump/tab out of the wizard.
  * No clear and explicit validation of input.
  * Nested fieldsets are problematic as the end of fieldset is not announced by screen readers thus making it impossible for screen reader users to confidently know which fields belong within which fieldset.
  * Providing results using dynamic show/hide behavior is spotty for screen reader users
* The point of this pattern is to keep the page minimal. Allowing screen reader users to quickly navigate to the first heading/question and start interacting with the form immediately should be the goal.