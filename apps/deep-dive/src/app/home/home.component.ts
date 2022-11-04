import { AuthService } from './../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  get userName(): string {
      return this.authService.userName;
  }

  login(): void {
      this.authService.login();
  }

  logout(): void {
      this.authService.logout();
  }
}

