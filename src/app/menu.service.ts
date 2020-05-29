import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItems:string[];
    constructor(){
        // this data could be taken from server
        // by making call to RESTful service        
        this.menuItems =
            ['Greet','Login','Products','CartDetails','Profile', 'MyMaths','Photos','SignupForm','ReactiveForm','PipeDemo']      
    }
}