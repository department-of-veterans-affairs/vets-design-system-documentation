Text describing how many results are being shown.

* **Showing 1–10 of 999 results for "[query]".** The implementation should follow this format:

> Showing 1–10 of 999 results for "[query]"
  * When used in non-search contexts, for "[query]" can be dropped.

* **Update when filters change.** The results description must update when filters are changed so that all users can understand that the results have been updated. Implementation should follow this format:

> Showing 1–10 of 999 results for "[query]" with 5 filters applied.

* **Do not reflect changes to sort.** The Sort component itself acts as the visual indicator of the order. 
