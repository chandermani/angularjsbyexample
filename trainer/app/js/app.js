'use strict';

angular.module('app', ['ngRoute', 'ngSanitize', '7minWorkout', 'WorkoutBuilder', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate','ngMessages', 'ngResource', 'oc.lazyLoad', 'pascalprecht.translate']);

angular.module('7minWorkout', []);
angular.module('WorkoutBuilder', []);