var gulp = require('gulp');
var git = require('gulp-git');
var clean = require('gulp-clean');


gulp.task('clean-remote-assets', function (done) {
  return gulp.src('./node_modules/formation', {read: false, allowEmpty: true})
    .pipe(clean());
});


gulp.task('copy-remote-assets', function (done) {
  return git.clone('https://github.com/department-of-veterans-affairs/design-system.git', {args: './node_modules/formation'})
  done();
});


gulp.task('remote-assets', gulp.series('clean-remote-assets', 'copy-remote-assets'));


