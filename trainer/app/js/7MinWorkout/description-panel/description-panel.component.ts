import { Component, Input } from '@angular/core';

@Component({
    selector: 'exercise-description',
    templateUrl: '/js/7MinWorkout/description-panel/description-panel.component.html',
})
export class DescriptionPanelComponent {
    @Input() description: string;
    @Input() steps: string;
}
