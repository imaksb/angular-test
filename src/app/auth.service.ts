import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly username = 'Admin';
  private readonly password = '12345';

  login(user: string, pass: string): boolean {
    if (user === this.username && pass === this.password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
