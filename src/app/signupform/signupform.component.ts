import { Component } from '@angular/core';

@Component({
  selector: 'signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {

  user= {
      name:'Sachin',
      phone:9876543210,
      address:'India',
      email:'Sachin@Cricket.com'
  }
  postForm(){
    alert('Form Submitted!')
  }
}
