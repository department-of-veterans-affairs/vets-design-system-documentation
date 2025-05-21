var gulp = require('gulp');
var task = 'json';
const fs = require('fs');
const path = require('path');

// The component-docs.json file allows us to display the attributes, properties, and events 
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
  (docs.components || [])
    .filter(component => component.tag && component.docsTags)
    .forEach(component => {
      // Extract maturity data in a single pass
      const maturityData = component.docsTags.reduce((data, tag) => {
        if (tag.name === 'maturityCategory') data.maturityCategory = tag.text;
        if (tag.name === 'maturityLevel') data.maturityLevel = tag.text;
        return data;
      }, {});

      if (maturityData.maturityCategory && maturityData.maturityLevel) {
        result[component.tag] = {
          maturityCategory: maturityData.maturityCategory,
          maturityLevel: maturityData.maturityLevel
        };
      }
    });

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  done();
});

gulp.task('process-component-maturity-figma', function (done) {
  const inputPath = path.join(__dirname, '../../src/_data/component-docs.json');
  const outputPath = path.join(__dirname, '../../src/_data/component-maturity-figma.json');

  function toSentenceCase(str) {
    if (!str) return str;
    let s = str.replace(/_/g, ' ');
    s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    if (s === 'Caution') s = 'Use with caution';
    return s;
  }

  if (!fs.existsSync(inputPath)) {
    console.error('component-docs.json not found at', inputPath);
    done();
    return;
  }

  const docs = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const result = {};
  (docs.components || [])
    .filter(component => component.tag && component.docsTags)
    .forEach(component => {
      // Extract maturity data in a single pass
      const maturityData = component.docsTags.reduce((data, tag) => {
        if (tag.name === 'maturityCategory') data.maturityCategory = tag.text;
        if (tag.name === 'maturityLevel') data.maturityLevel = tag.text;
        return data;
      }, {});

      if (maturityData.maturityCategory && maturityData.maturityLevel) {
        result[component.tag] = {
          category: {
            $type: 'string',
            $value: toSentenceCase(maturityData.maturityCategory)
          },
          level: {
            $type: 'string',
            $value: toSentenceCase(maturityData.maturityLevel)
          }
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
