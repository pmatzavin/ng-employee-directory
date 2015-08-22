'use strict';
(function () {
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', configureLogin]);
    function configureLogin($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'pages/main/main.html',
            controller: ['$scope', 'employeeService', 'state', ctrl]
        });
    }
    function ctrl($scope, employeeService, state) {
        $scope.employees = [];
        if (state.employees.length > 0) {
            $scope.employees = state.employees;
        }
        $scope.searchHandler = function(key) {
            employeeService.findByName(key).done(function (result) {
                $scope.searchKey = key;
                state.lastSearchKey = key;
                state.employees = result;
                $scope.employees = result;
                $scope.$apply();
            }, function (result) {
                $scope.searchKey = key;
                state.lastSearchKey = key;
                state.employees = result;
                $scope.employees = result;
                $scope.$apply();
            });
        };
    }
}) ();
