System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Exercise, WorkoutPlan;
    return {
        setters:[],
        execute: function() {
            Exercise = (function () {
                function Exercise(args) {
                    this.related = { videos: [] };
                    this.name = args.name;
                    this.title = args.title;
                    this.description = args.description;
                    this.image = args.image;
                    this.nameSound = args.nameSound;
                    this.procedure = args.procedure;
                    this.related.videos = (args.related && args.related.videos) ? args.related.videos : [];
                }
                return Exercise;
            }());
            exports_1("Exercise", Exercise);
            WorkoutPlan = (function () {
                function WorkoutPlan(args) {
                    this.exercises = args.exercises || [];
                    this.name = args.name;
                    this.title = args.title;
                    this.description = args.description;
                    this.restBetweenExercise = args.restBetweenExercise;
                }
                WorkoutPlan.prototype.totalWorkoutDuration = function () {
                    if (this.exercises.length == 0)
                        return 0;
                    var total = 0;
                    angular.forEach(this.exercises, function (exercise) {
                        total = total + (exercise.duration ? exercise.duration : 0);
                    });
                    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
                };
                return WorkoutPlan;
            }());
            exports_1("WorkoutPlan", WorkoutPlan);
            angular.module('app').factory('Exercise', [function () { return Exercise; }]);
            angular.module('app').factory('WorkoutPlan', [function () { return WorkoutPlan; }]);
        }
    }
});
//# sourceMappingURL=model.js.map