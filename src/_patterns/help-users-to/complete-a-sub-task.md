---
layout: pattern
permalink: /patterns/help-users-to/complete-a-sub-task
sub-section: help-users-to
title: Complete a sub task
aka: Sub-task, Wizard
intro-text: "Helps users complete a shorter task before, or within, a larger process or flow." 
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

All of the use cases below are valid uses for this pattern.

* **Task before a flow.** Sometimes, the eligibility for a VA benefit or resource is so complex that it has multiple access pathways, depending on a user's specific needs or circumstances. Users may experience consequences (e.g. not getting the benefit or limiting benefit options), if they misunderstand eligibility content or choose the wrong pathway. Use this pattern to guide users down an optimal pathway for their circumstances. This is also known as [branching eligibility choices]({{ site.baseurl }}/patterns/help-users-to/navigate-benefit-applications#f-optional-help-users-to-complete-a-sub-task-pattern-for-branching-eligibility-choices).
* **Task within a flow.** Use this pattern when we need the user to complete a shorter task, one that can be accomplished with a few questions, within a larger process that may span touchpoints.

#### Design principles

**[One thing per page](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)** is a content design principle that can be employed when structuring forms. It exists within a broader principle of splitting, or chunking, content in order to break it up for easier understanding. This pattern is an example of this principle and this principle can be applied to other patterns or form structure in general.

The "One thing" can be:
* One piece of information you’re telling a user
* One decision a user has to make
* One question a user has to answer

That one decision or question may require more than one input from the user as they fill out a form. However, by following this pattern you can [reduce the cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/) required to complete the form by focusing the user on a specific question and its answer.

### When not to use this pattern

* **In place of a standard form flow.** This pattern does not replace a standard form flow and layout. This pattern exists within a larger flow or process, not by itself. Thus it would be inappropriate to create a stand-alone form flow that does not have a [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented), [Button pair]({{ site.baseurl }}/components/button/button-pair), and other components found in a typical [form flow]({{ site.baseurl }}/templates/forms/#the-structure-of-a-form).

### When to use caution

* **List and loop.** While it is possible, and encouraged, to explore a "One thing per page" principle using this pattern along with the List and loop pattern, it has not yet been validated on VA.gov. If you are interested in combining these patterns please work with the Design System Team to define a research plan. Some teams are currently exploring this approach.

## Examples

### Pre-check-in experience

{% include component-example.html alt="Check-in experience sub-task example." file="/images/patterns/help-users-to/complete-a-sub-task/Check-in-sub-task.png" caption="Pre-check-in sub-task." %}

* An example of a task that helps determine if current information on file for a Veteran is correct before checking in at a facility. This example shows the success path.
* Note that this example features a [Button pair]({{ site.baseurl }}/components/button/button-pair) for Yes/no which has some [accessibility considerations](#accessibility-considerations).

### VA Online Scheduling (VAOS) Vaccine sub-task

{% include component-example.html alt="VA Online Scheduling sub-task example." file="/images/patterns/help-users-to/complete-a-sub-task/VAOS-vaccine-sub-task.png" caption="VA Online Scheduling vaccine sub-task." %}

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
* Start with the content design - Create a series of simple questions or decisions, written in plain language, and place them on distinct pages (rather than progressively disclosed on the same page)
* Structure the logic tree for questions to gather information from users in as few questions as possible, while still directing them to the best next step for their circumstances.
* Do not show irrelevant content to users.
* Questions can be used to:
  * Glean a user's specific eligibility status
  * Gather background information
  * Gather information on specific needs/goals that can change the resulting form flow or experience.

#### Define clear end points
* There should be no dead ends. Users should always be given an outline of next steps that help them continue outside of the sub-task or via another touchpoint (phone, in-person, etc.) 
* It should be clear when the user has reached an end point for the sub-task where they may need to leave the sub-task and continue with a different process or touchpoint. This can be best accomplished with a simple page that may feature an [Alert]({{ site.baseurl }}/components/alert).
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
* Reference [writing questions for forms](https://service-manual.nhs.uk/content/how-to-write-good-questions-for-forms/get-the-questions-into-order) for additional considerations.

## Accessibility considerations

* Titles (h1s) of sub-task pages must be unique. 
* Use of the Yes/No button pair is limited to mobile specific flows as it does not remember the user's previous choice when navigating backwards in a flow. Using radio options along with a submit button is more materially honest and semantically correct as it splits the selection (input) from submission (button).
* This pattern replaces the deprecated Wizard pattern as it avoids the following problems with that pattern. Thus ensure that your Sub-task does not exhibit the following:
  * No clear end point.
  * Easy for users to accidentally jump/tab out of the wizard.
  * No clear and explicit validation of input.
  * Nested fieldsets are problematic as the end of a fieldset is not announced by screen readers thus making it impossible for screen reader users to confidently know which fields belong within which fieldset.
  * Providing results using dynamic show/hide behavior is spotty for screen reader users
* The point of this pattern is to keep the page minimal. Allowing screen reader users to quickly navigate to the first heading/question and start interacting with the form immediately should be the goal.