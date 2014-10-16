'use strict';

angular.module('WorkoutBuilder')
  .controller('ExercisesNavController', ['$scope', 'WorkoutService', 'WorkoutBuilderService', function ($scope, WorkoutService, WorkoutBuilderService) {
      $scope.addExercise = function (exercise) {
          WorkoutBuilderService.addExercise(exercise);
      }
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

angular.module('WorkoutBuilder')
  .controller('ExerciseDetailController', ['$scope', 'WorkoutService', '$routeParams', function ($scope, WorkoutService, $routeParams) {
      var init = function () {
      };
      init();
  }]);