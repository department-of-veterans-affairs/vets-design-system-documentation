var gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
  //gulp.series(
  //  'remote-assets',
    gulp.series(
      'fonts',
      'images',
      'javascript',
      'css',
      'paths'
    )
//  )
);