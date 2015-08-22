'use strict';

(function () {
    angular.module('app').directive('appSearchBar', [ 'state', function (state) {
        var directiveDefinitionObject = {
            templateUrl: 'directives/searchBar/searchBar.html',
            scope: {
                searchHandler: '=searchHandler'
            },
            // I could not manage to get the event using ng-change,
            // as a workaround i use elem.on(input) in order to get the user event.
            // a side effect was that the searchHandler is not initalized yet, so
            // i handle that by getting the parent's callback name through the passed attribute
            // and then call the parent's callback
            link: function ($scope, element, $attrs, ngModel) {
                $scope.searchKey = state.lastSearchKey;
                $scope.symbol = state.lastSearchKey;
                element.on('input', function(event) {
                    var searchHandlerReflected = $attrs.searchhandler.substring(1, $attrs.searchhandler.length);
                    $scope.searchKey = event.target.value;
                    $scope.$parent[searchHandlerReflected]($scope.searchKey);
                });

            }
        };
        return directiveDefinitionObject;
    }]);
}) ();