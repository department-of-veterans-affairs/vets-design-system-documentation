# CI/CD Configuration for Monorepo

## Overview

The CI/CD pipeline has been updated to build and deploy all three apps in the monorepo:

### Apps Structure
```
apps/
├── design-system/          # Main design system docs (:3000)
├── confluence-migration/   # Engineering documentation (:3001)
└── search/                 # Unified search portal (:3002)
```

### Deployment Structure
```
deploy/
├── index.html              # Design system (root)
├── confluence/             # Engineering docs
└── search/                 # Search portal
```

## Preview Deployments (PRs)

When you create a pull request, the system automatically:

1. **Builds all apps** using `pnpm build`
2. **Deploys to S3** at `dev-design.va.gov/[PR_NUMBER]/`
3. **Comments on PR** with links to all three apps:
   - Design System: `https://dev-design.va.gov/[PR_NUMBER]/`
   - Engineering Docs: `https://dev-design.va.gov/[PR_NUMBER]/confluence/`
   - Search Portal: `https://dev-design.va.gov/[PR_NUMBER]/search/`

## Production Deployments

On merge to `main`:

1. **Builds all apps** with shared components and tokens
2. **Deploys to production** at:
   - Design System: `https://design.va.gov/`
   - Engineering Docs: `https://design.va.gov/confluence/`
   - Search Portal: `https://design.va.gov/search/`

## Key Features

### ✅ **Multi-App Support**
- All three apps build and deploy together
- Shared components and tokens work across apps
- Consistent URLs and navigation

### ✅ **Preview Comments**
- Automatic PR comments with all three app links
- Local development instructions included
- Individual app development commands provided

### ✅ **Build Optimization**
- Turborepo orchestrates builds efficiently
- pnpm workspaces manage dependencies
- Parallel builds where possible

### ✅ **Deployment Structure**
- Design system serves as root site
- Engineering docs at `/confluence/` path
- Search portal at `/search/` path
- All apps accessible from any environment

## Admin/CMS Access

Each app can potentially have its own admin interface:
- Design System: `/admin/` (if CMS enabled)
- Engineering Docs: `/confluence/admin/` (if needed)
- Search Portal: `/search/admin/` (for search management)

## Testing Your Changes

### Local Development
```bash
# All apps
pnpm dev

# Individual apps
pnpm design-system:dev    # localhost:3000
pnpm confluence:dev       # localhost:3001/confluence/
pnpm search:dev          # localhost:3002/search/
```

### Preview Environment
1. Create PR
2. Wait for build (usually 3-5 minutes)
3. Check PR comment for preview links
4. Test all three apps in the preview environment

## Troubleshooting

### Build Failures
- Check that all package.json files have correct dependencies
- Verify Turbo config includes new apps
- Ensure build outputs go to correct directories

### Deployment Issues
- Verify S3 paths are correct
- Check AWS permissions for deployment
- Confirm artifact paths match build outputs

### Preview Links
- PR comments update automatically on new commits
- If links are broken, check S3 deployment logs
- Verify base URLs are configured correctly in Docusaurus

This setup ensures that anyone can see the full monorepo experience in preview environments!