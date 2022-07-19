---
name: "_DST - Component development"
about: INTERNAL DST USE ONLY
title: "[component name] - Development"
labels: vsp-design-system-team
assignees: caw310, k80bowman

---

## Configuring this issue
- [ ] Add issue to appropriate epic
- [ ] Add Design System component label (such as `va-alert`)
- [ ] Add `component-new` or `component-update` label, if applicable
- [ ] Complete sections below
- [ ] Delete this section once complete

## Description
Build a web component of [component name]. Be sure to add analytics if necessary, see [guidance](https://vfs.atlassian.net/wiki/spaces/DST/pages/2079817745/Component+development+process#Analytics%5BinlineExtension%5D).

If this is a pattern or component that is already in existence, check the Design System Team backlog for outstanding issues. If you find any, link to them in a comment on this ticket. If possible, address any outstanding issues with this new version and link to this issue from the original issue. If not, indicate that in the original issue.

## Details
- Design documents: [add links to any design documents]
- Review accessibility considerations added to component design ticket (if any)
- Review [Design System Engineering Best Practices document](https://vfs.atlassian.net/wiki/spaces/DST/pages/2176516116/Design+System+Engineering+Best+Practices)

## Tasks
- [ ] Review DST backlog for outstanding issues with this component, if necessary
- [ ] Create web component and add to Storyboook
- [ ] Write any necessary tests
- [ ] Add Chromatic link to #[add accessibility ticket number] and request review from an accessibility specialist
- [ ] Ping designer for design review
- [ ] Display the appropriate [maturity scale](https://design.va.gov/about/maturity-scale) option in Storybook (once this feature is available)
    - If this is a new component that has not gone through Staging Review, it should be labeled "Use with Caution: Candidate"
- [ ] Merge component
- [ ] Create a new release of component-library
- [ ] Update component-library dependency in vets-design-system-documentation to have the updated component-docs.json

## Acceptance Criteria
- [ ] Component is written and added to Storybook
- [ ] Component has had accessibility and design reviews
- [ ] Design.va.gov has the latest version of component-library