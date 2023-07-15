---
layout: pattern
title: Stay informed of their application status
permalink: /patterns/help-users-to/stay-informed-of-their-application-status
sub-section: help-users-to
intro-text: "When we need to keep the user informed of their application status, there is currently no \"one size fits all\" solution. To provide clarity, this page shows examples of patterns that exist on VA.gov today."
status: use-with-caution-candidate
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
---

Review examples of patterns that exist today that help users to stay informed of their application status.

## Usage

### When to use this pattern

**When users need to stay informed of their application status.** After users have submitted an application, keep them informed of their application status.

## Examples

### MyVA

{% include component-example.html alt="An example of a claims and appeals status card in My VA." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/status-in-myva.png" caption="A status Card component used in MyVA to show the status of a claim with a call-to-action to retrieve details on that claim." reverse="true" class="x2" %}


### 10-10ez application status on health care intro page

{% include component-example.html alt="An example of the 10-10ez health care application status on intro page." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/10-10ez-status-on-intro-page.png" caption="The 10-10ez Health Care application provides status to users if and when they return to the introduction page." class="x2" %}


### Claim status tool

{% include component-example.html alt="An example of the Claim status tool page." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/Claim-status-tool-status-page.png" caption="The Claim status tool uses the Process list component to reflect the status of a claim." class="x2" %}

### Decision letter

{% include component-example.html alt="An example of a claim status card that shows the ability to download a decision letter" file="/images/patterns/help-users-to/stay-informed-of-their-application-status/decision-letter-status-card.png" caption="This claim Card component provides a status of the claim and indicates that a decision letter is available for download." class="x2" %}


### Certificate of eligibility

{% include component-example.html alt="An example of the Certificate of eligibility status page." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/COE-automatic-download-page.png" caption="The Certificate of eligibility uses an Alert component to show status." class="x2" %}

### Components used in this pattern

* [Alert]({site.baseurl}/components/alert)
* [Card]({site.baseurl}/components/card)
* [Process list]({site.baseurl}/components/process-list)