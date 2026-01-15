# VA Design System Documentation

The main documentation site for the VA Design System, built with Docusaurus and Decap CMS.

## Development

### With CMS (Recommended)

```bash
# From repo root
pnpm run dev:docs:cms

# Or from this directory
pnpm run dev:cms
```

This starts:
- Docusaurus at http://localhost:3000
- CMS Admin at http://localhost:3000/admin/
- Decap proxy server on port 8081

### Without CMS

```bash
pnpm run dev
```

## Build

```bash
pnpm run build
```

## CMS Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev:cms` | Start Docusaurus + CMS for local editing |
| `pnpm run cms:validate` | Validate CMS config.yml for errors |
| `pnpm run cms:generate-partials` | Regenerate shared content options |
| `pnpm run cms:url:dev` | Set CMS URLs to localhost |
| `pnpm run cms:url:prod` | Set CMS URLs to production |

## Project Structure

```
docs/
├── docs/                    # Documentation content (MDX/Markdown)
│   ├── components/          # Component documentation
│   ├── patterns/            # Pattern documentation
│   ├── foundation/          # Foundation pages
│   ├── content/             # Content guidelines
│   ├── accessibility/       # Accessibility docs
│   ├── about/               # About pages
│   ├── templates/           # Template documentation
│   ├── ia/                  # Information architecture
│   └── _partials/           # Shared content blocks
├── blog/                    # Release notes
├── src/
│   ├── components/          # React components
│   ├── theme/               # Docusaurus theme overrides
│   └── utils/               # Utility functions
├── static/
│   ├── admin/               # CMS admin files
│   │   ├── config.yml       # CMS configuration
│   │   └── index.html       # CMS admin page
│   └── img/                 # Static images
├── scripts/                 # Build/CMS scripts
│   ├── generate-partials-config.js
│   ├── set-cms-url.js
│   └── validate-cms-config.js
├── docusaurus.config.ts     # Docusaurus configuration
└── TROUBLESHOOTING.md       # CMS troubleshooting guide
```

## CMS Collections

The CMS manages these content types:

1. **Components** - UI component documentation
2. **Patterns** - Design pattern documentation
3. **Foundation** - Foundation/principles pages
4. **Content** - Content guidelines
5. **Accessibility** - Accessibility documentation
6. **About** - About pages
7. **Templates** - Template documentation
8. **IA** - Information architecture
9. **Blog** - Release notes
10. **Partials** - Shared/reusable content blocks
11. **Sidebar Categories** - Sidebar organization

## Troubleshooting

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues and solutions.

### Quick Fixes

**"collections names must be unique" error:**
```bash
rm -rf .docusaurus
pnpm run cms:validate
pnpm run dev:cms
```

**CMS not loading:**
```bash
# Check if ports are in use
lsof -i:3000
lsof -i:8081

# Kill and restart
lsof -ti:3000 -ti:8081 | xargs kill -9 2>/dev/null
pnpm run dev:cms
```
