import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/cartProduct';
import { OrderProduct } from 'src/app/OrderProduct';
import { Product } from 'src/app/product';
import { OrderService } from 'src/app/Services/OrderService/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public cartProducts : CartProduct[] = [];
  public orderProducts : OrderProduct[] = [];
  public orderProduct : OrderProduct;
  
  constructor(private router: Router, private orderService: OrderService, private matSnackbar: MatSnackBar) { 
    this.orderProduct = ({} as OrderProduct);
  }

  ngOnInit(): void {
  }
  onBackClick(){
    this.router.navigate(['/my-cart']);
  }
  onPrceedToPay(data: NgForm){
    this.cartProducts = JSON.parse(String(localStorage.getItem('CartProducts')));
    for (var product of this.cartProducts) {
      this.orderProduct.username = product.username;
      this.orderProduct.title = product.productsName;
      this.orderProduct.rating = 5;
      this.orderProduct.productid = 101;
      this.orderProduct.price = product.price;
      this.orderProduct.file = product.image;

      this.orderProducts.push(this.orderProduct);
      this.orderProduct = ({} as OrderProduct);
    }

    for(var oP of this.orderProducts){
      this.orderService.addOrderProduct(oP).subscribe(
        (response)=>{
          this.matSnackbar.open("Order placed successfully", 'Dismiss', {duration: 2000})
          this.router.navigate(['/my-orders']);
          localStorage.removeItem('CartProducts')
        },
        (error: HttpErrorResponse)=> {
          alert(error.message);
        }
      );
    }
  }
}
