### Choosing the right component for the task
When deciding which component to use, consider the number of options available to the user. The total number of options will determine which component is right for the task:

* **2 - 5 options:** Use [Radio button]({{ site.baseurl }}/components/form/radio-button) when there are only a few options that can all be exposed at once.
* **6 - 15 options:** Use [Select]({{ site.baseurl }}/components/form/select) for a limited number of options.
* **16 - 100 options:** Use [Combo box]({{ site.baseurl }}/components/form/combo-box), which combines a select with typeahead functionality for easier selection.
* **101+ options:** Use [Search input]({{ site.baseurl }}/components/search-input) with typeahead to help users quickly find the right option from a large set.

### Exceptions to consider when choosing a component
In some cases, there are common outliers and exceptions to account for:

* **When the options are known and memorable.** Options like months, days, states, countries, and other familiar data groupings can be considered exceptions to choosing the right component. For example, the Combobox works well for Countries or States that benefit from both scrolling or typing to find the selection and the Select should be used for days of the month where the pattern is already standardized and familiar to the user.
* **When the radio button labels are long or radio tiles contain descriptive text.** Long labels within a dropdown might make it difficult to read and select an option. Radio tiles often include descriptive text that cannot be used in a dropdown. In these cases, [Radio button]({{ site.baseurl }}/components/form/radio-button) may be the better choice.
* **Binary options that need a large tap target.** When you have Yes/No questions that require a larger tap target, use buttons as radio buttons. See [Buttons as radio button]({{ site.baseurl }}/components/button/#secondary-button-as-radio-button) guidance for specifics.

Contact the Design System team via [{{ site.slack_channel_name }}]({{ site.slack_channel_link }}) for help if you have other use cases that may be considered exceptions.
