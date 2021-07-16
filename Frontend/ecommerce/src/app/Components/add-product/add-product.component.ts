import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/ProductService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private matSnackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(addForm: NgForm){
    console.log(addForm.value);
    
    this.productService.addProduct(addForm.value).subscribe(
      (response)=>{
        this.matSnackbar.open("Product has been added successfully", 'Dismiss', {duration: 2000})
        setTimeout( function(){ 
          location.reload(); 
        }, 2000);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }

    );
  }

}
