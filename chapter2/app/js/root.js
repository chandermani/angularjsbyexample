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
          $scope.history = workoutHistoryTracker.getHistory();

          $scope.ok = function () {
              $modalInstance.close();
          };
      };
      WorkoutHistoryController['$inject'] = ['$scope', '$modalInstance', 'workoutHistoryTracker'];

  }]);
