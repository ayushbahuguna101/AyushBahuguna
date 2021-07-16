import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderProduct } from 'src/app/OrderProduct';
import { OrderService } from 'src/app/Services/OrderService/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  public orderedProducts : OrderProduct[] = [];
  constructor(private orderService: OrderService) { 
    this.getOrderedProductsByUsername(String(localStorage.getItem('username')));
  }

  ngOnInit(): void {
  }

  getOrderedProductsByUsername(username: string){
    this.orderService.fetchOrdersByUsername(username).subscribe(
      (response)=>{
        this.orderedProducts = response;        
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    );
  }

}
