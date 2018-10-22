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

To add content, you will need to look into `/src` directory. This will be the source from which [Jekyll](http://jekyllrb.com) builds the site. Documentation content can be found in the following directories:

* `/src/_components`
* `/src/_layout`
* `/src/_patterns`
* `/src/utilities` (Utilities coming soon!)
