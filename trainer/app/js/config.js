angular.module('app').
config(function ($routeProvider, $sceDelegateProvider, WorkoutServiceProvider, $httpProvider, ApiKeyAppenderInterceptorProvider) {

    // IMPORTANT: Set the database name and API Key here before running the application
    ApiKeyAppenderInterceptorProvider.setApiKey("E16WgslFduXHiMAdAg6qcG1KKYx7WNWg");

    $httpProvider.interceptors.push('ApiKeyAppenderInterceptor');

    WorkoutServiceProvider.configure("angularjsbyexample");

    $routeProvider.when('/start', { templateUrl: 'partials/workout/start.html' });
    $routeProvider.when('/workout/:id', { templateUrl: 'partials/workout/workout.html', controller: 'WorkoutController' });
    $routeProvider.when('/finish', { templateUrl: 'partials/workout/finish.html' });

    $routeProvider.when('/builder', {
        redirectTo: '/builder/workouts'
    });

    $routeProvider.when('/builder/workouts', {
        templateUrl: 'partials/workoutbuilder/workouts.html',
        leftNav: 'partials/workoutbuilder/left-nav-main.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'WorkoutListController'
    });
    $routeProvider.when('/builder/exercises', {
        templateUrl: 'partials/workoutbuilder/exercises.html',
        leftNav: 'partials/workoutbuilder/left-nav-main.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller:'ExerciseListController'
    });
    $routeProvider.when('/builder/workouts/new', {
        templateUrl: 'partials/workoutbuilder/workout.html',
        leftNav: 'partials/workoutbuilder/left-nav-exercises.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'WorkoutDetailController',
        resolve: {
            selectedWorkout: ['WorkoutBuilderService', function (WorkoutBuilderService) {
                return WorkoutBuilderService.startBuilding();
            }],
        }
    });
    $routeProvider.when('/builder/workouts/:id', {
        templateUrl: 'partials/workoutbuilder/workout.html',
        leftNav: 'partials/workoutbuilder/left-nav-exercises.html',
        controller: 'WorkoutDetailController',
        topNav: 'partials/workoutbuilder/top-nav.html',
        routeErrorMessage:"Could not load the specific workout!",
        resolve: {
            selectedWorkout: ['WorkoutBuilderService', '$route', '$location', function (WorkoutBuilderService, $route, $location) {
                return WorkoutBuilderService.startBuilding($route.current.params.id);
            }],
        }
    });
    $routeProvider.when('/builder/exercises/new', {
        templateUrl: 'partials/workoutbuilder/exercise.html',
        controller: 'ExerciseDetailController',
        topNav: 'partials/workoutbuilder/top-nav.html'
    });
    $routeProvider.when('/builder/exercises/:id', {
        templateUrl: 'partials/workoutbuilder/exercise.html',
        controller: 'ExerciseDetailController',
        topNav: 'partials/workoutbuilder/top-nav.html'
    });


    $routeProvider.otherwise({ redirectTo: '/start' });

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://*.youtube.com/**']);
});
