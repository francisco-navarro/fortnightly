/******* ASSETS TASKS *******/

const flatten = require('gulp-flatten');
const args = require('yargs').argv;
const useref = require('gulp-useref');
const lazypipe = require('lazypipe');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const del = require('del');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const replace = require('gulp-regex-replace');
const extendJSON = require('gulp-extend');
const rename = require('gulp-rename');
const ngAnnotate = require('gulp-ng-annotate');
const templateCache = require('gulp-angular-templatecache');
const inject = require('gulp-inject');
const currentDir = process.cwd();
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const htmlmin = require('gulp-htmlmin');

module.exports = function(gulp, conf, globOptions) {

  'use strict';

  /******* MAIN TASKS *******/

  gulp.task('buildIndex', ['copy-index']);

  gulp.task('buildCss', ['regex-fonts-ui-grid', 'copy-styles', 'copy-fonts', 'copy-jstree-images', 'copy-images']);

  gulp.task('buildFiles', ['copy-static', 'merge-l10n-messages']);

  gulp.task('clean', ['clean-css', 'clean-fonts', 'clean-js', 'clean-images', 'clean-locales', 'clean-static', 'clean-index', 'clean-jstree-images']);

  /******* INDEX TASKS *******/

  //TODO maybe --minify should change to --production, 
  gulp.task('copy-index', ['wiredep-html', 'inject-js', 'clean-index', 'clean-js', 'clean-css'], function() {
    var assets = useref.assets();

    var task = gulp.src('src/index.html', globOptions)
      .pipe(assets)
      //.pipe(gulpif('**/lib.js', ngAnnotate()))
      .pipe(gulpif('**/combined-min.js', ngAnnotate()));
    // If exists an environment param named --minify then it should minify code
    if (args.minify) {
      var minifyJs = lazypipe()
        .pipe(uglify, {
          compress: {
            drop_console: true
          }
        });

      task = task.pipe(gulpif('**/lib.js', minifyJs()))
        .pipe(gulpif('**/combined-min.js', minifyJs()))
        .pipe(gulpif('*.css', minifyCss()));
    }
    task = task.pipe(rev())
      .pipe(assets.restore())
      .pipe(revReplace())
      .pipe(useref())
      .pipe(gulp.dest(conf.targetDir));
    return task;
  });

  gulp.task('wiredep-html', function() {
    return gulp.src(currentDir + '/src/index.html')
      .pipe(wiredep({
        bowerJson: conf.bowerJson,
        directory: conf.vendorLibrariesPath,
        exclude: ['src/js/bower_components/proa-css/dist/css/'],
        dependencies: true
      }))
      .pipe(gulp.dest(currentDir + '/src'));

  });

  
  gulp.task('inject-js', ['create-templates'], function() {
    return gulp.src('./src/index.html')
      .pipe(inject(
        gulp.src(['./src/js/app/**/*.js']).pipe(angularFilesort()).pipe(angularFilesort()), {
          relative: true
        }
      ))
      .pipe(gulp.dest('./src'));
  });

  // TODO htmlMin dont work
  gulp.task('create-templates', function() {
    return gulp.src('src/html/**/*.html')
      //.pipe(htmlmin({}))
      .pipe(templateCache(conf.appName + '-templates.js', {
        root: 'html',
        module: 'proa.ui',
        standalone: false,
        moduleSystem: 'IIFE'
      }))
      .pipe(uglify())
      .pipe(gulp.dest('src/js/app'));
  });

  /******* CSS TASKS *******/

  gulp.task('copy-styles', ['clean-css'], function() {
    return gulp.src(conf.vendorLibrariesPath + '/proa-css/dist/css/*.css')
      .pipe(flatten())
      .pipe(gulp.dest(conf.targetDir + '/css'));
  });

  gulp.task('copy-fonts', ['clean-fonts'], function() {
    return gulp.src([conf.vendorLibrariesPath + '/**/fonts/**/*.{ttf,woff,woff2,eof,svg}', conf.vendorLibrariesPath + '/angular-ui-grid/*.{ttf,woff,eof,svg}'], globOptions)
      .pipe(flatten())
      .pipe(gulp.dest(conf.targetDir + '/fonts'));
  });

  // Esta tarea copia las imágenes de jstree en /css debido a la redirección en su css > background-image
  gulp.task('copy-jstree-images', ['clean-jstree-images'], function() {
    return gulp.src(conf.vendorLibrariesPath + '/jstree/*.{png,gif}', globOptions)
      .pipe(flatten())
      .pipe(gulp.dest(conf.targetDir + '/css'));
  });

  gulp.task('copy-images', ['clean-images'], function() {
    return gulp.src([conf.vendorLibrariesPath + '/**/img/**/*.{png,jpg,ico}', conf.sourceDir + '/img/**/*'], globOptions)
      .pipe(flatten())
      .pipe(gulp.dest(conf.targetDir + '/img'));
  });

  gulp.task('regex-fonts-ui-grid', ['copy-styles'], function() {
    return gulp.src(conf.targetDir + '/css/*.css', globOptions)
      .pipe(replace({
        regex: 'ui-grid.woff',
        replace: '../fonts/ui-grid.woff'
      }))
      .pipe(replace({
        regex: 'ui-grid.ttf',
        replace: '../fonts/ui-grid.ttf'
      }))
      .pipe(replace({
        regex: 'ui-grid.svg',
        replace: '../fonts/ui-grid.svg'
      }))
      .pipe(gulp.dest(conf.targetDir + '/css/'));
  });

  /******* FILES TASKS *******/

  gulp.task('copy-static', ['clean-static'], function() {
    return gulp.src([conf.sourceDir + '/html/**/*.html', conf.sourceDir + '/img/**/*'], {
        base: conf.sourceDir
      })
      .pipe(gulp.dest(conf.targetDir));
  });


  gulp.task('merge-l10n-messages', ['clean-locales'], function() {
    conf.locales.forEach(function(element, index, array) {
      gulp.src([conf.sourceDir + '/**/l10n/messages_' + element + '.json',
          conf.sourceDir + '/**/l10n/locale_' + element + '.js'
        ], globOptions)
        .pipe(gulpif('*.js', rename(function(path) {
          path.dirname = '';
        })))
        .pipe(gulpif('*.json', extendJSON('messages_' + element + '.json')))
        .pipe(gulp.dest(conf.targetDir + '/l10n'));
    });
  });


  /******* CLEAN TASKS *******/

  gulp.task('clean-locales', function() {
    del.sync(conf.targetDir + '/l10n/*', '!' + conf.targetDir + '/.svn/');
  });

  gulp.task('clean-static', function() {
    del.sync([conf.targetDir + '/html/*/**', conf.targetDir + '/img/*/**']);
  });

  gulp.task('clean-js', function() {
    del.sync(conf.targetDir + '/js/*', '!' + conf.targetDir + '/.svn/');
  });

  gulp.task('clean-css', function() {
    del.sync(conf.targetDir + '/css/*.css', '!' + conf.targetDir + '/.svn/');
  });

  gulp.task('clean-fonts', function() {
    del.sync(conf.targetDir + '/fonts/*', '!' + conf.targetDir + '/.svn/');
  });

  gulp.task('clean-images', function() {
    del.sync(conf.targetDir + '/img/*', '!' + conf.targetDir + '/.svn/');
  });

  gulp.task('clean-index', function() {
    del.sync(conf.targetDir + '/index.html', '!' + conf.targetDir + '/.svn/');
  });

  gulp.task('clean-jstree-images', function() {
    del.sync(conf.targetDir + '/css/*.{png,gif}', '!' + conf.targetDir + '/.svn/');
  });

};
