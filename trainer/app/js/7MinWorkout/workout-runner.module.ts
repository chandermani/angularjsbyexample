import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module'

import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule],
    declarations: [
        VideoPlayerComponent,
        VideoDialogComponent
    ],
    entryComponents: [
        VideoPlayerComponent,
        VideoDialogComponent
    ]
})
export class WorkoutRunnerModule { }