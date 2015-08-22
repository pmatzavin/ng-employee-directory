'use strict';

(function () {
    var dependencies = [
        'ui.router'
    ];
    angular.module('app', dependencies)
        .run(
            ['$rootScope', '$state', '$stateParams',
                function ($rootScope, $state, $stateParams) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
        );
}) ();