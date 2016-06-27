import {Component, Input, ViewChild, SimpleChange} from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslatePipe} from 'ng2-translate';
import {MyAudio} from './my-audio'

@Component({
    selector: 'workout-audio',
    template: `<audio #ticks="MyAudio" loop src="content/tick10s.mp3"></audio>
                <audio #nextUp="MyAudio" src="content/nextup.mp3"></audio>
                <audio #nextUpExercise="MyAudio" [src]="_nextupSound"></audio>
                <audio #halfway="MyAudio" src="content/15seconds.wav"></audio>
                <audio #aboutToComplete="MyAudio" src="content/321.wav"></audio>`,
    directives: [MyAudio]
})
export class WorkoutAudioComponent {
    @Input() nextExercise: any;
    @Input() currentExercise: any;
    @Input() exerciseTimeRemaining: number;
    @Input() workoutPaused: boolean;
    private _nextupSound: string;

    @ViewChild('ticks') private _ticks: MyAudio;
    @ViewChild('nextUp') private _nextUp: MyAudio;
    @ViewChild('nextUpExercise') private _nextUpExercise: MyAudio;
    @ViewChild('halfway') private _halfway: MyAudio;
    @ViewChild('aboutToComplete') private _aboutToComplete: MyAudio;

    stop() {
        this._ticks.stop();
        this._nextUp.stop();
        this._halfway.stop();
        this._aboutToComplete.stop();
        this._nextUpExercise.stop();
    }

    ngAfterViewInit() {
        this._ticks.start();
    }

    resume() {
        this._ticks.start();
        if (this._nextUp.currentTime > 0 && !this._nextUp.playbackComplete) this._nextUp.start();
        else if (this._nextUpExercise.currentTime > 0 && !this._nextUpExercise.playbackComplete) this._nextUpExercise.start();
        else if (this._halfway.currentTime > 0 && !this._halfway.playbackComplete) this._halfway.start();
        else if (this._aboutToComplete.currentTime > 0 && !this._aboutToComplete.playbackComplete) this._aboutToComplete.start();
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (!this.currentExercise) return;
        if (this.exerciseTimeRemaining == Math.floor(this.currentExercise.duration / 2)
            && this.currentExercise.details.name != "rest") {
            this._halfway.start();
        }
        else if (this.exerciseTimeRemaining == 3) {
            this._aboutToComplete.start();
        }

        if (changes['currentExercise']) {
            if (this.currentExercise.details.name == "rest") {
                this._nextupSound = this.nextExercise.details.nameSound;
                setTimeout(() => this._nextUp.start(), 2000);
                setTimeout(() => this._nextUpExercise.start(), 3000);
            }
        }

        if (changes["workoutPaused"]) {
            changes["workoutPaused"].currentValue ? this.stop() : this.resume();
        }
    }
}