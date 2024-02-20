var gulp = require('gulp');

gulp.task('build',
    gulp.series(
      'json',
      'fonts',
      'images',
      'javascript',
      'css',
      'storybook',
    )
);
