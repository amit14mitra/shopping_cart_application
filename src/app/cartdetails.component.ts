import { Component } from '@angular/core';
import {Product} from './product';
import { CartService } from './cart.service';

@Component({
    selector: 'cartdetails',
    template: `       
        <h1>Cart Details!</h1>
        <table border="3px solid black" align="center">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Product Image</th>
                <th>Category</th>
                <th>Action</th>     
            </tr>
            <tr *ngFor="let product of cartProducts, let i=index">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td><img [src]="product.imgPath" /></td>
                <td>{{product.category}}</td>
                <td><button (click)='remove(i)'>Remove</button></td>
            </tr>
        </table>
    `,
    styles: [`
    img{
        width:auto;
        height:130px;
    }
    th{
        text-align:center;
        background-color:peachpuff;
        fontWeight:bold;
    }`],
   // providers:[CartService]
})
export class CartDetailsComponent {
    cartProducts:Product[];
    constructor(private cartService:CartService) {
        cartService.cartBroadCaster.subscribe(res => {
            this.cartProducts = JSON.parse(res);
        })        
        this.cartProducts = cartService.getCartItems();                
     }
     remove(index):void{
         this.cartService.removeFromCart(index);
     }
}