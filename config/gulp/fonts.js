var gulp = require('gulp');

gulp.task('copy-uswds-fonts', function (done) {
  console.log('copying uswds fonts');
  var stream = gulp.src('./node_modules/@uswds/uswds/dist/fonts/**/*')
    .pipe(gulp.dest('src/assets/stylesheets/@uswds/uswds/fonts/'));

  return stream;
});

gulp.task('copy-css-library-fonts', function (done) {
  console.log('copying css-library fonts');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/css-library/dist/fonts/**/*')
    .pipe(gulp.dest('src/assets/stylesheets/@department-of-veterans-affairs/css-library/dist/fonts'));

  return stream;
});

gulp.task('fonts', gulp.series(
  'copy-uswds-fonts',
  'copy-css-library-fonts'
));
