* **No auto-dismissal.** Don't automatically dismiss an alert based on a timer or time limit.

### Assign an appropriate ARIA role

In some situations, an ARIA role may need to be added to the alert component for it to work best for people who use assistive technology. ARIA should be used sparingly to supplement and enhance the native features of HTML.

* **Static alert: No role.**  If the alert is a static alert that exists on the page when the page gets loaded, it likely doesn't need a role.
* **Timely information that requires action: Use `role="alert"`.** If the alert conveys timely or time-sensitive and important information that needs to be acted on before moving forward, use `role="alert"`. 
* **Interactive elements: Use `role="alertdialog"`.** If the information in the alert contains interactive elements, like links or buttons, use the `role="alertdialog"` role instead of `role="alert"`.
* **Important but not timely: Use `role="region"`.** If the information isn't timely and doesn't need to be acted on immediately, but still contains important information that represents a substantial topic on the page, role="region" may be appropriate. Some roles, like `role="region"`, help assistive technology identify the content as being grouped and separated from the rest of the page content. For example, some assistive technologies can navigate by landmark roles like `role="region"`.

More on [ARIA specific roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques).

### Alternative (alt) text for icons and images

For accessibility best practices, we differentiate between images that are decorative and images that are informative.

* **Decorative images:** Dividers or design items that do not provide additional context or content. They may exist on the page for purely aesthetic reasons. They don’t add to the information a user needs and they make little sense, or are unnecessary, when read with a screen reader. 
* **Informative images:** convey some kind of information. To determine whether an image is informative or not, try removing it from the design. If information is missing with the image removed it means that the image is informative and needs alt text.

Consider the purpose of your graphic and whether alt text will provide any information, benefit, or feeling (e.g. the icons used in this Alert component) **If the image will not provide information, benefit, or sentiment then do not provide alt text on the image.** For more information on why we must provide relevant and meaningful alt text and how to create quality alt text please refer to the content style guide on [Alternative text for images]({{ site.baseurl }}/content-style-guide/alternative-text-for-images).
