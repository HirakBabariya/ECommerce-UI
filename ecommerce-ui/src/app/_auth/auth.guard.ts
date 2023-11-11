import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { inject } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const userAuthService = inject(UserAuthService);
  const router = inject(Router);
  if(userAuthService.getToken() !== null){
    const role = route.data["roles"] as Array<String>;
    if(role){
      const match = userService.roleMatch(role);
      if(match){
        return true;
      }else{
        router.navigate(['/forbidden']);
        return false;
      }
    }
  }
  router.navigate(['/login']);
  return true;
};
