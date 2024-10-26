import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../auth.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Ім\'я користувача або пароль введені не вірно';
    }
  }
}
