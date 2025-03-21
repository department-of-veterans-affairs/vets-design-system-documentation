var gulp = require('gulp');
var task = 'images';


gulp.task('copy-css-library-images', function (done) {
  console.log('copying css-library images');
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/css-library/dist/img/*')
    .pipe(gulp.dest('src/assets/stylesheets/@department-of-veterans-affairs/css-library/dist/img'));

  return stream;
});

gulp.task('images', gulp.series(
  'copy-css-library-images'
));