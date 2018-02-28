import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesNavComponent } from './exercise-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExercisesNavComponent],
  entryComponents: [ExercisesNavComponent]
})
export class WorkoutBuilderModule { }