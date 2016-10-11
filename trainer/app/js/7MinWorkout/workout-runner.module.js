System.register(['@angular/core', '@angular/platform-browser', 'ng2-translate/ng2-translate', '../shared/shared.module', './video-panel-component', './description-panel-component', './my-audio', './workout-audio-component', './workout-component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, ng2_translate_1, shared_module_1, video_panel_component_1, description_panel_component_1, my_audio_1, workout_audio_component_1, workout_component_1;
    var WorkoutRunnerModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (video_panel_component_1_1) {
                video_panel_component_1 = video_panel_component_1_1;
            },
            function (description_panel_component_1_1) {
                description_panel_component_1 = description_panel_component_1_1;
            },
            function (my_audio_1_1) {
                my_audio_1 = my_audio_1_1;
            },
            function (workout_audio_component_1_1) {
                workout_audio_component_1 = workout_audio_component_1_1;
            },
            function (workout_component_1_1) {
                workout_component_1 = workout_component_1_1;
            }],
        execute: function() {
            WorkoutRunnerModule = (function () {
                function WorkoutRunnerModule() {
                }
                WorkoutRunnerModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            ng2_translate_1.TranslateModule,
                            shared_module_1.SharedModule],
                        declarations: [
                            video_panel_component_1.VideoPanelComponent,
                            description_panel_component_1.DescriptionPanelComponent,
                            my_audio_1.MyAudio,
                            workout_audio_component_1.WorkoutAudioComponent,
                            workout_component_1.WorkoutComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WorkoutRunnerModule);
                return WorkoutRunnerModule;
            }());
            exports_1("WorkoutRunnerModule", WorkoutRunnerModule);
        }
    }
});
//# sourceMappingURL=workout-runner.module.js.map