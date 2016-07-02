(function () {


    angular.module('app.dashboard').factory('TeamService', TeamService
    );

    /*@ngInject*/
    function TeamService($http) {
        return {
            getClassification: getClassification
        }

        function getClassification() {
            return $http.get('http://pakonatsrv.mooo.com:8080/fortnightly/competitions/1/teams').then(function (data) {
                return data.data;
            })
        }
    }
}());