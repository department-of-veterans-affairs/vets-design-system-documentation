var gulp = require('gulp');
var task = 'json';
const fs = require('fs');
const path = require('path');

// The component-docs..json file allows us to display the attributes, properties, and events 
// for the components in the system in the Component pages

gulp.task('move-json-data', function (done) {
  console.log("Moving json into folder");
  var stream = gulp.src('./node_modules/@department-of-veterans-affairs/web-components/component-docs.json')
    .pipe(gulp.dest('src/_data'));

  return stream;
});

gulp.task('process-component-maturity', function (done) {
  const inputPath = path.join(__dirname, '../../src/_data/component-docs.json');
  const outputPath = path.join(__dirname, '../../src/_data/component-maturity.json');

  if (!fs.existsSync(inputPath)) {
    console.error('component-docs.json not found at', inputPath);
    done();
    return;
  }

  const docs = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const result = {};
  (docs.components || []).forEach(component => {
    if (!component.tag || !component.docsTags) return;
    let maturityCategory = null;
    let maturityLevel = null;
    component.docsTags.forEach(tag => {
      if (tag.name === 'maturityCategory') maturityCategory = tag.text;
      if (tag.name === 'maturityLevel') maturityLevel = tag.text;
    });
    if (maturityCategory && maturityLevel) {
      result[component.tag] = {
        maturityCategory,
        maturityLevel
      };
    }
  });
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  done();
});

gulp.task(task, gulp.series(
  'move-json-data',
  'process-component-maturity'
));
