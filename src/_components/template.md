---
layout: component
title: Component name (singular)
contributors: Command separated list of contributor names with (org name) following, if applicable
draft: true
intro-text: "This text provides the overall purpose and function of the component."
github-title: va-component-name - Only use this if the component is not actually a web component and thus just needs a label that matches that format.
research-title: Use this to match the label in the research repo. Only use if web-component does not match the label.
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=0%3A1&mode=design&t=3RlM8TiFaDLH4OAE-1
status: use-with-caution-candidate
web-component: va-component-name
web: true # Set to false to hide web browser component checklist
mobile-app: true # Set to false to hide mobile app component checklist
---

<!-- Use these YAML front matter flags to control which platform checklists appear:

web: true/false
- Controls whether the "Web browsers" component checklist section appears
- Default: true (always shows if omitted)
- Set to false for mobile app-only components

mobile-app: true/false  
- Controls whether the "Mobile app" component checklist section appears
- Default: true if va-mobile-[component-name].yml file exists, false otherwise
- Set to false to hide mobile checklist even if data file exists
- Set to true to show mobile section (requires corresponding va-mobile-[component-name].yml file)

Platform Support Badges:
The web and mobile-app settings also control platform support badges that appear at the top of component pages:
- Web browsers badge: Shows when web is true (default)
- Mobile app badge: Shows when mobile-app is true

Examples:
- Both platforms: web: true, mobile-app: true
- Web only: web: true, mobile-app: false  
- Mobile only: web: false, mobile-app: true
-->

## Examples

### Web

#### Default

{% include storybook-preview.html story="components-va-component-name--default" link_text=page.web-component %}

#### Variation 1

Add Storybook examples as necessary.

#### Variation 2

Add Storybook examples as necessary.

### Mobile

#### Default

{% include storybook-preview.html height="200px" story="mobile-component-name--default" link_text="va-mobile__component-name--default" is_mobile=true %}

#### Variation 1

Add Storybook examples as necessary.

#### Variation 2

Add Storybook examples as necessary.

## Usage

### When to use Component name

* **In this context.** Explain the scenario or user context where this component is, or could be, used.
* **In this task.** Explain the user task or tasks where this component is, or could be, used.

### When to consider something else

* **Not in this context.** Explain which scenarios or user context where this component is not, or should not, be used.
* **Not for these tasks.** Explain the user tasks where this component is not, or should not, be used.
* **Use this instead.** Explain when another component should be used instead.

### How this component works

Details the design decisions inherent to the component.

### Platform considerations

#### Web implementation
* Describe web-specific implementation details, browser considerations, and responsive behavior.
* Note any web-specific constraints or advantages.
* Consider performance across desktop, tablet, and mobile browsers.

#### Mobile app implementation  
* Describe mobile app-specific implementation details using React Native.
* Note platform-specific considerations for iOS and Android native apps.
* Address touch targets, gestures, and mobile app-specific interactions.

## Behavior

### Web

Describe the key interactions for this component.

* **Trigger.** What does the user do to start the interaction with this component.
* **Rules.** What rules govern how the component behaves. How does it work?
* **Feedback.** What the user sees, hears, and feels that help them understand the rules.
* **Loops and modes.** Meta rules that govern the interaction.

#### Choosing between web variations

Help the designer and developer understand when to choose between any variations of this component.

### Mobile

Describe the key interactions for this component in the mobile app context.

* **Touch interactions.** How users interact with this component using touch gestures.
* **Accessibility gestures.** Support for accessibility gestures like VoiceOver swipe actions.
* **Platform conventions.** How the component follows iOS and Android native app design patterns.
* **Performance considerations.** Any mobile app-specific performance or memory considerations.

#### Choosing between mobile variations

Help the designer and developer understand when to choose between any mobile app variations of this component.

#### Mobile app-specific behavior

* **Touch targets.** Ensure minimum 44px touch targets for accessibility.
* **Haptic feedback.** When and how to provide haptic feedback for interactions.
* **Orientation changes.** How the component behaves during device rotation.
* **Network connectivity.** How the component handles offline or poor connectivity states.

### Placement

Where the component appears visually, and if necessary to clarify, where it may appear in the source code. Can also comment on where the component is not to be placed.

### Design principles

* List of design or UX principles that this component is an example or or adheres to.

### Instances of this component in production

Images with captions that describe different instances of this component being used in production.

<!-- include component-example.html alt="Explain what is in the image." file="/images/components/component-name/filename.png" caption="Describe what this example image is depicting." --> 

This is the Code Usage section. Note that the header is inside this include.
<!-- include component-docs.html component_name=page.web-component  -->

## Content considerations

### Web content considerations
* Content guidelines specific to web implementation.
* Character limits and responsive text considerations.

### Mobile content considerations  
* Content guidelines specific to mobile app implementation.
* Shorter content recommendations for mobile viewports.
* Considerations for voice input and dictation.
* Push notification content guidelines (if applicable).

### Cross-platform content considerations
* Shared content guidelines that apply to both web and mobile.
* Content that should remain consistent across platforms.

## Accessibility considerations

### Web accessibility
* Screen reader compatibility (JAWS, NVDA, VoiceOver on desktop; mobile screen readers in browsers).
* Keyboard navigation requirements.
* Color contrast and visual accessibility.
* Focus management and ARIA labels.

### Mobile app accessibility
* iOS VoiceOver compatibility and gestures.
* Android TalkBack compatibility and gestures.
* Touch target size requirements (minimum 44px).
* Haptic feedback for accessibility.
* Support for assistive touch and switch control.
* Dynamic type and text scaling support.

### Cross-platform accessibility
* Semantic markup that works across platforms.
* Consistent accessibility patterns.
* Alternative text and descriptions.
* Error handling and user feedback.

## Related

* Links to related components.

This is the Component checklist section. Note that the header is inside this include.
<!-- include _component-checklist.html component_name=page.web-component -->