import { Component, Inject } from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';

@Component({
  selector: 'start',
  templateUrl: '/js/start/start-component.tpl.html',
})
export class StartComponent {
  workouts: Array<any>;
  search: string;
  constructor( @Inject('WorkoutService') private workoutService) { }
  ngOnInit() {
    this.workoutService.getWorkouts().then((data) => {
      this.workouts = data;
    });
  }
}
