var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('copy-formation-js', function (done) {
  console.log('copying uswds javascript');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/formation/dist/formation.js')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('src/vendor/javascripts'));

  return stream;
});

gulp.task('copy-web-components-js', function (done) {
  console.log('copying web-components javascript');
  var stream = gulp.src(
    './node_modules/@department-of-veterans-affairs/web-components/**/*.js')
    .pipe(gulp.dest('src/vendor/javascripts/component-library/'));

  return stream;
});

gulp.task('javascript', gulp.series('copy-formation-js', 'copy-web-components-js'));
