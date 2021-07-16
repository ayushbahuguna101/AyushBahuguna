import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  public cartProducts : Product[] = [];
  public shippingCost : number = 50;
  public totalOfProducts : number = 0;
  public totalWithShipping : number = this.shippingCost;

  constructor() { 
    if(JSON.parse(String(localStorage.getItem('CartProducts')))){
      this.cartProducts = JSON.parse(String(localStorage.getItem('CartProducts')));

    }
    if(this.cartProducts.length > 0){
      for (var product of this.cartProducts) {
        this.totalOfProducts += product.price;
      }
      this.totalWithShipping = this.shippingCost + this.totalOfProducts;
    }
    
  }

  ngOnInit(): void {
  }

  deleteFromCart(product: Product){
    this.cartProducts.forEach((element,index)=>{
      if(element==product) this.cartProducts.splice(index,1);
   });
    localStorage.setItem("CartProducts",JSON.stringify(this.cartProducts));
    location.reload();
  }

  


}
