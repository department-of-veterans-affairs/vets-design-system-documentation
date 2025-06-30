---
layout: documentation
title: Contributing a template or pattern
draft: false
permalink: /about/designers/contributing-a-template-or-pattern
has-parent: /about/designers/
intro-text: Guidance for contributing a template or pattern to the VA.gov Design System. This page explains the process, requirements, and best practices for adding new templates or patterns.
anchors:
  - anchor: Overview
  - anchor: What is a template or pattern?
  - anchor: How to contribute
  - anchor: Requirements
  - anchor: Figma and documentation
  - anchor: Review and approval
---

## Overview

This page provides guidance for contributing a new **template** or **pattern** to the VA.gov Design System (VADS). Contributing a template or pattern is similar to contributing a component, but with some key differences in requirements and process.

## What is a template or pattern?

- **Templates** (page layouts) compose components within a single page. They define the structure and arrangement of content and components for a specific page type or use case.
- **Patterns** incorporate one or more templates and components to solve a common user problem or interaction. Patterns may span multiple pages or channels and often include guidance on content, accessibility, and user flows.

See [Components, Templates, and Patterns]({{ site.baseurl }}/about/components-patterns-templates) for more details.

## How to contribute

1. **Check for existing solutions:** Before proposing a new template or pattern, review the [Templates]({{ site.baseurl }}/templates) and [Patterns]({{ site.baseurl }}/patterns) sections to ensure your idea does not already exist.
2. **Submit a request:** If your idea is new, follow the [experimental design process]({{ site.baseurl }}/about/contributing-to-the-design-system/) to propose your template or pattern. This includes submitting an issue, conducting research, and presenting to the Design System Council.
3. **Create documentation:** Use the [patterns template](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/_patterns/template.md) or [templates template](ttps://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/_templates/template.md) as a starting point. Fill out all sections as best you can. If you are unsure about any section, leave a "TODO:" note for the Design System Team.
4. **Add Figma artifacts:** Provide Figma files or links that illustrate the template or pattern. Use the [VADS Figma libraries]({{ site.figma_templates_library }}) and follow naming conventions.
5. **Submit a pull request:** Add your documentation and assets to the appropriate folder (`src/_patterns/` or `src/_templates/`) and open a pull request for review.

## Requirements

- **Research:** All new templates and patterns must be validated with user research. Include links to research findings in your documentation.
- **Documentation:** Follow the template provided. Include:
  - Purpose and definition
  - Examples (in production, at other agencies, etc.)
  - Usage guidance (when to use, when not to use, cautions)
  - Design and build details (anatomy, layout, components used)
  - Content and accessibility considerations
  - Figma links and artifacts
- **Assets:** Upload images, diagrams, or prototypes to the `/images/` or `/images/experimental-design/` folder as needed. Reference them in your markdown using the appropriate include.

## Figma and documentation

- Use the [VADS Figma Templates Library]({{ site.figma_templates_library }}) to create or duplicate your design assets.
- Follow [naming conventions]({{ site.baseurl }}/about/designers/design-libraries#naming-conventions-in-project-files) for Figma files and frames.
- Include links to your Figma files in the documentation front matter.
- If you need to annotate your design, use the [Web Annotation Kit]({{ site.figma_annotations_library }}).

## Review and approval

- The Design System Team will review your submission for completeness, clarity, and alignment with VADS standards.
- You may be asked to provide additional information or make revisions.
- Once approved, your template or pattern will be published and made available to all teams.

For more information, see the [experimental design process]({{ site.baseurl }}/about/contributing-to-the-design-system/) and [creating components guidance]({{ site.baseurl }}/about/designers/creating-components).
