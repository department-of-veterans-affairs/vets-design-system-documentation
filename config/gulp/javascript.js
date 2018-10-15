var gulp = require('gulp');


gulp.task('copy-uswds-js', function (done) {
  console.log('copying uswds javascript');
  var stream = gulp.src('./node_modules/uswds/dist/js/**/*')
    .pipe(gulp.dest('src/vendor/javascripts'));

  return stream;
  done();
});


gulp.task('javascript', gulp.series('copy-uswds-js'));