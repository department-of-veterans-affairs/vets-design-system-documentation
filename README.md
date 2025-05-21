# Veteran Affairs Design System
The Veteran Affairs Design System (VADS) exists to provide design guidelines and code, enabling teams to rapidly create trustworthy, accessible, and consistent digital services on the VA.gov platform. 

There are currently over 200 active products on VA.gov built by more than 30 product teams. The VADS empowers these teams to move quickly while maintaining predictable and familiar brand identity as they deliver meaningful value to veterans. 

## Table of Contents
- [OKR alignment](#aligned-to-2025-okrs)
- [List of Products](#list-of-products)
- [Our work](#our-work-at-a-glance)
- [Contact us](#dsva-slack-channel)
- [Running this repo locally](#to-run-locally)
- [Adding content](#adding-content-to-the-documentation-site)

## Aligned to 2025 OKRs
The VADS actively contributes toward the following 2025 OCTO OKRs:
- **Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits.**
	- OKR 1.1: Improve the satisfaction with our web and mobile products by 5 points.
  - OKR 1.2: We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
- **Objective 2: OCTO's platforms are the fastest, most efficient, and most secure way to deliver products at VA.**
	- OKR 2.4: Each of our platforms and tools increase the number of non-OCTO built capabilities or non-OCTO users by 50%.
- **Objective 3: OCTO teammates are empowered with the knowledge and resources they need to make sustained impact.**
	- OKR 3.3: 75% or more team members are confident they have the knowledge needed to make effective decisions.
- **Objective 4: OCTO positively influences VA's ability to deliver software products and services faster, safer, and with higher quality.**
	- 4.1: OCTO has delivered at least 10 impactful artifacts or learning activities (e.g., trainings, guides, COP meetings) focused on improving delivery practices that achieve an NPS score of 30 or higher from the target OIT delivery staff.

## List of Products
Our team actively maintains the following products:
- [design.va.gov](design.va.gov) | **OKRs 3.3, 4.1**: design.va.gov is the flagship site for all information surrounding the VADS. From there, developers, designers, content writers, and anyone else interested in learning more about, or using, the design system will find thorough documentation and guidance. 
- [Web-Components](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components) | **OKRs 1.1, 1.2, 2.4**: The VADS actively maintains a library of web components that application teams can use to build veteran facing products. Web components provide a familiar and intuitive way to rapidly create UIs that maintain consistency and adhere to VADS standards across products. By abstracting away the need for developers and designers to spend time recreating similar patterns over and over again, we increase the ability for teams to provide value to veterans in a shorter span of time. 
- [CSS-Library](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/css-library) | **OKRs 1.1, 2.4**: The VADS actively maintains a library of CSS that bootstraps the global UI of VA.gov and removes the need for individual application teams to invest time in maintaining their own stylesheets, thereby reducing technical debt and enabling them to iterate on valuable features at a faster pace. 
- [Forms-Library](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system) | **OKRs 1.1, 1.2, 2.4:** The forms library allows teams to rapidly build applications that digitize the multitude of Veteran Affairs paper forms. The use of this library leads to an increase in submissions for benefits and provides veterans with a unified and coherent experience across different products available on VA.gov. Additionally, the ability of the forms library to prefill existing veteran information leads to a direct reduction in respondent burden.
- [Figma Libraries](https://design.va.gov/about/designers/design-libraries) | **OKRs 3.3**: The Figma Libraries for components, pattern, and templates allow designers to quickly create high fidelity mock-ups of an application. This allows teams to rapidly articulate what their application will do and how it will behave.


## Our work at a Glance
- [Web-Components and CSS-Library release notes](https://github.com/department-of-veterans-affairs/component-library/releases) 
- [Design System Guidance Changelog](https://design.va.gov/about/whats-new)
- [Roadmap](https://github.com/orgs/department-of-veterans-affairs/projects/768/views/20)
- [Prioritized experimental requests](https://github.com/orgs/department-of-veterans-affairs/projects/946/views/5)
- [Sprint planning board](https://github.com/orgs/department-of-veterans-affairs/projects/768/views/31)

## DSVA Slack Channel
Please reach out to us at our DSVA Slack Channel: #platform-design-system 

## Key Stakeholders
- Matthew Dingee, VA Product Owner, VA, matthew.dingee@va.gov
- Carol Wong, Product Manager, Oddball, carol.wong@oddball.io
- Micah Chiang, Tech Lead, Ad Hoc, micah@adhocteam.us

## Veteran Affairs Design System Documentation

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
   $ yarn start:storybook-static
   ```

or, if not using step 7 below:

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


## Updating the What's New Page with Changelogs

Within this project is the ability to automate the display of the latest releases from the VADS component library and design system documentation repositories, along with recent changes from the component library's Figma file. This ensures the "What's New" page in the documentation site is always up-to-date.

### Features

* **Automated Release Fetching:** Retrieves and displays the latest releases from:
    * [VADS Component Library repository](https://github.com/department-of-veterans-affairs/component-library)
    * [design.va.gov repository](https://github.com/department-of-veterans-affairs/vets-design-system-documentation)
* **Embedded Figma Changelog:** Integrates the changelog frame from the Component Library Figma file.
* **Dynamic "What's New" Updates:** Automatically updates the "What's New" page with the latest release notes.

### File Structure

* `json_data_cache/` - Stores fetched release data in JSON format, enabling Jekyll to access it during site builds.
* `src/`
    * `_about/`
        * `whats-new.md` - The page that displays the latest updates.
    * `_includes/`
        * `_github_markdown_parser.html` - Parses each release from the `data` object into a `va-card` and performs text manipulation for a more user-friendly display.
    * `_plugins/`
        * `jekyll_get_json.rb` - A Jekyll plugin that fetches and stores JSON data from GitHub, making it available to Jekyll's `data` object.
        * `vads.rb` - Provides a custom Jekyll/Liquid filter for applying regular expression-based string transformations to release notes, enhancing readability.
* `_config.yml` - Configuration file for Jekyll, defining repository URLs and Figma file details.
* `package.json` - Contains the `yarn run update-releases` script, a shortcut for updating release data.

### How to Create a New Release for design.va.gov

1. Go to [vets-design-system-documentation releases](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/releases)
2. Note the latest release tag. At the time of this writing, it matches this format: `v0.0.###`.
3. Click the **Draft a new release** button to start a new release
4. Click the **Choose a tag** button to display the dropdown of already created tags
5. In the **Find or create a new tag** text input, enter an incremented version number from last release. 
As you start typing the format `v0.0...`, the dropdown will show you the latest tags matching that format. Increment the last number by one. For example, if the latest release (noted from Step #2) is `v0.0.436`, enter `v0.0.437` as the tag name.
6. Once the new label is entered, the dropdown will state:
    > Create new tag: v0.0.### on publish

    Click on this to field to apply the new tag when this release is published.
7. Enter the same new tag value in the **Release title** field
8. To populate the **Describe this release** textarea with a changelog, click the `Generate release notes` button above. This will populate the changelog with the titles of all the merged PRs since last release.
9. Be sure that the **Set as the latest release** checkbox is checked.
10. Click the **Publish release** button.

### How Jekyll Displays the Latest Releases

> [!NOTE]
> These scripts rely on releases to be created in the [component-library repo](https://github.com/department-of-veterans-affairs/component-library) and [design.va.gov repo](https://github.com/department-of-veterans-affairs/vets-design-system-documentation). Before running the scripts, be sure that a release is made and tagged appropriately. See instructions for [releasing component-library](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#releasing) or **How to Create a New Release for design.va.gov** above.   

1.  **JSON Data Retrieval:**
    * When Jekyll builds the site, it checks for JSON files (defined in `_config.yml`) in the `json_data_cache/` folder.
    * If the files do exist, the cached files are used preventing repeated requests to Github.
    * If the files do not exist, it fetches the latest release notes from GitHub and stores it as JSON in the `json_data_cache/` folder.
2.  **Data Loading:**
    * The JSON data is loaded into Jekyll's `data` object upon building the site.
3.  **"What's New" Page Generation:**
    * The `whats-new.md` page uses the `_github_markdown_parser.html` include to process the release data from the `data` object and passes that into `json`.
    * The `num_recent_releases` parameter controls how many of the most recent releases are shown.
    * Example:
         ```
         {% include _github_markdown_parser.html json=site.data.site_releases num_recent_releases=3 %}
         ```
4.  **String Manipulation:**
    * The `vads.rb` custom filter applies regular expression transformations to the release notes (`json`), improving readability.
5.  **Figma Data:**
    * The Figma changelog frame is simply embedded into the page with an iframe direct from the Figma Component Library. Updates are in real time. 

### How to Update the [What's New](https://design.va.gov/about/whats-new) Page

> [!NOTE]
> Be sure your local environment is not running before getting the latest updates.

1. Run `yarn run update-releases`. This script deletes the `json_data_cache/` folder and then fetches the latest release data from GitHub, ensuring you have the most current information. It will then continue to build the site normally.
2. If release data is fetched, you should see this captured in the logs as the site builds: 
   ```
   ...
   Generating... 
   * Caching https://api.github.com/repos/department-of-veterans-affairs/vets-design-system-documentation/releases in json_data_cache/site_releases.json
   * Caching https://api.github.com/repos/department-of-veterans-affairs/component-library/releases in json_data_cache/component_library_releases.json
      Jekyll Feed: Generating feed for posts
   ...
   ```
3. Once Jekyll completes building, navigate to the What's new page in a browser to confirm the latest releases are visible.
4. Submit a PR with the updated JSON files.

## Release Cadence
* The component library is released following the conclusion of a sprint, which typically occurs every two weeks (as of this writing).
* The guidance site, design.va.gov, will align its releases with the component library releases.
* Currently, the Figma component library does not have scheduled releases. However, a Changelog page within the Figma file is maintained by the Design System designers to reflect updates. Since the guidance site embeds a live view of the changelog page on the "What's New" page, it displays updates in "real time".


## Additional Testing

This project is tested with BrowserStack.