(function () {

    'use strict';

    angular.module('app.dashboard', [
        'app.core',
        'app.widgets'
    ]).config(function ($stateProvider, $urlRouterProvider) {
        var state = 'dashboard';
        var config = {
            abstract: false,
            url: '/dashboard',
            templateUrl: 'html/dashboard/index.html'
        };

        $stateProvider.state(state, config);

    });

}());