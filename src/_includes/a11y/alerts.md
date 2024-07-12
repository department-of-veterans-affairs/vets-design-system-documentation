* **No auto-dismissal.** Don't automatically dismiss an alert based on a timer or time limit.

### Assign an appropriate ARIA role

In some situations, an ARIA role may need to be added to the alert component for it to work best for people who use assistive technology. ARIA should be used sparingly to supplement and enhance the native features of HTML.

* **Static alert: No Role.** If the alert is a static alert that exists on the page when the page gets loaded, it doesn’t need a role.
* **Important, time-sensitive information: Use role="alert".** Use this role on alert components that appear after a user interaction. Alerts are assertive live regions, so setting `role="alert"` is equivalent to setting `aria-live="assertive"` and `aria-atomic="true"`.
    ```
    <va-alert role="alert" ...>...</va-alert>
    ```
  * This is for live updates to a page that would not get noticed otherwise. Updates to a page can occur without the user refreshing the page, so these may go unnoticed when using assistive technologies. `role="alert"` ensures assistive technology announces these updates and keeps the user informed.
  * Because this can be intrusive to the user experience, this should be used sparingly for information that requires the user's immediate attention.
  * **Interactive alerts: Use role="alertdialog" instead.** For alerts that fit the criteria of `role="alert"`, but also contain content requiring user interaction, use `role="alertdialog"` instead of `role="alert"`. For example, expecting the user to acknowledge the alert by closing it before proceeding.
    ```
    <va-alert role="alertdialog" ...>...</va-alert>
    ```
* **Advisory information, not important enough to have an alert role: Use role="status".** Use this role on alert components that appear after a user interaction. This allows users with assistive tech to be notified of the change, but won't immediately interrupt them from the current task. Elements with the `role=status` have an implicit `aria-live=polite` and an implicit `aria-atomic=true`.
    ```
    <va-alert role="status" ...>...</va-alert>
    ```
* For must-read information that is present on page load, consider using a [Summary box]({{ site.baseurl }}/components/summary-box) instead of an alert.

More on [ARIA: alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role), [ARIA: status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role).

### Alternative (alt) text for icons and images

For accessibility best practices, we differentiate between images that are decorative and images that are informative.

* **Decorative images:** Dividers or design items that do not provide additional context or content. They may exist on the page for purely aesthetic reasons. They don’t add to the information a user needs and they make little sense, or are unnecessary, when read with a screen reader. 
* **Informative images:** convey some kind of information. To determine whether an image is informative or not, try removing it from the design. If information is missing with the image removed it means that the image is informative and needs alt text.

Consider the purpose of your graphic and whether alt text will provide any information, benefit, or feeling (e.g. the icons used in this Alert component) **If the image will not provide information, benefit, or sentiment then do not provide alt text on the image.** For more information on why we must provide relevant and meaningful alt text and how to create quality alt text please refer to the content style guide on [Alternative text for images]({{ site.baseurl }}/content-style-guide/alternative-text-for-images).
