import {Component, Inject, OnInit} from '@angular/core';
import {OrderByPipe, SearchPipe} from '../shared/pipes';
import {DialogRef, ModalComponent} from 'angular2-modal';

@Component({
  selector: 'workout-history',
  templateUrl: `/js/root/workout-history-component.tpl.html`,
  pipes: [OrderByPipe, SearchPipe]
})
export class WorkoutHistoryComponent implements ModalComponent<any>, OnInit{
  history: Array<any> = [];
  completed: boolean;
  constructor( @Inject('workoutHistoryTracker') private _tracker: any, public dialog: DialogRef<any>) { }

  ngOnInit() {
    this.history = this._tracker.getHistory() .map((item: any) => {
      item.startedOn = new Date(item.startedOn.toString());
      item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
      return item;
    });
  }

  goBack() {
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return false;
  }

  beforeClose(): boolean {
    return false;
  }
}
