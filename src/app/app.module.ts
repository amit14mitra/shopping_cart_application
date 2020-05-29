import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { MyMathsModule } from './mymaths.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import HelloComponent  from './hello.component';
import { GreetComponent } from './greet/greet.component';
import { AppIIComponent } from './appII.component';
import { MenuComponent } from './menu.component';
import { ProductsComponent } from './products.component';
import { AddToCartComponent } from './addtocart.component';
import { CartDetailsComponent } from './cartdetails.component';
import { LoginComponent } from './login.component';
import { HeaderComponent } from './header.component';
import { LoginService } from './login.service';
import { ProfileComponent } from './profile.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { ProductDetailsComponent } from './productdetails.component';
import { MyMathsFuncsComponent } from './mymathsfuncs.component';
import { PhotosComponent } from './photos.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PipeDemoComponent } from './pipedemo.component';
import { ReverseStrPipe } from './reversestr.pipe';
import { BeforeAfterPipe } from './beforeafter.pipe';



let routes:Routes = [
      {
        path:'', //default path
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:'greet', 
        component:GreetComponent
      },
      {
        path:'login', 
        component:LoginComponent
      },
      {
        path:'products', 
        component:ProductsComponent,
        children:[{
          path:'productdetails/:id',
          component:ProductDetailsComponent
        }]
      },
      {
        path:'cartdetails', 
        component:CartDetailsComponent
      },
      {
        path:'profile', 
        component:ProfileComponent
      },
      {
        path:'mymaths', 
        component:MyMathsFuncsComponent
      },
      {
        path:'photos', 
        component:PhotosComponent
      },
      {
        path:'signupform', 
        component:SignupformComponent
      },
      {
        path:'reactiveform', 
        component:ReactiveformComponent
      },
      {
        path:'pipedemo', 
        component:PipeDemoComponent
      },
      {
        path:'**',
        component:PageNotFoundComponent
      }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, // Created this manually so need to add this entry explicitly
    GreetComponent, // Automatically entry added - ng g c greet
    //AppIIComponent,
    MenuComponent,
    ProductsComponent,
    AddToCartComponent,
    CartDetailsComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    PhotosComponent,
    SignupformComponent,
    ReactiveformComponent,
    PipeDemoComponent,
    ReverseStrPipe,
    BeforeAfterPipe
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MyMathsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  // Bootstrapping multiple components
  //bootstrap: [AppComponent,AppIIComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
