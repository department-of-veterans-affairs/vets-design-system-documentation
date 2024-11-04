var gulp = require('gulp');
var task = 'storybook';

gulp.task('move-assets', function (done) {
    console.log("Moving assets from storybook to root assets directory.");

    var stream = gulp.src('./node_modules/@department-of-veterans-affairs/web-components/dist/assets/*')
        .pipe(gulp.dest('./src/assets'));

    return stream;
});

gulp.task(task, gulp.parallel('move-assets'));
