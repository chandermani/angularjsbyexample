'use strict';

angular.module('app', ['ngRoute', '7minWorkout']).
config(function ($routeProvider, $sceDelegateProvider) {
    $routeProvider.when('/start', { templateUrl: 'partials/start.html' });
    $routeProvider.when('/workout', { template:'<workout-runner></workout-runner>' });
    $routeProvider.when('/finish', { templateUrl: 'partials/finish.html' });
    $routeProvider.otherwise({ redirectTo: '/start' });

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://*.youtube.com/**']);
});

angular.module('7minWorkout', []);