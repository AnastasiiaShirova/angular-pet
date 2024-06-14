import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../services/login.service";

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  if (loginService.userIsLogin === null) {
    return false;
  } else {
    return true;
  }
};
