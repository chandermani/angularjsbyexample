import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from 'ng2-translate/ng2-translate';

import {SharedModule} from '../shared/shared.module'

import {VideoPanelComponent} from './video-panel-component';

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule,
        SharedModule],
    declarations: [VideoPanelComponent]
})
export class WorkoutRunnerModule { }