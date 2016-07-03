(function () {

    'use strict';

    function dashboardWidgetMoneyCtrl(AccountService) {
        var money;
        AccountService.getUserMoney().then(function (data) {
            money = data;
        });
    }

    angular.module('app.dashboard').component('dashboardWidgetMoney', {
        templateUrl: 'html/dashboard/dashboard-widgets-money.html',
        controller: dashboardWidgetMoneyCtrl,
        bindings: {}
    });

}());