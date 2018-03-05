System.register(["@angular/core", "../../shared/my-audio.directive"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, my_audio_directive_1, WorkoutAudioComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_audio_directive_1_1) {
                my_audio_directive_1 = my_audio_directive_1_1;
            }
        ],
        execute: function () {
            WorkoutAudioComponent = /** @class */ (function () {
                function WorkoutAudioComponent() {
                }
                WorkoutAudioComponent.prototype.stop = function () {
                    this._ticks.stop();
                    this._nextUp.stop();
                    this._halfway.stop();
                    this._aboutToComplete.stop();
                    this._nextUpExercise.stop();
                };
                WorkoutAudioComponent.prototype.ngAfterViewInit = function () {
                    this._ticks.start();
                };
                WorkoutAudioComponent.prototype.resume = function () {
                    this._ticks.start();
                    if (this._nextUp.currentTime > 0 && !this._nextUp.playbackComplete)
                        this._nextUp.start();
                    else if (this._nextUpExercise.currentTime > 0 && !this._nextUpExercise.playbackComplete)
                        this._nextUpExercise.start();
                    else if (this._halfway.currentTime > 0 && !this._halfway.playbackComplete)
                        this._halfway.start();
                    else if (this._aboutToComplete.currentTime > 0 && !this._aboutToComplete.playbackComplete)
                        this._aboutToComplete.start();
                };
                WorkoutAudioComponent.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    if (!this.currentExercise)
                        return;
                    if (this.exerciseTimeRemaining == Math.floor(this.currentExercise.duration / 2)
                        && this.currentExercise.details.name != "rest") {
                        this._halfway.start();
                    }
                    else if (this.exerciseTimeRemaining == 3) {
                        this._aboutToComplete.start();
                    }
                    if (changes['currentExercise']) {
                        if (this.currentExercise.details.name == "rest") {
                            this._nextupSound = this.nextExercise.details.nameSound;
                            setTimeout(function () { return _this._nextUp.start(); }, 2000);
                            setTimeout(function () { return _this._nextUpExercise.start(); }, 3000);
                        }
                    }
                    if (changes["workoutPaused"]) {
                        changes["workoutPaused"].currentValue ? this.stop() : this.resume();
                    }
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], WorkoutAudioComponent.prototype, "nextExercise", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], WorkoutAudioComponent.prototype, "currentExercise", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Number)
                ], WorkoutAudioComponent.prototype, "exerciseTimeRemaining", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Boolean)
                ], WorkoutAudioComponent.prototype, "workoutPaused", void 0);
                __decorate([
                    core_1.ViewChild('ticks'),
                    __metadata("design:type", my_audio_directive_1.MyAudioDirective)
                ], WorkoutAudioComponent.prototype, "_ticks", void 0);
                __decorate([
                    core_1.ViewChild('nextUp'),
                    __metadata("design:type", my_audio_directive_1.MyAudioDirective)
                ], WorkoutAudioComponent.prototype, "_nextUp", void 0);
                __decorate([
                    core_1.ViewChild('nextUpExercise'),
                    __metadata("design:type", my_audio_directive_1.MyAudioDirective)
                ], WorkoutAudioComponent.prototype, "_nextUpExercise", void 0);
                __decorate([
                    core_1.ViewChild('halfway'),
                    __metadata("design:type", my_audio_directive_1.MyAudioDirective)
                ], WorkoutAudioComponent.prototype, "_halfway", void 0);
                __decorate([
                    core_1.ViewChild('aboutToComplete'),
                    __metadata("design:type", my_audio_directive_1.MyAudioDirective)
                ], WorkoutAudioComponent.prototype, "_aboutToComplete", void 0);
                WorkoutAudioComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-audio',
                        templateUrl: '/js/7MinWorkout/workout-audio/workout-audio.component.html'
                    })
                ], WorkoutAudioComponent);
                return WorkoutAudioComponent;
            }());
            exports_1("WorkoutAudioComponent", WorkoutAudioComponent);
        }
    };
});
//# sourceMappingURL=workout-audio.component.js.map