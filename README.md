# Vets Design System Documentation

This is repo for the design system documentation, aka [design.va.gov](https://design.va.gov). If you are looking for the repo that contains the CSS and Javascript for the components, see the [formation package](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation) inside the [veteran-facing-services-tools repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools).

Min specs:
- Jekyll
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

To add content, you will need to look into `/src` directory. This will be the source from which [Jekyll](http://jekyllrb.com) builds the site

**Want add more to your content presentation?**
Use these [html snippets](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/wiki/Writing-snippets) in your markdown.

The design system can be found
* `/src/_design-system/`

The content style guide can be found
* `/src/_content-style-guide/`

## Testing new utilities

Get formation. Change package.json `"@department-of-veterans-affairs/formation": "file:../veteran-facing-services-tools/packages/formation"`
