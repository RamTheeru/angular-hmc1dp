import {Injectable} from '@angular/core';
import {Order} from './order.model';
import {OrderItem} from './order-item.model';
@Injectable()
export class OrderService {
ordData : Order;
ordItems : OrderItem[];
constructor(){}
}