# Vets Design System Documentation

This is repo for the design system documentation, aka [design.va.gov](https://design.va.gov). If you are looking for the repo that contains the CSS and Javascript for the components, see the [formation package](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation) inside the [veteran-facing-services-tools repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools).

Min specs:
- [Jekyll](http://jekyllrb.com)
- react
- webpack

## To run locally

Tested using `node` v8.12.0 and `npm` v6.4.1.

1. Clone this repo
```
$ git clone https://github.com/department-of-veterans-affairs/vets-design-system-documentation.git
```

2. Install dependencies
```
$ npm install
```

3. Build and start the Jekyll server
```
$ npm run start
````

4. Verify in browser: [localhost:4000](http://localhost:4000/)

## Adding content to the documentation site

To add content, you will need to look into `/src` directory. This will be the source from which [Jekyll](http://jekyllrb.com) builds the site.

- [Components pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_components)
- [Content style guide pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_content-style-guide)
- [Design pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_design)
- [Documentation pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_documentation)
- [Layout pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_layout)
- [Design patterns pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_patterns)
- [Utilities pages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_utilities)

[Read more in the wiki](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/wiki/Adding-content) about how to add new pages to the design system documentation site, how to provide additional search keywords, etc.

**Want add more to your content presentation than simple text?**
Use these [html snippets](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/wiki/Writing-snippets) in your markdown.


## Testing updates to the Formation codebase on this site

In order to test new updates to Formation, you will need to work in two different repositories: the repository for this site and `veteran-facing-services-tools`. For the steps below, make sure you are doing your work in a new branch for both repos.

1. Clone the [veteran-facing-services-tools repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) at the same level as the design system documentation site.

```
my-projects-folder
|   ├── vets-design-system-documentation
|   ├── veteran-facing-services-tools
```

2. Follow the [setup instructions](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools#setup) to get `veteran-facing-services-tools` running.

3. Change `package.json` in `vets-design-system-documentation` to use a local version. `"@department-of-veterans-affairs/formation": "file:../veteran-facing-services-tools/packages/formation"`

4. Make your changes in `veteran-facing-services-tools` and run `$ npm run build`.

5. Now, in `vets-design-system-documentation`, run the following:

  ```
  $ npm install
  $ npm run start
  ```

  While `vets-design-system-documentation` is running and make further updates to `veteran-facing-services-tools`, you will need to run `$ npm run build` in that repo, then `$ npm run build` in `vets-design-system-documentation`.

6. When you have finished your work in `veteran-facing-services-tools`, follow the [instructions](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools#publishing-module-to-npm) to submit a PR and publish to NPM.

7. Once your update has been published to NPM, update `package.json` in `vets-design-system-documentation` from the local version to the new version number.

8. Commit this along with any updates to the documentation site and submit a PR.
