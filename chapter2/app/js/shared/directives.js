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
        restrict: 'A',
        priority: 5,
        require: ['ngModel', '?^busyIndicator'],
        link: function (scope, elm, attr, ctrls) {
            var expfn = $parse(attr["remoteValidatorFunction"]);
            var validatorName = attr["remoteValidator"];
            var modelCtrl = ctrls[0];
            var busyIndicator = ctrls[1];
            modelCtrl.$parsers.push(function (value) {
                var result = expfn(scope, { 'value': value });
                if (result.then) {
                    if (busyIndicator) busyIndicator.show();
                    result.then(function (data) { //For promise type result object
                        if (busyIndicator) busyIndicator.hide();
                        modelCtrl.$setValidity(validatorName, data);
                    }, function (error) {
                        console.log('hiding spinner');
                        if (busyIndicator) busyIndicator.hide();
                        modelCtrl.$setValidity(validatorName, true);
                    });
                }
                return value;
            });
        }
    }
}]);

angular.module('app').directive('updateOnBlur', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        priority: '100',
        link: function (scope, elm, attr, ngModelCtrl) {
            if (attr.type === 'radio' || attr.type === 'checkbox') return;
            elm.unbind('input').unbind('keydown').unbind('change');
            elm.bind('blur', function () {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(elm.val());
                });
            });
        }
    };
});

angular.module('app').directive('busyIndicator', ['$compile', '$animate', function ($compile, $animate) {
    return {
        scope: true,
        transclude: true,
        template: '<div><div ng-transclude=""></div><label ng-show="busy" class="text-info glyphicon glyphicon-refresh spin"></label></div>',
        link: function (scope, element, attr) {
            $animate.enabled(false, element)
        },
        controller: ['$scope', function ($scope) {
            this.show = function () { $scope.busy = true; }
            this.hide = function () { $scope.busy = false; }
        }]

    }
}]);