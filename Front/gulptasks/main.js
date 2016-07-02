/******* MAIN TASKS *******/


module.exports = function(gulp, conf, globOptions) {

  'use strict';

  // Sub-tasks
  require('./vetFiles')(gulp, conf, globOptions);
  require('./utils')(gulp, conf, globOptions);
  require('./stylish')(gulp, conf, globOptions);

  // Task that show all the task available
  gulp.task('default',['help']);  

  gulp.task('build', ['buildIndex', 'buildCss', 'buildFiles']);

  //TODO this task should change his name to vet(change all jenkins FRONT jobs)
  gulp.task('ci', ['jshint-src', 'jshint-test', 'htmlhint-src', 'test']);

};
