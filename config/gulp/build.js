var gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
  gulp.series(
    'remote-assets',
    //'build-uswds-if-needed',
    gulp.parallel(
      'fonts',
      'images',
      //'javascript',
      //'sass',
    )
  )
);