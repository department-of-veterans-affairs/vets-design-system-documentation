var gulp = require('gulp');
var task = 'css';

gulp.task('copy-fontawesome-css', function (done) {
  console.log('copying font awesome CSS');
  var stream = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css')
    .pipe(gulp.dest('src/vendor/css'));

  return stream;
  done();
});

gulp.task('copy-formation-css', function (done) {
  console.log('copying font awesome CSS');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/formation/dist/formation.min.css')
    .pipe(gulp.dest('src'));

  return stream;
  done();
});

gulp.task(task, gulp.series(
  'copy-fontawesome-css',
  'copy-formation-css'
));