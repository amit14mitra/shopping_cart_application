import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {
    private products:Product[];
    constructor(){
        // this data could be taken from RESTful Service
        let p1 = new Product(1, "OnePlus 5", "./assets/images/1.jpg", 37999, "Mobile");
        let p2 = new Product(2, "Moto G5 Plus", "./assets/images/2.jpg", 13999, "Mobile");
        let p3 = new Product(3, "Nokia 6", "./assets/images/3.jpg", 14999, "Mobile");
        let p4 = new Product(4, "Samsung Galaxy Note 8", "./assets/images/4.jpg", 67900, "Mobile");
        let p5 = new Product(5, "Apple Iphone 8", "./assets/images/5.jpg", 64000, "Mobile");
        let p6 = new Product(6, "Dell Laptop", "./assets/images/6.jpg", 52000, "Laptop");
        let p7 = new Product(7, "Canon DSLR", "./assets/images/7.jpg", 65000, "Camera");
        let p8 = new Product(8, "HP Printer", "./assets/images/8.jpg", 4000, "Printer");
        let p9 = new Product(9, "Apple iPad", "./assets/images/9.jpg", 24900, "Tab");
        this.products = new Array<Product>();
        this.products.push(p1);
        this.products.push(p2);
        this.products.push(p3);
        this.products.push(p4);
        this.products.push(p5);
        this.products.push(p6);
        this.products.push(p7);
        this.products.push(p8);
        this.products.push(p9);     
    }
    getProducts():Product[]{
        return this.products;
    }
}