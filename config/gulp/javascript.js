var gulp = require('gulp');
var rename = require('gulp-rename');


gulp.task('copy-uswds-js', function (done) {
  console.log('copying uswds javascript');
  var stream = gulp.src('./node_modules/uswds/dist/js/**/*')
    .pipe(gulp.dest('src/vendor/javascripts'));

  return stream;
  done();
});


gulp.task('copy-react-js', function (done) {
  console.log('copying uswds javascript');
  var stream = gulp.src('./node_modules/formation/src/components/**/*.njk')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('src/_includes/react'));

  return stream;
  done();
});


gulp.task('javascript', gulp.series('copy-uswds-js', 'copy-react-js'));