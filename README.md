# Vets Design System Documentation

This repo is for VA Design System documentation, aka [design.va.gov](https://design.va.gov). If you are looking for the repo that contains the design system components, see the [component-library](https://github.com/department-of-veterans-affairs/component-library). Additionally, the [Formation package](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation) inside the [veteran-facing-services-tools repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) contains sitewide VA.gov base styles and utility classes.

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

## Testing updates to the Formation codebase on this site

In order to test new updates to Formation, you will need to work in two different repositories: the repository for this site and `veteran-facing-services-tools`. For the steps below, make sure you are doing your work in a new branch for both repos.

1. Clone the [veteran-facing-services-tools repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) at the same level as the design system documentation site.

   ```
   my-projects-folder
   |   ├── vets-design-system-documentation
   |   ├── veteran-facing-services-tools
   ```

1. Follow the [setup instructions](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools#setup) to get `veteran-facing-services-tools` running.

1. Change `package.json` in `vets-design-system-documentation` to use a local version. `"@department-of-veterans-affairs/formation": "file:../veteran-facing-services-tools/packages/formation"`

1. Make your changes in `veteran-facing-services-tools` and run `$ npm run build`.

1. Now, in `vets-design-system-documentation`, run the following:

   ```
   $ yarn
   $ yarn start
   ```

While `vets-design-system-documentation` is running and make further updates to `veteran-facing-services-tools`, you will need to run `$ npm run build` in that repo, then `$ yarn build` in `vets-design-system-documentation`.

1. When you have finished your work in `veteran-facing-services-tools`, follow the [instructions](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools#publishing-module-to-npm) to submit a PR and publish to NPM.

1. Once your update has been published to NPM, update `package.json` in `vets-design-system-documentation` from the local version to the new version number.

1. Commit this along with any updates to the documentation site and submit a PR.

## Deployments

Merges into `main` will automatically deploy to production `design.va.gov` after CI checks have completed. 

### Previewing Pull Requests

When a PR is created, a preview of those changes will be available after the [Preview workflow](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/.github/workflows/preview.yml) has completed. There will be a "View deployment" button visible that will launch the preview environment when clicked.

[The "view deployment" button on a pull request](src/images/readme/pr-view-deployment-button.png)

The preview link can also be accessed directly using this pattern: `https://dev-design.va.gov/PR_NUMBER`. For example, `https://dev-design.va.gov/3435` where `3435` is the unique PR number.

If the preview has stopped working (for example if you're only seeing a 403 Forbidden error or similar), try re-running the preview workflow by clicking "Details" next to the Preview check and then click the "Re-run all jobs" button.

[A list of PR checks with an arrowing pointing to the details link for the Preview workflow](src/images/readme/pr-checks-preview-details.png)

[The Re-run all jobs button for running a Github workflow again](src/images/readme/re-run-workflow-button.png)

## Additional Testing

This project is tested with BrowserStack.
