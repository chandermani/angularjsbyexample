import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'audio',
    exportAs: 'MyAudio'
})
export class MyAudioDirective {

    private audioPlayer: HTMLAudioElement;
    constructor(element: ElementRef) {
        this.audioPlayer = element.nativeElement;
    }

    stop() {
        this.audioPlayer.pause();
    }
    start() {
        this.audioPlayer.play();
    }
    get currentTime(): number {
        return this.audioPlayer.currentTime;
    }
    get duration(): number {
        return this.audioPlayer.duration;
    }
    get playbackComplete() {
        return this.duration == this.currentTime;
    }


}
