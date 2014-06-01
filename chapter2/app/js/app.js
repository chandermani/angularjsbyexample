'use strict';


// Declare app level module which depends on filters, and services
angular.module('7minWorkout', [
  'ngRoute',
  '7minWorkout.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/start', { templateUrl: 'partials/start.html'});
    $routeProvider.when('/workout', { templateUrl: 'partials/workout.html', controller: 'WorkoutController' });
    $routeProvider.otherwise({ redirectTo: '/start' });
}]);
