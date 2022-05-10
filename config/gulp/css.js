var gulp = require('gulp');
var task = 'css';

gulp.task('copy-formation-css', function (done) {
  console.log('copying Formation CSS');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/formation/dist/formation.min.css')
    .pipe(gulp.dest('src'));

  return stream;
});

gulp.task('copy-web-components-css', function (done) {
  console.log('copying web-components CSS');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/web-components/dist/component-library/*.css')
    .pipe(gulp.dest('src/assets/stylesheets/'));

  return stream;
});

gulp.task(task, gulp.series(
  'copy-formation-css',
  'copy-web-components-css'
));
