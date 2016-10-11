System.register(['./app-ng1.module.js', './config.js', './root.js', './shared/directives.js', './shared/model.js', './shared/services.js', './7MinWorkout/services.js', './7MinWorkout/filters.js', './7MinWorkout/workout.js', './WorkoutBuilder/services.js', './WorkoutBuilder/directives.js', './WorkoutBuilder/exercise.js', './WorkoutBuilder/workout.js', './ng1-root-component', './shared/filters', './upgrade-adapter', 'ng2-translate/ng2-translate', './7MinWorkout/description-panel-component', './start/start-component', './finish/finish-component', './WorkoutBuilder/exercise-nav-component', './7minworkout/video-panel-component', './ng2-root-component', './root/top-nav-component', './7minworkout/description-panel-component', './7minworkout/workout-audio-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1, ng2_translate_1, start_component_1, finish_component_1, exercise_nav_component_1, video_panel_component_1, ng2_root_component_1, top_nav_component_1, description_panel_component_1, workout_audio_component_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (_10) {},
            function (_11) {},
            function (_12) {},
            function (_13) {},
            function (_14) {},
            function (_15) {},
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (_16) {},
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (finish_component_1_1) {
                finish_component_1 = finish_component_1_1;
            },
            function (exercise_nav_component_1_1) {
                exercise_nav_component_1 = exercise_nav_component_1_1;
            },
            function (video_panel_component_1_1) {
                video_panel_component_1 = video_panel_component_1_1;
            },
            function (ng2_root_component_1_1) {
                ng2_root_component_1 = ng2_root_component_1_1;
            },
            function (top_nav_component_1_1) {
                top_nav_component_1 = top_nav_component_1_1;
            },
            function (description_panel_component_1_1) {
                description_panel_component_1 = description_panel_component_1_1;
            },
            function (workout_audio_component_1_1) {
                workout_audio_component_1 = workout_audio_component_1_1;
            }],
        execute: function() {
            angular.module('WorkoutBuilder').directive('exerciseNav', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(exercise_nav_component_1.ExercisesNavComponent));
            angular.module('start').directive('start', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(start_component_1.StartComponent));
            angular.module('finish').directive('finish', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(finish_component_1.FinishComponent));
            angular.module('7minWorkout').directive('videoPanel', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(video_panel_component_1.VideoPanelComponent));
            angular.module('app').directive('ng2Root', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(ng2_root_component_1.Ng2RootComponent));
            angular.module('app').directive('topNav', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(top_nav_component_1.TopNavComponent));
            angular.module('7minWorkout').directive('descriptionPanel', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(description_panel_component_1.DescriptionPanelComponent));
            angular.module('7minWorkout').directive('workoutAudio', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(workout_audio_component_1.WorkoutAudioComponent));
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ExercisePlan');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutPlan');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutBuilderService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ExerciseBuilderService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ApiKeyAppenderInterceptor');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('appEvents');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('workoutHistoryTracker');
            angular.module('app').factory('ng2TranslateService', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(ng2_translate_1.TranslateService));
            angular.element(document).ready(function () {
                upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true })
                    .ready(function (updateApp) {
                    var translateService = updateApp.ng2Injector.get(ng2_translate_1.TranslateService);
                    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
                    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translateService.setDefaultLang('en');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    translateService.use(userLang);
                });
            });
        }
    }
});
//# sourceMappingURL=app.js.map