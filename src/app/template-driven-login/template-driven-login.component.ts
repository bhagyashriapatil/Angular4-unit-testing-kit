import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-template-driven-login',
  templateUrl: './template-driven-login.component.html',
  styleUrls: ['./template-driven-login.component.css']
})
export class TemplateDrivenLoginComponent implements OnInit {

  myform: FormGroup;  //myform is an instance of FormGroup and represents the form itself
  email: FormControl;
  password: FormControl;

  constructor() {}
  
  ngOnInit() {
  }

}
