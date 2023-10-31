var gulp = require('gulp');

gulp.task('storybook', function () {
    console.log("Moving assets from storybook to root assets directory.");

    return gulp.src('storybook/assets/**/*')
        .pipe(gulp.dest('assets/'));
});

gulp.task('default', gulp.parallel('storybook'));
