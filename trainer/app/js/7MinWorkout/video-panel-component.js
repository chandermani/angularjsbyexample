System.register(['@angular/core', './video-player-component', 'angular2-modal/plugins/bootstrap', '../upgrade-adapter', 'ng2-translate'], function(exports_1, context_1) {
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
    var core_1, video_player_component_1, bootstrap_1, upgrade_adapter_1, ng2_translate_1;
    var VideoPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (video_player_component_1_1) {
                video_player_component_1 = video_player_component_1_1;
            },
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            VideoPanelComponent = (function () {
                function VideoPanelComponent(modal) {
                    this.modal = modal;
                    this.playbackStarted = new core_1.EventEmitter();
                    this.playbackEnded = new core_1.EventEmitter();
                }
                VideoPanelComponent.prototype.playVideo = function (videoId) {
                    var _this = this;
                    this.playbackStarted.emit(null);
                    var dialog = this.modal.open(video_player_component_1.VideoPlayerComponent, new video_player_component_1.VideoDialogContext(videoId));
                    dialog
                        .then(function (d) { return d.result; })
                        .then(function () { _this.playbackEnded.emit(null); }, function (error) { _this.playbackEnded.emit(null); });
                };
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], VideoPanelComponent.prototype, "videos", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VideoPanelComponent.prototype, "playbackStarted", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VideoPanelComponent.prototype, "playbackEnded", void 0);
                VideoPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'video-panel',
                        templateUrl: "/js/7MinWorkout/video-panel-component.tpl.html",
                        directives: [video_player_component_1.VideoPlayerComponent],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [bootstrap_1.Modal])
                ], VideoPanelComponent);
                return VideoPanelComponent;
            }());
            exports_1("VideoPanelComponent", VideoPanelComponent);
            angular.module('7minWorkout').directive('videoPanel', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(VideoPanelComponent));
        }
    }
});
//# sourceMappingURL=video-panel-component.js.map