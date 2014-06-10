'use strict';

angular.module('app', ['ngRoute', '7minWorkout']).
config(function ($routeProvider) {
    $routeProvider.when('/start', { templateUrl: 'partials/start.html' });
    $routeProvider.when('/workout', { templateUrl: 'partials/workout.html', controller: 'WorkoutController' });
    $routeProvider.when('/finish', { templateUrl: 'partials/finish.html' });
    $routeProvider.otherwise({ redirectTo: '/start' });
});

angular.module('7minWorkout', []);