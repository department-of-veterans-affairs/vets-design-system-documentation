---
layout: content-style-guide
title: Privacy and PII/PHI
intro-text: Guidance on protecting Personally Identifiable Information (PII) and Protected Health Information (PHI) in VA.gov content and user interfaces.
---

## What is PII or PHI?

### Personally Identifiable Information (PII)

Personally Identifiable Information (PII) refers to any information connected to a specific individual that can be used by itself (direct) or when combined with other information (indirect) to uncover that individual's identity.

### Protected Health Information (PHI)

Protected Health Information (PHI) refers to any information related to an individual's health, treatment, or payment for treatment that is used or maintained in the same data set as PII. It becomes PHI when PII is included in the same data set, or when the information is detailed enough to enable likely unique identification of an individual.

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)

## Examples of PII

### Direct identifiers

Information that can be used to directly identify an individual:

- Name
- Social Security number (SSN) or Individual Taxpayer Identification Number (ITIN)
- Driver's license or passport number
- Personal address, phone number, and email address
- Biometric information such as fingerprints, retina scan, facial geometry, etc.
- ICN (Integration Control Number)
- EDIPI (Electronic Data Interchange Personal Identifier)
- IP address
- Any internal identifier that contains other identifiers (for example, file numbers that start with SSNs)

### Indirect identifiers

Some information can be used indirectly to identify an individual, such as by combining it with other data elements, and should also be considered protected:

- Date of birth, race, or religion
- Employment information
- Medical information such as health vitals or conditions, services or treatments received, medications, or service payment information
  - Prescribed medication name, labs and tests for specific injuries or illnesses, AVS that specifies reason for visit, message content, specific appointment types, etc.
- Education information
- Financial information

### Ambiguous vs. specific information

Ambiguous or aggregated information that pertains to many people is not PII/PHI.

<div class="do-dont">
<div class="do-dont__do">
<h4 class="do-dont__heading">Like this</h4>
<div class="do-dont__content" markdown="1">

General, non-identifying statements:
- "Blood pressure"
- "Upcoming appointment"
- "Medications"
- "Message"
- "Labs and tests"

</div>
</div>
<div class="do-dont__dont">
<h4 class="do-dont__heading">Not this</h4>
<div class="do-dont__content" markdown="1">

Specific, potentially identifying statements:
- "Blood pressure 132/78"
- "Appointment with Cardiology"
- "Amoxicillin 500mg"
- "Message from Cardiology triage group"
- "Pathology results"

</div>
</div>
</div>

## Guidance on the use of PII/PHI in UI/UX

While we may show information about a person or their health in the VA.gov experience, there are certain placements that we must avoid. These placements create risk due to being added to various logs, including analytics.

### Where PII/PHI must never appear

**Do not use direct or indirect PII/PHI in the following UI elements:**

- Session cookies
- Page URLs
- URL parameters/query strings
- Link destinations (the URL)
- Title tags
- Breadcrumb segments

For detailed guidance on specific elements, refer to:
- [Title tags]({{ site.baseurl }}/content-style-guide/title-tags#privacy-guidance)
- [Page titles and section titles]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#privacy-guidance)
- [Breadcrumbs]({{ site.baseurl }}/components/breadcrumbs#privacy-guidance)
- [URL standards]({{ site.baseurl }}/ia/url-standards#url-parameters-and-defined-defined-query-strings)

### Where PII/PHI may appear with caution

If PII/PHI information is used in other UI elements, such as the examples below, it **cannot be tracked in analytics or other logs**:

- **Link or button labels.** For example, a dynamically generated link label that is personalized to include the user's name.
- **Form field selection values.** For example, a drop list, radio button set, or checklist that contains options that include PII/PHI such as addresses.
- **Open text fields.** Regardless of what the open text field requests, users can easily enter personal information.

{% include _site-in-this-section.html section="note" title="Extreme caution with open text fields" %} Extreme caution should be used anytime an open text field is offered to a site visitor. Open text fields are often a place where site visitors will enter PII/PHI. For more information, see [Search input privacy guidance]({{ site.baseurl }}/components/search-input#privacy-guidance).

## Analytics tracking and reporting guidance

When requesting tracking for data or UI elements, **do not add tracking or custom events for elements that contain direct or indirect PII/PHI.**

If search entries or other user inputs are tracked, proper procedures must be in place for stripping/redacting PII/PHI from logs.

[Learn more about masking information in the Datadog RUM dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/setup-real-user-monitoring.md#privacy)

## Related guidance

- [Alternative text for images - Privacy guidance]({{ site.baseurl }}/content-style-guide/alternative-text-for-images#privacy-guidance)
- [Title tags - Privacy guidance]({{ site.baseurl }}/content-style-guide/title-tags#privacy-guidance)
- [Page titles and section titles - Privacy guidance]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#privacy-guidance)
- [Search input - Privacy guidance]({{ site.baseurl }}/components/search-input#privacy-guidance)
- [Breadcrumbs - Privacy guidance]({{ site.baseurl }}/components/breadcrumbs#privacy-guidance)
- [URL standards]({{ site.baseurl }}/ia/url-standards)
