'use strict';

/* Controllers */

angular.module('7minWorkout.controllers', [])
  .controller('WorkoutController', ['$scope', '$interval', function ($scope, $interval) {
      console.log('WorkoutController created.');
      function WorkoutPlan() {
          this.exercises = [];
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "imageUrl",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          this.restBetweenExercise = 10;
      }
      function Exercise(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.instructions = args.instructions;
          this.image = args.image;
          this.related = {};
          this.related.videos = args.videos;
          this.related.variations = args.variations;
      }

      var restExercise;

      var startWorkout = function () {
          $scope.workoutPlan = new WorkoutPlan();
          restExercise = {
              exercise: new Exercise({
                  name: "rest",
                  title: "Rest",
                  description: "Discription about resting :)",
                  image: "imageUrl",

              }),
              duration: $scope.workoutPlan.restBetweenExercise
          };
          startExercise($scope.workoutPlan.exercises.shift());
      };

      //$scope.$watch('currentExercise', function (newValue, oldValue) {
      //    if (newValue && newValue != oldValue) {
      //        $scope.currentExerciseDuration = 0;
      //        $interval(function () {
      //            $scope.currentExerciseDuration = $scope.currentExerciseDuration + 1;
      //        }, 1000, $scope.currentExercise.duration)
      //        .then(function () {
      //            var nextExercise = null;
      //            if ($scope.currentExercise === restExercise) {
      //                nextExercise = $scope.workoutPlan.exercises.shift();
      //            }
      //            else {
      //                if ($scope.workoutPlan.exercises.length == 0) {
      //                    $scope.workoutComplete = true;
      //                }
      //                else {
      //                    nextExercise = restExercise;
      //                }
      //            }
      //            $scope.currentExercise = nextExercise;
      //        });
      //    }
      //});

      var startExercise = function (exercisePlan) {
          console.log('starting exercise:' + exercisePlan.exercise.name);
          $scope.currentExercise = exercisePlan;
          $scope.currentExerciseDuration = 0;
          $interval(function () {
              $scope.currentExerciseDuration = $scope.currentExerciseDuration + 1;
          }, 1000, $scope.currentExercise.duration)
          .then(function () {
              var nextPlan = getNextExercise(exercisePlan);
              if (nextPlan) {
                  startExercise(nextPlan);
              }
              else {
                  $scope.workoutComplete = true;
              }
          });
      }

      var getNextExercise = function (currentExercisePlan) {
          var nextExercise = null;
          if (currentExercisePlan === restExercise) {
              nextExercise = $scope.workoutPlan.exercises.shift();
          }
          else {
              if ($scope.workoutPlan.exercises.length != 0) {
                  nextExercise = restExercise;
              }
          }
          return nextExercise;
      }
      //$scope.$watch('currentExerciseDuration', function (newValue, oldValue) {
      //    if (newValue && newValue != oldValue) {
      //        if (newValue == $scope.currentExercise.duration) {
      //            var nextExercise = null;
      //            if ($scope.currentExercise === restExercise) {
      //                nextExercise = $scope.workoutPlan.exercises.shift();
      //            }
      //            else {
      //                if ($scope.workoutPlan.exercises.length == 0) {
      //                    $scope.workoutComplete = true;
      //                }
      //                else {
      //                    nextExercise = restExercise;
      //                }
      //            }
      //            $scope.currentExercise = nextExercise;
      //        }
      //    }
      //});

      var init = function () {
          startWorkout();
      };

      init();
  }]);