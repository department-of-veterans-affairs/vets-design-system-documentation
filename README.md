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
2. Click the **Draft a new release** button to start a new release
3. Click the **Choose a tag** button to display the dropdown of already created tags
4. In the **Find or create a new tag** text input, enter an incremented version number from last release. 
As you start typing the format `v0.0...`, the dropdown will show you the latest tags matching that format. Increment the last number by one. For example, if the latest release (noted from Step #2) is `v0.0.436`, enter `v0.0.437` as the tag name.
5. Once the new label is entered, the dropdown will state:
    > Create new tag: v0.0.### on publish

    Click on this to field to apply the new tag when this release is published.
6. Enter the same new tag value in the **Release title** field
7. To populate the **Describe this release** textarea with a changelog, click the `Generate release notes` button above. This will populate the changelog with the titles of all the merged PRs since last release.
8. Be sure that the **Set as the latest release** checkbox is checked.
9. Click the **Publish release** button.

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

## Additional Testing

This project is tested with BrowserStack.
