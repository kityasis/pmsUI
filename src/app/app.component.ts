import { Component } from '@angular/core'
import { AuthService } from "src/app/auth.service";

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/" style="cursor : pointer">PMS APP</button>
    <button mat-button routerLink="/users">Users</button>
    <span style="flex: 1 1 auto"></span>
    <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
    <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
    <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  constructor(private authService:AuthService){}
  title = 'My app'; 
}
