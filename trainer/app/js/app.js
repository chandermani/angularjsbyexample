System.register(['./app-ng1.module.js', './config.js', './root.js', './shared/directives.js', './shared/model.js', './shared/services.js', './7MinWorkout/services.js', './7MinWorkout/directives.js', './7MinWorkout/filters.js', './7MinWorkout/workout.js', './7MinWorkout/workoutvideos.js', './WorkoutBuilder/services.js', './WorkoutBuilder/directives.js', './WorkoutBuilder/exercise.js', './WorkoutBuilder/workout.js', './upgrade-adapter', 'ng2-translate/ng2-translate', './start/start-component', './finish/finish-component', './WorkoutBuilder/exercise-nav-component', './shared/filters'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1, ng2_translate_1, start_component_1, finish_component_1, exercise_nav_component_1;
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
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (finish_component_1_1) {
                finish_component_1 = finish_component_1_1;
            },
            function (exercise_nav_component_1_1) {
                exercise_nav_component_1 = exercise_nav_component_1_1;
            },
            function (_16) {}],
        execute: function() {
            angular.module('WorkoutBuilder').directive('exerciseNav', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(exercise_nav_component_1.ExercisesNavComponent));
            angular.module('start').directive('start', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(start_component_1.StartComponent));
            angular.module('finish').directive('finish', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(finish_component_1.FinishComponent));
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