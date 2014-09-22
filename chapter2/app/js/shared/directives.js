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
        require: ['ngModel', '?^remoteValidatorClues'],
        link: function (scope, elm, attr, ctrls) {
            var expfn = $parse(attr["remoteValidatorFunction"]);
            var validatorName = attr["remoteValidator"];
            var modelCtrl = ctrls[0];
            var clueCtrl = ctrls[1];
            modelCtrl.$parsers.push(function (value) {
                var result = expfn(scope, { 'value': value });
                if (result.then) {
                    if (clueCtrl) clueCtrl.showClue();
                    result.then(function (data) { //For promise type result object
                        console.log('hiding spinner');
                        if (clueCtrl) clueCtrl.hideClue();
                        modelCtrl.$setValidity(validatorName, data);
                    }, function (error) {
                        console.log('hiding spinner');
                        if (clueCtrl) clueCtrl.hideClue();
                        modelCtrl.$setValidity(validatorName, false);
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

angular.module('app').directive('remoteValidatorClues', ['$compile', function ($compile) {
    return {
        scope: true,
        link: function (scope, element, attr) {
            var e = $compile('<div><label ng-if="busy" class="text-info">checking...</label></div>')(scope);
            element.append(e);
        },
        controller: ['$scope', function ($scope) {
            this.showClue = function () { $scope.busy = true; }
            this.hideClue = function () { $scope.busy = false; }
        }]

    }
}]);