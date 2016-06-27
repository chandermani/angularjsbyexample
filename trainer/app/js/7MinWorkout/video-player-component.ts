import { Component, Inject, OnInit} from '@angular/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslateService, TranslatePipe} from 'ng2-translate';
import {DialogRef, ModalComponent} from 'angular2-modal';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap'
import {Ng2RootComponent} from '../ng2-root-component';
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';

export class VideoDialogContext extends BSModalContext {
  constructor(public videoId: string) {
    super();
  }
}

@Component({
  selector: 'video-player',
  template: `<div class="modal-header">
                <h3 class="modal-title">Workout Video</h3>
            </div>
            <div class="modal-body">
                <iframe width="100%" height="480" [src]="videoId" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" (click)="ok()">OK</button>
            </div>`,
})
export class VideoPlayerComponent implements ModalComponent<VideoDialogContext>, OnInit{
  context: VideoDialogContext;
  videoId: SafeResourceUrl;
  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  constructor(public dialog: DialogRef<VideoDialogContext>, private sanitizer: DomSanitizationService) { }

  ngOnInit() {
    this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.dialog.context.videoId);
  }

  ok() {
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return false;
  }

  beforeClose(): boolean {
    return false;
  }
}