import {Component, Inject, OnInit} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'ngx-modialog';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';


@Component({
  selector: 'workout-history',
  templateUrl: `/js/core/workout-history/workout-history.component.html`,
})
export class WorkoutHistoryComponent implements ModalComponent<BSModalContext>, OnInit{
  history: Array<any> = [];
  completed: boolean;
  constructor( @Inject('workoutHistoryTracker') private _tracker: any, public dialog: DialogRef<BSModalContext>) { }

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
}
