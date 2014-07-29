'use strict';

angular.module('WorkoutBuilder')
  .controller('ExercisesNavController', ['$scope', 'WorkoutService', function ($scope, WorkoutService) {
      var init = function () {
          $scope.exercises = WorkoutService.getExercises();
      };
      init();
  }]);

angular.module('WorkoutBuilder')
  .controller('ExerciseListController', ['$scope', 'WorkoutService', '$location', function ($scope, WorkoutService, $location) {
      $scope.goto = function (exercise) {
          $location.path('/builder/exercises/' + exercise.name);
      }
      var init = function () {
          $scope.exercises = WorkoutService.getExercises();
      };
      init();
  }]);