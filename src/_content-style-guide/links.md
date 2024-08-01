---
layout: content-style-guide
title: Links
intro-text: Links should tell our audience what action to take, where to go next, or what information to expect when they select the link.
anchors:
  - anchor: Considerations
  - anchor: Link text
  - anchor: Formatting
  - anchor: Linking to documents and other file sources
  - anchor: Linking to external sites
---

## Considerations

* We use links to connect Veterans with related information that may be helpful. 
* We also use links to help us centralize information, rather than repeating content in multiple places. This helps us update content more efficiently and keep content accurate.
* Too many embedded links can be distracting or overwhelming to people with traumatic brain injuries or other cognitive impairments.
* External links can be disorienting for all people, but especially people who use screen readers. We want to be clear about where links are taking people.
* For issues not covered in this style guide, refer to the U.S. Web Design System (USWDS) on links. [Review link guidance on the USWDS website]({{ site.uswds_link }}/components/link/)

## Link text

* Use natural and descriptive language.
* Describe the purpose of the link and the destination if it’s taking the reader outside of VA.gov.
* Don’t make the link so long that the relevant words get lost.
* Avoid "Click here," since not all people are physically clicking links. 
* Avoid generic link text like "Learn more" and "Read more" by themselves.
* Avoid using words that assume certain abilities, like "See," "Hear," and "Watch."

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
* In general, put a link on a separate line to help it stand out. Exception: Putting a link at the end of a sentence is OK if space is limited, like intro copy or alerts.

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

## Linking to pages on VA.gov

When linking to a page, tool, or online form, always link to the canonical URL of the page. The canonical URL—which can be suggested and influenced by us, but is ultimately determined by search engines—is what appears in search results. 

For form flows, the canonical URL excludes the reference to a specific page in the flow or initial page displayed in the flow.  

Example:
- Don’t use a URL to a specific page: va.gov/health-care/apply-form-1010ez/introduction
- Do use the canonical URL: va.gov/health-care/apply-form-1010ez/

In addition, on modernized VA.gov, many pages—particularly static unauthenticated pages—often end in a trailing slash. To find out if you should use a trailing slash, check the live URL that is displayed for the page after you open it in a browser. 

Example:
- Don’t use the URL without the trailing slash: va.gov/health-care 
- Do use the URL with a trailing slash:  va.gov/health-care/

When we use the canonical URL in links, it reduces the risk of links breaking when sub-URLs in a form or flow change. It also helps tell search engines our preferred URL for search indexing. This can add search value to the canonical URL by eliminating the split of search value between multiple pages. 


## Linking to documents and other file sources
* Avoid linking to PDFs as much as possible. 
* If a link opens a calendar, YouTube video, XLS, or other file format, add the relevant icon from the Components section in the Design System. [Review examples of link variations in the Components section]({{ site.baseurl }}/components/link/)

## Linking to external sites

* **Use text that tells the reader where the link takes them.** Example: [Check COVID-19 symptoms on the CDC website](https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html)
* **Consider using an aria-label to create a screen reader-only label.** Aria-labels can be helpful in specialized instances where there's a clear reason to use separate text for people who use screen readers. The aria-label may append or replace text within a link to provide context about where the link goes.
* **Explain when a link is opening in a new tab with text, not an icon.** Add "(opens in new tab)" to notify users when a link is opening in a new tab. In standard link text, we avoid using the new window icon, since it can cause confusion. Within components that have space constraints, the icon is acceptable. [Review guidance in the Components section on when to open in a new tab, and when not to]({{ site.baseurl }}/components/link/#behavior)
