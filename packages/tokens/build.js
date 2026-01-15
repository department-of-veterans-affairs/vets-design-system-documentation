import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

const config = {
  source: ['tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          selector: ':root'
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'colors.js',
          format: 'javascript/es6',
          filter: token => token.attributes.category === 'color'
        },
        {
          destination: 'spacing.js', 
          format: 'javascript/es6',
          filter: token => token.attributes.category === 'spacing'
        },
        {
          destination: 'typography.js',
          format: 'javascript/es6', 
          filter: token => token.attributes.category === 'typography'
        }
      ]
    }
  }
};

console.log('Building design tokens...');

const sd = new StyleDictionary(config);
await sd.buildAllPlatforms();

console.log('✓ Design tokens built successfully');
console.log('  - CSS variables: dist/tokens.css');
console.log('  - JS modules: dist/colors.js, dist/spacing.js, dist/typography.js');