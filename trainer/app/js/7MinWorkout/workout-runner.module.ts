import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { SharedModule } from '../shared/shared.module'

import { VideoPanelComponent } from './video-panel-component';
import { DescriptionPanelComponent } from './description-panel-component';
import { MyAudio } from './my-audio';
import {WorkoutAudioComponent} from './workout-audio-component';
import {WorkoutComponent} from './workout-component';

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule,
        SharedModule],
    declarations: [
        VideoPanelComponent,
        DescriptionPanelComponent,
        MyAudio,
        WorkoutAudioComponent,
        WorkoutComponent]
})
export class WorkoutRunnerModule { }