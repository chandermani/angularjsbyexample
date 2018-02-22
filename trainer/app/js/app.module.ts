import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { WorkoutBuilderModule } from './WorkoutBuilder/workout-builder.module';
import { UpgradeHelperService } from './upgrade-helper.services';

@NgModule({
    imports: [BrowserModule,
        UpgradeModule,
        WorkoutBuilderModule],
    providers: [
        UpgradeHelperService.upgradeService('ExercisePlan'),
        UpgradeHelperService.upgradeService('WorkoutPlan'),
        UpgradeHelperService.upgradeService('WorkoutService'),
        UpgradeHelperService.upgradeService('WorkoutBuilderService'),
        UpgradeHelperService.upgradeService('ExerciseBuilderService'),
        UpgradeHelperService.upgradeService('ApiKeyAppenderInterceptor'),
        UpgradeHelperService.upgradeService('appEvents'),
        UpgradeHelperService.upgradeService('workoutHistoryTracker'),

    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['app']);
    }
}