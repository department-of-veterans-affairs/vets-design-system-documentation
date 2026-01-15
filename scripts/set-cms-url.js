#!/usr/bin/env node

/**
 * Sets the CMS site_url and display_url based on the environment.
 *
 * Usage:
 *   node scripts/set-cms-url.js           # Uses NODE_ENV to determine URL
 *   node scripts/set-cms-url.js dev       # Forces development URL (localhost)
 *   node scripts/set-cms-url.js prod      # Forces production URL (design.va.gov)
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, '../static/admin/config.yml');

const URLS = {
  development: 'http://localhost:3000',
  production: 'https://design.va.gov',
};

// Determine which environment to use
const arg = process.argv[2];
let environment;

if (arg === 'dev' || arg === 'development') {
  environment = 'development';
} else if (arg === 'prod' || arg === 'production') {
  environment = 'production';
} else {
  // Default based on NODE_ENV
  environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
}

const siteUrl = URLS[environment];

console.log(`Setting CMS URLs to ${environment}: ${siteUrl}`);

// Read the config file
let config = fs.readFileSync(CONFIG_PATH, 'utf8');

// Replace site_url and display_url
config = config.replace(
  /site_url:\s*https?:\/\/[^\s]+/,
  `site_url: ${siteUrl}`
);
config = config.replace(
  /display_url:\s*https?:\/\/[^\s]+/,
  `display_url: ${siteUrl}`
);

// Write the updated config
fs.writeFileSync(CONFIG_PATH, config, 'utf8');

console.log(`✓ Updated ${CONFIG_PATH}`);
