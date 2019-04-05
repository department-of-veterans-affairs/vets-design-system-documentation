var gulp = require('gulp');
var task = 'images';

gulp.task('move-to-src', function (done) {
  console.log("Moving images into folder");
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/formation/dist/img/**/*')
    .pipe(gulp.dest('src/img'));

  return stream;

});


gulp.task(task, gulp.parallel('move-to-src'));