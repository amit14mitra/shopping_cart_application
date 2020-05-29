import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
    selector: 'products',
    template: `
    <div id='myHeader'>
          <app-header></app-header>
    </div>
    <!-- Enter Serach: <input type='text' 
    (blur)="doSearch($event.target.value)"/> -->

    <!-- template reference variable -->
    Enter Serach: <input type='text' #search
    (blur)="doSearch(search.value)"/>

    <!-- # template ref variable
    using this variable you can access that 
    component in the template -->
    <!-- <greet #myGreet></greet>
    <h1>{{myGreet.name}}</h1>
    <h1>{{myGreet.greetMsg}}</h1> -->

    <h1>Products List!</h1>
    <table border='3px solid black' align='center'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Image</th>
            <th>Category</th>
            <th colspan='3'>Actions</th>     
        </tr>
        <tr *ngFor="let product of products, let i=index">
            <td>{{product.id}}</td>
            <!-- <td><a href="{{product.id}}">{{product.name}}</a></td> -->
            <td><a [routerLink]="['productdetails',product.id]">{{product.name}}</a></td>
            <td>Rs {{product.price}}/-</td>
            <!-- Interpolation Directive / String Interpolation -->
            <!-- <td><img src="{{product.imgPath}}" /></td>  -->
            <!-- [] Property Binding -->
            <!-- <td><img bind-src="product.imgPath" /></td>  -->
            <td><img [src]="product.imgPath" /></td>
            <td>{{product.category}}</td>
            <td><button [disabled]="!isAdmin">Edit</button></td>
            <td><button *ngIf="isAdmin" (click)="showDetails(product)">Details</button></td>
            <td><addtocart [selectedProduct]="product"></addtocart></td>
        </tr>
    </table>
    <div>
      <router-outlet></router-outlet>
    </div>
    `,
    styles: [`
    img{
      width:auto;
      height:100px;
  }
  table{
      display: 'inline-block';
      float: left;
      margin-left: 50px;
    }
      table caption{
      text-align: center;
    }       
      th{
      text-align: center;
      background-color: peachpuff;
      fontWeight: bold;
    }
      div{
      float: right;
      width: 300px;
      margin-top: 150px;
      margin-right:200px;
    }
    #myHeader{
      position:absolute;
      top:0;
      right:0; 
    }
    `],
    providers:[ProductsService]// Registering the service with DI
})
export class ProductsComponent{
    products:Product[];
    isAdmin:boolean = true;
    constructor(productsService:ProductsService) { 
      this.products = productsService.getProducts();
    }
    showDetails(product){
      alert(product.category+' '+product.name+' Rs '+product.price)
    }
    doSearch(searchStr:string){
      let prodNames:string [] = [];
      for(let i in this.products){
       if(this.products[i].name.toLowerCase()
       .startsWith(searchStr.toLowerCase())){
         prodNames.push(this.products[i].name)
      }
    }
    alert(prodNames)
   }
}
