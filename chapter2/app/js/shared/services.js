'use strict';

/* Services */
angular.module('app')
    .value("appEvents", {
        workout: { exerciseStarted: "event:workout:exerciseStarted" }
    });

angular.module('app')
    .provider("WorkoutService", function () {
        var apiUrl = "https://api.mongolab.com/api/1/databases/";
        var collectionsUrl = null;
        var database = null;
        var apiKey = null;

        this.configure = function (dbName, key) {
            database = database;
            apiKey = key;
            collectionsUrl = apiUrl + dbName + "/collections";
        }

        this.$get = ['WorkoutPlan', 'Exercise', '$http', '$q', '$resource', function (WorkoutPlan, Exercise, $http, $q, $resource) {
            var service = {};
            var workouts = [];
            var exercises = [];

            service.Exercises = $resource(collectionsUrl + "/exercises/:id", { apiKey: apiKey}, { update: { method: 'PUT' } });

            service.getWorkouts = function () {
                return $http.get(collectionsUrl + "/workouts", { params: { apiKey: apiKey } })
                        .then(function (response) {
                            return response.data.map(function (workout) {
                                return new WorkoutPlan(workout);
                            });
                        });
            };

            service.getWorkout = function (name) {
                return $q.all([service.Exercises.query().$promise, $http.get(collectionsUrl + "/workouts/" + name, { params: { apiKey: apiKey } })])
                    .then(function (response) {
                        var allExercises = response[0];
                        var workout = new WorkoutPlan(response[1].data);

                        angular.forEach(response[1].data.exercises, function (exercise) {
                            exercise.details = allExercises.filter(function (e) { return e.name === exercise.name; })[0];
                        });
                        return workout;
                    });
            };

            service.updateWorkout = function (workout) {
                return service.getWorkout(workout.name)
                    .then(function (original) {
                        if (original) {
                            var workoutToSave = angular.copy(workout);
                            workoutToSave.exercises = workoutToSave.exercises.map(function (exercise) { return { name: exercise.details.name, duration: exercise.duration } });
                            return $http.put(collectionsUrl + "/workouts/" + original.name, workoutToSave, { params: { apiKey: apiKey } });
                        }
                    })
                    .then(function (response) {
                        return workout;
                    });
            };

            service.addWorkout = function (workout) {
                if (workout.name) {
                    var workoutToSave = angular.copy(workout);
                    workoutToSave.exercises = workoutToSave.exercises.map(function (exercise) { return { name: exercise.details.name, duration: exercise.duration } });
                    workoutToSave._id = workoutToSave.name;
                    return $http.post(collectionsUrl + "/workouts", workoutToSave, { params: { apiKey: apiKey } })
                                .then(function (response) {
                                    return workout
                                });
                }
            }

            service.deleteWorkout = function (workoutName) {
                return $http.delete(collectionsUrl + "/workouts/" + workoutName, { params: { apiKey: apiKey } });
            };

            return service;
        }];

        var init = function () {
        };

        init();
    });