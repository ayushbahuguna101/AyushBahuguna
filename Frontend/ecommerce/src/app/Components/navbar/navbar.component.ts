import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public isLoggedIn : boolean = Boolean(localStorage.getItem('accessToken'));
  public isAdmin: boolean = Boolean(localStorage.getItem('username') === 'ayush');
  

  constructor(private router: Router, private productService: ProductService) {
    
  }

  ngOnInit(): void {
  }

  search(){

  }
  logout(){
    localStorage.clear()
    if(location.href === "http://localhost:4200/home"){
      location.reload();
    }else{
      this.router.navigate(['/home']);
    }
  }
  
}
