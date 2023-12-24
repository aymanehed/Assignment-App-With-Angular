import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService)
  let router = inject(Router)
  if(authService.isLogged() && authService.isAdmin()){
    console.log("Connecté en tant qu'admin");
    return true;
  }else if(authService.isLogged() && authService.isUser()){
    console.log("Pas connecté en tant qu'admin, redirection vers Accueil");
    return true;
  }else{
    console.log("Pas connecté, redirection vers login");
    router.navigate(['/login']);
    return false;
  }
};
