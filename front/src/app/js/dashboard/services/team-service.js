(function () {


    angular.module('app.dashboard').factory('TeamService', TeamService
    );

    /*@ngInject*/
    function TeamService($http) {
        return {
            getClassification: getClassification
        }

        function getClassification() {
            return $http.get('services/competitions/1/teams').then(function (data) {
                return data.data;
            })
        }
    }
}());
