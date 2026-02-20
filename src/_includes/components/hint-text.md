When a detailed form input label is not enough to convey the meaning or purpose of the input, we have three options for including additional context:

1. [Beneath the label (default)](#default-hint-text)
2. [Inline within the label](#inline-within-the-label)
3. [Details component](#with-details)

### Default hint text

{% include storybook-preview.html story="uswds-va-text-input--with-hint-text" link_text="Label with hint text" %}

This should be used in the case where the needed clarification is a little longer, but less than two sentences. These should ideally not wrap more than twice for a total of three lines.

### Inline within the label

{% include storybook-preview.html story="uswds-va-text-input--with-inline-hint-text" link_text="Label with inline hint text" %}

This should be used in the case where the needed clarification is very short.

### With Details

{% include storybook-preview.html story="uswds-va-text-input--with-details" link_text="Label with Details hint text" %}

Using the [Details]({{ site.baseurl }}/components/details) component should be limited to brief, optional contextual help that some users may not need — for example, up to a short paragraph or a small list.

We want to avoid this variation when possible. Use of this component for this purpose is a last resort when attempts at reducing the content have failed. If a field needs a lot of explanation (multiple sentences, multiple paragraphs, or special formatting like long lists), use an Accordion or move the content to a distinct page with explanation on the page itself.
