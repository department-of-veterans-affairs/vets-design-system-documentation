---
name: DST - Component development
about: INTERNAL DST USE ONLY
title: "Step 4: [component name] - Development"
labels: platform-design-system-team
assignees: ''

---

## Configuring this issue
- [ ] Add issue to appropriate epic
- [ ] Add Design System component label (such as `va-alert`)
- [ ] Add `component-new` or `component-update` label, if applicable
- [ ] Complete sections below
- [ ] Delete this section once complete


## Description
[Provide a brief description of the component, its purpose, and its use cases.]

Build a web component of [component name]. Be sure to add analytics if necessary, see [guidance](https://vfs.atlassian.net/wiki/spaces/DST/pages/2079817745/Component+development+process#Analytics%5BinlineExtension%5D).


## Details
- [Design files (Figma)](link-to-design-files)
- [Properties / architecture document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/templates/properties-architecture.md) 
- [Any related references or documentation](link-to-resources)
- Review [Design System Engineering Best Practices document](https://vfs.atlassian.net/wiki/spaces/DST/pages/2176516116/Design+System+Engineering+Best+Practices)

## Tasks
### Planning & Design
- [ ] Review component requirements and confirm details with the design team
- [ ] Ensure Figma designs are complete and accessible (attach links)
- [ ] Identify dependencies and technical constraints

### Development
- [ ] Set up the component's folder structure and boilerplate code follow [Creating a new component documentation](https://design.va.gov/about/developers/contributing#creating-a-new-component) 
- [ ] Implement the component's core functionality
- [ ] Add styles (CSS/SCSS) to match the design system standards and import USWDS styles where possible
- [ ] Add accessibility features (ARIA roles, keyboard navigation, etc.)
- [ ] Write unit tests for core functionality
- [ ] Write integration tests for broader compatibility
- [ ] Add the component to the design system library (e.g., Storybook)


### Review & Testing
- [ ] Conduct a code review with peers
- [ ] Conduct a design review with the design team
- [ ] Perform cross-browser and cross-device testing
- [ ] Perform accessibility testing (using tools like Axe, NVDA, or VoiceOver)

