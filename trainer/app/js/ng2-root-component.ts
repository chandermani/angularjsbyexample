import { Component, ElementRef, provide, ViewContainerRef } from '@angular/core';
import { upgradeAdapter } from './upgrade-adapter';

import {Modal} from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'ng2-root',
  template: `<ng-content></ng-content>`,
})
export class Ng2RootComponent {
  constructor(private _element: ElementRef, modal: Modal, viewContainer: ViewContainerRef) {
    modal.defaultViewContainer = viewContainer;
  }
}
angular.module('app').directive('ng2Root', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(Ng2RootComponent));
