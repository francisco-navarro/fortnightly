(function () {

    'use strict';
    
    function menuController() {
        
    }

    angular.module('app.widgets').component('appMenu', {
        templateUrl: 'html/menu.html',
        controller: menuController,
        bindings: {
            hero: '<',
            onDelete: '&',
            onUpdate: '&'
        }
    });

}());