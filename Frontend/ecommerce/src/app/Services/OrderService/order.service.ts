import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProduct } from 'src/app/OrderProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderProductBaseURL = environment.orderProductBaseURL;

  constructor(private http: HttpClient) { }

  addOrderProduct(data: any): Observable<any>{
    return this.http.post<any>(`${this.orderProductBaseURL}/addhistory`, data);
  }

  fetchOrdersByUsername(username : string): Observable<OrderProduct[]>{
    return this.http.get<OrderProduct[]>(`${this.orderProductBaseURL}/gethistory/${username}`);
  }
}
