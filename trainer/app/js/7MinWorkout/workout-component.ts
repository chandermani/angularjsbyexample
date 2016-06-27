import {Component, Inject} from '@angular/core';
import {WorkoutAudioComponent} from './workout-audio-component'
import {VideoPanelComponent} from './video-panel-component'
import {DescriptionPanelComponent} from './description-panel-component'
import {Exercise, WorkoutPlan} from '../shared/model';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslatePipe} from 'ng2-translate';
import {SecondsToTimePipe} from '../shared/pipes';

@Component({
    selector: 'workout',
    templateUrl: `/js/7MinWorkout/workout-component.tpl.html`,
    directives: [WorkoutAudioComponent, VideoPanelComponent, DescriptionPanelComponent],
    pipes: [TranslatePipe, SecondsToTimePipe]
})
export class WorkoutComponent {
    restExercise: { details: Exercise, duration: number };
    exerciseIntervalPromise: any;
    workoutPlan: any;
    workoutTimeRemaining: number;
    currentExerciseIndex: number;
    currentExercise: { details: Exercise, duration: number };
    currentExerciseDuration: number;
    workoutPaused: boolean;
    exerciseTrackingInterval: number;
    workoutLoaded: boolean = false;
    constructor( @Inject("WorkoutService") private _workoutService: any,
        @Inject("$routeParams") private _routeParams: any,
        @Inject('workoutHistoryTracker') private _tracker: any,
        @Inject('$location') private _location: ng.ILocationService) { }

    startWorkout() {
        this._workoutService
            .getWorkout(this._routeParams.id)
            .then((workout) => {
                this.workoutPlan = workout;
                this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
                this.restExercise = {
                    details: new Exercise({
                        name: "rest",
                        title: "Relax!",
                        description: "Relax a bit!",
                        image: "img/rest.png",
                    }),
                    duration: this.workoutPlan.restBetweenExercise
                };
                this._tracker.startTracking();
                this.currentExerciseIndex = 0;
                this.workoutLoaded=true;
                this.startExercise(this.workoutPlan.exercises[0]);
            });
    };

    ngOnInit() {
        this.startWorkout();
    }

    startExercise(exercisePlan: { details: Exercise, duration: number }) {
        this.currentExercise = exercisePlan;
        this.currentExerciseDuration = 0;

        this.exerciseIntervalPromise = this.startExerciseTimeTracking();
    };

    getNextExercise(): { details: Exercise, duration: number } {
        let nextExercise: { details: Exercise, duration: number } = null;
        if (this.currentExercise === this.restExercise) {
            nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
        }
        else if (this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
            nextExercise = this.restExercise;
        }
        return nextExercise;
    }

    pauseWorkout() {
        clearInterval(this.exerciseTrackingInterval);
        this.workoutPaused = true;
    };

    resumeWorkout() {
        if (!this.workoutPaused) return;
        this.exerciseIntervalPromise = this.startExerciseTimeTracking();
        this.workoutPaused = false;
    };

    pauseResumeToggle() {
        if (this.workoutPaused) {
            this.resumeWorkout();
        }
        else {
            this.pauseWorkout();
        }
    }

    startExerciseTimeTracking() {
        this.exerciseTrackingInterval = window.setInterval(() => {
            if (this.currentExerciseDuration >= this.currentExercise.duration) {
                clearInterval(this.exerciseTrackingInterval);
                if (this.currentExercise !== this.restExercise) {
                    this._tracker.exerciseComplete(this.workoutPlan.exercises[this.currentExerciseIndex].details);
                }
                let next: { details: Exercise, duration: number } = this.getNextExercise();
                if (next) {
                    if (next !== this.restExercise) {
                        this.currentExerciseIndex++;
                    }
                    this.startExercise(next);
                }
                else {
                    this.workoutComplete();
                }
                return;
            }
            ++this.currentExerciseDuration;
            --this.workoutTimeRemaining;
        }, 1000);
    }

    onKeyPressed(event: KeyboardEvent) {
        if (event.which == 80 || event.which == 112) {        // 'p' or 'P' key to toggle pause and resume.
            this.pauseResumeToggle();
        }
    };

    workoutComplete() {
        this._tracker.endTracking(true);
        this._location.path("/finish");
    }
}

angular.module('7minWorkout').directive('workout', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(WorkoutComponent));