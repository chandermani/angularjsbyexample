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
    var core_1;
    var MyAudio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyAudio = (function () {
                function MyAudio(element) {
                    this.audioPlayer = element.nativeElement;
                }
                MyAudio.prototype.stop = function () {
                    this.audioPlayer.pause();
                };
                MyAudio.prototype.start = function () {
                    this.audioPlayer.play();
                };
                Object.defineProperty(MyAudio.prototype, "currentTime", {
                    get: function () {
                        return this.audioPlayer.currentTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MyAudio.prototype, "duration", {
                    get: function () {
                        return this.audioPlayer.duration;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MyAudio.prototype, "playbackComplete", {
                    get: function () {
                        return this.duration == this.currentTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                MyAudio = __decorate([
                    core_1.Directive({
                        selector: 'audio',
                        exportAs: 'MyAudio'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MyAudio);
                return MyAudio;
            }());
            exports_1("MyAudio", MyAudio);
        }
    }
});
//# sourceMappingURL=my-audio.js.map