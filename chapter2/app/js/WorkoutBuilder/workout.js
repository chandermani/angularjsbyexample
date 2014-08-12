'use strict';

angular.module('WorkoutBuilder')
  .controller('WorkoutListController', ['$scope', 'WorkoutService', '$location', function ($scope, WorkoutService, $location) {
      $scope.goto = function (workout) {
          $location.path('/builder/workouts/' + workout.name);
      }
      var init = function () {
          $scope.workouts = WorkoutService.getWorkouts();
      };
      init();
  }]);

angular.module('WorkoutBuilder')
  .controller('WorkoutDetailController', ['$scope', 'WorkoutBuilderService', 'selectedWorkout', function ($scope, WorkoutBuilderService, selectedWorkout) {
      $scope.removeExercise = function (exercise) {
          WorkoutBuilderService.removeExercise(exercise);
      };

      $scope.save = function () {
          if ($scope.formWorkout.$invalid) return;
          $scope.workout = WorkoutBuilderService.save();
          $scope.formWorkout.$setPristine();
      }

      $scope.moveExerciseTo = function (exercise, location) {
          WorkoutBuilderService.moveExerciseTo(exercise, location);
      };

      $scope.deleteWorkout = function () {

      }
      var init = function () {
          $scope.workout = selectedWorkout;
      };
      init();
  }]);