/******* CODE QUALITY TASKS *******/

const stylish = require('jshint-stylish');
const htmlhint = require('gulp-htmlhint');
const path = require('path');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const stylishCom = require('gulp-jscs-stylish');


module.exports = function(gulp, conf, globOptions) {

'use strict';

  gulp.task('jshint-src', function() {
    return gulp.src([conf.sourceDir + '/**/*.js', '!' + conf.vendorLibrariesPath + '/**'], globOptions)
      .pipe(jshint(path.join(__dirname, './vetFilesConfig/.jshintrc')))
      .pipe(jscs({
        configPath: path.join(__dirname, './vetFilesConfig/.jscsrc'),
        fix: false
      }))
      .pipe(stylishCom.combineWithHintResults())
      .pipe(jshint.reporter(stylish));
  });

  gulp.task('jshint-test', function() {
    return gulp.src(conf.testDir + '/**/*.js', globOptions)
      .pipe(jshint(path.join(__dirname, './vetFilesConfig/.jshintrc')))
      .pipe(jscs({
        configPath: path.join(__dirname, './vetFilesConfig/.jscsrc'),
        fix: false
      }))
      .pipe(stylishCom.combineWithHintResults())
      .pipe(jshint.reporter(stylish));
  });

  gulp.task('htmlhint-src', function() {

    return gulp.src([conf.sourceDir + '/index.html',
        conf.sourceDir + '/html/**/*.html'
      ], globOptions)
      .pipe(htmlhint({
        htmlhintrc: path.join(__dirname, './vetFilesConfig/.htmlhintrc')
      }))
      .pipe(htmlhint.reporter());
  });
};
