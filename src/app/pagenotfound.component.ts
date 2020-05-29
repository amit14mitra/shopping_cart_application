import { Component } from '@angular/core';

@Component({
    selector: 'pagenotfound',
    template: `
    <img [src]='imgPath' />
    `
})
export class PageNotFoundComponent {
    imgPath:string;
    constructor() {
        this.imgPath = './assets/images/error-404.png'
     }
}
