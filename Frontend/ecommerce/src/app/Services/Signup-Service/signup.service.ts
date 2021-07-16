import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupResponse } from 'src/app/SignupResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupBaseURL = environment.authenticationBaseURL;
  
  constructor(private http: HttpClient) { }

  signup(data: any): Observable<SignupResponse>{
    return this.http.post<SignupResponse>(`${this.signupBaseURL}/signup`, data)
  }
}
