import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OrderByPipe, SearchPipe, SecondsToTime} from './pipes';

@NgModule({
  imports: [BrowserModule],
  declarations: [OrderByPipe, SearchPipe, SecondsToTime],
  exports: [OrderByPipe, SearchPipe, SecondsToTime],
})
export class SharedModule { }