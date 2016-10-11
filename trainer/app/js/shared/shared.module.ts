import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OrderByPipe, SearchPipe, SecondsToTimePipe} from './pipes';

@NgModule({
  imports: [BrowserModule],
  declarations: [OrderByPipe, SearchPipe, SecondsToTimePipe],
  exports: [OrderByPipe, SearchPipe, SecondsToTimePipe],
})
export class SharedModule { }