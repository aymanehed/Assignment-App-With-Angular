import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Router} from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,MatIconModule,FormsModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  username : string = "";
  password : string = "";
  message:string = "";
  hide = true;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  } 
  
  onLogin() {
    console.log("====> ", this.username, this.password);
    this.authService.login(this.username, this.password);
    if (this.authService.isLogged()) {
      console.log("Login was successful.");
      this.message = "";
      this.router.navigate(["/AssignmentList"]);
    } else {
      this.message = "Username ou Mot de passe érroné.";
    }
    // Reset the form values
    this.username = '';
    this.password = '';
  }
}
