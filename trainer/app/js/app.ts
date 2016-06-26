import { provide } from '@angular/core';
import {UpgradeAdapterRef} from '@angular/upgrade';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';
import {BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

import './app.module.js';
import './config.js';
import './root.js';
import './shared/directives.js';
import './shared/model.js';
import './shared/services.js';
import './7MinWorkout/services.js';
import './7MinWorkout/directives.js';
import './7MinWorkout/filters.js';
import './7MinWorkout/workout.js';
import './WorkoutBuilder/services.js';
import './WorkoutBuilder/directives.js';
import './WorkoutBuilder/exercise.js';
import './WorkoutBuilder/workout.js';
import './WorkoutBuilder/exercise-nav-component';

import {upgradeAdapter} from './upgrade-adapter';

import './start/start-component';
import './finish/finish-component';
import './ng1-root-component';
import './ng2-root-component';
import './root/workout-history-component';
import './root/top-nav-component';
import './7MinWorkout/video-panel-component';
import './7MinWorkout/description-panel-component';
import './7MinWorkout/workout-audio-component';

import './shared/filters'

upgradeAdapter.upgradeNg1Provider('ExercisePlan');
upgradeAdapter.upgradeNg1Provider('WorkoutPlan');
upgradeAdapter.upgradeNg1Provider('WorkoutService');
upgradeAdapter.upgradeNg1Provider('WorkoutBuilderService');
upgradeAdapter.upgradeNg1Provider('ExerciseBuilderService');
upgradeAdapter.upgradeNg1Provider('ApiKeyAppenderInterceptor');
upgradeAdapter.upgradeNg1Provider('appEvents');
upgradeAdapter.upgradeNg1Provider('workoutHistoryTracker');

upgradeAdapter.addProvider(provide(TranslateLoader, {
  useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
  deps: [Http]
}));

upgradeAdapter.addProvider(TranslateService);
upgradeAdapter.addProvider(HTTP_PROVIDERS);

upgradeAdapter.addProvider(MODAL_BROWSER_PROVIDERS);
upgradeAdapter.addProvider(BS_MODAL_PROVIDERS);

angular.module('app').factory('ng2TranslateService', upgradeAdapter.downgradeNg2Provider(TranslateService));


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
