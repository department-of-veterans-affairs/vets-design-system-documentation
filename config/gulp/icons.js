var gulp = require('gulp');
var task = 'icons';


gulp.task('copy-icons', function (done) {
  console.log('copying icons');
  var stream = gulp.src('./src/img/sprite.svg')
    .pipe(gulp.dest('src/assets/'));

  return stream;
});

gulp.task('icons', gulp.series(
  'copy-icons'
));