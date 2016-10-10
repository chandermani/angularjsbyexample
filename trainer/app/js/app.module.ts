import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WorkoutBuilderModule} from './workoutbuilder/workout-builder.module';
@NgModule({
  imports: [ BrowserModule, WorkoutBuilderModule ]
})
export class AppModule {}