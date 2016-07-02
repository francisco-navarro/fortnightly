(function () {

        'use strict';

        function dashboardClassificationCtrl(TeamService) {
            var self = this;
            TeamService.getClassification().then(function(response){
               debugger;
               self.teams = response;
             });
        }

        angular.module('app.dashboard').component('dashboardClass', {
            templateUrl: 'html/dashboard/dashboard-classification.html',
            controller: dashboardClassificationCtrl,
            bindings: {}
        });

    }());
