import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

    registerForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.fb.group({
        firstName: ['Abhijeet',Validators.required],
        lastName:[null,Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ])],
        address:this.fb.group({
          city:[null,Validators.required],
          zip:[null,Validators.compose([
            Validators.required,
            Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
          ])]
        }),
        emailAddr:[null,Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*"),
          this.emailDomainValidator])]
      })
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;
    if(email && email.indexOf("@") != -1){
      let [_, domain] = email.split("@");
      if(domain !== "persistent.com"){
        return {
            emailDomain: {
                parseDomain:domain
            }
        }
      }
    }
    return null;
  }

  logForm(v:any){
    console.log(JSON.stringify(v))
  }

}
