'use strict';

(function () {
    var directiveDefinitionObject = {
        templateUrl: 'directives/header/header.html',
        scope: {
            text: '@text',
            back: '=back'
        }
    };
    angular.module('app').directive('appHeader', [ function () {
        return directiveDefinitionObject;
    }]);
}) ();
