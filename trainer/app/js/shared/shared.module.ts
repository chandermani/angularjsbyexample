import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { MyAudioDirective } from './my-audio.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    SearchPipe,
    SecondsToTimePipe,
    MyAudioDirective
  ],
  exports: [
    OrderByPipe,
    SearchPipe,
    SecondsToTimePipe,
    MyAudioDirective
  ]
})
export class SharedModule { }
