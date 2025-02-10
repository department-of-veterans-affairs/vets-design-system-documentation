### Choosing the right component for the task
Consider how many options the user will have when choosing the right component. The number of options will determine what component is right for the task. 

* **2 - 5: Radio Buttons.** Use [radio buttons]({{ site.baseurl }}/components/form/radio-button) when there are only a few options that can all be exposed at once.
* **6 - 15: Select.** Use a [select]({{ site.baseurl }}/components/form/select) for a limited number of options.
* **16 - 100: Combo Box.** For over 15 items, use a [combo box]({{ site.baseurl }}/components/form/combo-box) that combines a select with typeahead.
* **101 - ∞: Search Input typeahead.** Over 100 items, use the [search input]({{ site.baseurl }}/components/search-input) component with typeahead.

### Some exceptions when choosing the right component
Some exceptions can be considered when choosing the right component. 

* **When the options are known and memorable.** Use the combo box when the user will know what to expect as options in the dropdown. Some examples of this would be a list of countries or states. See the [USWDS address pattern](https://designsystem.digital.gov/patterns/create-a-user-profile/address/#guidance-2) for an example.
* **When the radio button labels are long or radio tiles contain descriptive text.** Using long labels within a dropdown might create an issue where the information needed to make a selection is lost. There's also descriptive text added within radio tiles that can't be used in a dropdown. In those use cases a radio button might be required instead of a dropdown opton. 

These are some things to consider when choosing between different components. Contact the Design System team for help if you have other use cases that are considered exceptions.
