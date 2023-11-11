import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public userAuthService : UserAuthService, public router : Router, public userService : UserService) {}

  logout(){
    this.router.navigate(['/home'])
    this.userAuthService.clear();
  }


}
