'use strict';

/* Directives */


angular.module('app.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('appPanelHeight', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                function setPanelHeight() {
                    element.css("max-height", $(window).height() - (element.offset().top + 25));
                }
                setPanelHeight();
                $(window).resize(function () {
                    setPanelHeight();
                });

            }
        };
    });
