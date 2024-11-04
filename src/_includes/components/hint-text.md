When a detailed form input label is not enough to convey the meaning or purpose of the input, we have three options for including additional context:

1. [Beneath the label (default)](#default-hint-text)
2. [Inline within the label](#inline-within-the-label)
3. [Additional info](#additional-info)

### Default hint text

{% include storybook-preview.html story="uswds-va-text-input--with-hint-text" link_text="Label with hint text" %}

This should be used in the case where the needed clarification is a little longer, but less than two sentences. These should ideally not wrap more than twice for a total of three lines.

### Inline within the label

{% include storybook-preview.html story="uswds-va-text-input--with-inline-hint-text" link_text="Label with inline hint text" %}

This should be used in the case where the needed clarification is very short.

### With Additional info

{% include storybook-preview.html story="uswds-va-text-input--with-additional-info" link_text="Label with additional info hint text" %}

Using the [additional info]({{ site.baseurl }}/components/additional-info) component should only be done in cases where the needed clarification is long, complex, requiring more than two sentences or multiple paragraphs, or special formatting (bullet points, links, etc.).

We want to avoid this variation when possible. Use of this component for this purpose is a last resort when attempts at reducing the content have failed. If a field needs a lot of explanation, it should ideally be moved to a distinct page with explanation on the page itself.