Follow these accessibility guidelines when filtering or sorting your search results:

* **For filtering, move focus to results.** After filters are applied, move focus to the results heading or summary. This orients users and helps them find updated content quickly.
* **For sorting, maintain focus on the component.** Users may not expect implicit submission, so moving focus to heading or summary could be disorienting. 
* **Announce updates after filtering or sorting.** Use an ARIA live region to announce when results have updated, including the number of results found. This helps screen reader users know their action was successful.
* **Preserve the filtered and sorted state.** Make sure selected filters remain visible and accessible after results update, so users always know which filters and sort order are active.
* **Announce loading states.** If results take time to update, use an ARIA live region to let users know results are loading.
* **Provide clear error messages.** If there’s an error applying filters or sorting, show a clear message and announce it for screen reader users. Use simple, direct language.
