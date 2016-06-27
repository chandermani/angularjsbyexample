import { Component, Inject } from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslatePipe} from 'ng2-translate';
import {OrderByPipe, SearchPipe, SecondsToTimePipe} from '../shared/pipes';

@Component({
  selector: 'start',
  templateUrl: '/js/start/start-component.tpl.html',
  pipes: [TranslatePipe, OrderByPipe, SearchPipe, SecondsToTimePipe]
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
angular.module('start').directive('start', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(StartComponent));
