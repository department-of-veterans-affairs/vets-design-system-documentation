### Do not disable buttons

Normally, with regular form controls, it is best to fully remove anything the the user can't interact with or which serves no purpose. However, disabling a "button" to act as a guide to the level of form completion (i.e. you are not able to proceed to the next step until the form contains enough data) is a common anti-pattern.

#### Lack of focus prevents understanding

While a disabled state can indicate to the user that they have not entered all the required data, it isn't recommended to allow visibly disabled elements to gain focus - focus implies the possibility of interaction. By implying interaction your users are likely to think that the button it faulty rather than disabled. The only situation where you might want to add focus is if the button contained a message stating why it was disabled.

When buttons are inactive, some users-- particularly those with cognitive disabilities- may not know how to activate them. Disabled buttons don’t explain what’s wrong. They communicate that something is off, but very often that is not enough information. As a result, users are left wondering what’s actually missing, and consequently are locked out entirely. For example, if someone were to type in a short acronym like "VA" to search and the button doesn't become accessible, they may think the search field is broken.

#### What to do instead

While it is technically possible, we strong discourage disabling buttons. The preferred handling is when a user clicks a button without entering all required form fields, simply announce the error and shift focus to the first unfilled required form field. Thus it is also necessary to properly indicate required form elements (the right thing will happen for you when you use the required property on form fields in the Design System).