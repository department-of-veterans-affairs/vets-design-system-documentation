---
layout: default
title: Contributing experimental design code
order: 2
draft: true
---
# Contributing experimental design code
At the heart of the experimental design process is the shared code. This document explains the process for contributing code for experimental designs and the reasoning behind that process.

If you haven't read it already, refer to the [experimental design page](/experimental-design) for more information about the full process.

## Writing experimental design code
Each experimental design should:
- Be absent of business logic and domain knowledge
- Not import application code
- Not introduce breaking changes

Developing the experiment as if it were a standalone library will make the code more reusable and graduating the component or pattern into the official design system smoother.

Each experimental design should [include a README](#readme) and be [owned by a team](#codeowners).

### Code location
Each experimental design is located in its own directory in [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website/) at `src/experimental/` unless otherwise noted in its documentation on this site.

**Example:**  
If your team needs an experimental button that's larger than the standard button, you would create `src/experimental/large-button/index.jsx` as the entry file for your "library."

### README
Each experimental design should have a README that contains the following information:
- Development status: `stable`, `unstable`, or `deprecated`
     - The `unstable` status means the code is under active development and the public API may change without notice
     - The `stable` status means the public API is finalized, but the code may still receive backward-compatible updates such as accessibility improvements and bug fixes
     - The `deprecated` status means the code should no longer be used in applications
          - This may be because of a breaking change (see [Breaking changes](#breaking-changes) below), official adoption into the design system, or research which indicates the experiment was unsuccessful
          - When the status is `deprecated`, add a `Reason:` to indicate why (so engineers know where to look for the new version or not to use it at all) and make an announcement to alert other teams that may be using the experiment
- API documentation (optional but encouraged)

### Breaking changes
"Breaking changes" is defined here In `semver` terms as a backwards incompatible change to the public API of your component or pattern. (See the [Semantic Versioning Specification](https://semver.org/#spec-item-8) for more details.)

Once the code for an experimental design is stable, **breaking changes should not be introduced.** Other applications may depend on this code, but are unable to pin the version because it's not a "proper" library.

If you need to introduce breaking changes, **do not modify the existing code.** Instead, copy the contents of the directory to a sibling directory post-fixed with a version number.

**Example:**
The `LargeButton` you created accepted `children`, but because of reasons, you need to limit the content of the button to only text. You've decided to remove the `children` prop and add a `label` prop instead which accepts only strings. To introduce this change, you would:
1. Copy the contents of `src/experimental/large-button/` to `src/experimental/large-button-2`
2. Update the status in `src/experimental/large-button/README` to `deprecated` and indicate why (because there's a new version)
3. Make the breaking changes to `src/experimental/large-button-2`
4. Change the import statements `'experimental/large-button-2'` in your application
5. Update the [CODEOWNERS file](#codeowners) to add the new directory
6. Make an announcement for anybody who may be using the deprecated code

### CODEOWNERS
Add your team's GitHub team name to the [CODEOWNERS file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.github/CODEOWNERS) to take ownership of the experiment's code. This will mean your team will be required reviewers on all changes to this code.

### Test coverage
As with all code, test coverage is critical. This is especially true with shared code. Aim for at least 90% unit test coverage before declaring an experiment to be `stable`.

## Using experimental designs
 The babel module resolver plugin has the `root` set to `"./src"`, so you can import your experimental design with the following:
 
 ```js
import LargeButton from 'experimental/large-button';
```
