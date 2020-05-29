import { Component, Input } from '@angular/core';
import { Product } from './product';
import { CartService } from './cart.service';

@Component({
    selector: 'addtocart',
    template: `
    <button (click)="addProduct()">Add To Cart!</button>`,
    styles: [``],
   // providers:[CartService]// register cartserview with Angular DI
})
export class AddToCartComponent {
    
    @Input()
    selectedProduct:Product;
    constructor(private cartService:CartService) {}
    addProduct(){
        alert('Adding Product! '+this.selectedProduct.name)
        this.cartService.addToCart(this.selectedProduct);
    }
}
