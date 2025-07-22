# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the VA Design System Documentation site (design.va.gov) built with Jekyll. This repo contains **documentation only** - the actual components and base styles live in the [component-library](https://github.com/department-of-veterans-affairs/component-library) repo.

## Development Commands

```bash
# Setup
yarn install                    # Install Node dependencies
bundle install                  # Install Ruby gems (requires Ruby 3.3.8)

# Development
yarn start                      # Build and serve at localhost:4000
yarn watch                      # Build with incremental updates
yarn build                      # Run Gulp build pipeline only
```

## Architecture

### Build Pipeline
1. **Gulp** processes assets first (`gulp build`)
2. **Jekyll** generates static site from `/src` to `/_site`

### Key Directories
- `/src/` - Jekyll source files
- `/src/_components/` - Component documentation pages
- `/src/_patterns/` - Design pattern documentation  
- `/src/_data/` - Design tokens and component specs
- `/config/gulp/` - Gulp task configurations
- `/jekyll-configs/` - Environment-specific Jekyll configs

### Data Sources
- `/_data/tokens/` - Design tokens (CSV/JSON)
- `/_data/component-docs.json` - Auto-generated component specs from Stencil
- External packages: `@department-of-veterans-affairs/component-library` (components and base styles)

## Content Structure

Documentation is organized in Jekyll collections:
- `_components` - Individual component docs with examples
- `_patterns` - UX patterns and workflows
- `_content-style-guide` - Writing guidelines
- `_foundation` - Design tokens, colors, typography

## Deployment

- **Dev**: `dev-design.va.gov` (auto-deploy on main branch)
- **Production**: `design.va.gov` (scheduled weekday deploys at 2pm)
- Deployed to AWS S3 in US Gov Cloud

## Testing Component Library Changes

To test local component library changes:
1. Clone `component-library` repo alongside this one
2. Update `package.json` to use local component library: `"file:../component-library"`
3. Run build commands in component library repo after changes
4. Run `yarn build` in this repo to rebuild

## Important Notes

- No local test suite - testing happens in component library repo
- Component development happens in separate repos
- This site consumes and documents components, doesn't implement them
- Uses Storybook integration for live component examples

## Additional Resources

- `commands/issues.md` - Complete guide for managing GitHub issues and using issue templates