---
name: "DST - Component Figma"
about: INTERNAL DST USE ONLY
title: "[component name] - Design"
labels: platform-design-system-team
assignees: babsdenney, danbrady

---

## Configuring this issue
- [ ] Add issue to appropriate epic
- [ ] Add Design System component label (such as `va-alert`)
- [ ] Add `component-new` or `component-update` label, if applicable
- [ ] Complete sections below
- [ ] Delete this section once complete

## Description
Create [component name] and/or update in Figma. 


## Details
Confluence page with instructions: https://vfs.atlassian.net/l/cp/JR0BtAa1


## Tasks
Component configuration
- [ ] All components should have “simplify all instances” checked.    
- [ ] Documentation: Add a short description of how the component should be used or add a link to documentation 
- [ ] Naming: Make sure the name matches what we have displayed in storybook 
Colors:
- [ ] All colors should be pulled from the variables in the Design System Figma file 
- [ ] Use variable tokens (NOT primitive) for colors: It is listed under libraries when you select the color menu. Scroll past primitives collection to find tokens.  
Typography:
- [ ] All text styles should be pulled from the Design System Figma file. Note: Variables are not available for text so use the local styles
- [ ] Make sure your text uses the correct resizing
    - [ ] Auto width - component will expand to the right when changing text 
    - [ ]  Auto height - component will expand downward when changing text 
    - [ ]  Fixed size- component will stay the same size regardless of the text changing  
Spacing 
- [ ]  Apply spacing variables when possible 
    - [ ] Look for icon to find spacing variables: It can be found with auto layout, radius, and width and height  
Autolayout
- [ ] Using auto layout
- [ ] Explore auto layout properties
- [ ]   Components must be set up to automatically vertically resize as text changes.
    - [ ] Typically, a component’s height will need to be set to “hug” to accomplish this.
- [ ] Components must be set up for responsive widths. Here are some potential ways to achieve this:
    - [ ] Variant widths may need to be set to “fill” at 1024px for desktop or 320px for mobile (Note: “fill” will only be available if this component is within a container.)
    - [ ] Constraints may need to be set to "left and right" or “scale.”
    - [ ] Autolayout properties may need to be customized depending on the component’s design.
Properties
- [ ] Explore component properties
- [ ] Properties should be listed in an order that mimics the component’s visual layout from top to bottom and left to right.
- [ ] For main components, show nested properties as appropriate.
- [ ] Properties should be named and set up consistently.
    - [ ] Mode: Always appears first. Some options include Light and Dark or languages.
    - [ ] Type: Appears below Mode. Used for things like Primary / Secondary or H1 / H2.
    - [ ] Layout: Appears below Type. Used for things like Horizontal / Vertical or varying quantities.
    - [ ] State: Appears below Layout. Used for things like Focus / Active or Open / Closed or Active / Inactive.
- [ ] Booleans should be named and set up consistently.
    - [ ] Used to show/hide icons, buttons, content, etc.
    - [ ] Always name them descriptively – i.e. icon (left) / icon (right), button (secondary), header (show/hide).
- [ ] Instance swaps should be named and set up consistently.
    - [ ] Preferred values should be set as appropriate.
    - [ ] Always name them descriptively – i.e. icon (left) / icon (right).
- [ ] Text properties should be named and set up consistently.
    - [ ] Add content fields for every editable content area.
    - [ ] Header and title fields should be named descriptively – i.e. header / title or header 1, header 2, etc.
    - [ ] Body copy fields should always be named “content”.
    - [ ] Fields such as labels, tags, and buttons should be named descriptively – i.e. button text
- [ ] Layers
    - [ ] Avoid default naming of layers (ex. “Frame 1”) and use descriptive names
    - [ ] For any components that are used to build another component that should NOT be available to a designer using the library, prefix the component with an underscore or period (i.e “_” or “.”). This will make those components “private” to the current Figma file. It will not be exposed for a designer to use on it’s own with connected to the library.


## Acceptance Criteria
Styles & Variables/Token 
- [ ] All components should be connected to VADS Component Library styles & Variables 
- [ ] All components should be connected to the proper style or variable/token 
    - [ ] Colors: connected to the correct color token (not primitive!) - can be found in local variables library 
    - [ ] Typography: connected to the correct text style - under local styles
    - [ ] Spacing: connected to the correct spacing token or primitive 
    - [ ] Icons: connected to correct icon - can be found on foundation page 
Auto layout
- [ ] Components should be as reactive as possible. Most, if not all, components should be able to be resize for either mobile, tablet, or desktop sizes 
- [ ] The correct spacing should be applied to auto layout 
Properties
Note: Not all components need every property. It will differ component to component 
- [ ] Variants: Should be used when the component has several states i.e primary, secondary, error 
- [ ] Boolean: Should be used if the component has a part that does not always need to be shown i.e icons, nested components and mobile view
- [ ] Text: Should be used when the test on a component needs to be changed. There are some exceptions to this if the component has several variants that need to have different/specific text. When you change the text on the parent component it will change all of the variants 
- [ ] Instance Swap 
    - [ ] Should be used if there is a part of the component that needs to be switched out but nothing else needs to change i.e. icons Color contrast (Pro Tip: The plugin “Contrast” can help with this.)
- [ ] Test as a DS library user 
    - [ ] Connect your Figma design file to the DS library found in the Assets panel, Team Library (open book icon)
    - [ ] After connecting to the library, use the Assets panel to view all components
    - [ ] Does the component naming make sense and follow storybook?
    - [ ] Try to break the component! Test on asset NOT parent component 
    - [ ] Expand/shrink the asset and put into containers 
    - [ ]  change body text and/or header from a sentence to paragraph
    - [ ]  make sure text wraps correctly
    - [ ] the component should expand or shrink with text 
    - [ ]  Test all combinations of properties 



