import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from 'ng2-translate/ng2-translate';

import {StartComponent} from './start-component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  imports: [BrowserModule, FormsModule, TranslateModule, SharedModule],
  declarations: [StartComponent]
})
export class StartModule { }