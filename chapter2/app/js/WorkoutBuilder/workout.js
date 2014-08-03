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
      }

      $scope.$watch('formWorkout.exerciseCount', function (newValue) {
          if (newValue) {
              if ($scope.workout.exercises.length === 0)
                  newValue.$setValidity(newValue.$name, false);
          }
      });

      $scope.$watch('workout.exercises.length', function (newValue, oldValue) {
          if (newValue != oldValue) {
              $scope.formWorkout.exerciseCount.$dirty = true;
              if (newValue > 0)
                  $scope.formWorkout.exerciseCount.$setValidity($scope.formWorkout.exerciseCount.$name, true);
              else
                  $scope.formWorkout.exerciseCount.$setValidity($scope.formWorkout.exerciseCount.$name, false);
          }
      });

      $scope.moveExerciseTo = function (exercise, location) {
          WorkoutBuilderService.moveExerciseTo(exercise, location);
      };

      var init = function () {
          $scope.workout = selectedWorkout;
      };
      init();
  }]);