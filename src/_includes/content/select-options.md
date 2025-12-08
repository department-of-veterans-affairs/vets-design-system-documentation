### Choosing the right component for the task
When deciding which component to use, consider the number of options available to the user. The total number of options will determine which component is right for the task:

* **2 - 5 options:** Use [Radio button]({{ site.baseurl }}/components/form/radio-button) when there are only a few options that can all be exposed at once.
* **6 - 15 options:** Use [Select]({{ site.baseurl }}/components/form/select) for a limited number of options.
* **16 - 100 options:** Use [Combo box]({{ site.baseurl }}/components/form/combo-box), which combines a select with typeahead functionality for easier selection.
* **101+ options:** Use [Search input]({{ site.baseurl }}/components/search-input) with typeahead to help users quickly find the right option from a large set.

### Exceptions to consider when choosing a component
In some cases, exceptions may be considered when choosing the right component:

* **When the options are known and memorable.** Use [Combo box]({{ site.baseurl }}/components/form/combo-box) if the user will know what to expect as options in the dropdown, such as a list of countries or states. See the [USWDS address pattern](https://designsystem.digital.gov/patterns/create-a-user-profile/address/#guidance-2).
* **When the radio button labels are long or radio tiles contain descriptive text.** Long labels within a dropdown might make it difficult to read and select an option. Radio tiles often include descriptive text that cannot be used in a dropdown. In these cases, [Radio button]({{ site.baseurl }}/components/form/radio-button) may be the better choice.
* **When the task is to sort a set of results.** Use the dedicated [Sort]({{  site.baseurl }}/components/sort) component, which utilizes a Select component as its foundation.

Contact the Design System team via [{{ site.slack_channel_name }}]({{ site.slack_channel_link }}) for help if you have other use cases that may be considered exceptions.
