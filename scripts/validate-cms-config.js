#!/usr/bin/env node
/**
 * Validates the CMS config.yml file and reports detailed errors.
 * Run: node scripts/validate-cms-config.js
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, '../static/admin/config.yml');

// Simple YAML parser for validation (doesn't need full parsing, just structure checks)
function validateConfig() {
  console.log('🔍 Validating CMS config...\n');

  if (!fs.existsSync(CONFIG_PATH)) {
    console.error('❌ Config file not found:', CONFIG_PATH);
    process.exit(1);
  }

  const content = fs.readFileSync(CONFIG_PATH, 'utf-8');
  const lines = content.split('\n');
  const errors = [];
  const warnings = [];

  // Track collection names
  const collectionNames = [];
  const collectionLines = {};

  // Track indentation
  let expectedIndent = 0;
  let prevIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const line = lines[i];
    const trimmed = line.trimStart();
    const indent = line.length - trimmed.length;

    // Check for tabs
    if (line.includes('\t')) {
      errors.push(`Line ${lineNum}: Contains TAB character (use spaces only)`);
    }

    // Check for trailing whitespace
    if (line !== line.trimEnd() && line.trim() !== '') {
      warnings.push(`Line ${lineNum}: Trailing whitespace`);
    }

    // Check for odd indentation (YAML typically uses 2-space indents)
    if (indent % 2 !== 0 && trimmed !== '') {
      warnings.push(`Line ${lineNum}: Odd indentation (${indent} spaces) - may cause parsing issues`);
    }

    // Check for collection definitions
    const collMatch = line.match(/^  - name: (.+)/);
    if (collMatch) {
      const name = collMatch[1].trim();
      if (collectionNames.includes(name)) {
        errors.push(`Line ${lineNum}: Duplicate collection name "${name}" (first defined at line ${collectionLines[name]})`);
      } else {
        collectionNames.push(name);
        collectionLines[name] = lineNum;
      }
    }

    // Check for unclosed quotes
    const doubleQuotes = (line.match(/"/g) || []).length;
    const escapedDoubles = (line.match(/\\"/g) || []).length;
    if ((doubleQuotes - escapedDoubles) % 2 !== 0) {
      // Could be multiline, but flag as warning
      warnings.push(`Line ${lineNum}: Possible unclosed double quote`);
    }

    // Check for missing colon after key
    if (trimmed.match(/^[a-z_]+[^:]$/) && !trimmed.startsWith('#') && !trimmed.startsWith('-')) {
      warnings.push(`Line ${lineNum}: Possible missing colon after key`);
    }

    // Check for common YAML errors
    if (trimmed.includes(': -') && !trimmed.includes(': - {')) {
      warnings.push(`Line ${lineNum}: Space after colon before dash may cause issues`);
    }
  }

  // Report results
  console.log(`📋 Found ${collectionNames.length} collections:`);
  collectionNames.forEach((name, i) => {
    console.log(`   ${i + 1}. ${name} (line ${collectionLines[name]})`);
  });
  console.log('');

  if (errors.length > 0) {
    console.log('❌ ERRORS (will cause CMS to fail):');
    errors.forEach(e => console.log(`   ${e}`));
    console.log('');
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS (may cause issues):');
    warnings.slice(0, 20).forEach(w => console.log(`   ${w}`));
    if (warnings.length > 20) {
      console.log(`   ... and ${warnings.length - 20} more warnings`);
    }
    console.log('');
  }

  // Try to parse with a simple structure check
  console.log('🔧 Checking YAML structure...');
  try {
    // Check for required top-level keys
    const hasBackend = content.includes('backend:');
    const hasCollections = content.includes('collections:');

    if (!hasBackend) {
      errors.push('Missing required "backend:" configuration');
    }
    if (!hasCollections) {
      errors.push('Missing required "collections:" configuration');
    }

    // Check shared_content options section
    const sharedContentMatch = content.match(/# --- SHARED CONTENT BLOCKS ---[\s\S]*?options:([\s\S]*?)(?=\n      # ---|$)/);
    if (sharedContentMatch) {
      const optionsSection = sharedContentMatch[1];
      const optionLines = optionsSection.split('\n').filter(l => l.trim().startsWith('- {'));
      console.log(`   ✓ Shared content options: ${optionLines.length} items`);

      // Check each option for proper formatting
      optionLines.forEach((opt, i) => {
        if (!opt.includes('label:') || !opt.includes('value:')) {
          errors.push(`Shared content option ${i + 1} missing label or value`);
        }
      });
    }

    console.log('   ✓ Required sections present');
  } catch (e) {
    errors.push(`Structure check failed: ${e.message}`);
  }

  // Final summary
  console.log('\n' + '='.repeat(50));
  if (errors.length > 0) {
    console.log('❌ VALIDATION FAILED');
    console.log(`   ${errors.length} error(s) found`);
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log('⚠️  VALIDATION PASSED WITH WARNINGS');
    console.log(`   ${warnings.length} warning(s) found`);
  } else {
    console.log('✅ VALIDATION PASSED');
    console.log('   No issues found');
  }
}

validateConfig();
