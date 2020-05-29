export class Product{
    id:number;
    name:string;
    imgPath:string;
    price:number;
    category:string;

    constructor(id:number,name:string,imgPath:string,price:number,category:string){
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.price = price;
        this.category = category;
    }

     // or
     
    // constructor(
    //     private id:number,
    //     private name:string,
    //     private imgPath:string,
    //     private price:number,
    //     private category:string
    // ){}
}