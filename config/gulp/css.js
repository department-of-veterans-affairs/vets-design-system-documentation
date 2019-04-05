var gulp = require('gulp');
var task = 'css';

gulp.task('copy-formation-css', function (done) {
  console.log('copying Formation CSS');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/formation/dist/formation.min.css')
    .pipe(gulp.dest('src'));

  return stream;
});

gulp.task(task, gulp.series(
  'copy-formation-css'
));