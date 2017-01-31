/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { DataComponent }  from './data.component';
import { HomeComponent }  from './home.component';
import { EntryComponent }  from './entry.component';
import { FooterComponent } from './footer.component';

import { BackLineService } from './backline.service';

import { dataPipe } from './dataPipe';

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule, JsonpModule],
  declarations: [ HomeComponent, DataComponent, EntryComponent, FooterComponent, dataPipe ],
  exports:      [ dataPipe ],
  bootstrap:    [ HomeComponent, DataComponent, EntryComponent, FooterComponent ],
  providers:    [BackLineService],
})

export class iCommonModule {}
