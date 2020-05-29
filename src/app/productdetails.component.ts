import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productdetails',
    template: `
            <h3>Product Details for Product Id {{productId}}</h3>
            <div *ngFor='let product of products'>
                <div *ngIf="product.id === productId">
                    <span>{{product.name}}</span>
                    <span>{{product.price}}</span>
                    <span>{{product.category}}</span>
                    <img [src]="product.imgPath" />
                </div>
            </div>
    `,
    styles: [`
        img{
            width:200px;
            height:200px;
        }
        h3, span{
            color:maroon;
            width:auto;
            margin:10px;
        }
        div{
            font-weight:bold;
            font-style:italic;
        }
    `]
})
export class ProductDetailsComponent implements OnInit {
    productId:number;
    products:Product[];

    constructor(
        private productsService:ProductsService,
        private activatedRoute:ActivatedRoute) { 
        this.products = productsService.getProducts();
    }

    ngOnInit(): void { 
        this.activatedRoute.params.subscribe(parameters => {
            alert(parameters);
            this.productId = parseInt(parameters['id']);
        })
    }
}
