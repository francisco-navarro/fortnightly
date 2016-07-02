(function () {

        'use strict';

        function dashboardClassificationCtrl(TeamService) {
            var self = this;
            console.log(TeamService.getClassification());
            self.teams = [{"id": "1", "name": "ALBACETE", "position": "1", "points": "3"}, {
                "id": "2",
                "name": "PUCELA",
                "position": "2",
                "points": "1"
            }];
        }

        angular.module('app.dashboard').component('dashboardClass', {
            templateUrl: 'html/dashboard/dashboard-classification.html',
            controller: dashboardClassificationCtrl,
            bindings: {}
        });

    }());