---
layout: documentation
title: Contributing to VADS documentation
permalink: /about/contributing-to-the-design-system/contributing-to-docs
has-parent: /about/contributing-to-the-design-system/
intro-text: How to contribute documentation to the VA Design System site, including templates, drafts, and content guidelines.
redirect_from:
  - /about/designers/contributing-to-docs
  - /about/contributing-to-the-design-system/vads-content-style-guide
---

This page provides guidance for contributing documentation to the VA Design System (VADS) site. It consolidates and replaces the previous GitHub wiki content. For code and component contributions, see the [code contributing guide]({{ site.baseurl }}/about/developers/contributing).

## Creating new pages

The VADS documentation site uses Markdown. If you are new to Markdown, see the [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

If you need help, [open a new issue]({{site.github_issues_templates}}) and the team will assist you.

To write a page in any section:

- Go to the appropriate section in GitHub (`src/_components`, `src/_patterns/` or `src/_templates/`) and create a new file.
- Choose a file name carefully, as it will appear in the page URL (except for overview pages, which use `index.md`).
- The file extension must be `.md`.

### Use the provided templates

For new component or pattern documentation, start with one of these templates:

- [Components template]({{ site.new_component_template_raw_link }})
- [Patterns template]({{ site.new_pattern_template_raw_link }})
- [Templates template]({{ site.new_template_template_raw_link }})
- [Contributing a template or pattern guidance]({{ site.baseurl }}/about/designers/contributing-a-template-or-pattern) — step-by-step instructions for contributing templates and patterns to the Design System

These templates include required front matter and example usage of includes for Storybook examples, images, and code props. See the next section for details on these includes.

### Submit your new page

Submit your new page as a pull request. The team will review and respond as soon as possible.

## Writing for VADS

When writing content specifically for the VA Design System (VADS), follow the VA.gov Content Style Guide (VA-CSG).

[View the complete VA.gov Content Style Guide]({{ site.baseurl }}/content-style-guide/)

However, there are some situations where the VA-CSG doesn’t cover VADS-specific content, or where the unique user base for VADS demands deviation from the VA-CSG. This page contains guidance for these situations.

For issues not covered in this style guide, refer to:

- [VA Content Style Guide]({{ site.baseurl }}/content-style-guide/)
- [AP Style](https://apstylebook.com/)
- [Merriam-Webster Dictionary](https://www.merriam-webster.com/)

### VADS-specific guidance

#### [Abbreviations and acronyms]({{ site.baseurl }}/content-style-guide/abbreviations-and-acronyms)

While there are abbreviations and acronyms that we use extensively in the Design System, we should be careful to define these when they’re first used on a page. This ensures that VADS pages can be used by both experienced and new Veteran-Facing Services (VFS) teams.
**Using e.g. and i.e.:** The VA.gov Content Style Guide discourages "e.g." and "i.e." in Veteran-facing content, but these abbreviations are acceptable in VADS documentation. Our audience of designers and developers is familiar with these terms, and they help keep technical guidance concise. Always include a comma after "e.g." and "i.e." (e.g., like this).

#### [Capitalization]({{ site.baseurl }}/content-style-guide/capitalization)

While the VA-CSG avoids title case altogether, title case is allowed for the naming of components, patterns, and templates in VADS. [Find more details on naming components in the “Component, pattern, and template names” section of this page.](#referencing-components-patterns-and-templates)

#### Including "AKA" sections

Often, there are several colloquial names for a component, pattern, or template. For example, users often call the [Search Input component]({{ site.baseurl }}/components/search-input) a search box, search field, or search bar. When possible, include a section in the component guidance with a list of these other names. This helps users find what they’re looking for even if they’re familiar with a term that differs from the component name.

#### [Links]({{ site.baseurl }}/content-style-guide/links)

In-line links are acceptable for linking to components, patterns, and templates in VADS. These links don't need to be on their own line.

#### [User vs. Veteran]({{ site.baseurl }}/content-style-guide/word-list#u)

In Veteran-facing content, avoid "user" or "users" and instead use "Veterans" or "people" (for a more general audience). "Users" can have a negative connotation and focuses only on how people are using our products.

**Note:** This guidance applies only to Veteran-facing applications, forms, and pages on VA.gov. On this design system documentation site, "user" is appropriate when referring to user research, user experience, user testing, and similar contexts.

#### [Plain language]({{ site.baseurl }}/content-style-guide/plain-language/)

VA.gov plain language standards still apply to VADS. However, there may be instances where communication with VA.gov product teams demands a higher level of expertise than the plain language standards account for. This is particularly likely in these areas:

- [Use short sentences]({{ site.baseurl }}/content-style-guide/plain-language/use-short-sentences)
- [Use simple words and terms]({{ site.baseurl }}/content-style-guide/plain-language/use-simple-words-and-terms)
- [Define complex terms]({{ site.baseurl }}/content-style-guide/plain-language/define-complex-terms)
- [Don’t use jargon]({{ site.baseurl }}/content-style-guide/plain-language/don-t-use-jargon)

In these instances, prioritize effective communication over the letter of the law, keeping these best practices in mind: 

- It's better to include too much information than too little 
- Guidance should be accessible to both seasoned and new VA.gov product team members
- Link to other guidance when relevant or useful

#### Referencing components, patterns, and templates

Component, pattern, and template names should be written in title case. 

When used in documentation, the component, pattern, or template name should be a hyperlink to the VADS guidance for that component, pattern, or template. 

These formatting conventions help readers to distinguish the difference between a more general tool and our specific VADS components (e.g., the difference between an accordion as a generic UI component and the VADS Accordion component). 

When referencing components, patterns, and templates with multi-step names in other documentation, use the full name. E.g., [Ask Users for A Single Response]({{ site.baseurl }}/patterns/ask-users-for/a-single-response).

[Learn more about VA design system naming conventions]({{ site.baseurl }}/about/naming-conventions)

## Documenting includes in templates

The templates above use several Jekyll includes to standardize documentation.

### Showing Storybook examples

Use the following include to embed a Storybook example:

```markdown
{% raw %}
{% include storybook-preview.html story="[components|uswds]-VA-COMPONENT-NAME--VARIATION" link_text=page.web-component %}
{% endraw %}
```

Choose components or uswds (check Storybook to see which is in use). Replace `VA-COMPONENT-NAME` with the relevant component or pattern name. Replace `VARIATION` with the relevant component variation (e.g., "default")

For mobile app components:

```markdown
{% raw %}
{% include storybook-preview.html height="100px" story="VA-COMPONENT-NAME--VARIATION" link_text="va-mobile__VA-COMPONENT-NAME--VARIATION" is_mobile=true %}
{% endraw %}
```

### Showing images

To display an image:

```markdown
{% raw %}
{% include component-example.html alt="Explain what is in the image." file="/images/components/component-name/filename.png" caption="Describe what this example image is depicting." %}
{% endraw %}
```

### Showing code props

To show a table of code props:

```markdown
{% raw %}
{% include component-docs.html component_name=page.web-component %}
{% endraw %}
```

Note that the header is included in the include file.

### Showing the component checklist

To show the component checklist at the bottom of the page:

```markdown
{% raw %}
{% include _component-checklist.html component_name=page.web-component %}
{% endraw %}
```

## Creating and managing drafts

Draft pages allow you and your team to preview documentation before it is published. Drafts are committed to the `main` branch but are not indexed by search engines and are only accessible via direct link or the [drafts index](https://dev-design.va.gov/drafts).

### Creating a draft page

1. Read the [Writing new pages](#writing-new-pages) section above.
2. Create a new page in the desired section (e.g., `/src/_patterns`).
3. Name your file (e.g., `draft-pattern.md`). The file name will be part of the page URL.
4. Add the required front matter, including `draft: true`.
5. Add your content and any anchors or search tags as needed. Follow the [Writing for VADS guidance](#writing-for-vads).

### Previewing and publishing drafts

- Draft pages are flagged as drafts and only appear in the left nav when viewing the draft page.
- To publish your draft, remove the `draft: true` line from the front matter and commit the change to `master`.
- It may take up to 10 minutes for changes to appear on dev-design.va.gov.

### Drafting content on existing pages

You cannot draft content on existing pages directly. Instead:

- Use a GitHub pull request for small changes.
- For large changes, create a new draft file (e.g., `awesome-pattern-draft.md`). When it is ready, the Design System team will overwrite the original page and delete the draft file.

### Things to keep in mind

- Content from `dev-design.va.gov` publishes daily to `design.va.gov`.
- All draft content is public, but the URL must be know to access it.

## Useful markdown and HTML snippets

Here are some helpful code snippets to improve your content presentation:

### Images

First, upload your image to the [images folder](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/images). The file name must not contain spaces. Put your image into the appropriate sub-directory in images (components, patterns, templates, etc.)

Refer to [showing images](#showing-images) for the appropriate code to use.

### Do/Don’t match-ups

```html
<div class="do-dont">
  <div class="do-dont__do">
    <h3 class="do-dont__heading">Do</h3>
    <div class="do-dont__content" markdown="1">
      WRITE YOUR MARKDOWN HERE FOR DOS
    </div>
  </div>
  <div class="do-dont__dont">
    <h3 class="do-dont__heading">Don’t</h3>
    <div class="do-dont__content" markdown="1">
      WRITE YOUR MARKDOWN HERE FOR DO-NOTS
    </div>
  </div>
</div>
```

### Code snippets

Display code inside an accordion:

```markdown
{% raw %}
{% include snippet.html content='html/MY-HTML-FILE.html' %}
{% endraw %}
```

### Responsive previews

Allow users to preview components on different devices:

```markdown
{% raw %}
%{ include iframe-preview.html src="html/flexbox-grid-responsive.html" title="Flexbox grid" height=400 %}
{% endraw %}
```

Adjust the `height` parameter as needed.
