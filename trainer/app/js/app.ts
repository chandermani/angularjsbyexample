import './app-ng1.module.js';
import './config.js';
import './root.js';
import './shared/directives.js';
import './shared/model.js';
import './shared/services.js';
import './shared/ngx-translate.filter';
import './7MinWorkout/services.js';
import './7MinWorkout/directives.js';
import './7MinWorkout/filters.js';
import './7MinWorkout/workout.js';
import './WorkoutBuilder/services.js';
import './WorkoutBuilder/directives.js';
import './WorkoutBuilder/exercise.js';
import './WorkoutBuilder/workout.js';

import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { ExercisesNavComponent } from './WorkoutBuilder/exercise-nav.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './core/header/header.component.js';
import { VideoPlayerComponent } from './7MinWorkout/video-player/video-player.component.js';


angular.module('WorkoutBuilder')
    .directive('exerciseNav', downgradeComponent({ component: ExercisesNavComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .directive('start', downgradeComponent({ component: StartComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .directive('finish', downgradeComponent({ component: FinishComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .directive('header', downgradeComponent({ component: HeaderComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .directive('videoPlayer', downgradeComponent({ component: VideoPlayerComponent }) as angular.IDirectiveFactory);

angular.module('app')
    .factory('TranslateService', downgradeInjectable(TranslateService));