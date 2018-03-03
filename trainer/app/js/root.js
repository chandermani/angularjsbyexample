'use strict';

angular.module('app')
  .controller('RootController', ['$scope', function ($scope) {
      $scope.$on('$routeChangeSuccess', function (event, current, previous) {
          $scope.currentRoute = current;
          $scope.routeHasError = false;
      });

      $scope.$on('$routeChangeError', function (event, current, previous, error) {
          if (error.status === 404 && current.originalPath === "/builder/workouts/:id") {
              $scope.routeHasError = true;
              $scope.routeError = current.routeErrorMessage;
          }
      });
  }]);
