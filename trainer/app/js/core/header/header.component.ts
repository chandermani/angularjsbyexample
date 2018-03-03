import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BSModalContext, Modal } from 'ngx-modialog/plugins/bootstrap';
import { WorkoutHistoryComponent } from '../workout-history/workout-history.component';
import { overlayConfigFactory } from 'ngx-modialog';


@Component({
  selector: 'header',
  templateUrl: `/js/core/header/header.component.html`,
})
export class HeaderComponent {
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