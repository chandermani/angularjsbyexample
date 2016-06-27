System.register(['@angular/core', '../upgrade-adapter', 'ng2-translate', '../shared/pipes'], function(exports_1, context_1) {
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
    var core_1, upgrade_adapter_1, ng2_translate_1, pipes_1;
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent(workoutService) {
                    this.workoutService = workoutService;
                }
                StartComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.workoutService.getWorkouts().then(function (data) {
                        _this.workouts = data;
                    });
                };
                StartComponent = __decorate([
                    core_1.Component({
                        selector: 'start',
                        templateUrl: '/js/start/start-component.tpl.html',
                        pipes: [ng2_translate_1.TranslatePipe, pipes_1.OrderByPipe, pipes_1.SearchPipe, pipes_1.SecondsToTimePipe]
                    }),
                    __param(0, core_1.Inject('WorkoutService')), 
                    __metadata('design:paramtypes', [Object])
                ], StartComponent);
                return StartComponent;
            }());
            exports_1("StartComponent", StartComponent);
            angular.module('start').directive('start', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(StartComponent));
        }
    }
});
//# sourceMappingURL=start-component.js.map