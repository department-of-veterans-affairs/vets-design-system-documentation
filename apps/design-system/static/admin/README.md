# Decap CMS Configuration

This folder contains the configuration for Decap CMS (formerly Netlify CMS), which provides a content management interface for editing component documentation.

## Local Development

For local development, the CMS uses a local file system proxy:

```bash
# Start both Docusaurus and the CMS proxy
npm run dev:cms
```

This runs:
- Docusaurus dev server on http://localhost:3000
- Decap CMS proxy server on http://localhost:8081

Access the CMS at: http://localhost:3000/admin/

## Production Setup

For production deployment, you need to configure GitHub OAuth authentication.

### Option 1: Netlify Identity (Recommended for Netlify hosting)

1. Enable Netlify Identity in your Netlify site settings
2. Enable Git Gateway under Identity > Services
3. Update `config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main
```

### Option 2: GitHub OAuth (For non-Netlify hosting)

1. **Create a GitHub OAuth App**:
   - Go to GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Application name: `VA Design System CMS`
   - Homepage URL: `https://design.va.gov`
   - Authorization callback URL: `https://your-oauth-server.com/callback`

2. **Set up an OAuth server**:
   - Deploy [netlify-cms-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) or similar
   - Or use a serverless function

3. **Update `config.yml`**:

```yaml
backend:
  name: github
  repo: department-of-veterans-affairs/platform
  branch: main
  base_url: https://your-oauth-server.com
```

### Option 3: Cloudflare Pages with GitHub OAuth

If deploying to Cloudflare Pages, you can use their built-in GitHub OAuth:

1. Connect your GitHub repository to Cloudflare Pages
2. Add the OAuth credentials as environment variables
3. Update the backend configuration accordingly

## Editorial Workflow

The CMS is configured with `publish_mode: editorial_workflow`, which provides:

- **Draft**: Work in progress, not visible on production
- **In Review**: Ready for team review
- **Ready**: Approved and ready to publish

Note: Editorial workflow requires a backend that supports branches (GitHub, GitLab, Bitbucket). It does not work with `local_backend: true`.

## Configuration Files

- `config.yml` - Main CMS configuration defining collections and fields
- `index.html` - CMS entry point with custom preview templates

## Collections

| Collection | Description | Location |
|------------|-------------|----------|
| Components | Design system components | `docs/components/` |
| Patterns | UX patterns | `docs/patterns/` |
| Foundation | Design tokens, colors, typography | `docs/foundation/` |
| Content | Content guidelines | `docs/content/` |
| Accessibility | Accessibility guidelines | `docs/accessibility/` |
| About | About pages | `docs/about/` |
| Templates | Page templates | `docs/templates/` |
| IA | Information architecture | `docs/ia/` |
| Release Notes | Blog/changelog entries | `blog/` |

## Custom Preview Templates

The CMS includes custom preview templates that render components with proper styling:

- **ComponentPreview**: Renders component pages with maturity badges, platform tags, and checklist data
- Uses VA Design System colors and styling

## Troubleshooting

### CMS won't load locally
- Ensure `decap-server` is running (`npm run cms`)
- Check that port 8081 is not blocked
- Verify `local_backend: true` is set in config.yml

### Changes not appearing
- Hard refresh the CMS (`Cmd+Shift+R` or `Ctrl+Shift+R`)
- Check browser console for errors
- Verify the file was saved correctly in your editor

### Authentication errors in production
- Verify OAuth credentials are correct
- Check that the callback URL matches exactly
- Ensure the OAuth server is accessible

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Configuration Options](https://decapcms.org/docs/configuration-options/)
- [Custom Previews](https://decapcms.org/docs/customization/)
