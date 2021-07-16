import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login-Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  signupClick(){
    this.router.navigate(['/authenticate/signup']);
  }

  login(loginForm: NgForm): void {
    this.loginService.login(loginForm.value).subscribe(
      (response: any)=>{
  
        localStorage.setItem('id', response.id);
        localStorage.setItem('username', response.username);
        localStorage.setItem('name', response.name);
        localStorage.setItem('email', response.email);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('tokenType', response.tokenType);
        localStorage.setItem("roles", JSON.stringify(response.roles));
        
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
