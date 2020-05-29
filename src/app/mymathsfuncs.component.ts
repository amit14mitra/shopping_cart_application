import { Component} from '@angular/core';

@Component({
    selector: 'mymaths',
    template: `
    <h1>Using mymathsfunc component of mymaths module!<h1>
    <h1>Multiplication of 4 and 5 is </h1> <b>{{mult(4,5)}}</b>!
    `,
    styles: [``]
})
export class MyMathsFuncsComponent {
    constructor() { }
    mult(x,y){
        return x*y;
    }
}
