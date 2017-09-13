import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

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
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [CounterComponent]
})
export class AppModule { }
