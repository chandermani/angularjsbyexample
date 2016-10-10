System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var ExercisesNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExercisesNavComponent = (function () {
                function ExercisesNavComponent(workoutService, workoutBuilderService) {
                    var _this = this;
                    this.workoutService = workoutService;
                    this.workoutBuilderService = workoutBuilderService;
                    this.workoutService.Exercises.query().$promise.then(function (data) {
                        _this.exercises = data.sort(function (a, b) {
                            if (a.title < b.title)
                                return -1;
                            else if (a.title > b.title)
                                return 1;
                            else
                                return 0;
                        });
                    });
                }
                ExercisesNavComponent.prototype.addExercise = function (exercise) {
                    this.workoutBuilderService.addExercise(exercise);
                };
                ExercisesNavComponent = __decorate([
                    core_1.Component({
                        selector: 'exercise-nav',
                        template: "<div id=\"left-nav-exercises\">\n                <h4>Exercises</h4>\n                <div *ngFor=\"let exercise of exercises\" class=\"row\">\n                    <button class=\"btn btn-info col-sm-12\" (click)=\"addExercise(exercise)\">{{exercise.title}}<span class=\"glyphicon glyphicon-chevron-right\"></span></button>\n                </div>\n            </div>"
                    }),
                    __param(0, core_1.Inject('WorkoutService')),
                    __param(1, core_1.Inject('WorkoutBuilderService')), 
                    __metadata('design:paramtypes', [Object, Object])
                ], ExercisesNavComponent);
                return ExercisesNavComponent;
            }());
            exports_1("ExercisesNavComponent", ExercisesNavComponent);
        }
    }
});
//# sourceMappingURL=exercise-nav-component.js.map