import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {applyMyStyle} from './MyDirective';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import{Hero} from './hero';
import {HEROES}from './mock-heroes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import {AppRoutingModule} from './app-routing.module';
import {OrderService} from './orders/shared/order.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,applyMyStyle, HeroesComponent, HeroDetailComponent, OrdersComponent, OrderComponent, OrderItemsComponent ],
  providers:[OrderService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
