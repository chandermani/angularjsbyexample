angular.module('app').
config(function ($routeProvider, $sceDelegateProvider, WorkoutServiceProvider, $httpProvider, ApiKeyAppenderInterceptorProvider, $translateProvider, $translatePartialLoaderProvider) {

    // IMPORTANT: Set the database name and API Key here before running the application
    ApiKeyAppenderInterceptorProvider.setApiKey("E16WgslFduXHiMAdAg6qcG1KKYx7WNWg");

    $httpProvider.interceptors.push('ApiKeyAppenderInterceptor');

    WorkoutServiceProvider.configure("angularjsbyexample");

    $routeProvider.when('/start', {
        templateUrl: 'partials/workout/start.html',
        resolve: {
            depends: ['$ocLazyLoad', function ($ocLazyLoad) {
                // lazy load files for an existing module
                return $ocLazyLoad.load([{
                    name: 'WorkoutBuilder',
                    files: ['/js/workoutbuilder/workout.js']
                }]);
            }],
        }
    });

    $routeProvider.when('/workout/:id', {
        templateUrl: 'partials/workout/workout.html',
        controller: 'WorkoutController',
        resolve: {
            depends: ['$ocLazyLoad', function ($ocLazyLoad) {
                // lazy load files for an existing module
                return $ocLazyLoad.load([{
                    name: 'WorkoutBuilder',
                    files: ['/js/workoutbuilder/workout.js']
                },
                {
                    name: '7minWorkout',
                    files: ['/js/7minworkout/directives.js', '/js/7minworkout/services.js', '/js/7minworkout/workout.js', '/js/7minworkout/workoutvideos.js']
                }, {
                    files: ['//cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.2/owl.carousel.js']
                },
                {
                    name: 'mediaPlayer',
                    files: ['/js/vendor/angular-media-player.js']
                }]);
            }],
        }
    });

    $routeProvider.when('/finish', { templateUrl: 'partials/workout/finish.html' });

    $routeProvider.when('/builder', {
        redirectTo: '/builder/workouts'
    });

    var workoutBuilderModuleLoader = ['$ocLazyLoad', function ($ocLazyLoad) {
        // lazy load files for an existing module
        return $ocLazyLoad.load([{
            name: 'WorkoutBuilder',
            files: ['/js/workoutbuilder/directives.js', '/js/workoutbuilder/exercise.js', '/js/workoutbuilder/services.js', '/js/workoutbuilder/workout.js']
        },
        ]);
    }];

    $routeProvider.when('/builder/workouts', {
        templateUrl: 'partials/workoutbuilder/workouts.html',
        leftNav: 'partials/workoutbuilder/left-nav-main.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'WorkoutListController',
        resolve: {
            depends: workoutBuilderModuleLoader,
        }
    });
    $routeProvider.when('/builder/exercises', {
        templateUrl: 'partials/workoutbuilder/exercises.html',
        leftNav: 'partials/workoutbuilder/left-nav-main.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'ExerciseListController',
        resolve: {
            depends: workoutBuilderModuleLoader,
        }
    });
    $routeProvider.when('/builder/workouts/new', {
        templateUrl: 'partials/workoutbuilder/workout.html',
        leftNav: 'partials/workoutbuilder/left-nav-exercises.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'WorkoutDetailController',
        resolve: {
            selectedWorkout: ['$ocLazyLoad', '$injector', '$route', function ($ocLazyLoad, $injector, $route) {
                return $ocLazyLoad.load([{
                    name: 'WorkoutBuilder',
                    files: ['/js/workoutbuilder/directives.js', '/js/workoutbuilder/exercise.js', '/js/workoutbuilder/services.js', '/js/workoutbuilder/workout.js']
                }]).then(function () {
                    return $injector.get("WorkoutBuilderService").startBuilding();
                });
            }]
        }
    });
    $routeProvider.when('/builder/workouts/:id', {
        templateUrl: 'partials/workoutbuilder/workout.html',
        leftNav: 'partials/workoutbuilder/left-nav-exercises.html',
        controller: 'WorkoutDetailController',
        topNav: 'partials/workoutbuilder/top-nav.html',
        routeErrorMessage: "Could not load the specific workout!",
        resolve: {
            selectedWorkout: ['$ocLazyLoad', '$injector', '$route', function ($ocLazyLoad, $injector, $route) {
                return $ocLazyLoad.load([{
                    name: 'WorkoutBuilder',
                    files: ['/js/workoutbuilder/directives.js', '/js/workoutbuilder/exercise.js', '/js/workoutbuilder/services.js', '/js/workoutbuilder/workout.js']
                }]).then(function () {
                    return $injector.get("WorkoutBuilderService").startBuilding($route.current.params.id);
                });
            }]
        }
    });
    $routeProvider.when('/builder/exercises/new', {
        templateUrl: 'partials/workoutbuilder/exercise.html',
        controller: 'ExerciseDetailController',
        topNav: 'partials/workoutbuilder/top-nav.html',
        resolve: {
            depends: workoutBuilderModuleLoader,
        }
    });
    $routeProvider.when('/builder/exercises/:id', {
        templateUrl: 'partials/workoutbuilder/exercise.html',
        controller: 'ExerciseDetailController',
        resolve: {
            depends: workoutBuilderModuleLoader,
        },
        topNav: 'partials/workoutbuilder/top-nav.html'
    });


    $routeProvider.otherwise({ redirectTo: '/start' });

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://*.youtube.com/**']);

    $translatePartialLoaderProvider.addPart('workoutrunner');
    $translatePartialLoaderProvider.addPart('workoutbuilder');
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/i18n/{lang}/{part}.json'
    });

    $translateProvider.preferredLanguage('en');
});
