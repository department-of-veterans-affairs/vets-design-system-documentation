var gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
  //gulp.series(
  //  'remote-assets',
    gulp.parallel(
      'fonts',
      'images',
      'javascript',
      'css',
      //'paths',
    )
//  )
);