import {Component, Input} from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslatePipe} from 'ng2-translate';

@Component({
  selector: 'exercise-description',
  templateUrl: '/js/7MinWorkout/description-panel-component.tpl.html',
  pipes: [TranslatePipe]
})
export class DescriptionPanelComponent {
  @Input() description: string;
  @Input() steps: string;
}