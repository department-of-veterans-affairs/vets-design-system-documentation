### Avoid turning headers into links in most contexts

#### Why avoid headers as links?

* **Cognitive load and user expectations.** Headings serve as structural elements that help users with assistive technologies understand page organization. When a heading is also a link, it creates dual functionality that can confuse users. Screen reader users may not expect headings to be actionable.
* **Challenging keyboard navigation.** Keyboard users tab through links as a primary navigation method. Headers that are links can be accidentally activated during normal page exploration.
* **Confusing screen reader announcements.** Screen readers announce headings and links differently. Combining them results in unclear announcements like "Heading level 2, link, Text," making it harder to understand the element's purpose.
* **Unnecessary redundancy.** The linked text in a heading is often repeated elsewhere on the page, creating distracting duplication.

#### When it's appropriate to use links in headers

An exception can be made in the [Card]({{ site.baseurl }}/components/card) component, where:

* Space is limited, and combining the heading and link reduces visual clutter
* The card functions as a single actionable unit (such as linking to a detail page)
* The design makes the linked heading the primary call-to-action in the card, minimizing confusion

#### When it's not appropriate

* In normal page content where headings primarily serve as organizational aids
* When multiple links are associated with the heading, making the primary action unclear
* When the link in the heading duplicates another visible link that immediately follows it