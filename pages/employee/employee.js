'use strict';
(function () {
    angular.module('app').config(['$stateProvider', route]);
    function route($stateProvider) {
        $stateProvider.state('employees', {
            url: '/employees/{id}',
            templateUrl: 'pages/employee/employee.html',
            controller: ['$scope', '$stateParams', 'employeeService', ctrl]
        });
    }
    function ctrl($scope, $stateParams, employeeService) {
        $scope.employee = {};
        employeeService.findById($stateParams.id).done(function (result) {
            $scope.employee = result;
        }, function (result) {
            $scope.employee = result;
        })
    }
}) ();

