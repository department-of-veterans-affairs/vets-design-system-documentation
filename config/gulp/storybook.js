var gulp = require('gulp');

gulp.task('move-assets', function () {
    console.log("Moving assets from storybook to root assets directory.");

    return gulp.src('storybook/assets/**/*')
        .pipe(gulp.dest('assets/'));
});

gulp.task('default', gulp.parallel('move-assets'));
