import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        WorkoutHistoryComponent
    ],
    exports: [
        HeaderComponent,
        WorkoutHistoryComponent
    ],
    entryComponents: [
        HeaderComponent,
        WorkoutHistoryComponent
    ]
})
export class CoreModule { }
