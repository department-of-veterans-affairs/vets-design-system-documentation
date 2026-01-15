# CMS Troubleshooting Guide

This guide helps diagnose and fix common issues with the Decap CMS in the docs app.

## Error: "collections names must be unique"

**Error Message:**
```
Error loading the CMS configuration
Config Errors: 'collections' collections names must be unique
Check your config.yml
```

### Root Causes

1. **Stale `.docusaurus` cache** - Most common cause
2. **Multiple config files in monorepo** - decap-server discovering configs from both `docs` and `team-docs` apps
3. **Port conflicts** - Both apps trying to use the same CMS proxy port

### Solutions

**Solution 1: Clear cache (try first)**

```bash
rm -rf .docusaurus
npm run dev:cms
```

**Solution 2: Kill conflicting processes**

```bash
# Kill all CMS-related ports
lsof -ti:3000 -ti:3003 -ti:8081 -ti:8082 | xargs kill -9 2>/dev/null

# Restart
npm run dev:cms
```

**Solution 3: Full reset**

```bash
rm -rf .docusaurus node_modules
npm install
npm run dev:cms
```
git checkout static/admin/config.yml
cd ../..
npm install
cd apps/docs
npm run dev:cms
```

### How Multiple Configs Are Prevented

The CMS is configured to prevent loading multiple config files:

1. `GIT_REPO_DIRECTORY=.` - Restricts decap-server to current app directory only
2. `CMS_MANUAL_INIT=true` - Prevents Decap CMS from auto-initializing
3. Explicit config loading via `fetch('/admin/config.yml')` instead of auto-discovery
4. No fallback `CMS.init()` that could discover other configs

### Verification Steps

If the error persists after clearing cache, verify the config is valid:

```bash
# Count collection names (should be 11, all unique)
grep -E "^  - name:" static/admin/config.yml

# Validate YAML and check for duplicates
cd apps/docs
ruby -ryaml -e "
config = YAML.load_file('static/admin/config.yml')
names = config['collections'].map { |c| c['name'] }
dups = names.select { |n| names.count(n) > 1 }.uniq
puts dups.empty? ? 'No duplicates' : \"Duplicates: #{dups.join(', ')}\"
"
```

---

## Error: "CMS is not defined"

**Error Message:**
```
Uncaught ReferenceError: CMS is not defined
```

### Root Cause

The Decap CMS JavaScript file failed to load from the CDN (unpkg.com).

### Solution

1. Check internet connectivity
2. Verify the CDN URL in `static/admin/index.html`:
   ```html
   <script src="https://unpkg.com/decap-cms@3.3.3/dist/decap-cms.js"></script>
   ```
3. Verify the version exists: `curl -s -o /dev/null -w "%{http_code}" https://unpkg.com/decap-cms@3.3.3/dist/decap-cms.js` (should return 200)

---

## Error: Blank Admin Page

### Possible Causes

1. **JavaScript errors** - Check browser console (F12)
2. **Config not loading** - Verify `/admin/config.yml` is served correctly
3. **Port conflicts** - Ensure ports 3000 and 8081 are free

### Diagnostic Steps

```bash
# Check if servers are running
lsof -i:3000
lsof -i:8081

# Verify config.yml is served
curl -s http://localhost:3000/admin/config.yml | head -10

# Kill any conflicting processes
lsof -ti:3000 | xargs kill -9
lsof -ti:8081 | xargs kill -9
```

---

## Port Conflicts Between docs and team-docs

Both `docs` and `team-docs` apps have CMS functionality. If both are running simultaneously or a previous session wasn't terminated properly, you'll get port conflicts.

### Port Assignments

| App | Docusaurus | CMS Proxy |
|-----|------------|-----------|
| docs | 3000 | 8081 |
| team-docs | 3003 | 8082 |

### Symptoms

- "Address already in use" errors
- CMS not loading or showing connection errors
- "collections names must be unique" error (stale config from wrong app)

### Solution

Kill all potentially conflicting processes before starting:

```bash
# Kill all CMS-related ports
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3003 | xargs kill -9 2>/dev/null
lsof -ti:8081 | xargs kill -9 2>/dev/null
lsof -ti:8082 | xargs kill -9 2>/dev/null

# Then start the app you need
cd apps/docs
npm run dev:cms
```

### Running Both Apps Simultaneously

If you need both apps running at the same time, start them in separate terminals:

```bash
# Terminal 1 - docs app
cd apps/docs
npm run dev:cms
# Access at http://localhost:3000/admin/

# Terminal 2 - team-docs app
cd apps/team-docs
npm run dev:cms
# Access at http://localhost:3003/admin/
```

---

## Fresh Install Not Working

If CMS issues occur on a fresh clone/install:

```bash
# 1. Complete clean
cd apps/docs
rm -rf node_modules .docusaurus build

# 2. Reset config to committed state
git checkout static/admin/config.yml

# 3. Reinstall from root
cd ../..
rm -rf node_modules
npm install

# 4. Start CMS
cd apps/docs
npm run dev:cms
```

### Browser Cache

Also clear browser storage for localhost:
1. Open http://localhost:3000/admin/
2. DevTools (F12) → Application → Storage
3. Click "Clear site data"
4. Hard refresh (Cmd+Shift+R)

---

## CMS Scripts

The `dev:cms` command runs these scripts in order:

1. `docusaurus clear` - Clears `.docusaurus` cache (prevents stale config errors)
2. `set-cms-url.js dev` - Sets `site_url` to `http://localhost:3000`
3. `generate-partials-config.js` - Updates shared content options from `docs/_partials/`
4. Starts Docusaurus (port 3000) and decap-server (port 8081) concurrently

> **Note:** The cache is cleared automatically on every `dev:cms` start, so the "collections names must be unique" error should no longer occur.

---

## Partials Script Indentation Issues

The `generate-partials-config.js` script modifies `config.yml` to update the shared content options. If the script produces incorrect YAML indentation, it can cause parse errors that manifest as "collections names must be unique".

### How It's Prevented

The script:
1. **Detects actual indentation** from existing option lines in the config
2. **Escapes special YAML characters** in partial titles (quotes, colons, etc.)
3. **Preserves the original file's whitespace convention** (spaces vs tabs)

### If You Still See Indentation Issues

```bash
# Verify the config.yml is valid
grep -E "^  - name:" static/admin/config.yml | sort | uniq -c

# All counts should be 1 (no duplicates)
# If you see counts > 1, there's a parsing issue

# Reset config to committed state
git checkout static/admin/config.yml

# Restart CMS (will regenerate partials with correct indentation)
npm run dev:docs:cms
```

### Manual Script Execution

```bash
# Set URLs for dev/prod
npm run cms:url:dev
npm run cms:url:prod

# Regenerate partials options (run when partials are added/changed)
npm run cms:generate-partials
```

---

## Config File Locations

- **Source config:** `static/admin/config.yml`
- **Admin page:** `static/admin/index.html`
- **Partials script:** `scripts/generate-partials-config.js`
- **URL script:** `scripts/set-cms-url.js`

---

## Valid Collection Names (as of Jan 2026)

The config should have exactly 11 collections:
1. components
2. patterns
3. foundation
4. content
5. accessibility
6. about
7. templates
8. ia
9. blog
10. partials
11. sidebar-categories

---

## Node Version

Requires Node.js 20+. Check with `node --version`.
