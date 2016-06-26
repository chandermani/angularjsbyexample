import { Component, ElementRef} from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslateService, TranslatePipe} from 'ng2-translate';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {WorkoutHistoryComponent} from './workout-history-component';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap'

@Component({
  selector: 'top-nav',
  templateUrl: `/js/root/top-nav-component.tpl.html`,
  pipes: [TranslatePipe],
  directives: [WorkoutHistoryComponent]
})
export class TopNavComponent {
  language: string;
  constructor(private modal: Modal, private _translate: TranslateService) {
    this._translate.onLangChange.subscribe((event) => {
      this.language = event.lang;
    });
  }

  showWorkoutHistory() {
    let modalOptions = new BSModalContext();
    modalOptions.size = "lg";
    this.modal.open(WorkoutHistoryComponent, modalOptions);
  }

  setLanguage(languageKey: string) {
    this._translate.use(languageKey);
  }
}
angular.module('app').directive('topNav', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(TopNavComponent));
