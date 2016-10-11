import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http'

import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { WorkoutBuilderModule } from './workoutbuilder/workout-builder.module';
import { WorkoutRunnerModule } from './7minworkout/workout-runner.module';
import { StartModule } from './start/start.module';
import { FinishModule } from './finish/finish.module';
import { SharedModule } from './shared/shared.module';

import { Ng2RootComponent } from './ng2-root-component';
import { TopNavComponent } from './root/top-nav-component';
import { WorkoutHistoryComponent } from './root/workout-history-component'
import {VideoPlayerComponent} from './7minworkout/video-player-component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    WorkoutBuilderModule,
    WorkoutRunnerModule,
    StartModule,
    FinishModule,
    SharedModule,
    ModalModule.forRoot(),
    BootstrapModalModule],
  providers: [
    TranslateService,
    {
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
      deps: [Http]
    }
  ],
  declarations: [
    Ng2RootComponent,
    TopNavComponent,
    WorkoutHistoryComponent,
    VideoPlayerComponent],
  entryComponents: [
    WorkoutHistoryComponent, 
    VideoPlayerComponent]
})
export class AppModule { }