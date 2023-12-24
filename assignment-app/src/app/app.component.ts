import { Component,ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import { NavbarComponent } from './Menu/navbar/navbar.component';
import {MatDividerModule} from '@angular/material/divider'
import { SidebarComponent } from './Menu/sidebar/sidebar.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDividerModule, NavbarComponent,SidebarComponent,AssignmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [
    `
      body::-webkit-scrollbar {
        width: 0;
      }

      body {
        scrollbar-width: none;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Application de gestion des devoirs';
constructor(public authService: AuthService, private router: Router) {}

onLoginChange() {
  if(!this.authService.loggedIn) {
    this.authService.logIn();
  }
  else {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
}

