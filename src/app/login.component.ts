import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <!-- <h3>Login Component!</h3>
        Enter Username: <input type='text' value='{{name}}' /> <br/> 
        Enter Password: <input type='text' value='{{password}}' /> <br/>
        <button (click)='login()'>Login</button>  -->

        <!-- <h3>Login Component!</h3>
        Enter Username: <input type='text' [value]='name' #inputNM
        (change)='update(inputNM.value)'/> <br/> 
        Enter Password: <input type='text' [value]='password'/> <br/>
        <button (click)='login()'>Login</button><br/> <br/> 

        Name in the template is {{inputNM.value}}! <br/>
        Name is {{name}}! -->

        <!-- Two Way Data Binding-->
        <h3>Login Component!</h3>
        Enter Username: <input type='text' [(ngModel)]='name' /> <br/> 
        Enter Password: <input type='text' [(ngModel)]='password' /> <br/>
        <button (click)='login()'>Login</button>
    `
})
export class LoginComponent  {
    name:string=''; // source
    password:string='';
    constructor(private loginService:LoginService,private router:Router) {
         }
    login(){
        console.log(this.name);
        this.loginService.setUserName(this.name);        
        // programatically doing the routing here
        this.router.navigate(['/products']);
    }
    // update(usrName:string):void{
    //     this.name= usrName;
    // }
}
