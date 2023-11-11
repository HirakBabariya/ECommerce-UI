import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  msg : any;
  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.forUser();
   }

  
  forUser(){
    this.userService.forUser().subscribe((res) => {
      console.log("For User Response ::", res);
      this.msg = res;  
    },
    (error) => {
      console.log(error);
      
    })
  }
}
