/******* MAIN TASKS *******/


module.exports = function (gulp, globOptions) {

    'use strict';

    // Sub-tasks

    require('./stylish')(gulp, globOptions);
    require('./utils')(gulp, globOptions);

    gulp.task('build', ['buildIndex']);


};
