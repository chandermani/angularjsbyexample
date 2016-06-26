System.register(['@angular/core', './upgrade-adapter', 'angular2-modal/plugins/bootstrap'], function(exports_1, context_1) {
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
    var core_1, upgrade_adapter_1, bootstrap_1;
    var Ng2RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            }],
        execute: function() {
            Ng2RootComponent = (function () {
                function Ng2RootComponent(_element, modal, viewContainer) {
                    this._element = _element;
                    modal.defaultViewContainer = viewContainer;
                }
                Ng2RootComponent = __decorate([
                    core_1.Component({
                        selector: 'ng2-root',
                        template: "<ng-content></ng-content>",
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, bootstrap_1.Modal, core_1.ViewContainerRef])
                ], Ng2RootComponent);
                return Ng2RootComponent;
            }());
            exports_1("Ng2RootComponent", Ng2RootComponent);
            angular.module('app').directive('ng2Root', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(Ng2RootComponent));
        }
    }
});
//# sourceMappingURL=ng2-root-component.js.map