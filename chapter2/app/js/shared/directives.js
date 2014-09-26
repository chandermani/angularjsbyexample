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

angular.module('app').directive('remoteValidator', ['$parse', function ($parse) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ngModelCtrl) {
            var expfn = $parse(attr["remoteValidatorFunction"]);
            var validatorName = attr["remoteValidator"];
            ngModelCtrl.$parsers.push(function (value) {
                var result = expfn(scope, { 'value': value });
                if (result.then) {
                    result.then(function (data) { //For promise type result object
                        ngModelCtrl.$setValidity(validatorName, data);
                    }, function (error) {
                        ngModelCtrl.$setValidity(validatorName, false);
                    });
                }
                return value;
            });
        }
    }
}]);
