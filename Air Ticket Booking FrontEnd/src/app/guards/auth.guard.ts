import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { LoginService } from '../services/login.service';
export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(LoginService)
  const router = inject(Router);
  let token=service.getjwtToken();
  console.log(token);
  let roleValue!: string; 

  service.role$.subscribe((role) => {
  roleValue = role;
});
  if(token!="Bearer null" && (roleValue=='ROLE_ADMIN' || roleValue=='ROLE_USER'||roleValue=='ROLE_FLIGHTOWNER')){
     return true;
  }
  else{
  router.navigate(['login']);
  return false;
  }
};

