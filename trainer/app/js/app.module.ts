import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { WorkoutBuilderModule } from './WorkoutBuilder/workout-builder.module';
import { UpgradeHelperService } from './upgrade-helper.services';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { ExercisesNavComponent } from './WorkoutBuilder/exercise-nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http,'/i18n/');
}

@NgModule({
    imports: [BrowserModule,
        UpgradeModule,
        WorkoutBuilderModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [StartComponent,
        FinishComponent],
    entryComponents: [StartComponent,
        FinishComponent],
    providers: [
        UpgradeHelperService.upgradeService('ExercisePlan'),
        UpgradeHelperService.upgradeService('WorkoutPlan'),
        UpgradeHelperService.upgradeService('WorkoutService'),
        UpgradeHelperService.upgradeService('WorkoutBuilderService'),
        UpgradeHelperService.upgradeService('ExerciseBuilderService'),
        UpgradeHelperService.upgradeService('ApiKeyAppenderInterceptor'),
        UpgradeHelperService.upgradeService('appEvents'),
        UpgradeHelperService.upgradeService('workoutHistoryTracker')
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['app']);

        var translateService = this.upgrade.injector.get(TranslateService);

        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

        translateService.setDefaultLang('en');

        translateService.use(userLang);
    }
}