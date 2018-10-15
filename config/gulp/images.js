var gulp = require('gulp');
var task = 'images';

gulp.task(task, function (done) {
  console.log("Moving images into folder");
  var stream = gulp.src('./tmp_remote_assets/public/img/**/*')
    .pipe(gulp.dest('src/assets/img'));

  return stream;

});