'use strict';
(function () {
    angular.module('app').factory('state', [function () {
        var state = Object.create(null, {
            lastSearchKey: {
                get: function () {
                    if (typeof this._lastSearchKey === 'undefined' ||
                            this._lastSearchKey === null) {
                        this._lastSearchKey = '';
                    }
                    return this._lastSearchKey;
                },
                set: function (value) { this._lastSearchKey = value }
            },
            employees: {
                get: function () {
                    if (typeof this._employees === 'undefined' ||
                        this._employees === null) {
                        this._employees = [];
                    }
                    return this._employees;
                },
                set: function (value) { this._employees = value }
            }
        });
        return state;
    }]);
}) ();


