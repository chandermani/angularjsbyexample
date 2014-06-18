'use strict';

/* Controllers */

angular.module('7minWorkout')
  .controller('WorkoutController', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {
      function WorkoutPlan(args) {
          this.exercises = [];
          this.name = args.name;
          this.title = args.title;
          this.restBetweenExercise = args.restBetweenExercise;
      };

      function Exercise(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.instructions = args.instructions;
          this.image = args.image;
          this.related = {};
          this.related.videos = args.videos;
          this.nameSound = args.Sound;
      }

      var restExercise;
      var workoutPlan;
      var startWorkout = function () {
          workoutPlan = createWorkout();
          restExercise = {
              exercise: new Exercise({
                  name: "rest",
                  title: "Rest",
                  description: "Discription about resting :)",
                  image: "img/rest.png",

              }),
              duration: workoutPlan.restBetweenExercise
          };
          startExercise(workoutPlan.exercises.shift());
      };

      var startExercise = function (exercisePlan) {
          $scope.currentExercise = exercisePlan;
          $scope.currentExerciseDuration = 0;
          $interval(function () {
              ++$scope.currentExerciseDuration;
          }, 1000, $scope.currentExercise.duration)
          .then(function () {
              var next = getNextExercise(exercisePlan);
              if (next) {
                  startExercise(next);
              }
              else {
                  console.log("Workout complete!")
              }
          });
      };
      var getNextExercise = function (currentExercisePlan) {
          var nextExercise = null;
          if (currentExercisePlan === restExercise) {
              nextExercise = workoutPlan.exercises.shift();
          }
          else {
              if (workoutPlan.exercises.length != 0) {
                  nextExercise = restExercise;
              }
          }
          return nextExercise;
      };

      // Uncomment this watch and comment the code inside .then function callback in startExercise function to see watch in action.
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

      var createWorkout = function () {
          var workout = new WorkoutPlan({
              name: "7minWorkout",
              title: "7 Minute Workout",
              restBetweenExercise: 10
          });

          workout.exercises.push({
              exercise: new Exercise({
                  name: "jumpingJacks",
                  title: "Jumping Jacks",
                  description: "Jumping Jacks.",
                  image: "img/JumpingJacks.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "wallSit",
                  title: "Wall Sit",
                  description: "Wall Sit.",
                  image: "img/wallsit.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "img/pushup.png",
                  videos: ["https://www.youtube.com/watch?v=Eh00_rniF8E", "https://www.youtube.com/watch?v=ZWdBqFLNljc", "https://www.youtube.com/watch?v=UwRLWMcOdwI", "https://www.youtube.com/watch?v=ynPwl6qyUNM", "https://www.youtube.com/watch?v=OicNTT2xzMI"],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "crunches",
                  title: "Abdominal Crunches",
                  description: "Abdominal Crunches.",
                  image: "img/crunches.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "stepUpOntoChair",
                  title: "Step Up Onto Chair",
                  description: "Step Up Onto Chair.",
                  image: "img/stepUpOntoChair.jpeg",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "squat",
                  title: "Squat",
                  description: "Squat.",
                  image: "img/squat.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "tricepdips",
                  title: "Tricep Dips On Chair",
                  description: "Tricep Dips On Chair.",
                  image: "img/tricepdips.jpg",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "plank",
                  title: "Plank",
                  description: "Plank.",
                  image: "img/plank.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "highKnees",
                  title: "High Knees",
                  description: "High Knees.",
                  image: "img/highknees.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "lunges",
                  title: "Lunges",
                  description: "Lunges.",
                  image: "img/lunges.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "pushupNRotate",
                  title: "Pushup And Rotate",
                  description: "Pushup And Rotate.",
                  image: "img/pushupNRotate.jpg",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "sidePlank",
                  title: "Side Plank",
                  description: "Side Plank.",
                  image: "img/sideplank.png",
                  videos: [],
                  procedure: ""
              }),
              duration: 30
          });
          return workout;
      }

      var init = function () {
          startWorkout();
      };

      init();
  }]);