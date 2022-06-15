### Do not disable buttons

Normally, with regular form controls, it is best to fully remove anything the user can't interact with or which serves no purpose. However, disabling a "button" to act as a guide to the level of form completion (i.e. you are not able to proceed to the next step until the form contains enough data) is a common anti-pattern.

#### Lack of focus prevents understanding

While a disabled state can indicate to the user that they have not entered all the required data, it isn't recommended to allow visibly disabled elements to gain focus - focus implies the possibility of interaction. By implying interaction your users are likely to think that the button it faulty rather than disabled.

When buttons are inactive, some users-- particularly those with cognitive disabilities- may not know how to activate them. Disabled buttons don’t explain what’s wrong. They communicate that something is off, but very often that is not enough information. As a result, users are left wondering what’s actually missing, and consequently are locked out entirely. For example, if someone were to type in a short acronym like "VA" to search and the button doesn't become accessible, they may think the search field is broken.

In addition, disabled buttons can be unintentionally read out and accessed by mobile screen readers using touch controls.

#### What to do instead

While it is technically possible, we strong discourage disabling buttons. Here are recommendations on how to handle specific interactions:

* **Lack of required fields.** When a user attempts to submit a form without entering all required form fields: 
  * Announce the error and shift focus to the first unfilled required form field. 
  * Properly indicate required form elements (the right thing will happen for you when you use the required property on form fields in the Design System).
* **No longer valid options.** If certain options in a form are no longer valid then there are two valid options:
  1. Replace the form elements that can no longer be changed with text representing the current value instead of the current value within a disabled input.
  2. Hide the form elements that are no longer valid.
   
#### Is it ever valid to disable a button?

Post-form submission or post-action it can be appropriate to disable the submit or action button as the system is in-between states and loading or taking action. This behavior is often seen on buttons that make a purchase or reservation to prevent the user from accidentally triggering the action multiple times.