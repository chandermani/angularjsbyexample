import './app-ng1.module.js';
import './config.js';
import './root.js';
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

import { downgradeComponent } from '@angular/upgrade/static';
import { ExercisesNavComponent } from './WorkoutBuilder/exercise-nav.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';


angular.module('WorkoutBuilder')
    .directive('exerciseNav', downgradeComponent({ component: ExercisesNavComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .directive('start', downgradeComponent({ component: StartComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .directive('finish', downgradeComponent({ component: FinishComponent }) as angular.IDirectiveFactory);