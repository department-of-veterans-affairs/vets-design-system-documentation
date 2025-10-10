---
name: DS+F - Add Icon Template
about: INTERNAL DS+F USE ONLY
title: 'va-icon: Add [icon-name] icon'
labels: platform-design-system-team, va-icon
assignees: babsdenney, danbrady, jeana-adhoc

---

## What happens when you submit this request

The Design System team will:
1. **Review** your request to ensure the icon meets criteria for addition to the system
2. **Add** the approved icon to Figma, code libraries, and documentation
3. **Deploy** the icon across VA.gov applications

**Tip:** Click "Subscribe" on the right side of this issue to receive email updates on progress.

## Configuring this issue
- [ ] List all icons, links to icons in [Material Icons](https://fonts.google.com/icons), descriptions, and categories in the description section below. 
- [ ] Add any details if needed.
- [ ] Delete this section once complete.

## Description

| Icon Name/Link | Categories | Description |
|----------------|------------|-------------|
| [Icon]()       | Add category this icon would be added to. You can see current categories on the [Icon](https://design.va.gov/components/icon#preview) page. | Add a description of what this icon would be used for. |

## Details
_optional, delete section if not needed_

## DST Tasks
You will need to add the icons to the following locations. 

1. [VADS Component Library in Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=293-6211)
2. [dst-uswds-compile](https://github.com/department-of-veterans-affairs/dst-uswds-compile)
3. [component-library](https://github.com/department-of-veterans-affairs/component-library)
4. [vets-design-system-documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation)
5. [content-build](https://github.com/department-of-veterans-affairs/content-build)
6. [vets-website](https://github.com/department-of-veterans-affairs/vets-website)

### Adding the icon
#### **1. [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=293-6211)** 
- [ ] Create a branch in Figma and add the icon to the icons page in the [Component Library](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=293-6211).
#### **2. [USWDS Compiler](https://github.com/department-of-veterans-affairs/dst-uswds-compile)**
- [ ] Make sure all the repos above are added locally to your computer and in the same directory before proceeding.
- [ ] Follow the [instructions](https://github.com/department-of-veterans-affairs/dst-uswds-compile?tab=readme-ov-file#dst-uswds-compile) in the compiler to add the icon and generate the sprite. 
- [ ] Run the command in [step 3]((https://github.com/department-of-veterans-affairs/dst-uswds-compile?tab=readme-ov-file#dst-uswds-compile)) - `npm run deploy` to copy the sprite sheet to all the repos. 
- [ ] Submit a PR to the dst-uswds-compile to add the icon to the compiler.
  - Use this PR as an example - [dst-uswds-compile PR example](https://github.com/department-of-veterans-affairs/dst-uswds-compile/pull/42)
#### **3. [Component Library](https://github.com/department-of-veterans-affairs/component-library)**
- [ ] Update the [va-icon story](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/storybook/stories/va-icon-uswds.stories.tsx) with the new icon name.
- [ ] Test locally to verify the new icon has been added.
- [ ] Submit a PR with the new sprite and story. There should be 3 file changes.
 - Use this PR as an example - [component-library PR example](https://github.com/department-of-veterans-affairs/component-library/pull/1585)
#### **4. [Documentation Site](https://github.com/department-of-veterans-affairs/vets-design-system-documentation)**
- [ ] Update the[ icons.yml](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/_data/icons.yml) with the new icon ID and categories.
- [ ] Submit a PR with the new sprite and icon.yml update. There should be 2 file changes.
 - Use this PR as an example - [vets-design-system-documentation PR example](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/4059)
#### **5. [Content Build](https://github.com/department-of-veterans-affairs/content-build) and [Vets Website](https://github.com/department-of-veterans-affairs/vets-website)**
- [ ] Submit PR's with the new sprite. There will be a single file update for each PR.
 - Use these PR's as example - [content-build PR example](https://github.com/department-of-veterans-affairs/content-build/pull/2523), [vets-website PR example](https://github.com/department-of-veterans-affairs/vets-website/pull/36144)
 
## Acceptance Criteria
- [ ] All PR's have been approved
