import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
//     template:`
//     <h1>Welcome to Hello Component!</h1>
//     <h3>{{message}}</h3>
//  `,
    styles: [`
    h1{
        color:green;
        background-color:yellow;
        text-align:center;
    }
    h3{
        color:red;
    }
    `]
})
export default class HelloComponent {
    message:string; // TypeScript
    constructor(){
        this.message = "Hello All!";
    }
}
