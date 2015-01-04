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

// Angular validator pre Angular 1.3. Use this if you are on an earlier branch
//angular.module('app').directive('remoteValidator', ['$parse', function ($parse) {
//    return {
//        require: 'ngModel',
//        link: function (scope, elm, attr, ngModelCtrl) {
//            var expfn = $parse(attr["remoteValidatorFunction"]);
//            var validatorName = attr["remoteValidator"];
//            ngModelCtrl.$parsers.push(function (value) {
//                var result = expfn(scope, { 'value': value });
//                if (result.then) {
//                    result.then(function (data) { //For promise type result object
//                        ngModelCtrl.$setValidity(validatorName, true);
//                    }, function (error) {
//                        ngModelCtrl.$setValidity(validatorName, false);
//                    });
//                }
//                return value;
//            });
//        }
//    }
//}]);

// Angular validator using Angular 1.3. Use this if you are on 1.3
angular.module('app').directive('remoteValidator', ['$parse', function ($parse) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ngModelCtrl) {
            var expfn = $parse(attr["remoteValidatorFunction"]);
            var validatorName = attr["remoteValidator"];
            ngModelCtrl.$asyncValidators[validatorName] = function (value) {
                return expfn(scope, { 'value': value });
            }
        }
    }
}]);
