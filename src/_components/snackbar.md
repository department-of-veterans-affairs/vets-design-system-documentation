---
layout: component
title: Snackbar
intro-text: Snackbar is a mobile component that provides feedback regarding API interactions at the bottom of the screen.
research-title: Snackbar
figma-link: https://www.figma.com/design/rdLIEaC9rVwX70QbIGkMvG/VA-Mobile---Design-Tokens-Library?m=auto&node-id=2321-2925&t=IbOdMq31rx8WXOoc-1
status: use-best-practice
web-component: va-mobile__snackbar
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Default

{% include storybook-preview.html height="100px" story="snackbar--default" link_text="va-mobile_snackbar--default" is_mobile=true auto_resize=false %}

### With action

{% include storybook-preview.html height="100px" story="snackbar--with-action" link_text="va-mobile_snackbar--with-action" is_mobile=true auto_resize=false %}

## Usage

### When to use Snackbar

* **If a user action that triggers an API call is successful or results in an error.** The snackbar may allow users to take an action on the feedback such as trying again or undoing the action.

### How this component works

* The **icon** will be relevant to the state of the snackbar (success or error).
* The **text content** is a short description of the success or error action. It is used to inform the status of an action.
* The **left action button** is optional and should only be used when there is an additional action for the user to take on the snackbar. The left action button can be an "Undo" or "Try again" button.
    * The **undo button** allows a user to reverse a successful action. When the action is successfully reversed, another snackbar will open informing the successful undo. The new snackbar will only have the dismiss button.
    * The **try again button** allows a user to initiate a failed action. This will prompt the system to redo the action and either produce a successful or unsuccessful snackbar.
* The **right action button** is a dismiss button that allows a user to manually close the snackbar.

## Behavior

* The current iteration of the snackbar will only be dismissible by the user selecting the “Dismiss” button, another snackbar opening, or the user navigating to a different screen. Additional iterations may incorporate a user-defined timebox on the snackbar.

### Placement

* The snackbar always appears at the bottom of the screen on top of the other content.

### Instances of this component in production

* Default snackbar displays in Messages when a draft is saved successfully.
* "Undo" snackbar appears in Messages when moving a message to a folder.
* "Try again" snackbar appears in Messages when a draft is not saved successfully.

## Code usage

<va-link-action href="https://design.va.gov/storybook/?path=/docs/va-mobile_snackbar--docs" text="View code usage documentation in Storybook" type="secondary"></va-link-action>


## Content considerations

* Body copy for a successful snackbar states the item and the action that was performed on the item. Examples: Draft saved, Appointment canceled
* Body copy for an unsuccessful snackbar uses the same copy as its successful version with the addition of the word not. Examples: Draft not saved, Appointment not canceled
* Use only 2-3 words for successful snackbars.
* Use only 3-4 words for unsuccessful snackbars.
* Use `Undo` or `Try again` for optional left action button. (We use `Try again` instead of `Retry` to reduce cognitive load.)
* Use `Dismiss` for right action button.
* Don't use words like `successful` or `failed`.
* Don't use any punctuation.

## Accessibility considerations

* To ensure that the snackbar and its content is accessible to all users, the snackbar should not close on its own or after a certain amount of time. The snackbar can only be closed by the user selecting the “dismiss” button, another snackbar opening, or the user navigating to a different screen.
* Screen readers should automatically announce when a snackbar opens and begin reading its content. The screen reader will announce the component as an Alert as soon as the action is completed. Each action will be announced as a button.
* If a screen has bottom navigation, the snackbar should open above the navigation.
* There should only ever be one snackbar on the screen. Opening a new snackbar will close the previous snackbar.
