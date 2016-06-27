import { Component, EventEmitter, Input, Injector, provide, Output} from '@angular/core';
import {VideoPlayerComponent, VideoDialogContext} from './video-player-component';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslatePipe} from 'ng2-translate';

@Component({
  selector: 'video-panel',
  templateUrl: `/js/7MinWorkout/video-panel-component.tpl.html`,
  directives: [VideoPlayerComponent],
  pipes: [TranslatePipe]
})
export class VideoPanelComponent {
  @Input() videos: Array<string>;
  @Output() playbackStarted: EventEmitter<any> = new EventEmitter<any>();
  @Output() playbackEnded: EventEmitter<any> = new EventEmitter<any>();
  constructor(private modal: Modal) { }

  playVideo(videoId) {
    this.playbackStarted.emit(null);
    var dialog = this.modal.open(VideoPlayerComponent, new VideoDialogContext(videoId));
    dialog
      .then((d) => d.result)
      .then(() => { this.playbackEnded.emit(null); }, (error) => { this.playbackEnded.emit(null); });
  };
}