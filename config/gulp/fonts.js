var gulp = require('gulp');
var task = 'fonts';


gulp.task('move-uswds-fonts', function (done) {
  console.log("Moving fonts into folder");
  var stream = gulp.src('./node_modules/@uswds/uswds/dist/fonts/**/*')
    .pipe(gulp.dest('src/assets/stylesheets/css-library/uswds/uswds/fonts'));

  return stream;
});

gulp.task('move-css-library-fonts', function (done) {
  console.log("Moving fonts into folder");
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/css-library/dist/fonts/**/*')
    .pipe(gulp.dest('src/assets/stylesheets/css-library/fonts'));

  return stream;
});


gulp.task(task, gulp.series(
  'move-uswds-fonts',
  'move-css-library-fonts'
));