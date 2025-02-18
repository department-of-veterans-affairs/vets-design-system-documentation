# Vets Design System Documentation

This repo is for VA Design System documentation, aka [design.va.gov](https://design.va.gov). If you are looking for the repo that contains the design system components, see the [component-library](https://github.com/department-of-veterans-affairs/component-library). For sitewide VA.gov base styles and utility classes see the [css-library](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/css-library) package within component-library.

Min specs:

- [Jekyll](http://jekyllrb.com)

## To run locally

Tested using `node` v18.19.0 and `yarn` v1.22.19.

1. **Clone this repo**

   ```
   $ git clone https://github.com/department-of-veterans-affairs/vets-design-system-documentation.git
   ```

2. **Install dependencies**

   ```
   $ yarn install
   ```

3. **[Install Jekyll](https://jekyllrb.com/docs/installation/)**

   **NOTE:** This repo works with Ruby version 3.0.2.

4. **Install Ruby gems**

   ```
   $ bundle install
   ```

5. **Build and start the Jekyll server**

   ```
   $ yarn start
   ```

6. **Verify in browser: [localhost:4000](http://localhost:4000/)**

7. **Start the Storybook server for component previews**

In a new terminal window, navigate to your `component-library/packages/storybook` directory and run:

   ```
   $ yarn static-storybook-server
   ```

8. **Verify Storybook is running: [localhost:8080](http://localhost:8080/)**

## Adding content to the documentation site

To add content, you will need to look into `/src` directory. This will be the source from which [Jekyll](http://jekyllrb.com) builds the site.

- [About pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_about)
- [Components pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_components)
- [Content style guide pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_content-style-guide)
- [Design pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_design)
- [Experimental design pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_experimental-design)
- [Layout pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_layout)
- [Patterns pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_patterns)
- [Utilities pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_utilities)

### How to add new pages, improve presentation, etc.

[Read the wiki](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/wiki) to learn how to add new pages to design.va.gov, improve local search, add images, etc.

## Testing updates to the CSS Library codebase on this site

See the Component Library [readme](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#local-testing-in-vets-website-with-verdaccio) instructions on how to use verdaccio to test changes to CSS Library

## Deployments

Merges into `main` will automatically deploy to production `design.va.gov` after CI checks have completed. 

### Previewing Pull Requests

When a PR is created, a preview of those changes will be available after the [Preview workflow](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/.github/workflows/preview.yml) has completed. There will be a "View deployment" button visible that will launch the preview environment when clicked:

![The "view deployment" button on a pull request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/images/readme/pr-view-deployment-button.png?raw=true)

The preview link can also be accessed directly using this pattern: `https://dev-design.va.gov/PR_NUMBER`. For example, `https://dev-design.va.gov/3435` where `3435` is the unique PR number visible in the PR title.

### Preview Troubleshooting

#### Check the branch name

A preview environment will generate only when the PR has been created from a direct branch from the main repository. It does not work if the PR was created from a fork.

You can confirm if your PR was created from a fork by looking at the branch name at the top of the PR. If you see your Github username in front of your branch name, this means the PR was created from a fork and the preview will not generate.

![The top of a PR showing the branch to be merged into main. There is a Github username at the front of a branch name which means the branch is from a fork](https://raw.githubusercontent.com/department-of-veterans-affairs/vets-design-system-documentation/refs/heads/main/src/images/readme/pr-branch-from-fork.png)

If this was done because you don't have write access to this repository, you can request that access by submitting a support request in the #vfs-platform-support Slack channel.

#### Re-running the preview workflow

If the preview has stopped working (for example if you're only seeing a 403 Forbidden error or similar), re-run the preview workflow by clicking "Details" next to the Preview check:

![A list of PR checks with an arrow pointing to the details link for the Preview workflow](https://raw.githubusercontent.com/department-of-veterans-affairs/vets-design-system-documentation/refs/heads/main/src/images/readme/pr-checks-preview-details.png)

Then click the "Re-run all jobs" button at the top of the page:

![The "Re-run all jobs" button for running a Github workflow again](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/images/readme/re-run-workflow-button.png?raw=true)

## Additional Testing

This project is tested with BrowserStack.
