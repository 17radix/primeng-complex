import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PCTabsModule} from 'primeng-complex'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PCTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
