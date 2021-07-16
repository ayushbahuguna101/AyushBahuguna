import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/Services/Signup-Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router : Router) { }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm): void {
    this.signupService.signup(signupForm.value).subscribe(
      (response: any)=>{
        // Functionality after signup
        this.router.navigate(['/authenticate/login']);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

 
    
 }

}
