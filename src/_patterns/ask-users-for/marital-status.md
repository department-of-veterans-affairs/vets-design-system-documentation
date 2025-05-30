---
layout: pattern
permalink: /patterns/ask-users-for/marital-status
contributors: Lynn Stahl (Agile Six), Fran Cross (Agile Six), Adam Whitlock (Ad Hoc), Belle Poopongpanit (Agile Six), Christine Rose Steiffer (Agile Six), Kristen Faiferlick (Ad Hoc), Jeana Clark (Ad Hoc), Beth Pandone (Pluribus), Jaci Wilkinson (Ad Hoc)
sub-section: ask-users-for
title: Marital status
intro-text: "Follow this pattern to ask a user for their marital status and information about their current and previous marriages."
figma-link: https://www.figma.com/design/ZIGDfSb8D5YLBdJavzDdqi/AE-Design-Patterns---Service-list?node-id=1-129&t=WAqQoJMqi1FusGSK-0
github-title: pattern-marital-status
research-title: Ask users for marital status
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Research findings
---

## Usage

### When to use this pattern

* **When you need to collect a person’s marital status or information about their current and previous marriages.** This applies when you need information from a Veteran, spouse, or dependent.

### Design principles

* **Take a trauma-informed approach.** Although commonly asked, questions about marital status and previous marriages can bring up complex feelings and memories in respondents. Explain why we ask the question with an [Additional info](https://design.va.gov/components/additional-info) component. 

* **Only ask for what you really need.** While this pattern includes multiple follow-up questions, only collect the specific data that your forms requires. 

## How to design and build

### How this pattern works

#### “What is your marital status?” question

* **This question is the foundational part of this pattern.** If your form needs additional information, you can include questions from the question bank in this guidance.


{% include component-example.html alt="A display of the standard Marital Status question with reponses available with radio buttons and an additional info component that provides more information on why we ask this information." file="/images/patterns/ask-users-for/marital-status/standard-marital-status.jpg" caption="The standard Marital Status question to be used in most forms. Always provide a detailed explanation in the additional info component that tells the user why you need this information." width="50%" %}


* **If your form doesn't need this level of detail, simply ask "Are you married?".** Include "Yes/No" radio button options for a response. Map those to the "Married/Never Married" workflows.

{% include component-example.html alt="An annotated display of the simplified version of the Marital Status question with reponses available with radio buttons and an additional info component that provides more information on why we ask this information." file="/images/patterns/ask-users-for/marital-status/simple-marital-status.jpg" caption="Use the simplified Marital Status question in forms that don't need to collect detailed information on the user's marital status. Use when your form only needs a yes/no answer to the question." width="65%" %}

* **Include an explanation for why we ask this question.** Place this explanation in an [Additional info](https://design.va.gov/components/additional-info) component for questions that may feel particularly invasive or difficult for users to answer. 

Only use the following questions in this pattern if your form needs more information. 

#### Spouse personal information and identification
This optional section includes questions about the spouse, including:

* Name
* Date of birth
* Social Security number
* If they are a Veteran
* Their VA file number and military service number if they are a Veteran

{% include component-example.html alt="A display of the page asking for spouse name and date of birth." file="/images/patterns/ask-users-for/marital-status/spouse-personal-info.jpg" caption="The first of two pages that allow forms to ask for the spouse's personal information." width="50%" %}

{% include component-example.html alt="An annotated display of the page asking for spouse social security number and Veteran status." file="/images/patterns/ask-users-for/marital-status/spouse-identity.jpg" caption="The second of two pages that allow forms to ask for the spouse's identity information." width="60%" %}

#### Living arrangement information

This optional section asks if the user lives with their spouse. If not, it also asks why and how much financial support the user provided their spouse over the past 12 months. 

{% include component-example.html alt="A display of the page asking if the user lives with their spouse." file="/images/patterns/ask-users-for/marital-status/spouse-living-situation-2.jpg" caption="The first of two pages that allow forms to ask living arrangement questions." width="50%" %}

{% include component-example.html alt="A display of the page asking for additional information about their living arrangements." file="/images/patterns/ask-users-for/marital-status/spouse-additional-living-situation.jpg" caption="The second of two pages that allow forms to ask more information about the spouse's living arrangements." width="50%" %}

#### Marriage information

This optional section includes questions about the marriage, such as:

* Date and place of marriage

{% include component-example.html alt="A display of the page asking for the place and date of the marriage." file="/images/patterns/ask-users-for/marital-status/place-date-marriage.jpg" caption="The page that asks for the place and date of the marriage." width="50%" %}

* Type of marriage

{% include component-example.html alt="A display of the page asking how the couple was married." file="/images/patterns/ask-users-for/marital-status/how-married.jpg" caption="The page that asks for the type of marriage ceremony." width="50%" %}

* Reason for termination, if applicable

{% include component-example.html alt="A display of the page asking how the marriage ended." file="/images/patterns/ask-users-for/marital-status/how-marriage-ended.png" caption="The page that asks for how the marriage ended." width="65%" %}

* Date and place of termination or spouse’s death, if applicable

{% include component-example.html alt="A display of the page asking for the date and place of the marriage termination." file="/images/patterns/ask-users-for/marital-status/date-place-marriage-ended.jpg" caption="The page that asks for the date and place of the marriage termination." width="50%" %}

#### Previous marriage information

This optional section features the [Multiple responses](https://design.va.gov/patterns/ask-users-for/multiple-responses) (also known as: List & Loop) pattern to ask questions about previous marriages, including:

* Name(s) of former spouse(s)

{% include component-example.html alt="A display of the page asking for the previous spouse's personal information." file="/images/patterns/ask-users-for/marital-status/previous-spouse-personal-info.jpg" caption="The page that asks for the previous spouse's personal information." width="65%" %}

* Veteran status of former spouse(s)

{% include component-example.html alt="A display of the page asking for the previous spouse's identity information including Veteran status." file="/images/patterns/ask-users-for/marital-status/previous-spouse-identity-info.jpg" caption="The page that asks for the previous spouse's identity information including Veteran status." width="50%" %}
  
* Date and place of marriage(s)

{% include component-example.html alt="A display of the page asking for the date and place of the previous marriage." file="/images/patterns/ask-users-for/marital-status/previous-spouse-date-place-of-marriage.jpg" caption="The page that asks for the date and place of the previous marriage." width="50%" %}

* Date and place of marriage termination(s) - See reference image under 'Marriage Information' section.
* Method of marriage termination(s) - See reference image under 'Marriage Information' section.

### Patterns and components used in this pattern

* [Radio button](https://design.va.gov/components/form/radio-button)
* [Select](https://design.va.gov/components/form/select)
* [Multiple responses](https://design.va.gov/patterns/ask-users-for/multiple-responses)
* [Additional info](https://design.va.gov/components/additional-info)

### Additional considerations

* If a form requires file uploads (for example, a marriage certificate or divorce decree), state that these files are needed on the form introduction page.
* As the user moves through the form, if they provide a response that triggers conditionally-required file uploads, explain why the file upload is needed. For example, if a user indicates that they were married in a way that is not among the standard responses, include text like this: "Based on your answer, you'll need to provide supporting documents to help us understand your marital status. We'll ask you to upload these documents on the next screen [or on the final screen of the form, depending on your form's situation]."
* If you are asking only one question on a page, the question label should be an h3, as shown in the [Ask Users For... A Single Response](https://design.va.gov/patterns/ask-users-for/a-single-response#annotated) pattern. However, if you are asking multiple questions per page, give the page a descriptive page title as an h3 and use standard (non-header) labels for questions.


## Code usage

(Link to the page.code-link, coming soon)

## Content considerations

### Respondent role

Veterans, their spouse, or a dependent can complete forms. Depending on who is completing the form, some slight alterations to the text content may need to shift. Update content as needed. For example…


## Accessibility considerations

### Radio button accessibility considerations

**VoiceOver on Safari has accessibility issues.** VoiceOver on Safari reads out the fieldset legend for each radio item. It should only read out the legend at the end of the first radio option. Theres no workaround right now. Learn more in the [Radio button component](https://design.va.gov/components/form/radio-button) page.


## Research findings

A [secondary research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Discovery%20Research%20Report.md) from April 2025 explores which VA forms ask questions related to an applicant's marital status and how they phrase these questions. It also provides recommendations that influenced the creation of this pattern. Learn more in the [research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Discovery%20Research%20Report.md).

This pattern would benefit from additional research. Some areas that were identified as potentially high-impact include learning:
* How users respond to trauma-informed language throughout the pattern
* How users respond to the information inside the Additional Information components
* If users have any confusion about whose information is needed in the portion of the pattern asking for information on their current spouse's previous partner(s)
* The best location for both optional and required file uploads (either in the context of the marital information pattern/step, or at the end of the form flow)