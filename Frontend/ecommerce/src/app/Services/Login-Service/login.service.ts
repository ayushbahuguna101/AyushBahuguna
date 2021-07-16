import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/loginResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginBaseURL = environment.authenticationBaseURL;

  constructor(private http: HttpClient) { 
  }

  login(data: any): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.loginBaseURL}/signin`, data)
  }

}
