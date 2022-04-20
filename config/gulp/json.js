
var gulp = require('gulp');
var task = 'json';


gulp.task('move-json-data', function (done) {
  console.log("Moving json into folder");
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/web-components/component-docs.json')
    .pipe(gulp.dest('src/_data'));

  return stream;
});


gulp.task(task, gulp.series(
  'move-json-data'
));
