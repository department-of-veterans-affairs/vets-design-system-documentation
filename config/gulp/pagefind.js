var gulp = require('gulp');
var { exec } = require('child_process');
var util = require('util');
var { deleteAsync } = require('del');

const execAsync = util.promisify(exec);

/**
 * Build Jekyll site and generate Pagefind search index
 * 
 * This task handles the complete search build process:
 * 1. Build Jekyll site to _site/
 * 2. Run Pagefind to generate search index in _site/pagefind/
 * 
 * Jekyll dev server will serve the search files directly from _site/pagefind/
 */
gulp.task('pagefind:build', async function() {
  try {
    console.log('🏗️  Building Jekyll site...');
    await execAsync('bundle exec jekyll build --config _config.yml');
    
    console.log('🔍 Generating Pagefind search index in _site/pagefind/...');
    await execAsync('npx pagefind');
    
    console.log('✅ Search index ready! Jekyll dev server will serve from _site/pagefind/');
      
  } catch (error) {
    console.error('❌ Pagefind build failed:', error.message);
    throw error;
  }
});

/**
 * Build Jekyll + Pagefind and start server without rebuilding
 */
gulp.task('pagefind:build-and-serve', async function() {
  try {
    console.log('🏗️  Building Jekyll site...');
    await execAsync('bundle exec jekyll build --config _config.yml');
    
    console.log('🔍 Generating Pagefind search index in _site/pagefind/...');
    await execAsync('npx pagefind');
    
    console.log('✅ Search index ready! Starting Jekyll server...');
    
    // Start Jekyll server with --skip-initial-build to avoid rebuilding
    const jekyll = exec('bundle exec jekyll serve --baseurl "" --skip-initial-build');
    
    jekyll.stdout.on('data', (data) => {
      process.stdout.write(data);
      if (data.includes('Server address:')) {
        console.log('🔍 Search functionality ready with Pagefind');
      }
    });
    
    jekyll.stderr.on('data', (data) => {
      process.stderr.write(data);
    });
    
    console.log('🌐 Jekyll server starting at http://localhost:4000');
    
    // Return a promise that never resolves to keep the task running
    return new Promise(() => {});
      
  } catch (error) {
    console.error('❌ Pagefind build failed:', error.message);
    throw error;
  }
});

/**
 * Clean up search files
 */
gulp.task('pagefind:clean', function() {
  console.log('🧹 Cleaning search files...');
  return deleteAsync([
    '_site/pagefind/**/*'
  ], { force: true });
});

/**
 * Start development server with search
 * 
 * This is the main task you should use for development:
 * 1. Build assets with Gulp (CSS, JS, fonts, etc.)
 * 2. Build Jekyll site to _site/ and generate search index in _site/pagefind/
 * 3. Start Jekyll development server (serves from _site/)
 */
gulp.task('serve:search', 
  gulp.series(
    'build',                    // Build all assets first  
    'pagefind:build-and-serve'  // Build Jekyll + Pagefind + serve without rebuilding
  )
);

/**
 * Quick search rebuild (when you only changed search config)
 * 
 * Use this when you only modified pagefind.yml or search-related files
 * and don't need to rebuild all assets
 */
gulp.task('pagefind:rebuild', 
  gulp.series('pagefind:build')
);

/**
 * Quick start - assumes you already have _site built
 * 
 * Use this when you just want to start the server without rebuilding everything
 */
gulp.task('serve:quick', function(done) {
  console.log('🚀 Starting Jekyll development server (assuming _site is already built)...');
  
  // Start Jekyll server
  const jekyll = exec('bundle exec jekyll serve --baseurl ""');
  
  // Pipe output to console
  jekyll.stdout.on('data', (data) => {
    process.stdout.write(data);
    if (data.includes('Server running')) {
      console.log('✅ Jekyll server started successfully!');
    }
  });
  jekyll.stderr.on('data', (data) => process.stderr.write(data));
  
  console.log('Server starting in background...');
  done();
});