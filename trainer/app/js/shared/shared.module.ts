import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { SecondsToTimePipe } from './seconds-to-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    SearchPipe,
    SecondsToTimePipe
  ],
  exports: [
    OrderByPipe,
    SearchPipe,
    SecondsToTimePipe
  ]
})
export class SharedModule { }
