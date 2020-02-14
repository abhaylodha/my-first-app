import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssignmentComponent1Component } from './assignment-component1/assignment-component1.component';
import { AssignmentComponent2Component } from './assignment-component2/assignment-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent1Component,
    AssignmentComponent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
