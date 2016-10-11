import { Component, ElementRef, ViewContainerRef } from '@angular/core';
import { upgradeAdapter } from './upgrade-adapter';

import { Overlay } from 'angular2-modal';

@Component({
  selector: 'ng2-root',
  template: `<ng-content></ng-content>`,
})
export class Ng2RootComponent {
  constructor(overlay: Overlay, viewContainer: ViewContainerRef) {
    overlay.defaultViewContainer = viewContainer;
  }
}