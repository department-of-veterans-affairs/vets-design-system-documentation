var gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
    gulp.series(
      'json',
      'javascript',
      'css',
      'storybook',
    )
);
