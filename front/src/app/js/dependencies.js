(function () {

    'use strict';

    angular.module('app', [
        'app.core',
        'app.widgets',
        'app.dashboard',
        'app.login'
    ]).run(function ($rootScope) {
        $rootScope.userName='msanchez';
    });

}());


