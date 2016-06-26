System.register(['@angular/core', '../upgrade-adapter', 'angular2-modal', 'angular2-modal/plugins/bootstrap', '@angular/platform-browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, upgrade_adapter_1, angular2_modal_1, bootstrap_1, platform_browser_1;
    var VideoDialogContext, VideoPlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            VideoDialogContext = (function (_super) {
                __extends(VideoDialogContext, _super);
                function VideoDialogContext(videoId) {
                    _super.call(this);
                    this.videoId = videoId;
                }
                return VideoDialogContext;
            }(bootstrap_1.BSModalContext));
            exports_1("VideoDialogContext", VideoDialogContext);
            VideoPlayerComponent = (function () {
                function VideoPlayerComponent(dialog, sanitizer) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.youtubeUrlPrefix = '//www.youtube.com/embed/';
                }
                VideoPlayerComponent.prototype.ngOnInit = function () {
                    this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.dialog.context.videoId);
                };
                VideoPlayerComponent.prototype.ok = function () {
                    this.dialog.close();
                };
                VideoPlayerComponent.prototype.beforeDismiss = function () {
                    return false;
                };
                VideoPlayerComponent.prototype.beforeClose = function () {
                    return false;
                };
                VideoPlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'video-player',
                        template: "<div class=\"modal-header\">\n                <h3 class=\"modal-title\">Workout Video</h3>\n            </div>\n            <div class=\"modal-body\">\n                <iframe width=\"100%\" height=\"480\" [src]=\"videoId\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"ok()\">OK</button>\n            </div>",
                    }), 
                    __metadata('design:paramtypes', [angular2_modal_1.DialogRef, platform_browser_1.DomSanitizationService])
                ], VideoPlayerComponent);
                return VideoPlayerComponent;
            }());
            exports_1("VideoPlayerComponent", VideoPlayerComponent);
            angular.module('7minWorkout').directive('videoPlayer', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(VideoPlayerComponent));
        }
    }
});
//# sourceMappingURL=video-player-component.js.map