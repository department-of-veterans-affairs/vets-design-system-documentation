var gulp = require('gulp');
var git = require('gulp-git');
var clean = require('gulp-clean');


gulp.task('clean-remote-assets', function () {
  return gulp.src('./tmp_remote_assets', {read: false})
    .pipe(clean());
});


gulp.task('copy-remote-assets', ['clean-remote-assets'], function (err) {

  git.clone('https://github.com/department-of-veterans-affairs/design-system.git', {args: './tmp_remote_assets'}, function (err) {
    if (err) throw err;
  })

});