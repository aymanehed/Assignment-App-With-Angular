import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router) {}
  closeMenu() {
    this.isMenuOpen = false;
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {}
  onLogout() {
    this.authService.logOut();
    this.router.navigate(["/"]);
  }
  isLoggedIn(): boolean{
    return this.authService.isLogged();
  }
  
}
