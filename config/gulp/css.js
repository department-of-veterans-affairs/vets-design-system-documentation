var gulp = require('gulp');


gulp.task('copy-fontawesome-css', function (done) {
  console.log('copying font awesome CSS');
  var stream = gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/vendor/css'));

  return stream;
  done();
});


gulp.task('css', gulp.series('copy-fontawesome-css'));