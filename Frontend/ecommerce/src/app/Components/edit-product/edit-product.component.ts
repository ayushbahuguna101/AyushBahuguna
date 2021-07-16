import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/ProductService/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public editProduct : Product = ({} as Product);

  constructor(private route: ActivatedRoute, private productService: ProductService, private matSnackbar: MatSnackBar) { 

    let productName = '' + this.route.snapshot.paramMap.get('productName');
    this.fetchProductById(productName);
  }

  ngOnInit(): void {
  }

  public updateProduct(product: Product){
    this.productService.updateProduct(product).subscribe(
      (response)=>{
        this.matSnackbar.open("Product has been updated", 'Dismiss', {duration: 2000})
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public fetchProductById(productName: string){
    this.productService.getProductById(productName).subscribe(
      (response)=>{
        this.editProduct = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


}
