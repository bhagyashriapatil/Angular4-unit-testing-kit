import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateDrivenLoginComponent } from './template-driven-login/template-driven-login.component';
import { TooltipModule } from 'ngx-bootstrap';
import { CounterComponent } from './counter/counter.component';
  

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenLoginComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [TemplateDrivenLoginComponent]
})
export class AppModule { }
