# Auditing components for accessibility

Follow these steps to enter data for an accessibility audit.

## Edit CSV file

- Open `a11y-audit.csv` from this folder in your editor of choice.
- Update an existing row or add a new row for the component.
- Enter the name, audit date, and status for each category. The status should start with one of the following, so the site can display the appropriate icon. Any text after that is freeform to describe the issue.
    - "Pass" - If the component passed with nothing to note.
    - "Pass with exceptions" - If the component passed, but there is a potential edge case. Add a sentence or two describing the issue. Example: "Pass with exceptions - With VoiceOver and Safari the description is not read out, this issue occurs on plain HTML, not just our component. This is likely a bug in VoiceOver.
    - "Conditional" - If we have tested our component and it passed, but there are properties that can alter this. Add a sentence or two describing the issue. Example: For readability, it depends on what is entered for a label and instructions. So it is only accessible if the team using that component enters a meaningful label and clear instructions. This status will automatically append "**This category is dependent on how you use this component.** Test this for accessibility in your project."
    - "Fail" - The component did not pass this category. Add a sentence or two describing the issue.
    - Blank - Leave the category blank if it has not been tested. This will automatically add a line of text, "This category has not been tested."
- If you are able, run the docs site locally and test that your audit data shows appropriately under "Component Checklist" for that component.
- Open a pull request with the changes.
- Once the pull request is merged, a build of the site will run and incorporate the accessibility audit changes.

You can also edit the CSV directly from GitHub and open a pull request that way.