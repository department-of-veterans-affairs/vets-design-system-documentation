#### Conditionally revealed fields

Conditionally revealed fields show additional form elements only when a user selects a specific option. They help reduce visual complexity by showing follow-up questions only when they're relevant.

When using conditionally revealed fields:

1. **Limit to one reveal per page.** Avoid confusing the user with multiple expanding sections.
2. **Ensure keyboard accessibility.** When a user selects the trigger option, they should be able to tab directly into the newly revealed field (which is why the trigger option is placed last).
3. **Make the revealed question self-explanatory.** Avoid vague labels like "Other" for text fields. Instead, use clear, specific labels that work independently:

> Since your relationship with the veteran was not listed, please describe it here

{% include component-example.html alt="An example of a conditionally revealed field" file="/images/patterns/ask-users-for/relationship/relationship-to-veteran-other.png" caption="Example of asking the relationship to the Veteran with radio buttons and a conditionally revealed field." width="50%" %}
