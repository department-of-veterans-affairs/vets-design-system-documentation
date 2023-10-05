# Vets Design System Documentation

This repo is for VA Design System documentation, aka [design.va.gov](https://design.va.gov). If you are looking for the repo that contains the design system components, see the [component-library](https://github.com/department-of-veterans-affairs/component-library). Additionally, the [Formation package](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation) inside the [veteran-facing-services-tools repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) contains sitewide VA.gov base styles and utility classes.

Min specs:

- [Jekyll](http://jekyllrb.com)

## To run locally

Tested using `node` v18.14.0 and `npm` v6.14.8.

1. **Clone this repo**

   ```
   $ git clone https://github.com/department-of-veterans-affairs/vets-design-system-documentation.git
   ```

1. **Install NPM dependencies**

   ```
   $ npm install
   ```

1. **[Install Jekyll](https://jekyllrb.com/docs/installation/)**

   **NOTE:** This repo works with Ruby version 3.0.2.

1. **Install Ruby gems**

   ```
   $ bundle install
   ```

1. **Build and start the Jekyll server**

   ```
   $ npm run start
   ```

1. **Verify in browser: [localhost:4000](http://localhost:4000/)**

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
   $ npm install
   $ npm run start
   ```

While `vets-design-system-documentation` is running and make further updates to `veteran-facing-services-tools`, you will need to run `$ npm run build` in that repo, then `$ npm run build` in `vets-design-system-documentation`.

1. When you have finished your work in `veteran-facing-services-tools`, follow the [instructions](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools#publishing-module-to-npm) to submit a PR and publish to NPM.

1. Once your update has been published to NPM, update `package.json` in `vets-design-system-documentation` from the local version to the new version number.

1. Commit this along with any updates to the documentation site and submit a PR.

## Deploying

Merges into `main` will automatically be deployed to `dev-design.va.gov`. Production is automatically deployed every weekday at 2pm. Deploys are executed by creating a release of vets-website via Jenkins. You can track the deployment in the Slack channel, #design-system.
