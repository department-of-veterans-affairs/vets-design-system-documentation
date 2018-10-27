var gulp = require('gulp');
var replace = require('gulp-string-replace');


gulp.task('css-paths', function (done) {
  console.log('fixing paths');
  var stream = gulp.src('./src/vendor/css/app.css', {base: './'})
    .pipe(replace(/url\(\//gi, 'url(../'))
    .pipe(gulp.dest('./'));
  return stream;
  done();
});

gulp.task('paths', gulp.series('css-paths' ));
