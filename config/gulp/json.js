
var gulp = require('gulp');
var task = 'json';

// The component-docs..json file allows us to display the attributes, properties, and events 
// for the components in the system in the Component pages

gulp.task('move-json-data', function (done) {
  console.log("Moving json into folder");
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/web-components/component-docs.json')
    .pipe(gulp.dest('src/_data'));

  return stream;
});


gulp.task(task, gulp.series(
  'move-json-data'
));
