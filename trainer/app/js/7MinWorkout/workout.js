'use strict';

/* Controllers */

angular.module('7minWorkout')
  .controller('WorkoutController', ['$scope', '$interval', '$location', 'workoutHistoryTracker', 'appEvents', 'WorkoutService', '$routeParams', 'Exercise', function ($scope, $interval, $location, workoutHistoryTracker, appEvents, WorkoutService, $routeParams, Exercise) {
      var restExercise;
      var exerciseIntervalPromise;
      var startWorkout = function () {
          WorkoutService
              .getWorkout($routeParams.id)
              .then(function (workout) {
                  $scope.workoutPlan = workout;
                  $scope.workoutTimeRemaining = $scope.workoutPlan.totalWorkoutDuration();
                  restExercise = {
                      details: new Exercise({
                          name: "rest",
                          title: "Relax!",
                          description: "Relax a bit!",
                          image: "img/rest.png",
                      }),
                      duration: $scope.workoutPlan.restBetweenExercise
                  };
                  workoutHistoryTracker.startTracking();
                  $scope.currentExerciseIndex = -1;
                  fillImages();
                  startExercise($scope.workoutPlan.exercises[0]);
              });
      };

      var fillImages = function () {
          $scope.exerciseImages = [];
          angular.forEach($scope.workoutPlan.exercises, function (exercise, index) {
              $scope.exerciseImages.push(exercise.details.image);
              if (index < $scope.workoutPlan.exercises.length - 1) $scope.exerciseImages.push("img/rest.png");
          });
      }
      
      var startExercise = function (exercisePlan) {
          $scope.currentExercise = exercisePlan;
          $scope.currentExerciseDuration = 0;

          if (exercisePlan.details.name != 'rest') {
              $scope.currentExerciseIndex++;
              $scope.$emit(appEvents.workout.exerciseStarted, exercisePlan.details);
          }
          exerciseIntervalPromise = startExerciseTimeTracking();
      };

      var getNextExercise = function (currentExercisePlan) {
          var nextExercise = null;
          if (currentExercisePlan === restExercise) {
              nextExercise = $scope.workoutPlan.exercises[$scope.currentExerciseIndex + 1];
          }
          else {
              if ($scope.currentExerciseIndex < $scope.workoutPlan.exercises.length - 1) {
                  nextExercise = restExercise;
              }
          }
          return nextExercise;
      };

      $scope.pauseWorkout = function () {
          $interval.cancel(exerciseIntervalPromise);
          $scope.workoutPaused = true;
      };

      $scope.resumeWorkout = function () {
          exerciseIntervalPromise = startExerciseTimeTracking();
          $scope.workoutPaused = false;
      };

      $scope.pauseResumeToggle = function () {
          if ($scope.workoutPaused) {
              $scope.resumeWorkout();
          }
          else {
              $scope.pauseWorkout();
          }
      }

      var startExerciseTimeTracking = function () {
          var promise = $interval(function () {
              ++$scope.currentExerciseDuration;
              --$scope.workoutTimeRemaining;
          }, 1000, $scope.currentExercise.duration - $scope.currentExerciseDuration);

          promise.then(function () {
              var next = getNextExercise($scope.currentExercise);
              if (next) {
                  $scope.carousel.next();
                  startExercise(next);
              }
              else {
                  workoutComplete();
              }
          }, function (error) {
              console.log('Inteval promise cancelled. Error reason -' + error);
          });
          return promise;
      }

      $scope.onKeyPressed = function (event) {
          if (event.which == 80 || event.which == 112) {        // 'p' or 'P' key to toggle pause and resume.
              $scope.pauseResumeToggle();
          }
      };

      $scope.imageUpdated = function (imageIndex) {
          console.log($scope.exerciseImages[imageIndex]);
      };

      var workoutComplete = function () {
          workoutHistoryTracker.endTracking(true);
          $location.path('/finish');
      }


      //$scope.$watch('currentExerciseDuration', function (nVal) {
      //    if (nVal == $scope.currentExercise.duration) {
      //        var next = getNextExercise($scope.currentExercise);
      //        if (next) {
      //            startExercise(next);
      //        } else {
      //            console.log("Workout complete!")
      //        }
      //    }
      //});

      var init = function () {
          startWorkout();
      };

      init();
  }]);

angular.module('7minWorkout')
  .controller('WorkoutAudioController', ['$scope', '$interval', '$location', '$timeout', function ($scope, $interval, $location, $timeout) {
      $scope.exercisesAudio = [];

      var workoutPlanwatch = $scope.$watch('workoutPlan', function (newValue, oldValue) {
          if (newValue) {
              angular.forEach($scope.workoutPlan.exercises, function (exercise) {
                  $scope.exercisesAudio.push({ src: exercise.details.nameSound, type: "audio/wav" });
              });
              workoutPlanwatch();       //unbind the watch.
          }
      });

      $scope.$watch('currentExercise', function (newValue, oldValue) {
          if (newValue && newValue != oldValue) {
              if ($scope.currentExercise.details.name == 'rest') {
                  $timeout(function () {
                      $scope.nextUpAudio.play();
                  }, 2000);
                  $timeout(function () {
                      $scope.nextUpExerciseAudio.play($scope.currentExerciseIndex + 1, true);
                  }, 3000);
              }
          }
      });

      $scope.$watch('currentExerciseDuration', function (newValue, oldValue) {
          if (newValue) {
              if (newValue == Math.floor($scope.currentExercise.duration / 2) && $scope.currentExercise.details.name != 'rest') {
                  $scope.halfWayAudio.play();
              }
              else if (newValue == $scope.currentExercise.duration - 3) {
                  $scope.aboutToCompleteAudio.play();
              }
          }
      });

      $scope.$watch('workoutPaused', function (newValue, oldValue) {
          if (newValue) {
              $scope.ticksAudio.pause();
              $scope.nextUpAudio.pause();
              $scope.nextUpExerciseAudio.pause();
              $scope.halfWayAudio.pause();
              $scope.aboutToCompleteAudio.pause();
          }
          else {
              $scope.ticksAudio.play();
              if ($scope.halfWayAudio.currentTime > 0 && $scope.halfWayAudio.currentTime < $scope.halfWayAudio.duration) $scope.halfWayAudio.play();
              if ($scope.aboutToCompleteAudio.currentTime > 0 && $scope.aboutToCompleteAudio.currentTime < $scope.aboutToCompleteAudio.duration) $scope.aboutToCompleteAudio.play();
          }
      });

      var init = function () {
      }

      init();

  }]);