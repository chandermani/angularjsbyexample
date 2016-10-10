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

import {upgradeAdapter} from './upgrade-adapter';

angular.element(document).ready(function() {
    upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true });
});
