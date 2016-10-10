import  './app-ng1.module.js';
import {UpgradeAdapterRef} from '@angular/upgrade';

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

import {upgradeAdapter} from './upgrade-adapter';

import {TranslateService} from 'ng2-translate/ng2-translate';

import {StartComponent} from './start/start-component';
import {FinishComponent} from './finish/finish-component';
import {ExercisesNavComponent} from './WorkoutBuilder/exercise-nav-component'

angular.module('WorkoutBuilder').directive('exerciseNav', upgradeAdapter.downgradeNg2Component(ExercisesNavComponent) as angular.IDirectiveFactory);
angular.module('start').directive('start', upgradeAdapter.downgradeNg2Component(StartComponent) as angular.IDirectiveFactory);
angular.module('finish').directive('finish', upgradeAdapter.downgradeNg2Component(FinishComponent) as angular.IDirectiveFactory);

upgradeAdapter.upgradeNg1Provider('ExercisePlan');
upgradeAdapter.upgradeNg1Provider('WorkoutPlan');
upgradeAdapter.upgradeNg1Provider('WorkoutService');
upgradeAdapter.upgradeNg1Provider('WorkoutBuilderService');
upgradeAdapter.upgradeNg1Provider('ExerciseBuilderService');
upgradeAdapter.upgradeNg1Provider('ApiKeyAppenderInterceptor');
upgradeAdapter.upgradeNg1Provider('appEvents');
upgradeAdapter.upgradeNg1Provider('workoutHistoryTracker');

angular.element(document).ready(function() {
  upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true })
    .ready((updateApp: UpgradeAdapterRef) => {
    var translateService = updateApp.ng2Injector.get(TranslateService);
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use(userLang);
  });
});
