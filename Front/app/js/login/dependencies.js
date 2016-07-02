(function () {

    'use strict';

    angular.module('app.login', [
        'app.core',
        'app.widgets']).config(function ($stateProvider, $urlRouterProvider) {
        var state = 'login';
        var config = {
            abstract: false,
            url: '/login',
            templateUrl: 'html/login/index.html'
        };

        $urlRouterProvider.otherwise(state);
        $stateProvider.state(state, config);

    });

}());