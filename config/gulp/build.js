var gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
  //gulp.series(
    gulp.series(
      'json',
      'fonts',
      'images',
      'javascript',
      'css'
    )
//  )
);
