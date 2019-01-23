var gulp = require('gulp');
var task = 'fonts';


gulp.task('move-formation-fonts', function (done) {
  console.log("Moving fonts into folder");
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/formation/dist/fonts/*')
    .pipe(gulp.dest('src/fonts'));

  return stream;
});


gulp.task(task, gulp.series(
  'move-formation-fonts'
));