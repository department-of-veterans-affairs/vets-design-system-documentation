var gulp = require('gulp');
var git = require('gulp-git');


gulp.task('copy-remote-assets', function (err) {

  git.clone('https://github.com/department-of-veterans-affairs/design-system.git', {args: './tmp_remote_assets'}, function (err) {
    if (err) throw err;
  });

});