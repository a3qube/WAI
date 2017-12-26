import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParamsListComponent } from './params-list/params-list.component';
import { ParamDetailsComponent } from './param-details/param-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ParamsListComponent,
    ParamDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
