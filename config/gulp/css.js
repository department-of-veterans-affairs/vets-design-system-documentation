var gulp = require('gulp');
const replace = require('gulp-replace');
var task = 'css';

gulp.task('clean-css-library-asset-paths', function() {
  console.log('cleaning css-library asset paths');
  // Removing the ~ prefix from the asset paths
  return gulp.src([
    './node_modules/@department-of-veterans-affairs/css-library/dist/stylesheets/**/*.css',
    './node_modules/@department-of-veterans-affairs/css-library/dist/stylesheets/**/*.scss'
  ])
    .pipe(replace(/~@uswds/g, '@uswds'))
    .pipe(replace(/~@department-of-veterans-affairs/g, '@department-of-veterans-affairs'))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('copy-css-library-css', function (done) {
  console.log('copying css-library CSS');
  var stream = gulp.src([
      './node_modules/@department-of-veterans-affairs/css-library/dist/**/*.css',
      './node_modules/@department-of-veterans-affairs/css-library/dist/**/*.map'
    ])
    .pipe(gulp.dest('src/assets/stylesheets/@department-of-veterans-affairs/css-library/dist'));

  return stream;
});

gulp.task('copy-web-components-css', function (done) {
  console.log('copying web-components CSS');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/web-components/dist/component-library/*.css')
    .pipe(gulp.dest('src/assets/stylesheets/'));

  return stream;
});

gulp.task(task, gulp.series(
  'clean-css-library-asset-paths',
  'copy-css-library-css',
  'copy-web-components-css',
));
