import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CartService]// Single instance would get shared between addtocart and cartdetails
})
// Controller
export class AppComponent {
  // Model - Data Entity
  title = 'shopping-cart-application title';
  name:string = 'Sachin';

  clickHandler(evt){
    alert('Clicked ');
  }
  
  updateEventListener(args:any){
    alert('Event raised by child with value '+args);
    this.name =args;
  }
}
