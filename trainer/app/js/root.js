'use strict';

angular.module('app')
  .controller('RootController', ['$scope', '$modal', function ($scope, $modal) {
      $scope.showWorkoutHistory = function () {
          var dailog = $modal.open({
              templateUrl: 'partials/workout-history.html',
              controller: WorkoutHistoryController,
              size: 'lg'
          });
      };

      var WorkoutHistoryController = function ($scope, $modalInstance, workoutHistoryTracker) {
          $scope.search = {};
          $scope.search.completed = '';
          $scope.history = workoutHistoryTracker.getHistory();

          $scope.ok = function () {
              $modalInstance.close();
          };
      };
      WorkoutHistoryController['$inject'] = ['$scope', '$modalInstance', 'workoutHistoryTracker'];

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
