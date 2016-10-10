System.register(['./app-ng1.module.js', './config.js', './root.js', './shared/directives.js', './shared/model.js', './shared/services.js', './7MinWorkout/services.js', './7MinWorkout/directives.js', './7MinWorkout/filters.js', './7MinWorkout/workout.js', './7MinWorkout/workoutvideos.js', './WorkoutBuilder/services.js', './WorkoutBuilder/directives.js', './WorkoutBuilder/exercise.js', './WorkoutBuilder/workout.js', './upgrade-adapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1;
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
            }],
        execute: function() {
            angular.element(document).ready(function () {
                upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true });
            });
        }
    }
});
//# sourceMappingURL=app.js.map