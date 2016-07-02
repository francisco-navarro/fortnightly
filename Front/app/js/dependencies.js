(function () {

    'use strict';

    angular.module('app', [
        'app.core',
        'app.widgets',
        'app.dashboard'
    ]).run(function ($rootScope) {
        $rootScope.userName='msanchez';
    });

}());


