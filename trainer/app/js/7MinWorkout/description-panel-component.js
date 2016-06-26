System.register(['@angular/core', '../upgrade-adapter', 'ng2-translate'], function(exports_1, context_1) {
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
    var core_1, upgrade_adapter_1, ng2_translate_1;
    var DescriptionPanelComponent;
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
            }],
        execute: function() {
            DescriptionPanelComponent = (function () {
                function DescriptionPanelComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DescriptionPanelComponent.prototype, "description", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DescriptionPanelComponent.prototype, "steps", void 0);
                DescriptionPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'exercise-description',
                        templateUrl: '/js/7MinWorkout/description-panel-component.tpl.html',
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DescriptionPanelComponent);
                return DescriptionPanelComponent;
            }());
            exports_1("DescriptionPanelComponent", DescriptionPanelComponent);
            angular.module('7minWorkout').directive('descriptionPanel', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(DescriptionPanelComponent));
        }
    }
});
//# sourceMappingURL=description-panel-component.js.map