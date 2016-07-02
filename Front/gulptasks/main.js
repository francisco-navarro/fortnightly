/******* MAIN TASKS *******/


module.exports = function (gulp, globOptions) {

    'use strict';

    // Sub-tasks

    require('./stylish')(gulp, globOptions);

    gulp.task('build', ['buildIndex']);


};
