# Vets Design System Documentation

Prototype for a v2 of [Formation](https://department-of-veterans-affairs.github.io/design-system).

Min specs:
- Jekyll
- react
- webpack

## Getting started

Tested using `node` v8.12.0 and `npm` v6.4.1.

1. Install dependencies
```
$ npm install
```

2. Build and start the Jekyll server
```
$ npm run start
````

3. Verify in browser: [localhost:4000](http://localhost:4000/)

## Adding content to the documentation site

To add content, you will need to look into `/src` directory. This will be the source from which [Jekyll](http://jekyllrb.com) builds the site.

The design system can be found
* `/src/_design-system/`

The content style guide can be found
* `/src/_content-style-guide/`

## Deploying the site

Since this site relies on scripts and processes that are not whitelisted in GitHub pages, we have to build the site locally in order to deploy it. The shell script will create a `gh-pages` branch in the `site` directory, initiate version control separate from the `master` branch, and push the branch to GitHub. Like most builds, the version history is not of importance.

```
$ npm install
$ npm run build
$ ./deploy_site.sh
```

## Testing new utilities

Get formation. Change package.json ``@department-of-veterans-affairs/formation": "file:../design-system/packages/formation`
