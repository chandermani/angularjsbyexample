'use strict';

/* Controllers */

angular.module('7minWorkout')
  .controller('WorkoutController', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {
      function WorkoutPlan(args) {
          this.exercises = [];
          this.name = args.name;
          this.title = args.title;
          this.restBetweenExercise = args.restBetweenExercise;
          this.totalWorkoutDuration = function () {
              if (this.exercises.length == 0) return 0;
              var total = 0;
              angular.forEach(this.exercises, function (exercise) {
                  total = total + exercise.duration;
              });
              return this.restBetweenExercise * (this.exercises.length - 1) + total;
          }
      };

      function Exercise(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.instructions = args.instructions;
          this.image = args.image;
          this.related = {};
          this.related.videos = args.videos;
          this.related.variations = args.variations;
          this.nameSound = args.Sound;
          this.procedure = args.procedure;
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
          $interval(function () {
              $scope.workoutTimeRemaining = $scope.workoutTimeRemaining - 1;
          }, 1000, $scope.workoutTimeRemaining);

          startExercise(workoutPlan.exercises.shift());
      };

      var startExercise = function (exercisePlan) {
          $scope.currentExercise = exercisePlan;
          $scope.currentExerciseDuration = 0;
          $interval(function () {
              $scope.currentExerciseDuration = $scope.currentExerciseDuration + 1;
          }, 1000, $scope.currentExercise.duration)
          .then(function () {
              var next = getNextExercise(exercisePlan);
              if (next) {
                  startExercise(next);
              }
              else {
                  $location.path('/finish');
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
                  description: "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
                  image: "img/JumpingJacks.png",
                  videos: ["//www.youtube.com/embed/dmYwZH_BNd0", "//www.youtube.com/embed/BABOdJ-2Z6o", "//www.youtube.com/embed/c4DAnQ6DtF8"],
                  variations: [],
                  procedure: "Assume an erect position, with feet together and arms at your side.\
                            Slightly bend your knees, and propel yourself a few inches into the air.\
                            While in air, bring your legs out to the side about shoulder width or slightly wider.\
                            As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
                            Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent"
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
                  variations: [],
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
                  variations: ["Planche push-ups", "Knuckle push-ups", "Maltese push-ups", "One arm versions"],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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
                  variations: [],
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