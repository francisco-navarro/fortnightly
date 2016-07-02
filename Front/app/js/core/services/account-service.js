(function () {


    angular.module('app.core').factory('AccountService', AccountService
    );

    /*@ngInject*/
    function AccountService($rootScope, $http) {
        var user;

        return {
            getUserMoney: getUserMoney,
            getUser: getUser
        }
        (function () {
            getUser($rootScope.userName);
        })();

        function getUser(userName) {
            return $http.get('services/user/' + userName).then(function (data) {
                user = data.data;
            })
        }

        function getUser() {
            return user;
        }

        function getUserMoney() {
            return {
                money: user.realAmount,
                virtualMoney: user.virtualAmount
            }
        }
    }
}());