'use strict';

/* directives */
angular.module('app').directive('ngConfirm', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var message = attrs.ngConfirmMessage || 'Are you sure?';
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngConfirm);
                }
            });
        }
    }
}]);
