var gulp = require('gulp');

gulp.task('copy-web-components-js', function (done) {
  console.log('copying web-components javascript');
  var stream = gulp.src(
    './node_modules/@department-of-veterans-affairs/web-components/**/*.js')
    .pipe(gulp.dest('src/vendor/javascripts/component-library/'));

  return stream;
});

gulp.task('javascript', gulp.series('copy-web-components-js'));
