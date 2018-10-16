var gulp = require('gulp');
var task = 'fonts';


gulp.task('move-formation-fonts', function (done) {
  console.log("Moving fonts into folder");
  var stream = gulp.src('./node_modules/formation/public/fonts/*')
    .pipe(gulp.dest('src/vendor/fonts'));

  return stream;
});


gulp.task('move-fontawesome-fonts', function (done) {
  console.log("Moving Fontawesome into folder");
  var stream = gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/vendor/fonts'));

  return stream;
});

gulp.task('move-bitter-fonts', function (done) {
  console.log("Moving Bitter into folder");
  var stream = gulp.src('./node_modules/formation/public/fonts/bitter*')
    .pipe(gulp.dest('src/fonts'));

  return stream;
});


gulp.task(task, gulp.series(
  'move-formation-fonts',
  'move-fontawesome-fonts',
  'move-bitter-fonts'
));