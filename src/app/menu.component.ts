import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'menu',
    template: ` <div class="container">
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                Persistent Systems Ltd
            </a>
        </div>
        <ul class="nav navbar-nav">
              <li *ngFor="let item of menuItems">
                <!-- <a href="#">{{item}}</a> -->
                <a routerLink="{{item | lowercase }}">{{item}}</a>
              </li>          
        </ul>
    </nav>
</div>`,
    providers:[MenuService],//Register with Angular DI
                // Single Instance per Provider
    styles: [``]
})
export class MenuComponent{
    menuItems:string[];
    constructor(menuService:MenuService) { 
      //  this.menuItems = ['Login','Products','Cart Details','Mobiles'];
      this.menuItems = menuService.menuItems;
    }
}
