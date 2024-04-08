### Conditionally revealed fields

In the radio button and checkbox components, we offer an option to conditionally reveal fields when the user selects an answer. These fields are often used to group related questions together by revealing a single follow-up question only when they’re relevant to the user.

Conditionally revealed fields can be used if the following conditions are met:

1. There should only be one reveal on a page.
2. When the revealed trigger is selected, you must be able to tab directly into the newly revealed field (Which is why we've put the "other" question last.)
3. The newly revealed question field must be understood by itself.  For example, don't just say "Other". Instead, say:

> Since your relationship with the veteran was not listed, please describe it here

{% include component-example.html alt="An example of a conditionally revealed field" file="/images/patterns/ask-users-for/relationship/relationship-to-veteran-other.png" caption="Example of asking the relationship to the Veteran with radio buttons and a conditionally revealed field." width="50%" %}
