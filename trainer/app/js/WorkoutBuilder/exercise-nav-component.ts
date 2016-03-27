import { Component, Inject } from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';

@Component({
  selector: 'exercise-nav',
  template: `<div id="left-nav-exercises">
                <h4>Exercises</h4>
                <div *ngFor="let exercise of exercises" class="row">
                    <button class="btn btn-info col-sm-12" (click)="addExercise(exercise)">{{exercise.title}}<span class="glyphicon glyphicon-chevron-right"></span></button>
                </div>
            </div>`
})
export class ExercisesNavComponent {
  exercises: Array<any>;
  constructor( @Inject('WorkoutService') private workoutService: any, @Inject('WorkoutBuilderService') private workoutBuilderService: any) {
    this.workoutService.Exercises.query().$promise.then((data) => {
      this.exercises = data.sort((a, b) => {
        if (a.title < b.title)
          return -1;
        else if (a.title > b.title)
          return 1;
        else
          return 0;
      })
    });
  }

  addExercise(exercise:any) {
    this.workoutBuilderService.addExercise(exercise);
  }
}

angular.module('WorkoutBuilder').directive('exerciseNav', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(ExercisesNavComponent));
