import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/cartProduct';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/ProductService/product.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  public productsList: Product[] = [];
  public cartProducts: Product[] = [];
  public cartProduct : CartProduct ;

  constructor(private route: ActivatedRoute, private productService: ProductService, private matSnackbar: MatSnackBar) { 
    let category = '' + this.route.snapshot.paramMap.get('category');
    this.getProductsByCategory(category);
    this.cartProduct = ({} as CartProduct)
  }

  ngOnInit(): void {
  }

  public getProductsByCategory(category: string) :void{
    this.productService.getProductsByCategory(category).subscribe(
      (response: Product[]) => {
        this.productsList = response;        
      },
      (error: HttpErrorResponse) => {
        alert('Failed to connect to the backend. ' + error.message);
      }
    );
  }

  public addToCart(product: Product){
    console.log("addto cart");
    
    if(String(localStorage.getItem('username')) != 'null'){
      this.cartProduct.username = String(localStorage.getItem('username'));
      this.cartProduct.productsName = product.productsName;
      this.cartProduct.price = product.price;
      this.cartProduct.image = product.image;
      this.cartProduct.description = product.description;
      this.cartProduct.category = product.category;


      if(JSON.parse(String(localStorage.getItem('CartProducts'))) == null){
        // if cart is empty then store the cart product in the localstorage
        this.cartProducts.push(this.cartProduct);
        localStorage.setItem("CartProducts", JSON.stringify(this.cartProducts));
        this.cartProduct = ({} as CartProduct)
        this.matSnackbar.open("Product has been added to cart", 'Dismiss', {duration: 2000})
      }
      else{
        // if cart is not empty, fetch the extisting cart products and then push the cart product into it
        this.cartProducts = JSON.parse(String(localStorage.getItem('CartProducts')));
        this.cartProducts.push(this.cartProduct);
        
        localStorage.setItem("CartProducts", JSON.stringify(this.cartProducts));
        this.cartProduct = ({} as CartProduct)
        this.matSnackbar.open("Product has been added to cart", 'Dismiss', {duration: 2000})
        
      }
      
    }
    else{
      alert('Please Login First')
    }
  }
}
