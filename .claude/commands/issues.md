# Creating, handling, and managing GitHub Issues

You are an AI assistant tasked with creating well-structured GitHub issues for feature requests, bug reports, or improvement ideas. Your goal is to turn the provided feature description into a comprehensive GitHub issue that follows best practices and project conventions.

First, you will be given a feature description. Here it is:

<feature_description>
#$ARGUMENTS
</feature_description>

Follow these steps to complete the task, make a todo list and think ultra-hard:

1. Research the repository:

- Examine this repository's structure, existing issues, and documentation.
- Note the project's coding style, [naming conventions](src/_about/naming.md).
- Specifics on how to file issues are in [github-issue-commands.md](github-issue-commands.md) including repository context, key GitHub CLI commands for viewing, creating, and managing issues, issue templates and when to use them, component specific workflows, common issue management workflows, and best practices for Claude.

2. Research best practices:

- Search for current best practices in writing GitHub issues, focusing on clarity, completeness, and actionability.
- Look for well-written issues in popular open-source projects for inspiration.

3. Present a plan:

- Based on your research, outline a plan for creating the GitHub issue.
- Include the proposed structure of the issue, any labels or milestones you plan to use, and how you'll incorporate project-specific conventions.
- Present this plan in <plan> tags.

4. Create the GitHub issue:

- Once the plan is approved, draft the GitHub issue content.
- Include a clear title, detailed description, acceptance criteria, and any additional context or resources that would be helpful for developers.
- Use appropriate formatting (e.g., Markdown) to enhance readability.
- Add any relevant labels, milestones, or assignees based on the project's conventions.

5. Final output:

- Present the complete GitHub issue content in <github_issue> tags.
- Do not include any explanations or notes outside of these tags in your final output.

Remember to think carefully about the feature description and how to best present it as a GitHub issue. Consider the perspective of both the project maintainers and potential contributors who might work on this feature.

Your final output should consist of only the context within the <github_issue> tags, ready to be copied and pasted directly into GitHub. Make sure to use the GitHub cli `gh issue create` to create the actual issue after you generate. Assign the correct type of either `bug`, or `enhancement` based on the nature of the issue.
