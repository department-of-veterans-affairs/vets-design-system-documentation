---
applyTo: "src/_components/**"
---

# Component documentation structure standards

Verify component documentation follows the required structure. **Never suggest changes to YAML front matter**, except to flag fields accidentally removed or corrupted.

## Required sections (in order)

Every component page must contain these sections in this order:

1. **Examples** — Storybook previews for each variation; separate `### Web` and `### Mobile app` subsections when both apply
2. **Usage** — Must include all three subsections:
   - `### When to use [Component name]`
   - `### When to consider something else`
   - `### How this component works`
3. **Content considerations** — Bulleted guidance for content authors
4. **Accessibility considerations** — Bulleted guidance for designers and developers
5. **Related** — Links to related components, patterns, or templates
6. **Component checklist** — Always the last element; rendered via include (see below)

Flag PRs that remove required sections or reorder them significantly. The **Code usage** section (rendered via include) typically appears after Usage.

## Jekyll includes

Use these includes — never raw HTML or plain markdown images.

### Storybook previews

```liquid
{% include storybook-preview.html story="uswds-va-component-name--default" link_text=page.web-component %}
```

- Use `uswds-` prefix for USWDS-based components, `components-` for others — check Storybook to confirm
- Add `height="Npx"` when the default iframe clips the component
- Mobile app stories use `is_mobile=true` and `auto_resize=false`

### Images

```liquid
{% include component-example.html alt="Description of image." file="/images/components/component-name/filename.png" caption="What this example depicts." %}
```

Never use raw `![alt](path)` markdown for component images.

### Code usage (web component props table)

```liquid
{% include component-docs.html component_name=page.web-component %}
```

The section heading is rendered inside the include — don't add a separate `## Code usage` heading above it.

### Component checklist

```liquid
{% include _component-checklist.html component_name=page.web-component %}
```

Must be the last element on the page. The heading is rendered inside the include.

## Usage section formatting

Bullet items in `When to use` and `When to consider something else` must use bold lead-ins followed by a period and explanation:

```markdown
* **Bold lead-in.** Explanation of the scenario or task.
```

## Front matter rules

- **`anchors` must match headings:** Each anchor must exactly match an H2 on the page, in heading order. Flag anchors for deleted headings and missing anchors for new sections.
- **No Liquid in front matter values:** `{{ site.baseurl }}` and other Liquid expressions inside front matter strings (like `intro-text`) render literally and create broken links. Move any links into the page body.

## Disabling Liquid includes

HTML comments (`<!-- ... -->`) do **not** disable Jekyll includes — Liquid is processed before HTML. To prevent an include from rendering, use `{% comment %}`:

```liquid
{% comment %}{% include storybook-preview.html story="..." link_text="..." %}{% endcomment %}
```

## Image alt and caption consistency

`alt` and `caption` in `component-example.html` must use the same terminology. When a caption is updated (e.g., "Additional info" → "Details"), check that `alt` matches.

## Heading hierarchy

- Subsections under `### Additional guidance for VA` must use `####`, not `###`.
- For multiple variations, use `#### Variation name` under `### Web`/`### Mobile app`. Add `### Choosing between variations` in **Behavior** when the choice isn't obvious.
