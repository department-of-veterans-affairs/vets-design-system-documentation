---
name: "DST - Component Figma"
about: INTERNAL DST USE ONLY
title: "[component name] - Design"
labels: platform-design-system-team
assignees: babsdenney, danbrady, lwwright7

---

> [!TIP]
>
> Configuring this issue
>
> - [ ] Add issue to appropriate epic
> - [ ] Add Design System component label (such as `va-alert`)
> - [ ] Add `component-new` or `component-update` label, if applicable
> - [ ] Complete sections below
> - [ ] Delete this section once complete

## Description

Create [component name] and/or update in Figma.

## Details

Confluence page with instructions: https://vfs.atlassian.net/l/cp/JR0BtAa1

## Tasks

- [ ] Create designs for component in Figma
- [ ] Review designs with PO and/or other DST designers
- [ ] Review designs with developers and accessibility specialist
- [ ] Review designs with DST members
- [ ] Address any comments from reviews, if necessary
- [ ] Comment on this ticket with any accessibility considerations engineers may need to know
- [ ] Comment on this ticket with content specifications (e.g. labels and error messages)
- [ ] Comment on this ticket with a link to the designs and post in DST Slack channel

## Acceptance Criteria

### Styles & Variables/Token

- [ ] All components should be connected to VADS Component Library styles & Variables
- [ ] All components should be connected to the proper style or variable/token
  - [ ] Colors: connected to the correct color token (not primitive!) - can be found in local variables library
  - [ ] Typography: connected to the correct text style - under local styles
  - [ ] Spacing: connected to the correct spacing token or primitive
  - [ ] Icons: connected to correct icon - can be found on foundation page

### Auto layout

- [ ] Components should be as reactive as possible. Most, if not all, components should be able to be resize for either mobile, tablet, or desktop sizes
- [ ] The correct spacing should be applied to auto layout

### Properties

> [!NOTE]
>
> Not all components need every property. It will differ component to component

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
