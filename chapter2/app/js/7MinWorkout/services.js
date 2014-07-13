'use strict';

/* Services */
angular.module('7minWorkout')
    .factory('workoutHistoryTracker', ['$rootScope', 'appEvents', function ($rootScope, appEvents) {
        var maxHistoryItems = 20;   //We only track for last 20 exercise
        var workoutHistory = [];
        var currentWorkoutLog = null;
        var service = {};

        function WorkoutLogEntry(args) {
            this.startedOn = args.startedOn;
            this.endedOn = args.endedOn;
            this.lastExercise = args.lastExercise;
            this.exercisesDone = 0;
            this.completed = false;
        };

        service.startTracking = function () {
            currentWorkoutLog = new WorkoutLogEntry({ startedOn: new Date() });
            if (workoutHistory.length >= maxHistoryItems) {     
                workoutHistory.shift();
            }
            workoutHistory.push(currentWorkoutLog);
        };

        $rootScope.$on(appEvents.workout.exerciseStarted, function (e, args) {
            currentWorkoutLog.lastExercise = args.title;
            ++currentWorkoutLog.exercisesDone;
        });

        service.endTracking = function () {
            currentWorkoutLog.completed = true;
            currentWorkoutLog.endedOn = new Date();
            currentWorkoutLog = null;
        };

        service.getHistory = function () {
            return workoutHistory;
        }

        return service;
    }]);

angular.module('7minWorkout')
    .value("appEvents", {
        workout: { exerciseStarted: "event:workout:exerciseStarted" }
    });