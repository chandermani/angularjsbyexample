import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http'

import {TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import {WorkoutBuilderModule} from './workoutbuilder/workout-builder.module';
import {StartModule} from './start/start.module';
import {FinishModule} from './finish/finish.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    WorkoutBuilderModule,
    StartModule,
    FinishModule],
  providers: [
    TranslateService,
    {
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
      deps: [Http]
    }
  ]
})
export class AppModule { }