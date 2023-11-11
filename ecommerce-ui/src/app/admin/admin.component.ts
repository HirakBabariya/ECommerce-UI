import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../_services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  msg:any;
  ngOnInit(): void {
    this.forAdmin();
   }
  constructor(private userService : UserService){}

  forAdmin(){
    this.userService.forAdmin().subscribe((res) => {
      console.log("For Admin Response ::", res);  
      this.msg = res;  
    },
    (error) => {
      console.log(error);
      
    })
  }
}
