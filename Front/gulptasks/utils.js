/******* DEVELOPER UTILS TASKS *******/

const currentDir = process.cwd();
const gulpDocs = require('gulp-ngdocs');
const nodemon = require('gulp-nodemon');
const args = require('yargs').argv;
const livereload = require('gulp-livereload');
const wiredep = require('wiredep').stream;
const path = require('path');
const taskListing = require('gulp-task-listing');




module.exports = function(gulp, conf, globOptions) {

  'use strict';
  

  gulp.task('help', taskListing.withFilters(null, function(task) {
    let exclude = task.includes('release') || task.includes('mvn') || task.includes('package');
    return exclude;
  }));

  gulp.task('test', ['wiredep-karma'], function(done) {
    startTests(true, done);
  });

  gulp.task('autoTest', ['wiredep-karma'], function(done) {
    startTests(false, done);
  });

  gulp.task('wiredep-karma', function() {
    return gulp.src(currentDir + '/karma.conf.js')
      .pipe(wiredep({
        bowerJson: conf.bowerJson,
        directory: conf.vendorLibrariesPath,
        dependencies: true,
        devDependencies: true
      }))
      .pipe(gulp.dest(currentDir));
  });

  gulp.task('ngdocs', function() {
    return gulp.src('./src/js/app/**/*.js')
      .pipe(gulpDocs.process({
        html5Mode: true,
        title: conf.appName + ' Api'
      }))
      .pipe(gulp.dest('./docs'));
  });

  //TODO Update NODE package >= 0.12.0
  gulp.task('develop', function() {

    let env;
    let port;

    if (args.dev) {
      env = 'dev';
    } else if (args.build) {
      env = 'build';
    } else {
      env = '';
    }

    if (args.port) {
      port = args.port;
    } else {
      port = '';
    }

    livereload.listen();

    nodemon({
        script: currentDir + '/server.js',
        watch: currentDir + '/src',
        env: {
          'NODE_ENV': 'development'
        },
        args: [env ],
        tasks: changedFiles
      })
      .on('restart', [], function() {
        livereload.reload();
      });
  });

  // HELP FUNCTIONS

  function startTests(singleRun, done) {
    let Server = require('karma').server;

    Server.start({
      configFile: currentDir + '/karma.conf.js',
      singleRun: singleRun
    }, done());
  }

  // Use this to define diferent task for files
  function changedFiles(files) {
    let tasks = [];

    files.forEach(function(file) {
      if (path.basename(file).includes('messages') && tasks.indexOf('merge-l10n-messages') === -1) {
        tasks.push('merge-l10n-messages');
      }
    });
    return tasks;
  }


};
