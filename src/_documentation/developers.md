---
layout: default
sub_section: developers
title: For developers
anchors:
  - anchor: Installation
---

# Documentation for developers

<div class="va-introtext">
How to install Formation and use with your project.
</div>

## Installation

**If you are working in the vets-website repository**, you can skip straight to the [developer documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/). Otherwise, proceed below.

<div class="vads-u-background-color--gold vads-u-padding--2 vads-u-display--inline-block vads-u-width--auto">
  <p class="vads-u-margin--0  vads-u-measure--5"><strong>We are still improving how you can install Formation into your project. In the meantime, these instructions should get you to get started with what is currently available.</strong></p>
</div>



How you implement Formation into your project depends on how your project is structured and your preferences. The easiest way to get started is by using `npm`. We will have a direct download available in the future.


### Install Formation into your project

We recommend using `npm` to install the formation package into your project.

```bash
$ npm install --save @department-of-veterans-affairs/formation
```

The Formation module is now installed as a dependency. You can use the compiled files found in the `node_modules/@department-of-veterans-affairs/formation/dist` directory.

If you would like to use the un-compiled Sass files, you can find those in the `node_modules/@department-of-veterans-affairs/formation/sass` directory.

**Note:** We do not recommend editing files in the `node_modules` directory because once the packages are updated, your edits will be lost. We recommend using [gulp](https://gulpjs.com/) to move files from your `node_modules` directory into your project folders. To see how this documentation site is moving files, look at the [gulp build script](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/config/gulp/build.js).

#### Images in Formation

**Important:** Images linked in Formation’s CSS file use absolute paths, so there are two options for getting images to appear in your project.

1) Place the contents of the `dist` folder in your project root.
```
project-root
├── fonts/
├── img/
├── formation.js
├── formation.min-css
```

2) Place the contents of the `dist` folder where you like and use `gulp-string-replace` to change the paths. This documentation site is doing exactly that. Take a look at the [script]
(https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/config/gulp/paths.js) in use.

### Sass functions and variables

If you would like to use the Sass functions, such as for [spacing](../design/spacing-units.html#using-the-spacing-tokens), and variables in your project, you can either move the necessary files with gulp, or import the files from your project scss. This depends greatly only your project structure. This documentation site imports Formation’s Sass files in its [application.scss](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/src/assets/stylesheets/application.scss#L13).

Because Formation still uses some variables from the U.S. Web Design System, you will need to add USWDS 1.4.2 as a dependency and important some files into your scss.

```bash
$ npm install usds@1.4.2
```

Again, here is how this documentation site is importing the U.S. Web Design System Sass files into its [application.scss](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/src/assets/stylesheets/application.scss#L5).