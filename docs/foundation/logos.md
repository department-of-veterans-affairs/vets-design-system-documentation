---
title: Logos
description: VA logo usage guidelines and restrictions
sidebar_position: 7
---

# Logos

The VA.gov Design System follows strict guidelines for logo usage to maintain a consistent, unified brand experience for Veterans.

## Key Principle: "Branded House" Approach

VA has adopted a unified visual strategy rather than multiple sub-brands. This approach recognizes that:

- Veterans think of VA as a single entity
- Multiple brands are confusing and complicated
- A consolidated brand supports better navigation and trust

## Logo Restrictions

**Custom logos for VA departments, offices, teams, programs, or initiatives are not supported on VA.gov.**

This policy aligns with:
- VA Graphic Standards
- Web Governance requirements
- Digital Modernization initiative

## Unsupported Use Cases

Logos cannot be used for:

- Program or benefits listing pages
- Benefit detail pages
- Software applications (forms, tools)
- Search result listings for VA departments or offices
- Team or initiative branding
- Event branding on VA.gov

## Recommended Alternative

Instead of graphical logos, **use the name of the department, office, team, program, initiative, or event** in text form.

### Example

```html
<!-- Don't: Custom program logo -->
<img src="program-logo.png" alt="My VA Program">

<!-- Do: Text name with standard styling -->
<h1>My VA Program</h1>
```

## Official VA Logo

The official VA logo is available for specific, approved uses:

- VA.gov header
- Official communications
- Approved print materials

### Logo Resources

- **VA Graphic Standards** (pages 9, 46-49) specify proper logo execution
- Official logos are available in the VADS Component Library for designers
- Contact the VA Design System team for logo access and approval

## Why This Matters

This policy supports VA's Digital Modernization initiative by:

1. **Reducing confusion** - Veterans don't need to learn multiple brand identities
2. **Building trust** - Consistent branding reinforces that all services come from VA
3. **Simplifying navigation** - Fewer visual elements means clearer wayfinding
4. **Ensuring accessibility** - Text is more accessible than images

## Exceptions

If you believe your use case requires a logo exception:

1. Review the VA Graphic Standards
2. Consult with the VA Design System Council
3. Document the business justification
4. Obtain written approval before implementation

Most exceptions are not granted. The default should always be text-based identification.

## Related Resources

- [VA Graphic Standards](https://www.va.gov/OPIA/Publications/Graphic_Standards/index.asp)
- [Header Component](../components/header/)
- [Footer Component](../components/footer/)
