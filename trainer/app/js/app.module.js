System.register(['@angular/core', '@angular/platform-browser', '@angular/http', 'ng2-translate/ng2-translate', './workoutbuilder/workout-builder.module', './start/start.module', './finish/finish.module'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, ng2_translate_1, workout_builder_module_1, start_module_1, finish_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (workout_builder_module_1_1) {
                workout_builder_module_1 = workout_builder_module_1_1;
            },
            function (start_module_1_1) {
                start_module_1 = start_module_1_1;
            },
            function (finish_module_1_1) {
                finish_module_1 = finish_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            ng2_translate_1.TranslateModule.forRoot(),
                            workout_builder_module_1.WorkoutBuilderModule,
                            start_module_1.StartModule,
                            finish_module_1.FinishModule],
                        providers: [
                            ng2_translate_1.TranslateService,
                            {
                                provide: ng2_translate_1.TranslateLoader,
                                useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'i18n', '.json'); },
                                deps: [http_1.Http]
                            }
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map