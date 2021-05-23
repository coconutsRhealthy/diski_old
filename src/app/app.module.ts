import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from "angular-datatables";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiskiPageComponent } from './diski-page/diski-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
