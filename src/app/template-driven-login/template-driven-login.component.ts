import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

interface User{
  "id": number,
  "name": string,
  "email": string
}
@Component({
  selector: 'app-template-driven-login',
  templateUrl: './template-driven-login.component.html',
  styleUrls: ['./template-driven-login.component.css']
})
export class TemplateDrivenLoginComponent implements OnInit {

  loginForm: FormGroup;  //loginForm is an instance of FormGroup and represents the form itself
  email: FormControl;
  password: FormControl;
  data: Array<User>;

  constructor() {
    this.data=[{
      "id": 1,
      "name": "bhagyashri",
      "email":"bhagyashri@zymr.com"
    }];
  }
  
  login(data){
  }



  add():Array<User>{
    let obj = {"id":2,"name":"abc","email":"abc@zymr.com"};
    this.data.push(obj);
    return this.data;
  }

  update():Array<User>{
    let updateobj = {"id":1,"name":"abc","email":"abc@zymr.com"};
    this.data.forEach((obj)=>{
      // console.log("obj",obj);
      if(obj.id===updateobj.id){
        obj.name="Hey my name updated";
        return obj;
      }
    });
    return this.data;
  }

  delete(){

  }

  find(){

  }

  createFormControls(){
    this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
        this.emailDomainValidator
    ]);
    this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8)
    ])
  };

  emailDomainValidator(control: FormControl) { 
    let email = control.value; 
    if (email && email.indexOf("@") != -1) { 
      let [_, domain] = email.split("@"); 
      if (domain !== "zymr.com") { 
        return {
          emailDomain: {
            parsedDomain: domain
          }
        }
      }
    }
    return null; 
  };

  createForm(){
    this.loginForm = new FormGroup({
        email: this.email,
        password: this.password
    })
  };
  
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}
