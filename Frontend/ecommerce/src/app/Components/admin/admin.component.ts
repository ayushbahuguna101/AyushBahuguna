import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/ProductService/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public adminProducts : Product[] = [];

  constructor(private router:Router, private productService: ProductService, private matSnackbar: MatSnackBar) { 
    this.fetchAllProducts();
  }

  ngOnInit(): void {
  }
  onAddClick(){
    this.router.navigate(['/product/add']);
  }
  onEditClick(product:Product){
    this.router.navigate(['/product/edit',product.productsName]);
  }
  onDeleteClick(productName: string){
    this.productService.deleteProductByName(productName).subscribe(
      (response)=>{
        this.matSnackbar.open("Product has been removed successfully", 'Dismiss', {duration: 2000})
        setTimeout( function(){ 
          location.reload(); 
        }, 2000);
                  
      },
      (error: HttpErrorResponse)=>{
        this.matSnackbar.open("Product has been removed successfully", 'Dismiss', {duration: 2000})
        setTimeout( function(){ 
          location.reload(); 
        }, 2000);       
      }
    );
    
  }
  fetchAllProducts(){
    this.productService.getAllProducts().subscribe(
      (response)=>{
        this.adminProducts = response;        
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }



}
