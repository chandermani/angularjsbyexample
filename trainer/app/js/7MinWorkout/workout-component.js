System.register(['@angular/core', '../shared/model'], function(exports_1, context_1) {
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
    var core_1, model_1;
    var WorkoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            WorkoutComponent = (function () {
                function WorkoutComponent(_workoutService, _routeParams, _tracker, _location) {
                    this._workoutService = _workoutService;
                    this._routeParams = _routeParams;
                    this._tracker = _tracker;
                    this._location = _location;
                    this.workoutLoaded = false;
                }
                WorkoutComponent.prototype.startWorkout = function () {
                    var _this = this;
                    this._workoutService
                        .getWorkout(this._routeParams.id)
                        .then(function (workout) {
                        _this.workoutPlan = workout;
                        _this.workoutTimeRemaining = _this.workoutPlan.totalWorkoutDuration();
                        _this.restExercise = {
                            details: new model_1.Exercise({
                                name: "rest",
                                title: "Relax!",
                                description: "Relax a bit!",
                                image: "img/rest.png",
                            }),
                            duration: _this.workoutPlan.restBetweenExercise
                        };
                        _this._tracker.startTracking();
                        _this.currentExerciseIndex = 0;
                        _this.workoutLoaded = true;
                        _this.startExercise(_this.workoutPlan.exercises[0]);
                    });
                };
                ;
                WorkoutComponent.prototype.ngOnInit = function () {
                    this.startWorkout();
                };
                WorkoutComponent.prototype.startExercise = function (exercisePlan) {
                    this.currentExercise = exercisePlan;
                    this.currentExerciseDuration = 0;
                    this.exerciseIntervalPromise = this.startExerciseTimeTracking();
                };
                ;
                WorkoutComponent.prototype.getNextExercise = function () {
                    var nextExercise = null;
                    if (this.currentExercise === this.restExercise) {
                        nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
                    }
                    else if (this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
                        nextExercise = this.restExercise;
                    }
                    return nextExercise;
                };
                WorkoutComponent.prototype.pauseWorkout = function () {
                    clearInterval(this.exerciseTrackingInterval);
                    this.workoutPaused = true;
                };
                ;
                WorkoutComponent.prototype.resumeWorkout = function () {
                    if (!this.workoutPaused)
                        return;
                    this.exerciseIntervalPromise = this.startExerciseTimeTracking();
                    this.workoutPaused = false;
                };
                ;
                WorkoutComponent.prototype.pauseResumeToggle = function () {
                    if (this.workoutPaused) {
                        this.resumeWorkout();
                    }
                    else {
                        this.pauseWorkout();
                    }
                };
                WorkoutComponent.prototype.startExerciseTimeTracking = function () {
                    var _this = this;
                    this.exerciseTrackingInterval = window.setInterval(function () {
                        if (_this.currentExerciseDuration >= _this.currentExercise.duration) {
                            clearInterval(_this.exerciseTrackingInterval);
                            if (_this.currentExercise !== _this.restExercise) {
                                _this._tracker.exerciseComplete(_this.workoutPlan.exercises[_this.currentExerciseIndex].details);
                            }
                            var next = _this.getNextExercise();
                            if (next) {
                                if (next !== _this.restExercise) {
                                    _this.currentExerciseIndex++;
                                }
                                _this.startExercise(next);
                            }
                            else {
                                _this.workoutComplete();
                            }
                            return;
                        }
                        ++_this.currentExerciseDuration;
                        --_this.workoutTimeRemaining;
                    }, 1000);
                };
                WorkoutComponent.prototype.onKeyPressed = function (event) {
                    if (event.which == 80 || event.which == 112) {
                        this.pauseResumeToggle();
                    }
                };
                ;
                WorkoutComponent.prototype.workoutComplete = function () {
                    this._tracker.endTracking(true);
                    this._location.path("/finish");
                };
                WorkoutComponent = __decorate([
                    core_1.Component({
                        selector: 'workout',
                        templateUrl: "/js/7MinWorkout/workout-component.tpl.html",
                    }),
                    __param(0, core_1.Inject("WorkoutService")),
                    __param(1, core_1.Inject("$routeParams")),
                    __param(2, core_1.Inject('workoutHistoryTracker')),
                    __param(3, core_1.Inject('$location')), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], WorkoutComponent);
                return WorkoutComponent;
            }());
            exports_1("WorkoutComponent", WorkoutComponent);
        }
    }
});
//# sourceMappingURL=workout-component.js.map