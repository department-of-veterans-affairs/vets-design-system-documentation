---
layout: documentation
title: Contributing to VADS Documentation
permalink: /about/designers/contributing-to-docs
has-parent: /about/designers/
intro-text: How to contribute documentation to the VA Design System site, including templates, drafts, and content guidelines.
anchors:
  - anchor: Writing new pages
  - anchor: Creating and managing drafts
  - anchor: Useful markdown and HTML snippets
  - anchor: Additional info doc template
  - anchor: Deprecation of the wiki
---

This page provides guidance for contributing documentation to the VA Design System (VADS) site. It consolidates and replaces the previous GitHub wiki content. For code and component contributions, see the [main contributing guide](/about/developers/contributing).

## Writing new pages

The VADS documentation site uses Markdown. If you are new to Markdown, see the [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

If you need help, you can open a new [issue](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new/choose) and the team will assist you.

To write a page in any section:

- Go to the appropriate section in GitHub and create a new file.
- Choose a file name carefully, as it will appear in the page URL (except for overview pages, which use `index.md`).
- The file extension must be `.md`.

### Use the provided templates

For new component or pattern documentation, start with one of these templates:

- [Components template](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/_components/template.md)
- [Patterns template](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/_patterns/template.md)
- [Templates template](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/_templates/template.md)
- [Contributing a template or pattern guidance](/about/designers/contributing-a-template-or-pattern) — step-by-step instructions for contributing templates and patterns to the Design System

These templates include required front matter and example usage of includes for Storybook examples, images, and code props. See the next section for details on these includes.

### Submitting your new page

Submit your new page as a pull request. The team will review and respond as soon as possible.

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
5. Add your content and any anchors or search tags as needed.

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

First, upload your image to the [images folder](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/images). The file name must not contain spaces. Put your image into the appropriate sub-directory in images (components, patterns, templates, etc.)

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