---
layout: content-style-guide
permalink: /content-style-guide/plain-language/use-pronouns
has-parent: /content-style-guide/plain-language/
title: Use pronouns
intro-text: "Use pronouns to speak to our audience in a personable and conversational voice."  
---

- Address the Veteran as an individual with second person singular: “you” and “your” 
- Represent VA with a single voice with first person plural: “we” and “our”  
- For Q&As, the Veteran asks the question (use “I”) and VA answers (use “we” and “you”)

{% capture example_like_this_1 %}
<span class="do-dont__diff">We</span> base your monthly rate on the 2 factors listed here.
{% endcapture %}
{% capture example_not_this_1 %}
<span class="do-dont__diff">VA</span> bases the monthly rate for Veterans on the 2 factors listed here.
{% endcapture %}
{% include _like-this-not-this.html like_this=example_like_this_1 not_this=example_not_this_1 %}

{% capture example_like_this_2 %}
This will help <span class="do-dont__diff">us</span> process your claim quickly.
{% endcapture %}
{% capture example_not_this_2 %}
This will help <span class="do-dont__diff">VA</span> process your claim quickly.
{% endcapture %}
{% include _like-this-not-this.html like_this=example_like_this_2 not_this=example_not_this_2 %}

{% capture example_like_this_3 %}
**<span class="do-dont__diff">Am I</span> eligible for Veterans Pension benefits?**
<span class="do-dont__diff">You</span> may be eligible if you meet these requirements.
{% endcapture %}
{% capture example_not_this_3 %}
**<span class="do-dont__diff">Are Veterans</span> eligible for pension benefits?**
<span class="do-dont__diff">Veterans</span> who meet these requirements may be eligible. 
{% endcapture %}
{% include _like-this-not-this.html like_this=example_like_this_3 not_this=example_not_this_3 %}
