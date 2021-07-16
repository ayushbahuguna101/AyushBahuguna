import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private productBaseURL = environment.ProductBaseURL;
  
  constructor(private http: HttpClient) { 

  }

  public getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productBaseURL}/category/${category}`);
  }
  
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productBaseURL}/allproducts`);
  }
  
  public deleteProductByName(productName: string): Observable<any> {
    productName = productName.split(' ').join('%20');        
    return this.http.delete<any>(`${this.productBaseURL}/deleteproduct/${productName}`);
  }

  public getProductById(productName: string): Observable<Product> {
    productName = productName.split(' ').join('%20'); 
    return this.http.get<Product>(`${this.productBaseURL}/getproduct/${productName}`);
  }

  public updateProduct(product: Product): Observable<any> {     
    return this.http.put<any>(`${this.productBaseURL}/updateproduct`, product);
  }

  public addProduct(product: Product): Observable<any> {     
    return this.http.post<any>(`${this.productBaseURL}/addproduct`, product);
  }
  
}
