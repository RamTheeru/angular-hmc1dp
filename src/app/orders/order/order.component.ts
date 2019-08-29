import { Component, OnInit } from '@angular/core';
import {OrderService} from '../shared/order.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private ordrServ : OrderService) { }

  ngOnInit() {
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.ordrServ.ordData={
        OrderID : null,
        OrderNo : Math.floor(100000+Math.random()*900000).toString(),
        CustomerID : 0,
        Pmethod : '',
        GTotal : null
    };
  
  console.log(this.ordrServ.ordData);
  }

}