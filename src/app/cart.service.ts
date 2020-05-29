// import { Injectable } from '@angular/core';
// import { Product } from './product';

// @Injectable()
// export class CartService {
//     private cart:Product[];
//     constructor(){
//         this.cart = [];
//     }
//     addToCart(product:Product):void{
//         this.cart = this.cart.concat(product);
//         console.log('Added to cart '+product.name)
//     }
//     getCartItems():Product[]{        
//         return this.cart;
//     }
// }


import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable()
export class CartService {
    cart:Product[];// Javascript Object

    @SessionStorage()
    myCart:string; // JSON String

    // Subject
    private cartSource = new Subject<string>();

    // BroadCaster
    cartBroadCaster = this.cartSource.asObservable();

    constructor(){
        console.log(this.myCart);
        if(this.myCart){
            this.cart = JSON.parse(this.myCart);
        }
        else{
            this.cart = new Array<Product>();// this.cart = [];
        }
    }
    addToCart(product:Product):void{
        this.cart = this.cart.concat(product);// immutable state
        console.log('Added to the cart '+product.name);
        this.myCart = JSON.stringify(this.cart);
        
        // Notify all the subscribers
        this.cartSource.next(this.myCart);
    }
    getCartItems():Product[]{        
        return this.cart;
    }
    removeFromCart(index:number):void{
        this.cart.splice(index,1);
        console.log('Removed from the cart!');
        this.myCart = JSON.stringify(this.cart);

        // Notify all the subscribers
        this.cartSource.next(this.myCart);
    }
}