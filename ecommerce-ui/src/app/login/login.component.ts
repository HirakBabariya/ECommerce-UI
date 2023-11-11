import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private userService : UserService, private userAuthService : UserAuthService, private router : Router){}
  ngOnInit(): void {
  }
  loginData={
    username:'',
    password:''
  }

  login(){
    console.log("login form ::",this.loginData);
    this.userService.login(this.loginData).subscribe((res : any) => {
      console.log("Response :::",res);
      this.userAuthService.setToken(res.jwtToken);
      this.userAuthService.setRoles(res.user.roles);

      if(res.user.roles[0].name == 'Admin'){
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/user']);
      }
    }, 
    (err) => {
      console.log("Error Occured :::",err);
      
    })
    
  }
}
