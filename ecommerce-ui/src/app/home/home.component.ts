import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
