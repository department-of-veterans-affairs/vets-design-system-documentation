var gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
  //gulp.series(
    gulp.series(
      'fonts',
      'images',
      'javascript',
      'css'
    )
//  )
);