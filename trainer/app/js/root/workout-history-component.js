System.register(['@angular/core', '../shared/pipes', 'angular2-modal'], function(exports_1, context_1) {
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
    var core_1, pipes_1, angular2_modal_1;
    var WorkoutHistoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            }],
        execute: function() {
            WorkoutHistoryComponent = (function () {
                function WorkoutHistoryComponent(_tracker, dialog) {
                    this._tracker = _tracker;
                    this.dialog = dialog;
                    this.history = [];
                }
                WorkoutHistoryComponent.prototype.ngOnInit = function () {
                    this.history = this._tracker.getHistory().map(function (item) {
                        item.startedOn = new Date(item.startedOn.toString());
                        item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
                        return item;
                    });
                };
                WorkoutHistoryComponent.prototype.goBack = function () {
                    this.dialog.close();
                };
                WorkoutHistoryComponent.prototype.beforeDismiss = function () {
                    return false;
                };
                WorkoutHistoryComponent.prototype.beforeClose = function () {
                    return false;
                };
                WorkoutHistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-history',
                        templateUrl: "/js/root/workout-history-component.tpl.html",
                        pipes: [pipes_1.OrderByPipe, pipes_1.SearchPipe]
                    }),
                    __param(0, core_1.Inject('workoutHistoryTracker')), 
                    __metadata('design:paramtypes', [Object, angular2_modal_1.DialogRef])
                ], WorkoutHistoryComponent);
                return WorkoutHistoryComponent;
            }());
            exports_1("WorkoutHistoryComponent", WorkoutHistoryComponent);
        }
    }
});
//# sourceMappingURL=workout-history-component.js.map