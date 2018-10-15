var gulp = require('gulp');
var task = 'fonts';

gulp.task(task, function (done) {
  console.log("Moving fonts into folder");
  var stream = gulp.src('./tmp_remote_assets/public/fonts/*')
    .pipe(gulp.dest('src/vendor/fonts'));

  return stream;

});