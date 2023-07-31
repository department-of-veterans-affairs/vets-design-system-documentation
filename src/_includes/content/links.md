Links should tell people what action to take, where to go next, or what information to expect when they select the link.

- Use natural and descriptive language.
- Hyperlink the most relevant word or phrase that describes the purpose and target (destination) of the link.
- Don’t make the link so long that the relevant words get lost.
- Avoid "Click here" as the CTA text.
- Avoid generic CTA links like "Learn more," "See more," and "Read more" by themselves.
- Don't punctuate standalone CTA links. Exception: When the link text is a question.
- If the embedded link text comes at the end of a sentence, don't hyperlink the ending punctuation.
- When a link opens a PDF, YouTube video, XLS or other file format, [use the appropriate link variation]({{ site.baseurl }}/components/link/#variations). 

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
  
__Use natural language, and link relevant words__
  
If your disability gets worse, [file for a VA disability compensation increase](https://va.gov/disability/how-to-file-claim/).
  
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

### Embedded text links vs. CTA links

__Use embedded text links to cross-link related, helpful information__

Embedded text links are hyperlinks that are part of running text in body copy. We use them to link people to related, but not essential, information. 
- Because too many embedded links can be distracting or overwhelming to readers with traumatic brain injuries or other cognitive impairments, we try to not overuse them. 
- Link information when it will be helpful to the Veteran, and it's related to the subject being discussed, not just for the sake of linking. 

__Use CTA links to call out actions__

CTA links are standalone hyperlinks that are calls to an action, but that don't warrant a [primary button CTA]({{ site.baseurl }}/content-style-guide/button-labels). 

We generally reserve button CTAs to launch an application, to sign in, or other primary, essential action on a page. But there are other kinds of actions that may call for a CTA as a text link, like downloading a form, learning about important information (like eligibility or copay rates, etc.). 



<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
  
__In this example, the link is an action related to the topic, but it isn't the primary CTA, which is to use the online application.__

You can apply online or mail your Application for Burial Benefits (VA Form 21P-530).

<a 
  href="#VBA-21P-530-ARE.pdf"
  download="VBA-21P-530-ARE.pdf" 
  type="application/pdf">
    <i aria-hidden="true" class="fas fa-download vads-u-padding-right--1" role="img"></i>
      Download VA Form 21P-530 <dfn>(<abbr title="Portable Document Format">PDF</abbr>, 5 pages)</dfn>
</a>
  
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Not this</h3>
<div class="do-dont__content" markdown="1">
  
__In this example, the action gets lost as an embedded text link.__
  
You can apply online or mail your [Application for Burial Benefits (VA Form 21P-530)](https://www.vba.va.gov/pubs/forms/VBA-21P-530-ARE.pdf).

</div>
</div>
</div>

### Linking to external sites

To start, [follow the U.S. Web Design System (USWDS) guidance on links](https://designsystem.digital.gov/components/link/). 

Note: We do not use the new window icon shown in the USWDS.

<h4>Clearly identify external links</h4>

The USWDS guidance requires that the VA clearly identify external links. Here are several ways we have decided to do that:

<h5>Individual links in text</h5>

* **Include text within the link that indicates where the user will go.** Useful for individual links rather than a set of links in a list all going to the same place, this method uses text within the link to signal to the user the destination of that link. For example, "Chronic B-cell leukemia on VA's public health site".
* **Use an aria-label to create a screen reader only label.** The `aria-label` appends text that provides additional context as to the destination of the link. 

<h5>A list</h5>

* **Create one link for a list that all point to the same destination.** Instead of linking each item in a list when all items would lead to the same destination, we prefer to create one link following the list that clearly identifies the destination. For example:

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
  
__Use a link following a list that identifies the destination__
  
* Bladder cancer
* Prostate Cancer
* Respiratory Cancers

[Learn more about these cancers on the VA public health website](https://www.publichealth.va.gov/exposures/agentorange/conditions/).

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Not this</h3>
<div class="do-dont__content" markdown="1">
  
__Avoid linking each item in a list to the same destination__

* [Bladder cancer](https://www.publichealth.va.gov/exposures/agentorange/conditions/)
* [Prostate Cancer](https://www.publichealth.va.gov/exposures/agentorange/conditions/)
* [Respiratory Cancers](https://www.publichealth.va.gov/exposures/agentorange/conditions/)
</div>
</div>
</div>


<h4>Open external links in the same tab and window</h4>

* **External links should open in the same tab and window.** Thus they should not have `target="_blank"`. However, per USWDS guidance, external links should have `rel="noreferrer"` added as an attribute. 
* **VA sub-domain exceptions that open in a new tab or window.** Some VA sub-domains provide a distinct experience from VA.gov and thus open in a new tab. This list is periodically re-evaluated and updated. The following sub-domains currently open in a new tab:
  * myhealth.va.gov
  * ebenefits.va.gov
  * www.accesstocare.va.gov
  * www.gibill.va.gov/wave
  * www.blogs.va.gov
  * www.data.va.gov
  * mobile.va.gov
  * www.accesstocare.va.gov
  * www.oit.va.gov