---
layout: content-style-guide
title: Links
intro-text: Links should tell our audience what action to take, where to go next, or what information to expect when they select the link.
anchors:
  - anchor: Considerations
  - anchor: Link text
  - anchor: Formatting
  - anchor: Linking to the main VA website
  - anchor: Linking to documents and other file sources
  - anchor: Linking to external sites
  - anchor: Privacy guidance
---

## Considerations

* We use links to connect Veterans with related information that may be helpful. 
* We also use links to help us centralize information, rather than repeating content in multiple places. This helps us update content more efficiently and keep content accurate.
* Too many embedded links can be distracting or overwhelming to people with traumatic brain injuries or other cognitive impairments. We put links on their own line to help make the page easier to scan and the intention of the link as clear as possible.
* External links can be disorienting for all people, but especially people who use screen readers. We want to be clear about where links are taking people.
* For issues not covered in this style guide, refer to the U.S. Web Design System (USWDS) on links.<br>
[Review link guidance on the USWDS website](https://designsystem.digital.gov//components/link/)

## Link text

* Use natural and descriptive language.
* Describe the purpose of the link and the destination if it’s taking the reader outside of VA.gov.
* Don’t make the link so long that the relevant words get lost.
* Avoid "Click here," since not all people are physically clicking links. 
* Avoid generic link text like "Learn more" and "Read more" by themselves.
* Avoid using words that assume certain abilities, like "See," "Hear," and "Watch."

**Note:** If a link needs to open in a new tab, add “(opens in a new tab)” to notify users. Don’t use the new window icon unless there are space constraints.

[Review guidance on when to open links in a new tab in the Components section](https://design.va.gov/components/link/)

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
  
__Use natural language, and link relevant words__
  
If your disability gets worse, you can file for an increase in compensation.  
[File for a VA disability compensation increase](https://va.gov/disability/how-to-file-claim/)
  
Apply for a United States burial flag to place over a casket or coffin, or place with an urn.  
[Learn more about burial flags](https://www.va.gov/burials-memorials/memorial-items/burial-flags/)

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Not this</h3>
<div class="do-dont__content" markdown="1">
  
__Avoid "click here" and generic CTA text__

[Click here](https://va.gov/disability/how-to-file-claim/) to file for a VA disability compensation increase if your disability gets worse.

Apply for a United States burial flag to place over a casket or coffin, or place with an urn. 
[Learn more](https://www.va.gov/burials-memorials/memorial-items/burial-flags/)
  
</div>
</div>
</div>

## Formatting

* Don't punctuate link text. Exception: Question marks and colons are OK if they're part of the link copy.
* Create space between different links. Clustering links together can make it hard for users to select the intended link, especially on a touch screen device, like a smartphone.
* In general, put a link on a separate line to help it stand out. Have a case where you think an inline link might be necessary due to space limitations? Contact the centralized content team for help with your content.

{% capture example_like_this_1 %}
Put links on their own line
<ul>
  <li>Trouble breathing</li>
  <li>Persistent (continuing) pain or pressure in the chest</li>
  <li>Bluish lips or face</li>
</ul>
<a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Check COVID-19 symptoms on the CDC website</a>
{% endcapture %}

{% capture example_not_this_1 %}
Avoid linking each item in a list to the same destination
<ul>
  <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Trouble breathing</a></li>
  <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Persistent (continuing) pain or pressure in the chest</a></li>
  <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Bluish lips or face</a></li>
</ul>
{% endcapture %}
{% include _like-this-not-this.html like_this=example_like_this_1 not_this=example_not_this_1 %}

## Linking to the main VA website

When linking to a page, tool, or online form on VA.gov, always link to the canonical URL of the page. The canonical URL—which can be suggested and influenced by us, but is ultimately determined by search engines—is what appears in search results. 

For form flows, the canonical URL excludes the reference to a specific page in the flow or initial page displayed in the flow.  

Example:
- Don’t use a URL to a specific page: va.gov/health-care/apply-form-1010ez/introduction
- Do use the canonical URL: va.gov/health-care/apply-form-1010ez/

In addition, on modernized VA.gov, many pages—particularly static unauthenticated pages—often end in a trailing slash. To find out if you should use a trailing slash, check the live URL that is displayed for the page after you open it in a browser. 

Example:
- Don’t use the URL without the trailing slash: va.gov/health-care 
- Do use the URL with a trailing slash: va.gov/health-care/

When we use the canonical URL in links, it reduces the risk of links breaking when sub-URLs in a form or flow change. It also helps tell search engines our preferred URL for search indexing. This can add search value to the canonical URL by eliminating the split of search value between multiple pages. 

## Linking to documents and other file sources
* Avoid linking to PDFs as much as possible. 
* If a link opens a calendar, YouTube video, XLS, or other file format, add the relevant icon from the Components section in the Design System.<br>
[Review examples of link variations in the Components section](https://designsystem.digital.gov//components/link/)

## Linking to external sites

* **Use text that tells the reader where the link takes them.** Example: [Check COVID-19 symptoms on the CDC website](https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html)
* **Consider using an aria-label to create a screen reader-only label.** Aria-labels can be helpful in specialized instances where there's a clear reason to use separate text for people who use screen readers. The aria-label may append or replace text within a link to provide context about where the link goes.

## Privacy guidance

**Link text should avoid Personally Identifiable Information (PII) or Protected Health Information (PHI) whenever possible.**

If link text must include PII/PHI, click events can’t be tracked for that link.

-	This ensures the information isn’t tracked back in analytics or other logs through the link text
-	Teams will either need to consider other approaches to link text that don’t contain PII/PHI or find ways of getting site data other than the click events on those links
	
Links can’t pass PII/PHI as any part of a parameter or destination URL. Teams will need to utilize non-PII data or generate a non-PII number to use as an identifier.

[Learn more on the URLs component page](https://design.va.gov/ia/url-standards/)

**File downloads**

- No PII/PHI can be in the names of downloaded files except for the user’s name and download date
- Include a reminder to delete files on a public computer

**Examples:**

-	A medications list page has several list items for medications prescribed over time. In this scenario, the medication name is a link they can select and is considered PHI. The click events for those links can’t be tracked in analytics.
-	A list page with several lines and each item is a link they can select. The links for those list items pass a number as a parameter to display the corresponding detail page. The number passed is partly made up of the user’s Social Security number plus additional digits. The Social Security number is considered PII even though it’s combined with other information and not labeled as a Social Security number. In this case, generate a generic ID as an identifier for the detail page. The file number can be displayed on screen but can’t be passed in the URL/link destination.

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)
