import { Component } from '@angular/core';

@Component({
    selector: 'pipedemo',
    template: `
        <h2>Product Name</h2>
        {{productName}}<br/>
        {{productName | lowercase}}<br/>
        {{productName | uppercase}}<br/>

        <h2>Today - Date</h2>
        Date:- {{today}} <br/>
        Date:- {{today | date}} <br/>
        Date:- {{today | date:'medium'}} <br/>
        Date:- {{today | date:'short'}} <br/>
        Date:- {{today | date:'shortDate'}} <br/>
        Date:- {{today | date:'MMM/dd/yyyy'}} <br/>
        Date:- {{today | date:format}} <br/>

        <h2>Currency</h2>

        Price: {{price}} <br/>
        Price: {{price | currency}} <br/>
        Price: {{price | currency:'INR'}} <br/>
        Price: {{price | currency:'EUR'}} <br/>

        <h2>Custom Pipes</h2>
        <h2>Product Name</h2>
        {{productName}}<br/>
        {{productName | reversestr}}<br/>
        {{productName | beforeafter}}<br/>
        {{productName | beforeafter:" This '":"' is awesome!"}}<br/>
    `
})
export class PipeDemoComponent {
    productName:string;
    today:Date;
    price:number;
    toggle:boolean;
    constructor() { 
        this.productName = "XYZ Mobile"
        this.today = new Date()
        this.price = 234.56
        this.toggle = false;
    }

    get format(){
        return this.toggle?'shortDate':'longDate';
    }
}
