import { Component, ElementRef } from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap'
import { overlayConfigFactory } from 'angular2-modal'

import { WorkoutHistoryComponent } from './workout-history-component';

@Component({
  selector: 'top-nav',
  templateUrl: `/js/root/top-nav-component.tpl.html`,
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
    this.modal.open(WorkoutHistoryComponent, overlayConfigFactory(modalOptions));
  }

  setLanguage(languageKey: string) {
    this._translate.use(languageKey);
  }
}