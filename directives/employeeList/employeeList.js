'use strict';

(function () {
    var directiveDefinitionObject = {
        templateUrl: 'directives/employeeList/employeeList.html',
        scope: {
            employees: '=employees'
        }
    };
    angular.module('app').directive('appEmployeeList', [ function () {
        return directiveDefinitionObject;
    }]);
}) ();
