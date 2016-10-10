import  './app-ng1.module.js';
import  './config.js';
import  './root.js';
import './shared/directives.js';
import './shared/model.js';
import './shared/services.js';
import './7MinWorkout/services.js';
import './7MinWorkout/directives.js';
import './7MinWorkout/filters.js';
import './7MinWorkout/workout.js';
import './7MinWorkout/workoutvideos.js';
import './WorkoutBuilder/services.js';
import './WorkoutBuilder/directives.js';
import './WorkoutBuilder/exercise.js';
import './WorkoutBuilder/workout.js';
import {ExercisesNavComponent} from './WorkoutBuilder/exercise-nav-component'

import {upgradeAdapter} from './upgrade-adapter';

angular.module('WorkoutBuilder').directive('exerciseNav', upgradeAdapter.downgradeNg2Component(ExercisesNavComponent) as angular.IDirectiveFactory);


upgradeAdapter.upgradeNg1Provider('ExercisePlan');
upgradeAdapter.upgradeNg1Provider('WorkoutPlan');
upgradeAdapter.upgradeNg1Provider('WorkoutService');
upgradeAdapter.upgradeNg1Provider('WorkoutBuilderService');
upgradeAdapter.upgradeNg1Provider('ExerciseBuilderService');
upgradeAdapter.upgradeNg1Provider('ApiKeyAppenderInterceptor');
upgradeAdapter.upgradeNg1Provider('appEvents');
upgradeAdapter.upgradeNg1Provider('workoutHistoryTracker');

angular.element(document).ready(function() {
    upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true });
});
