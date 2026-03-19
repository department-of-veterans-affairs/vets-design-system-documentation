var gulp = require('gulp');
var fs = require('fs');

gulp.task('copy-web-components-js', function (done) {
  console.log('copying web-components javascript');
  var stream = gulp.src(
    './node_modules/@department-of-veterans-affairs/web-components/**/*.js')
    .pipe(gulp.dest('src/vendor/javascripts/component-library/'));

  return stream;
});

// Jekyll excludes files starting with `_` unless they are listed in the
// `include` array in _config.yml. The Stencil build sometimes emits a
// `_commonjsHelpers-<hash>.js` chunk whose hash changes with each
// web-components release. This task reads the actual installed package,
// finds the current filename (if any), and keeps _config.yml in sync so
// the file is never silently dropped from the Jekyll build.
gulp.task('sync-jekyll-includes', function (done) {
  var esmDir = './node_modules/@department-of-veterans-affairs/web-components/dist/esm/';
  var configPath = './_config.yml';
  var includePrefix = 'vendor/javascripts/component-library/dist/esm/';

  try {
    var files = fs.readdirSync(esmDir);
    var helpersFile = files.find(function (f) {
      return /^_commonjsHelpers-.*\.js$/.test(f);
    });

    var config = fs.readFileSync(configPath, 'utf8');
    var existingPattern = /vendor\/javascripts\/component-library\/dist\/esm\/_commonjsHelpers-[^\s\n]+/;

    if (helpersFile) {
      var includePath = includePrefix + helpersFile;
      var updated = config.replace(existingPattern, includePath);
      if (updated !== config) {
        fs.writeFileSync(configPath, updated);
        console.log('sync-jekyll-includes: updated _config.yml to include ' + helpersFile);
      } else {
        console.log('sync-jekyll-includes: _config.yml already references ' + helpersFile);
      }
    } else {
      console.log('sync-jekyll-includes: no _commonjsHelpers file in web-components package, nothing to update');
    }
  } catch (e) {
    console.warn('sync-jekyll-includes: could not sync _config.yml includes:', e.message);
  }

  done();
});

gulp.task('javascript', gulp.series('copy-web-components-js', 'sync-jekyll-includes'));
