# Git Automation Tasks

This Rakefile provides automated tasks for managing pull requests and validating links in the vets-design-system-documentation repository.

## Prerequisites

- Ruby installed
- Bundler installed (`gem install bundler`)
- Dependencies installed (`bundle install`)
- Git configured and authenticated
- Repository cloned locally

## Available Tasks

### Link Checking Tasks

#### Check Internal Links (Fast)

```bash
rake check_links
# or
rake check_links:internal
```

This is the recommended task for local development. It checks for:

- Broken internal links (links to pages that don't exist)
- Missing images
- Broken anchor references (hash links that don't exist)
- Invalid script references

**Note:** You must build the site first with `bundle exec jekyll build`.

#### Check External Links (Slow)

```bash
rake check_links:external
```

This task checks that external URLs are reachable. Use sparingly as it:

- Takes several minutes to complete
- May be rate-limited by external sites
- Only checks links (not images/scripts)

#### Check All Links

```bash
rake check_links:all
```

Combines internal and external link checking. This is the most comprehensive check but also the slowest.

#### Ignored Patterns

The link checker automatically ignores:

- `localhost` and `127.0.0.1` URLs
- Anchor-only links (`#section`)
- GitHub edit/new file links (require authentication)
- Figma links (require authentication)
- Staging and dev environment URLs
- Storybook links (external to this site)
- Vendor files

### Check PR Status

```bash
rake check_pr PR_NUMBER
```

Example:

```bash
rake check_pr 4474
```

This task will:

- Fetch PR information from GitHub API
- Display PR details (title, author, state, mergeable status, etc.)
- Check if the PR is ready to merge

### Merge PR

```bash
rake merge_pr PR_NUMBER
```

Example:

```bash
rake merge_pr 4474
```

This task will:

1. Fetch PR information and validate it's open
2. Run `git pull origin main`
3. Run `git checkout main`
4. Run `git fetch origin [branch_name]`
5. Run `git merge origin/[branch_name]`
6. Run `git push -u origin main`

### Show Ready to Merge PRs

```bash
rake ready_to_merge
```

This task will:

- Find all open PRs that you have approved
- Filter out PRs with blocking reviews or merge conflicts
- Display PRs ready for merging with details and merge commands

**Setup Required:** You need to set your GitHub username first:

```bash
git config user.login YOUR_GITHUB_USERNAME
```

### Help

```bash
rake help
```

Shows all available tasks and usage examples.

## Shell Compatibility

The new syntax works seamlessly across all shells:

### Zsh (macOS default)

```bash
rake merge_pr 4474
rake check_pr 4474
```

### Bash

```bash
rake merge_pr 4474
rake check_pr 4474
```

## Safety Features

- Validates PR exists and is open before merging
- Shows detailed PR information
- Provides clear error messages
- Exits gracefully on failures

## Error Handling

The tasks will exit with helpful error messages if:
- PR number is not provided
- PR doesn't exist
- PR is not open
- Git commands fail
- Network issues occur

## Example Workflow

```bash
# Set up your GitHub username (one-time setup)
git config user.login YOUR_GITHUB_USERNAME

# Check what PRs you've approved that are ready to merge
rake ready_to_merge

# Check a specific PR status
rake check_pr 4474

# If everything looks good, merge it
rake merge_pr 4474
```

## Link Checking Workflow

```bash
# Build the site first
bundle exec jekyll build

# Quick internal link check (recommended before each PR)
rake check_links

# Full check including external links (run periodically)
rake check_links:all
```
